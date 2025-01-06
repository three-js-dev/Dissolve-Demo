import { CodeBlock } from "./CodeBlock";

export function BasicUsage() {
  const basicCode = `import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DissolveEffect } from "dissolveit";

function Scene() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <DissolveEffect
          fadeIn={true}
          color="#0082b2"
          thickness={0.1}
          intensity={10}
          duration={1.2}
        />
      </mesh>
    </Canvas>
  );
}`;

  return (
    <section>
      <h2>Basic Usage</h2>
      <CodeBlock code={basicCode} language="jsx" />
    </section>
  );
}
