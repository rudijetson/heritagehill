"use client"

import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Pan-African Flag Background - starts after status bar */}
      <div className="h-full mt-[env(safe-area-inset-top)]">
        <div className="h-full flex flex-col">
          <div className="flex-1 bg-red-700" />
          <div className="flex-1 bg-black" />
          <div className="flex-1 bg-green-700" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 top-[env(safe-area-inset-top)] flex flex-col items-center justify-center px-4 space-y-12">
        <div className="text-center space-y-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter">
            Heritage Hill
          </h1>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-white/80 font-light uppercase tracking-widest">
              Equitable Supply Chains
            </p>
            <p className="text-lg md:text-xl text-white/70 font-light tracking-wider">
              Economic Infrastructure for the Black Diaspora
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-white/60 tracking-widest uppercase">
            Designed & Presented by{' '}
            <Link 
              href="https://linkedin.com/in/hoffbrandon" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Brandon Z. Hoff
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 