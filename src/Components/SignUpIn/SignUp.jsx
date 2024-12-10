import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


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
        if(!/[A-Z]/.test(password)){
           return Swal.fire({
                icon: "error",
                text: "Must have an Uppercase letter in the password",
              });
        }
        else if(password.length < 6){
            return Swal.fire({
                icon: "error",
                text: "Password should be minimum 6 character ",
              });
        }
        else if(!/[a-z]/.test(password)){
            return Swal.fire({
                icon: "error",
                text: "Must have a Lowercase letter in the password",
              });
        }
        else Swal.fire({
            position: "top",
            icon: "success",
            title: "Registered Successfully",
            showConfirmButton: false,
            timer: 1500
          });
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
        <div 
  className="mx-auto pt-20 w-full p-8 space-y-3 rounded-xl dark:bg-gray-50 text-white"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
            <div className=" mx-auto my-8 w-[500px] p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Register</h1>


                <form onSubmit={handleSignIn} className="space-y-6">

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Photo URL</label>

                        <input
                            type="url"
                            name="image"
                            placeholder="Enter photo URL"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />
                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black focus:dark:border-violet-600" />

                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-zinc-900">Register</button>
                </form>
                
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                
                <p className="font-bold text-center sm:px-6 dark:text-gray-600">Have an account?
                   <Link to='/in'> <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign in</a></Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;