import { Link, useRouteError } from "react-router-dom"

export default function ErrorPageTwo() {
  const error = useRouteError()

  return (
    <div className='w-full h-[108vh] flex justify-center items-center bg-orange-100 flex-col -mt-20'>
      <img src='src/assets/404error.png' alt='imagem' width={400} />
      <h1 className='w-1/2 text-3xl mb-16 mt-8 font-bold bg-red-400 p-8 rounded-2xl shadow-xl'>
        {`Error ${error.status} - ${error.statusText}: ${error.message}`}
      </h1>
      <Link to='/'>
        <button className='bg-zinc-900 cursor-pointer text-white text-xl px-28 
        py-4 rounded-xl hover:bg-zinc-800'>
          Return to Home
        </button>
      </Link>
    </div>
  )
}