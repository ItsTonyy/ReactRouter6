import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout() {
	return (
		<>
			<div className='flex flex-row gap-8 p-6 bg-orange-100 text-xl font-medium text-zinc-600'>
				<NavLink to={'/host'} className={({isActive}) => isActive ? 'text-red-500' : 'text-zinc-600'}>
					<span className='hover:underline hover:text-black'>
						Dashboard
					</span>
				</NavLink>
				<NavLink to={'/host/income'} className={({isActive}) => isActive ? 'text-red-500' : 'text-zinc-600'}>
					<span className='hover:underline hover:text-black'>Income</span>
				</NavLink>
				<NavLink to={'/host/reviews'} className={({isActive}) => isActive ? 'text-red-500' : 'text-zinc-600'}>
					<span className='hover:underline hover:text-black'>Reviews</span>
				</NavLink>
			</div>
			<Outlet />
		</>
	)
}
