
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import React from 'react'
import Image from 'next/image';
import logo from '../Image/logo1.png';
import Link from "next/link";
import Shop1Image from '../shop/Shop1.png';
import hope1Image from '../shop/hope1.png';
import menuImage from '../shop/menu.png'; 
import checkImage from '../Image/check.png';
import button1Image from '../Image/button1.png';
const page = () => {
  return (
    <>
    
    <nav className="flex items-center justify-between p-3 bg-white shadow-md">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <Image src={logo} width={100} height={100} alt="Logo" className="mx-1" />
        <div className="font-bold text-2xl md:text-4xl">Furniro</div>
      </div>

     
      <button
        className="text-2xl md:hidden"
        
        aria-label="Toggle Menu"
      >
       
      </button>

      <ul className="flex justify-center items-center text-xl space-x-12"
        
        
      >
        <li className="my-2 md:my-0">
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

      {/* Icons Section */}
      <div className="hidden md:flex space-x-6 items-center text-2xl">
        <FaUser className="cursor-pointer hover:text-gray-500" title="Profile" />
        <FaSearch className="cursor-pointer hover:text-gray-500" title="Search" />
        <FaHeart className="cursor-pointer hover:text-gray-500" title="Wishlist" />
        <FaShoppingCart
          className="cursor-pointer hover:text-gray-500"
          title="Cart"
        />
      </div>
    </nav>
<div className='flex justify-center'>
<Image 
   src={Shop1Image}
  alt=""
  width={1900} 
  height={800} 
  
/>

</div>

<div>
<Image 
  src={menuImage} 
  alt=""
  width={1900} 
  height={800} 
  
/>


</div>

<div className="flex justify-center items-center space-x-30 p-[60px]">
<Image 
  src={hope1Image} 
  alt=""
  width={1900} 
  height={800} 
  
/>


</div>

<div>
   <Image 
  src={checkImage} 
  alt=""
  width={1900} 
  height={800} 
  
/>
   </div>
   <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-lg font-extrabold mb-10 ">Funiro.</h4>
            <p className="text-md text-gray-400">
              400 University Drive Suite 200 Coral Gables, <br></br> FL 33134 USA
            </p>
          </div>

         
          <div className='space-x-6  space-y-6'>
            <h4 className="text-lg font-bold mb-4 ml-6 text-gray-400">Links</h4>
            <ul className='space-y-6'>
              <li><a href="#" className=" font-semibold text-sm mb-6 ">Home</a></li>
              <li><a href="#" className="font-semibold text-sm space-y-4">Shop</a></li>
              <li><a href="#" className="font-semibold text-sm">About</a></li>
              <li><a href="#" className="font-semibold text-sm pb-4">Contact</a></li>
            </ul>
          </div>

          
          <div className='space x-6 '>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Help</h4>
            <ul className='space-y-6'>
              <li><a href="#" className="font-semibold text-sm">Payment Options</a></li>
              <li><a href="#" className=" font-semibold text-sm">Returns</a></li>
              <li><a href="#" className="font-semibold text-sm">Privacy Policies</a></li>
            </ul>
          </div>

          
          <div className=''>
            <h4 className="text-lg ml-6 font-bold mb-4 text-gray-400">Newsletter</h4>
           
              
            <Image 
  src={button1Image} 
  alt=""
  width={1900} 
  height={800} 
  
/>
             
         
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
</>
)
}

export default page