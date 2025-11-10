import React from "react";

export default function About() {
  return (
    <div className="bg-[#0f172a] text-gray-200 min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            About <span className="text-indigo-400">LearnFromLife</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real stories. Real experiences. Real growth — because Life is the best teacher.
          </p>
        </div>

        {/* Section 1 - Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">🌱 Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>LearnFromLife</strong> is a storytelling platform that brings together real-life
            experiences, struggles, and lessons from people across different walks of life. We believe
            learning happens every day — through experiences, failures, and the courage to rise again.
          </p>
        </section>

        {/* Section 2 - Our Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">🎯 Our Mission</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Inspire individuals through real human stories and personal journeys.</li>
            <li>Encourage self-growth, motivation, and lifelong learning beyond classrooms.</li>
            <li>Build a positive space where stories of courage and failure teach valuable lessons.</li>
          </ul>
        </section>

        {/* Section 3 - What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">💡 What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Inspiring Stories:</strong> Real experiences of people who turned challenges into strength.</li>
            <li><strong>Motivational Reads:</strong> Short, impactful stories that make you reflect and grow.</li>
            <li><strong>Free Access:</strong> All stories and content are freely available for readers.</li>
            <li><strong>Community Impact:</strong> A growing group of people who believe in learning from real life.</li>
          </ul>
        </section>

        {/* Section 4 - Vision */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">🌏 Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            Our vision is to create a world where stories become the bridge between people and progress.
            Every person has something valuable to share — and <strong>LearnFromLife</strong> aims to
            be the place where those lessons find their way to someone who needs them.
          </p>
        </section>

        {/* Section 5 - Future Scope */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">🚀 Future Goals</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Launch a story submission feature where anyone can share their own experiences.</li>
            <li>Introduce a podcast & video section for more interactive learning.</li>
            <li>Build a global community of storytellers and learners.</li>
            <li>Expand categories — from career journeys to personal transformations.</li>
          </ul>
        </section>

        {/* Legal Section */}
        <section className="bg-gray-900 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">⚖️ Legal & Terms</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
            <li><strong>Copyright:</strong> All written and visual content on LearnFromLife is protected and belongs to its creators.</li>
            <li><strong>Usage:</strong> You may read, share, or quote stories with proper credit to the source.</li>
            <li><strong>Content Responsibility:</strong> All stories are based on personal experiences or interpretations shared by contributors.</li>
            <li><strong>Disclaimer:</strong> LearnFromLife provides content for inspiration and self-learning only. We do not guarantee factual accuracy for user-submitted stories.</li>
          </ul>
        </section>

       
      </div>
    </div>
  );
}
