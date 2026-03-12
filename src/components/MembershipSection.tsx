import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹3,500",
    period: "/month",
    features: [
      "Full gym access",
      "Locker & amenities",
      "Group class access",
      "Basic fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    price: "₹9,000",
    period: "/3 months",
    features: [
      "Everything in Monthly",
      "Nutrition consultation",
      "Progress tracking",
      "1 PT session/month",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Personal Training",
    price: "₹8,000",
    period: "/month",
    features: [
      "12 PT sessions/month",
      "Custom workout plan",
      "Diet plan included",
      "Weekly body analysis",
      "WhatsApp support",
    ],
    popular: false,
  },
];

const MembershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Membership <span className="gradient-text">Plans</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-lg p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary bg-background box-glow"
                  : "border-border bg-background hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="font-display text-lg font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#trial"
                className={`block text-center py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
