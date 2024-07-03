

const ArtCraftCategory = () => {

    return (
        <div>
            <br />
            <hr />
            <br />
            <h1 className="text-2xl font-semibold my-5 text-center">Our Categories</h1>
        <div className="grid grid-cols-3 gap-5 space-y-3 my-5 ml-16">
           <div className="card w-80 h-64 bg-base-100 shadow-xl image-full">
                <figure><img src="https://art4you.ie/wp-content/uploads/2021/01/IMG_20210109_144030-1000x657.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center my-12">Landscape Painting</h2>
                   
                </div>
            </div>
        
           <div className="card w-80 h-64 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full" src="https://live.staticflickr.com/65535/50348656911_fd7ea47abc_b.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="text-2xl font-semibold text-center my-12">Portrait Drawing</h2>
                </div>
            </div>
          
           <div className="card w-80 h-64 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full"  src="https://images-cdn.ubuy.co.id/633ff6b6d8e912060613f5ca-yasheng-art-landscape-oil-painting-on.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="text-2xl font-semibold text-center my-12">Oil Painting</h2>
                </div>
            </div>
        
           <div className="card w-80 h-64 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full h-full"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP76ouuYfNwLiksFihc4yrTA_B5Mh7CnA4_WotHfLAtDXyivUtDxpGVfKb3IRT_kf79g&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="text-2xl font-semibold text-center my-12">Watercolour Painting</h2>
                </div>
            </div>
        
           <div className="card w-80 h-64 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full" src="https://imgs4.freeup.app/400x400/dd071952e6ada4f6e5c828dc0677e1a4.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="text-2xl font-semibold text-center my-12">Cartoon Drawing</h2>
                </div>
            </div>
           
                  <div className="card w-80 h-64 bg-base-100 shadow-xl image-full">
                <figure><img className="w-full" src="https://megancoyle.com/wp-content/uploads/Charcoal-Figure.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="text-2xl font-semibold text-center my-12">Charcoal Sketching</h2>
                </div>
            </div>
        

        </div>

        </div>
    );
};

export default ArtCraftCategory;