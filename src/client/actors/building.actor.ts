import * as THREE from 'three'

export class BuildingActor {
    width: number;
    height: number;



    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    get(): THREE.Group {
        const material = new THREE.MeshPhongMaterial({color: 0xffffff});
        const geometry = new THREE.BoxGeometry(this.width, this.height, this.width);
        const building = new THREE.Mesh(geometry, material);

        const group = new THREE.Group();
        group.add(building);

        return group;
    }
}