import { Link, useLoaderData } from "react-router-dom"
import getHostVans from '../../../GetVans'
import AuthRequired from "../../../Security/AuthRequired"

export async function loader({ params }) {
  await AuthRequired()
  return getHostVans(params.id)
}

export default function HostVans() {
  /* const [hostVans, setHostVans] = useState([]) */
  const hostVans = useLoaderData()
  console.log(hostVans)
  

  /* useEffect(() => {
    const hostVansFetch = async () => {
      const response = await fetch("/api/host/vans")
      const data = await response.json()
      setHostVans(data.vans)
    }
    hostVansFetch()
  }) */

  const hostVansUi = hostVans.map((van) => (
    <Link to={van.id} key={van.id}>
      <div className='pt-6 pl-4 w-1/2 last:pb-5' key={van.id}>
        <div className='bg-white rounded-lg flex flex-row p-6 last:mb-5 first:mt-2'>
          <img
            src={van.imageUrl}
            alt='van image'
            width={110}
            className='rounded-lg'
          />
          <div className="flex justify-center flex-col pl-5">
            <h3 className='text-xl font-light mb-1'>{van.name}</h3>
            <p className="font-bold">{van.price}/day</p>
          </div>
        </div>
      </div>
    </Link>
))

  return (
    <div className='pl-14 pt-2 bg-orange-100 h-full'>
      <section>
        <h1 className='text-3xl font-bold'>Your Listed Vans</h1>
        {hostVansUi}
      </section>
    </div>
  )
}
