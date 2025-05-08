import React from 'react';

const Card = ({ movie }) => {
  return (
    <div key={movie.id} className='bg-white shadow rounded-lg overflow-hidden'>
      <div className='h-40 sm:h-48 bg-gray-300'>
        <img
          src={movie.image}
          alt={movie.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-3 sm:p-4'>
        <h3 className='text-base sm:text-lg font-bold mb-1 sm:mb-2'>
          {movie.title}
        </h3>
        <p className='text-sm text-gray-600'>{movie.description}</p>
      </div>
    </div>
  );
};

export default Card;
