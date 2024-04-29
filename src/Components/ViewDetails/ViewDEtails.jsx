import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";


const ViewDEtails = () => {
    // const loaders = useLoaderData();

    // const {id} =useParams()
    // console.log(id);

    // const [product, setProduct] = useState({})

    // useEffect(()=>{
    //     fetch(`https://craft-server-site.vercel.app/craft/${id}`)
    //     .then(res=>res.json())
    //     .then(data => {
    //         setProduct(data)
    //         console.log(data);
    //     })
    // },[id])

    const cards = useLoaderData()
    const { id } = useParams()
    // const idInt  = parseInt(id)
    const card = cards.find(bk => bk._id === id)
    
    // const {id} = useParams();
    // const loader = loaders.find(ld => ld._id === id)
    // console.log(loader);

    // const loader = loader.find(loader=> loader._id === _id)
    // console.log(loader)


    return (
        <div>
    <div className="flex gap-10 w-[1200px] mx-7 my-10 rounded-xl border-2 border-orange-400 p-5">
        <div className="">
            <img className="w-[1200px] h-full rounded-md" src={card.image} alt="" />
        </div>
        <div>
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
            <button className=" btn bg-orange-300 flex"><FaArrowAltCircleLeft> </FaArrowAltCircleLeft>Back</button></NavLink>
          </div>
    </div>
        </div>
    );
};

export default ViewDEtails;