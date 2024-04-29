import { useEffect, useState } from "react";

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
        </div>
    );
};

export default AllArtAndCraft;