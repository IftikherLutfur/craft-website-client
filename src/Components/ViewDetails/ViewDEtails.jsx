import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ViewDEtails = () => {
    
    const cards = useLoaderData()
    const { id } = useParams()
    const card = cards.find(bk => bk._id === id)

    return (
        <div className="pt-20 text-white">
    <div className="flex gap-10 w-[1200px] mx-7 mb-5 pt-20 rounded-xl hover:border-orange-400 hover:border-2 p-5">
        <div className="flex-1">
            <img className="w-[1200px] h-full rounded-md" src={card.image} alt="" />
        </div>
        <div className="flex-1">
           <h1 className="text-2xl"><em>Name:</em> {card.item}</h1>
           <h1 className="text-2xl"> <em>Category:</em> {card.category}</h1>
           <p className="text-xl font-semibold"><em className="opacity-85">Price: </em> {card.price}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Custom: </em> {card.custom}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Process Time: </em> {card.process}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Stock: </em> {card.stock}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Rating: </em> {card.rating}</p>
           <p className="text-xl font-semibold"><em className="opacity-85">Description:</em>{card.description}</p>
        </div>
          <div className="">
          <NavLink to='/all'>
            <button className=" btn bg-zinc-800 p-3 flex items-center gap-1"><FaArrowAltCircleLeft></FaArrowAltCircleLeft>Back</button></NavLink>
          </div>
    </div>
        </div>
    );
};

export default ViewDEtails;