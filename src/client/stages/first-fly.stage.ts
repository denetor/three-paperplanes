import { Scene } from 'three'
import * as THREE from 'three'
import { BasicSceneBuilder } from '../scenes/basic-scene-builder'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FlightPathBuilder } from '../scenes/flight-path-builder'

export class FirstFlyStage {
    canvas: HTMLCanvasElement | null = null;
    scene: Scene | null = null;
    camera: THREE.Camera | null = null;
    controls: OrbitControls | null = null;
    renderer: THREE.WebGLRenderer | null = null;


    constructor() {
        this.appendDomElements();
    }


    public async init(): Promise<any> {
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(25, 50, 50);

        if (this.canvas) {
            this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas });
            // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.scene = await FlightPathBuilder.build();
        }
    }


    public run() {
        requestAnimationFrame(this.run.bind(this));
        const player = this.scene?.getObjectByName('plane');
        if (player && this.camera) {
            player.position.z -= 0.1;
            this.camera.position.z -= 0.1;
            this.camera.lookAt(player.position);
        }
        // if (this.controls) {
        //     this.controls.update();
        // }
        this.render();
    }


    public render() {
        if (this.renderer && this.scene && this.camera) {
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