import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

// Error pages
import ErrorPage from "./ErrorPage"
import ErrorPageTwo from "./components/ErrorPageTwo"

// server of application
import "./server"

// layouts components
import PageLayout from "./components/PageLayout"
import HostLayout from "./components/HostLayout"

// high level of application
import About from "./pages/About"
import Home from "./pages/Home"

// vans components
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import { loader as vansLoader } from "./LoaderVans"

// mid level of host
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

import HostVans from "./pages/host/HostVans/HostVans"
import HostVansId from "./pages/host/HostVans/HostVansId"

// low level of host
import HostVansDetails from "./pages/host/HostVans/HostVansDetails"
import HostVansPhotos from "./pages/host/HostVans/HostVansPhotos"
import HostVansPricing from "./pages/host/HostVans/HostVansPricing"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />

        <Route path='Vans' element={<Vans />} loader={vansLoader} errorElement={<ErrorPageTwo />} />
        <Route path='Vans/:id' element={<VanDetail />} />

        <Route path='host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='vans' element={<HostVans />} />
          <Route path='vans/:id' element={<HostVansId />}>
            <Route index element={<HostVansDetails />} />
            <Route path='pricing' element={<HostVansPricing />} />
            <Route path='photos' element={<HostVansPhotos />} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
