import { Suspense } from "react"
import {
  useSearchParams,
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom"
import getVans from "../../GetVans"

export function loader() {
  return defer({ vansData: getVans() })
}

export default function Vans() {
  const loaderData = useLoaderData()

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  function renderVanElement(vans) {
    const VansFiltered = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans

    const vanElements = VansFiltered?.map((van) => (
      <div key={van.id} className='text-black'>
        {console.log(van)}
        <Link
          to={van.id}
          state={{
            search: `?${searchParams.toString()}`,
            type: `${typeFilter === null ? "all" : typeFilter}`,
          }}
        >
          <img
            src={van.imageUrl}
            alt='imagem'
            width={300}
            className='rounded-xl'
          />
          <div className='flex flex-row justify-between w-72'>
            <h3 className='text-lg font-medium'>{van.name}</h3>
            <p className='text-lg font-medium flex flex-col'>
              ${van.price}
              <span className='font-normal -mt-2'>/day</span>
            </p>
          </div>
        </Link>
        <i
          className={`${
            van.type === "Rugged"
              ? "bg-teal-900"
              : van.type === "Simple"
              ? "bg-orange-500/80"
              : van.type === "Luxury"
              ? "bg-zinc-950"
              : "bg-gray-500"
          } h-8 not-italic font-medium rounded-md text-orange-100 py-2 px-5`}
        >
          {van.type}
        </i>
      </div>
    ))

    return (
      <>
        <div className='mb-10'>
          <button
            onClick={() => setSearchParams({ type: "Simple" })}
            className={`${
              typeFilter === "Simple" ? "bg-orange-500/80" : "bg-orange-200/70"}
            focus:text-white hover:bg-orange-500/80 px-4 py-2 rounded-lg mr-5
            text-zinc-950/80 font-medium`}
          >
            Simple
          </button>

          <button
            onClick={() => setSearchParams({ type: "Luxury" })}
            className={`${
              typeFilter === "Luxury" ? "bg-zinc-950" : "bg-orange-200/70"}
            focus:text-white hover:bg-zinc-950 hover:text-white px-4 py-2 rounded-lg
              mr-5 text-zinc-950/80 font-medium`}
          >
            Luxury
          </button>

          <button
            onClick={() => setSearchParams({ type: "Rugged" })}
            className={`${
              typeFilter === "Rugged" ? "bg-teal-900" : "bg-orange-200/70"}
            focus:text-white px-4 py-2 rounded-lg mr-5 text-zinc-950/80 font-medium`}
          >
            Rugged
          </button>

          <button
            onClick={() => setSearchParams({})}
            className={`text-zinc-950/90 text-lg ${typeFilter ? null : "hidden"}`}
          >
            Clear Filters
          </button>
        </div>
        <div className='grid grid-rows-2 grid-cols-4 gap-y-14 '>
          {vanElements}
        </div>
      </>
    )
  }

  return (
    <body className='overflow-x-hidden'>
      <div className='w-screen h-full bg-orange-50'>
        <div className='p-14'>
          <h1 className='text-3xl text-zinc-950 font-bold mb-8'>
            Explore Our Van Options
          </h1>
          <Suspense fallback={<h2 className="text-2xl font-semibold mb-[41rem]">Loading...</h2>}>
            <Await resolve={loaderData.vansData}>
              {renderVanElement}
            </Await>
          </Suspense>
        </div>
      </div>
    </body>
  )
}
