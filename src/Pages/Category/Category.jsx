import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [mainCategories, setMainCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
            setMainCategories(data);
        })
    },[])
    return (
        <div>
            <h2 className="text-3xl  font-bold text-center">Art & Craft Categories: {mainCategories.length}</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
                {
                    mainCategories.map(mainCategory =><CategoryCard key={mainCategory._id} category={mainCategory}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;