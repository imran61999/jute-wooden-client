

const MyArtCard = ({myCraft}) => {
    const { image, item_name, price, rating, customization,stockStatus } = myCraft;
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
            <button className="btn btn-secondary btn-sm">Delete</button>
            <button className="btn btn-secondary btn-sm">Update</button>
          </div>
        </div>
      </div>
    );
};

export default MyArtCard;