"use client";
import { useState } from "react";

const videos = [
  { url: "/images/dalmatianhorse.mp4", thumbnail: "/images/dalmatianhorse.jpg" },
  { url: "/images/floatingduck.mp4", thumbnail: "/images/floatingduck.jpg" },
  { url: "/images/jellokeyboard.mp4", thumbnail: "/images/jellokeyboard.jpg" },
  { url: "/images/audiskrt.mp4", thumbnail: "/images/audiskrt.jpg" },
  { url: "/images/purplegorilla.mp4", thumbnail: "/images/purplegorilla.jpg" },
  { url: "/images/deadpooljoker.mp4", thumbnail: "/images/deadpooljoker.jpg" },
  { url: "/images/chromeknight.mp4", thumbnail: "/images/chromeknight.jpg" },
  { url: "/images/cuttingjello.mp4", thumbnail: "/images/cuttingjello.jpg" },
  { url: "/images/sharkscutting.mp4", thumbnail: "/images/sharkscutting.jpg" },
  { url: "/images/matrixbear.mp4", thumbnail: "/images/matrixbear.jpg" },
  { url: "/images/racoonscroll.mp4", thumbnail: "/images/racoonscroll.jpg" },
  { url: "/images/drillingholes.mp4", thumbnail: "/images/drillingholes.jpg" },
  { url: "/images/bubblefloat.mp4", thumbnail: "/images/bubblefloat.jpg" },
  { url: "/images/corgirainbow.mp4", thumbnail: "/images/corgirainbow.jpg" },
  { url: "/images/businesstiger.mp4", thumbnail: "/images/businesstiger.jpg" },
  { url: "/images/frogdance.mp4", thumbnail: "/images/frogdance.jpg" },
];

export default function VideoGallery() {
  return (
    <section id="gallery" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-12">
      {videos.map((video, i) => (
        <div key={i} className="relative w-full max-w-[800px] mx-auto aspect-video rounded-xl overflow-hidden">
          <video
            src={video.url}
            poster={video.thumbnail}
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl transform scale-100 hover:scale-[1.02] transition-transform duration-300"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
        </div>
      ))}
    </section>
  );
} 