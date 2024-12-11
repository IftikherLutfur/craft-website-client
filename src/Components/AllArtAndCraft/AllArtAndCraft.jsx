import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AllArtAndCraft = () => {

    const [item, setItem] = useState([])
    useEffect(()=>{
        fetch('https://craft-server-site.vercel.app/craft')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 space-y-3 mx-5 pt-20 mb-5 text-white">
            {
            item.map(it=><div key={it._id} className="card card-compact w-96 shadow-2xl bg-zinc-800">
            <figure><img className="h-[350px] w-full" src={it.image} alt="Card" /></figure>
            <div className="">
              <h2 className=" text-center text-xl font-bold">{it.item}</h2>
              <p className="text-center font-bold"> {it.category}</p>
              <div className=" text-xl opacity-90 ml-5">
              <p className="flex"><small> Stock: </small> {it.stock}</p>
              <p className="flex items-center"> <small>Rating: </small>{it.rating}</p>
              <p><small>Process: </small>{it.process}</p>
              </div>
              <div className="w-full">
          <NavLink to={`/craft/${it._id}`}><button className=" w-full text-wite bg-violet-600">
            View Details</button></NavLink>
              </div>
            </div>
          </div>)
            }
        </div>
    );
};

export default AllArtAndCraft;