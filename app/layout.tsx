import Header from '@/components/ui/header';
import { Metadata } from 'next';
import { Architects_Daughter, Inter } from 'next/font/google';
import './css/style.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Prabaha',
  description: 'Nurturing the flow of Canine Potential',
  metadataBase: new URL('https://prabaha.in'),
  applicationName: 'Prabaha',
  authors: [{ name: 'Sayantan Das' }],
  keywords: ['Prabaha', 'Dog training', 'Dog boarding', 'Obedience training', 'Puppy training', 'Dog trainer'],
  category: 'Dog Training',
  icons: '/favicon.ico',
  openGraph: {
    title: 'Prabaha',
    description: 'Nurturing the flow of Canine Potential',
    emails: 'sayantan.das@prabaha.in',
    phoneNumbers: '+91-9930334723',
    siteName: 'Prabaha',
    url: new URL('https://prabaha.in'),
    countryName: 'India'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
