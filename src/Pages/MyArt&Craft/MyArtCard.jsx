import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtCard = ({myCraft}) => {
    const { _id, image, item_name, price, rating, customization,stockStatus } = myCraft;

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
            }
          })
         
        }
      });
    }
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item_name}</h2>
          <div className="flex flex-col md:flex-row gap-8">
                <p> <strong>Price:</strong> {price}</p>
                <p><strong>Rating:</strong> {rating}</p>
          </div>
          <p><strong>Customization:</strong> {customization}</p>
          <p><strong>Stock Status:</strong>{stockStatus}</p>
          <div className="card-actions">
            <button onClick={()=>handleDelete(_id)} className="btn btn-secondary btn-sm">Delete</button>
            <Link to={`/updateCraft/${_id}`}><button className="btn btn-secondary btn-sm">Update</button></Link>
          </div>
        </div>
      </div>
    );
};

export default MyArtCard;