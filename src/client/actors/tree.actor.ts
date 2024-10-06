import * as THREE from 'three'
import { ConeGeometry, CylinderGeometry } from 'three'

export class TreeActor {

    async get(resources: any) {
        const foliageGeometry = new ConeGeometry(2, 10, 8);
        const foliageMaterial = new THREE.MeshPhongMaterial({color: 0x006400});
        const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
        foliage.position.y = 5 + 2;

        const trunkGeometry = new CylinderGeometry(0.5, 0.5, 2, 6);
        const trunkMaterial = new THREE.MeshPhongMaterial({color: 0xA52A2A});
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 1;


        const group = new THREE.Group();
        group.add(foliage);
        group.add(trunk);

        return group;
    }


}