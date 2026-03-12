import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Flame, Users, Zap, Target } from "lucide-react";

const programs = [
  {
    icon: Target,
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your goals. Custom meal plans, progressive overload programming, and accountability.",
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Build raw strength with powerlifting-inspired programs. Squat, bench, deadlift — master the fundamentals.",
  },
  {
    icon: Flame,
    title: "Fat Loss Programs",
    desc: "High-intensity metabolic training combined with nutrition coaching to torch fat and reveal lean muscle.",
  },
  {
    icon: Users,
    title: "Group Workouts",
    desc: "Energy-packed group sessions that push you harder. Strength circuits, HIIT, and functional challenges.",
  },
  {
    icon: Zap,
    title: "Functional Fitness",
    desc: "Train movement patterns that translate to real life. Mobility, stability, power, and endurance combined.",
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-24 lg:py-32 bg-card relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Programs</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <prog.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {prog.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{prog.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-neon-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-b-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
