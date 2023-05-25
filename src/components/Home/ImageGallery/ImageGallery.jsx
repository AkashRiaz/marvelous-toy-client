import React from 'react';
import Masonry from "react-responsive-masonry"
const images = [
    "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80",
    "https://images.unsplash.com/photo-1608889825513-02c913792693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    
    "https://images.unsplash.com/photo-1608889825146-c9276dc26bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnZlbCUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFydmVsJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1513704519535-f5c81aa78d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhciUyMHdhcnMlMjAlMjB0b3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1662897037721-a041bf3d22be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYW5zZm9ybWVyJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2ZW5nZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1608889345749-630640d94426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2ZW5nZXJzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
]
const ImageGallery = () => {
    return (
        <div>
            <div className='mb-10 md:w-1/2 text-center mx-auto'>
               <h2 className=' font-semibold md:text-4xl text-2xl mb-3'>Product Gallery</h2>
               <h3 className='text-xl font-medium mb-4'>Explore our wide range of products</h3>
            </div>
            <div className='p-2 rounded-lg'>
            <Masonry columnsCount={3}  gutter="20px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
            </div>
        </div>
    );
};

export default ImageGallery;