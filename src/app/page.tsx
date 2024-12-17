import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import logo from '../app/Image/logo1.png';
import checkoutImage from '@/app/Image/checkout.png';
import checkImage from '@/app/Image/check.png';
import Image from 'next/image';
import Link from "next/link";
import button1Image from '../app/Image/button1.png';

export default function Home() {
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
     <div className='flex justify-center '>
     <Image 
  src={checkoutImage} 
  alt=""
  width={1900} 
  height={800} 
  
/>
</div>

<div className="min-h-screen bg-white flex justify-center py-8 px-4 sm:px-6 lg:px-8">
    
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-15 pt-[40px]">

        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
            <div>
              <label className="block text-sm  font-medium text-black">First Name</label>
              <input
                type="text"
               
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    
            <div>
              <label className="block text-sm font-medium text-black">Last Name</label>
              <input
                type="text"
              
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

        
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black">
                Company Name (Optional)
              </label>
              <input
                type="text"
                
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

        
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black">Country / Region</label>
              <select className="w-full mt-1 px-4 py-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sri Lanka</option>
                
              </select>
            </div>

        
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black">Street Address</label>
              <input
                type="text"
                
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

         
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black">Town / City</label>
              <input
                type="text"
                placeholder="Town / City"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black">Province</label>
              <select className="w-full mt-1 px-4 py-2 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Western Province</option>
                
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input
                type="input"
                
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="input"
                
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="text"
                
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-2">
             
              <input
                type="text"
                placeholder='Additional Information'
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>

        <div className='ml-[80px]'>
          <h2 className="text-2xl font-bold mb-6 ">Product</h2>
          <div className="space-y-4 ">
            <div className="flex justify-between">
              <span>Asgard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-yellow-600">Rs. 250,000.00</span>
            </div>
          </div>
           <hr className='mt-5'></hr>
    
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <input type="radio" id="bank" name="payment" defaultChecked />
              <label htmlFor="bank" className="text-sm font-medium">
                Direct Bank Transfer
              </label>
            </div>
            <p className="text-xl text-gray-300 ">
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference. Your order will not be shopped until the funds have cleared in our account. 
            </p>
             
            <div className="flex items-center space-x-2 text-gray-400">
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod" className="text-sm font-medium">
               Direct Bank Transfer
              </label>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod" className="text-sm font-medium">
                Cash On Delivery
              </label>
        
            </div>
            <p className='text-xl pt-5' >
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and by other purposes described in our <b>privacy policy</b>.
             </p>
         </div>

          <div className='flex justify-center'>
          <button
            type="button"
            className="w-[300px]  from-neutral-900 mt-6 bg-white text-black border border-black py-3 rounded-md "
          >
            Place order
          </button>
          </div>
        </div>
      </div>
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
              <li><a href="#" className=" text-sm mb-6 ">Home</a></li>
              <li><a href="#" className=" text-sm space-y-4">Shop</a></li>
              <li><a href="#" className=" text-sm">About</a></li>
              <li><a href="#" className=" text-sm pb-4">Contact</a></li>
            </ul>
          </div>

          
          <div className='space x-6 '>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Help</h4>
            <ul className='space-y-6'>
              <li><a href="#" className=" text-sm">Payment Options</a></li>
              <li><a href="#" className="text-sm">Returns</a></li>
              <li><a href="#" className=" text-sm">Privacy Policies</a></li>
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
  );


    </>
  );
}
