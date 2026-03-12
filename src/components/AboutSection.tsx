import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Dumbbell, Target, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Active Members" },
  { icon: Trophy, value: 200, suffix: "+", label: "Transformations" },
  { icon: Dumbbell, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Target, value: 15, suffix: "+", label: "Expert Trainers" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl lg:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative noise-bg">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Not Just a Gym.
              <br />
              <span className="gradient-text">A Training Ground.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Incognito Fitness Studio is a premium training space in the heart of Koregaon Park, Pune. 
              We focus on what matters — strength training, functional fitness, personal training, 
              and body transformation programs designed for real results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No gimmicks, no shortcuts. Just science-backed training methods, world-class equipment, 
              and trainers who push you beyond your limits. Whether you're a beginner or an athlete, 
              we build programs that fit your goals.
            </p>
            <div className="flex gap-4">
              <div className="w-20 h-1 bg-primary rounded-full" />
              <div className="w-10 h-1 bg-primary/40 rounded-full" />
              <div className="w-5 h-1 bg-primary/20 rounded-full" />
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 lg:p-8 hover:border-primary/50 transition-colors group"
              >
                <stat.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
