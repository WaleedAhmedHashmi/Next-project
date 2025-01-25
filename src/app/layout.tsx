import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from '@/app/Image/logo1.png';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interior Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
        >
        <nav className="flex items-center justify-between p-3 bg-white shadow-md">
     
        <div className="flex items-center">
          <Image src={logo} width={100} height={100} alt="Logo" className="mx-1" />
          <div className="font-bold text-2xl md:text-4xl">Furniro</div>
        </div>
  
       
        <button
          className="text-3xl md:hidden "
          
          aria-label="Toggle Menu"
        >
         
        </button>
  
        <ul className="flex justify-center items-center text-xl space-x-12"
          
          
        >
          <li className="my-2 md:my-0 mx-2">
            <Link href="/" className="block text-center hover:text-gray-500">
              Home
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/shop" className="block text-center hover:text-gray-500">
              Shop
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/blog" className="block text-center hover:text-gray-500">
              Blog
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link href="/contact" className="block text-center hover:text-gray-500">
              Contact
            </Link>
          </li>
        </ul>
  
   
        <div className="flex space-x-10    items-center text-2xl">
          <FaUser className="cursor-pointer hover:text-gray-500" title="Profile" />
          <FaSearch className="cursor-pointer hover:text-gray-500" title="Search" />
          <FaHeart className="cursor-pointer hover:text-gray-500" title="Wishlist" />
          <FaShoppingCart
            className="cursor-pointer hover:text-gray-500"
            title="Cart"
          />
        </div>
      </nav>
 
        {children}
        <footer className="bg-white   text-black py-12">
      <div className="container mx-auto px-4">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-lg font-extrabold mb-10 ">Funiro.</h4>
            <p className="text-md text-gray-400">
              400 University Drive Suite 200 Coral Gables, <br></br> FL 33134 USA
            </p>
          </div>

         
          <div className='space-x-6  '>
            <h4 className="text-lg font-bold mb-4 ml-6 text-gray-400 ">Links</h4>
            <ul className='my-12 space-y-9 font-bold'>
              <li><a href="#" className=" text-sm  ">Home</a></li>
              <li><a href="#" className=" text-sm ">Shop</a></li>
              <li><a href="#" className=" text-sm">About</a></li>
              <li><a href="#" className=" text-sm ">Contact</a></li>
            </ul>
          </div>

          
          <div className='space x-6 '>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Help</h4>
            <ul className='my-12 space-y-9 font-bold'>
              <li><a href="#" className=" text-md">Payment Options</a></li>
              <li><a href="#" className="text-md">Returns</a></li>
              <li><a href="#" className=" text-md">Privacy Policies</a></li>
            </ul>
          </div>

          
          <div className=''>
            <h4 className="text-lg ml-6 font-bold mb-4 text-gray-400">Newsletter</h4>
           
              
            <div className="flex items-center my-10  border-b border-black ">
  <input 
    type="email" 
    placeholder="Enter Your Email Address" 
    className="w-full py-2 text-gray-500 placeholder-gray-400 focus:outline-none"
  />
  <button 
    type="button" 
    className="ml-4 text-black font-bold "
  >
    SUBSCRIBE
  </button>
</div>

          </div>
         
        </div>
        <hr></hr>
        <div className="mt-12  ">
          <p className="text-sm">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
      </body>
    </html>
  );
}
