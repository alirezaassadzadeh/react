import React from 'react'
import { products } from '../../data/data';

const ProductsList = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-center font-bold text-md sm:text-xl md:text-2xl lg:text-3xl text-white pt-9">
        محصولات سافت اسپید
      </h1>
      <div className="w-full h-auto  grid grid-cols-1 md:grid-cols-2   justify-center items-center px-2 mt-8 gap-y-10 py-6   gap-x-10 md:gap-x-6">
        {products.slice(0 , 8).map((product) => {
          return (
            <div
              className="w-3/4 h-auto flex flex-col justify-around items-center rounded-lg shadow-lg shadow-slate-600  object-cover bg-slate-200 transform hover:scale-105 transition duration-100 ease-in-out mx-auto"
              key={product.id}
            >
              <img
                className="w-[80%] rounded-t-lg h-80 object-center"
                src={product.image}
                alt={product.name}
              />
              <div className="w-full h-60   md:h-96  flex justify-center items-center flex-col">
                <h2 className="flex justify-start items-center  w-full font-bold text-slate-800 text-lg md:text-xl pr-6  md:pt-4 lg:pt-5">
                  {product.name}
                </h2>
                <p className="w-full text-start text-slate-600 text-sm sm:text-sm md:text-lg px-5 sm:px-6 md:px-7 lg:px-8 py-5 sm:py-6 md:py-7 lg:py-8 ">
                  {String(product.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProductsList