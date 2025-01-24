// Data planet dengan data yang lebih realistis (skala sudah disesuaikan untuk tampilan)
const planets = [
    {
        name: 'Matahari',
        radius: 30, // Radius untuk tampilan visual
        actualRadius: 696340, // Radius sebenarnya dalam km
        color: '#FDB813',
        orbitRadius: 0,
        speed: 0,
        info: `Bintang pusat tata surya kita, sebuah bola gas panas raksasa dengan diameter 1,39 juta kilometer (109x diameter Bumi). Mengandung 99,86% massa total tata surya.`,
        mass: '1,989 × 10^30 kg',
        temperature: '5.500°C (permukaan), 15.000.000°C (inti)',
        facts: [
            'Setiap detik mengkonversi 600 juta ton hidrogen menjadi 595 juta ton helium',
            'Cahayanya membutuhkan 8 menit 20 detik untuk mencapai Bumi',
            'Berputar lebih cepat di ekuator (25 hari) dibanding di kutub (35 hari)'
        ],
        orbitPeriod: '-',
        relativeMass: 333000, // Massa relatif terhadap Bumi
        relativeSize: 109 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Merkurius',
        radius: 8, // Radius untuk tampilan visual
        actualRadius: 2439.7,
        color: '#A0522D',
        orbitRadius: 60,
        speed: 0.04,
        info: 'Planet terdekat dengan Matahari, memiliki permukaan berbatu dan berkawah. Tidak memiliki atmosfer yang signifikan, menyebabkan variasi suhu ekstrem.',
        mass: '3,285 × 10^23 kg',
        temperature: '-180°C (malam) hingga 430°C (siang)',
        facts: [
            'Satu hari di Merkurius setara dengan 176 hari Bumi',
            'Memiliki inti besi cair yang mencakup 85% volumenya',
            'Mengalami penyusutan diameter 7 km sejak terbentuk'
        ],
        orbitPeriod: 0.24,
        relativeMass: 0.055, // Massa relatif terhadap Bumi
        relativeSize: 0.383 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Venus',
        radius: 12, // Radius untuk tampilan visual (sebelumnya 6051.8)
        actualRadius: 6051.8,
        color: '#DEB887',
        orbitRadius: 90,
        speed: 0.015,
        info: 'Planet terpanas di tata surya karena efek rumah kaca yang ekstrem dari atmosfer CO2 tebalnya.',
        mass: '4,867 × 10^24 kg',
        temperature: '462°C (rata-rata permukaan)',
        facts: [
            'Berputar berlawanan arah dengan planet lain (retrograde)',
            'Satu hari Venus lebih panjang dari satu tahun Venus (243 hari Bumi)',
            'Tekanan atmosfer 92 kali lebih besar dari Bumi'
        ],
        orbitPeriod: 0.62,
        relativeMass: 0.815, // Massa relatif terhadap Bumi
        relativeSize: 0.949 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Bumi',
        radius: 12, // Radius untuk tampilan visual (sebelumnya 6371)
        actualRadius: 6371,
        color: '#4B9CD3',
        orbitRadius: 120,
        speed: 0.01,
        info: 'Satu-satunya planet yang diketahui memiliki kehidupan. 71% permukaannya tertutup air.',
        mass: '5,972 × 10^24 kg',
        temperature: '15°C (rata-rata permukaan)',
        facts: [
            'Satu-satunya planet dengan tektonik lempeng aktif',
            'Medan magnet melindungi dari radiasi matahari berbahaya',
            'Kemiringan 23,5 derajat menyebabkan adanya musim'
        ],
        orbitPeriod: 1.0,
        relativeMass: 1, // Referensi
        relativeSize: 1 // Referensi
    },
    {
        name: 'Mars',
        radius: 10, // Radius untuk tampilan visual (sebelumnya 3389.5)
        actualRadius: 3389.5,
        color: '#CD5C5C',
        orbitRadius: 150,
        speed: 0.008,
        info: 'Planet merah dengan atmosfer tipis. Memiliki bukti adanya air cair di masa lalu.',
        mass: '6,39 × 10^23 kg',
        temperature: '-63°C (rata-rata permukaan)',
        facts: [
            'Memiliki gunung tertinggi di tata surya: Olympus Mons (21,9 km)',
            'Badai debu bisa menutupi seluruh planet selama berbulan-bulan',
            'Memiliki dua satelit kecil: Phobos dan Deimos'
        ],
        orbitPeriod: 1.88,
        relativeMass: 0.107, // Massa relatif terhadap Bumi
        relativeSize: 0.532 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Jupiter',
        radius: 25, // Radius untuk tampilan visual (sebelumnya 69911)
        actualRadius: 69911,
        color: '#DEB887',
        orbitRadius: 200,
        speed: 0.004,
        info: 'Planet terbesar di tata surya, sebuah raksasa gas dengan sistem cincin tipis.',
        mass: '1,898 × 10^27 kg',
        temperature: '-110°C (lapisan atas awan)',
        facts: [
            'Badai Besar Merah telah aktif setidaknya 400 tahun',
            'Memiliki medan magnet terkuat di antara planet',
            'Memiliki 95 bulan yang telah dikonfirmasi (2023)'
        ],
        orbitPeriod: 11.86,
        relativeMass: 317.8, // Massa relatif terhadap Bumi
        relativeSize: 11.209 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Saturnus',
        radius: 22, // Radius untuk tampilan visual (sebelumnya 58232)
        actualRadius: 58232,
        color: '#F4A460',
        orbitRadius: 250,
        speed: 0.003,
        info: 'Planet dengan sistem cincin paling mencolok, terdiri dari es dan bebatuan.',
        mass: '5,683 × 10^26 kg',
        temperature: '-178°C (lapisan atas awan)',
        facts: [
            'Satu-satunya planet yang dapat mengapung di air karena densitasnya',
            'Cincin utamanya hanya setebal 10-30 meter',
            'Memiliki 146 bulan yang telah dikonfirmasi (2023)'
        ],
        orbitPeriod: 29.46,
        relativeMass: 95.2, // Massa relatif terhadap Bumi
        relativeSize: 9.449 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Uranus',
        radius: 18, // Radius untuk tampilan visual (sebelumnya 25362)
        actualRadius: 25362,
        color: '#87CEEB',
        orbitRadius: 300,
        speed: 0.002,
        info: 'Planet es dengan sumbu rotasi yang hampir sejajar dengan bidang orbitnya.',
        mass: '8,681 × 10^25 kg',
        temperature: '-224°C (lapisan atas awan)',
        facts: [
            'Berputar dengan kemiringan 98 derajat ("menyamping")',
            'Memiliki 27 bulan yang diketahui',
            'Atmosfer mengandung metana yang memberi warna biru-kehijauan'
        ],
        orbitPeriod: 84.01,
        relativeMass: 14.5, // Massa relatif terhadap Bumi
        relativeSize: 4.007 // Diameter relatif terhadap Bumi
    },
    {
        name: 'Neptunus',
        radius: 17, // Radius untuk tampilan visual (sebelumnya 24622)
        actualRadius: 24622,
        color: '#4169E1',
        orbitRadius: 350,
        speed: 0.001,
        info: 'Planet terjauh, ditemukan melalui perhitungan matematika sebelum observasi.',
        mass: '1,024 × 10^26 kg',
        temperature: '-214°C (lapisan atas awan)',
        facts: [
            'Memiliki angin terkencang di tata surya (2.100 km/jam)',
            'Satu tahun Neptunus setara dengan 165 tahun Bumi',
            'Memiliki 14 bulan yang telah dikonfirmasi'
        ],
        orbitPeriod: 164.79,
        relativeMass: 17.1, // Massa relatif terhadap Bumi
        relativeSize: 3.883 // Diameter relatif terhadap Bumi
    }
];

// Tambahkan data asteroid belt
const asteroidBelt = {
    innerRadius: 300,
    outerRadius: 330,
    numberOfAsteroids: 200
};

// Tambahkan data komet
const comets = [
    {
        name: 'Halley',
        radius: 3,
        color: '#FFFFFF',
        orbitRadius: 800,
        speed: 0.005,
        tailLength: 50,
        active: true
    },
    {
        name: 'Swift-Tuttle',
        radius: 2,
        color: '#F0F8FF',
        orbitRadius: 700,
        speed: 0.003,
        tailLength: 40,
        active: false
    }
];

// Pisahkan data ke file terpisah
const CONFIG = {
    ANIMATION: {
        BASE_SPEED: 0.02,
        DEFAULT_MULTIPLIER: 1
    },
    UI: {
        DEFAULT_SCALE: 1,
        MIN_SCALE: 0.3,
        MAX_SCALE: 3
    }
};

class SolarSystem {
    constructor() {
        // Inisialisasi state dasar
        this.scale = 0.8; // Mulai dengan skala yang lebih kecil
        this.baseTime = Date.now() / 1000; // Tambahkan waktu dasar
        this.elapsedTime = 0; // Tambahkan waktu yang telah berlalu
        this.speedMultiplier = 1;
        this.isPaused = false;
        this.orbitsVisible = true;
        this.currentDate = new Date();
        this.centerX = window.innerWidth / 2;
        this.centerY = window.innerHeight / 2;
        this.startTime = this.getJulianDate(this.currentDate);
        this.lastTime = this.startTime;

        this.loadingFacts = [
            "Cahaya dari Matahari membutuhkan 8 menit untuk mencapai Bumi.",
            "Jupiter memiliki 95 bulan yang telah dikonfirmasi.",
            "Satu tahun di Venus lebih pendek dari satu harinya.",
            "Saturnus bisa mengapung di air karena densitasnya yang rendah.",
            "Uranus berputar 'menyamping' pada orbitnya.",
            "Mars memiliki gunung tertinggi di tata surya: Olympus Mons."
        ];
        
        this.loadingSteps = [
            { text: "Memuat data planet...", progress: 20 },
            { text: "Mengkalkulasi orbit...", progress: 40 },
            { text: "Menyiapkan simulasi...", progress: 60 },
            { text: "Mengatur posisi benda langit...", progress: 80 },
            { text: "Menyelesaikan persiapan...", progress: 100 }
        ];

        // Loading screen
        this.initializeLoading();
        
        // Inisialisasi elemen
        this.initializeElements();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Set skala awal
        this.updateZoom();
        
        // Mulai simulasi
        this.start();

        this.astronomicalEvents = new AstronomicalEvents();
        this.setupDatePicker();

        // Inisialisasi posisi planet berdasarkan waktu sekarang
        this.initializeRealTimePositions();

        this.updateSimulationDate(); // Update tampilan tanggal saat inisialisasi

        // Mulai update tanggal secara real-time
        setInterval(() => {
            this.updateSimulationDate();
        }, 1000); // Update setiap detik
    }

    initializeLoading() {
        this.progressBar = document.querySelector('.progress-bar');
        this.progressText = document.querySelector('.progress-text');
        this.loadingStatus = document.querySelector('.loading-status');
        this.loadingScreen = document.getElementById('loading-screen');
        this.loadingFact = document.querySelector('.loading-fact');
        
        // Tampilkan fact acak
        this.loadingFact.textContent = this.loadingFacts[
            Math.floor(Math.random() * this.loadingFacts.length)
        ];
        
        let currentStep = 0;
        const updateLoading = () => {
            if (currentStep >= this.loadingSteps.length) {
                setTimeout(() => {
                    this.loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        this.loadingScreen.style.display = 'none';
                    }, 500);
                }, 500);
                return;
            }

            const step = this.loadingSteps[currentStep];
            this.updateLoadingProgress(step.progress, step.text);
            
            // Aktifkan mini planet sesuai progress
            const miniPlanets = document.querySelectorAll('.mini-planet');
            const activePlanets = Math.floor((step.progress / 100) * miniPlanets.length);
            miniPlanets.forEach((planet, index) => {
                if (index < activePlanets) {
                    planet.classList.add('active');
                }
            });

            currentStep++;
            setTimeout(updateLoading, 1000);
        };

        updateLoading();
    }

    updateLoadingProgress(progress, status) {
        this.progressBar.style.width = `${progress}%`;
        this.progressText.textContent = `${progress}%`;
        if (status) {
            this.loadingStatus.textContent = status;
        }
    }

    initializeElements() {
        this.solarSystem = document.getElementById('solar-system');
        this.infoPanel = document.getElementById('info-panel');
        this.planetNameElement = document.getElementById('planet-name');
        this.planetInfoElement = document.getElementById('planet-info');
        
        // Buat planet-planet
        this.planetElements = planets.map(planet => this.createPlanet(planet));
    }

    setupEventListeners() {
        // Speed control
        const speedSlider = document.getElementById('speed');
        const speedValue = document.querySelector('.speed-value');
        speedSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            this.speedMultiplier = value / 100;
            speedValue.textContent = `${(value/100).toFixed(1)}x`;
        });

        // Navigation controls
        document.getElementById('toggle-orbits').addEventListener('click', () => this.toggleOrbits());
        document.getElementById('zoom-in').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoom-out').addEventListener('click', () => this.zoomOut());
        document.getElementById('pause-btn').addEventListener('click', () => this.togglePause());
        document.getElementById('close-info').addEventListener('click', () => this.closeInfo());

        // Click outside info panel
        document.addEventListener('click', (e) => {
            if (!this.infoPanel.contains(e.target) && 
                !e.target.classList.contains('planet')) {
                this.closeInfo();
            }
        });

        // Hamburger menu
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navControls = document.querySelector('.nav-controls');
        
        hamburgerBtn.addEventListener('click', () => {
            navControls.classList.toggle('active');
            // Ganti ikon hamburger
            const icon = hamburgerBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Tutup menu saat klik di luar
        document.addEventListener('click', (e) => {
            if (!navControls.contains(e.target) && 
                !hamburgerBtn.contains(e.target) && 
                navControls.classList.contains('active')) {
                navControls.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    }

    createPlanet(planet) {
        // Buat orbit jika planet memiliki orbitRadius
        if (planet.orbitRadius > 0) {
            const orbit = document.createElement('div');
            orbit.className = 'orbit';
            orbit.style.width = `${planet.orbitRadius * 2}px`;
            orbit.style.height = `${planet.orbitRadius * 2}px`;
            orbit.style.left = `calc(50% - ${planet.orbitRadius}px)`;
            orbit.style.top = `calc(50% - ${planet.orbitRadius}px)`;
            this.solarSystem.appendChild(orbit);
        }

        const container = document.createElement('div');
        container.className = 'planet-container';
        
        // Planet
        const element = document.createElement('div');
        element.className = 'planet';
        element.setAttribute('data-name', planet.name);
        element.style.width = `${planet.radius * 2}px`;
        element.style.height = `${planet.radius * 2}px`;
        
        container.appendChild(element);

        // Tambahkan cincin khusus untuk Saturnus
        if (planet.name === 'Saturnus') {
            const ringContainer = document.createElement('div');
            ringContainer.className = 'saturn-rings';
            
            const ring = document.createElement('div');
            ring.className = 'ring';
            
            ringContainer.appendChild(ring);
            element.appendChild(ringContainer);
        }

        // Tambahkan event listener
        element.addEventListener('click', () => this.showPlanetInfo(planet));
        
        // Tambahkan ke solar system
        this.solarSystem.appendChild(container);
        
        return container;
    }

    // Fungsi kontrol simulasi
    togglePause() {
        this.isPaused = !this.isPaused;
        const icon = document.getElementById('pause-icon');
        icon.className = this.isPaused ? 'fas fa-play' : 'fas fa-pause';
    }

    toggleOrbits() {
        this.orbitsVisible = !this.orbitsVisible;
        const orbits = document.querySelectorAll('.orbit');
        orbits.forEach(orbit => {
            orbit.style.display = this.orbitsVisible ? 'block' : 'none';
        });
    }

    zoomIn() {
        if (this.scale < 4) {
            this.scale *= 1.2;
            this.updateZoom();
        }
    }

    zoomOut() {
        if (this.scale > 0.2) {
            this.scale /= 1.2;
            this.updateZoom();
        }
    }

    updateZoom() {
        // Perbarui transformasi untuk solar system
        const transform = `scale(${this.scale})`;
        this.solarSystem.style.transform = transform;
        
        // Update style untuk container
        this.solarSystem.style.transformOrigin = 'center center';
        this.solarSystem.style.width = '100vw';
        this.solarSystem.style.height = '100vh';
        this.solarSystem.style.position = 'fixed';
        this.solarSystem.style.top = '0';
        this.solarSystem.style.left = '0';
    }

    resetTime() {
        // Reset waktu ke sekarang
        this.currentDate = new Date();
        this.lastTime = Date.now() / 1000;
        this.elapsedTime = 0; // Reset elapsed time
        
        // Reset kecepatan ke default
        this.speedMultiplier = 1;
        document.getElementById('speed').value = 100;
        document.querySelector('.speed-value').textContent = '1x';
        
        // Reset posisi planet
        this.planetElements.forEach((container, index) => {
            const planet = planets[index];
            if (planet.name === 'Matahari') {
                container.style.transform = `translate(calc(50vw - ${planet.radius}px), 
                                                   calc(50vh - ${planet.radius}px))`;
            } else if (planet.orbitRadius > 0) {
                // Reset ke posisi awal
                const x = planet.orbitRadius; // Posisi awal di sumbu x
                const y = 0; // Posisi awal di sumbu y
                container.style.transform = `translate(calc(50vw + ${x}px - ${planet.radius}px), 
                                                   calc(50vh + ${y}px - ${planet.radius}px))`;
            }
        });
        
        this.updateSimulationDate();
    }

    // Info panel
    showPlanetInfo(planet) {
        // Hapus efek selected dari semua planet
        document.querySelectorAll('.planet').forEach(el => {
            el.classList.remove('selected');
        });

        // Tambahkan efek selected ke planet yang dipilih
        event.currentTarget.classList.add('selected');

        // Set basic info
        this.planetNameElement.textContent = planet.name;
        this.planetInfoElement.textContent = planet.info;
        
        // Set stats dengan radius sebenarnya
        document.getElementById('planet-diameter').textContent = 
            planet.actualRadius ? `${(planet.actualRadius * 2).toLocaleString()} km` : '-';
        document.getElementById('planet-mass').textContent = 
            planet.mass || '-';
        document.getElementById('planet-temp').textContent = 
            planet.temperature || '-';
        
        // Set orbit info
        const distanceAU = planet.orbitRadius > 0 ? (planet.orbitRadius / 120).toFixed(2) : '0';
        const orbitPeriod = planet.orbitPeriod || '-';
        
        document.getElementById('distance').textContent = `${distanceAU} AU`;
        document.getElementById('orbit-period').textContent = `${orbitPeriod} tahun Bumi`;

        // Update perbandingan
        if (planet.name === 'Bumi') {
            // Untuk Bumi, tampilkan nilai referensi (1x)
            const sizeBar = document.getElementById('size-comparison');
            const sizeValue = document.getElementById('size-ratio');
            sizeBar.style.width = '40px';
            sizeValue.textContent = '1,000x ukuran Bumi';

            const distanceBar = document.getElementById('distance-comparison');
            const distanceValue = document.getElementById('distance-ratio');
            distanceBar.style.width = '40px';
            distanceValue.textContent = '1,00x jarak Bumi-Matahari';
        } else {
            // Untuk planet lain, gunakan perbandingan relatif
            const sizeRatio = planet.relativeSize;
            const sizeBar = document.getElementById('size-comparison');
            const sizeValue = document.getElementById('size-ratio');
            
            const maxBarWidth = 150;
            const scaledWidth = Math.min(sizeRatio * 30, maxBarWidth);
            sizeBar.style.width = `${scaledWidth}px`;
            sizeValue.textContent = `${sizeRatio.toLocaleString('id-ID', {minimumFractionDigits: 3, maximumFractionDigits: 3})}x ukuran Bumi`;

            // Distance comparison
            if (planet.orbitRadius > 0) {
                const distanceBar = document.getElementById('distance-comparison');
                const distanceValue = document.getElementById('distance-ratio');
                const distanceRatio = planet.orbitRadius / 120;
                distanceBar.style.width = `${Math.min(distanceRatio * 30, maxBarWidth)}px`;
                distanceValue.textContent = `${distanceRatio.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})}x jarak Bumi-Matahari`;
            }
        }

        // Update facts
        const factsContainer = document.getElementById('planet-facts');
        if (planet.facts && planet.facts.length > 0) {
            const factsHtml = planet.facts.map(fact => 
                `<div class="fact-item">
                    <i class="fas fa-star"></i>
                    <span>${fact}</span>
                </div>`
            ).join('');
            factsContainer.innerHTML = factsHtml;
        } else {
            factsContainer.innerHTML = '<div class="fact-item">Tidak ada fakta tambahan</div>';
        }

        // Update educational note
        const educationalNote = document.getElementById('educational-note');
        educationalNote.textContent = this.getEducationalNote(planet.name);

        // Show panel
        this.infoPanel.style.display = 'block';
    }

    getEducationalNote(planetName) {
        const notes = {
            'Matahari': 'Setiap detik, Matahari menghasilkan energi setara dengan 100 miliar bom nuklir melalui fusi nuklir.',
            'Merkurius': 'Merkurius mengalami variasi suhu terbesar di antara semua planet, dari -180°C hingga 430°C.',
            'Venus': 'Venus adalah planet terpanas di tata surya karena efek rumah kaca yang ekstrem dari atmosfernya.',
            'Bumi': 'Bumi adalah satu-satunya planet yang kita ketahui memiliki tektonik lempeng aktif.',
            'Mars': 'Mars memiliki gunung tertinggi yang diketahui di tata surya, Olympus Mons, setinggi 21,9 km.',
            'Jupiter': 'Badai Besar Merah Jupiter telah aktif setidaknya sejak pertama kali diamati pada tahun 1831.',
            'Saturnus': 'Cincin Saturnus terdiri dari miliaran partikel es dan batu, namun ketebalannya hanya sekitar 10 meter.',
            'Uranus': 'Uranus adalah satu-satunya planet yang berotasi dengan kemiringan lebih dari 90 derajat.',
            'Neptunus': 'Neptunus mengalami musim yang berlangsung selama 40 tahun karena kemiringan aksialnya.'
        };
        return notes[planetName] || 'Informasi tidak tersedia';
    }

    closeInfo() {
        this.infoPanel.style.display = 'none';
    }

    // Animasi
    animate() {
        if (!this.isPaused) {
            const currentTime = Date.now() / 1000;
            const deltaTime = currentTime - this.lastTime;
            this.lastTime = currentTime;
            
            // Update elapsed time dengan kecepatan yang sesuai
            this.elapsedTime += deltaTime * this.speedMultiplier;
            
            // Update posisi planet berdasarkan waktu yang telah berlalu
            this.planetElements.forEach((container, index) => {
                const planet = planets[index];
                if (planet.name === 'Matahari') {
                    container.style.transform = `translate(calc(50vw - ${planet.radius}px), 
                                                       calc(50vh - ${planet.radius}px))`;
                } else if (planet.orbitRadius > 0) {
                    // Gunakan elapsedTime dan speed untuk menghitung posisi
                    const angle = this.elapsedTime * planet.speed;
                    const x = Math.cos(angle) * planet.orbitRadius;
                    const y = Math.sin(angle) * planet.orbitRadius;
                    
                    container.style.transform = `translate(calc(50vw + ${x}px - ${planet.radius}px), 
                                                       calc(50vh + ${y}px - ${planet.radius}px))`;
                }
            });
            
            // Update tanggal real-time
            this.currentDate = new Date();
            this.updateSimulationDate();
        }
        requestAnimationFrame(() => this.animate());
    }

    updateSimulationDate() {
        const dateElement = document.getElementById('simulation-date');
        if (!dateElement) return; // Pastikan elemen ada

        // Format tanggal dan waktu
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        // Update tampilan tanggal dengan format DD/MM/YYYY HH:mm
        dateElement.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    start() {
        this.animate();
    }

    // Tambahkan fungsi untuk membuat efek atmosfer
    createAtmosphere(element, radius) {
        const atmosphere = document.createElement('div');
        atmosphere.className = 'atmosphere';
        atmosphere.style.width = `${radius * 2.2}px`;
        atmosphere.style.height = `${radius * 2.2}px`;
        element.appendChild(atmosphere);
    }

    // Tambahkan fungsi untuk membuat cincin Saturnus
    createRings(element, planet) {
        const rings = document.createElement('div');
        rings.className = 'rings';
        rings.style.width = `${planet.ringsOuter * 2}px`;
        rings.style.height = `${planet.ringsOuter * 2}px`;
        
        // Cincin dalam
        const innerRing = document.createElement('div');
        innerRing.className = 'ring inner-ring';
        rings.appendChild(innerRing);
        
        // Cincin tengah
        const middleRing = document.createElement('div');
        middleRing.className = 'ring middle-ring';
        rings.appendChild(middleRing);
        
        // Cincin luar
        const outerRing = document.createElement('div');
        outerRing.className = 'ring outer-ring';
        rings.appendChild(outerRing);
        
        element.appendChild(rings);
    }

    // Tambahkan fungsi untuk menghitung posisi planet berdasarkan tanggal
    calculatePlanetPosition(planet, date) {
        // Menggunakan algoritma VSOP87 untuk menghitung posisi planet
        // Ini adalah contoh sederhana, implementasi sebenarnya lebih kompleks
        const T = this.getJulianCentury(date);
        
        // Perhitungan elemen orbit (contoh untuk Bumi)
        const a = 1.00000261 + 0.00000562 * T; // semi-major axis
        const e = 0.01671123 - 0.00004392 * T; // eccentricity
        const i = 0.00005 - 0.01294668 * T;    // inclination
        
        // Hitung posisi berdasarkan elemen orbit
        const M = this.getMeanAnomaly(planet, T);
        const E = this.getEccentricAnomaly(M, e);
        const x = a * (Math.cos(E) - e);
        const y = a * Math.sqrt(1 - e*e) * Math.sin(E);
        
        return { x, y };
    }

    getJulianCentury(date) {
        const JD = this.getJulianDate(date);
        return (JD - 2451545.0) / 36525;
    }

    getJulianDate(date) {
        return date.getTime() / 86400000 + 2440587.5;
    }

    calculateMoonPhase(date) {
        const phase = this.getMoonPhase(date); // 0-1
        return {
            illumination: phase,
            phase: this.getMoonPhaseName(phase),
            icon: this.getMoonPhaseIcon(phase)
        };
    }

    getMoonPhaseName(phase) {
        if (phase < 0.05) return 'Bulan Baru';
        if (phase < 0.25) return 'Sabit Muda';
        if (phase < 0.45) return 'Kuartir Pertama';
        if (phase < 0.55) return 'Bulan Purnama';
        if (phase < 0.75) return 'Kuartir Terakhir';
        if (phase < 0.95) return 'Sabit Tua';
        return 'Bulan Baru';
    }

    setupDatePicker() {
        const datePicker = document.getElementById('date-picker');
        const goToDateBtn = document.getElementById('go-to-date');
        const simulationDateDisplay = document.getElementById('simulation-date');

        // Format tanggal untuk date picker
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        
        // Set nilai default date picker
        datePicker.value = `${year}-${month}-${day}`;
        datePicker.min = '2000-01-01';
        datePicker.max = '2050-12-31';
        
        // Set nilai awal tanggal simulasi
        this.currentDate = today;
        this.updateSimulationDate();

        // Update tampilan tanggal di input date picker
        datePicker.value = `${year}-${month}-${day}`;
        simulationDateDisplay.textContent = `${day}/${month}/${year}`;

        goToDateBtn.addEventListener('click', () => {
            const selectedDate = new Date(datePicker.value);
            if (!isNaN(selectedDate.getTime())) {
                this.currentDate = selectedDate;
                this.updateSimulationDate();
                this.goToDate(selectedDate);
            }
        });
    }

    goToDate(date) {
        if (date instanceof Date && !isNaN(date.getTime())) {
            this.currentDate = date;
            this.startTime = this.getJulianDate(date);
            this.lastTime = this.startTime;
            this.updateSimulationDate();
            this.updatePlanetPositionsForDate(date);
            this.checkAstronomicalEvents(date);
        }
    }

    updatePlanetPositionsForDate(date) {
        this.planetElements.forEach((container, index) => {
            const planet = planets[index];
            if (planet.orbitRadius > 0) {
                const position = this.calculatePlanetPosition(planet, date);
                const x = position.x * planet.orbitRadius;
                const y = position.y * planet.orbitRadius;
                container.style.transform = `translate(calc(50vw + ${x}px - ${planet.radius}px), 
                                                   calc(50vh + ${y}px - ${planet.radius}px))`;
            }
        });
    }

    checkAstronomicalEvents(date) {
        const events = this.astronomicalEvents.checkEvents(date);
        if (events.length > 0) {
            this.showEventNotification(events[0]);
        }
    }

    showEventNotification(event) {
        const notification = document.createElement('div');
        notification.className = 'event-notification';
        notification.innerHTML = `
            <h3>${event.type === 'solarEclipse' ? 'Gerhana Matahari' : 'Gerhana Bulan'}</h3>
            <p>${event.description}</p>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Update fungsi getMeanAnomaly untuk perhitungan posisi planet
    getMeanAnomaly(planet, T) {
        // Konstanta untuk setiap planet (dalam derajat)
        const meanAnomalyConstants = {
            'Mercury': { M0: 174.7948, M1: 4.09233445 },
            'Venus': { M0: 50.4161, M1: 1.60213034 },
            'Earth': { M0: 357.5291, M1: 0.98560028 },
            'Mars': { M0: 19.3730, M1: 0.52402068 },
            'Jupiter': { M0: 20.0202, M1: 0.08308529 },
            'Saturn': { M0: 317.0207, M1: 0.03344414 },
            'Uranus': { M0: 141.0498, M1: 0.01172834 },
            'Neptune': { M0: 256.2250, M1: 0.00597082 }
        };

        const constants = meanAnomalyConstants[planet.name];
        if (!constants) return 0;

        let M = constants.M0 + constants.M1 * T;
        M = M % 360; // Normalize to 0-360 degrees
        return M * Math.PI / 180; // Convert to radians
    }

    getEccentricAnomaly(M, e) {
        // Solve Kepler's equation using Newton's method
        let E = M;
        const tolerance = 1e-6;
        let delta = 1;
        let iterations = 0;
        
        while (Math.abs(delta) > tolerance && iterations < 100) {
            delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
            E -= delta;
            iterations++;
        }
        
        return E;
    }

    initializeRealTimePositions() {
        this.planetElements.forEach((container, index) => {
            const planet = planets[index];
            if (planet.orbitRadius > 0) {
                // Hitung posisi real-time untuk setiap planet
                const position = this.calculateRealTimePosition(planet, this.currentDate);
                const x = position.x * planet.orbitRadius;
                const y = position.y * planet.orbitRadius;
                
                // Terapkan posisi
                container.style.transform = `translate(calc(50vw + ${x}px - ${planet.radius}px), 
                                                   calc(50vh + ${y}px - ${planet.radius}px))`;
            }
        });
    }

    calculateRealTimePosition(planet, date) {
        // Konstanta orbital untuk setiap planet (nilai sebenarnya)
        const orbitalElements = {
            'Merkurius': {
                a: 0.387098, // Semi-major axis (AU)
                e: 0.205630, // Eccentricity
                i: 7.005, // Inclination (degrees)
                L: 252.251, // Mean longitude (degrees)
                n: 4.09233445 // Mean motion (degrees/day)
            },
            'Venus': {
                a: 0.723332,
                e: 0.006772,
                i: 3.39458,
                L: 181.979,
                n: 1.60213034
            },
            'Bumi': {
                a: 1.000000,
                e: 0.016709,
                i: 0.00005,
                L: 100.46435,
                n: 0.98560028
            },
            'Mars': {
                a: 1.523679,
                e: 0.093405,
                i: 1.85061,
                L: 355.45332,
                n: 0.52402068
            },
            'Jupiter': {
                a: 5.204267,
                e: 0.048498,
                i: 1.30530,
                L: 34.40438,
                n: 0.08308529
            },
            'Saturnus': {
                a: 9.582186,
                e: 0.054232,
                i: 2.48446,
                L: 49.94432,
                n: 0.03344414
            },
            'Uranus': {
                a: 19.201964,
                e: 0.047318,
                i: 0.76986,
                L: 313.23218,
                n: 0.01172834
            },
            'Neptunus': {
                a: 30.047883,
                e: 0.008606,
                i: 1.76917,
                L: 304.88003,
                n: 0.00597082
            }
        };

        const elements = orbitalElements[planet.name];
        if (!elements) return { x: 0, y: 0, a: 1 };

        // Hitung waktu dalam hari Julian sejak J2000.0
        const JD = this.getJulianDate(date);
        const T = (JD - 2451545.0) / 36525; // Abad Julian

        // Hitung mean anomaly
        const M = (elements.L + elements.n * T * 36525) % 360;
        const Mrad = M * Math.PI / 180;

        // Hitung eccentric anomaly
        const E = this.getEccentricAnomaly(Mrad, elements.e);

        // Hitung koordinat dalam bidang orbit
        const x = elements.a * (Math.cos(E) - elements.e);
        const y = elements.a * Math.sqrt(1 - elements.e * elements.e) * Math.sin(E);

        return { x, y, a: elements.a };
    }
}

class AstronomicalEvents {
    constructor() {
        this.events = [
            {
                date: new Date('2024-04-08'),
                type: 'solarEclipse',
                description: 'Gerhana Matahari Total di Amerika Utara'
            },
            {
                date: new Date('2024-09-18'),
                type: 'lunarEclipse',
                description: 'Gerhana Bulan Parsial'
            }
            // ... tambahkan events lainnya
        ];
    }

    checkEvents(currentDate) {
        return this.events.filter(event => {
            const eventDate = event.date;
            return eventDate.getFullYear() === currentDate.getFullYear() &&
                   eventDate.getMonth() === currentDate.getMonth() &&
                   eventDate.getDate() === currentDate.getDate();
        });
    }
}

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SolarSystem();
});
