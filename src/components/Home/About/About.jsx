import React from "react";
import OurBrand from "./OurBrand";
import TeamMember from "./TeamMember";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init({
//     duration: 1000,

// });

const About = () => {
  return (
    <div>
      <div className="md:w-1/2 mx-auto text-center -mb-2" >
        <h2 className="text-2xl font-bold mb-4 md:text-4xl">About Us</h2>
        <p className="text-xl font-medium">
        Get to know our story and mission
        </p>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col-reverse md:gap-10 lg:flex-row-reverse">
          <div className="text-center lg:text-left w-full md:w-1/2">
            <h1 className="text-6xl  font-bold">Hello There!</h1>
            <h2 className="text-4xl font-semibold my-3">Welcome to Marvelous-Toy</h2>
            <p className="py-6">
              We’re committed to giving you the plain best with attention to the
              most astounding quality, unwavering quality, client
              administration, and uniqueness.After its establishment in 1985,
              ‘Organization Name’ made considerable progress in the past 30+
              years. Presently, we’ve 17 toy shops in various areas in
              Maharashtra.
            </p>
            <p>
              We have an arrangement for extending crosswise over America. On
              the off chance that you’re keen on collaborating with us for an
              establishment store, you’re most free to apply for it here.We
              convey items crosswise over America through our numerous
              distribution centers and retail accomplices. We feel pleased with
              being your most loved toy store chain in New Jersey, America in
              the wake of serving more than 1 million upbeat clients.
            </p>
          </div>
          <div className=" w-full md:w-1/2 bg-base-100">
            <img
              src="https://freepngimg.com/download/hero/151364-photos-toy-superhero-png-download-free.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <OurBrand></OurBrand>
      <TeamMember></TeamMember>
    </div>
  );
};

export default About;
