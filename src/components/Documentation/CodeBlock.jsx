export function CodeBlock({ code, language }) {
  return (
    <pre className={`language-${language}`}>
      <code>{code}</code>
    </pre>
  );
}
