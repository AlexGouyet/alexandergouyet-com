"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive WebGL backdrop for the hero. A slowly-rotating wireframe
 * icosahedron wrapped in a drifting particle field, lit in the site accent.
 * Reacts to pointer movement with a subtle parallax and respects
 * prefers-reduced-motion. Rendered behind the hero copy.
 */
export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const accent = new THREE.Color("#f97316");
    const indigo = new THREE.Color("#6366f1");

    // --- Central wireframe icosahedron -----------------------------------
    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(2.1, 1);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: accent,
        transparent: true,
        opacity: 0.55,
      })
    );
    group.add(wire);

    // Faint solid core for depth.
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.05, 1),
      new THREE.MeshBasicMaterial({
        color: "#13141a",
        transparent: true,
        opacity: 0.6,
      })
    );
    group.add(core);

    // Vertex glow points.
    const points = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: accent,
        size: 0.06,
        transparent: true,
        opacity: 0.9,
      })
    );
    group.add(points);

    // --- Drifting particle field -----------------------------------------
    const COUNT = 320;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 4 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = Math.random() > 0.5 ? accent : indigo;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const fieldGeo = new THREE.BufferGeometry();
    fieldGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    fieldGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const field = new THREE.Points(
      fieldGeo,
      new THREE.PointsMaterial({
        size: 0.045,
        transparent: true,
        opacity: 0.7,
        vertexColors: true,
      })
    );
    scene.add(field);

    // --- Pointer parallax -------------------------------------------------
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.x = nx * 0.4;
      target.y = ny * 0.4;
    };
    window.addEventListener("pointermove", onPointer);

    // --- Resize -----------------------------------------------------------
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // --- Animation loop ---------------------------------------------------
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!reduceMotion) {
        group.rotation.y = t * 0.18;
        group.rotation.x = Math.sin(t * 0.25) * 0.18;
        field.rotation.y = t * 0.04;
      }

      // Ease pointer parallax into the camera.
      current.x += (target.x - current.x) * 0.04;
      current.y += (target.y - current.y) * 0.04;
      camera.position.x = current.x;
      camera.position.y = -current.y;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ----------------------------------------------------------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geo.dispose();
      fieldGeo.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden [mask-image:radial-gradient(ellipse_70%_70%_at_60%_40%,black,transparent)]"
    />
  );
}
