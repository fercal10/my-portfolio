import { Metadata } from 'next';
import './globals.css'
import { Inter } from 'next/font/google'
import { createContext, useState } from 'react'

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Fernando Calderon',
  description: 'Portafolio ',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (
    <html  >
        <body className={inter.className}>{children}</body>
    </html>
  )
}
