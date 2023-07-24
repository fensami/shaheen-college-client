import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }

  const list = <>
    <Link to='/'>Home</Link>
    <Link to='/college'>Colleges</Link>
    <Link to='/admission'>Admission</Link>
    <Link to='/mycollege'>My College</Link>

  </>
  return (
    <div className="navbar bg-[#FFE6CC]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm gap-5 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CollegesIT</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold gap-5 px-1">
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/profile' className='md:text-3xl font-bold md:mr-5'>
          {
            user && <p>{user.displayName}</p>
          }
        </Link>

        <>
          {
            user ? <>
              <Link onClick={handleLogout} className="btn btn-outline text-black">Logout</Link> </> :
              <>
                <Link to='/login' className="btn btn-outline text-black hover:bg-green-500">Login</Link>
              </>

          }
        </>
        
      </div>
    </div>
  );
};

export default Navbar;