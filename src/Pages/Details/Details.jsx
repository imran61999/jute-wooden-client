import { useLoaderData } from "react-router-dom";

const Details = () => {
    const craft = useLoaderData()
    const { _id, user_name, user_email, subcategory_Name,stockStatus,short_description,rating,
         processing_time, price, item_name, image, customization } = craft;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{subcategory_Name}</h2>
    <p> <strong>Item Name:</strong> {item_name}</p>
   <p><strong>Status:</strong> {stockStatus}</p>
   <p> <strong>Description:</strong> {short_description}</p>
   <p> <strong>Rating:</strong> {rating}</p>
   <p> <strong>Processing Time:</strong> {processing_time}</p>
   <p> <strong>Price:</strong> {price}</p>
   <p> <strong>Customization: </strong> {customization}</p>
   <p> <strong>Owner Name:</strong> {user_name}</p>
   <p> <strong>Owner Email:</strong> {user_email}</p>
  </div>
</div>
    );
};

export default Details;