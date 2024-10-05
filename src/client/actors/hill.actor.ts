import * as THREE from 'three'

export class HillActor {
    radius: number;
    height: number;



    constructor(radius: number, height: number) {
        this.radius = radius;
        this.height = height;
    }

    get(): THREE.Group {
        const material = new THREE.MeshPhongMaterial({color: 0x009900});
        const geometry = new THREE.ConeGeometry(this.radius, this.height, 16);
        const cone = new THREE.Mesh(geometry, material);

        const group = new THREE.Group();
        group.add(cone);

        return group;
    }
}