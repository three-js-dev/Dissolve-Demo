// hooks/useGeometryStates.js
import { useState, useCallback } from "react";

export function useGeometryStates(geometries, initialGeometry = "box") {
  const [geometryStates, setGeometryStates] = useState(
    Object.fromEntries(
      geometries.map((geo) => [
        geo,
        { visible: geo === initialGeometry, isFading: false },
      ])
    )
  );

  const handleFadeComplete = useCallback((geometry) => {
    setGeometryStates((prev) => ({
      ...prev,
      [geometry]: {
        visible: false,
        isFading: false,
      },
    }));
  }, []);

  const startTransition = useCallback((oldGeometry, newGeometry) => {
    // First, trigger fade out of current geometry
    setGeometryStates((prev) => ({
      ...prev,
      [oldGeometry]: { ...prev[oldGeometry], isFading: true },
    }));

    // After a delay, show and fade in the new geometry
    setTimeout(() => {
      setGeometryStates((prev) => ({
        ...prev,
        [newGeometry]: { visible: true, isFading: false },
      }));
    }, 10); // Adjust this delay as needed
  }, []);

  return { geometryStates, handleFadeComplete, startTransition };
}
