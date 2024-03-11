import * as THREE from 'three';
import Experience from '../Experience';
export default class Suzanne {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.suzanne = this.experience.resources.items.suzanne.scene;
        this.time = this.experience.time;
        

        this.addToScene();
    }

    addToScene() {
        this.suzanne.traverse((child) => {
            if (child.isMesh) child.material = this.experience.world.holographicMaterial.material;
        })
        this.scene.add(this.suzanne)
    }
    update() {
        this.suzanne.rotation.x = - this.time.elapsed * 0.1;
        this.suzanne.rotation.y = this.time.elapsed * 0.2;
    }

}