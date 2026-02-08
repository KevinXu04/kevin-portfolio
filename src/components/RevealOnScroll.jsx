import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const RevealOnScroll = ({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  const offset = directions[direction] || directions.up;

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "visible" }}>
      <motion.div
        initial={{
          opacity: 0,
          ...offset,
          filter: "blur(6px)",
        }}
        animate={
          isInView
            ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
            : {}
        }
        transition={{
          duration: 0.7,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
