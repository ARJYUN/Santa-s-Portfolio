import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999] bg-background/50 backdrop-blur-sm">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green origin-left shadow-lg shadow-christmas-red/30"
      />
    </div>
  );
};

export default ScrollProgress;
