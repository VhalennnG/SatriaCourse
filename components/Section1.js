import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 md:py-16 py-12 mx-auto md:w-5/6 w-11/12'>
        <div className='flex flex-col text-center w-full md:mb-20 mb-10'>
          <h2 className='text-sm text-green-500 tracking-widest title-font font-bold mb-1 uppercase'>
            introducing
          </h2>
          <h1 className='sm:text-6xl text-2xl my-2 font-semibold mb-4 text-gray-900'>
            Satria <span className='text-blue-500'>Bimbel</span>
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed md:text-base text-sm'>
            Kami di Satria Bimbel mengutamakan keberhasilan setiap pelanggan
            kami. Kami tidak hanya memberikan pelajaran, tetapi juga membantu
            Anda mengembangkan keterampilan, kepercayaan diri, dan strategi
            belajar yang efektif
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src='/Banner1.svg'
            className='md:w-1/3 w-fit'
            alt='Satria Bimbel'
            width={1200}
            height={800}
            priority
          />
        </div>
        <a
          href='https://api.whatsapp.com/send?phone=085243332776'
          target='__blank'>
          <button className='flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-300 rounded-xl text-lg'>
            Hubungi Kami
          </button>
        </a>
      </div>
    </section>
  );
}
