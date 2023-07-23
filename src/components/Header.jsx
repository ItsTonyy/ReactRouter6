import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='bg-orange-50 w-full flex flex-row justify-between py-10 px-14'>
      <div>
        <h1 className='text-3xl font-black'>#VANLIFE</h1>
      </div>
      <div className=''>
        <Link to='/About' className='text-lg font-medium'>About</Link>
        <Link to='/Vans' className='ml-14 text-lg font-medium'>Vans</Link>
      </div>
    </div>
    </>
  )
}