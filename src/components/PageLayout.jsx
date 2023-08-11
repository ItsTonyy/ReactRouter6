import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function PageLayout() {
	return (
		<>
			<header className='bg-orange-100 w-full flex flex-row justify-between py-10 px-14 transition'>
				<div>
					<h1 className='text-3xl font-black'>#VANLIFE</h1>
				</div>
				<div className='text-xl font-medium text-zinc-950/50'>
					<NavLink
						to='/'
						className='mr-10 [&.active]:text-black'
					>
						Home
					</NavLink>
					<NavLink
						to='/About'
						className='mr-10 [&.active]:text-black'
					>
						About
					</NavLink>
					<NavLink
						to='/Vans'
						className='mr-10 [&.active]:text-black'
					>
						Vans
					</NavLink>
					<NavLink
						to='/Host'
						className='mr-10 [&.active]:text-black'
					>
						Host
					</NavLink>
				</div>
			</header>

			<Outlet />

			<footer className='w-full h-20 flex justify-center items-center bg-zinc-800 text-gray-400'>
				<p className='text-base'>&copy; 2023 #VANLIFE</p>
			</footer>
		</>
	)
}
