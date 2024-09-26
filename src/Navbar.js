import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/create" activeClassName="active">Add a New Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;