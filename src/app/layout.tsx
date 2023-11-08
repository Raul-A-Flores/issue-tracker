import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar';
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({ 
  
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Issue Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body >
        <Theme appearance='light' accentColor='violet'>
          <NavBar />
          <main className='p-5'> 
            {children}
          </main>
          <ThemePanel />

        </Theme>
        </body>
    </html>
  )
}
