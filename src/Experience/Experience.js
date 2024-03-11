import * as THREE from 'three';
import sources from './sources';
import Sizes from './Utils/Sizes';
import Time from './Utils/Time';
import Debug from './Utils/Debug';
import Camera from './Camera';
import Renderer from './Renderer';
import World from './World/World';
import Resources from './Utils/Resources';
let instance = null;

export default class Experience{
    constructor(canvas) {
        if (instance) return instance;
        instance = this;
        window.experience = instance;
        // Setup
        this.debug = new Debug();
        this.canvas = canvas;
        this.time = new Time();
        this.sizes = new Sizes();
        this.scene = new THREE.Scene();
        this.camera = new Camera(this);
        this.renderer = new Renderer();
        this.resources = new Resources(sources);
        this.world = new World();

        // Resize event
        this.sizes.on('resize', () => {
            this.resize();
        });
        // Animation frame event
        this.time.on('tick', () => {
            this.update();
        });


    }

    resize() {
        //    This technique propagates to the children / Prevents bugs
        this.camera.resize();
        this.renderer.resize();
    }
    
    update() {
        //    This technique propagates to the children / Prevents bugs
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }
}