// src/components/SilkBackground.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import Three.js

// Shaders are defined here for modularity
const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec3 uColor;
    
    const float e = 2.71828182845904523536;
    
    float noise(vec2 texCoord) {
        float G = e;
        vec2 r = (G * sin(G * texCoord));
        return fract(r.x * r.y * (1.0 + texCoord.x));
    }
    
    void main() {
        float rnd = noise(gl_FragCoord.xy);
        vec2 uv = vUv * 2.0;
        vec2 tex = uv * 2.0;
        float tOffset = 3.0 * uTime;
        
        tex.y += 0.03 * sin(8.0 * tex.x - tOffset);
        
        float pattern = 0.6 + 0.4 * sin(5.0 * (tex.x + tex.y + 
                                cos(3.0 * tex.x + 5.0 * tex.y) + 
                                0.02 * tOffset) + 
                                sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));
        
        vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * 2.0;
        col.a = 1.0;
        gl_FragColor = col;
    }
`;

export default function SilkBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color(0.039, 0.302, 0.18) }
            }
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            mesh.material.uniforms.uTime.value += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} id="silk-canvas" />;
}

