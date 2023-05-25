import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../../providers/AuthProviders";

const CategoryTab = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [subCategories, setSubCategories] = useState(new Set());
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    fetch("https://toy-marketplace-server-side-two.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        const categories = new Set(data.map((toy) => toy.subCategory));
        setSubCategories(categories);
        if (categories.size > 0) {
          setActiveTab([...categories][0]);
        }
      });
  }, []);

  const handleTabClick = (subCategory) => {
    setActiveTab(subCategory);
  };

  return (
    <div className="my-20">
      <h2 className="text-center text-2xl font-semibold md:text-4xl mb-5">
        Product By Category
      </h2>
      <div className="flex md:justify-center space-x-4 mb-8">
        {[...subCategories].map(
          (subCategory) =>
            ["avengers", "star war", "transformers"].includes(subCategory) && (
              <button
                key={subCategory}
                className={`py-2 px-4 rounded-md ${
                  activeTab === subCategory
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleTabClick(subCategory)}
              >
                {subCategory}
              </button>
            )
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allToys
          .filter((toy) => toy.subCategory === activeTab)
          .map((toy) => (
            <div key={toy._id}>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img className="w-56 h-56" src={toy.photo} alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Toy Name: {toy.toyName}</h2>
                  <h3 className="text-md font-semibold">Price: ${toy.price}</h3>
                  <h3 className="text-md font-semibold flex items-center gap-2">
                    <Rating style={{ maxWidth: 120 }} value={toy.rating} readOnly /> {toy.rating}
                  </h3>
                  <div className="card-actions ">
                    <Link
                      to={`/allToys/${toy._id}`}
                      onClick={
                        user?.email
                          ? null
                          : () => alert("You have to log in first to view details")
                      }
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryTab;
