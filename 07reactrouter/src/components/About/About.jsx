import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col-reverse items-center justify-center md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <img
              className="w-full h-auto rounded-md shadow-lg"
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Startup Image"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Passionate Developers Crafting with React
            </h2>
            <p className="text-lg mb-6">
              "At DevUI, our commitment to excellence drives us to the forefront
              of the web development landscape. Established with a passion for
              innovation, we embark on a mission to empower developers
              worldwide. Through cutting-edge technologies, comprehensive
              resources, and a collaborative community, we create an environment
              where creativity flourishes. DevUI is not just a platform; it's a
              dynamic hub for learning, exploration, and growth. Whether you are
              a seasoned developer or just starting, our goal is to be your
              trusted companion on the journey of continuous improvement. Join
              us in shaping the future of web development as we build, connect,
              and thrive together in the ever-evolving digital ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
