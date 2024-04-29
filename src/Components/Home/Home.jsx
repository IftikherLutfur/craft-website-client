import ArtCraftCategory from "../ArtCraftCategory/ArtCraftCategory";
import ExtraRouteOne from "../HomePageData/ExtraRouteOne";
import GetOurUpdate from "../HomePageData/GetOurUpdate";
import HomeCraft from "../HomePageData/HomeCraft";
import Slider from "../HomePageData/Slider";

const Home = () => {
    return (
        <div>
            {/* <Slider></Slider> */}
            <ExtraRouteOne></ExtraRouteOne>
            <HomeCraft></HomeCraft>
            <ArtCraftCategory></ArtCraftCategory>
            <GetOurUpdate></GetOurUpdate>
        </div>
    );
};

export default Home;