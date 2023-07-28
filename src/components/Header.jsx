import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='bg-orange-50 w-full flex flex-row justify-between py-10 px-14'>
      <div>
        <h1 className='text-3xl font-black'>#VANLIFE</h1>
      </div>
      <div className=''>
       <Link to='/' className='text-xl text-zinc-900/80 font-medium hover:underline hover:text-black mr-14'>Home</Link>
        <Link to='/About' className='text-xl text-zinc-900/80 font-medium hover:underline hover:text-zinc-950'>About</Link>
        <Link to='/Vans' className='ml-14 text-xl text-zinc-900/80 font-medium hover:underline hover:text-zinc-950'>Vans</Link>
      </div>
    </div>
    </>
  )
}