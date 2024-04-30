import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyArtCard from "./MyArtCard";
import Swal from "sweetalert2";

const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const [myLists, setMyLists] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${user?.email}`)
        .then(res => res.json())
        .then(data=> setMyLists(data))
    },[])

    const handleDelete = _id=>{
        console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/craft/${_id}`,{
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
              if(data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remaining = myLists.filter(list => list._id !== _id)
                setMyLists(remaining)
                
              }
            })
           
          }
        });
      }
    return (
        <div>
            <h2>My Craft: {myLists?.length}</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center mb-10">
                {
                    myLists?.map(list => <MyArtCard key={list._id} 
                        myCraft={list}
                        handleDelete={handleDelete}
                        ></MyArtCard>)
                }
            </div>

        </div>
    );
};

export default MyArtAndCraft;