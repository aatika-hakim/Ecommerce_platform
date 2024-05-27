'use client'
import React from 'react'
import { productData } from '@/utils/data'
import Image from 'next/image'
import { Star } from 'lucide-react'

const ProductList = () => {
  return (
    <div className='py-12 mb-12'>
        <div className='container'>
            {/* Header  */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='font-bold text-primary'>Promotions</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Check What We Have</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi voluptatem in suscipit velit. Earum, enim! Delectus impedit ab, soluta rem dolorem dolores aspernatur vel aperiam. Quia vero quae voluptate!</p>
            </div>
            {/* product Cadrs */}
            <div>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-4 place-items-center'>
                {
                  productData.map((products)=>(
                    <div
                    key={products.id} 
                    data-aos='fade-up'
                    data-aos-delay={products.aosDelay}
                    className='space-y-4 shadow-xl rounded-xl dark:bg-gray-800'>
                      <Image src={products.img} alt='products' 
                      className='h-[250px] w-[370px] object-cover rounded-xl bg-gray-300 p-4' 
                      width="300"
                      height="250" />
                      <div>
                        <h2 className='px-4 font-semibold '>{products.title}</h2>
                        <p className='px-4 text-sm text-gray-600'>{products.color}</p>
                        <div className='flex items-start gap-2 px-4 py-2'>
                          <Star size={20} fill='yellow' className='text-yellow-300 ' />
                          <span>{products.ratings}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList