import { useEffect, useState } from "react";
import CraftItemSectionCard from "./CraftItemSectionCard";

const CraftItemsSection = () => {
    const [allItem, setAllItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jute-wooden-server.vercel.app/craft')
        .then(res => res.json())
        .then(data => {
            setAllItem(data)
            setLoading(false)
        })
    },[])

    return (
        <div className="mb-10">
            <h2 className="text-3xl text-center">Popular Craft Items</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
                {
                    loading?(
                        <div>
                        <span className="loading loading-ball loading-lg"></span>
                      </div>
                    ):
                    (
                        allItem.slice(0,6).map(item => <CraftItemSectionCard key={item._id} craft={item}></CraftItemSectionCard>)
                    )
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;