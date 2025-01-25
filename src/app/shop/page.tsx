

import React from 'react'
import Image from 'next/image';

import RectangleImage from '../Image/Rectangle 1.png';
import colonImage from '../shop/colon.png';
import colon1Image from '../Image/colon1.png';
import shippingImage from '../shop/shipping.png';
import customerImage from '../shop/customer.png';
import menu1Image from '../Image/menu1.png';
import trophy1Image from '../shop/trophy 1.png';
import card1Image from '../shop/card1.png';
import card2Image from '../shop/card2.png';
import card3Image from '../shop/card3.png';
import card4Image from '../shop/card4.png';
import checkmarkImage from '../shop/checkmark.png';
const page = () => {
  return (
    <>
    
    
<div className='flex justify-center items-center '>
<Image  
   src={RectangleImage}
  alt=""
  width={1900} 
  height={800} 
  
/>
<div className='absolute text-center text-dark'>
  <h1 className=' text-5xl text-gray-950 font-semibold  '>
    Shop
  </h1>
  <p className='  text-xl mt-5 '><b>Home &gt;</b>  Shop</p>

</div>
 </div>

<div className="flex  items-center justify-between  gap-10 p-5 bg-pink-50 border border-gray-200 rounded-md">
 
  <div className="flex mx-20 space-x-6">
    <button className="flex text-2xl  gap-1 text-black hover:text-gray-900">
      <Image src={menu1Image} alt="" />
      <span>Filter</span>
       </button>
    
       <button>
      <Image src={colonImage} alt="" />
      </button>
       
       <button>
        <Image src={colon1Image} alt=""></Image>
       </button>
</div>
<div className='display flex justify-start items-center absolute pl-[290px] '>
  <div className="text-4xl  text-gray-400 ">| </div>
  <div className="mx-10 text-gray-700   text-xl">
    Showing 1-16 of 32 results
   
  </div>
  </div>
  
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2">
      <label form="show" className="text-xl text-black">Show</label>
      <select id="sort" className="w-18 h-16 px-2  text-gray-400 py-1 border rounded-md text-lg">
        <option>16</option>
        <option>17</option>
        <option>18</option>
      
      </select>
    </div>
    <div className="flex items-center gap-2 ">
      <label form="sort" className="text-xl text-black">Short by</label>
      <select id="sort" className="w-[200px] p-5 h-16 items-center from-neutral-600 text-gray-400 py-1 border rounded-md text-xl">
        <option>Default</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest</option>
      </select>
    </div>
  </div>
</div>
<div className='  grid grid-cols-2  md:grid-cols-4 space-y-2 my-10 gap-6 p-5 mx-10 space-x-2'>
<div className=' border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-30%</button>
<Image  src={card1Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3  max-w-2    '>Syltherine</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 3.500.000</h1>

</div>
</div>
<div className='  border border-y-gray-400  border-none bg-gray-100 w-[290px] my-2 h-[470px] '>
<Image src={card2Image} alt='' width={400}/>
<h1 className='text-2xl  font-bold p-3  max-w-2   '>Leviosa</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
</div>
<div className='   border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-50%</button>
<Image src={card3Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-bold p-3    '>Lolito</h1>
<p className='text-gray-500 mx-3 '>Luxury Big Sofa</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 7.000.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 14.000.000</h1>
</div>
</div>
<div className='  border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-teal-500 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>New</button>
<Image src={card4Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3   '>Respira</h1>
<p className='text-gray-500 mx-3 '>Outdoor bar table and stool</p>
<h1 className=' text-2xl font-semibold p-3 '>Rp 500.000</h1>
</div>
</div>
<div className='  grid grid-cols-2  md:grid-cols-4 gap-6 p-5 mx-10 space-x-2'>
<div className=' border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-30%</button>
<Image src={card1Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3  max-w-2    '>Syltherine</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 3.500.000</h1>

</div>
</div>
<div className='  border border-y-gray-400  border-none bg-gray-100 w-[290px] my-2 h-[470px] '>
<Image src={card2Image} alt='' width={400}/>
<h1 className='text-2xl  font-bold p-3  max-w-2   '>Leviosa</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
</div>
<div className='   border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-50%</button>
<Image src={card3Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-bold p-3    '>Lolito</h1>
<p className='text-gray-500 mx-3 '>Luxury Big Sofa</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 7.000.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 14.000.000</h1>
</div>
</div>
<div className='  border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-teal-500 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>New</button>
<Image src={card4Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3   '>Respira</h1>
<p className='text-gray-500 mx-3 '>Outdoor bar table and stool</p>
<h1 className=' text-2xl font-semibold p-3 '>Rp 500.000</h1>
</div>
</div>
<div className='  grid grid-cols-2  md:grid-cols-4 gap-6 p-5 mx-10 space-x-2'>
<div className=' border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-30%</button>
<Image src={card1Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3  max-w-2    '>Syltherine</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 3.500.000</h1>

</div>
</div>
<div className='  border border-y-gray-400  border-none bg-gray-100 w-[290px] my-2 h-[470px] '>
<Image src={card2Image} alt='' width={400}/>
<h1 className='text-2xl  font-bold p-3  max-w-2   '>Leviosa</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
</div>
<div className='   border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-50%</button>
<Image src={card3Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-bold p-3    '>Lolito</h1>
<p className='text-gray-500 mx-3 '>Luxury Big Sofa</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 7.000.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 14.000.000</h1>
</div>
</div>
<div className='  border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-teal-500 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>New</button>
<Image src={card4Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3   '>Respira</h1>
<p className='text-gray-500 mx-3 '>Outdoor bar table and stool</p>
<h1 className=' text-2xl font-semibold p-3 '>Rp 500.000</h1>
</div>
</div>
<div className='  grid grid-cols-2  md:grid-cols-4 gap-6 p-5 mx-10 space-x-2'>
<div className=' border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-30%</button>
<Image src={card1Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3  max-w-2    '>Syltherine</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 3.500.000</h1>

</div>
</div>
<div className='  border border-y-gray-400  border-none bg-gray-100 w-[290px] my-2 h-[470px] '>
<Image src={card2Image} alt='' width={400}/>
<h1 className='text-2xl  font-bold p-3  max-w-2   '>Leviosa</h1>
<p className='text-gray-500 mx-3 '>Stylish Cafe Center</p>
<h1 className=' text-xl font-semibold p-3 '>Rp 2.500.000</h1>
</div>
<div className='   border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-red-400 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>-50%</button>
<Image src={card3Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-bold p-3    '>Lolito</h1>
<p className='text-gray-500 mx-3 '>Luxury Big Sofa</p>
<div className="flex tems-center gap-2">
<h1 className=' text-xl font-semibold p-3 '>Rp 7.000.000</h1>
<h1 className=' text-md font-semibold p-3 text-gray-400 line-through '>Rp 14.000.000</h1>
</div>
</div>
<div className='  border border-y-gray-400 border-none bg-gray-100 w-[290px] my-2 h-[470px]'>
<div className='display flex justify-end items-start'>
<button className='absolute bg-teal-500 rounded-full mx-5 p-3 my-5 pl-2 pr-2    text-white'>New</button>
<Image src={card4Image} alt='' width={400}/>
</div>
<h1 className='text-2xl font-semibold p-3   '>Respira</h1>
<p className='text-gray-500 mx-3 '>Outdoor bar table and stool</p>
<h1 className=' text-2xl font-semibold p-3 '>Rp 500.000</h1>
</div>
</div>

  <div className='display flex justify-center gap-6 items-center my-20 '>
    <button className=' bg-pink-100 text-lg hover:bg-yellow-600 hover:text-white rounded-2xl p-5 pl-6 pr-7    ' >1</button>
    <button className='bg-pink-100 text-lg hover:bg-yellow-600 hover:text-white rounded-2xl p-5 pl-6 pr-7'>2</button>
    <button className='bg-pink-100 text-lg hover:bg-yellow-600 hover:text-white rounded-2xl p-5 pl-6 pr-7'>3</button>
    <button className='bg-pink-100 text-xl hover:bg-yellow-600 hover:text-white rounded-2xl p-5 pl-6 pr-7'>Next</button>
  </div>
<div className=' display flex items-start pl-10 pt-[100px]  bg-pink-100 w-[1500px] h-[300px]'>
    <Image width={70} src={trophy1Image} alt='' />
    
    <h1 className='font-semibold text-3xl mx-3 '>High Quality
    <p className='text-2xl font-medium text-gray-500 pt-2'>crafted from top materials</p>
    </h1>
   
   
    <Image width={70} className=' mx-10 ' src={checkmarkImage} alt='' />    
    <div className='mx-[-30px]'>
    <h1 className='font-semibold text-3xl mx-1'>Warranty Protection
    <p className='text-xl font-light text-gray-500 pt-2'>Over 2 years</p>
    </h1>
    </div>
   
    <Image width={70} className=' mx-20 ' src={shippingImage} alt='' />    
    <div className='mx-[-70px]'>
    <h1 className='font-semibold text-2xl mx-1'>Free Shipping
    <p className='text-xl font-light text-gray-500 pt-2'>Order over 150$  </p>
    </h1>
    </div>
   
    <Image width={70} className='mx-[100px]' src={customerImage} alt='' />    
    <div className='mx-[-70px]'>
    <h1 className='font-semibold text-2xl mx-1'>24 / 7 Support
    <p className='text-xl font-light text-gray-500 pt-2'>Dedicated Support</p>
    </h1>
    </div>
   </div>
 
    
     
</>
)
}

export default page