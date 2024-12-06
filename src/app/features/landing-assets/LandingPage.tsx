"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function LandingPage() {
  const router = useRouter()

  const handleNavigate = async () => {
    router.push('/dashboard')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  }

  const stripeVariants = {
    hidden: (custom: number) => ({
      x: custom % 2 === 0 ? '-100%' : '100%'
    }),
    visible: {
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: (custom: number) => ({
      x: custom % 2 === 0 ? '-100%' : '100%',
      transition: { duration: 0.5, ease: "easeIn" }
    })
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="landing-page"
    >
      <div className="absolute inset-0 grid grid-rows-3">
        {[0, 1, 2].map((index) => (
          <motion.div 
            key={index}
            className={`${
              index === 0 ? 'bg-red-700' : 
              index === 1 ? 'bg-black' : 
              'bg-green-700'
            }`}
            variants={stripeVariants}
            custom={index}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-white">
        <motion.div
          variants={contentVariants}
          className="text-center"
        >
          <h1 className="text-7xl font-bold mb-6">Heritage Hill</h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            Building Economic Infrastructure for the Black Diaspora
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            A case study in cooperative economics, community-driven growth, 
            and sustainable business development (2019-2023)
          </p>
          
          <button 
            onClick={handleNavigate}
            className="inline-block bg-white text-black px-8 py-4 rounded-lg 
                     font-semibold text-lg hover:bg-opacity-90 transition-all
                     hover:scale-105 transform"
          >
            View Our Story
          </button>

          <div className="mt-16 text-sm opacity-80">
            <p>Designed and Created by{' '}
              <Link 
                href="https://www.linkedin.com/in/hoffbrandon/" 
                target="_blank"
                className="underline hover:text-white transition-colors"
              >
                Brandon Z. Hoff
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 