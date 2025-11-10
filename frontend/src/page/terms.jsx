import React from "react";

export default function Terms() {
  return (
    <div className="bg-[#0f172a] text-gray-200 min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Terms & <span className="text-indigo-400">Conditions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read these terms carefully before using LearnFromLife. By accessing this website, you agree to comply with these terms.
          </p>
        </div>

        {/* Section 1 - Acceptance */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By using LearnFromLife, you agree to these Terms and Conditions, along with our Privacy Policy. If you do not agree, please do not use our website.
          </p>
        </section>

        {/* Section 2 - Use of Website */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">2. Use of the Website</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Use the website only for lawful purposes.</li>
            <li>Do not misuse the website or interfere with its functionality.</li>
            <li>Do not upload or share content that is illegal, harmful, or offensive.</li>
          </ul>
        </section>

        {/* Section 3 - Content */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">3. Content</h2>
          <p className="text-gray-300 leading-relaxed">
            All content on LearnFromLife is for informational and inspirational purposes. We do not guarantee the accuracy or reliability of any content, and you are responsible for how you use it.
          </p>
        </section>

        {/* Section 4 - User Accounts */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">4. User Accounts</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Some features may require registration.</li>
            <li>Keep your login credentials secure.</li>
            <li>Provide accurate and up-to-date information when registering.</li>
          </ul>
        </section>

        {/* Section 5 - Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">5. Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed">
            All content, images, and materials belong to LearnFromLife or its creators. You may not reproduce or distribute them without permission.
          </p>
        </section>

        {/* Section 6 - Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">6. Disclaimer & Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            LearnFromLife provides content for inspiration only. We are not liable for any direct or indirect damages arising from use of this website.
          </p>
        </section>

        {/* Section 7 - Modifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">7. Modifications to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
          </p>
        </section>

        {/* Section 8 - Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">8. Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These terms are governed by the laws of [Your Country / State]. Any disputes will be handled in the courts of [Your Country / State].
          </p>
        </section>

        {/* Section 9 - Contact */}
        <section className="bg-gray-900 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            If you have any questions about these terms, contact us at:
            <br />
            <strong>Email:</strong> support@learnfromlife.com
            <br />
            <strong>Website:</strong> www.learnfromlife.com
          </p>
        </section>

      </div>
    </div>
  );
}
