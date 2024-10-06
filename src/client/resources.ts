import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export class Resources {
    public paperplane: any;

    async load(): Promise<void> {
        const gltfLoader = new GLTFLoader();

        const planeTemp = await gltfLoader.loadAsync('/assets/paper_airplane_0.glb');
        this.paperplane = planeTemp.scene.children[0];
    }
}