import React from 'react'
import Rectangle1Image from '../Image/Rectangle 1.png'; 
import Image from 'next/image';
import LogosImage from '../blog/logos1.png';
const page = () => {
  return (
   <>
   <div className='relative flex justify-center items-center'>
 
 <Image src={Rectangle1Image} alt="" className="w-full " />


 <div className='absolute flex flex-col items-center text-center text-dark'>
  
   <Image src={LogosImage} alt="" className='mb-4' />


   <h1 className='text-5xl text-gray-950 font-semibold'>
    Contact
   </h1>

   
   <p className='text-xl mt-3'>
     <b>Home &gt;</b> Contact
   </p>
 </div>
</div>
  
  <section className='text-center my-20 space-y-6'>
    <h1 className='text-5xl font-bold'>Get In Touch With Us</h1>
    <p className='text-gray-400 text-xl'>For More Information About Our Product & Services. Please Feel free To Drop Us <br></br>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate! </p>
  </section>
  
<section className="p-6   ">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 ">
   
    <div className="space-y-9">
      <div>
        <h3 className="text-3xl font-semibold flex items-center gap-3 my-2">
          Address
        </h3>
        <p className="text-black text-xl">236 5th SE Avenue,<br></br> New York NY10000, United<br></br> States</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold flex items-center gap-3 my-2">
           Phone
        </h3>
        <p className="text-black text-xl">Mobile: +(84) 546-6789</p>
        <p className="text-black text-xl">Hotline: +(84) 456-6789</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold flex items-center gap-2 my-2">
           Working Time
        </h3>
        <p className="text-black text-xl">Monday-Friday: 9:00 - <br></br>22:00</p>
        <p className="text-black text-xl">Saturday-Sunday: 9:00 - <br></br> 21:00</p>
      </div>
    </div>


    <form className="space-y-9 bg-white p-6 rounded-lg ">
      <div>
        <label className="  font-semibold  text-lg ">Your name</label>
        <input type="text"  className='h-[70px]  w-[520px] border border-gray-400 rounded-lg text-lg pl-6 my-5' placeholder='Abc' />
      </div>
      <div>
        <label className="  font-semibold text-lg  ">Email Address</label>
        <input type="email" className='h-[70px] w-[520px] border border-gray-400 rounded-lg text-lg pl-6 my-5' placeholder='Abc@def.com' />
      </div>
      <div>
        <label className="block font-bold text-lg">Subject</label>
        <input type="text"  className='h-[70px] w-[520px] border border-gray-400 rounded-lg text-lg pl-6 my-5' placeholder='This is an optional' />
      </div>
      <div>
        <label className="block  font-bold text-lg">Message</label>
        <textarea className='border border border-gray-400 rounded-lg mb-5 text-xl pl-6 pt-6  my-5' placeholder='Hi! i`d like to ask about '  rows={4} cols={47}></textarea>
      </div>
      <button type="submit" className="w-[300px]   bg-yellow-600 text-white py-5 text-xl rounded-md hover:bg-yellow-600 ">
        Submit
      </button>
    </form>
  </div>
</section>

   </>
  )
}

export default page