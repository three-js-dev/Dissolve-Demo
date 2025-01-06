// components/GeometryControls.jsx
import { useState, useEffect, useRef } from "react";
import { useControls, button } from "leva";
import { DissolveGeometry } from "./DissolveGeometry";
import { geometries, scaleMap } from "./geometryConfig";
import { useDissolveControls } from "./hooks/useDissolveControls";
import { useGeometryStates } from "./hooks/useGeometryStates";

export function GeometryControls() {
  const [animationKey, setAnimationKey] = useState(0);
  const { itemDisplayed, effectValues } = useDissolveControls();
  const previousGeometry = useRef(itemDisplayed);
  const { geometryStates, handleFadeComplete, startTransition } =
    useGeometryStates(geometries);

  useEffect(() => {
    if (previousGeometry.current !== itemDisplayed) {
      startTransition(previousGeometry.current, itemDisplayed);
      previousGeometry.current = itemDisplayed;
      setAnimationKey((prev) => prev + 1);
    }
  }, [itemDisplayed, startTransition]);

  useControls({
    "Play Animation": button(() => {
      setAnimationKey((prev) => prev + 1);
    }),
  });

  return (
    <>
      {geometries.map(
        (geometry) =>
          geometryStates[geometry].visible && (
            <DissolveGeometry
              key={`${geometry}-${animationKey}`}
              geometry={geometry}
              scale={scaleMap[geometry]}
              isSelected={!geometryStates[geometry].isFading}
              effectValues={effectValues}
              onFadeOut={() => handleFadeComplete(geometry)}
            />
          )
      )}
    </>
  );
}
