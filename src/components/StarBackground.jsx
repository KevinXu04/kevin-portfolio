import { useMemo } from "react";
import { motion } from "framer-motion";

function Star({ x, y, size, delay, duration }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={{
        opacity: [0, 0.8, 0.3, 0.9, 0],
        scale: [0.8, 1.2, 0.9, 1.1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function ShootingStar({ delay, angle = 35 }) {
  const startX = useMemo(() => 10 + Math.random() * 60, []);
  const startY = useMemo(() => Math.random() * 40, []);
  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad) * 170;
  const dy = Math.sin(rad) * 170;

  return (
    <motion.div
      className="absolute w-px h-px"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        rotate: `${angle}deg`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        x: [0, dx],
        y: [0, dy],
      }}
      transition={{
        duration: 1.2,
        delay,
        repeat: Infinity,
        repeatDelay: 8 + Math.random() * 12,
        ease: "easeOut",
      }}
    >
      <div className="w-14 h-px bg-gradient-to-l from-white/80 via-white/30 to-transparent rounded-full" />
    </motion.div>
  );
}

export const StarBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.05 ? 4 : Math.random() < 0.15 ? 3 : Math.random() < 0.4 ? 2 : 1,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient mesh blobs */}
      <div className="gradient-mesh-blob gradient-mesh-1" />
      <div className="gradient-mesh-blob gradient-mesh-2" />
      <div className="gradient-mesh-blob gradient-mesh-3" />
      <div className="gradient-mesh-blob gradient-mesh-4" />

      {/* Stars */}
      {stars.map((s) => (
        <Star key={s.id} {...s} />
      ))}

      {/* Shooting stars */}
      <ShootingStar delay={1} angle={30} />
      <ShootingStar delay={4} angle={50} />
      <ShootingStar delay={8} angle={20} />
      <ShootingStar delay={11} angle={40} />
      <ShootingStar delay={15} angle={55} />
      <ShootingStar delay={18} angle={15} />
      <ShootingStar delay={22} angle={35} />
      <ShootingStar delay={25} angle={60} />
    </div>
  );
};
