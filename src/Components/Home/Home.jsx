import ArtCraftCategory from "../ArtCraftCategory/ArtCraftCategory";
import ExtraRouteOne from "../HomePageData/ExtraRouteOne";
import HomeCraft from "../HomePageData/HomeCraft";
import Slider from "../HomePageData/Slider";

const Home = () => {
    return (
        <div className="bg-zinc-900 text-white">
            <Slider></Slider>
            <ExtraRouteOne></ExtraRouteOne>
            <HomeCraft></HomeCraft>
            <ArtCraftCategory></ArtCraftCategory>
            
        </div>
    );
};

export default Home;