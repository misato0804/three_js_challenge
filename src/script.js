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
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2,2,2)

const positionArray = new Float32Array(9)

positionArray[0] = 0
positionArray[1] = 0
positionArray[2] = 0
positionArray[3] = 0
positionArray[4] = 1
positionArray[5] = 0
positionArray[6] = 1
positionArray[7] = 0
positionArray[8] = 0

const positionsAttribute = new THREE.BufferAttribute(positionArray, 3)
const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', positionsAttribute)

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Optimize screen size
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect  = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

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

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
