import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateMyToy = () => {
  useTitle('update a toy')
  const toy = useLoaderData();
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toysInfo = {
      price,
      quantity,
      description,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(
          `https://toy-marketplace-server-side-two.vercel.app/allToy/${toy?._id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(toysInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire("Updated!", "Your Toy has been Updated.", "success");
            }
          });
      }
    });

    // fetch(`https://toy-marketplace-server-side-two.vercel.app/allToy`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(toysInfo),
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
  };
  return (
    <div className="my-20">
      <form
        className="max-w-3xl mx-auto border-1 border-gray-100 shadow-2xl p-10"
        onSubmit={handleUpdateToy}
      >
        <h2 className="text-center mb-10 text-3xl font-semibold">
          {toy.toyName}
        </h2>
        <div className="grid grid-cols-2 gap-4">
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
              defaultValue={toy.price}
              name="price"
              placeholder="price"
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
              defaultValue={toy.quantity}
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
              defaultValue={toy.description}
              placeholder="description"
              className="mt-1 p-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <input className="btn btn-block mt-7" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateMyToy;
