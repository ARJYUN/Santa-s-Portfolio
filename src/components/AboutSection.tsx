import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gift, Clock, Heart, Sparkles } from 'lucide-react';

const stats = [
  { icon: Clock, value: "1750+", label: "Years of Experience", color: "text-christmas-red" },
  { icon: Gift, value: "8B+", label: "Gifts Delivered", color: "text-christmas-gold" },
  { icon: Heart, value: "∞", label: "Smiles Created", color: "text-christmas-red" },
  { icon: Sparkles, value: "9", label: "Magical Reindeer", color: "text-christmas-green" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-christmas-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-christmas-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-christmas-gold text-sm uppercase tracking-widest mb-4">Get to Know Me</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-gradient-christmas">Santa</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-christmas-red to-christmas-gold mx-auto rounded-full" />
        </motion.div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ho ho ho! I'm Santa Claus, the world's most dedicated gift delivery specialist 
              with over 1,750 years of experience bringing joy to children and adults alike.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in the North Pole, I lead a team of talented elves and manage a fleet of 
              magical reindeer. My passion lies in spreading happiness, one gift at a time. 
              When I'm not preparing for Christmas Eve, you'll find me perfecting my cookie 
              recipes or practicing my signature laugh.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe every child deserves a moment of magic, and that's what drives me 
              to deliver billions of presents in a single night. It's not just a job – it's 
              my life's calling! 🎄
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted mb-4 ${stat.color}`}
                >
                  <stat.icon size={24} />
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun facts cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Favorite Cookie", value: "Chocolate Chip 🍪", bg: "from-christmas-red/20 to-transparent" },
            { title: "Pet Reindeer", value: "Rudolph (the Red-Nosed!) 🦌", bg: "from-christmas-gold/20 to-transparent" },
            { title: "Catchphrase", value: "Ho Ho Ho! 🎅", bg: "from-christmas-green/20 to-transparent" },
          ].map((fact, index) => (
            <motion.div
              key={fact.title}
              whileHover={{ y: -10 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${fact.bg} border border-border/50 backdrop-blur-sm`}
            >
              <p className="text-muted-foreground text-sm mb-2">{fact.title}</p>
              <p className="text-foreground font-display text-xl font-semibold">{fact.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
