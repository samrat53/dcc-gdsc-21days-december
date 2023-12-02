'use client'
import React from 'react';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useForm }from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { ErrorMessage } from "@hookform/error-message"
export default function SignIn() {

  const {
    register,
    handleSubmit,
   
    watch,
    formState:{errors}
    

  } = useForm({
    criteriaMode:"all"
  })
  const password = watch("password","")
  const onSubmit = (data) => console.log(data)
  
  
  return (
    
    <div className='w-1/2 min-h-fit mx-auto mt-40 min-w-fit z-40 relative'>
      <form className='bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 custom-bg-color'onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='flex justify-center mb-4 text-black text-2xl font-extrabold'>Let's GO 🚀<span></span></label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("email", { required: "Email is a requried field",
            
            pattern:
            {value:/.+@.+\..+/,
           message:"Email must be valid"
          } 
          
          })}
            placeholder='Email'
          />
                <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className="text-red-500"key={type}>{message}</p>
          ))
        }
      />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" },
            pattern: {
              value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)/,

              message: "Password must include uppercase and lowercase letters, a digit, and a special character",
            },
          
          
          })}
            placeholder='Password'
          />
                <ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-500' key={type}>{message}</p>
          ))
        }
      />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("confirmPassword", { required: "Confirm Password is required",
            validate:(value)=> value === password || 
            "Password do not match"
          })}
            placeholder='Confirm Password'
          />
          <ErrorMessage
        errors={errors}
        name="confirmPassword"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p className='text-red-500' key={type}>{message}</p>
          ))
        }
      />
        </div>
        
        <div className='flex items-center justify-center '>
          <button
            className='bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  '
          
            type='submit'
          >
            Sign In
          </button>
        </div>
      </form>
      <div className='text-center'>
        <p className=' text-sm'>
          Don't have an account?{' '}
          {/* <Link href='/Register' className='text-blue-500 hover:text-red-500 z-40'>
            Register now
          </Link> */}
        </p>
      </div>
      <div className='text-center mt-5 '>
        <button className='custom-bg-color  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
         >
          Register Now 
        </button>
      </div>
    </div>
  );
}