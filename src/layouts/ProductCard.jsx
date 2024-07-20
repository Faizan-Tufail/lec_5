import React, { useEffect } from 'react'

const ProductCard = ({prod}) => {



      
  return (
    <div>
      
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          
            <div key={prod.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img

                  src={prod.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  
                    <a href={prod.href}>
                      <span aria-hidden="true" className="absolute inset-0" />Title: 
                      {prod.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Category: {prod.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{prod.price}</p>
              </div>
            </div>

        </div>
      </div>
    </div>


    </div>
  )
}

export default ProductCard


                                        // 1.

// try{

//     Try to call the API if API can't call then move to the body of catch

// }

// catch(){
  
// }

                                            // 2.

// hook: useEffect 

//             Its an hook that re-render the page when the change occurs on the page.

//             Its ideal for API calling. 


                                            // 3.

// Async/await 

//         Call the API Asynchroniously if it takes time then wait it.API

//         If it takes time it is in "Pending State" , if it hits API then in "Success State", if somehow can't hit then in "Failed State".



                                            // 4.

// axious.get()       it called http library, used when we call Restful APIs i.e POST,GET,PUT,DELETE                                            