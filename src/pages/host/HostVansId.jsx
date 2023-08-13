import { useEffect } from "react"
//import { useState } from "react"
import { useParams } from "react-router-dom"

export default function HostVansId() {
  //const [currentVan, setCurrentVan] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const vansFetch = async () => {
      const response = await fetch(`/api/host/vans/${id}`)
      const data = await response.json()
      console.log(data.vans)
      //SetCurrentVan(data.vans);
    }
    vansFetch()
  }, [id])

  return <h1>Host Vans Id</h1>
}
