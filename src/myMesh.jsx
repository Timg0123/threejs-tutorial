import { useFrame } from '@react-three/fiber';

function myMesh() {
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

export default myMesh;
