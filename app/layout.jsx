import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: "Ahmed Khalil | Full Stack Developer Portfolio",
  description: "Modern space-themed portfolio of Ahmed Khalil, a Full Stack Developer specializing in React, Next.js, and Django.",
  keywords: ["Ahmed Khalil", "Full Stack Developer", "Portfolio", "Next.js", "React", "Space Theme", "Turkey Developer"],
  authors: [{ name: "Ahmed Khalil" }],
  openGraph: {
    title: "Ahmed Khalil | Full Stack Developer",
    description: "Explore the modern space-themed portfolio of Ahmed Khalil.",
    url: "https://ahmedkhalil.dev",
    siteName: "Ahmed Khalil Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="layout-html">
      <body className="layout-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
