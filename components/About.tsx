'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const features = [
  { icon: '🧠', label: 'AI Ideas' },
  { icon: '🎬', label: 'Cinematic' },
  { icon: '🔥', label: 'Viral' },
  { icon: '⚡', label: 'Fast' },
  { icon: '🤖', label: 'No Crew' },
  { icon: '🚀', label: 'Big Impact' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative w-full px-6 py-32 bg-gradient-to-b from-[#0d0d0d] to-black text-white text-center overflow-hidden"
    >
      {/* Background Emblem */}
      <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Image
          src="/images/favicon.png"
          alt="Floating Emblem"
          width={320}
          height={320}
        />
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          AI videos that <span className="text-orange-500">break reality.</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          No crews. No waiting months. Just scroll-stopping content, delivered at lightspeed.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-6"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {features.map(({ icon, label }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center transition-transform hover:scale-110 duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="text-5xl mb-3">{icon}</span>
              <span className="text-lg font-medium text-gray-300">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 