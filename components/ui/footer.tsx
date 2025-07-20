import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto space-y-6 md:space-y-0">
        <div className="flex items-center space-x-3">
          <Image src="/images/favicon.png" alt="Emerge Logo" width={24} height={24} />
          <span className="text-sm">© {new Date().getFullYear()} Emerge Premium Studios. All rights reserved.</span>
        </div>

        <div className="flex space-x-6 text-orange-500 text-lg">
          <a href="mailto:info@emergepremium.com" className="hover:text-white transition">Email</a>
          <a href="https://facebook.com/emergepremium" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a>
          <a href="https://www.instagram.com/emergepremium" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
          <a href="https://www.tiktok.com/@emergepremium" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
