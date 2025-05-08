import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import { setCredentials } from '../slices/authSlice';
import Input from '../components/Input';
import FormHeader from '../components/FormHeader';
import { useSignupMutation } from '../slices/userApiSlice';

const signupSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const SignUp = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const [signup, { isLoading }] = useSignupMutation();

  const methods = useForm({
    resolver: zodResolver(signupSchema),
  });

  const handleSignup = async (formValues) => {
    setError('');
    const { name, email, password } = formValues;
    try {
      const res = await signup({ name, email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      methods.reset();
    } catch (err) {
      setError(err?.data?.message || err.error || 'Signup failed');
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <FormHeader>Signup</FormHeader>

      {error && (
        <div className='mb-4 text-red-600 text-center font-medium'>{error}</div>
      )}

      <div className='m-2 sm:mx-auto sm:w-full sm:max-w-md rounded bg-white shadow pt-8'>
        <div className='py-8 px-4 sm:px-10'>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSignup)}>
              <Input
                name='name'
                label='Name'
                type='text'
                placeholder='Your Name'
                inputClass='focus:border-imdb-blue border-gray-300 '
              />
              <Input
                name='email'
                label='Email'
                type='email'
                placeholder='you@example.com'
                inputClass='focus:border-imdb-blue border-gray-300 '
              />
              <Input
                name='password'
                label='Password'
                type='password'
                placeholder='******'
                inputClass='focus:border-imdb-blue border-gray-300 '
              />
              <Input
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                placeholder='******'
                inputClass='focus:border-imdb-blue border-gray-300 '
              />

              <div className='mt-7'>
                <button
                  type='submit'
                  className={`w-full py-2 rounded transition-colors duration-200 ${
                    isLoading
                      ? 'bg-imdb-blue/60 cursor-not-allowed'
                      : 'bg-imdb-blue hover:bg-[#2b8ee6]'
                  } text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-imdb-blue`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing up...' : 'Signup'}
                </button>
              </div>
            </form>
          </FormProvider>

          <div className='mt-4 text-sm text-center'>
            <Link to='/login' className='text-imdb-blue hover:text-[#2b8ee6]'>
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
