import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyArtCard from "./MyArtCard";

const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const [myLists, setMyLists] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${user?.email}`)
        .then(res => res.json())
        .then(data=> setMyLists(data))
    },[])
    return (
        <div>
            <h2>My Craft: {myLists?.length}</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center mb-10">
                {
                    myLists?.map(list => <MyArtCard key={list._id} myCraft={list}></MyArtCard>)
                }
            </div>

        </div>
    );
};

export default MyArtAndCraft;