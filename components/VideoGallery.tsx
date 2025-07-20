"use client";
import { useState, useEffect } from "react";

const videos = [
  { url: "/images/dalmatianhorse.mp4" },
  { url: "/images/floatingduck.mp4" },
  { url: "/images/jellokeyboard.mp4" },
  { url: "/images/audiskrt.mp4" },
  { url: "/images/purplegorilla.mp4" },
  { url: "/images/deadpooljoker.mp4" },
  { url: "/images/chromeknight.mp4" },
  { url: "/images/cuttingjello.mp4" },
  { url: "/images/sharkscutting.mp4" },
  { url: "/images/matrixbear.mp4" },
  { url: "/images/racoonscroll.mp4" },
  { url: "/images/drillingholes.mp4" },
  { url: "/images/bubblefloat.mp4" },
  { url: "/images/corgirainbow.mp4" },
  { url: "/images/businesstiger.mp4" },
  { url: "/images/frogdance.mp4" },
];

export default function VideoGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch/mobile
    const checkMobile = () => {
      const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const isMobileUserAgent = /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(isTouchDevice || isMobileUserAgent);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="gallery" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-12">
      {videos.map((video, i) => (
        <div key={i} className="relative w-full max-w-[800px] mx-auto aspect-video rounded-xl overflow-hidden">
          <div className="video-wrapper" style={{ position: 'relative' }}>
            <video
              src={video.url}
              poster={video.url}
              preload="metadata"
              muted
              playsInline
              loop
              autoPlay={false}
              controls={false}
              className={`w-full h-full object-cover rounded-xl transform scale-100 hover:scale-[1.02] transition-transform duration-300 ${isMobile ? 'opacity-100' : ''}`}
              style={{ 
                zIndex: 1, 
                position: 'relative',
                opacity: isMobile ? 1 : undefined,
                display: isMobile ? 'block' : undefined
              }}
              onLoadedMetadata={(e) => {
                const vid = e.currentTarget;
                vid.pause();
                vid.currentTime = 0;
              }}
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
              onTouchStart={(e) => {
                const video = e.currentTarget;
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
} 