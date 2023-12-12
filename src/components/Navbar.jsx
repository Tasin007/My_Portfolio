import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex  max-w-screen-xl  items-center justify-between navbar bg-base-100 px-4 md:px-6 lg:px-8">
      {/* Navbar Start - Logo and Website Name */}
      <div className="navbar-start">
        <a
          href="/"
          className="btn btn-ghost normal-case text-2xl"
          style={{ fontFamily: "Architects Daughter, cursive" }}
        >
          Tasin.dev
        </a>
      </div>

      {/* Navbar Center - Navigation Links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold text-lg">
          <li>
            <Link to="/" className="flex items-center">
              <svg
                className="fill-current w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Home icon */}
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center">
              <svg
                className="fill-current w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* About icon */}
                <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-2.7 0-8 1.35-8 4v2h16v-2c0-2.65-5.3-4-8-4z" />
              </svg>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center">
              <svg
                className="fill-current w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Projects icon */}
                <path d="M19 10h-4V6h4v4zm-5 0h-4V6h4v4zm-5 0H5V6h4v4zm5 5h-4v-4h4v4zm-5 0H5v-4h4v4zm10 0h-4v-4h4v4zm-1 6H6c-1.1 0-1.99-.9-1.99-2L4 5c0-1.1.89-2 1.99-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm1-16H5v14h14V5z" />
              </svg>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center">
              <svg
                className="fill-current w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Contact icon */}
                <path d="M21 8V7l-3 2-2-2v1l2 2 3-2zm1 3v5c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-5l3 2 2-2 1 1 3-3 3 3 1-1 2 2 3-2z" />
              </svg>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End - GitHub Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/Tasin007"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-circle"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current w-6 h-6"
          >
            <title>GitHub icon</title>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.387-1.337-1.756-1.337-1.756-1.093-.747.083-.732.083-.732 1.21.085 1.845 1.24 1.845 1.24 1.075 1.84 2.82 1.31 3.512.998.108-.78.42-1.31.763-1.612-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.3-.535-1.513.115-3.153 0 0 1.005-.322 3.3 1.23.957-.267 1.98-.4 3-.405 1.02.005 2.043.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.655 1.64.245 2.853.12 3.153.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.825 1.102.825 2.22 0 1.605-.015 2.895-.015 3.29 0 .32.215.697.825.577C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z" />
          </svg>
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown navbar-end lg:hidden">
        <div tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-22"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
