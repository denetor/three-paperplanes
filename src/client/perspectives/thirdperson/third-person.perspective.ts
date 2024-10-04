import * as THREE from 'three'
import { Scene } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { BasicSceneBuilder } from '../../scenes/basic-scene-builder'

export class ThirdPersonPerspective {
    canvas: HTMLCanvasElement | null = null;
    scene: Scene | null = null;
    camera: THREE.Camera;
    // controls: OrbitControls | null = null;
    renderer: THREE.WebGLRenderer | null = null;

    constructor() {
        this.appendDomElements();

        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
        this.camera.position.z = 4

        if (this.canvas) {
            this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas });
            // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.scene = BasicSceneBuilder.build();
        }
    }


    public run() {
        requestAnimationFrame(this.run.bind(this));
        this.scene?.getObjectById(1);
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
