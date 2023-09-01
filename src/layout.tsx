"use client"
import './globals.scss'
import Sidebar from './pages/Sidebar/index';
import Footer from './pages/Footer/index';
import Header from './pages/Header/index';

export default function RootLayout({ children } :any){
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
