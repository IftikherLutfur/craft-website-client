import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

	const { user, logOut } = useContext(AuthContext);

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

			<header className="p-4 dark:bg-gray-100 dark:text-gray-800">
				<div className="container flex justify-between h-16 mx-auto">
					<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
						<h1 className="text-2xl font-bold">Crafty</h1>
					</a>
					<ul className="items-stretch hidden space-x-3 lg:flex">

	<li className="flex">
		<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/'>
		<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</a>
	</NavLink>
	</li>
						
						{	user&&<li className="flex">
							<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/addCraft'>
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Add Item</a>
							</NavLink>
						</li>}

						{
						user
						&&
						<li className="flex">
							<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/list'><a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">My List</a></NavLink>
						</li>
						}

						<li className="flex">
			<NavLink className={({isActive}) => isActive? "text-pink-400" : ""} to='/all'>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">All Art & Craft</a>
							</NavLink>
						</li>
					</ul>
					<div className="items-center flex-shrink-0 hidden lg:flex">

						{user ?
							<div className="dropdown dropdown-end">

								<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
										<img alt="Tailwind CSS Navbar component" src={user.photoURL} />
									</div>
								</div>
								<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
									<li>
										<li><a>{user.displayName}</a></li>
										<a className="justify-between">
											Profile
											<span className="badge">New</span>
										</a>
									</li>
									<button onClick={userLogOut}><li><a>Logout</a></li></button>
								</ul>
							</div>
							:
							<div>
								<NavLink to="/in"><button className="self-center px-8 py-3 rounded">Sign in</button></NavLink>
								<NavLink to="/up">
									<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
								</NavLink>
							</div>

						}

					</div>
					{/* <button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button> */}
				</div>
			</header>

		</div>
	);
};

export default Navbar;