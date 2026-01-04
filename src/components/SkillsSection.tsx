import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Snowflake, Gift, Plane, Cookie, Music, Heart } from 'lucide-react';

const skills = [
  { name: "Gift Wrapping", level: 99, icon: Gift },
  { name: "Chimney Navigation", level: 95, icon: Snowflake },
  { name: "Sleigh Piloting", level: 100, icon: Plane },
  { name: "Cookie Tasting", level: 100, icon: Cookie },
  { name: "Carol Singing", level: 85, icon: Music },
  { name: "Spreading Joy", level: 100, icon: Heart },
];

const powers = [
  { 
    title: "Time Manipulation", 
    description: "Ability to stretch a single night into enough time to visit every home on Earth",
    icon: "⏰"
  },
  { 
    title: "Universal Language", 
    description: "Fluent in every language spoken by children worldwide",
    icon: "🌍"
  },
  { 
    title: "Magic Bag", 
    description: "An enchanted sack that holds infinite presents yet weighs nothing",
    icon: "🎁"
  },
  { 
    title: "Naughty/Nice Detection", 
    description: "Advanced behavior tracking with 100% accuracy",
    icon: "📋"
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-christmas-gold text-sm uppercase tracking-widest mb-4">What I Do Best</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Skills & <span className="text-gradient-gold">Powers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-christmas-gold to-christmas-red mx-auto rounded-full" />
        </motion.div>

        {/* Skills with candy cane progress bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-christmas-red"
                  >
                    <skill.icon size={20} />
                  </motion.div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
                <span className="text-christmas-gold font-bold">{skill.level}%</span>
              </div>
              
              {/* Candy cane progress bar */}
              <div className="h-4 bg-muted rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full relative overflow-hidden"
                  style={{
                    background: `repeating-linear-gradient(
                      45deg,
                      hsl(0 72% 51%),
                      hsl(0 72% 51%) 10px,
                      hsl(0 0% 100%) 10px,
                      hsl(0 0% 100%) 20px
                    )`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powers grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {powers.map((power, index) => (
            <motion.div
              key={power.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-pointer hover:border-christmas-gold/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
                className="text-5xl mb-4 inline-block"
              >
                {power.icon}
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-christmas-gold transition-colors">
                {power.title}
              </h3>
              <p className="text-muted-foreground text-sm">{power.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
