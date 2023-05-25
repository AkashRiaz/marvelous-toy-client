import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 0,
  duration: 700,
});
const TeamMember = () => {
  return (
    <div className="mb-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold my-10">
        Team Members
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="card w-full md:w-[360px] glass"
          data-aos="fade-up-right"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="car!"
              className="object-cover w-full h-[200px] md:h-[250px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mis Maya</h2>
            <h2 className="font-bold">CEO of marvelous-Toy</h2>
            <small className="flex-grow">
              The CEO is the visionary leader of the company, setting the
              overall direction and strategy to achieve the company's goals and
              objectives. They work closely with the board of directors and
              other senior executives to develop and implement long-term plans
              for growth and profitability.
            </small>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div
          className="card w-full md:w-[360px] glass"
          data-aos="fade-up-right"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/1181245/pexels-photo-1181245.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="car!"
              className="object-cover w-full h-[200px] md:h-[250px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ani Bedson</h2>
            <h3 className="font-bold">Web Developer</h3>
            <small className="flex-grow">
              A web developer is responsible for designing, coding, and
              modifying websites according to client or project requirements.
              They work closely with clients or stakeholders to understand their
              needs and translate them into functional and visually appealing
              websites. Using programming languages such as HTML, CSS, and
              JavaScript, web developers create the structure, layout, and
              interactive features of a website. Web developers have a solid
              understanding of front-end and back-end development.
            </small>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        <div
          className="card w-full md:w-[360px] glass"
          data-aos="fade-up-right"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="car!"
              className="object-cover w-full h-[200px] md:h-[250px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Hasan Ali</h2>
            <h1 className="font-bold">Marketing Manager</h1>
            <small>
              A marketing manager plays a crucial role in driving the success of
              a company's marketing efforts. They are responsible for developing
              and executing marketing strategies, conducting market research,
              identifying target audiences, and managing advertising and
              promotional campaigns. With a deep understanding of consumer
              behavior and market trends, they collaborate with cross-functional
              teams to create compelling messaging and engage customers through
              various channels.
            </small>
            <small className="flex-grow">
              Marketing managers analyze market data, track competitors, and
              monitor industry trends to identify opportunities for growth.
            </small>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
