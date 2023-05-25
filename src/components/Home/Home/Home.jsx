import React from 'react';
import Hero from '../Hero/Hero';
import Modules from '../Modules/Modules';
import ImageGallery from '../ImageGallery/ImageGallery';
import CategoryTab from '../CategoryTab/CategoryTab';
import About from '../About/About';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Hero></Hero>
            <CategoryTab></CategoryTab>
            <ImageGallery></ImageGallery>
            <Modules></Modules>
            <About></About>
        </div>
    );
};

export default Home;