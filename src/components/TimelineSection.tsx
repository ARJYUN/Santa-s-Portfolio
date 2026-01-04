import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timeline = [
  {
    year: "270 AD",
    title: "The Beginning",
    description: "Born as Nicholas in Patara, discovered my calling to help others",
    icon: "👶"
  },
  {
    year: "343 AD",
    title: "Legendary Status",
    description: "Became the patron saint of children and gift-giving",
    icon: "⭐"
  },
  {
    year: "1600s",
    title: "Dutch Influence",
    description: "Sinterklaas tradition spreads across Europe",
    icon: "🌍"
  },
  {
    year: "1823",
    title: "Modern Makeover",
    description: "'Twas the Night Before Christmas' defined my iconic look",
    icon: "📚"
  },
  {
    year: "1931",
    title: "Global Icon",
    description: "Coca-Cola helped spread my red-suited image worldwide",
    icon: "🥤"
  },
  {
    year: "Present",
    title: "Digital Age Santa",
    description: "Now accepting wish lists via email and running North Pole operations with AI",
    icon: "💻"
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="pt-24 pb-16 relative overflow-hidden">
      {/* Sleigh animation */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-0 text-4xl z-10"
      >
        
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-christmas-gold text-sm uppercase tracking-widest mb-4">Through the Ages</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            My <span className="text-gradient-gold">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-christmas-gold to-christmas-red mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-green transform -translate-x-1/2 hidden md:block" />
          
          {/* Mobile line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-christmas-red via-christmas-gold to-christmas-green md:hidden" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center ${index === timeline.length - 1 ? 'mb-0' : 'mb-12'} ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card rounded-2xl p-6 inline-block"
                >
                  <span className="text-christmas-gold font-bold text-lg">{item.year}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </div>

              {/* Center icon - Desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 z-10 hidden md:flex">
              <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full rounded-full bg-muted border-4 border-christmas-gold flex items-center justify-center text-3xl"
            >
             <span className="text-christmas-gold">{item.icon}</span>
          </motion.div>
        </div>


              {/* Mobile icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-4 w-10 h-10 rounded-full bg-muted border-2 border-christmas-gold flex items-center justify-center text-xl z-10 md:hidden"
              >
                <span className="text-christmas-gold">{item.icon}</span>    
              </motion.div>

              {/* Empty space for other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
