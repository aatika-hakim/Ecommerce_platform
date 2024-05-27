'use client'
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Slider from 'react-slick';
import { ImageList } from '@/utils/data';

interface ImageList {
  id: number;
  title: string;
  description: string;
  img: string;
}

const Hero: React.FC = () => {
  const settings: SliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-200 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      <div className=' h-[700px] w-[700px] bg-primary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((items) => (
            <div key={items.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='relative z-10 flex flex-col justify-center order-2 gap-4 px-2 pt-12 text-center sm:pt-0 sm:text-left sm:order-1'>
                  <h1
                    data-aos='zoom-out'
                    data-aos-duration='500'
                    data-aos-once='true'
                    className='text-4xl font-bold sm:text-5xl lg:text-6xl'>{items.title}</h1>
                  <p
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='100'
                    className='text-sm'>{items.description}</p>
                  <div
                    data-aos='fade-up'
                    data-aos-duration='500'
                    data-aos-delay='300'
                  >
                    <Button className='text-white duration-200 rounded-full hover:scale-105'>
                      Shopping Now
                    </Button>
                  </div>
                </div>
                <div className='order-1 sm:order-2 '>
                  <div
                    data-aos='zoom-in'
                    data-aos-once='true'
                    className='relative z-10'>
                    <Image
                      src={items.img}
                      alt='heroImg'
                      className='w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain lg:scale-120 mx-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

interface SliderSettings {
  dots: boolean;
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  cssEase: string;
  pauseOnHover: boolean;
  pauseOnFocus: boolean;
}
