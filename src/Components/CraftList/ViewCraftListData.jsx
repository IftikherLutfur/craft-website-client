import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewCraftListData = ({ cr, lists }) => {
    const { _id, item, image, category, price, rating, custom, stock } = cr;


    const [remove, setRemove] = useState(lists)

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/craft/${_id}`,
                        {
                            method: "DELETE"
                        })
                        .then(res => res.json())
                        .then(data => {
                            setRemove(data)

                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Card has been deleted.",
                                    icon: "success"
                                });
                            }

                            const remaining = remove.find(rv => rv._id !== _id)
                            setRemove(remaining)
                        })
                }
            })
    }

    return (
        <div>
            <div className=" gap-48 border-2 bg-slate-100 rounded-xl hover:border-sky-400 px-4 py-2">
                <div className="flex gap-5">
                    <div>
                        <img src={image} className="w-[250px] h-[200px]" alt="" />
                    </div>

                    <div className="space-y-2">
                        <p className="font-bold">Item: {item}</p>
                        <p className="font-bold">Category: {category}</p>
                        <p className="font-bold">Price: {price}</p>
                        <p className="font-bold">Rating: {rating}</p>
                        <p className="font-bold">Custom: {custom}</p>
                        <p className="font-bold">Stock: {stock}</p>
                    </div>
                </div>

                <div className="flex ml-12 my-2 gap-5 mr-5">
                    <NavLink to={`/update/${_id}`}>
                        <button className="btn w-full join-item bg-sky-400">Update</button>
                    </NavLink><button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ViewCraftListData;