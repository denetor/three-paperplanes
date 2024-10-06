import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'
import { Resources } from '../resources'

export class PaperPlaneActor {

    async get(resources: Resources) {
        const mesh = new THREE.Mesh(resources.paperplane.geometry, resources.paperplane.material);
        // mesh.rotateY(Math.PI);
        // mesh.scale.set(20, 20, 20);

        const group = new THREE.Group();
        group.add(mesh);
        group.name = 'plane';

        return group;
    }


}