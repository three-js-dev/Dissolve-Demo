export function GeometryComponent({ type }) {
  const geometryMap = {
    box: <boxGeometry />,
    sphere: <sphereGeometry />,
    capsule: <capsuleGeometry />,
    cone: <coneGeometry />,
    cylinder: <cylinderGeometry />,
    dodecahedron: <dodecahedronGeometry />,
    icosahedron: <icosahedronGeometry />,
    octahedron: <octahedronGeometry />,
    tetrahedron: <tetrahedronGeometry />,
    torus: <torusGeometry args={[1, 0.4, 16, 32]} />,
    torusknot: <torusKnotGeometry />,
    tube: <tubeGeometry />,
  };

  return geometryMap[type] || null;
}
