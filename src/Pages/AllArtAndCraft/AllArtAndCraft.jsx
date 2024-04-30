import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArtAndCraft = () => {
    const [allItem, setAllItem] = useState([]);
    const [loading, setLoading] =useState(true);

    useEffect(()=>{
        fetch('https://jute-wooden-server.vercel.app/craft')
        .then(res => res.json())
        .then(data => {
          setAllItem(data)
          setLoading(false)
        })
    },[])
    return (
        <div className="overflow-x-auto">
        {
          loading? (
            <div>
              <span className="loading loading-ball loading-lg"></span>
            </div>
          ):(<table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Item Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Customization</th>
              <th>Stock Status</th>
              <th>Details</th>
      
            </tr>
          </thead>
          <tbody>
            {
              allItem?.map((caf,idx) => <tr key={caf._id}>
                <th>{idx +1}</th>
                <td>{caf.item_name}</td>
                <td>{caf.subcategory_Name}</td>
                <td>{caf.price}</td>
                <td>{caf.customization}</td>
                <td>{caf.stockStatus}</td>
                <td> <Link to={`/details/${caf._id}`}>View Details</Link></td>
              </tr> )
            }            
          </tbody>
        </table>)
        }
      </div>
    );
};

export default AllArtAndCraft;