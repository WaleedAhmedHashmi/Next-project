

import checkoutImage from '../app/Image/checkout.png';
import checkImage from '@/app/Image/check.png';
import Image from 'next/image';



export default function Home() {
  return (
    <>
   
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
  
   
  );


    </>
  );
}
