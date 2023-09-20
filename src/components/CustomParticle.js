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
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }
      }}
    />
  );
};

export default CustomParticle;
