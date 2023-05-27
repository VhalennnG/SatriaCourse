import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <section className='text-gray-600 body-font bg-slate-50'>
      <div className='container mx-auto flex px-5 md:py-16 py-12 md:flex-row flex-col items-center md:w-5/6 w-11/12'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900'>
            Improve <span className='text-blue-500'>Knowladge</span>
          </h1>
          <p className='mb-8 leading-relaxed'>
            Pelajaran kami memberikan tantangan yang membangun kemampuan
            berpikir kritis, pemecahan masalah, dan kreativitas, sehingga Anda
            dapat mengembangkan potensi terbaik Anda.
          </p>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <Image
            src='/Banner2.svg'
            className='w-full'
            alt='Satria Bimbel'
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
}
