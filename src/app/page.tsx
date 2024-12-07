"use client"

import { Hero } from "@/app/features/dashboard-assets/components/hero/Hero"
import { Dashboard } from "@/app/features/dashboard-assets/Dashboard"

export default function Home() {
  return (
    <main className="relative">
      <div className="h-screen">
        <Hero />
      </div>
      <div className="relative bg-white">
        <Dashboard />
      </div>
    </main>
  )
}

