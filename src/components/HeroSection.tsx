import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import santaHero from '@/assets/santa-hero.png';

const HeroSection = () => {
  const roles = [
    "Gift Delivery Expert 🎁",
    "Happiness Engineer 😊",
    "Night Flight Specialist ✈️",
    "Cookie Connoisseur 🍪",
    "Celebration Architect 🎅"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={santaHero}
          alt="Santa Claus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      {/* Floating ornaments */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-8 h-8 ornament glow-red opacity-60 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-32 w-6 h-6 ornament-gold glow-gold opacity-70 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-32 w-10 h-10 ornament-green glow-green opacity-50 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-christmas-gold text-lg md:text-xl font-medium mb-4 tracking-widest uppercase"
          >
            Welcome to the North Pole
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient-christmas text-glow-red">Santa</span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-4"
            >
              
            </motion.span>
          </motion.h1>

          {/* Typewriter */}
          <div className="h-12 md:h-16 flex items-center justify-center">
            <TypewriterText
              texts={roles}
              className="text-xl md:text-3xl text-muted-foreground font-light"
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glow-red hover:bg-primary/90 transition-all duration-300"
            >
              Meet Santa ✨
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-christmas-gold text-christmas-gold rounded-full font-semibold text-lg hover:bg-christmas-gold hover:text-background transition-all duration-300"
            >
              Send a Letter 📬
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
