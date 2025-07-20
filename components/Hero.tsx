'use client';

import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-[#F8F4F0] text-[#333]">
      <div className="container mx-auto px-4">
        <Image
          src="/images/emerge-premium-logo.png"
          alt="Emerge Premium Studios"
          width={300}
          height={100}
          priority
          className="mx-auto mb-6"
        />
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          We make AI videos unbound by the laws of physics.
        </p>
        <button
          onClick={() => {
            document.getElementById("video-idea-form")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 px-6 py-3 bg-[#FF7A35] text-white rounded-md text-lg font-semibold hover:bg-[#e6692f] transition"
          style={{ color: 'white' }}
        >
          Generate My Free Concept Video
        </button>
      </div>
    </section>
  );
} 