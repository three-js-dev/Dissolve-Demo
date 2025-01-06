import { useState, useCallback } from "react";

export function useGeometryStates(geometries) {
  const [geometryStates, setGeometryStates] = useState(
    Object.fromEntries(
      geometries.map((geo) => [
        geo,
        { visible: geo === "box", isFading: false },
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

  const updateGeometryStates = useCallback((selectedGeometry) => {
    setGeometryStates((prev) => {
      const newStates = { ...prev };
      Object.keys(newStates).forEach((geo) => {
        if (geo !== selectedGeometry && newStates[geo].visible) {
          newStates[geo].isFading = true;
        }
      });
      newStates[selectedGeometry] = { visible: true, isFading: false };
      return newStates;
    });
  }, []);

  return { geometryStates, handleFadeComplete, updateGeometryStates };
}
