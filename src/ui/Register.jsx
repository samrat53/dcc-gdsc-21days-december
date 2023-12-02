// Register.jsx

// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';
// import {useNavigate} from 'react-router-dom'


export default function Register() {

  const {
    register,
    handleSubmit,
    control,
    watch
    

  } = useForm()
  const password = watch("password","")
  const onSubmit = (data) => console.log(data)

  
 
  
  return (
    <div className='w-1/2 min-h-fit mx-auto mt-40 min-w-fit z-40 relative  ' onSubmit={handleSubmit(onSubmit)}  >
      <form className='bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 custom-bg-color'>
        <div className='mb-4'>
          <label className='flex justify-center mb-4  text-2xl font-extrabold'>
            Sign Up 🚀
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color'
            {...register("username", { required: "Username is required", pattern:
            {
            value:/^[a-zA-Z0-9_]+$/,
            message:"Username must contain only alphabets, numbers and underscores"
            }
          
          })}
            placeholder='Username'
          />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("firstName", { required: true, maxLength: 20 })}
            placeholder='Full Name'
          />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("email", { required: "Email is requried",
            
            pattern:
            {value:/.+@.+\..+/,
           message:"Email must be valid"
          } 
          
          })}
            placeholder='Email'
          />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("enrollmentNumber", { required: "Enrollment number is required",pattern:
            {
            value:/^\d{2}[A-Za-z]{3}\d{3}$/,
            message:"Enrollment number must be in the format of 2 digits, 3 letters, and 3 digits"
            }
          })}
            placeholder='Enrollment Number'
          />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("phoneNumber", { required: "Phone number is required", pattern:
            
            
           {
            value:/^\d{10}$/,
            message:"Phone number must be 10 digits"
           }
          
          })}
            placeholder='Phone number'
          />
        </div>
        <div className='mb-4'>
        <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-white font-bold leading-tight focus:outline-none focus:shadow-outline custom-bg-color '
            {...register("password", { required: true,minLength:8,pattern:[
            {
              value:/[A-Z]/,
              message:"Password must have at least one uppercase letter"
            },
            {
              value:/[a-z]/,
              message:"Password must have at least one lower case letter"
            },
            {
              value:/[0-9]/,
              message:"Password must have atleast one number"
            },
            {
              value: /[\W]/,
              message:"Password must have atleast one special character"
            },
            



            ] 
          
          })}
            placeholder='Password'
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
        </div>
        
        
      
       
        <div className='flex items-center justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type="submit"
            
          >
            Sign Up
          </button>
        </div>
      </form>
      <DevTool control={control}/>
      <div className='text-center'>
        <p className='text-gray-600 text-sm'>
          Already have an account?{' '}
          <Link to='/signin' className='text-blue-500 hover:text-red-500 z-40'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}