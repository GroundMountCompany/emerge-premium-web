'use client';

import { useState } from 'react';

export default function VideoIdeaForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, we'll just show success state
    // Later this will send to bert@groundmounts.com
    setIsSubmitted(true);
    
    // Optional: Add confetti animation here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="video-idea-form" className="bg-[#fff] py-24 px-6 md:px-12 text-center text-[#333]">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-[#FF7A35] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-[#FF7A35]">Idea Submitted!</h2>
          <p className="text-xl mb-8">
            We'll get back to you within 24 hours with your free video. Check your email!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#FF7A35] hover:bg-[#e6692f] text-white px-8 py-4 rounded-full text-lg shadow-md transition"
            style={{ color: 'white' }}
          >
            Generate My Free Concept Video
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="video-idea-form" className="bg-[#fff] py-24 px-6 md:px-12 text-center text-[#333]">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Tell Us Your Video Idea</h2>
      <p className="text-xl mb-12 max-w-3xl mx-auto">
        Describe the video you've been thinking about. We'll create it for FREE with a watermark. Pay only if you love it.
      </p>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid gap-6 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7A35] transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7A35] transition"
          />
          <textarea
            name="idea"
            placeholder="Describe the video you've been thinking about..."
            value={formData.idea}
            onChange={handleChange}
            required
            rows={6}
            className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7A35] transition resize-none"
          />
        </div>
        
        <button
          type="submit"
          className="bg-[#FF7A35] hover:bg-[#e6692f] text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition transform hover:scale-105"
          style={{ color: 'white' }}
        >
          Generate My Free Concept Video
        </button>
      </form>
    </section>
  );
} 