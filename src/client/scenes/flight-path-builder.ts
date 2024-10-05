import { Scene } from 'three'
import * as THREE from 'three'
import { AxisActor } from '../actors/axis.actor'
import { FlatTerrainStripActor } from '../actors/flat-terrain-strip.actor'

export class FlightPathBuilder {
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

        // terrain
        const terrain = new FlatTerrainStripActor(100, 1000).get();
        terrain.position.set(0, 0, -500);
        scene.add(terrain);

        // hills

        // buildings

        // paperplane

        return scene;
    }
}