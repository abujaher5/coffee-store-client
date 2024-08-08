import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-evenly">
      <NavLink to="/">
        <button className="px-4 py-2 rounded-lg bg-gray-300">Home</button>
      </NavLink>

      <NavLink to="/users">
        {" "}
        <button className="px-4 py-2 rounded-lg bg-gray-300">Users</button>
      </NavLink>
      <NavLink className="px-4 py-2 rounded-lg bg-gray-300" to="/addCoffee">
        <button>Add Coffee</button>
      </NavLink>

      <NavLink to="/signup">
        {" "}
        <button className="px-4 py-2 rounded-lg bg-gray-300">Sign Up</button>
      </NavLink>

      <NavLink to="/signin">
        {" "}
        <button className="px-4 py-2 rounded-lg bg-gray-300">Sign In</button>
      </NavLink>
    </div>
  );
};

export default Header;
