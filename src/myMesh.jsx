import { useFrame } from '@react-three/fiber';

export default function myMesh() {
  useFrame(() => {
    console.log('Every frame ;D');
  });

  return (
    <mesh>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}
