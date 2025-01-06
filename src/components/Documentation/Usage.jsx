import { CodeBlock } from "./CodeBlock";

export function Usage() {
  const basicExample = `import { DissolveEffect } from 'dissolveit';

// Basic fade-in effect
<mesh>
  <boxGeometry />
  <DissolveEffect fadeIn={true} color="#0082b2" />
</mesh>

// Fade-out with callback
<mesh>
  <sphereGeometry />
  <DissolveEffect
    fadeOut={true}
    color="#ff4400"
    thickness={0.2}
    intensity={15}
    duration={2}
    onFadeOut={() => console.log('Fade complete')}
  />
</mesh>

// Animated color transition
<mesh>
  <torusGeometry />
  <DissolveEffect
    fadeIn={true}
    color={colorState} // Can be animated with useState
    thickness={0.1}
    intensity={20}
  />
</mesh>`;

  return (
    <section className="usage-section">
      <h2>Usage Examples</h2>
      <CodeBlock code={basicExample} language="jsx" />
      <div className="usage-tips">
        <h3>Tips</h3>
        <ul>
          <li>
            Use <code>fadeIn</code> and <code>fadeOut</code> to control the
            animation direction
          </li>
          <li>
            Adjust <code>thickness</code> and <code>intensity</code> for
            different visual effects
          </li>
          <li>
            The <code>color</code> prop accepts any valid hex color
          </li>
          <li>
            Use the <code>onFadeOut</code> callback to chain animations
          </li>
        </ul>
      </div>
    </section>
  );
}
