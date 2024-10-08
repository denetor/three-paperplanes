import { Vector3 } from 'three'

export class BaseObjectPhysics {
    position: Vector3;
    speed: Vector3;

    constructor() {
        this.position = new Vector3(0, 0, 0);
        this.speed = new Vector3(0, 0, 0);
    }
}