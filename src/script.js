import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - .5
    cursor.y = - (e.clientY / sizes.height - .5)
    console.log(cursor.x)
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
const aspect = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspect, 1 * aspect, 1, -1, 0.1, 100)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 2
// camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// controls.target.y = 2

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Time
let time = Date.now()

// Clock
const clock = new THREE.Clock()

// Animation 
const tick = () => {
    // CLOCK
    const elapsedTime = clock.getElapsedTime()

    // Update camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(new THREE.Vector3())


    // control is related to camera otherwise I gotta write code to update camera

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()

// When to use built in controls 
