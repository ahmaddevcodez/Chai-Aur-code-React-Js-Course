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
            <div className="absolute ">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
