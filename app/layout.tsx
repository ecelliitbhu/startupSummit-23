"use client"
import { Inter } from 'next/font/google'

import { NextUIProvider,createTheme} from '@nextui-org/react';
const inter = Inter({ subsets: ['latin'] })
const darkTheme=createTheme({type:"dark"})
export default function RootLayout(
  {children,}: {
  children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        </>
        <NextUIProvider theme={darkTheme}>

        {children}
        </NextUIProvider>
       
      </body>
    </html>
  )
}
