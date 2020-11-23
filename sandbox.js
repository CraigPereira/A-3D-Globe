let scene, camera, renderer, sphere;

const init = () => {
  scene = new THREE.Scene();

  //Background texture/ Img
  const loader = new THREE.TextureLoader();
  loader.load("textures/space.png", (texture) => (scene.background = texture));

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  // Orbital controls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const texture = new THREE.TextureLoader().load(
    "textures/earth_lights_2048.png"
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  camera.position.z = 11;
};

const animate = () => {
  requestAnimationFrame(animate);

  // sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.001;

  // renderer.gammaFactor = 2.2;
  // renderer.gammaOutput = true;

  renderer.render(scene, camera);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onWindowResize, false);

init();
animate();
