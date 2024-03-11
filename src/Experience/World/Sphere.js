import * as THREE from 'three';
import Experience from '../Experience';
export default class Sphere {
    constructor() {
        this.experience = new Experience();
        this.time = this.experience.time;
        this.scene = this.experience.scene;
        this.setMesh();
        this.setPosition();
        this.addToScene();
    }
    setMesh() {
        this.geometry = new THREE.SphereGeometry();
        this.material = this.experience.world.holographicMaterial.material;
        this.sphere = new THREE.Mesh(this.geometry, this.material);
    }

    setPosition() {
        this.sphere.position.x = -3;
    }

    addToScene() {
        this.scene.add(this.sphere);
    }

    update() {
        this.sphere.rotation.x = - this.time.elapsed * 0.1
        this.sphere.rotation.y = this.time.elapsed * 0.2
    }
}