import * as THREE from "three";

/**
 * Flat earth strip
 */
export class FlatTerrainStripActor {
    length: number;
    width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    get(): THREE.Group {
        const material = new THREE.MeshPhongMaterial({color: 0x007700});
        const geometry = new THREE.PlaneGeometry(this.length, this.width);
        const plane = new THREE.Mesh(geometry, material);
        plane.rotateX(Math.PI / -2);

        const group = new THREE.Group();
        group.add(plane);

        return group;
    }
}
