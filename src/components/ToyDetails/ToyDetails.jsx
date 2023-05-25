import React from 'react';
import {useLoaderData,Link} from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
  useTitle('toy details')
    const loaderDetails = useLoaderData()
    const {photo,description,email,sellerName,price,quantity,rating,subCategory,toyName} = loaderDetails;
    return (
        <div className="card md:w-[600px] my-20 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl h-64 w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toy Name: {toyName}</h2>
          <div>
            <h3 className='font-semibold'>Price: {price}</h3>
            <h3 className="text-md font-semibold flex items-center justify-center my-3 gap-2"><Rating style={{ maxWidth: 120 }} value={rating} readOnly/> {rating}</h3>
            <p className=' font-semibold'>Available Quantity:{quantity}</p>
          </div >
          <div>
            <p className='font-bold'>Seller Name:{sellerName}</p>
            <p className='text-bold'>Seller Email:{email}</p>
          </div>
          <p>{description}</p>
          <div className="card-actions">
            <Link to='/allToys'><button className="btn btn-primary">Go Back</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;