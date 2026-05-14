import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const BACKGROUND_STYLE_KEY = "background_style";
const BACKGROUND_STYLE_EVENT = "background-style-change";

type BackgroundMode = "nebula" | "ocean";

const readMode = (): BackgroundMode => {
  if (typeof window === "undefined") return "nebula";
  const value = window.localStorage.getItem(BACKGROUND_STYLE_KEY);
  return value === "ocean" || value === "nebula" ? value : "nebula";
};

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<BackgroundMode>(readMode);

  useEffect(() => {
    const onModeChange = (event: Event) => {
      const nextMode = (event as CustomEvent<BackgroundMode>).detail;
      if (nextMode) setMode(nextMode);
    };

    window.addEventListener(BACKGROUND_STYLE_EVENT, onModeChange);
    return () => window.removeEventListener(BACKGROUND_STYLE_EVENT, onModeChange);
  }, []);

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

    const disposers: Array<() => void> = [];
    let animationFrame = 0;

    const themeAwareMaterials: Array<THREE.Material> = [];

    const addNebulaScene = () => {
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

      themeAwareMaterials.push(material, lineMaterial);

      disposers.push(() => {
        geometry.dispose();
        material.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
      });

      return () => {
        particles.rotation.y += 0.0009;
        particles.rotation.x += 0.00035;
        line.rotation.z += 0.00045;
      };
    };


    const addOceanScene = () => {
      const fishGroup = new THREE.Group();
      const fishes: THREE.Mesh[] = [];

      for (let i = 0; i < 30; i += 1) {
        const geometry = new THREE.ConeGeometry(0.14 + Math.random() * 0.1, 0.55 + Math.random() * 0.25, 7);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.52 + Math.random() * 0.15, 0.75, 0.56),
          transparent: true,
          opacity: 0.9,
        });

        const fish = new THREE.Mesh(geometry, material);
        fish.rotation.z = Math.PI / 2;
        fish.position.set(-18 + Math.random() * 36, -7 + Math.random() * 14, -7 + Math.random() * 9);
        fish.userData.speed = 0.02 + Math.random() * 0.05;
        fish.userData.wobble = 0.4 + Math.random() * 1.2;
        fish.userData.phase = Math.random() * Math.PI * 2;
        fishGroup.add(fish);
        fishes.push(fish);

        disposers.push(() => {
          geometry.dispose();
          material.dispose();
        });
      }

      const bubbleCount = 90;
      const bubblePos = new Float32Array(bubbleCount * 3);
      for (let i = 0; i < bubbleCount; i += 1) {
        const idx = i * 3;
        bubblePos[idx] = (Math.random() - 0.5) * 32;
        bubblePos[idx + 1] = -10 + Math.random() * 20;
        bubblePos[idx + 2] = -9 + Math.random() * 7;
      }

      const bubbleGeo = new THREE.BufferGeometry();
      bubbleGeo.setAttribute("position", new THREE.BufferAttribute(bubblePos, 3));
      const bubbleMat = new THREE.PointsMaterial({
        color: 0xbde7ff,
        size: 0.05,
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
      });
      const bubbles = new THREE.Points(bubbleGeo, bubbleMat);

      scene.add(fishGroup);
      scene.add(bubbles);
      themeAwareMaterials.push(bubbleMat);

      disposers.push(() => {
        bubbleGeo.dispose();
        bubbleMat.dispose();
      });

      return () => {
        const t = performance.now() * 0.001;
        fishes.forEach((fish) => {
          fish.position.x += fish.userData.speed;
          fish.position.y += Math.sin(t * fish.userData.wobble + fish.userData.phase) * 0.008;
          fish.rotation.y = Math.sin(t * 2.2 + fish.userData.phase) * 0.2;
          if (fish.position.x > 18) fish.position.x = -18;
        });

        const bubbleAttr = bubbleGeo.getAttribute("position") as THREE.BufferAttribute;
        for (let i = 0; i < bubbleCount; i += 1) {
          const idx = i * 3;
          const y = bubbleAttr.array[idx + 1] as number;
          bubbleAttr.array[idx + 1] = y > 10 ? -10 : y + 0.02;
        }
        bubbleAttr.needsUpdate = true;
      };
    };

    const applyTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (mode === "nebula") {
        const [material, lineMaterial] = themeAwareMaterials as [THREE.PointsMaterial, THREE.LineBasicMaterial];
        if (material) {
          material.color.set(isDark ? 0xf472b6 : 0xdb2777);
          material.opacity = isDark ? 0.62 : 0.52;
        }
        if (lineMaterial) {
          lineMaterial.color.set(isDark ? 0xe2e8f0 : 0x0f172a);
          lineMaterial.opacity = isDark ? 0.1 : 0.08;
        }
      }

      if (mode === "ocean") {
        renderer.setClearColor(isDark ? 0x020617 : 0xf8fdff, 0);
      } else {
        renderer.setClearColor(0xffffff, 0);
      }
    };

    const updateScene = mode === "ocean" ? addOceanScene() : addNebulaScene();

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      updateScene();
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
      disposers.forEach((dispose) => dispose());
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [mode]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  );
}
