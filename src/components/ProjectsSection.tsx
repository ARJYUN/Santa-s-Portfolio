import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Gift Tracker 3000",
    description: "Real-time global tracking system for all Christmas deliveries",
    longDescription: "A sophisticated logistics system that tracks billions of gifts across the globe in real-time. Features include route optimization, weather integration, and automatic rerouting capabilities.",
    tech: ["Magic", "Cloud Computing", "GPS"],
    icon: "🎁",
    color: "from-christmas-red to-red-700"
  },
  {
    id: 2,
    title: "Nice List Database",
    description: "The world's most comprehensive behavior tracking system",
    longDescription: "An ethical AI-powered system that fairly evaluates children's behavior throughout the year. Uses advanced sentiment analysis and ensures every child gets a fair assessment.",
    tech: ["AI", "Big Data", "Ethics Engine"],
    icon: "📋",
    color: "from-christmas-green to-emerald-700"
  },
  {
    id: 3,
    title: "Elf Workshop Manager",
    description: "Optimizing toy production at the North Pole",
    longDescription: "A comprehensive workflow management system for our team of 50,000 elves. Includes task assignment, quality control, and holiday music playlist management.",
    tech: ["Project Management", "Automation"],
    icon: "🧝",
    color: "from-christmas-gold to-amber-600"
  },
  {
    id: 4,
    title: "Reindeer Flight Sim",
    description: "Advanced training simulator for flying reindeer",
    longDescription: "A VR-based flight simulation system used to train new reindeer for the big night. Includes weather conditions, rooftop landing practice, and fog navigation with Rudolph.",
    tech: ["VR", "Physics Engine", "Training AI"],
    icon: "🦌",
    color: "from-red-600 to-christmas-red"
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-christmas-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-christmas-gold text-sm uppercase tracking-widest mb-4">My Work</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Workshop <span className="text-gradient-christmas">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-christmas-red to-christmas-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Click on the gift boxes to reveal the magic inside! ✨
          </p>
        </motion.div>

        {/* Projects grid - 3D Flip cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="perspective-1000 h-80 cursor-pointer"
              onClick={() => toggleFlip(project.id)}
            >
              <motion.div
                animate={{ rotateY: flippedCards.has(project.id) ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front of card */}
                <div className={`absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br ${project.color} p-8 flex flex-col items-center justify-center text-center`}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-7xl mb-6"
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Click to open! 🎁
                  </p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl glass-card p-8 flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-xs text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="mt-4 w-full py-3 bg-christmas-red text-white rounded-xl font-medium hover:bg-christmas-red/90 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl p-8 max-w-lg w-full relative border border-christmas-gold/30"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-6xl mb-6">{selectedProject.icon}</div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {selectedProject.longDescription}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map(tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-christmas-gold/20 text-christmas-gold rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-christmas-red text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-christmas-red/90 transition-colors">
                <ExternalLink size={18} />
                Live Demo
              </button>
              <button className="flex-1 py-3 border border-border text-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors">
                <Github size={18} />
                Source
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
