import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";

import { loadSlim } from "tsparticles-slim";

export const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container;
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      url="/assets/particles.json"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
