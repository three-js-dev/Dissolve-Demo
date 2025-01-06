import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Scene } from "./Scene";

export default function DissolveDemo() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 5], fov: 42 }}>
      <color attach="background" args={["#13151a"]} />
      <Scene />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={1.25} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
