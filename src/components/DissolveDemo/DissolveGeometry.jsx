// components/DissolveGeometry.jsx
import { DissolveEffect } from "dissolveit";
import { GeometryComponent } from "./GeometryComponent";

export function DissolveGeometry({
  geometry,
  scale,
  isSelected,
  effectValues,
  onFadeOut,
}) {
  return (
    <mesh scale={scale}>
      <GeometryComponent type={geometry} />
      <DissolveEffect
        fadeIn={isSelected}
        fadeOut={!isSelected}
        color={effectValues.color}
        thickness={effectValues.thickness}
        intensity={effectValues.intensity}
        duration={effectValues.duration}
        onFadeOut={onFadeOut}
      />
    </mesh>
  );
}
