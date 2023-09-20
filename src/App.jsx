import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

// Error pages
import ErrorPage from "./Security/ErrorPage"
import ErrorPageTwo from "./Security/ErrorPageTwo"

// server of application
import "./server"

// layouts components
import PageLayout from "./components/PageLayout"
import HostLayout from "./components/HostLayout"

// high level of application
import About from "./pages/About"
import Home from "./pages/Home"

// vans components
import Vans, { loader as vansLoader } from "./pages/VansPages/Vans"
import VanDetail, {loader as vansDetailLoader} from "./pages/VansPages/VanDetail"

// mid level of host
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

import HostVans, {loader as hostLoader} from "./pages/host/HostVans/HostVans"
import HostVansId, {loader as hostIdLoader} from "./pages/host/HostVans/HostVansId"

// low level of host
import HostVansDetails from "./pages/host/HostVans/HostVansDetails"
import HostVansPhotos from "./pages/host/HostVans/HostVansPhotos"
import HostVansPricing from "./pages/host/HostVans/HostVansPricing"

// login form and its loader
import Login, { authLoader, action as loginAction } from "./Security/Login"

//Auth Checking
import AuthRequired from "./Security/AuthRequired"

// log out automatically when page is restarted: localStorage.removeItem('loggedIn')


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<PageLayout />} errorElement={<ErrorPageTwo />}>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='/login' element={<Login />} loader={authLoader} action={loginAction} />
        <Route path='Vans' element={<Vans />} loader={vansLoader} />
        <Route path='Vans/:id' element={<VanDetail />} loader={vansDetailLoader} />

          <Route
            path='host'
            element={<HostLayout />}
          >
            <Route
              index
              element={<Dashboard />}
              loader={async ({request}) => await AuthRequired(request)}
            />
            <Route
              path='income'
              element={<Income />}
              loader={async ({request}) => await AuthRequired(request)}
            />
            <Route
              path='reviews'
              element={<Reviews />}
              loader={async ({request}) => await AuthRequired(request)}
            />
            <Route
              path='/host/vans'
              element={<HostVans />}
              loader={hostLoader}
            />
            <Route
              path='/host/vans/:id'
              element={<HostVansId />}
              loader={hostIdLoader}
            >
              <Route
                index
                element={<HostVansDetails />}
                loader={async ({request}) => await AuthRequired(request)}
              />
              <Route
                path='pricing'
                element={<HostVansPricing />}
                loader={async ({request}) => await AuthRequired(request)}
              />
              <Route
                path='photos'
                element={<HostVansPhotos />}
                loader={async ({request}) => await AuthRequired(request)}
              />
            </Route>
          </Route>

        <Route path='*' element={<ErrorPage/>} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
