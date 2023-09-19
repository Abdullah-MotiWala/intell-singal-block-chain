import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CustomParticle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {};
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "rgb(10,10,25)"
        },
        fpsLimit: 60,
        particles: {
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            speed: 1,
            straight: true
          },
          links: {
            color: "#ffffff",
            distance: 250,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          color: {
            value: "#f1f1f1"
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 5 }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            }
          }
        }
      }}
    />
  );
};

export default CustomParticle;
