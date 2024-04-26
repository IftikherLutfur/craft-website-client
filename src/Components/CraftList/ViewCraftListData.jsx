
const ViewCraftListData = ({ cr }) => {
    const {_id, item, image, category, price, rating, custom, stock } = cr;


    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/craft/${_id}`,
    {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    }

    return (
        <div>
            <div className=" flex gap-48 border-2 px-4 py-2">
          <div className="flex gap-5">
          <div>
<img src={image} className="w-[250px] h-[200px]" alt="" />
                </div>

                <div className="space-y-2">
             <p className="font-bold">Item: {item}</p>
             <p className="font-bold">Category: {category}</p>
             <p className="font-bold">Price: {price}</p>
             <p className="font-bold">Rating: {rating}</p>
             <p className="font-bold">Custom: {custom}</p>
             <p className="font-bold">Stock: {stock}</p>
                </div>
          </div>

                <div className="join join-vertical space-y-3 py-10">
  <button className="btn join-item bg-sky-400">Update</button>
  <button onClick={()=>handleDelete(_id)} className="btn join-item bg-orange-500">Delete</button>
</div>
            </div>
        </div>
    );
};

export default ViewCraftListData;