import React from 'react'

export default function HomePage() {
  return (
      <div>
    <div>
        <nav className=''>
            <div className=''>
                <h1 className=''>
                    <a href='/' Food Ninja >
                        food Ninja
                    </a>
                </h1>
            </div>
            <ul className=' font-sans text '>
                <li>
                    <a href='#'><span>Home</span></a>
                </li>
                <li>
                    <a href='#'><span className='hidden md:inline-flex'> Abouttt</span></a>
                </li>
                <li>
                    <a href='#'><span className='pb-2 border-gray-300'>Content</span></a>
                </li>
            </ul>
        </nav>
    </div>
        //  navigation ends here
        <main>
            <div>
                <a href='#'>Log IN </a>
                <a href='#'>Sign Up</a>
            </div>

            <header>
                <h2>Recipes</h2>
                <h3>For Ninjas</h3>
            </header>
             
             <div>

                 <h4>lastest Recipes</h4>

                 <div>
                 {/* cards end here */}
                     <div>
                     <img src='' alt=''/>

                     <div>

                     <span>4 Beans Chills pe</span>
                     <span>Recipe by mario</span>

                     </div>

                     </div>
                     
                 </div>

                 <h4>Most porpular Recipes</h4>

                 <div>
                     {/* <!-- cards go here --> */}
                 </div>

                 <div>
                     <div>
                         Load More
                     </div>
                 </div>
                 
             </div>

        </main>
        </div>
  )
}
