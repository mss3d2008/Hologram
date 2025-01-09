class CubeGeometry extends THREE.BufferGeometry {
    constructor(size = 1) {
      super();
  
      // Define the vertices of a cube
      const vertices = [
        -size, -size, -size, // 0
         size, -size, -size, // 1
         size,  size, -size, // 2
        -size,  size, -size, // 3
        -size, -size,  size, // 4
         size, -size,  size, // 5
         size,  size,  size, // 6
        -size,  size,  size  // 7
      ];
  
      // Define the faces (triangles) by referencing the vertices
      const indices = [
        0, 2, 1, 0, 3, 2,  // Front
        4, 5, 6, 4, 6, 7,  // Back
        0, 1, 5, 0, 5, 4,  // Bottom
        3, 7, 6, 3, 6, 2,  // Top
        0, 4, 7, 0, 7, 3,  // Left
        1, 2, 6, 1, 6, 5   // Right
      ];
  
      // Create a BufferAttribute for positions
      this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      
      // Create an index buffer to form triangles
      this.setIndex(indices);
    }
  }
  
  // Example to use this CubeGeometry in a scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  const geometry = new CubeGeometry(1);  // Create a cube with size 1
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
  