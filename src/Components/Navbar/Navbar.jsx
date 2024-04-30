import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const {user, loading, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('light')

  const links = <>
    <li> <NavLink to="/">Home</NavLink> </li>
    <li> <NavLink to="/allItem">All Art&Craft Items</NavLink> </li>
    <li> <NavLink to="/addCraft">Add Craft Item</NavLink> </li>
    <li> <NavLink to="/myList">My Art&Craft List</NavLink> </li>
    
  </>

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleLogOut=()=>{
    logOut()
  }
  const handleToggle = e =>{
    if(e.target.checked){
      setTheme('synthwave')
    }
    else{
      setTheme('light')
    }
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Craftify Haven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
 <div className="navbar-end">
            {
             loading ? (
              <p>loading....</p>
             ):
             
              user ? 
             (
              <>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img title={user?.displayName} src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-ghost">Log out</button>
             </>
             )
              : 
             (
              <>
                  <Link to="/login"><button className="btn btn-ghost">Login</button></Link>
                  <Link to="/register"><button className="btn btn-ghost">Register</button></Link>
               </>
             )
             
            }
          </div>
          <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller"/>
</div>
    );
};

export default Navbar;