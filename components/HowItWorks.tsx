'use client';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F8F4F0] text-[#333]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FF7A35] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Generate My Free Concept Video</h3>
            <p className="text-lg text-gray-600">
              Tell us about the video you want — product demo, skit, story, ad, anything goes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FF7A35] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">We Make It — Free, with Watermark</h3>
            <p className="text-lg text-gray-600">
              We create your video using AI and send it to you with a watermark included.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FF7A35] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Pay Only If You Love It</h3>
            <p className="text-lg text-gray-600">
              If you love the video, pay for the watermark-free version. No pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 