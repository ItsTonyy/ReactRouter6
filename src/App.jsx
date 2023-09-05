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
import Vans, { loader as vansLoader } from "./pages/Vans"
import VanDetail, {loader as vansDetailLoader} from "./pages/VanDetail"

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

// login form
import Login from "./pages/Login"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PageLayout />} errorElement={<ErrorPageTwo />}>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Vans' element={<Vans />} loader={vansLoader} />
        <Route path='Vans/:id' element={<VanDetail />} loader={vansDetailLoader} />

        <Route
          path='host'
          element={<HostLayout />}
          loader={async () => {
            return null
          }}
        >
          <Route index element={<Dashboard />} />
          <Route
            path='income'
            element={<Income />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path='reviews'
            element={<Reviews />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path='vans'
            element={<HostVans />}
            loader={async () => {
              return null
            }}
          />
          <Route
            path='vans/:id'
            element={<HostVansId />}
            loader={async () => {
              return null
            }}
          >
            <Route
              index
              element={<HostVansDetails />}
              loader={async () => {
                return null
              }}
            />
            <Route
              path='pricing'
              element={<HostVansPricing />}
              loader={async () => {
                return null
              }}
            />
            <Route
              path='photos'
              element={<HostVansPhotos />}
              loader={async () => {
                return null
              }}
            />
          </Route>
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
