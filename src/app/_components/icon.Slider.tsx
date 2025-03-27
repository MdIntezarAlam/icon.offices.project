import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function MainSlider() {
  const imgArr = [
    { imgs: '/images/s1.jpg' },
    { imgs: '/images/s2.jpg' },
    { imgs: '/images/s3.jpg' },
    { imgs: '/images/s4.jpg' },
  ];
  return (
    <div className=' !overflow-hidden'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        orientation='horizontal'
        className='!m-0 !p-0'
      >
        <CarouselContent className='!m-0 h-[50vh]  !p-0 md:h-[85vh]'>
          {imgArr.map((item, index) => (
            <CarouselItem key={index} className='!m-0 h-full !p-0'>
              <img
                src={item.imgs}
                alt='slider'
                className='h-full w-full object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
