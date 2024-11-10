import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-5xl md:text-6xl text-[#7ed627] ">Technologies I work with</h2>
          <p className="text-white pt-2">
          I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
          My experience extends to using frameworks like React and Next.js to create dynamic and
          user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design.
          With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects. I am learning in GIAIC, cloud computing, and both frontend and backend development in addition to GIAIC.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2  text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up "  className="text-[#e66ac5]">Next.js</h2>
              <h2 data-aos="zoom-in-up " className="text-[#78a0ea]">Typescript</h2>
              <h2 data-aos="zoom-in-up " className="text-[#7dedf7]">React.js</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up " className="text-[#efb271]">Tailwind</h2>
              <h2 data-aos="zoom-in-up " className="text-[#d66969]">CSS</h2>
              <h2 data-aos="zoom-in-up " className="text-[#7879ea]">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;