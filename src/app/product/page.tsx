'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Rectangle1Image from '../Image/Rectangle 1.png'; 
import LogosImage from '../blog/logos1.png';
import AsgaardImage from '../Image/Asgaard sofa 1.png';
import OutdoorImage from '../Image/Outdoor sofa .png';

const page = () => {
    const [Api , setApi] = useState([])
    useEffect(() => {
        myFunc();
    }, [])
  
   
      
    async function myFunc() {
        const api = await fetch('https://fakestoreapi.com/products')
        let apijson = await api.json()
        setApi(apijson)
    }
   

    return (
    <>
   <div className='relative flex justify-center items-center'>
 
 <Image src={Rectangle1Image} alt="" className="w-full " />


 <div className='absolute flex flex-col items-center text-center text-dark'>
  
   <Image src={LogosImage} alt="" className='mb-1' />


   <h1 className='text-5xl mb-5 text-black font-semibold'>
    Product Comparison
   </h1>


   <p className='text-xl mb-10'>
     <b>Home &gt;</b> Comparison
   </p>
 </div>
</div>

<div className="absolute pl-[110px] my-10 text-gray-800 font-black space-y-5">
  <h1 className="text-3xl font-semibold">
    Go to Product <br /> page for more <br /> Products
  </h1>
  <button
    type="button"
    className="text-2xl text-gray-500 font-bold border-b border-black pr-2"
  >
    View More
  </button>
  </div>


<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ml-[400px] p-5 space-x-12 ">

  <div className="border rounded-xl bg-pink-100 w-full h-[180px] flex flex-col  p-3">
    <div className="w-full flex justify-end items-start">
      <Image src={AsgaardImage} alt="Asgaard Sofa" width={300} height={100} className="object-contain" />
    </div>
    <div className='mt-10'>
    <h1 className="text-2xl my-2  font-semibold">Asgaard Sofa</h1>
    <h1 className="text-xl font-semibold ">Rp 250,000.00</h1>
    <div className="flex items-center mt-1">
    <span className="ml-2 text-xl font-semibold">4.7</span>
    
      {[...Array(4)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.435 8.215 1.194-5.941 5.788 1.402 8.17L12 18.897l-7.344 3.877 1.402-8.17L.117 9.216l8.215-1.194L12 .587z"/>
        </svg>
      ))}
     
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" style={{ stopColor: '#FACC15', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#D1D5DB', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#halfStar)" d="M12 .587l3.668 7.435 8.215 1.194-5.941 5.788 1.402 8.17L12 18.897l-7.344 3.877 1.402-8.17L.117 9.216l8.215-1.194L12 .587z"/>
      </svg>
     <span className='text-gray-400'>| 204 Reviews</span>
      
    </div>
  </div>
</div>
 
  <div className="border rounded-xl bg-pink-100 w-full h-[180px] flex flex-col items-start p-3">
    <div className="w-full flex justify-end items-start">
      <Image src={OutdoorImage} alt="Outdoor Sofa Set" width={300} height={200}  className="object-contain" />
    </div>
    <div className='mt-2 mr-2'>
    <h1 className="text-2xl my-2  font-semibold">Outdoor Sofa Set</h1>
    <h1 className="text-xl font-semibold">Rp 224,000.00</h1>
    
    <div className="flex items-center mt-1">
    <span className="ml-2 text-xl font-semibold">4.2</span>
     
      {[...Array(4)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.435 8.215 1.194-5.941 5.788 1.402 8.17L12 18.897l-7.344 3.877 1.402-8.17L.117 9.216l8.215-1.194L12 .587z"/>
        </svg>
      ))}
    
      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" style={{ stopColor: '#FACC15', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#D1D5DB', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#halfStar)" d="M12 .587l3.668 7.435 8.215 1.194-5.941 5.788 1.402 8.17L12 18.897l-7.344 3.877 1.402-8.17L.117 9.216l8.215-1.194L12 .587z"/>
      </svg>
      <span className='text-sm text-gray-400 '>| 145 Reviews</span>
   
    </div>

  </div>
</div>
  
<div className="  flex flex-col items-center pl-12 my-10">

<h1 className="text-md font-bold text-gray-800 pr-10">Add A Product</h1>
   
    <div className=" flex flex-col md:flex-row items-start gap-4 ">
   
    <select className="p-3 text-white  bg-yellow-600  hover:bg-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
      <option value="">Choose a Product</option>
      <option value="product1">Product 1</option>
      <option value="product2">Product 2</option>
    </select>
    
   


  
  
  
  </div>
</div>
</div>

<div className='pl-5 my-40'>
     
    {
        Api?.map((items) => {
            return (
            
                <div className='grid md:grid-cols-3 border border-gray-300 p-5 gap-4 pl-5'>
                 <div className='p-5 border-r border-gray-300'>{items.title}</div>
          <div className='p-5 border-r border-gray-300'> {items.description}</div>
          <div>{items.category}</div>
        </div>
             
            )
        })
    }
</div>

    </>
  )
}

export default page