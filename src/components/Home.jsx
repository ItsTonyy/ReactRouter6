import { Link } from 'react-router-dom'

export default function Home() {
  return(
    <div className='w-screen h-screen bg-zinc-900' >
      <div className='text-2xl text-white'>
        <p>hello world!</p>
        <Link to='/About' href="/about" className='hover:text-blue-300'>About</Link>
      </div> 
    </div>
  )
}