import { useControls } from "leva";
import { geometries } from "../geometryConfig";
import { rgbToHex } from "../utils/colorUtils";

export function useDissolveControls() {
  const { itemDisplayed, r, g, b, intensity, thickness, duration } =
    useControls({
      itemDisplayed: {
        value: "box",
        options: geometries,
      },
      r: { value: 0, min: 0, max: 255, step: 1, label: "Red" },
      g: { value: 130, min: 0, max: 255, step: 1, label: "Green" },
      b: { value: 178, min: 0, max: 255, step: 1, label: "Blue" },
      intensity: {
        value: 10,
        min: 5,
        max: 30,
        step: 1,
      },
      thickness: {
        value: 0.1,
        min: 0.08,
        max: 0.9,
        step: 0.01,
      },
      duration: {
        value: 1.2,
        min: 1,
        max: 5,
        step: 0.1,
      },
    });

  const effectValues = {
    intensity,
    thickness,
    duration,
    color: rgbToHex(r, g, b),
  };

  return { itemDisplayed, effectValues };
}
