import * as THREE from 'three'
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export class TestScene {
    scene: THREE.Scene;
    canvas: HTMLCanvasElement;
    renderer: THREE.WebGLRenderer;
    camera: THREE.Camera;

    cube: THREE.Mesh;

    constructor() {
        this.canvas = document.querySelector('#c') as HTMLCanvasElement;
        this.renderer = new THREE.WebGLRenderer({antialias: true, canvas: this.canvas});
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
        this.camera.position.z = 4
        this.scene = new THREE.Scene();

        const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff7777});
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        this.scene.add(this.cube);

        this.renderer.render(this.scene, this.camera);
    }


    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.render();
    }


    render() {
        this.renderer.render(this.scene, this.camera);
    }


    // render(time: number) {
    //     time *= 0.001;  // convert time to seconds
    //     // this.cube.rotation.x = time;
    //     // this.cube.rotation.y = time;
    //     // this.renderer.render(this.scene, this.camera);
    //     // requestAnimationFrame(this.render);
    // }
}
