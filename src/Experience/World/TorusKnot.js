import * as THREE from 'three';
import Experience from '../Experience';
export default class TorusKnot {
    constructor() {
        this.experience = new Experience();
        this.time = this.experience.time;
        this.scene = this.experience.scene;
        this.setMesh();
        this.setPosition();
        this.addToScene();
    }
    setMesh() {
        this.geometry = new THREE.TorusKnotGeometry(0.6, 0.25, 128, 32);
        this.material = this.experience.world.holographicMaterial.material;
        this.torus = new THREE.Mesh(this.geometry, this.material);
    }

    setPosition() {
        this.torus.position.x = 3;
    }

    addToScene() {
        this.scene.add(this.torus);
    }
    update() {
        this.torus.rotation.x = - this.time.elapsed * 0.1
        this.torus.rotation.y = this.time.elapsed * 0.2
    }


}