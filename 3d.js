// Créer une scène
const scene = new THREE.Scene();

// Créer une caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Créer un renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créer une géométrie sphérique
const geometry = new THREE.SphereGeometry(1, 32, 32);

// Charger une texture pour la surface du globe
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('globe.jpg');

// Créer un matériau avec la texture
const material = new THREE.MeshBasicMaterial({ map: texture });

// Créer un maillage à partir de la géométrie et du matériau
const globe = new THREE.Mesh(geometry, material);

// Ajouter le maillage à la scène
scene.add(globe);

// Boucle d'animation
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.005;
  renderer.render(scene, camera);
}

// Démarrer l'animation
animate();
