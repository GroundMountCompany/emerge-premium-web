export const metadata = {
  title: "Emerge Premium Studios – Free AI Video Idea Service",
  description: "Generate My Free Concept Video. We'll make it for FREE — watermark included. Pay only if you love it.",
};

import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import VideoRequestForm from "@/components/VideoRequestForm";
import Faqs from "@/components/Faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoGallery />
      <About />
      <HowItWorks />
      <VideoRequestForm />
      <Faqs />
    </>
  );
}
