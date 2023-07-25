import { useEffect } from 'react'

export default function Vans() {
  
  useEffect(() => {
    const fetchVans = async () => {
      const response = await fetch('/api/vans')
      const data = await response.json()

      console.log(data)
      console.log(response.ok)
    }

    fetchVans()
  }, [])

  return(
    <>
      <div className='w-screen h-screen bg-zinc-800' >
        <h1 className='text-2xl text-gray-200'>Welcome to the Vans Page!</h1>
      </div>
    </>
  )
}