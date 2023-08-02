import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function VanDetail() {
	const params = useParams()
	const [van, setVan] = useState(null)

	useEffect(() => {
		const fetchId = async () => {
			const response = await fetch(`/api/vans/${params.id}`)
			const data = await response.json()
			setVan(data.vans)
		}
		fetchId()
	}, [params.id])


	return (
			<div className='w-full h-max bg-orange-100'>
				<Header />
        <div className='mt-10'>
					<Link to={'/vans'}>
					<p className='text-zinc-900/60 text-lg font-medium flex flex-row gap-1 items-center ml-3 hover:underline hover:text-black'><ArrowLeft size={24}/> Back to all vans</p>
					</Link>
          

          {van ? (
            <div className='flex justify-center items-center flex-col mt-10 w-[35rem] m-auto'>
							<h1 className='text-3xl font-semibold mb-6'>{van.name}</h1>
              <img src={van.imageUrl} alt="imagem" width={600} className='rounded-xl mb-8'/>
							
							<div className='flex flex-row justify-between w-full h-fit mb-6'>
								<i className='bg-teal-700 not-italic font-medium
								rounded-md text-orange-100 py-2 px-5'>{van.type}</i>
								
								<p className='text-lg font-medium flex flex-col h-5'>
									${van.price}
									<span className='font-normal -mt-2'>/day</span>
								</p>
							</div>
							
							<p className='text-lg font-light mb-6'>{van.description}</p>
							<button className='bg-orange-400 not-italic font-medium
								rounded-md text-orange-100 py-2 px-12 mb-12'>Rent this van</button>
            </div>
          ) : <h2>is loading...</h2>}
        </div>
				<Footer />
			</div>
	)
}
