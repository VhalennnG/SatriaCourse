import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className='text-gray-600 body-font bg-slate-50'>
      <div className='container md:px-5 py-10 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col w-5/6 justify-between'>
        <div className='md:w-64 flex-shrink-0 text-center md:text-left'>
          <div className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-4'>
            <Image
              className='w-12'
              src='/logo.png'
              alt='satria bimbel'
              width={100}
              height={100}
              priority
            />
            <span className='ml-3 text-xl font-bold'>
              Satria <span className='text-blue-300'>Bimbel</span>
            </span>
          </div>
          <p className='mt-2 text-sm text-gray-500'>
            Raih prestasimu di sekolah dengan Satria Bimbel
          </p>
        </div>
        <div className=' flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='w-full px-4'>
            <h2 className='title-font text-gray-900 tracking-widest text-base font-bold mb-3'>
              Office
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a className='text-gray-600 hover:text-gray-800'>
                  Jl. H. Agussalim No. 31 A Kota Parepare
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className='bg-gray-100'>
        <div className='container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row w-5/6'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            © 2023 Satria Bimbel
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-end'>
            <a
              href='https://www.facebook.com/profile.php?id=100092695375850'
              target='_blank'
              className='text-gray-500'>
              <svg
                fill='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a
              href='https://instagram.com/satriabimbel2023?igshid=NTc4MTIwNjQ2YQ=='
              target='_blank'
              className='ml-3 text-gray-500'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'>
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
