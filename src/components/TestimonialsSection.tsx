import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    text: "Lost 18kgs in 4 months. The trainers here don't just count reps — they build discipline. Incognito changed my life.",
    role: "Software Engineer",
  },
  {
    name: "Sneha D.",
    text: "Best gym in Koregaon Park, hands down. The vibe, the equipment, the community — everything is top-notch. Felt results in 3 weeks.",
    role: "Marketing Manager",
  },
  {
    name: "Aman K.",
    text: "I've trained in gyms across Pune and Mumbai. Incognito is different. The personal attention and programming quality is unmatched.",
    role: "Entrepreneur",
  },
  {
    name: "Pooja R.",
    text: "As a woman, I feel completely comfortable training here. The functional fitness program pushed me beyond what I thought possible.",
    role: "Doctor",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            What Members <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="w-12 h-12 text-primary/20 mb-6 mx-auto" />
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-lg lg:text-2xl text-foreground leading-relaxed mb-8 font-light italic">
              "{testimonials[current].text}"
            </p>
            <p className="font-display font-bold text-lg">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
