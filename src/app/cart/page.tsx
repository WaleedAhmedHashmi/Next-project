import React from 'react'
import Image from 'next/image';
import Rectangle1Image from '../Image/Rectangle 1.png'; 
import LogosImage from '../blog/logos1.png';
const page = () => {
  return (
    <>
    <div className='relative flex justify-center items-center'>
 
 <Image src={Rectangle1Image} alt="" className="w-full " />


 <div className='absolute flex flex-col items-center text-center text-dark'>
  
   <Image src={LogosImage} alt="" className='mb-1' />


   <h1 className='text-6xl mb-5 text-black font-medium'>
     Cart
   </h1>


   <p className='text-xl mb-10'>
     <b>Home &gt;</b> Cart
   </p>
 </div>
</div>
  
  
<div className="flex  lg:flex-row justify-between p-5 lg:mx-[80px] gap-5">

  <div className="w-full max-h-[70px]  lg:w-2/3 bg-pink-100 p-5 rounded-md ">
    <div className="grid grid-cols-4 text-center font-bold text-xl border-b pb-3">
      <a href="#" className="text-gray-700">Product</a>
      <a href="#" className="text-gray-700">Price</a>
      <a href="#" className="text-gray-700">Quantity</a>
      <a href="#" className="text-gray-700">Subtotal</a>
    </div>


    
  </div>


  <div className="w-full lg:w-1/3 bg-pink-100 p-5 rounded-md shadow-md space-x-20">
    <h2 className="text-4xl font-bold mb-4 text-center ">Cart Totals</h2>
    <div className="space-y-4 text-lg my-20 ">
      <div className="flex justify-between font-bold">
        <span>Subtotal</span>
        <span className='text-gray-400'>Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-yellow-600 text-2xl">Rs. 250,000.00</span>
      </div>
    </div>
    <button 
      type="button"
      className="w-[230px] mb-5 text-2xl bg-pink-100 text-black py-3 rounded-xl border border-black hover:bg-pink-300 transition"
    >
      Check Out
    </button>
  </div>
</div>

      
 
    </>
  )
}

export default page