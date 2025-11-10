import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0f172a] text-gray-200 min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Privacy <span className="text-indigo-400">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            LearnFromLife respects your privacy. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Section 1 - Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Personal information you provide (name, email, etc.).</li>
            <li>Usage information: pages visited, time spent on content, clicks.</li>
            <li>Cookies and analytics data to improve your experience.</li>
          </ul>
        </section>

        {/* Section 2 - How We Use Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">2. How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>To provide and improve our website and content.</li>
            <li>To send updates or newsletters if you opt-in.</li>
            <li>To analyze trends, track usage, and enhance user experience.</li>
          </ul>
        </section>

        {/* Section 3 - Sharing Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">3. Sharing Information</h2>
          <p className="text-gray-300 leading-relaxed">
            We do not sell or share your personal information with third parties for marketing purposes. 
            We may share data with trusted service providers who help run the website, subject to confidentiality agreements.
          </p>
        </section>

        {/* Section 4 - Cookies & Tracking */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">4. Cookies & Tracking</h2>
          <p className="text-gray-300 leading-relaxed">
            We may use cookies to enhance functionality, analytics, and personalize your experience. 
            You can disable cookies in your browser, but some features may not work properly.
          </p>
        </section>

        {/* Section 5 - Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">5. Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement reasonable security measures to protect your personal information. 
            However, no system can guarantee 100% security, so we cannot ensure absolute protection.
          </p>
        </section>

        {/* Section 6 - Children’s Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">6. Children’s Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            LearnFromLife is not intended for children under 13 (or your region’s legal age). 
            We do not knowingly collect information from children.
          </p>
        </section>

        {/* Section 7 - User Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">7. User Rights</h2>
          <p className="text-gray-300 leading-relaxed">
            Users may request access to their data, correction, or deletion by contacting us at any time.
          </p>
        </section>

        {/* Section 8 - Changes to Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">8. Changes to Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this policy periodically. Changes will be posted here with the effective date. 
            Continued use of LearnFromLife indicates acceptance of any changes.
          </p>
        </section>

        {/* Section 9 - Contact */}
        <section className="bg-gray-900 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            For any questions or concerns about this Privacy Policy, contact us at:
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
