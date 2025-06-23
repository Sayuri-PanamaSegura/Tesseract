// src/components/movimiento/MotionFadeIn.jsx
import { motion } from "framer-motion";

export default function MotionFadeIn({ children, direction = "up", delay = 0 }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  return (
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.1 }} // antes estaba solo `once: true`
  variants={variants}
>
  {children}
</motion.div>
  );
}

