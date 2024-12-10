import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomeCraft = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://craft-server-site.vercel.app/craft")
        .then(res => res.json())
        .then(data=>setData(data))
    } , [])


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2sm:grid-cols-1 space-x-5 space-y-5  mx-4">
            {
                data.slice(0,6).map(dt=><div key={dt._id} className=" p-2 bg-slate-800 shadow-xl">
                <figure><img className="h-[280px] w-full" src={dt.image} alt="card" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{dt.item}</h2>
                 
                  <NavLink to={`/craft/${dt._id}`}><button className=" py-1 w-full bg-purple-700 text-white">
                    View Details</button></NavLink>
                 
                </div>
              </div>)
            }
        </div>
    );
};

export default HomeCraft;