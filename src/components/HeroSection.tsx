import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      className="relative h-screen overflow-hidden bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
      <img
        src="/hero-img.jpg"
        alt="BPATC campus"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl text-white">
          <motion.h1 initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }} className="text-6xl font-semibold md:text-6xl">Welcome To <span className="font-black text-[#0069e1]">BPATC</span></motion.h1>
          <motion.p initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }} className="mt-4 text-xl md:text-xl text-slate-100/90 font-[450]">
            Inspiring learning and leadership through community, creativity, and excellence.
          </motion.p>
        </div>
      </div>
      {/* Jumping Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm">Explore More</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;