import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class ModelViewer {
    constructor() {
        this.container = document.getElementById('canvas-container');
        if (!this.container) return;

        this.scene    = null;
        this.camera   = null;
        this.renderer = null;
        this.model    = null;
        this.mixer    = null;
        this.clock    = new THREE.Clock();

        // Mouse tracking
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
        this.animate();
    }

    init() {
        // ── 1. Scene ──────────────────────────────────────────────
        this.scene = new THREE.Scene();

        // ── 2. Tamanho real do container ──────────────────────────
        const W = this.container.clientWidth  || 400;
        const H = this.container.clientHeight || 400;

        // ── 3. Camera ─────────────────────────────────────────────
        this.camera = new THREE.PerspectiveCamera(45, W / H, 0.01, 1000);
        this.camera.position.set(0, 0, 6);

        // ── 4. Renderer ───────────────────────────────────────────
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(W, H);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0);       // fundo transparente
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.container.appendChild(this.renderer.domElement);

        // ── 5. Luzes ──────────────────────────────────────────────
        this.scene.add(new THREE.AmbientLight(0xffffff, 2));

        const key = new THREE.DirectionalLight(0xffffff, 3);
        key.position.set(3, 5, 5);
        this.scene.add(key);

        const fill = new THREE.DirectionalLight(0xaaffaa, 1.5);
        fill.position.set(-3, 0, 3);
        this.scene.add(fill);

        // ── 6. Carregar o modelo ──────────────────────────────────
        const loader = new GLTFLoader();

        // ATENÇÃO: nome exato do arquivo conforme o disco (M maiúsculo)
        loader.load(
            'assets/images/Motion.glb',

            // ── onLoad ──────────────────────────────────────────
            (gltf) => {
                this.model = gltf.scene;
                this.scene.add(this.model);   // ← adiciona PRIMEIRO

                // Calcula bounding box APÓS adicionar à cena
                const box    = new THREE.Box3().setFromObject(this.model);
                const center = box.getCenter(new THREE.Vector3());
                const size   = box.getSize(new THREE.Vector3());

                // Centraliza corretamente: subtrai o centro
                this.model.position.sub(center);

                // Auto-escala para caber na câmera
                const maxDim = Math.max(size.x, size.y, size.z);
                if (maxDim > 0) {
                    const scale = 3.5 / maxDim;
                    this.model.scale.setScalar(scale);
                }

                // Inicia animações embutidas pelo Blender
                if (gltf.animations && gltf.animations.length > 0) {
                    this.mixer = new THREE.AnimationMixer(this.model);
                    gltf.animations.forEach(clip => this.mixer.clipAction(clip).play());
                    console.log(`[Three.js] ${gltf.animations.length} animação(ões) iniciada(s).`);
                } else {
                    console.warn('[Three.js] Nenhuma animação encontrada no GLB.');
                }

                console.log('[Three.js] Modelo carregado com sucesso!');

                // Exibe botão PLAY para o usuário decidir quando avançar
                this.showPlayButton();
            },

            // ── onProgress ──────────────────────────────────────
            (xhr) => {
                if (xhr.total > 0) {
                    const pct = Math.round((xhr.loaded / xhr.total) * 100);
                    console.log(`[Three.js] Carregando: ${pct}%`);
                }
            },

            // ── onError ─────────────────────────────────────────
            (error) => {
                console.error('[Three.js] Erro ao carregar o modelo:', error);
                const txt = document.querySelector('.loading-text');
                if (txt) txt.textContent = 'ERRO AO CARREGAR MODELO';
                setTimeout(() => this.transitionToMenu(), 2500);
            }
        );

        // ── 7. Eventos ────────────────────────────────────────────
        document.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
            this.mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
        });

        window.addEventListener('resize', () => {
            const nW = this.container.clientWidth  || 400;
            const nH = this.container.clientHeight || 400;
            this.camera.aspect = nW / nH;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(nW, nH);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();
        if (this.mixer) this.mixer.update(delta);

        // Rotação suave baseada no mouse
        if (this.model) {
            this.model.rotation.y += (this.mouseX * 0.5 - this.model.rotation.y) * 0.05;
            this.model.rotation.x += (this.mouseY * 0.25 - this.model.rotation.x) * 0.05;
        }

        this.renderer.render(this.scene, this.camera);
    }

    showPlayButton() {
        const loadingText = document.querySelector('.loading-text');
        if (loadingText) loadingText.textContent = 'PRONTO';

        const btn = document.getElementById('play-btn');
        if (btn) {
            btn.classList.add('visible');
            btn.addEventListener('click', () => {
                btn.classList.add('clicked');
                setTimeout(() => this.transitionToMenu(), 400);
            }, { once: true });
        }
    }

    transitionToMenu() {
        const loading = document.getElementById('loading-screen');
        const menu    = document.getElementById('menu-screen');
        if (!loading || !menu) return;

        loading.classList.add('fade-out');
        setTimeout(() => {
            loading.style.display = 'none';
            menu.classList.remove('hidden-screen');
            menu.classList.add('active-screen');

            // Dispara animações css do menu
            document.querySelectorAll('[data-animate]').forEach((el, i) => {
                setTimeout(() => el.classList.add('animate'), i * 120);
            });
        }, 1000);
    }
}

window.addEventListener('DOMContentLoaded', () => new ModelViewer());
