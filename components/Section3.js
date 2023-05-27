import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container mx-auto flex md:px-5 md:py-16 py-12 md:flex-row flex-col items-center w-5/6'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <Image
            src='/Banner3.svg'
            className='w-full'
            alt='Satria Bimbel'
            width={1200}
            height={800}
            priority
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 md:pl-24 flex flex-col md:items-end md:text-right mt-10 md:mt-0 items-center text-center'>
          <h1 className='title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900'>
            Relevant <span className='text-blue-500'>Knowladge</span>
          </h1>
          <p className='md:mb-8 leading-relaxed'>
            Kami selalu menghadirkan materi pelajaran yang terkini dan mengikuti
            perkembangan terbaru dalam kurikulum dan ujian, sehingga Anda akan
            selalu mendapatkan informasi terbaru dan relevan. Kami mengajarkan
            trik-trik dan teknik-teknik efektif dalam penyelesaian soal agar
            Anda dapat meningkatkan kecepatan dan akurasi dalam menjawab soal
            ujian.
          </p>
        </div>
      </div>
    </section>
  );
}
