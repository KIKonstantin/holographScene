import Experience from "../Experience";
import * as THREE from 'three'
import fragmentShader from '../Shaders/fragment.glsl';
import vertexShader from '../Shaders/vertex.glsl';
export default class HolographicMaterial {
    constructor() {
        this.experience = new Experience();
        this.debug = this.experience.debug;
        this.materialParams = {};
        this.materialParams.color = '#70c1ff';
        this.debug.gui
            .addColor(this.materialParams, 'color')
            .onChange(() => {
                this.material.uniforms.uColor.value.set(this.materialParams.color);
            });
        
        
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                uTime: new THREE.Uniform(0),
                uColor: new THREE.Uniform(new THREE.Color(this.materialParams.color)),
            },
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        });
    }
}