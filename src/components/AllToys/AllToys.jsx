import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToysPage = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  useTitle('All toys')

  useEffect(() => {
    fetch("https://toy-marketplace-server-side-two.vercel.app/allToys?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setFilteredToys(data);
      });
  }, []);

  useEffect(() => {
    const filteredResults = allToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredToys(filteredResults);
  }, [searchTerm, allToys]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleViewDetails = (toy) => {
  //   // Implement the logic for viewing details of a toy
  //   console.log("View details:", toy);
  // };

  

  return (
    <div className=" mt-10 mb-16">
      <div className="text-center mb-7">
      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs mx-auto"
        placeholder="Search by Toy Name"
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy, ind) => (
              <tr key={toy._id}>
                <td>{ind + 1}</td>
                <td>{toy.sellerName || "-"}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/allToys/${toy._id}`} className="btn btn-sm btn-primary">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToysPage;
