import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
   useTitle('Add a toy')
  const handleSubmitAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toysInfo = {
      photo,
      toyName,
      sellerName,
      email,
      subCategory: selectedSubCategory,
      price,
      rating,
      quantity,
      description,
    };
     
    fetch(`https://toy-marketplace-server-side-two.vercel.app/allToy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysInfo),
    })
      .then((res) => res.json())
      .then((data) => {});
      form.reset();
  };
  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  return (
    <div className="my-20">
      <form
        className="max-w-3xl mx-auto border-1 border-gray-100 shadow-2xl p-10"
        onSubmit={handleSubmitAToy}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pictureUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Picture URL
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="photo"
              placeholder="photo url"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Toy Name
            </label>
            <input
              type="text"
              id="name"
              name="toyName"
              placeholder="toy name"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="sellerName"
              className="block text-sm font-medium text-gray-700"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="seller name"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="sellerEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="email"
              defaultValue={user?.email}
              placeholder="seller email"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
           
           <div>
          <label
            htmlFor="subCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Select a sub-category
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option>Select a sub-category</option>
            <option value="avengers">avengers</option>
            <option value="star war">star war</option>
            <option value="transformers">transformers</option>
          </select>
        </div>



          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="price"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="rating"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Available quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Available quantity"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="description"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <input className="btn btn-block mt-7" type="submit" value="Add A Toy" />
      </form>
    </div>
  );
};

export default AddAToy;
