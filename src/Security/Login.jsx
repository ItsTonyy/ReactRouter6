import { useState } from "react"
import { useLoaderData, useNavigate, Form } from "react-router-dom"
import { loginUser } from "../GetVans"

export function authLoader({ request }) {
  return new URL(request.url).searchParams.get('message')
}

export async function action() {
  console.log('action function')
  return null
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const loaderData = useLoaderData()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    setStatus('submitting')
    setError(null)
    loginUser(loginFormData)
      .then(navigate('/host'))
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => setStatus('idle'))
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    })) 
  }

  return (
    <div className='h-max w-full bg-orange-100 flex justify-center items-center '>
      <div
        className='w-5/12 m-16 py-36 bg-orange-300/90 border-2 border-black shadow-2xl
       flex items-center flex-col rounded-xl'
      >
        {loaderData && <h2 className="p-3 font-medium bg-red-500 rounded-xl mb-4">{loaderData}</h2>}
        {error && <h2 className="p-3 font-medium bg-red-500 rounded-xl mb-4">{error.message}</h2>}

        <h1 className='text-4xl font-semibold pb-12 top-1'>
          Sign in to your account
        </h1>

        <Form method="post">
          <div className='flex flex-col'>
            <input
              type='email'
              name='email'
              placeholder='Email Adress'
              value={loginFormData.email}
              onChange={handleChange}
              className='w-96 h-14 p-2 rounded-t-md border-black/50 border-x border-t border-b'
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={loginFormData.password}
              onChange={handleChange}
              className='w-96 h-14 p-2 rounded-b-md border-black/50 border-x border-b'
            />
          </div>

          <button 
          disabled={status === 'submitting'}
          className={`w-96 ${error? 'bg-red-600' : 'bg-black'} text-white mt-12 py-2 
          rounded-lg disabled:bg-zinc-900/50`}> 
            {status === 'idle' ? 'Log in' : 'submitting...'}
          </button>
        </Form>

        <div className='flex flex-row mt-12'>
          <h3 className='text-sm font-semibold'>Don&apos;t have an account?</h3>
          <h3 className='text-sm ml-1 cursor-pointer text-white font-semibold'>
            Create one Now.
          </h3>
        </div>
      </div>
    </div>
  )
}
