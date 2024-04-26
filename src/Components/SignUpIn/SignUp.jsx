import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SignUp = () => {
    
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const image = form.get('image')
        const password = form.get('password')
        const userInformation = { name, email, image, password, }
        console.log(userInformation);
      createUser(email,password)
      .then(res => {
        updateUserProfile(name,image)
        console.log(res.user)
        
      })
      .catch(error => {
        console.log(error);
      })

    }

    return (
        <div>
            <div className=" mx-auto my-8 w-[500px] p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register</h1>


                <form onSubmit={handleSignIn} className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Photo URL</label>

                        <input
                            type="url"
                            name="image"
                            placeholder="name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
                </form>
                
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Have an account?
                    <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;