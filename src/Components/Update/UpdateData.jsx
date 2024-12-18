import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {

    const dataUpdate = useLoaderData();
    const { id } = useParams()
    const updateData = dataUpdate.find(ud => ud._id === id)
    console.log(dataUpdate);
    const { image, item, category, price, rating, custom, process, stock, description } = updateData;



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
        const craftInfo = { image, item, category, price, rating, custom, process, stock, description }
        console.log(craftInfo);
        fetch(`https://craft-server-site.vercel.app/craft/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(craftInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Data has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (data.modifiedCount === 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Already updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }

    return (
        <div className="pt-20 mb-5 px-5">
            <h1 className="text-2xl font-semibold text-center">Update Data</h1>

            <form onSubmit={handleSignIn} className="space-y-6">

                <div className="grid grid-cols-2 gap-5 ">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Image</label>

                        <input
                            type="url"
                            name="image"
                            placeholder="PHoto URL"
                            defaultValue={image}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name <small>(Item)</small></label>

                        <input
                            type="text"
                            name="item"
                            placeholder="name"
                            defaultValue={item}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Name <small>(Sub Category)</small></label>

                        <input
                            type="text"
                            name="category"
                            placeholder="name"
                            defaultValue={category}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Price</label>

                        <input
                            type="text"
                            name="price"
                            placeholder="Price"
                            defaultValue={price}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>


                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Rating</label>

                        <input
                            type="text"
                            name="rating"
                            placeholder="rating"
                            defaultValue={rating}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Customization</label>

                        <input
                            type="text"
                            name="custom"
                            placeholder="yes/no"
                            defaultValue={custom}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>
                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Processing Time</label>

                        <input
                            type="text"
                            name="process"
                            placeholder="time"
                            defaultValue={process}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                    <div className="space-y-1 text-sm">

                        <label htmlFor="password" className="block dark:text-gray-600">Stock Status</label>

                        <input
                            type="text"
                            name="stock"
                            placeholder=" In stock/Made to Order"
                            defaultValue={stock}
                            className="w-full border-2 px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>
                    <div className="space-y-1 text-sm col-span-2">

                        <label htmlFor="password" className="block dark:text-gray-600">Description</label>

                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            defaultValue={description}
                            className="w-full border-2 px-4 py-3 rounded-md 
                            dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                    </div>

                </div>
                <button className="block w-full p-3 text-center rounded-sm text-white bg-zinc-900 ">Update</button>

            </form> 

        </div>
    );
};

export default UpdateData;