import { useOutletContext } from "react-router-dom"


export default function HostVansPricing() {
  const {currentVan} = useOutletContext()

  return (
    <div className="flex flex-row text-2xl py-8">
      <span className=""><span className="font-semibold">${currentVan.price}</span>/day</span>
    </div>
  )
}