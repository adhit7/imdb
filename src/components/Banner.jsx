import React from 'react';

const Banner = () => {
  return (
    <div
      className='bg-cover bg-center py-20 px-4 text-center text-white my-2 rounded-xl'
      style={{
        backgroundImage:
          'url("https://cdn.usegalileo.ai/sdxl10/463e69be-d0da-4a55-a703-bb6e715c8499.png")',
      }}
    >
      <h1 className='text-4xl font-black mb-4'>
        Welcome to our movie database platform
      </h1>
      <button className='bg-blue-600 px-6 py-2 rounded-xl text-white text-lg font-bold'>
        Add Movie
      </button>
    </div>
  );
};

export default Banner;
