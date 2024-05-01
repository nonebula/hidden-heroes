import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full text-lime-500 mt-5">
      <nav className="flex items-center justify-evenly px-4">
        <a href="/" className="text-xl font-bold">
          Hidden Heroes
        </a>
        <div className="flex">
          <ul className="flex mr-6">
            <li className="mr-6">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="mr-6">
              <NavLink to="/discover">Discover</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
