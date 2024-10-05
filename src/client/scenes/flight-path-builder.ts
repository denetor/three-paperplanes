import { Scene } from 'three'
import * as THREE from 'three'
import { AxisActor } from '../actors/axis.actor'
import { FlatTerrainStripActor } from '../actors/flat-terrain-strip.actor'
import { HillActor } from '../actors/hill.actor'
import { BuildingActor } from '../actors/building.actor'

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
        for (let i = 0; i < 10; i++) {
            const radius = 10 + Math.random() * 10;
            const height = 5 + Math.random() * 5;
            const hill = new HillActor(radius, height).get();
            hill.position.set(
                -50 + radius + Math.random() * (100 - radius - radius),
                height / 2,
                -1 * (radius + Math.random() * (1000 - radius)));
            scene.add(hill);
        }

        // buildings
        for (let i = 0; i < 30; i++) {
            const width = 10 + Math.random() * 10;
            const height = 10 + Math.random() * 50;
            const bulding = new BuildingActor(width, height).get();
            bulding.position.set(
                -50 + width/2 + Math.random() * (100 - width),
                height / 2,
                -1 * (width + Math.random() * (1000 - width)));
            scene.add(bulding);
        }

        // paperplane

        return scene;
    }
}