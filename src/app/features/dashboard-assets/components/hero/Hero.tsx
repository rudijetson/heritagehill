import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Network, Wallet, Share2 } from 'lucide-react';
import { WaitlistModal } from './WaitlistModal';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "tween",
        duration: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.05
      }
    })
  };

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

  const networkVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1
      }
    }
  };

  const [showWaitlist, setShowWaitlist] = React.useState(false);

  const titleContent = [
    { text: 'Fund', className: 'from-white to-slate-200' },
    { text: 'Local', className: 'from-green-500 to-green-300' },
    { text: 'Makers', className: 'from-teal-300 to-teal-400' }
  ];

  const networkStats = (
    <motion.div 
      variants={networkVariants}
      className="flex justify-center gap-4 my-12 px-4 flex-nowrap"
    >
      {[
        { value: '15,000+', label: 'Local Makers' },
        { value: '600+', label: 'Partnerships' },
        { value: '50+', label: 'Supply Chains' }
      ].map((stat) => (
        <div key={stat.label} className="text-center whitespace-nowrap">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );

  const ctaButtons = (
    <motion.div 
      className="flex justify-center gap-4 my-10 px-4 flex-wrap"
      variants={itemVariants}
    >
      <motion.button 
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowWaitlist(true)}
        className="px-8 py-3.5 rounded-xl text-base font-semibold
          bg-gradient-to-br from-green-500 to-green-600 
          hover:shadow-lg hover:shadow-green-500/30
          transition-all duration-300 flex items-center gap-2"
      >
        Join the Network <ArrowRight className="w-4 h-4" />
      </motion.button>
      
      <motion.button 
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => document.getElementById('executive')?.scrollIntoView({ behavior: 'smooth' })}
        className="px-8 py-3.5 rounded-xl text-base font-semibold
          bg-white/10 hover:bg-white/20
          transition-all duration-300"
      >
        Explore Ecosystem
      </motion.button>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex items-center py-24 px-8 overflow-hidden
      bg-gradient-to-br from-[#1a2b34] via-[#243442] to-[#2c3e50] text-white">
      {/* Optimized background layers */}
      <div className="absolute inset-0">
        {/* Static gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        
        {/* Subtle stars */}
        <div 
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Keep the nice glow effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h1 className="text-[clamp(2rem,4vw,4rem)] leading-tight mb-6 flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4">
            {titleContent.map((word, i) => (
              <motion.span
                key={word.text}
                custom={i}
                variants={titleVariants}
                className={`bg-gradient-to-r ${word.className} bg-clip-text text-transparent whitespace-nowrap`}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[clamp(1rem,2vw,1.25rem)] text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            AI-Powered Platform connecting makers and community investors to strengthen local economies
          </motion.p>
        </motion.div>

        {networkStats}
        {ctaButtons}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 px-4">
          {[
            {
              icon: Network,
              title: 'AI-Powered Matching',
              description: 'Our platform identifies collaboration opportunities and supply chain synergies between makers.'
            },
            {
              icon: Share2,
              title: 'Ecosystem Building',
              description: 'Connect with complementary businesses to share resources and build stronger supply chains.'
            },
            {
              icon: Wallet,
              title: 'Community Investment',
              description: 'Enable local investors to fund and grow maker networks with full transparency.'
            }
          ].map((feature) => (
            <motion.div 
              key={feature.title}
              variants={featureVariants}
              className="p-8 rounded-2xl backdrop-blur-lg bg-white/[0.05]
                hover:bg-white/[0.08] transition-colors duration-300
                border border-white/5"
            >
              <feature.icon className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold text-slate-200 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Quote */}
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
            
            <p className="text-lg italic text-slate-300">
              When makers connect through data,{' '}
              <span className="text-green-400 font-medium">
                entire communities thrive
              </span>
            </p>
            
            <p className="mt-6 text-sm text-slate-400 font-medium tracking-wide">
              Building intelligent networks for sustainable local economies
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Add Waitlist Modal */}
      {showWaitlist && (
        <WaitlistModal onClose={() => setShowWaitlist(false)} />
      )}
    </section>
  );
};