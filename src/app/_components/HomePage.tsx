/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';

import FaqSection from './icon.faq';
import MainSlider from './icon.Slider';


export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 bg-background mb-20">
      <MainSlider />
      <ViodeSection />
      <ImageSection1 />
      <p className='text-sm font-medium text-center -leading-tight px-4 md:px-12  italic'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasu</p>
      <ImageSection2 />
      <FaqSection />
      <TextSection />
    </div>
  );
}


function ViodeSection() {
  return (
    <main className="flex flex-col  gap-10 md:gap-14 px-4 md:px-12">
      <h1 className='text-2xl md:text-3xl text-center font-semibold '>UK Virtual Mobile Number. It&apos;s a number for all!</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14'>
        <p className='text-sm font-normal text-blue-900'><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong> Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable Englis</p>
        <section className='p-2 bg-background border shadow rounded-md !h-[30vh] xl:!h-[45vh] '>
          <video src="/video/mov_bbb.mp4" controls className='!w-full !h-full'></video>
        </section>
      </div>
      <p className='text-sm font-normal text-center text-blue-900'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </p>
    </main>
  )
}

function ImageSection1() {
  return (
    <main className='bg-gray-300 p-5 lg:p-12 lg:h-[50vh] xl:h-[80vh] '>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-x-40 place-items-center !h-full">
        <img src='/images/b1.jpeg' alt="slider" className='w-full lg:!h-[60%]  !rounded-md' />
        <img src='/images/b1.jpeg' alt="slider" className='w-full lg:!h-[90%]  !rounded-md' />
        <img src='/images/b1.jpeg' alt="slider" className='w-full lg:!h-[60%]  !rounded-md' />
      </div>
    </main>
  )
}

function ImageSection2() {
  return (
    <main className='bg-gray-300 p-5 h-[50vh] xl:h-[100vh] flex items-center justify-center'>
      <div className="!h-full grid grid-cols-2 gap-4 md:gap-x-10 place-items-end ">
        <section className="w-full h-full  text-center bg-blue-300 rounded-md text-primary-foreground flex flex-col justify-between items-center gap-4">
          <div className='w-full space-y-2 '>
            <h1 className='bg-black/90 text-base py-2  rounded-t-md font-medium '>Recommended</h1>
            <h1 className='font-semibold text-sm md:text-xl py-2 px-4'>UK Virtual Mobile Number <br /> Standard Package</h1>
          </div>
          <Button variant={"secondary"} className='!bg-black/90 !w-1/2 !mb-5' />
        </section>
        <section className="w-full h-[90%] flex flex-col rounded-md">
          <div className="bg-background p-4 h-[40%] rounded-t-md text-center font-semibold">UK Virtual Mobile Number  <br />Standard Package
          </div>
          <div className="bg-gray-200 p-2 h-[60%] flex flex-col items-center justify-between">
            <section />
            <Button variant={"secondary"} className='!bg-black/90 !w-1/2 !mb-3' />
          </div>
        </section>
      </div>
    </main>
  )
}


function TextSection() {
  return (
    <main className='px-4 md:px-12 text-center text-sm font-medium -tracking-tighter text-blue-900 space-y-5'>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The gen <br /> or non-characteristic words etc.
      </p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes o and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"      </p>
    </main>
  )
}