import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// ==========================
// CENA
// ==========================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// ==========================
// CÂMERA
// ==========================
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// ==========================
// RENDERER
// ==========================
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ==========================
// OBJETO (exemplo: tela)
// ==========================
const geometry = new THREE.BoxGeometry(2, 1, 0.1);

const screenMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ffcc,
  emissive: 0x002222
});

const screen = new THREE.Mesh(geometry, screenMaterial);
scene.add(screen);

// ==========================
// LUZ
// ==========================
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// ==========================
// ANIMAÇÃO
// ==========================
function animate() {
  requestAnimationFrame(animate);

  screen.rotation.y += 0.01;
  screen.rotation.x += 0.005;

  renderer.render(scene, camera);
}

animate();

// ==========================
// RESPONSIVO
// ==========================
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
