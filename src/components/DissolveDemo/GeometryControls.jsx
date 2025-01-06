import { useState, useEffect } from "react";
import { useControls, button } from "leva";
import { DissolveGeometry } from "./DissolveGeometry";
import { geometries, scaleMap } from "./geometryConfig";
import { useDissolveControls } from "./hooks/useDissolveControls";
import { useGeometryStates } from "./hooks/useGeometryStates";

export function GeometryControls() {
  const [animationKey, setAnimationKey] = useState(0);
  const { itemDisplayed, effectValues } = useDissolveControls();
  const { geometryStates, handleFadeComplete, updateGeometryStates } =
    useGeometryStates(geometries);

  useControls({
    "Play Animation": button(() => {
      setAnimationKey((prev) => prev + 1);
    }),
  });

  useEffect(() => {
    const TRANSITION_DELAY = 500;
    updateGeometryStates(itemDisplayed);
  }, [itemDisplayed, updateGeometryStates]);

  return (
    <>
      {geometries.map(
        (geometry) =>
          geometryStates[geometry].visible && (
            <DissolveGeometry
              key={`${geometry}-${animationKey}`}
              geometry={geometry}
              scale={scaleMap[geometry]}
              isSelected={itemDisplayed === geometry}
              effectValues={effectValues}
              onFadeOut={() => handleFadeComplete(geometry)}
            />
          )
      )}
    </>
  );
}
