import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Incognito Fitness Studio interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-display text-sm lg:text-base font-semibold tracking-[0.3em] uppercase mb-4 lg:mb-6">
              Koregaon Park, Pune
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.9] mb-6 lg:mb-8"
          >
            <span className="block text-foreground">TRAIN</span>
            <span className="block gradient-text text-glow">DIFFERENT.</span>
            <span className="block text-foreground">STAY</span>
            <span className="block gradient-text text-glow">INCOGNITO.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg lg:text-xl max-w-xl mb-8 lg:mb-12 leading-relaxed"
          >
            Premium strength & functional training studio. Where results speak louder than words.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#trial"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-base font-bold tracking-wider uppercase hover:opacity-90 transition-all box-glow hover:box-glow-strong text-center"
            >
              Start Your Transformation
            </a>
            <a
              href="#programs"
              className="border border-border text-foreground px-8 py-4 rounded-sm text-base font-semibold tracking-wider uppercase hover:border-primary hover:text-primary transition-all text-center"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
