import { useOutletContext } from "react-router-dom"


export default function HostVansPhotos() {
  const {currentVan} = useOutletContext()

  return(
    <div>
      <img src={currentVan.imageUrl} alt="image" className="rounded-xl"/>
    </div>
  )
}