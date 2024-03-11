uniform float uTime;
varying vec3 vPosition;
varying vec3 vNormal;
#include ./includes/random2d.glsl
void main(){
        // Set position
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        // GLITCH
        float glitchTime = uTime - modelPosition.y;
        float glitchStrength = sin(glitchTime) + sin(glitchTime * 3.45) + sin(glitchTime * 8.76);
        glitchStrength = smoothstep(0.3, 1.0, glitchStrength);
        glitchStrength /= 3.0;
        glitchStrength *= 0.25;
        modelPosition.x += (random2d(modelPosition.xz + uTime) - 0.5) * glitchStrength;
        modelPosition.z += (random2d(modelPosition.xz + uTime) - 0.5) * glitchStrength;
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        // Model normal
        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
        // Varying
        vPosition = modelPosition.xyz;
        vNormal = modelNormal.xyz;
    }