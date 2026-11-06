/**
 * ============================================================================
 * IT SOLUTION HMP-TI ITS — OFFICIAL JAVASCRIPT
 * Creative & Service Hub
 * 
 * Website ini dibuat menggunakan Vanilla JavaScript standar (ES6+).
 * Seluruh kode dirancang terstruktur, mudah dipahami mahasiswa semester 1,
 * dan memiliki konfigurasi terpusat agar mudah dimodifikasi saat presentasi.
 * ============================================================================
 */

// Menjalankan script setelah seluruh struktur DOM siap
document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================================
     1. PUSAT KONFIGURASI (EASY CONFIGURATION)
     Ganti nilai di bawah ini untuk mengubah data kontak di seluruh website!
     ========================================================================== */
  const APP_CONFIG = {
    brandName: "IT SOLUTION HMP-TI ITS",
    tagline: "Creative & Service Hub",
    
    // Nomor WhatsApp Resmi (Format internasional tanpa simbol '+', contoh: '628xxxxxxxxxx')
    // Silakan ganti nilai placeholder ini ketika nomor resmi sudah tersedia:
    whatsappNumber: "6281234567890", 

    // Email resmi organisasi
    email: "its.hmpti@gmail.com",

    // Akun Instagram
    instagramHandle: "@hmpti.uniska",
    instagramUrl: "https://instagram.com/hmpti.uniska",

    // Alamat lengkap outlet
    address: "Jl. Adhyaksa No.2, Sungai Miai, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70123",

    // Jam Operasional
    workingHours: "Senin–Jumat, 09.00–18.00 WIB"
  };

  /* ==========================================================================
     2. DATABASE DETAIL LAYANAN (UNTUK MODAL DETAIL)
     Data lengkap ketika tombol 'Detail Layanan' diklik.
     ========================================================================== */
  const SERVICES_DATA = {
    // Layanan IT Solution
    "konsultasi": {
      category: "IT Solution & Hardware",
      title: "Konsultasi Laptop / PC",
      desc: "Layanan konsultasi menyeluruh untuk mendiagnosa kendala performa laptop, pemilihan spesifikasi komputer rakitan untuk kebutuhan koding/desain, serta rekomendasi upgrade efisien seperti penambahan RAM dan migrasi SSD NVMe.",
      features: [
        "Analisis kesehatan storage (SSD/HDD) dan RAM",
        "Rekomendasi spesifikasi sesuai kebutuhan jurusan perkuliahan",
        "Estimasi biaya upgrade hardware transparan",
        "Konsultasi awal gratis untuk mahasiswa"
      ],
      meta: "⏱ Estimasi: 15–30 Menit | Tempat: Outlet IT Solution"
    },
    "os": {
      category: "IT Solution & Software",
      title: "Instalasi Operating System",
      desc: "Pemasangan sistem operasi bersih (Clean Install) untuk Windows 10/11 maupun varian distribusi Linux (Ubuntu, Debian, Fedora). Seluruh instalasi dipastikan optimal, bebas bloatware, dan menggunakan driver terupdate.",
      features: [
        "Backup data penting sebelum proses instalasi",
        "Partisi drive terstruktur dan rapi",
        "Instalasi seluruh driver hardware terbaru",
        "Aktivasi sistem dan konfigurasi performa maksimal"
      ],
      meta: "⏱ Estimasi: 1–3 Jam | Garansi: 7 Hari Pendampingan"
    },
    "app-driver": {
      category: "IT Solution & Software",
      title: "Instalasi Aplikasi dan Driver",
      desc: "Pemasangan software esensial perkuliahan (Microsoft Office, PDF Reader, Browser), software kreatif (Adobe Photoshop, Premiere, Illustrator), serta tools pemrograman (VS Code, Git, XAMPP, Node.js) dan driver periferal.",
      features: [
        "Paket aplikasi standar perkuliahan lengkap",
        "Pemasangan software koding & praktikum informatika",
        "Driver printer, grafis (NVIDIA/AMD), dan audio",
        "Pemeriksaan bebas dari virus dan malware berbahaya"
      ],
      meta: "⏱ Estimasi: 30–60 Menit | Sesuai Permintaan Aplikasi"
    },
    "servis": {
      category: "IT Solution & Maintenance",
      title: "Troubleshooting & Servis Laptop/PC",
      desc: "Penanganan komprehensif terhadap permasalahan sistem melambat, Blue Screen (BSOD), laptop sering mati sendiri, pembersihan debu kipas pendingin (thermal cleaning), serta penggantian thermal paste berkualitas tinggi.",
      features: [
        "Pembersihan debu heatsink dan kipas pendingin",
        "Penggantian thermal paste kualitas premium",
        "Perbaikan error registry & blue screen of death",
        "Pengecekan temperatur processor & GPU sebelum/sesudah servis"
      ],
      meta: "⏱ Estimasi: 1–2 Hari Kerja (Tergantung Tingkat Kerusakan)"
    },
    "web": {
      category: "IT Solution & Development",
      title: "Pembuatan Web Sederhana",
      desc: "Layanan pembuatan website landing page, portfolio mahasiswa, website organisasi kepanitiaan, atau katalog UMKM sederhana dengan antarmuka modern, responsif, dan siap online menggunakan GitHub Pages atau hosting.",
      features: [
        "Desain responsif untuk layar HP, tablet, dan laptop",
        "Struktur kode bersih (Clean Code) HTML, CSS, JavaScript",
        "Bantuan deploy online ke GitHub Pages atau domain sendiri",
        "Panduan mudah cara mengubah konten website"
      ],
      meta: "⏱ Estimasi: 3–7 Hari Kerja | Termasuk Revisi Minor"
    },

    // Jasa Kreatif & Digital
    "digital-marketing": {
      category: "Jasa Kreatif & Digital",
      title: "Digital Marketing & Promosi",
      desc: "Penyusunan strategi promosi digital terarah untuk acara kampus, open recruitment panitia, maupun penjualan produk UMKM mahasiswa melalui optimasi konten visual dan copywriting yang menarik minat audiens.",
      features: [
        "Penyusunan copywriting pesan promosi efektif",
        "Perencanaan kalender konten media sosial",
        "Strategi peningkatan jangkauan (organic reach)",
        "Analisis respon dan engagement target sasaran"
      ],
      meta: "⏱ Estimasi: Fleksibel Sesuai Periode Kampanye"
    },
    "graphic-design": {
      category: "Jasa Kreatif & Digital",
      title: "Graphic Design Studio",
      desc: "Pembuatan materi desain visual profesional seperti poster seminar, banner publikasi kegiatan, pamflet lomba, feed Instagram tematik, ID card panitia, hingga perancangan identitas logo dan aset digital.",
      features: [
        "Desain resolusi tinggi siap cetak dan siap unggah medsos",
        "Format file lengkap (PNG, JPG, PDF, dan master vector)",
        "Revisi fleksibel sesuai arahan brand",
        "Konsep visual modern berstandar industri desain"
      ],
      meta: "⏱ Estimasi: 1–3 Hari Kerja"
    },
    "ui-ux": {
      category: "Jasa Kreatif & Digital",
      title: "UI/UX Design & Prototyping",
      desc: "Perancangan desain antarmuka aplikasi web atau mobile dengan prinsip kenyamanan pengguna (User-Centered Design). Menghasilkan wireframe, mockup visual beresolusi tinggi, dan prototipe interaktif menggunakan Figma.",
      features: [
        "Riset kebutuhan pengguna & user flow sederhana",
        "Wireframing low-fidelity & high-fidelity mockup",
        "Interactive prototype siap klik dan uji coba",
        "Design system & komponen UI yang rapi untuk diserahkan ke developer"
      ],
      meta: "⏱ Estimasi: 3–7 Hari Kerja"
    },
    "web-dev": {
      category: "Jasa Kreatif & Digital",
      title: "Web Development",
      desc: "Pengembangan website custom dari tahap perancangan hingga dapat diakses di internet. Cocok untuk portal informasi organisasi mahasiswa, website pendaftaran lomba, profil UMKM, dan platform showcase produk.",
      features: [
        "Pengembangan front-end interaktif & mobile-friendly",
        "Integrasi form kontak, katalog produk, atau peta lokasi",
        "Optimasi kecepatan loading halaman (SEO-friendly)",
        "Dukungan teknis dan panduan operasional web"
      ],
      meta: "⏱ Estimasi: 1–2 Minggu Kerja"
    },
    "mobile-dev": {
      category: "Jasa Kreatif & Digital",
      title: "Mobile App Development",
      desc: "Pengembangan prototipe aplikasi mobile modern berbasis Android yang responsif, cepat, dan intuitif untuk kebutuhan proyek akademik, prototipe startup kampus, atau sistem internal organisasi.",
      features: [
        "Tampilan antarmuka modern yang adaptif di berbagai resolusi layar HP",
        "Integrasi data API & database lokal",
        "Arsitektur kode terstruktur dan mudah dikembangkan",
        "Build file installer APK siap pasang"
      ],
      meta: "⏱ Estimasi: 2–3 Minggu Kerja"
    },
    "data-ai": {
      category: "Jasa Kreatif & Digital",
      title: "Data / AI / Automation",
      desc: "Layanan konsultasi pembersihan dan pengolahan dataset untuk tugas kuliah/penelitian, pembuatan dashboard visualisasi data interaktif, rekayasa prompt AI kreatif, serta skrip otomatisasi alur kerja.",
      features: [
        "Pembersihan data (Data Cleaning) & eksplorasi statistik",
        "Visualisasi diagram grafik insight informatif",
        "Pembuatan skrip otomasi tugas repetitif (Automation)",
        "Konsultasi integrasi model API AI untuk aplikasi"
      ],
      meta: "⏱ Estimasi: 3–5 Hari Kerja"
    },
    "video-editing": {
      category: "Jasa Kreatif & Digital",
      title: "Photo & Video Editing",
      desc: "Layanan pascaproduksi multimedia mencakup penyuntingan video dokumentasi acara, video reels/TikTok promosi, motion graphic bumper logo, serta color grading dan retouching foto berstandar profesional.",
      features: [
        "Editing video dengan transisi halus dan sinkronisasi audio",
        "Penambahan teks subtitle, efek visual, dan watermark",
        "Koreksi warna (Color Grading) agar visual lebih hidup",
        "Export format full HD 1080p optimal untuk Instagram/YouTube"
      ],
      meta: "⏱ Estimasi: 2–4 Hari Kerja"
    }
  };

  /* ==========================================================================
     3. HELPER FUNCTION: FORMAT RUPIAH
     Mengubah angka numerik menjadi format mata uang Rupiah standar
     ========================================================================== */
  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  }

  /* ==========================================================================
     4. MENGHUBUNGKAN TOMBOL WHATSAPP KE KONFIGURASI RESMI
     Semua link WhatsApp di header, navbar, footer, dan floating button
     akan otomatis menggunakan nomor yang ada di APP_CONFIG.
     ========================================================================== */
  function setupWhatsappLinks() {
    const defaultMessage = encodeURIComponent(
      `Halo IT SOLUTION HMP-TI ITS, saya ingin menanyakan informasi layanan dan produk.`
    );
    const waUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${defaultMessage}`;

    const waButtons = [
      document.getElementById("navWhatsappBtn"),
      document.getElementById("contactWhatsappBtn"),
      document.getElementById("footerWhatsappBtn"),
      document.getElementById("floatingWhatsappBtn")
    ];

    waButtons.forEach(btn => {
      if (btn) {
        btn.setAttribute("href", waUrl);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("rel", "noopener noreferrer");
      }
    });
  }
  setupWhatsappLinks();

  /* ==========================================================================
     5. STICKY NAVBAR & SCROLLSPY (ACTIVE LINK HIGHLIGHTING)
     ========================================================================== */
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".navbar__link");
  const sections = document.querySelectorAll("section[id]");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // 1. Navbar elevation effect
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // 2. Tombol Back to Top visibility
    if (scrollY > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }

    // 3. ScrollSpy: Tandai link navbar yang aktif sesuai posisi scroll
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Smooth scroll Back to top saat tombol diklik
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ==========================================================================
     6. MOBILE MENU DRAWER (HAMBURGER TOGGLE)
     ========================================================================== */
  const navbarToggle = document.getElementById("navbarToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerClose = document.getElementById("drawerClose");
  const mobileDrawerLinks = document.querySelectorAll(".mobile-drawer__link");

  function openDrawer() {
    mobileDrawer.classList.add("open");
    navbarToggle.classList.add("active");
    navbarToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden"; // Cegah scroll latar belakang
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    navbarToggle.classList.remove("active");
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = ""; // Kembalikan scroll
  }

  if (navbarToggle) {
    navbarToggle.addEventListener("click", () => {
      if (mobileDrawer.classList.contains("open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);

  // Tutup drawer saat link di dalamnya diklik
  mobileDrawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  /* ==========================================================================
     7. KATALOG MAKANAN & MINUMAN (FILTER KATEGORI & PENCARIAN LIVE)
     ========================================================================== */
  const fnbSearchInput = document.getElementById("fnbSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const fnbFilterTabs = document.querySelectorAll("#fnbFilterTabs .filter-tab");
  const fnbCards = document.querySelectorAll("#fnbProductGrid .product-card");
  const fnbEmptyState = document.getElementById("fnbEmptyState");

  let currentCategory = "all";
  let currentSearchQuery = "";

  function filterCatalog() {
    let visibleCount = 0;

    fnbCards.forEach(card => {
      const cardCat = card.getAttribute("data-category") || "";
      const cardName = (card.getAttribute("data-name") || "").toLowerCase();

      // Cek kecocokan kategori
      const matchCategory = (currentCategory === "all") || (cardCat === currentCategory);

      // Cek kecocokan kata kunci pencarian
      const matchSearch = cardName.includes(currentSearchQuery);

      if (matchCategory && matchSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Tampilkan pesan kosong jika tidak ada produk yang cocok
    if (visibleCount === 0) {
      fnbEmptyState.style.display = "block";
    } else {
      fnbEmptyState.style.display = "none";
    }
  }

  // Event listener tab filter kategori
  fnbFilterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      fnbFilterTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      currentCategory = tab.getAttribute("data-category");
      filterCatalog();
    });
  });

  // Event listener input pencarian secara realtime
  if (fnbSearchInput) {
    fnbSearchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();

      // Tombol reset pencarian (X)
      if (currentSearchQuery.length > 0) {
        clearSearchBtn.style.display = "block";
      } else {
        clearSearchBtn.style.display = "none";
      }

      filterCatalog();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      fnbSearchInput.value = "";
      currentSearchQuery = "";
      clearSearchBtn.style.display = "none";
      fnbSearchInput.focus();
      filterCatalog();
    });
  }

  /* ==========================================================================
     8. MODAL DETAIL LAYANAN (IT SOLUTION & JASA KREATIF)
     ========================================================================== */
  const serviceModal = document.getElementById("serviceModal");
  const serviceModalOverlay = document.getElementById("serviceModalOverlay");
  const serviceModalClose = document.getElementById("serviceModalClose");
  const serviceModalDismiss = document.getElementById("serviceModalDismiss");
  const serviceModalCategory = document.getElementById("serviceModalCategory");
  const serviceModalTitle = document.getElementById("serviceModalTitle");
  const serviceModalDesc = document.getElementById("serviceModalDesc");
  const serviceModalFeatures = document.getElementById("serviceModalFeatures");
  const serviceModalMeta = document.getElementById("serviceModalMeta");
  const serviceModalCta = document.getElementById("serviceModalCta");

  function openServiceModal(serviceKey) {
    const data = SERVICES_DATA[serviceKey];
    if (!data) return;

    serviceModalCategory.textContent = data.category;
    serviceModalTitle.textContent = data.title;
    serviceModalDesc.textContent = data.desc;

    // Bersihkan dan masukkan daftar keunggulan
    serviceModalFeatures.innerHTML = "";
    data.features.forEach(feat => {
      const li = document.createElement("li");
      li.textContent = feat;
      serviceModalFeatures.appendChild(li);
    });

    serviceModalMeta.textContent = data.meta;

    // Prefill link WhatsApp untuk konsultasi layanan ini
    const waText = encodeURIComponent(
      `Halo IT SOLUTION HMP-TI ITS, saya tertarik berkonsultasi mengenai: *${data.title}*. Bisakah saya mendapatkan informasi lebih lanjut?`
    );
    serviceModalCta.href = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${waText}`;
    serviceModalCta.setAttribute("target", "_blank");

    serviceModal.classList.add("open");
    serviceModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeServiceModal() {
    serviceModal.classList.remove("open");
    serviceModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Pasang event listener untuk semua tombol "Detail Layanan"
  document.querySelectorAll(".btn-service-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const serviceId = btn.getAttribute("data-service");
      openServiceModal(serviceId);
    });
  });

  if (serviceModalClose) serviceModalClose.addEventListener("click", closeServiceModal);
  if (serviceModalDismiss) serviceModalDismiss.addEventListener("click", closeServiceModal);
  if (serviceModalOverlay) serviceModalOverlay.addEventListener("click", closeServiceModal);

  /* Modal Detail Layanan Percetakan */
  document.querySelectorAll(".btn-print-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-title");
      const price = btn.getAttribute("data-price");
      const desc = btn.getAttribute("data-desc");

      serviceModalCategory.textContent = "Percetakan & Dokumen";
      serviceModalTitle.textContent = title;
      serviceModalDesc.textContent = desc;

      serviceModalFeatures.innerHTML = `
        <li>Kualitas hasil cetak tajam dan presisi</li>
        <li>Format kertas HVS standar kampus</li>
        <li>Harga terjangkau: <strong>${price}</strong></li>
        <li>Bisa konsultasi file PDF/Word langsung via WhatsApp</li>
      `;

      serviceModalMeta.textContent = `Tarif: ${price} | Pengerjaan langsung di outlet HMP-TI ITS`;

      const waText = encodeURIComponent(
        `Halo IT SOLUTION HMP-TI ITS, saya ingin menggunakan layanan percetakan: *${title}* (${price}).`
      );
      serviceModalCta.href = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${waText}`;
      serviceModalCta.setAttribute("target", "_blank");

      serviceModal.classList.add("open");
      serviceModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  /* ==========================================================================
     9. MODAL PEMESANAN PRODUK (ORDER MODAL DENGAN PREFILL WHATSAPP)
     ========================================================================== */
  const orderModal = document.getElementById("orderModal");
  const orderModalOverlay = document.getElementById("orderModalOverlay");
  const orderModalClose = document.getElementById("orderModalClose");
  const orderModalDismiss = document.getElementById("orderModalDismiss");
  const orderModalBadge = document.getElementById("orderModalBadge");
  const orderItemName = document.getElementById("orderItemName");
  const orderItemCat = document.getElementById("orderItemCat");
  const orderItemPrice = document.getElementById("orderItemPrice");
  const orderQtyInput = document.getElementById("orderQty");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  const orderNotes = document.getElementById("orderNotes");
  const orderSubtotal = document.getElementById("orderSubtotal");
  const orderSubmitBtn = document.getElementById("orderSubmitBtn");

  let currentOrder = {
    name: "",
    price: 0,
    category: "",
    quantity: 1
  };

  function updateOrderCalculations() {
    orderQtyInput.value = currentOrder.quantity;
    const subtotal = currentOrder.price * currentOrder.quantity;
    orderSubtotal.textContent = formatRupiah(subtotal);
  }

  function openOrderModal(name, price, category) {
    currentOrder.name = name;
    currentOrder.price = parseInt(price, 10) || 0;
    currentOrder.category = category || "Produk";
    currentOrder.quantity = 1;

    orderModalBadge.textContent = `Pemesanan • ${currentOrder.category}`;
    orderItemName.textContent = currentOrder.name;
    orderItemCat.textContent = `Kategori: ${currentOrder.category}`;
    orderItemPrice.textContent = `${formatRupiah(currentOrder.price)} / pcs`;
    orderNotes.value = "";

    updateOrderCalculations();

    orderModal.classList.add("open");
    orderModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeOrderModal() {
    orderModal.classList.remove("open");
    orderModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Stepper tombol +/-
  if (qtyMinus) {
    qtyMinus.addEventListener("click", () => {
      if (currentOrder.quantity > 1) {
        currentOrder.quantity--;
        updateOrderCalculations();
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener("click", () => {
      if (currentOrder.quantity < 99) {
        currentOrder.quantity++;
        updateOrderCalculations();
      }
    });
  }

  // Pasang event ke semua tombol "+ Pesan" (F&B dan Konsinyasi)
  document.querySelectorAll(".btn-order").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = btn.getAttribute("data-name");
      const price = btn.getAttribute("data-price");
      const category = btn.getAttribute("data-cat");
      openOrderModal(name, price, category);
    });
  });

  // Tombol Kirim Pesanan ke WhatsApp
  if (orderSubmitBtn) {
    orderSubmitBtn.addEventListener("click", () => {
      const subtotalFormatted = formatRupiah(currentOrder.price * currentOrder.quantity);
      const noteText = orderNotes.value.trim() ? `\n📝 *Catatan:* ${orderNotes.value.trim()}` : "";

      const waMessage = 
        `Halo *IT SOLUTION HMP-TI ITS*, saya ingin melakukan pemesanan:\n\n` +
        `📦 *Produk:* ${currentOrder.name}\n` +
        `🏷️ *Kategori:* ${currentOrder.category}\n` +
        `🔢 *Jumlah:* ${currentOrder.quantity} pcs\n` +
        `💰 *Estimasi Total:* ${subtotalFormatted}` +
        noteText + `\n\n` +
        `Mohon konfirmasi ketersediaan dan cara pengambilannya. Terima kasih!`;

      const targetUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      closeOrderModal();
    });
  }

  if (orderModalClose) orderModalClose.addEventListener("click", closeOrderModal);
  if (orderModalDismiss) orderModalDismiss.addEventListener("click", closeOrderModal);
  if (orderModalOverlay) orderModalOverlay.addEventListener("click", closeOrderModal);

  /* ==========================================================================
     10. GALERI DOKUMENTASI (FILTER KATEGORI & LIGHTBOX VIEWER)
     ========================================================================== */
  const galleryFilterTabs = document.querySelectorAll("#galleryFilterTabs .filter-tab");
  const galleryCards = document.querySelectorAll("#galleryGrid .gallery-card");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxBadge = document.getElementById("lightboxBadge");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");

  // Filter Galeri
  galleryFilterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      galleryFilterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");

      galleryCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Buka Lightbox Foto
  galleryCards.forEach(card => {
    card.addEventListener("click", () => {
      const imgElement = card.querySelector(".gallery-card__thumb img");
      const title = card.getAttribute("data-title");
      const desc = card.getAttribute("data-desc");
      const badgeText = card.querySelector(".gallery-card__badge")?.textContent || "Dokumentasi";

      if (imgElement) {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = title;
        lightboxBadge.textContent = badgeText;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;

        lightboxModal.classList.add("open");
        lightboxModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeLightbox() {
    lightboxModal.classList.remove("open");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);

  /* ==========================================================================
     11. GLOBAL ESCAPE KEY LISTENER (TUTUP SEMUA MODAL & DRAWER)
     ========================================================================== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (serviceModal && serviceModal.classList.contains("open")) closeServiceModal();
      if (orderModal && orderModal.classList.contains("open")) closeOrderModal();
      if (lightboxModal && lightboxModal.classList.contains("open")) closeLightbox();
      if (mobileDrawer && mobileDrawer.classList.contains("open")) closeDrawer();
    }
  });

  /* ==========================================================================
     12. SMOOTH SCROLL DENGAN OFFSET NAVBAR
     Memastikan saat link navigasi diklik, header sticky tidak menutupi judul
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.length <= 1) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 88;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  console.log("IT SOLUTION HMP-TI ITS — Website siap dijalankan!");
});

