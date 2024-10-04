import { Scene } from 'three'
import * as THREE from 'three'
import { AxisActor } from '../actors/axis.actor'

export class BasicSceneBuilder {
    static build(): Scene {
        const scene = new THREE.Scene();

        // lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambient);
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-10, 10, 10);
        light.target.position.set(0, 0, 0);
        scene.add(light);

        // axis
        const axis = new AxisActor();
        scene.add(axis.get());

        // objects
        const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff7777});
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.name = 'MyCube';
        scene.add(cube);


        return scene;
    }
}
