import { Scene } from 'three'
import * as THREE from 'three'
import { BasicSceneBuilder } from '../scenes/basic-scene-builder'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FlightPathBuilder } from '../scenes/flight-path-builder'

export class FirstFlyStage {
    canvas: HTMLCanvasElement | null = null;
    scene: Scene | null = null;
    camera: THREE.Camera;
    controls: OrbitControls | null = null;
    renderer: THREE.WebGLRenderer | null = null;


    constructor() {
        this.appendDomElements();

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(25, 50, 50);
        this.camera.lookAt(0, 0, 500);

        if (this.canvas) {
            this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas });
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.scene = FlightPathBuilder.build();
        }
    }


    public run() {
        requestAnimationFrame(this.run.bind(this));
        // const cube = this.scene?.getObjectByName('MyCube');
        // if (cube) {
        //     cube.rotation.x += 0.01;
        // }
        if (this.controls) {
            this.controls.update();
        }
        this.render();
    }


    public render() {
        if (this.renderer && this.scene) {
            this.renderer.render(this.scene, this.camera);
        }
    }


    protected appendDomElements() {
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "c");
        this.canvas.setAttribute("style", 'background-color: #cccccc');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);
    }
}