import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Vans() {
	const [vans, setVans] = useState([])

	useEffect(() => {
		const vansFetch = async () => {
			const response = await fetch('/api/vans')
			const data = await response.json()
			setVans(data.vans)
		}
		vansFetch()
	}, [])

	const vanElements = vans.map((van) => (
		<div key={van.id} className='text-black'>
			<Link to={`/vans/${van.id}`}>
				<img src={van.imageUrl} alt='imagem' width={300} className='rounded-xl' />
				<div className='flex flex-row justify-between w-72'>
					<h3 className='text-lg font-medium'>{van.name}</h3>
						<p className='text-lg font-medium flex flex-col'>
							${van.price}
							<span className='font-normal -mt-2'>/day</span>
						</p>
				</div>
			</Link>
			<i className='bg-teal-700 h-8 not-italic font-medium rounded-md text-orange-100 py-2 px-5'>{van.type}</i>
		</div>
	))

	return (
		<>
			<body className='overflow-x-hidden'>
				<div className='w-screen h-full bg-orange-50'>
					<div className='p-14'>
						<h1 className='text-3xl text-zinc-950 font-bold mb-10'>
							Explore our van options
						</h1>
						<div className='grid grid-rows-2 grid-cols-4 gap-y-8 '>
							{vanElements}
						</div>
					</div>
				</div>
			</body>
		</>
	)
}
