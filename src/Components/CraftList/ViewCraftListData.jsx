import { useState } from "react";
import { NavLink} from "react-router-dom";
import Swal from "sweetalert2";

const ViewCraftListData = ({ cr, list }) => {
    const { _id, item, image, category, price, rating, custom, stock, process, userEmail } = cr;

console.log(userEmail)
    const [remove, setRemove] = useState(list)

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

                    fetch(`https://craft-server-site.vercel.app/craft/${_id}`,
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
        <div className="">
            <div className=" border-2 ">
               
                  <div className="w-full">
                    <img src={image} alt="" />
                    <div className="">
                    <p className="font-semibold">Category: {category}</p>
                    <p className="font-semibold">Price: {price}</p>
                    <p className="font-semibold">Rating: {rating}</p>
                    <p className="font-semibold">Custom: {custom}</p>
                    <p className="font-semibold">Stock: {stock}</p>
                    <p className="font-semibold">Making Days{process}</p>
                    <p className="font-semibold">Item: {item}</p>
                    </div>
                    
                  </div>

                <div className="flex justify-center my-2 gap-20 mr-5">
                    <NavLink to={`/update/${_id}`}>
                        <button className="bg-violet-600 text-white rounded-md px-2 py-1">Update</button>
                    </NavLink><button onClick={() => handleDelete(_id)} className="  text-white bg-red-600 rounded-md px-2 py-1">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ViewCraftListData;