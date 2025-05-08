import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Importing the "door out" icon from react-icons
import { useDispatch } from 'react-redux';
import { removeCredentials } from '../slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <header className='flex items-center justify-between px-3 py-4 border-b border-solid border-b-[#f0f2f4]'>
      <div className='flex items-center '>
        <div className='w-10 h-10'>
          <svg
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 6H42L36 24L42 42H6L12 24L6 6Z'
              fill='currentColor'
            ></path>
          </svg>
        </div>
        <h2 className='text-[#111418] text-lg font-bold'>Cinephile</h2>
      </div>

      <div className='flex items-center'>
        <Link
          onClick={() => dispatch(removeCredentials())}
          className='text-[#111418] text-2xl'
        >
          <FaSignOutAlt />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
