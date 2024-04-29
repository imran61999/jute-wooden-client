import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    const {image, subcategory_Name, short_description} = category;
    return (
        <Link to='/sameCategory'>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{subcategory_Name}</h2>
                <p>{short_description}</p>
            </div>
        </div>
        </Link>
        );
    };

export default CategoryCard;