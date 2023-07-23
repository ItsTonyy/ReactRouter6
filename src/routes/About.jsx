import { Link } from 'react-router-dom'

export default function About () {
  return(  <div className='w-screen h-screen bg-pink-400' >
    <h1 className='text-3xl'>Welcome to the About Page!</h1>
    <h2 className='text-3xl'>Hi Barbie!</h2>
    <img src="https://uploads.metropoles.com/wp-content/uploads/2022/07/05172341/MargotRobbie-Barbie-Filme-Capa.jpg" alt="barbie" />
    <Link to='/Home' href="/Home" className='text-2xl hover:text-white bg-pink-800 p-2 rounded-lg mt-10'>
      Home   
    </Link>
  </div>
  )
}