import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { GeometryControls } from "./GeometryControls";
import { Lighting } from "./Lighting";

export function Scene() {
  return (
    <>
      <OrbitControls />
      <Lighting />
      <Environment preset="sunset" />
      <GeometryControls />
      <ContactShadows position-y={-1} />
    </>
  );
}
