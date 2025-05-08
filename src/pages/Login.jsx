import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { z } from 'zod';

import { setCredentials } from '../slices/authSlice';
import Input from '../components/Input';
import FormHeader from '../components/FormHeader';
import { useLoginMutation } from '../slices/userApiSlice';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const Login = () => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (formValues) => {
    setError('');
    const { email, password } = formValues;
    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      methods.reset();
    } catch (err) {
      setError(err?.data?.message || err.error || 'Login failed');
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <FormHeader>Login</FormHeader>

      {error && (
        <div className='mb-4 text-red-600 text-center font-medium'>{error}</div>
      )}

      <div className='m-2 sm:mx-auto sm:w-full sm:max-w-md rounded bg-white shadow pt-8'>
        <div className='py-8 px-4 sm:px-10'>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleLogin)}>
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

              <div className='mt-7'>
                <button
                  type='submit'
                  className={`w-full py-2 rounded transition-colors duration-200 ${
                    isLoading
                      ? 'bg-imdb-blue/60 cursor-not-allowed'
                      : 'bg-imdb-blue hover:bg-imdb-blue-dark'
                  } text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-imdb-blue`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>
          </FormProvider>

          <div className='mt-4 text-sm text-center'>
            <Link
              to='/signup'
              className='text-imdb-blue hover:text-imdb-blue-dark'
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
