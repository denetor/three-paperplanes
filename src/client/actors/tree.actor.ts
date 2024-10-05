import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import * as THREE from 'three'

export class TreeActor {

    async get() {
        const loader = new FBXLoader();
        const fbx = await loader.loadAsync('/assets/tree.fbx');
        fbx.scale.set(0.01, 0.01, 0.01);

        const group = new THREE.Group();
        group.add(fbx);

        return group;
    }


}