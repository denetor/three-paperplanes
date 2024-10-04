// import * as THREE from 'three'
// import { AxisActor } from '../actors/axis.actor'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
//
// export class TestScene {
//     // basic elements
//     scene: THREE.Scene;
//     canvas: HTMLCanvasElement;
//     renderer: THREE.WebGLRenderer;
//     // light
//     ambient: THREE.AmbientLight;
//     light: THREE.DirectionalLight;
//     // scene content
//     axis: AxisActor;
//     cube: THREE.Mesh;
//
//     constructor() {
//         this.canvas = document.querySelector('#c') as HTMLCanvasElement;
//         this.renderer = new THREE.WebGLRenderer({antialias: true, canvas: this.canvas});
//         this.scene = new THREE.Scene();
//
//         // lights
//         this.ambient = new THREE.AmbientLight(0xffffff, 0.2);
//         this.scene.add(this.ambient);
//         this.light = new THREE.DirectionalLight(0xffffff, 1);
//         this.light.position.set(-10, 10, 10);
//         this.light.target.position.set(0, 0, 0);
//         this.scene.add(this.light);
//
//         // axis
//         this.axis = new AxisActor();
//         this.scene.add(this.axis.get());
//
//         // objects
//         const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff7777});
//         const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
//         this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//         this.scene.add(this.cube);
//
//         // this.renderer.render(this.scene, this.camera);
//     }
//
//
//     animate() {
//         requestAnimationFrame(this.animate.bind(this));
//         this.cube.rotation.x += 0.01;
//         this.cube.rotation.y += 0.01;
//         // this.controls.update();
//         this.render();
//     }
//
//
//     render() {
//         // this.renderer.render(this.scene, this.camera);
//     }
//
//
//     // render(time: number) {
//     //     time *= 0.001;  // convert time to seconds
//     //     // this.cube.rotation.x = time;
//     //     // this.cube.rotation.y = time;
//     //     // this.renderer.render(this.scene, this.camera);
//     //     // requestAnimationFrame(this.render);
//     // }
// }
