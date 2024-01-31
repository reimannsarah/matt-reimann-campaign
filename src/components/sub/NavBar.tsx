import { NavLink, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();
  return (
    <div className='relative'>
      <div className='absolute right-20 flex flex-row gap-5 text-white font-body text-xl'>
        <div></div>
        <NavLink to="/home" className={
          location.pathname === '/home' ? "underline" : ""
        }>
          <p className='hover:underline'>Home</p>
        </NavLink>
        <NavLink to="/about" className={
          location.pathname === '/about' ? "underline" : ""
        }>
          <p className='hover:underline'>About</p>
        </NavLink>
        <NavLink to="/platform" className={
          location.pathname === '/platform' ? "underline" : ""
        }>
          <p className='hover:underline'>Platform</p>
        </NavLink>
        <NavLink to="/endorsements" className={
          location.pathname === '/endorsements' ? "underline" : ""
        }>
          <p className='hover:underline'>Endorsements</p>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar