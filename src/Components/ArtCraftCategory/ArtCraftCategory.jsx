import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ArtCraftCategory = () => {


    const {user} = useContext(AuthContext)
    const [categories, setCategories] = useState([])

    const handleCategory = () =>{
        fetch(`https://craft-server-site.vercel.app/category/${user.displayName}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div>

          <button onClick={handleCategory}><Link to='/category'>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCRpjfO9n8K9Kuvz5KqF5rrB5Y0TCS-_8Yqd2NyK_Z2110PL7vAqEywEn-77fg4FebNc&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
          </Link> </button>
        </div>
    );
};

export default ArtCraftCategory;