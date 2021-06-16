import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import CustomMenu from "./CustomMenu";

import TextPage from "./TextPage";

import "./App.css";

function App() {
  const containerRef = React.useRef();

  React.useEffect(() => {
    if (containerRef && containerRef.current) {
      console.log(containerRef.current);

      if (containerRef.current.plugins.get("emitters").array[0].paused) {
        setTimeout(() => {
          containerRef.current.plugins.get("emitters").array[0].play();
        }, 3000);
      } else {
        console.log("paused");
        setTimeout(() => {
          containerRef.current.plugins.get("emitters").array[0].pause();
        }, 3000);
      }

      // if (containerRef.plugins?.get("emitters").array[0].paused == false) {
      //   setTimeout(() => {
      //     //ontainer.plugins.get("emitters").array[0].play();
      //     containerRef.plugins.get("emitters").array[0].pause();
      //   }, 200);
      // }
    }
  });

  const options = {
    autoPlay: true,
    background: {
      color: {
        value: "#ffffff",
      },
      image: "",
      position: "",
      repeat: "",
      size: "",
      opacity: 1,
    },
    backgroundMask: {
      composite: "destination-out",
      cover: {
        color: {
          value: "#fff",
        },
        opacity: 1,
      },
      enable: false,
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 60,
    infection: {
      cure: false,
      delay: 0,
      enable: false,
      infections: 0,
      stages: [],
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: ["repulse"],
        },
        onDiv: {
          selectors: [".ball"],
          enable: true,
          mode: ["bounce"],
          type: "circle",
        },
        onHover: {
          enable: true,
          mode: ["attract", "connect"],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 30,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff",
              },
              stop: {
                value: "#000000",
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: "#000000",
            },
            length: 2000,
          },
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        trail: {
          delay: 0.005,
          pauseOnStop: false,
          quantity: 5,
          particles: {
            color: {
              value: "#ff0000",
              animation: {
                enable: true,
                speed: 400,
                sync: true,
              },
            },
            collisions: {
              enable: true,
            },
            links: {
              enable: false,
            },
            move: {
              outModes: {
                default: "destroy",
              },
              speed: 1,
            },
            size: {
              value: 5,
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 1,
                sync: true,
                startValue: "min",
                destroy: "max",
              },
            },
          },
        },
      },
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: true,
        mode: "bounce",
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: "#f00",
        animation: {
          h: {
            count: 0,
            enable: true,
            offset: 0,
            speed: 50,
            sync: false,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
      },
      destroy: {
        mode: "none",
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              min: 4,
              max: 9,
            },
          },
        },
      },
      life: {
        count: 1,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0.5,
          sync: false,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          value: 0,
          sync: true,
        },
      },
      // links: {
      //   blink: false,
      //   color: {
      //     value: "random",
      //   },
      //   consent: false,
      //   distance: 100,
      //   enable: true,
      //   frequency: 1,
      //   opacity: 1,
      //   shadow: {
      //     blur: 5,
      //     color: {
      //       value: "#00ff00",
      //     },
      //     enable: false,
      //   },
      //   triangles: {
      //     enable: false,
      //     frequency: 1,
      //   },
      //   width: 1,
      //   warp: false,
      // },
      move: {
        angle: {
          offset: 45,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        decay: 0.002,
        distance: 0,
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          maxSpeed: 50,
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
        },
        outModes: {
          default: "destoy",
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
          top: "bounce",
        },
        random: false,
        size: false,
        speed: 1,
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#000000",
          },
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000,
        },
        limit: 0,
        value: 0,
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.3,
        },
        value: {
          min: 0.3,
          max: 0.8,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 0.5,
          sync: false,
          destroy: "none",
          minimumValue: 0.3,
          startValue: "random",
        },
      },
      reduceDuplicates: false,
      rotate: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: "clockwise",
        path: false,
      },
      shadow: {
        blur: 0,
        color: {
          value: "#000000",
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        options: {
          image: [null],
          images: [null],
        },
        type: "circle",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          count: 0,
          enable: true,
          speed: 3,
          sync: false,
          destroy: "none",
          minimumValue: 1,
          startValue: "random",
        },
      },
      stroke: {
        width: 0,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    themes: [],
    emitters: [
      {
        autoPlay: true,
        life: {},
        rate: {
          quantity: 150,
          delay: 3,
        },
        size: {
          mode: "percent",
          height: 0,
          width: 0,
        },
        direction: "none",
        position: {
          x: 50,
          y: 56,
        },
        move: {
          speed: 1,
          random: false,
        },
      },
    ],
  };

  return (
    <div style={{ height: "100%" }}>
      <Particles
        id="tsparticles"
        container={containerRef}
        options={options}
      ></Particles>
      <Router>
        <Switch>
          <Route exact path="/book"></Route>
          <Route exact path="/flipbook"></Route>
          <Route exact path="/textpage">
            <TextPage></TextPage>
          </Route>
          <Route path="/">
            <CustomMenu></CustomMenu>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
