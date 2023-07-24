import Footer from '../components/Footer'
import Header from '../components/Header'

export default function About () {
  return(
    <>
      <Header/>
      <div className='w-1889 h-723'>
        <img src="./src/images/wallpaper3.jpg" alt="imagem" />
      </div>
      <div className='w-full h-full text-black bg-orange-100 p-12 flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold mb-2'>Don&apos;t Squeeze In A Sedan</h1>
        <h1 className='text-3xl font-bold'>When You Could Relax In A Van</h1>

        <p className='text-xl font-light mt-4'>Our mission is to enliven your road trip with the perfect travel van rental. 
        </p>

        <p className='text-xl font-light mt-2'>Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>

        <p className='text-xl font-light mt-2'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        <div className='w-1/2 h-1/2 bg-orange-400 p-10 rounded-xl mt-8 flex justify-center items-center flex-col'>
          <h1 className='text-3xl font-bold'>Your Destination Is Waiting.</h1>
          <h1 className='text-3xl font-bold'>Your Van is Ready.</h1>
          <button className='mt-8 bg-black p-3 text-gray-100 rounded-2xl font-semibold'>Explore Our Vans</button>
        </div>
      </div>

     
      <Footer/>
    </>
  )
}