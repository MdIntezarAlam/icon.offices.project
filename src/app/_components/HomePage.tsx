/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';

import FaqSection from './icon.faq';
import MainSlider from './icon.Slider';

export default function HomePage() {
  return (
    <div className='mb-20 flex flex-col gap-10 bg-background'>
      <MainSlider />
      <ViodeSection />
      <ImageSection1 />
      <p className='-leading-tight px-4 text-center text-sm font-medium italic  md:px-12'>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasu
      </p>
      <ImageSection2 />
      <FaqSection />
      <TextSection />
    </div>
  );
}

function ViodeSection() {
  return (
    <main className='flex flex-col  gap-10 px-4 md:gap-14 md:px-12'>
      <h1 className='text-center text-2xl font-semibold md:text-3xl '>
        UK Virtual Mobile Number. It&apos;s a number for all!
      </h1>
      <div className='grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-2'>
        <p className='text-sm font-normal text-blue-900'>
          <strong>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </strong>{' '}
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          &apos;Content here, content here&apos;, making it look like readable
          Englis
        </p>
        <section className='!h-[30vh] rounded-md border bg-background p-2 shadow xl:!h-[45vh] '>
          <video
            src='/video/mov_bbb.mp4'
            controls
            className='!h-full !w-full'
          ></video>
        </section>
      </div>
      <p className='text-center text-sm font-normal text-blue-900'>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </main>
  );
}

function ImageSection1() {
  return (
    <main className='bg-gray-300 p-5 lg:h-[50vh] lg:p-12 xl:h-[80vh] '>
      <div className='grid !h-full grid-cols-1 place-items-center gap-3 lg:grid-cols-3 lg:gap-x-40'>
        <img
          src='/images/b1.jpeg'
          alt='slider'
          className='w-full !rounded-md  lg:!h-[60%]'
        />
        <img
          src='/images/b1.jpeg'
          alt='slider'
          className='w-full !rounded-md  lg:!h-[90%]'
        />
        <img
          src='/images/b1.jpeg'
          alt='slider'
          className='w-full !rounded-md  lg:!h-[60%]'
        />
      </div>
    </main>
  );
}

function ImageSection2() {
  return (
    <main className='flex h-[50vh] items-center justify-center bg-gray-300 p-5 xl:h-[100vh]'>
      <div className='grid !h-full grid-cols-2 place-items-end gap-4 md:gap-x-10 '>
        <section className='flex h-full  w-full flex-col items-center justify-between gap-4 rounded-md bg-blue-300 text-center text-primary-foreground'>
          <div className='w-full space-y-2 '>
            <h1 className='rounded-t-md bg-black/90 py-2  text-base font-medium '>
              Recommended
            </h1>
            <h1 className='px-4 py-2 text-sm font-semibold md:text-xl'>
              UK Virtual Mobile Number <br /> Standard Package
            </h1>
          </div>
          <Button variant={'secondary'} className='!mb-5 !w-1/2 !bg-black/90' />
        </section>
        <section className='flex h-[90%] w-full flex-col rounded-md'>
          <div className='h-[40%] rounded-t-md bg-background p-4 text-center font-semibold'>
            UK Virtual Mobile Number <br />
            Standard Package
          </div>
          <div className='flex h-[60%] flex-col items-center justify-between bg-gray-200 p-2'>
            <section />
            <Button
              variant={'secondary'}
              className='!mb-3 !w-1/2 !bg-black/90'
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function TextSection() {
  return (
    <main className='space-y-5 px-4 text-center text-sm font-medium -tracking-tighter text-blue-900 md:px-12'>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham. chunks as necessary, making this the first true generator
        on the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum
        which looks reasonable. The gen <br /> or non-characteristic words etc.
      </p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes o and going through the
        cites of the word in classical literature, discovered the undoubtable
        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum"{' '}
      </p>
    </main>
  );
}
