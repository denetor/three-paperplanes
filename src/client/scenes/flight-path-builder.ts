import { Scene } from 'three'
import * as THREE from 'three'
import { AxisActor } from '../actors/axis.actor'
import { FlatTerrainStripActor } from '../actors/flat-terrain-strip.actor'
import { HillActor } from '../actors/hill.actor'
import { BuildingActor } from '../actors/building.actor'
import { PaperPlaneActor } from '../actors/paperplane.actor'


export class FlightPathBuilder {


    static async build(): Promise<Scene> {
        const TERRAIN_LENGTH = 1000;
        const TERRAIN_WIDTH = 100;
        const MIN_HILL_RADIUS = 20;
        const MAX_HILL_RADIUS = 40;
        const MIN_HILL_HEIGHT = 5;
        const MAX_HILL_HEIGHT = 20;
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
        const terrain = new FlatTerrainStripActor(TERRAIN_WIDTH, TERRAIN_LENGTH).get();
        terrain.position.set(0, 0, TERRAIN_LENGTH / -2);
        scene.add(terrain);

        // hills
        for (let i = 0; i < 10; i++) {
            const radius = MIN_HILL_RADIUS + Math.random() * (MAX_HILL_RADIUS - MIN_HILL_RADIUS);
            const height = MIN_HILL_HEIGHT + Math.random() * (MAX_HILL_HEIGHT - MIN_HILL_HEIGHT);
            const hill = new HillActor(radius, height).get();
            hill.position.set(
                - TERRAIN_WIDTH / 2 + radius + Math.random() * (TERRAIN_WIDTH - radius - radius),
                height / 2,
                -1 * (radius + Math.random() * (TERRAIN_LENGTH - radius)));
            scene.add(hill);
        }

        // buildings
        for (let i = 0; i < 30; i++) {
            const width = 10 + Math.random() * 10;
            const height = 10 + Math.random() * TERRAIN_WIDTH / 2;
            const bulding = new BuildingActor(width, height).get();
            bulding.position.set(
                - TERRAIN_WIDTH / 2 + width/2 + Math.random() * (TERRAIN_WIDTH - width),
                height / 2,
                -1 * (width + Math.random() * (TERRAIN_LENGTH - width)));
            scene.add(bulding);
        }

        // paperplane
        const paperplane = await new PaperPlaneActor().get();
        paperplane.position.set(0, 20, 0);
        scene.add(paperplane);

        return scene;
    }
}