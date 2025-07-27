import React from 'react'

function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20' >
        <form className='flex flex-col items-center justify-center'>
            <input required className='border-2 border-emerald-600 py-3 px-5 text-xl  outline-none bg-transparent rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input required className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full mt-3 placeholder:text-gray-400' type='password' placeholder='Enter your password' />
            <button  className=' bg-emerald-600 py-3 px-5 text-xl text-white outline-none rounded-full mt-3 placeholder:text-white border-none'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
