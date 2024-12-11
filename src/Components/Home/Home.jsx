import ArtCraftCategory from "../ArtCraftCategory/ArtCraftCategory";
import Banner from "../Banner/Banner";
import ExtraRouteOne from "../HomePageData/ExtraRouteOne";
import HomeCraft from "../HomePageData/HomeCraft";

const Home = () => {
    return (
        <div className="bg-zinc-900 text-white">
           <Banner/>
            <ExtraRouteOne></ExtraRouteOne>
            <HomeCraft></HomeCraft>
            <ArtCraftCategory></ArtCraftCategory>
            
        </div>
    );
};

export default Home;