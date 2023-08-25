import { Metadata } from 'next';
import './globals.css'
import { Inter } from 'next/font/google'
import { createContext, useState } from 'react'
import StyledComponentsRegistry from '../lib/AntdRegistry';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Fernando Calderon',
  description: 'Portafolio ',
}




const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;