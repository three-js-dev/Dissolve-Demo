# Dissolve Effect

![NPM Version](https://img.shields.io/npm/v/dissolveit.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Downloads](https://img.shields.io/npm/dt/dissolveit.svg)

A stunning dissolve effect component for React Three Fiber applications. Create seamless transitions between 3D objects with customizable colors, intensity, and timing.

## 🚀 Features

- Smooth fade-in and fade-out transitions
- Customizable colors and effects
- Built for React Three Fiber
- TypeScript support
- Zero dependencies (except peer dependencies)
- Highly performant
- Easy to integrate

## 📦 Installation

```bash
npm install dissolveit @react-three/fiber @react-three/drei @react-three/postprocessing
```

## 🎮 Basic Usage

```jsx
import { Canvas } from "@react-three/fiber";
import { DissolveEffect } from "dissolveit";

function Scene() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <DissolveEffect
          fadeIn={true}
          color="#0082b2"
          thickness={0.1}
          intensity={10}
          duration={1.2}
        />
      </mesh>
    </Canvas>
  );
}
```

## 🎨 Properties

| Property  | Type     | Default | Description                        |
| --------- | -------- | ------- | ---------------------------------- |
| fadeIn    | boolean  | false   | Triggers fade-in animation         |
| fadeOut   | boolean  | false   | Triggers fade-out animation        |
| color     | string   | #000000 | Hex color for the dissolve effect  |
| thickness | number   | 0.1     | Thickness of the effect (0.08-0.9) |
| intensity | number   | 10      | Intensity of the glow (5-30)       |
| duration  | number   | 1.2     | Animation duration in seconds      |
| onFadeOut | function | -       | Callback when fade out completes   |

## 🌐 Demo

Check out the [live demo](https://dissolveit-demo.vercel.app) to see the effect in action and experiment with different configurations.

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/yourusername/dissolveit.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📚 Documentation

For detailed documentation and examples, visit our [documentation site](https://dissolveit-docs.netlify.app).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Created and maintained by [Rohan](https://github.com/three-js-dev).

## 🌟 Show your support

Give a ⭐️ if this project helped you!
