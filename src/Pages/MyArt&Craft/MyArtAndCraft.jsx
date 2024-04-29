import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
        </div>
    );
};

export default MyArtAndCraft;