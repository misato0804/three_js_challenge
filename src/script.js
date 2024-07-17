import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh( 
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)

const cube2 = new THREE.Mesh( 
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)

cube2.position.x = - 2

const cube3 = new THREE.Mesh( 
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)

cube3.position.x =  2

group.add(cube1)
group.add(cube2)
group.add(cube3)
/**
 * Object
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// const mesh = new THREE.Mesh(geometry, material)

// 1 can be anything.
// mesh.position.set(.7, -.6, 1)



/**
 * Axes Helper
 */

const axes = new THREE.AxesHelper()
scene.add(axes)

/**
 * SCALE OBJECT
 */
// mesh.scale.set(2, .5, .5)

/**
 * ROTATE OBJECT
 */
// mesh.rotation.reorder("YXZ")
// mesh.rotation.y = Math.PI * .25
// mesh.rotation.x = Math.PI * .25


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * LOOKAT
 */
// camera.lookAt(mesh.position)



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)