import { BaseObjectPhysics } from './base-object.physics'
import { Vector3 } from 'three'

export class PaperplanePhysics extends BaseObjectPhysics {
    rotation: Vector3;

    constructor() {
        super();
        this.rotation = new Vector3(0.0, 0.0, 0.0);
    }
}