"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer border={true} />
    </>
  );
}
