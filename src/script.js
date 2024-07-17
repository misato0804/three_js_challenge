import * as THREE from 'three'
import gsap from 'gsap'

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
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Time
let time = Date.now()

// Clock
const clock = new THREE.Clock()

// GSAP
gsap.to(mesh.position, {
    duration: 1,
    delay: 1,
    x: 2
})

// Animation 
const tick = () => {

    
    // We have to adapt framerate regardless user's computer framerate
    /**
     * SOLUTION 1
     */
    // Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    /**
     * SOLUTION 2
     */
    // CLOCK
    // const elapsedTime = clock.getElapsedTime()
    
    // compatre current time to previous timestamp
    // Update object
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()