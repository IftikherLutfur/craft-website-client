import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {

    const craft = useLoaderData();
    console.log(craft.category);



    return (
        <div>
            Show All
        </div>
    );
};

export default CategoryDetails;