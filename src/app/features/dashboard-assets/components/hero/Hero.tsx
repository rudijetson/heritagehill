import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

  const letterContent = {
    title: "Heritage Hill: Our Journey",
    greeting: "Welcome!",
    introduction: <>
      I&apos;m Brandon Z. Hoff, founder of Heritage Hill. This dashboard chronicles our journey as a cooperative organization, showcasing both our successes and challenges. As part of our commitment to cooperative economics and open book management, we believe in full transparency with our financial data and operational history.
    </>,
    journey: <>
      What started as a t-shirt company grew into something more meaningful - a laboratory for cooperative economics and shared ownership. Through partnerships with high schools and HBCUs, we&apos;ve created student-led spirit shops and explored new models of entrepreneurship.
    </>,
    techNote: <>
      Interestingly, this entire dashboard was built using Next.js and modern AI tools. As someone who learned to code through generative AI, I wanted to showcase not just our business journey, but also how technology can empower individuals to create and innovate.
    </>,
    closing: <>
      <div className="mt-8 mb-4">
        <p className="mb-1">Brandon Z. Hoff</p>
        <p>Founder, Heritage Hill</p>
      </div>
    </>,
  };

  const socialLinks = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/hoffbrandon" },
    { platform: "Newsletter", url: "https://bzhoff.beehiiv.com" },
    { platform: "TikTok", url: "https://tiktok.com/hoffdigital" },
    { platform: "YouTube", url: "https://youtube.com/@hoffdigital" },
    { platform: "Portfolio", url: "https://bzhoff.com" }
  ];

  return (
    <section className="relative min-h-screen py-24 px-8 overflow-hidden bg-white text-slate-900">
      <motion.div 
        className="relative z-10 w-full max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <Image 
            src="/Heritage Hill RBG LOGO.png" 
            alt="Heritage Hill Logo" 
            width={128}
            height={128}
            className="mx-auto mb-8 object-contain"
          />
        </motion.div>

        {/* Letter Content */}
        <motion.div 
          variants={itemVariants}
          className="prose prose-lg mx-auto text-slate-700"
        >
          <h1 className="text-2xl font-bold text-center mb-8 text-slate-900">
            {letterContent.title}
          </h1>
          
          <p className="text-xl mb-8">{letterContent.greeting}</p>
          <div className="mb-6">{letterContent.introduction}</div>
          <div className="mb-6">{letterContent.journey}</div>
          <div className="mb-6">{letterContent.techNote}</div>

          {/* Closing */}
          <div className="my-8 text-slate-700">
            {letterContent.closing}
          </div>

          {/* Social Links */}
          <div className="my-8 space-y-2">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Stay Connected</h3>
            {socialLinks.map(link => (
              <motion.a
                key={link.platform}
                href={link.url}
                className="block text-green-600 hover:text-green-700 transition-colors"
                whileHover={{ x: 4 }}
              >
                {link.platform} →
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};