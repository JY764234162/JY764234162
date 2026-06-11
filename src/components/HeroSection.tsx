'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GitHubIcon, TwitterIcon } from './icons';

const skills = ['Go', 'Python', 'React', 'Next.js', 'AI/LLM', 'TypeScript'];

const socialLinks = [
  { href: 'https://github.com/JY764234162', icon: 'github' as const, label: 'GitHub' },
  { href: 'mailto:jiangyi@example.com', icon: 'mail' as const, label: 'Email' },
  { href: 'https://twitter.com/jiangyi_dev', icon: 'twitter' as const, label: 'Twitter' },
];

export default function HeroSection() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color(0x00f0ff), // Neon Cyan
      new THREE.Color(0xbd00ff), // Neon Purple
      new THREE.Color(0xff0080), // Neon Pink
      new THREE.Color(0x00d4aa), // Teal
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mouse;
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;

        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          float wave = sin(time + position.x * 0.01) * cos(time + position.y * 0.01);
          mvPosition.x += wave * 2.0;
          mvPosition.y += wave * 1.5;

          vec2 mouseEffect = (mouse - vec2(0.5)) * 50.0;
          mvPosition.x += mouseEffect.x * (1.0 - abs(position.z) / 50.0);
          mvPosition.y += mouseEffect.y * (1.0 - abs(position.z) / 50.0);

          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;

        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);

          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create floating geometric shapes
    const shapes: { mesh: THREE.Mesh; velocity: { x: number; y: number; z: number }; rotationSpeed: { x: number; y: number; z: number } }[] = [];
    const shapeGeometries = [
      new THREE.TetrahedronGeometry(2),
      new THREE.OctahedronGeometry(2),
      new THREE.IcosahedronGeometry(2),
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        transparent: true,
        opacity: 0.2,
        wireframe: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      shapes.push({
        mesh,
        velocity: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        },
      });

      scene.add(mesh);
    }

    camera.position.z = 50;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      particlesMaterial.uniforms.mouse.value.set(mouseX, mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.01;
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      particlesMaterial.uniforms.time.value = time;

      shapes.forEach((shape) => {
        shape.mesh.position.x += shape.velocity.x;
        shape.mesh.position.y += shape.velocity.y;
        shape.mesh.position.z += shape.velocity.z;
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;

        (['x', 'y', 'z'] as const).forEach((axis) => {
          if (Math.abs(shape.mesh.position[axis]) > 40) {
            shape.velocity[axis] *= -1;
          }
        });
      });

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const currentMount = mountRef.current;
    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050508] flex items-center justify-center">
      {/* 3D Background */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-[#050508]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="mb-8"
        >
          <div className="w-28 h-28 mx-auto rounded-full p-[2px] bg-gradient-to-r from-[#00f0ff] via-[#bd00ff] to-[#ff0080] animate-glow-pulse"
          >
            <img
              src="/avatar.jpeg"
              alt="江一"
              className="w-full h-full rounded-full bg-[#050508] object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black mb-4 gradient-text"
        >
          江一
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-light mb-6 h-[40px]"
        >
          <span className="text-[#00f0ff] font-mono">
            <TypeAnimation
              sequence={[
                '全栈开发工程师',
                2000,
                'Go 后端开发者',
                2000,
                'Python AI 开发者',
                2000,
                'Next.js 前端工程师',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          热衷于构建优雅的技术解决方案，专注于现代 Web 开发、
          <span className="text-[#00f0ff]">Go</span> /
          <span className="text-[#bd00ff]">Python</span> 后端工程与
          <span className="text-[#ff0080]">AI 应用</span> 开发。
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-5 mb-16"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00f0ff]/5 border border-[#00f0ff]/10 text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon === 'github' && <GitHubIcon className="w-5 h-5" />}
              {link.icon === 'twitter' && <TwitterIcon className="w-5 h-5" />}
              {link.icon === 'mail' && <Mail className="w-5 h-5" />}
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-[#00f0ff]/50" />
        </motion.div>
      </div>
    </div>
  );
}
