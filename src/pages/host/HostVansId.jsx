import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function HostVansId() {
  const [currentVan, setCurrentVan] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const vansFetch = async () => {
      const response = await fetch(`/api/host/vans/${id}`)
      const data = await response.json()
      setCurrentVan(data.vans)
    }
    vansFetch()
  }, [id])

  return (
    <div className='w-full h-full pb-3 bg-orange-50'>
      <div className='pt-10'>
        <Link to={"/host/vans"}>
          <p className='text-zinc-900/60 text-lg font-medium flex flex-row gap-1 items-center ml-3 bg-orange-300/80 p-2 rounded-lg w-fit hover:text-black'>
            <ArrowLeft size={24} /> Back to all vans
          </p>
        </Link>

        {currentVan ? (
          <div className='flex items-center flex-row mt-10 w-[40rem] m-auto select-none bg-white p-10 mb-20 rounded-xl'>
            <img
              src={currentVan.imageUrl}
              alt='imagem'
              width={250}
              className='rounded-xl mb-8'
            />
            <div className='flex flex-col ml-10 gap-3'>
              <i
                className='bg-teal-700 not-italic font-medium
								rounded-md text-orange-100 py-2 px-5 flex justify-center w-1/2'
              >
                {currentVan.type}
              </i>

              <h1 className='text-4xl font-bold mb-6'>{currentVan.name}</h1>

              <div className='flex flex-row justify-center w-fit h-fit -mt-5 text-xl'>
                <p className='font-bold flex flex-row'>
                  ${currentVan.price}
                  <span className='font-normal'>/day</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h2 className='font-medium text-xl m-10'>is loading...</h2>
        )}
      </div>
    </div>
  )
}
