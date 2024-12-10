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
        const stock = form.get('stock')
        const description = form.get('description')
        const userEmail = form.get('userEmail')
        const userName = form.get('userName')
        const craftInfo = { image, item, category, price, rating, custom, process, stock, description, userEmail, userName }
        console.log(craftInfo);
        fetch('https://craft-server-site.vercel.app/craft', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craftInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Card has been added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }
    return (
        <div className="mx-10  pt-16 p-4 rounded-xl">

            <h1 className="text-2xl font-bold my-4 text-center text-Black">Add Product</h1>

            <form onSubmit={handleSignIn} className="space-y-6">

                <div className="grid grid-cols-2 gap-5 px-5">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-Black">Image</label>

                        <input
                            type="url"
                            name="image"
                            placeholder="Photo URL"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-Black">Name <small>(Item)</small></label>

                        <input
                            type="text"
                            name="item"
                            placeholder="Item Name"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-Black">Name <small>(Sub Category)</small></label>

                        <input
                            type="text"
                            name="category"
                            placeholder="Category Name"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block text-Black">Price</label>

                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block text-Black">Rating</label>

                        <input
                            type="text"
                            name="rating"
                            placeholder="rating"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block text-Black">Customization</label>

                        <input
                            type="text"
                            name="custom"
                            placeholder="yes/no"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>
                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block text-Black">Processing Time</label>

                        <input
                            type="text"
                            name="process"
                            placeholder="time"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block text-Black">Stock Status</label>

                        <input
                            type="text"
                            name="stock"
                            placeholder=" In stock/Made to Order"
                            className="w-full px-4 py-3 rounded-md border-2  dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className=" space-y-1 text-sm col-span-2">

                        <label htmlFor="password" className="block text-Black">Description</label>

                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className=" border-2  w-full px-4 py-3 rounded-md dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>



                    <div className=" space-y-1 text-sm">

                        <label htmlFor="password" className="block text-Black">Your Email</label>

                        <input
                            type="text"
                            name="userEmail"
                            placeholder="Description"
                            defaultValue={user?.email}
                            className=" border-2  w-full px-4 py-3 rounded-md bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" disabled />

                    </div>
                    <div className=" space-y-1 text-sm ">

                        <label htmlFor="password" className="block text-Black">Your Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Description"
                            defaultValue={user?.displayName}
                            className=" border-2  w-full px-4 py-3 rounded-md bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" disabled />

                    </div>


                </div>

                <button className="block w-full p-3 text-center rounded-sm text-Black bg-zinc-900">Add Product</button>
            </form>
        </div>
    );
};

export default AddCraft;