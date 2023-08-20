'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClientProvider } from 'react-query';
import queryClient  from '@/app/Context';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </QueryClientProvider>
  )
}
