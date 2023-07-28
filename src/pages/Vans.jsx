import { useEffect, useState } from 'react'
import Header from '../components/Header'

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
			<img src={van.imageUrl} alt='imagem' width={300} className='rounded-xl' />
			<div className='flex flex-row gap-24'>
				<h3 className='text-lg'>{van.name}</h3>
				<p className=''>
					${van.price}
					<span>/day</span>
				</p>
			</div>
			<i></i>
		</div>
	))

	return (
		<>
			<body>
				<div className='w-screen h-full bg-orange-50'>
					<Header />
					<div className='p-14'>
						<h1 className='text-3xl text-zinc-800 font-bold mb-10'>
							Explore our van options
						</h1>
						<div className='grid grid-rows-2 grid-cols-3 gap-y-8 mr-80'>
							{vanElements}
						</div>
					</div>
				</div>
			</body>
		</>
	)
}
