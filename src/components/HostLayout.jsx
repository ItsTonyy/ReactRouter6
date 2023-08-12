import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <div className='flex flex-row gap-8 pl-14 pb-6 bg-orange-100 text-xl font-semibold  text-zinc-900/50'>
        <NavLink
          to={"/host"}
          end
          className={({ isActive }) => (isActive ? "text-black" : null)}
        >
          <span className='hover:text-black'>Dashboard</span>
        </NavLink>

        <NavLink
          to={"/host/income"}
          className={({ isActive }) => (isActive ? "text-black" : null)}
        >
          <span className='hover:text-black'>Income</span>
        </NavLink>

        <NavLink
          to={"/host/reviews"}
          className={({ isActive }) => (isActive ? "text-black" : null)}
        >
          <span className='hover:text-black'>Reviews</span>
        </NavLink>

        <NavLink
          to={"/host/vans"}
          className={({ isActive }) => (isActive ? "text-black" : null)}
        >
          <span className='hover:text-black'>Vans</span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
