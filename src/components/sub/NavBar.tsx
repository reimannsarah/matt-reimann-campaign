import { NavLink } from 'react-router-dom'

const NavBar = () => {
  // const location = useLocation();
  return (
    <div className='relative'>
      <div className='absolute top-44 right-20 flex flex-row gap-5 text-white font-body text-xl'>
        <div></div>
        <NavLink to="/home">
          <p>Home</p>
        </NavLink>
        <NavLink to="/about">
          <p>About</p>
        </NavLink>
        <NavLink to="/platform">
          <p>Platform</p>
        </NavLink>
        <NavLink to="/endorsements">
          <p>Endorsements</p>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar