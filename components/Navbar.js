import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className='text-gray-600 body-font bg-cyan-50'>
      <div className='container mx-auto flex py-4 flex-row items-center justify-center md:w-5/6 w-11/12'>
        <a className='flex title-font font-medium items-center text-gray-900'>
          <Image
            className='w-12'
            src='/logo.png'
            alt='satria bimbel'
            width={100}
            height={100}
            priority
          />
          <span className='ml-3 text-xl font-bold'>
            Satria <span className=' text-blue-300 '>Bimbel</span>
          </span>
        </a>
        <nav className='mr-auto ml-4 md:py-1 md:pl-4 md:border-gray-400	flex flex-wrap items-center text-base justify-center'></nav>
        <a
          href='https://api.whatsapp.com/send?phone=6285243332776'
          target='__blank'>
          <button className='inline-flex items-center bg-green-500 border-0 px-3 py-2 focus:outline-none hover:bg-blue-300 rounded text-base text-white font-bold'>
            Kontak Kami
          </button>
        </a>
      </div>
    </header>
  );
}
