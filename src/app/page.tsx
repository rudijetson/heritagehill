"use client"

import { Hero } from "@/app/features/dashboard-assets/components/hero/Hero"
import { DashboardIntro } from "@/app/features/dashboard-assets/components/dashboard-intro/DashboardIntro"
import { Dashboard } from "@/app/features/dashboard-assets/Dashboard"

export default function Home() {
  return (
    <main>
      <Hero />
      <DashboardIntro />
      <Dashboard />
    </main>
  )
}

