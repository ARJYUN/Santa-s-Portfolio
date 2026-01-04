import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Decorative lights */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            className={`flex-1 h-full ${
              i % 4 === 0 ? 'bg-christmas-red' :
              i % 4 === 1 ? 'bg-christmas-gold' :
              i % 4 === 2 ? 'bg-christmas-green' :
              'bg-blue-400'
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-2xl font-bold">
            <span className="text-christmas-red">Santa</span>
            <span className="text-christmas-gold">.dev</span>
          </div>

          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-muted-foreground text-green-800"
          >
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 fill-christmas-red text-christmas-red" />
            </motion.span>
            at the North Pole
          </motion.p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-green-800">
            © {new Date().getFullYear()} Santa Claus. All gifts reserved. 🎁
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
