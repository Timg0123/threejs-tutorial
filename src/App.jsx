import myMesh from './myMesh.jsx';
import { Canvas } from '@react-three/fiber';
import './index.css';

export default function App() {
  return (
    <div className="app">
      <div id="canvas-container">
        <Canvas>
          <myMesh />
        </Canvas>
      </div>
    </div>
  );
}
