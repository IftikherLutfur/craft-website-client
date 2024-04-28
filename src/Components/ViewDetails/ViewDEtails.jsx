import { NavLink, useLoaderData } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const ViewDEtails = () => {
    const loader = useLoaderData()
    return (
        <div>
    <div className="flex gap-10 w-[1200px] mx-7 my-10 rounded-xl border-2 border-orange-400 p-5">
        <div className="">
            <img className="w-[1200px] h-full rounded-md" src={loader.image} alt="" />
        </div>
        <div>
           <h1 className="text-2xl"><em>Name:</em> {loader.item}</h1>
           <h1 className="text-2xl"> <em>Category:</em> {loader.category}</h1>
           <p className="text-xl font-semibold"><em className="opacity-85">Price: </em> {loader.price}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Custom: </em> {loader.custom}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Process Time: </em> {loader.process}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Stock: </em> {loader.stock}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Rating: </em> {loader.rating}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Description:</em>{loader.description}</p>
        </div>
          <div className="">
          <NavLink to='/all'>
            <button className=" btn bg-orange-300 flex"><FaArrowAltCircleLeft> </FaArrowAltCircleLeft>Back</button></NavLink>
          </div>
    </div>
        </div>
    );
};

export default ViewDEtails;