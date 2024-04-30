import Slider from "../../Components/Slider/Slider";
import Category from "../Category/Category";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CraftItemsSection></CraftItemsSection>
            <Category></Category>
        </div>
    );
};

export default Home;