
const Banner = () => {
    return (
        <div className="mx-auto py-72 w-full p-8 space-y-3 rounded-xl dark:bg-gray-50 text-white" style={{
            backgroundImage:
      " url('https://images.unsplash.com/photo-1468322638156-074863f9362e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
        }}>
            <h1 className="text-5xl text-center font-bold shadow-2xl text-white">Welcome to our Crafty Website</h1>
        </div>
    );
};

export default Banner;