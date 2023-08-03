import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function PageLayout() {
	return (
		<>
			<header className='bg-orange-100 w-full flex flex-row justify-between py-10 px-14 transition'>
				<div>
					<h1 className='text-3xl font-black'>#VANLIFE</h1>
				</div>
				<div className=''>
					<Link
						to='/'
						className='text-xl text-zinc-900/80 font-medium hover:underline hover:text-black mr-14'
					>
						Home
					</Link>
					<Link
						to='/About'
						className='text-xl text-zinc-900/80 font-medium hover:underline hover:text-zinc-950'
					>
						About
					</Link>
					<Link
						to='/Vans'
						className='ml-14 text-xl text-zinc-900/80 font-medium hover:underline hover:text-zinc-950'
					>
						Vans
					</Link>
				</div>
			</header>

			<Outlet />

			<footer className='w-full h-20 flex justify-center items-center bg-zinc-800 text-gray-400'>
				<p className='text-base'>&copy; 2023 #VANLIFE</p>
			</footer>
		</>
	)
}
