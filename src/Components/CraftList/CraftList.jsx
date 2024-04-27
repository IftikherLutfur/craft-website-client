import ViewCraftListData from "./ViewCraftListData";
import { useLoaderData } from "react-router-dom";

const CraftList = () => {

    const lists = useLoaderData()
    return (
        <div>
            My Craft List:
            <div className="grid grid-cols-2 gap-5">
                {
                    lists.map(cr => <ViewCraftListData key={cr.
                        _id} cr={cr} lists={lists}></ViewCraftListData>)
                }
            </div>
        </div>
    );
};

export default CraftList;