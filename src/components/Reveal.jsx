import { motion, useReducedMotion } from "motion/react";

// Fades content in once as it enters the viewport, so each section reads in order.
// With prefers-reduced-motion the content is simply there, without fade or movement.
export const Reveal = ({ children, delay = 0, className, as = "div" }) => {
  const reduce = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
};
