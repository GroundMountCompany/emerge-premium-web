'use client';

type FooterProps = {
  border?: boolean;
};

export default function Footer({ border = false }: FooterProps) {
  return (
    <footer id="contact" className={`px-6 py-24 max-w-4xl mx-auto ${border ? "border-t border-gray-200" : ""}`} style={{ backgroundColor: 'var(--color-bg)' }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center uppercase text-[#FF7A35]">
        Submit Your Video Idea
      </h2>
      <form className="grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-b border-gray-300 bg-transparent py-3 px-1 text-lg focus:outline-none focus:border-[#FF7A35]"
          style={{ color: 'var(--color-text)' }}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border-b border-gray-300 bg-transparent py-3 px-1 text-lg focus:outline-none focus:border-[#FF7A35]"
          style={{ color: 'var(--color-text)' }}
        />
        <textarea
          placeholder="Describe your video idea. What do you want us to make?"
          rows={4}
          className="w-full border-b border-gray-300 bg-transparent py-3 px-1 text-lg focus:outline-none focus:border-[#FF7A35]"
          style={{ color: 'var(--color-text)' }}
        ></textarea>
        <button
          type="submit"
          className="w-fit px-6 py-3 bg-[#FF7A35] text-white rounded-lg hover:bg-[#e6692f] transition"
        >
          Generate My Free Concept Video
        </button>
      </form>
      <div className="mt-16 text-center text-sm opacity-60" style={{ color: 'var(--color-text)' }}>
        &copy; {new Date().getFullYear()} Emerge Premium Studios. All rights reserved.
      </div>
    </footer>
  );
} 