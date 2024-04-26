import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {

    const { user } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const image = form.get('image')
        const item = form.get('item')
        const category = form.get('category')
        const price = form.get('price')
        const rating = form.get('rating')
        const custom = form.get('custom')
        const process = form.get('process')
        const stock = form.get('process')
        const description = form.get('description')
        const craftInfo = { image, item, category, price, rating, custom, process, stock, description }
        console.log(craftInfo);
        fetch('http://localhost:5000/craft', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craftInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId>0){
                   return Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })

    }
    return (
        <div>

            <h1 className="text-2xl font-bold my-4 text-center">Add Craft Item</h1>
            <h2 className="font-bold text-center">Name: {user.displayName}</h2>
            <h2 className="font-bold text-center">Email: {user.email}</h2>

            <form onSubmit={handleSignIn} className="space-y-6">

                <div className="grid grid-cols-2 gap-5 px-5">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Image</label>

                        <input
                            type="url"
                            name="image"
                            placeholder="name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name <small>(Item)</small></label>

                        <input
                            type="text"
                            name="item"
                            placeholder="name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name <small>(Sub Category)</small></label>

                        <input
                            type="text"
                            name="category"
                            placeholder="name"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Price</label>

                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Rating</label>

                        <input
                            type="text"
                            name="rating"
                            placeholder="rating"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Customization</label>

                        <input
                            type="text"
                            name="custom"
                            placeholder="yes/no"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>
                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Processing Time</label>

                        <input
                            type="text"
                            name="process"
                            placeholder="time"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Stock Status</label>

                        <input
                            type="text"
                            name="stock"
                            placeholder=" In stock/Made to Order"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>
                    <div className="space-y-1 text-sm col-span-2">

                        <label htmlFor="password" className="block dark:text-gray-600">Description</label>

                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                </div>

                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Add</button>
            </form>
        </div>
    );
};

export default AddCraft;