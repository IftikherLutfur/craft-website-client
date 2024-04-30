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
        <div className="grid grid-cols-3 mx-9 hover:border-2 space-y-3">
            {
                data.slice(0,6).map(dt=><div key={dt._id} className=" card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-[350px]" src={dt.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{dt.item}</h2>
                  <p>{dt.description}</p>
                  <NavLink to={`/craft/${dt._id}`}><button className="btn w-full bg-pink-400">
                    View Details</button></NavLink>
                 
                </div>
              </div>)
            }
        </div>
    );
};

export default HomeCraft;