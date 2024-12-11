import { useContext} from "react";
import ViewCraftListData from "./ViewCraftListData";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const CraftList = () => {
    const {user} = useContext(AuthContext)

    const lists = useLoaderData()
    console.log(lists);

  const list = lists.filter(lt=> lt.userEmail === user.email)
  console.log(list)

    return (
        <div className="text-white">
           <h1 className=" pt-20 text-center text-3xl font bold font-semibold"> My List</h1>
           <p className="text-center font-semibold opacity-70">Here is all the data you added now you can update & delete</p>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    list.map(cr => <ViewCraftListData key={cr.
                        _id} cr={cr} lists={list}></ViewCraftListData>)
                }
            </div>
        </div>
    );
};

export default CraftList;