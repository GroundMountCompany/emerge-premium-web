"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does this actually work?",
    answer: "You send us your idea. We create an AI video with a watermark. You only pay if you love it.",
  },
  {
    question: "How long does it take to get my video?",
    answer: "Most 15-second videos are delivered within 48–72 hours.",
  },
  {
    question: "What kind of videos can you make?",
    answer: "We specialize in cinematic, punchy, short-form videos—great for ads, product demos, intros, and more.",
  },
  {
    question: "Can I request changes?",
    answer: "Yes. Once you approve the concept, we offer one round of revisions before final delivery.",
  },
  {
    question: "Can I use this for my business?",
    answer: "Absolutely. Many clients use our videos for Instagram, TikTok, landing pages, and paid ads.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fdf6f1] py-16 px-6 text-[#ff5c1a]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold tracking-tight mb-2" style={{ fontFamily: "cursive" }}>
          FAQ's
        </h2>
        <p className="text-lg font-semibold mb-8">Have questions?</p>
        <p className="text-[#8a4b32] mb-10">
          We've got answers. Explore our most frequently asked questions to guide you through what we offer.
        </p>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#fff1e8] p-4 rounded-xl cursor-pointer hover:bg-[#ffe4d6] transition"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center font-medium">
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-sm text-[#8a4b32]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 