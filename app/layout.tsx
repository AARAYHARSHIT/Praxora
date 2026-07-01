import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://praxora.vercel.app"),

  title: {
    default: "Praxora • Spatial Intelligence",
    template: "%s • Praxora",
  },

  description:
    "Praxora is a futuristic concept platform exploring spatial intelligence, adaptive AI systems, and human-centered interfaces inspired by next-generation computing experiences.",

  applicationName: "Praxora",

  keywords: [
    "Praxora",
    "Artificial Intelligence",
    "Spatial Intelligence",
    "Future Technology",
    "AI Platform",
    "Next.js",
    "Glassmorphism",
    "Human Computer Interaction",
    "Portfolio",
    "Landing Page",
  ],

  authors: [
    {
      name: "Harshit Pathak",
      url: "https://github.com/AARAYHARSHIT",
    },
  ],

  creator: "Harshit Pathak",

  publisher: "Praxora",

  robots: {
    index: true,
    follow: true,
  },

openGraph: {
  title: "Praxora • Spatial Intelligence",

  description:
    "A cinematic concept platform exploring adaptive AI, spatial intelligence, and next-generation human-computer interaction.",

  url: "https://praxora.vercel.app",

  siteName: "Praxora",

  locale: "en_US",

  type: "website",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Praxora Preview",
    },
  ],
},

twitter: {
  card: "summary_large_image",

  title: "Praxora • Spatial Intelligence",

  description:
    "Advanced intelligence engineered to feel weightless.",

  creator: "@Harshit13824870",

  images: ["/og-image.png"],
},

  category: "technology",

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090B10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body
  className="antialiased bg-black text-white selection:bg-cyan-400 selection:text-black"
>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
