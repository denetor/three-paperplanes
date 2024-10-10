import { Scene, Vector3 } from 'three'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FlightPathBuilder } from '../scenes/flight-path-builder'
import { PaperplanePhysics } from '../physics/paperplane.physics'

export class FirstFlyStage {
    canvas: HTMLCanvasElement | null = null;
    scene: Scene | null = null;
    camera: THREE.Camera | null = null;
    controls: OrbitControls | null = null;
    renderer: THREE.WebGLRenderer | null = null;
    paperplanePhysics: PaperplanePhysics;
    lastMs = 0;


    constructor() {
        this.appendDomElements();
        this.paperplanePhysics = new PaperplanePhysics();
    }


    public async init(): Promise<any> {
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(25, 50, 50);
        this.camera.lookAt(0, 0, 0);

        if (this.canvas) {
            this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas });
            // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
            this.scene = await FlightPathBuilder.build();
        }

        if (this.scene) {
            const playerMesh = this.scene?.getObjectByName('plane');
            if (playerMesh) {
                this.paperplanePhysics.position = playerMesh.position;
                this.paperplanePhysics.speed = new THREE.Vector3(0, 0, -10);
            }
        }
    }


    public run(ms: number) {
        const deltaMs = ms - this.lastMs;
        requestAnimationFrame(this.run.bind(this));
        const player = this.scene?.getObjectByName('plane');

        this.updatePlanePhysics(deltaMs);

        if (player) {
            player.position.x = this.paperplanePhysics.position.x;
            player.position.y = this.paperplanePhysics.position.y;
            player.position.z = this.paperplanePhysics.position.z;
        }

        // if (player && this.camera) {
        //     player.position.z -= 0.1;
        //     this.camera.position.z -= 0.1;
        //     this.camera.lookAt(player.position);
        // }

        // if (this.controls) {
        //     this.controls.update();
        // }
        this.lastMs = ms;
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


    /**
     * Updates the physics of the plane based on the elapsed time in milliseconds.
     *
     * @param {number} deltaMs - The elapsed time in milliseconds since the last update.
     * @return {void} This method does not return a value.
     */
    protected updatePlanePhysics(deltaMs: number): void {
        // update y speed basing on g-force
        const portanza = 0.95;
        this.paperplanePhysics.speed.y -= deltaMs * 9.8 / 1000 * (1-portanza);


        // calculate new position basing on speed on three axis
        this.paperplanePhysics.position.set(
            this.paperplanePhysics.position.x + this.paperplanePhysics.speed.x * deltaMs / 1000.0,
            this.paperplanePhysics.position.y + this.paperplanePhysics.speed.y * deltaMs / 1000.0,
            this.paperplanePhysics.position.z + this.paperplanePhysics.speed.z * deltaMs / 1000.0
        );
    }
}