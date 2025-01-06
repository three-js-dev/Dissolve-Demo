export function PropertiesTable() {
  const properties = [
    {
      name: "fadeIn",
      type: "boolean",
      description: "Triggers fade-in animation",
      default: "false",
    },
    {
      name: "fadeOut",
      type: "boolean",
      description: "Triggers fade-out animation",
      default: "false",
    },
    {
      name: "color",
      type: "string",
      description: "Hex color for the dissolve effect",
      default: "#000000",
    },
    {
      name: "thickness",
      type: "number",
      description: "Thickness of the dissolve effect (0.08-0.9)",
      default: "0.1",
    },
    {
      name: "intensity",
      type: "number",
      description: "Intensity of the glow (5-30)",
      default: "10",
    },
    {
      name: "duration",
      type: "number",
      description: "Animation duration in seconds",
      default: "1.2",
    },
    {
      name: "onFadeOut",
      type: "function",
      description: "Callback when fade out completes",
      default: "undefined",
    },
  ];

  return (
    <section>
      <h2>Properties</h2>
      <table className="properties-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.name}>
              <td>{prop.name}</td>
              <td>{prop.type}</td>
              <td>{prop.description}</td>
              <td>{prop.default}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
