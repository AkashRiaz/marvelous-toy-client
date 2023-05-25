import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 700,
});

const Modules = () => {
  return (
    <div className="my-20">
      <div className="md:w-1/2 mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Customer Review</h2>
        <h3 className="text-xl font-medium">What our customers are saying</h3>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card w-full md:w-96 glass p-4" data-aos="fade-up-right">
            <div className="mx-auto">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="border-2 border-gray-300 rounded-full p-1 shadow-2xl h-16 w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center -mt-4">
              <h2 className="text-xl font-semibold">Ash Baker</h2>
              <small>I've had a great experience shopping on the toy marketplace. The website is user-friendly, and the search feature makes it easy to find specific toys. The product descriptions are accurate, and the checkout process is smooth. Highly recommended!</small>
            </div>
          </div>
          <div className="card w-full md:w-96 glass p-4" data-aos="fade-up-right" >
            <div className="mx-auto">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/4906157/pexels-photo-4906157.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="border-2 border-gray-300 rounded-full p-1 shadow-2xl h-16 w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center -mt-4">
              <h2 className="text-xl font-semibold">Johan Roy</h2>
              <small>The toy marketplace has become my go-to place for buying toys. The prices are competitive, and the customer service is excellent. The shipping is fast and reliable. I'm a satisfied customer!</small>
            </div>
          </div>
          <div className="card w-full md:w-96 glass p-4" data-aos="fade-up-right">
            <div className="mx-auto">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="border-2 border-gray-300 rounded-full p-1 shadow-2xl h-16 w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center -mt-4">
              <h2 className="text-xl font-semibold">Guan Mendel</h2>
              <small>I absolutely love the toy marketplace! The variety of toys available is amazing, and the quality is top-notch. My kids are always excited to see what new toys they can find. Highly recommend!</small>
            </div>
          </div>
          <div className="card w-full md:w-96 glass p-4" data-aos="fade-up-right">
            <div className="mx-auto">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="border-2 border-gray-300 rounded-full p-1 shadow-2xl h-16 w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center -mt-4">
              <h2 className="text-xl font-semibold">Arif Rohaman</h2>
              <small>I've been a loyal customer of the toy marketplace for years, and I'm always impressed with their service. The website is easy to navigate, and they constantly update their inventory with the latest toys. The checkout process is quick, and I've never had any issues with my orders. Keep up the good work!</small>
            </div>
          </div>
          <div className="card w-full md:w-96 glass p-4" data-aos="fade-up-right">
            <div className="mx-auto">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="border-2 border-gray-300 rounded-full p-1 shadow-2xl h-16 w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center -mt-4">
              <h2 className="text-xl font-semibold">Jam Mary</h2>
              <small>As a parent, I appreciate the toy marketplace for its wide selection of educational toys. It's great to find toys that not only entertain but also help develop important skills in my child. The prices are reasonable, and the delivery is always prompt. Highly recommended for parents looking for quality toys!</small>
            </div>
          </div>
          <div className="card w-full md:w-96 glass p-4" data-aos="fade-up-right">
            <div className="mx-auto">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="border-2 border-gray-300 rounded-full p-1 shadow-2xl h-16 w-16"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-center -mt-4">
              <h2 className="text-xl font-semibold">Pushpa Roy</h2>
              <small>I recently purchased a toy from the marketplace, and I'm extremely happy with my purchase. The toy arrived in perfect condition, and it exceeded my expectations. The customer support team was also very helpful in answering my questions. I'll definitely be buying more toys from here</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
