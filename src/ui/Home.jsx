import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';

const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center z-[1]">
      <div className="text-6xl font-extrabold text-orange-400">21 Days Challenge</div>
      <div className="text-3xl">
        <span className="text-red-500 mr-2">Web</span>
        <span className="text-green-500 mr-2">Android</span>
        <span className="text-black">ML</span>
      </div>
      <Link to="/register" className="mt-6 font-extrabold border-4 border-solid border-sky-600 hover:border-t-8 hover:border-black p-3 rounded transition-all duration-300 z-10">Register Now</Link>

      <div className="w-full h-screen absolute top-0 left-0 z-0">
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            particles: {
              number: {
                value: 3,
                density: {
                  enable: true,
                  area: 100,
                },
              },
              color: {
                value: "#008781",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 1,
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0,
                  sync: false,
                },
              },
              size: {
                value: 50,
                random: {
                  enable: true,
                  minimumValue: 15,
                },
              },
              move: {
                enable: true,
                speed: 17,
                direction: "down",
                random: false,
                straight: true,
                outModes: {
                  default: "out",
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: false,
              },
            },
            detectRetina: true,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Home;