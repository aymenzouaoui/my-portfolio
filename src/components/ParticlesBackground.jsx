import { useParticles } from '../hooks/useParticles.js';

export default function ParticlesBackground() {
  const canvasRef = useParticles();
  return (
    <>
      <canvas id="particles-canvas" ref={canvasRef}></canvas>
      <div className="noise-overlay"></div>
    </>
  );
}
