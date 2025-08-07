import {
  MoveDirection,
  OutMode,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadTrianglesPreset(engine);
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "triangles",
      autoPlay: true,
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          direction: MoveDirection.none,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init && <Particles id="tsparticles" options={options} />;
};

export default ParticleBackground;
