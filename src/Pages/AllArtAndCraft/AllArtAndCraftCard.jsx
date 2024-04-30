// import React from 'react';
// import { Link } from 'react-router-dom';

// const AllArtAndCraftCard = ({craft}) => {
//     const { item_name,subcategory_Name, price, rating, customization,stockStatus } = craft;
//     return (
//       <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>No</th>
//         <th>Item Name</th>
//         <th>Sub Category</th>
//         <th>Price</th>
//         <th>Customization</th>
//         <th>Stock Status</th>
//         <th>Details</th>

//       </tr>
//     </thead>
//     <tbody>
//       {
//         craft.map((caf,idx) => <tr key={caf._id}>
//           <th>{idx +1}</th>
//           <td>{item_name}</td>
//           <td>{subcategory_Name}</td>
//           <td>{price}</td>
//           <td>{customization}</td>
//           <td>{stockStatus}</td>
//           <td> <Link to={`/details/${_id}`}>View Details</Link></td>
//         </tr> )
//       }
     
      
//     </tbody>
//   </table>
// </div>
//       //   <div className="card bg-base-100 shadow-xl">
//       //   <figure className="px-10 pt-10">
//       //     <img src={image} alt="Shoes" className="rounded-xl" />
//       //   </figure>
//       //   <div className="card-body items-center text-center">
//       //     <h2 className="card-title">{item_name}</h2>
//       //     <div className="flex flex-col md:flex-row gap-8">
//       //           <p> <strong>Price:</strong> {price}</p>
//       //           <p><strong>Rating:</strong> {rating}</p>
//       //     </div>
//       //     <p><strong>Customization:</strong> {customization}</p>
//       //     <p><strong>Stock Status:</strong>{stockStatus}</p>
//       //     <div className="card-actions">
//       //       <Link to={`/details/${_id}`}><button className="btn btn-secondary btn-sm">View details</button></Link>
//       //     </div>
//       //   </div>
//       // </div>
//     );
// };

// export default AllArtAndCraftCard;