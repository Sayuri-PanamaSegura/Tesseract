// src/components/GrowCircleIndustria.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GrowCircleIndustria = ({ imagen, titulo, alt }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-3  backdrop-blur-sm p-6 rounded-2xl transition-transform duration-300 hover:scale-105"
    >
      <img src={imagen} alt={alt || titulo} className="h-16 w-16 object-contain" />
      <p className="text-sm font-medium font-poppins text-white">{titulo}</p>
    </motion.div>
  );
};

export default GrowCircleIndustria;
