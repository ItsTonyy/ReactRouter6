import { ArrowLeft } from "lucide-react"
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom"
import getVans from "../../GetVans"
import { Suspense } from "react"

export function loader({ params }) {
  return defer({ vansData: getVans(params.id) })
}

export default function VanDetail() {
  const vanDetailsData = useLoaderData()

  const location = useLocation()
  const locationStateSearch = location.state?.search || ""
  const locationStateType = location.state?.type || "all"

  const renderVansDetailElement = (van) => {
    return(
      <div className='w-full h-max bg-orange-50'>
      <div className='pt-10'>
        {console.log(van)}
        <Link to={`/vans${locationStateSearch}`}>
          <p
            className='text-zinc-900/60 text-lg font-medium flex flex-row gap-1 items-center ml-3
            bg-orange-300/80 p-2 rounded-lg w-fit hover:text-black'
          >
            <ArrowLeft size={24} />
            {`back to ${locationStateType} vans`}
          </p>
        </Link>

        <div className='flex justify-center items-center flex-col mt-10 w-[35rem] m-auto select-none'>
          <h1 className='text-4xl font-light mb-6'>{van.name}</h1>
          <img
            src={van.imageUrl}
            alt='imagem'
            width={600}
            className='rounded-xl mb-8'
          />

          <div className='flex flex-row justify-between w-full h-fit mb-6'>
            <i
              className='bg-teal-700 not-italic font-medium
                  rounded-md text-orange-100 py-2 px-5'
            >
              {van.type}
            </i>

            <p className='text-lg font-medium flex flex-col h-5'>
              ${van.price}
              <span className='font-normal -mt-2'>/day</span>
            </p>
          </div>

          <p className='text-xl font-extralight mb-6'>{van.description}</p>
          <button
            className='bg-orange-400 not-italic font-medium
            rounded-md text-orange-100 py-2 px-20 mb-12 hover:bg-orange-500'
          >
            Rent this van
          </button>
        </div>
      </div>
    </div>
    )
  }

  return (
    <Suspense fallback={<h2 className="text-2xl font-semibold mb-[41rem]">Loading...</h2>}>
      <Await resolve={vanDetailsData.vansData}>
        {renderVansDetailElement}
      </Await>
    </Suspense>
  )
}
