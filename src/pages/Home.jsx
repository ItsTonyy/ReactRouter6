import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
	return (
		<>
			<body className='overflow-x-hidden'>
				<Header />
				<div className='w-screen h-screen bg-white font-Inter bg-Rio-de-Janeiro bg-no-repeat bg-cover flex  text-white justify-center'>
					<div className='mt-20 p-12'>
						<h1 className='text-5xl font-bold'>
							You Got The Travel Plans, We Got The Travel Vans
						</h1>
						<div className='mt-10 text-2xl flex flex-col items-center'>
							<p className='mb-10'>
								Add adventure to your life by joining the #VanLife movement.
							</p>
							<p>Rent the perfect van to make your perfect road trip</p>
						</div>

						<div className='flex items-center justify-center mt-80'>
							<button className='bg-orange-400 py-3 px-40 rounded-xl hover:bg-orange-500'>
								Find your van
							</button>
						</div>
					</div>
				</div>
				<Footer />
			</body>
		</>
	)
}
