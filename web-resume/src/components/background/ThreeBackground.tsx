import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    mount.appendChild(renderer.domElement);

    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const offset = i * 3;
      positions[offset] = (Math.random() - 0.5) * 34;
      positions[offset + 1] = (Math.random() - 0.5) * 22;
      positions[offset + 2] = (Math.random() - 0.5) * 16;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xdb2777,
      size: 0.055,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array([
      -12, -6, -2,
      -5, 5, -6,
      -1, -2, -1,
      5, 4, -5,
      12, -5, -3,
    ]);
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.08,
    });

    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    const applyTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      material.color.set(isDark ? 0xf472b6 : 0xdb2777);
      material.opacity = isDark ? 0.62 : 0.52;
      lineMaterial.color.set(isDark ? 0xe2e8f0 : 0x0f172a);
      lineMaterial.opacity = isDark ? 0.1 : 0.08;
    };

    let animationFrame = 0;

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      particles.rotation.y += 0.0009;
      particles.rotation.x += 0.00035;
      line.rotation.z += 0.00045;
      renderer.render(scene, camera);
    };

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    applyTheme();
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  );
}
