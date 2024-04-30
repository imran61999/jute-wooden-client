import { useLoaderData } from "react-router-dom";
// import AllArtAndCraftCard from "../AllArtAndCraft/AllArtAndCraftCard";
import CraftItemSectionCard from "../CraftItemsSection/CraftItemSectionCard";

const SameCategories = () => {
    const crafts = useLoaderData();
    return (
        <div>
            <h2>Category: {crafts.length} </h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
                {
                    crafts.map(item => <CraftItemSectionCard key={item._id} craft={item}></CraftItemSectionCard>)
                }
            </div>
        </div>
    );
};

export default SameCategories;