import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ClientLayout } from "@/app/components/layout/ClientLayout"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://heritagehill.vercel.app'),
  title: 'Heritage Hill | Economic Infrastructure for the Black Diaspora',
  description: 'Heritage Hill is building economic infrastructure to empower the Black Diaspora through innovative financial solutions, community engagement, and sustainable wealth creation.',
  keywords: [
    'Black Economic Empowerment',
    'Diaspora Economics',
    'Financial Infrastructure',
    'Black Wealth Creation',
    'Community Development',
    'Economic Justice',
    'Black Business',
    'Financial Technology',
    'Heritage Hill',
    'Black Economy'
  ],
  openGraph: {
    title: 'Heritage Hill',
    description: 'Building Economic Infrastructure for the Black Diaspora',
    url: 'https://heritagehill.vercel.app',
    siteName: 'Heritage Hill',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Heritage Hill - Economic Infrastructure for the Black Diaspora',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heritage Hill',
    description: 'Building Economic Infrastructure for the Black Diaspora',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/TOL-RBG.png', sizes: '32x32', type: 'image/png' },
      { url: '/TOL-RBG.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: [
      { url: '/TOL-RBG.png', type: 'image/png' },
    ],
    apple: [
      { url: '/TOL-RBG.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'icon', url: '/TOL-RBG.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative bg-white min-h-screen ${geistSans.variable}`}>
        <div className="fixed inset-0 bg-white z-[-1]" />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
