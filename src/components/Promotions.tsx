import Image from 'next/image'
import React from 'react'
import product from '../../public/assets/images/product.png'
import { Button } from './ui/button'

const Promotions = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 px-4'>
            <div className='conteiner'>
                <div className='grid items-center grid-cols-1 gap-6 sm:grid-cols-2'>
                    {/* image */}
                    <div 
                    data-aos='zoom-in'
                    >
                        <Image src={product} alt='promotion girl' width={400} height={400} className='max-w-xl h-[350px] w-full mx-auto drop-shadow-[-10px 10px 12px rgba(0, 0, 0, 0.1)] object-cover' />
                    </div>
                    {/* details */}
                    <div 
                    className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl font-bold sm:text-4xl'>Lorem ipsum dolor sit amet.</h1>
                        <p className='text-sm leading-5 tracking-wide text-gray-500'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ab ea autem optio fuga distinctio, quam odio ullam, tempora eum iure. Ipsam vel autem doloremque aliquid nam deserunt illo odit?
                        </p>
                        <Button className='w-32 px-4 text-white rounded-full'>
                            All Products
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotions