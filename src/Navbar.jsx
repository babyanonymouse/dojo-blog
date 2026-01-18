import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""}>Add a New Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;