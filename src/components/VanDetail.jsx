import { useParams } from 'react-router-dom'

export default function VanDetail() {
  const params = useParams()
  console.log(params)

  return (
    <>
      <div className='w-full h-screen bg-zinc-800'>
        <h1 className='text-white text-2xl'>Welcome to Van Detail Page</h1>
      </div>
    </>
  )
}