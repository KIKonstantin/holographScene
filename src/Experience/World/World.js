import Experience from "../Experience";
import Suzanne from "./Suzanne";
import Sphere from "./Sphere";
import TorusKnot from "./TorusKnot";
import HolographicMaterial from "./HolographicMaterial";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.holographicMaterial = new HolographicMaterial();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.resources = this.experience.resources;
        this.resources.on('ready', () => {
            this.sphere = new Sphere();
            this.torus = new TorusKnot();
            this.suzanne = new Suzanne();
            this.update();
        });

    }
    update() {
        if (this.suzanne) {
            this.holographicMaterial.material.uniforms.uTime.value = this.time.elapsed;
            this.suzanne.update();
            this.torus.update();
            this.sphere.update();
        }
    }
}