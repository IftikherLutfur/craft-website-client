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
            <GetOurUpdate></GetOurUpdate>
        </div>
    );
};

export default Home;