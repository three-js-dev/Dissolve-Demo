import { CodeBlock } from "./CodeBlock";

export function InstallationGuide() {
  const installCommand = `npm install @react-three/fiber @react-three/drei dissolveit @react-three/postprocessing`;

  return (
    <section>
      <h2>Installation</h2>
      <CodeBlock code={installCommand} language="bash" />
    </section>
  );
}
