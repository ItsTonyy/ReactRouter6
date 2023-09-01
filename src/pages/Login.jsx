export default function Login() {
  return (
    <div className='h-max w-full bg-orange-100 flex justify-center items-center '>
      <div className='w-5/12 m-20 py-36 bg-orange-300/90 border-2 border-black shadow-2xl
       flex items-center flex-col rounded-xl'>

        <h1 className='text-4xl font-semibold pb-12 top-1'>
          Sign in to your account
        </h1>

        <div className='flex flex-col'>
          <input
            type='email'
            name=''
            id=''
            placeholder='Email Adress'
            className='w-96 h-14 p-2 rounded-t-md border-black/50 border-x border-t border-b'
          />
          <input
            type='password'
            name=''
            id=''
            placeholder='Password'
            className='w-96 h-14 p-2 rounded-b-md border-black/50 border-x border-b'
          />
        </div>

        <button className='w-96 bg-black text-white mt-12 py-2 rounded-lg'>
          Sign In
        </button>

        <div className="flex flex-row mt-12">
          <h3 className="text-sm font-semibold">Don't have an account?</h3>
          <h3 className="text-sm ml-1 cursor-pointer text-white font-semibold">Create one Now.</h3>
        </div>
      </div>
    </div>
  )
}
