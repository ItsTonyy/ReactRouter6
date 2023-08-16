import { useOutletContext } from "react-router-dom"


export default function HostVansDetails() {
  const {currentVan} = useOutletContext()

  return(
    <div className="">
      <div className="flex flex-row mb-3">
        <p className="font-semibold">Name:</p>
        <p className="ml-2">{currentVan.name}</p>
      </div>

      <div className="flex flex-row mb-3">
        <p className="font-semibold">Category:</p>
        <p className="ml-2">{currentVan.type}</p>
      </div>

      <div className="flex flex-row mb-3">
        <span className=""><span className="font-semibold">Description:</span> {currentVan.description}</span>
      </div>
       
      <div className="flex flex-row mb-3">
        <span className=""><span className="font-semibold">Visibility:</span> Public</span>
      </div>
    </div>
  )
}