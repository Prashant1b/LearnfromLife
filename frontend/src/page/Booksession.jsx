import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function LiveSession() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axios.get("http://localhost:4001/Instructor");
        setInstructors(res.data);
      } catch (err) {
        console.error("Error fetching instructors:", err);
        toast.error("Failed to load instructors!");
      } finally {
        setLoading(false);
      }
    };
    fetchInstructors();
  }, []);

  const handleOpenModal = (instructor) => {
    setSelectedInstructor(instructor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setFormData({ name: "", email: "", topic: "" });
    setShowModal(false);
  };

  // ✅ Handle payment + booking
  const handleBookAndPay = async () => {
    if (!formData.name || !formData.email || !formData.topic) {
      toast.error("Please fill your name, email & topic before booking!");
      return;
    }

    const instructor = selectedInstructor;
    try {
      const amount = Number(instructor.fees.replace(/[^\d]/g, ""));
      const orderRes = await axios.post("http://localhost:4001/payment/order", { amount });

      if (!orderRes.data?.id) {
        toast.error("Failed to create Razorpay order!");
        return;
      }

      const order = orderRes.data;
      const options = {
        key: "rzp_test_hBkSrG8ChIFuFe",
        amount: order.amount,
        currency: order.currency,
        name: "Learn From Life",
        description: `Booking for ${instructor.name}`,
        order_id: order.id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post("http://localhost:4001/payment/verify", response);

            if (verifyRes.data.success) {
              toast.success("✅ Payment Successful!");

              // ✅ Save booking + transaction ID
              await axios.post("http://localhost:4001/book", {
                name: formData.name,
                email: formData.email,
                topic: formData.topic,
                instructor: instructor.name,
                fees: instructor.fees,
                transactionId: response.razorpay_payment_id, // 🧾 transaction id save
              });

              toast.success(`🎉 Session booked successfully Check Your Mail Shortly ! Transaction ID: ${response.razorpay_payment_id}`);
              handleCloseModal();
            } else {
              toast.error("❌ Payment verification failed!");
            }
          } catch (err) {
            console.error("Booking error:", err);
            toast.error("Booking failed after payment!");
          }
        },
        theme: { color: "#2563EB" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
      razor.on("payment.failed", () => toast.error("Payment failed!"));
    } catch (err) {
      console.error(err);
      toast.error("Payment failed!");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <p className="text-lg text-gray-300">Loading instructors...</p>
      </div>
    );

  return (
    <div className="min-h-screen py-10 bg-gray-900 text-gray-100 relative">
      <Toaster />
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Live Sessions
      </h1>

      {/* Instructor Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.length > 0 ? (
          instructors.map((inst) => (
            <div
              key={inst._id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 flex flex-col"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-white">{inst.name}</h2>
                <p className="text-gray-400 mt-2 flex-grow">{inst.experience}</p>
                <p className="text-lg font-semibold text-green-400 mt-3">
                  Fees: ₹{inst.fees}
                </p>
                <button
                  onClick={() => handleOpenModal(inst)}
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book & Pay
                </button>
              </div>
            </div>

          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No instructors available right now.
          </p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold text-center mb-4 text-blue-400">
              Enter Your Details
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className="w-full mb-3 bg-gray-900 border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className="w-full mb-3 bg-gray-900 border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="topic"
              placeholder="Your Topic / Question"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              className="w-full bg-gray-900 border border-gray-700 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              rows="3"
            ></textarea>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleBookAndPay}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Pay Now
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveSession;
