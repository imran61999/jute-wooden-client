import { useEffect, useState } from "react";
import AllArtAndCraftCard from "./AllArtAndCraftCard";

const AllArtAndCraft = () => {
    const [allItem, setAllItem] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/craft')
        .then(res => res.json())
        .then(data => setAllItem(data))
    },[])
    return (
        <div>
            <h2>All Craft: {allItem?.length}</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
                {
                    allItem.map(item => <AllArtAndCraftCard key={item._id} craft={item}></AllArtAndCraftCard>)
                }
            </div>
        </div>
    );
};

export default AllArtAndCraft;