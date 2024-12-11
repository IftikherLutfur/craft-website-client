import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

	const { user, logOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

	const userLogOut = () => {
		logOut()
			.then(res => {
				console.log(res)
			})
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<div>
			
			
			<header className="py-2 bg-opacity-70 fixed z-10 w-full bg-black text-white">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          {/* Add a logo or brand name here */}
          <span className="text-xl font-bold">CRAFTY</span>
        </a>

        {/* Desktop Menu */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              className="flex items-center px-4 -mb-1 dark:text-violet-600 dark:border-violet-600"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/addCraft"
              className="flex items-center px-4 -mb-1"
            >
              Add Craft
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/list"
              className="flex items-center px-4 -mb-1"
            >
              My List
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/all"
              className="flex items-center px-4 -mb-1"
            >
              All Art & Craft
            </NavLink>
          </li>
        </ul>

        {/* User Actions */}
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user ? (
            <button onClick={userLogOut} className="px-4 py-2 rounded bg-red-500 text-white">
              Logout
            </button>
          ) : (
            <div className="flex space-x-4">
              <button className="self-center px-4 py-2 rounded bg-gray-700 text-white">
                <NavLink to="/in">Sign in</NavLink>
              </button>
              <button className="self-center px-4 py-2 rounded bg-violet-600 text-white">
                <NavLink to="/up">Register</NavLink>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-4 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="space-y-3 mt-4 bg-black text-white lg:hidden transition-transform duration-300">
          <li>
            <NavLink
              to="/"
              className="block px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCraft"
              className="block px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              Add Craft
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className="block px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              My List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all"
              className="block px-4 py-2"
              onClick={() => setMenuOpen(false)}
            >
              All Art & Craft
            </NavLink>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => {
                  userLogOut();
                  setMenuOpen(false);
                }}
                className="block px-4 py-2 text-red-500"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/in"
                  className="block px-4 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/up"
                  className="block px-4 py-2 bg-violet-600 text-white rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>
              </>
            )}
          </li>
        </ul>
      )}
    </header>

			

		</div>
	);
};

export default Navbar;