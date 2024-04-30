import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyArtCard from "./MyArtCard";
import Swal from "sweetalert2";

const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const [myLists, setMyLists] = useState([]);
    const [filterValue, setFilterValue] = useState("All");

    useEffect(()=>{
        fetch(`https://jute-wooden-server.vercel.app/craft/${user?.email}`)
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
            fetch(`https://jute-wooden-server.vercel.app/craft/${_id}`,{
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

      const filteredList = myLists.filter((item) =>
        filterValue === "All" ? true : item.customization === filterValue
    );

    return (
        <div>
            <h2 className="text-3xl text-center">My Craft</h2>
            <div className="flex justify-center my-4">
                <select
                    className="p-2 border rounded"
                    onChange={(e) => setFilterValue(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Yes">Customized</option>
                    <option value="No">Not Customized</option>
                </select>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center mb-10">
                {
                    filteredList?.map(list => <MyArtCard key={list._id} 
                        myCraft={list}
                        handleDelete={handleDelete}
                        ></MyArtCard>)
                }
            </div>

        </div>
    );
};

export default MyArtAndCraft;