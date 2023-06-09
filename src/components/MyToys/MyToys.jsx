import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle('my-toys')
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState("asc");
  const [myToys, setMyToys] = useState([]);
  const url = `https://toy-marketplace-server-side-two.vercel.app/allToy?email=${user?.email}&sort=${sortOrder}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [sortOrder]);
  const handleDeleteBtn = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(
          `https://toy-marketplace-server-side-two.vercel.app/allToy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter((toys) => toys._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto my-20">
      <div className="text-center my-4">
        <button className="btn btn-primary mr-5" onClick={() => setSortOrder("asc")}>
          Sort Ascending
        </button>
        <button className="btn btn-secondary" onClick={() => setSortOrder("desc")}>
          Sort Descending
        </button>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy, ind) => (
            <tr key={toy._id}>
              <th>{ind + 1}</th>
              <td>{toy.sellerName}</td>
              <td>{toy.toyName}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to={`/updateToy/${toy._id}`} className="btn btn-sm">
                  Update
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteBtn(toy._id)}
                  className="btn btn-sm btn-circle btn-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
