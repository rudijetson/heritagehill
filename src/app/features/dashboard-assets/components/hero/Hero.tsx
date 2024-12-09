"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  // Container animation variants with smoother easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  // Refined child animations with smoother transitions
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
      }
    }
  };

  // Special variants for title words
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        delay: i * 0.1
      }
    })
  };

  // Feature card variants with stagger and spring physics
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center py-24 px-8 overflow-hidden
      bg-gradient-to-br from-[#1a2b34] to-[#2c3e50] text-white">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6 flex flex-col md:flex-row items-center justify-center gap-x-4">
            {[
              { text: 'Data', className: 'from-white to-slate-200' },
              { text: 'Storytelling', className: 'from-green-500 to-green-300' },
              { text: 'Platform', className: 'from-teal-300 to-teal-400' }
            ].map((word, i) => (
              <motion.span
                key={word.text}
                custom={i}
                variants={titleVariants}
                className={`bg-gradient-to-r ${word.className} bg-clip-text text-transparent`}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[clamp(1rem,2vw,1.25rem)] text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            AI-powered dashboards transforming organizational data into engaging visual narratives
          </motion.p>
        </motion.div>

        {/* Single CTA Button */}
        <motion.div 
          className="flex justify-center my-10 px-4"
          variants={itemVariants}
        >
          <motion.button 
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => scrollToSection('executive')}
            className="px-8 py-3.5 rounded-xl text-base font-semibold
              bg-gradient-to-br from-green-500 to-green-600
              hover:shadow-lg hover:shadow-green-500/30
              transition-all duration-300"
          >
            View Sample Dashboard
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 px-4">
          {[
            {
              icon: '📊',
              title: 'Visual Data Stories',
              description: 'Transform complex organizational data into clear, compelling narratives that showcase your impact.'
            },
            {
              icon: '🤝',
              title: 'Community Connection',
              description: 'Share resources and opportunities through data-driven insights that align community needs.'
            },
            {
              icon: '🎯',
              title: 'Strategic Insights',
              description: 'Leverage AI to uncover patterns and opportunities in your data for better decision making.'
            }
          ].map((feature) => (
            <motion.div 
              key={feature.title}
              variants={featureVariants}
              className="p-8 rounded-2xl backdrop-blur-lg bg-white/[0.05]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-200 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mt-16 px-4"
          variants={itemVariants}
        >
          <div className="relative">
            <span className="absolute -top-6 -left-4 text-4xl text-green-500/20 font-serif">
              &ldquo;
            </span>
            <span className="absolute -bottom-6 -right-4 text-4xl text-green-500/20 font-serif">
              &rdquo;
            </span>
            
            <div className="space-y-3 italic text-slate-300">
              <p className="text-lg">
                When we <span className="text-green-400 font-medium">communicate</span>, we build trust.
              </p>
              <p className="text-lg">
                When we <span className="text-green-400 font-medium">trust</span>, we collaborate.
              </p>
              <p className="text-lg">
                When we <span className="text-green-400 font-medium">collaborate</span>, we grow.
              </p>
            </div>
            
            <p className="mt-6 text-sm text-slate-400 font-medium tracking-wide">
              Empowering communities through data-driven storytelling
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};