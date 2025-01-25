
import Rectangle1Image from '../Image/Rectangle 1.png'; 
import React from 'react'
import Image from 'next/image';
import trophy1Image from '../shop/trophy 1.png';
import checkmarkImage from '../shop/checkmark.png';
import LogosImage from '../blog/logos1.png';
import searchbarImage from '../blog/searchbar.png';
import adminImage from '../blog/admin-users.png';
import calenderImage from '../blog/calender.png';
import pricetagImage from '../blog/price-tag.png';
import computerImage from '../blog/computer.png';
import drawingImage from '../blog/Drawing.png';
import artsImage from '../blog/arts.png';
import shippingImage from '../shop/shipping.png';
import customerImage from '../shop/customer.png';
const page = () => {
  
    return (
    <>
  
  <div className='relative flex justify-center items-center'>
 
  <Image src={Rectangle1Image} alt="" className="w-full " />

 
  <div className='absolute flex flex-col items-center text-center text-dark'>
   
    <Image src={LogosImage} alt="" className='mb-4' />


    <h1 className='text-5xl text-gray-950 font-semibold'>
     Blog
    </h1>


    <p className='text-xl mt-3'>
      <b>Home &gt;</b> Blog
    </p>
  </div>
</div>

  
<div className='flex flex-col pt-[60px] mx-[60px]'>
 
<div className='flex pt-[60px] mx-[50px]'>
<Image 
   src={computerImage}
  alt=""
  width={900} 
  height={800} 
  
/>
<div className=' display flex mt-5   items-start '>
  
<input type="text" className="  my-[-20px]  pl-10 mx-20 px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

<Image className='absolute mx-[300px] top-1/5 transform -translate-y-1/2 w-5 h-5' src={searchbarImage} alt='Search Icon'  />
 
<div className='absolute flex flex-col items-start my-12 mx-[100px] space-y-10 mb-[300px]'>
<h1 className=" text-2xl font-bold text-grey-darkest">Categories</h1>
<div className='flex text-gray-400'>
<h1 className='text-lg text-gray-400'>Crafts </h1>
<h1 className='text-lg mx-40'>2</h1>
</div>
<div className='flex text-gray-400'>
<h1 className='text-lg text-gray-400'>Design</h1>
<h1 className='text-lg mx-[150px]'>8</h1>
</div>
<div className='flex text-gray-400'>
<h1 className='text-lg text-gray-400'>Handmade</h1>
<h1 className='text-lg mx-[120px]'>7</h1>
</div>
<div className='flex text-gray-400'>
<h1 className='text-lg text-gray-400'>Interior</h1>
<h1 className='text-lg mx-[150px]'>1</h1>
</div>
<div className='flex text-gray-400'>
<h1 className='text-lg text-gray-400'>Wood</h1>
<h1 className='text-lg mx-40'>6</h1>
</div>

</div>


</div>


</div>





<div className='flex justify-start mx-12  text-gray-400 text-xl gap-4 my-5  '>
  <Image src={adminImage} alt=''></Image>
  <h1>Admin</h1>
  <Image src={calenderImage} alt=''></Image>
  <h1>14-Oct-2022</h1>
  <Image src={pricetagImage} alt=''></Image>
  <h1>Wood</h1>



</div>
</div>

<div className=' pl-[110px] my-5 text-3xl font-semibold '>
  <h1>Going all-in with millennial design</h1>
<p className='text-lg pt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la<br></br>bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit<br></br> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br></br>in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus. </p>



  </div>
  <div className='flex pt-[20px] mx-[110px]'>
  <a href="#" className="text-black mt-6 font-large rounded-lg text-lg focus:outline-none space-y-2 underline">
    Read more
</a>
</div>
  <div className=' pt-[60px] mx-[110px]'>
<Image 
   src={drawingImage}
  alt=""
  width={830} 
  height={800} 
  
/>
 <div className='flex  text-gray-400 text-xl gap-4 my-5'>
  <Image src={adminImage} alt=''></Image>
  <h1>Admin</h1>
  <Image src={calenderImage} alt=''></Image>
  <h1>14-Oct-2022</h1>
  <Image src={pricetagImage} alt=''></Image>
  <h1>Wood</h1>

  </div>


</div>

<div className=' pl-[110px] my-10 text-3xl font-semibold '>
  <h1>Exploring new ways of decorating</h1>
  <p className='text-lg pt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la<br></br>bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit<br></br> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br></br>in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus. </p>



  </div>
  <div className='flex  mx-[110px]'>
  <a href="#" className="text-black  font-large rounded-lg text-lg focus:outline-none underline">
    Read more
</a>
</div>

<div className=' pt-[60px] mx-[110px]'>
<Image 
   src={artsImage}
  alt=""
  width={830} 
  height={800} 
  
/>
 <div className='flex  text-gray-400 text-xl gap-4 my-5'>
  <Image src={adminImage} alt=''></Image>
  <h1>Admin</h1>
  <Image src={calenderImage} alt=''></Image>
  <h1>14-Oct-2022</h1>
  <Image src={pricetagImage} alt=''></Image>
  <h1>Wood</h1>

  </div>


</div>

<div className=' pl-[110px] my-10 text-3xl font-semibold '>
  <h1>Handmade pieces that took time to make</h1>
  <p className='text-lg pt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la<br></br>bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit<br></br> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt <br></br>in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus. </p>



  </div>
  <div className='flex  mx-[110px]'>
  <a href="#" className="text-black  font-large rounded-lg text-lg focus:outline-none underline">
    Read more
</a>
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