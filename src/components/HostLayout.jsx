import { Link } from 'react-router-dom'


export default function HostLayout() {
	return (
		<div className='flex flex-row gap-8 p-6 bg-orange-100 text-xl font-medium text-zinc-600'>
			<Link to={'/host'}>
				<span className='ml-8 hover:underline hover:text-black'>Dashboard</span>
			</Link>
			<Link to={'/host/income'}>
				<span className='hover:underline hover:text-black'>Income</span>
			</Link>
			<Link to={'/host/reviews'}>
				<span className='hover:underline hover:text-black'>Reviews</span>
			</Link>
		</div>
	)
}
