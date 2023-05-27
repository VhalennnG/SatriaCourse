import React from "react";

export default function Section5() {
  return (
    <section className='text-gray-600 body-font w-full bg-white'>
      <div className='container mx-auto md:px-5 md:py-20 py-10 w-5/6'>
        <div className=' md:px-14 px-4 md:py-10 py-5 rounded-xl lg:w-full bg-green-500 '>
          <div className=' overflow-hidden flex flex-row items-center w-full'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='white'
                className='md:w-40 w-20'>
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='lg:flex-grow lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center'>
              <h1 className='title-font font-sans sm:text-5xl text-xl md:mb-8 mb-3 font-medium text-white'>
                Punya Pertanyaan, Seputar Bimbel ?
              </h1>
              <div className='flex justify-center'>
                <a
                  href='https://api.whatsapp.com/send?phone=085243332776'
                  target='__blank'>
                  <button className='inline-flex text-white border-2 border-white md:py-2 p-1 md:px-6 focus:outline-none hover:bg-white hover:text-green-500 hover:text-bold rounded md:text-xl text-sm'>
                    Kontak Kami
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
