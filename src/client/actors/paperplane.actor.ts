import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as THREE from 'three'

export class PaperPlaneActor {

    async get() {
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync('/assets/paper_airplane_0.glb');
        gltf.scene.rotateY(Math.PI);
        gltf.scene.scale.set(40, 40, 40);

        const group = new THREE.Group();
        group.add(gltf.scene);

        return group;
    }


}