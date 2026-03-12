import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Arjun Kapoor",
    specialty: "Strength & Powerlifting",
    experience: "8+ Years",
    image: trainer1,
    bio: "NSCA Certified. Competitive powerlifter turned coach. Specializes in building raw strength.",
  },
  {
    name: "Priya Sharma",
    specialty: "Functional & HIIT",
    experience: "6+ Years",
    image: trainer2,
    bio: "CrossFit L2 Trainer. Passionate about functional movement and high-intensity training.",
  },
  {
    name: "Vikram Singh",
    specialty: "Body Transformation",
    experience: "10+ Years",
    image: trainer3,
    bio: "Certified nutritionist & trainer. Over 200 successful body transformations.",
  },
];

const TrainersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="py-24 lg:py-32 noise-bg">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Meet the Team
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Trainers</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-5 aspect-[3/4]">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.specialty} trainer at Incognito Fitness`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors">
                    <Instagram className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                {trainer.specialty}
              </span>
              <h3 className="font-display text-xl font-bold mt-1 mb-1">{trainer.name}</h3>
              <p className="text-muted-foreground text-sm">{trainer.bio}</p>
              <span className="text-xs text-muted-foreground mt-2 block">{trainer.experience}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
