// Find the latest version by visiting https://cdn.skypack.dev/three.
import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer( { 
    antialias: true,
    canvas: document.querySelector('canvas')
})

renderer.setSize(2*innerWidth/3, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

// Create a earth
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50), 
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/earth.jpg') })
)

scene.add(earth)

const group = new THREE.Group()
group.add(earth)

scene.add(group)

const starGeomatry = new THREE.BufferGeometry()
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff })
const starVertices = []

for(let i=0; i<10000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    const z = -Math.random() * 2000

    starVertices.push(x, y, z)
}

starGeomatry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

const stars = new THREE.Points(starGeomatry, starMaterial)

scene.add(stars)

camera.position.z = 15

const mouse = {
    x: undefined,
    y: undefined
}

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    earth.rotation.y += 0.005
    group.rotation.y = mouse.x * 0.3
    group.rotation.x = mouse.y * 0.3
}

animate()

addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX/innerWidth) * 2 - 1
    mouse.y = (event.clientY/innerHeight) * 2 - 1
})