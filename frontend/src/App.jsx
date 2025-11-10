import React, { useState, useEffect } from "react";
import axios from "axios";
import MainHome from "./Home/MainHome";
import Course from "./Components/Course";
import About from "./Components/about";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import ContactUs from "./Components/Contact";
import Profile from "./Components/Profile";
import LiveSession from "./page/Booksession";
import Login from "./Components/Login";
import Terms from "./page/terms";
import PrivacyPolicy from "./page/privacyandpolicy";
import Quiz from "./Components/Quiz";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Leaderboard from "./page/Leaderboard";

function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // ⬅️ NEW

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await axios.get("http://localhost:4001/islogin", {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoadingUser(false); // ⬅️ Stop loading
      }
    }
    fetchUserInfo();
  }, []);

  // 🕓 Show loading screen or nothing until user state is known
  if (loadingUser) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl bg-gray-900">
        Checking login status...
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />

        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/MainHome" element={<MainHome />} />
          <Route path="/course" element={<ProtectedRoute user={user}> <Course /> </ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route
            path="/Contact"
            element={<ProtectedRoute user={user}> <ContactUs /> </ProtectedRoute>}
          />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/condition" element={<PrivacyPolicy />} />
          <Route
            path="/Quiz"
            element={<ProtectedRoute user={user}> <Quiz /> </ProtectedRoute>}
          />
          <Route
            path="/book"
            element={<ProtectedRoute user={user}> <LiveSession /> </ProtectedRoute>}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute user={user}> <Profile user={user} setUser={setUser} /> </ProtectedRoute>}
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>

        <Toaster />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
