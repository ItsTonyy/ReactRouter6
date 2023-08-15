import { NavLink, Outlet } from "react-router-dom"

export default function HostVansLayout() {
  <>
    <div className="flex flex-row gap-5 text-black text-3xl">
      <NavLink
      to='/details'
      >
       Details
      </NavLink>

      <NavLink
      to='/pricing'
      >
       Pricing
      </NavLink>
      <NavLink
      to='/photos'
      >
        Photos
      </NavLink>
    </div>
    <Outlet/>
  </>
}