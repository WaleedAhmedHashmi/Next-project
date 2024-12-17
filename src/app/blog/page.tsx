import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

import React from 'react'
import Image from 'next/image';
import logo from '../Image/logo1.png';
import Link from "next/link";
import blogImage from '../blog/blog.png';
import computerImage from '../blog/computer.png';
const page = () => {
  return (
    <>
   <nav className="flex items-center justify-between p-3 bg-white shadow-md">
     
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
   src={blogImage}
  alt=""
  width={1900} 
  height={800} 
  
/>

</div>
  
<div className='flex pt-[60px] mx-[80px]'>
<Image 
   src={computerImage}
  alt=""
  width={600} 
  height={800} 
  
/>

</div>
</> 
  )
}

export default page