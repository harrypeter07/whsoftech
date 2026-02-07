'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Globe, Smartphone, Palette, Zap, Users, TrendingUp, X } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'software',
    icon: <Code2 size={32} />,
    title: 'Software Development',
    shortDesc: 'Custom enterprise solutions built for scale and performance',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  },
  {
    id: 'ai',
    icon: <Brain size={32} />,
    title: 'AI & Machine Learning',
    shortDesc: 'Intelligent solutions that drive innovation and efficiency',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: 'web',
    icon: <Globe size={32} />,
    title: 'Web Applications',
    shortDesc: 'Modern, responsive web apps that engage users',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
  },
  {
    id: 'mobile',
    icon: <Smartphone size={32} />,
    title: 'Mobile Applications',
    shortDesc: 'Native and cross-platform apps for iOS and Android',
    image: 'https://images.unsplash.com/photo-1512941937309-4a2a8433c3c2?w=800&h=600&fit=crop',
  },
  {
    id: 'design',
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    shortDesc: 'Beautiful interfaces that users love to interact with',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
  },
  {
    id: 'automation',
    icon: <Zap size={32} />,
    title: 'Business Automation',
    shortDesc: 'Streamline operations and reduce manual work',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
];

const word = "SERVICES";

export function ParallaxServices() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const imageTransforms = services.map((_, index) => {
    const transforms = [
      useTransform(scrollYProgress, [0, 1], [0, 0]),       // First image - static
      useTransform(scrollYProgress, [0, 1], [0, -800]),  // Second image - very fast
      useTransform(scrollYProgress, [0, 1], [0, -600]),  // Third image - fast
      useTransform(scrollYProgress, [0, 1], [0, -400]),  // Fourth image - medium
      useTransform(scrollYProgress, [0, 1], [0, -700]),  // Fifth image - very fast
      useTransform(scrollYProgress, [0, 1], [0, -500]),  // Sixth image - fast
    ];
    return transforms[index % transforms.length];
  });

  return (
    <div ref={container} className="relative bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1 
            style={{ y: titleY }}
            className="text-6xl sm:text-8xl font-bold text-foreground mb-8"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              SERVICES
            </span>
          </motion.h1>
          
          <motion.div 
            style={{ y: subtitleY }}
            className="text-2xl sm:text-3xl text-muted-foreground font-light"
          >
            {word.split("").map((letter, i) => {
              const letterY = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -150) - 50]);
              return (
                <motion.span 
                  style={{ top: letterY }} 
                  key={`l_${i}`} 
                  className="inline-block relative"
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`bg_${i}`}
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, (i + 1) * -30]),
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
              }}
              className="absolute w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
            />
          ))}
        </div>
      </div>

      {/* Services Grid with Parallax Images */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-screen">
            {services.map((service, index) => {
              // Optimal sizes - only one slightly larger, rest are optimal
              const sizes = [
                { width: 'w-[400px]', height: 'h-[300px]' },  // Large (only one larger)
                { width: 'w-[320px]', height: 'h-[240px]' },  // Optimal
                { width: 'w-[350px]', height: 'h-[280px]' },  // Optimal
                { width: 'w-[340px]', height: 'h-[260px]' },  // Optimal
                { width: 'w-[330px]', height: 'h-[250px]' },  // Optimal
                { width: 'w-[360px]', height: 'h-[270px]' },  // Optimal
                { width: 'w-[310px]', height: 'h-[230px]' },  // Optimal
              ];
              const size = sizes[index % sizes.length];
              
              // Proper placement without overflow
              const positions = [
                { left: '10%', top: '20%' },   // Top left
                { left: '65%', top: '15%' },   // Top right
                { left: '35%', top: '50%' },   // Middle center
                { left: '15%', top: '75%' },   // Bottom left
                { left: '70%', top: '65%' },   // Bottom right
                { left: '45%', top: '85%' },   // Bottom center
              ];
              const position = positions[index % positions.length];
              
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <motion.div
                  key={service.id}
                  className={`absolute ${size.width} ${size.height} rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer transition-all duration-300`}
                  style={{
                    left: position.left,
                    top: position.top,
                    y: imageTransforms[index],
                    zIndex: isHovered ? 100 : 6 - index, // Come to front on hover
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-[90vw] h-[90vh] max-w-6xl max-h-[800px] bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200"
              >
                <X size={24} className="text-gray-800" />
              </button>

              {/* Service Content */}
              <div className="relative w-full h-full flex flex-col">
                {/* Hero Image */}
                <div className="relative h-1/2 overflow-hidden">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Service Icon and Title */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary shadow-xl">
                      {selectedService.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                {/* Service Details */}
                <div className="flex-1 p-8 overflow-y-auto">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    {selectedService.shortDesc}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {['Custom Solutions', 'Modern Technology', 'Expert Team', '24/7 Support'].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'].map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-1 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
