import React, {useState} from 'react'



export default function HomePage() {

const [show, setshow] = useState(null);

  return (
      <div className='grid md:grid-cols-3'>
    <div className='md:col-span-1 md:flex md:justify-end'>
        <nav className='text-right'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold uppercase p-4 border-b border-gray-300'>
                    <a href='/' className='hover:text-gray-800 tracking-widest' alt='Food Ninja' >
                        food Ninja
                    </a>
                </h1>
                <div className="px-4 cursor-pointer hiddden  md:hidden" id="burger" onClick={() =>setshow(!show)} > 
                {
                    show ? (
                        ""
                    ): (
                        
                        <svg className="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )
                }

          </div>
            </div>
        </nav>
    </div>
        {/* //  navigation ends here */}
        <main className='px-12 py-6 bg-gray-100 md:col-span-2'>
            <div className='flex justify-center md:justify-end  '>
                <a href='#' className='text-primary btn border-primary lg:border-2  hover:bg-primary hover:text-white transition ease-out duration-500'>Log IN </a>
                <a href='#' className='text-primary ml-2 btn border-primary lg:border-2 hover:bg-primary hover:text-white transition ease-in-out duration-700'>Sign Up</a>
            </div>

            <header className='mt-4'>
                <h2 className='text-6xl font-bold text-gray-700 leading-none tracking-wider '>Recipes</h2>
                <h3 className='text-2xl mt-4 mb-3 font-bold text-gray-600'>For Ninjas</h3>
            </header>
             
             <div>

                 <h4 className='text-xl mt-4 mb-3 font-bold text-gray-600'>lastest Recipes</h4>

                 <div className='grid lg:grid-cols-3 sm:text-2xl lg:font-mono gap-8'>
                 {/* cards goes here */}
                     <div className=' card hover:shadow-xl '>
                     <img src="img/noodles.jpg" alt='klk' className='w-full h-32 sm:h-52 object-cover'/>

                     <div className='m-4'>

                     <span className='font-bold text-xl block'>Pasta with pepper</span>
                     <span className='block text-gray-500 text-sm'>Recipe by mario</span>

                     </div>
                     <div className="badger">
              <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 min</span>
            </div>
                     </div>
                     <div className=' card hover:shadow-xl '>
                     <img src="img/stew.jpg" alt='klk' className='w-full h-32 sm:h-52 object-cover'/>

                     <div className='m-4'>

                     <span className='font-bold text-xl block'>4 Beans Chills pe</span>
                     <span className='block text-gray-500 text-sm'>Recipe by mario</span>

                     </div>
                     <div className="badger">
              <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 min</span>
            </div>
                     </div>
                     <div className=' card hover:shadow-xl '>
                     <img src="img/curry.jpg" alt='klk' className='w-full h-32 sm:h-52 object-cover'/>

                     <div className='m-4'>

                     <span className='font-bold text-xl block'>Bread and chilly</span>
                     <span className='block text-gray-500 text-sm'>Recipe by mario</span>

                     </div>
                     <div className="badger">
              <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 min</span>
            </div>
                     </div>
                     
                 </div>

                 <h4 className='flex font-serif text-lg mt-4 mb-4'>Most porpular Recipes</h4>

                 <div>
                     {/* <!--  card hover:shadow-lg s go here --> */}

                     <div className='grid lg:grid-cols-3 sm:text-2xl lg:font-mono gap-8'>
                 {/* cards goes here */}
                     <div className=' card  hover'>
                     <img src="img/noodles.jpg" alt='klk' className='w-full h-32 sm:h-52 object-cover'/>

                     <div className='m-4'>

                     <span className='font-bold text-xl block'>Pasta with pepper</span>
                     <span className='block text-gray-500 text-sm'>Recipe by mario</span>

                     </div>
                     <div className="badger">
              <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 min</span>
            </div>
                     </div>
                     <div className=' card hover'>
                     <img src="img/stew.jpg" alt='klk' className='w-full h-32 sm:h-52 object-cover'/>

                     <div className='m-4'>

                     <span className='font-bold text-xl block'>4 Beans Chills pe</span>
                     <span className='block text-gray-500 text-sm'>Recipe by mario</span>

                     </div>
                     <div className="badger">
              <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 min</span>
            </div>
                     </div>
                     <div className=' card hover'>
                     <img src="img/curry.jpg" alt='klk' className='w-full h-32 sm:h-52 object-cover'/>

                     <div className='m-4'>

                     <span className='font-bold text-xl block'>Bread and chilly</span>
                     <span className='block text-gray-500 text-sm'>Recipe by mario</span>

                     </div>
                     <div className="badger">
              <svg className="inline-block w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>25 min</span>
            </div>
                     </div>
                     
                 </div>

                 </div>

                 <div className='flex justify-center md:font-serif mt-10'>
                     <div className=' btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition  duration-300 ease-in-out'>
                         Load More 
                      </div>
                  </div>
              </div>
          </main>
        </div>
  )
}