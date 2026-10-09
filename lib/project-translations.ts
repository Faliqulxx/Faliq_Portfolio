export interface ProjectTranslation {
  description: {
    en: string;
    id: string;
  };
  features: {
    en: string[];
    id: string[];
  };
}

export const PROJECT_TRANSLATIONS: Record<string, ProjectTranslation> = {
  "SignalHR": {
    description: {
      en: "A modern AI-powered Applicant Tracking System (ATS) designed to help HR teams manage job vacancies, automate resume screening, evaluate candidate-job compatibility, and monitor recruitment analytics through an integrated recruitment platform.",
      id: "Sistem Pelacakan Pelamar (ATS) modern berbasis AI yang dirancang untuk membantu tim HR mengelola lowongan kerja, mengotomatisasi penyaringan resume, mengevaluasi kecocokan kandidat dengan pekerjaan, dan memantau analitik rekrutmen melalui platform terintegrasi.",
    },
    features: {
      en: [
        "Job management for creating and editing job vacancies with department, location, employment type, salary range, and job descriptions.",
        "Custom job requirements with skill-based criteria and importance weights such as Mandatory and Nice-to-have.",
        "AI-powered resume parsing for automatically extracting candidate information from PDF and DOCX files.",
        "Automatic extraction of personal information, education, work experience, certifications, and candidate skills.",
        "Resume parsing review system that allows HR to verify and edit AI-extracted candidate information.",
        "AI matchmaking engine that calculates candidate-job compatibility scores from 0 to 100.",
        "Detailed candidate matching analysis showing matched and missing skills.",
        "AI-generated candidate summaries explaining why a candidate is suitable or unsuitable for a position.",
        "Recruitment dashboard with quick statistics such as active jobs, total applicants, and new applicants.",
        "Recruitment funnel analytics for tracking candidates from application through interview and hiring stages.",
        "Skills analytics showing the most common skills among applicants.",
        "Applicant Tracking System for monitoring candidates across different recruitment stages.",
        "Dynamic candidate status management including New, Screening, Interview, Offered, Hired, and Rejected.",
        "Integrated candidate profile combining the original resume with AI-extracted candidate information.",
        "Modern responsive interface designed for efficient HR recruitment workflows.",
      ],
      id: [
        "Manajemen lowongan kerja untuk membuat dan mengedit lowongan pekerjaan lengkap dengan departemen, lokasi, jenis pekerjaan, rentang gaji, dan deskripsi tugas.",
        "Kriteria persyaratan kerja kustom berbasis keahlian dengan bobot kepentingan seperti Wajib (Mandatory) dan Nilai Tambah (Nice-to-have).",
        "AI Resume Parsing untuk mengekstrak informasi pelamar secara otomatis dari berkas PDF dan DOCX.",
        "Ekstraksi data otomatis mencakup informasi pribadi, riwayat pendidikan, pengalaman kerja, sertifikasi, dan keahlian kandidat.",
        "Sistem verifikasi hasil parsing resume yang memungkinkan tim HR meninjau dan mengedit data hasil ekstraksi AI.",
        "Mesin pencocokan AI yang menghitung skor kompatibilitas kandidat terhadap posisi dari skala 0 hingga 100.",
        "Analisis kecocokan kandidat mendalam yang menampilkan keahlian yang sesuai dan keahlian yang belum terpenuhi.",
        "Ringkasan kesesuaian kandidat otomatis berbasis AI yang menjelaskan alasan kandidat cocok atau kurang cocok untuk posisi tersebut.",
        "Dashboard rekrutmen dengan ringkasan statistik cepat seperti jumlah lowongan aktif, total pelamar, dan pelamar baru.",
        "Analitik funnel rekrutmen untuk melacak alur kandidat dari tahap lamaran, wawancara, hingga penerimaan kerja.",
        "Analisis keahlian yang memetakan keterampilan paling umum di antara para pelamar.",
        "Sistem Pelacakan Pelamar (ATS) komprehensif untuk memantau status kandidat di setiap tahapan rekrutmen.",
        "Manajemen status kandidat dinamis meliputi Baru, Penyaringan, Wawancara, Penawaran, Diterima, dan Ditolak.",
        "Profil kandidat terintegrasi yang menggabungkan resume asli dengan data hasil ekstraksi AI.",
        "Tampilan antarmuka modern dan responsif yang dirancang untuk alur kerja rekrutmen HR yang efisien.",
      ],
    },
  },
  "Sistem Informasi Logistik CGN": {
    description: {
      en: "The CGN Logistics Information System is a digital platform that integrates inventory management, inventory control, delivery monitoring, and logistics performance analysis to maximize the efficiency of CGN's logistics operations. The system also provides high security and an intuitive user interface.",
      id: "Sistem Informasi Logistik CGN adalah platform digital yang mengintegrasikan manajemen inventaris, kontrol stok, pemantauan pengiriman, dan analisis performa logistik untuk memaksimalkan efisiensi operasional logistik CGN dengan keamanan andal dan antarmuka intuitif.",
    },
    features: {
      en: [
        "Inventory Management: Tracks, organizes, and optimizes stock levels for efficient resource allocation.",
        "Inventory Control: Empowers precise oversight with real-time updates on stock movements for accurate decision-making.",
        "Delivery Monitoring: Offers real-time visibility into logistics, enabling proactive responses to ensure timely deliveries.",
        "Performance Analysis: Utilizes powerful analytics to gain insights, identify improvements, and enhance operational efficiency.",
      ],
      id: [
        "Manajemen Inventaris: Melacak, mengatur, dan mengoptimalkan tingkat stok untuk alokasi sumber daya yang efisien.",
        "Kontrol Inventaris: Pengawasan presisi dengan pembaruan pergerakan stok secara real-time untuk pengambilan keputusan yang akurat.",
        "Pemantauan Pengiriman: Visibilitas logistik real-time untuk respon proaktif demi menjamin ketepatan waktu pengiriman.",
        "Analisis Performa: Analitik mendalam untuk mendapatkan wawasan bisnis, mengidentifikasi peluang perbaikan, dan meningkatkan efisiensi operasional.",
      ],
    },
  },
  "Shopee App Review Intelligence Dashboard": {
    description: {
      en: "An interactive data analytics dashboard for analyzing Shopee app reviews using Natural Language Processing and sentiment analysis. The project transforms raw user reviews into actionable insights by analyzing sentiment, rating distribution, review trends, and common topics to better understand customer opinions and user experience.",
      id: "Dashboard analitik data interaktif untuk menganalisis ulasan aplikasi Shopee menggunakan Pemrosesan Bahasa Alami (NLP) dan analisis sentimen. Proyek ini mengubah ulasan mentah pengguna menjadi wawasan yang dapat ditindaklanjuti melalui analisis sentimen, distribusi rating, tren ulasan, dan topik populer.",
    },
    features: {
      en: [
        "Interactive dashboard for analyzing Shopee app user reviews.",
        "Sentiment analysis to classify reviews into positive, neutral, and negative sentiments.",
        "Analysis of user ratings and overall review distribution.",
        "Visualization of review trends and customer feedback patterns.",
        "Identification of common topics and frequently discussed issues.",
        "Natural Language Processing pipeline for Indonesian user reviews.",
        "Text preprocessing including cleaning, normalization, and tokenization.",
        "Interactive data visualizations to support business insights.",
        "Dashboard designed to transform raw customer feedback into actionable insights.",
        "Helps identify common complaints, positive experiences, and areas for product improvement.",
      ],
      id: [
        "Dashboard interaktif untuk menganalisis ulasan pengguna aplikasi Shopee.",
        "Analisis sentimen untuk mengklasifikasikan ulasan menjadi sentimen positif, netral, dan negatif.",
        "Analisis rating pengguna dan distribusi ulasan secara keseluruhan.",
        "Visualisasi tren ulasan dan pola feedback pelanggan dari waktu ke waktu.",
        "Identifikasi topik populer dan keluhan atau isu yang sering dibahas pengguna.",
        "Pipeline Pemrosesan Bahasa Alami (NLP) yang dioptimalkan untuk teks ulasan berbahasa Indonesia.",
        "Pra-pemrosesan teks mencakup pembersihan, normalisasi kata, dan tokenisasi.",
        "Visualisasi data interaktif untuk mendukung pengambilan keputusan bisnis.",
        "Dashboard yang dirancang untuk mengubah ulasan mentah menjadi wawasan strategis.",
        "Membantu mengenali keluhan utama, pengalaman positif, dan area pengembangan produk.",
      ],
    },
  },
  "E-Commerce Ikan Me": {
    description: {
      en: "This website is an innovative platform designed to assist freshwater fishermen and fish farmers in the village of Berasan Mulya in marketing their products online. We are dedicated to supporting the local economy and the conservation of natural resources.",
      id: "Platform inovatif yang dirancang untuk membantu nelayan dan pembudidaya ikan air tawar di desa Berasan Mulya memasarkan hasil panen secara daring guna mendukung ekonomi lokal dan kelestarian sumber daya perikanan.",
    },
    features: {
      en: [
        "Online Marketplace: Provides a dedicated space for fishermen and fish farmers to create and manage their online stores, showcasing their products to a wider audience.",
        "Buy and Sell: Enables users to easily buy and sell freshwater products, fostering a vibrant online marketplace that connects local producers with consumers.",
        "Shipping and Delivery: Facilitates a streamlined shipping process, allowing sellers to arrange for the efficient and timely delivery of their products to customers.",
      ],
      id: [
        "Marketplace Online: Menyediakan toko online terdedikasi bagi pembudidaya ikan untuk memajang dan memasarkan produk ke jangkauan pembeli yang lebih luas.",
        "Jual Beli Mudah: Memfasilitasi transaksi jual beli produk perikanan air tawar secara langsung antara produsen lokal dan konsumen.",
        "Pengiriman & Logistik: Memudahkan proses pengaturan pengiriman produk segar secara efisien dan tepat waktu kepada pelanggan.",
      ],
    },
  },
  "Match Schedule MPL Indonesia": {
    description: {
      en: "This website is a demonstration of a clone that imitates the appearance and features of the official MPL Indonesia website. It provides information similar to the actual MPL Indonesia website, including match schedules, team listings, and standings.",
      id: "Website demonstrasi dan klon dari situs resmi MPL Indonesia yang menyajikan informasi jadwal pertandingan, profil tim peserta, klasemen terkini, serta rekap hasil pertandingan turnamen.",
    },
    features: {
      en: [
        "Match Schedules: Provides information about the schedule of matches in the MPL Indonesia league.",
        "Team Listings: Displays a list of teams participating in the MPL Indonesia league.",
        "Standings: Shows the current standings of the teams in the league, indicating their performance.",
        "Past Match Results: Displays the results and summaries of previous matches in the MPL Indonesia league.",
      ],
      id: [
        "Jadwal Pertandingan: Informasi jadwal lengkap seluruh laga pertandingan di liga MPL Indonesia.",
        "Daftar Tim: Menampilkan daftar lengkap tim esport yang bertanding di turnamen MPL Indonesia.",
        "Klasemen: Menampilkan posisi dan perolehan poin terkini tiap tim sepanjang musim kompetisi.",
        "Hasil Pertandingan: Rekap skor dan ringkasan hasil laga-laga pertandingan sebelumnya.",
      ],
    },
  },
  "Autogate RFID": {
    description: {
      en: "A smart autogate and parking access system based on IoT using ESP32, RFID, ultrasonic sensors, servo motor, LCD display, and web monitoring integration. This system is designed to automate vehicle entry and exit access in residential areas or parking environments using RFID card authentication.",
      id: "Sistem gerbang otomatis dan akses parkir pintar berbasis IoT menggunakan ESP32, RFID, sensor ultrasonik, motor servo, layar LCD, dan pemantauan web. Dirancang untuk mengotomatisasi akses keluar-masuk kendaraan menggunakan autentikasi kartu RFID.",
    },
    features: {
      en: [
        "RFID-based vehicle access authentication system.",
        "Automatic gate control using servo motor.",
        "Vehicle detection using ultrasonic sensors.",
        "LCD display for access status and user instructions.",
        "Buzzer and LED indicators for valid and invalid access notifications.",
        "Automatic gate closing after vehicle passes the sensor.",
        "Real-time monitoring system for vehicle entry and exit.",
        "Designed for smart parking and residential security simulation.",
        "ESP32-based IoT communication and automation.",
        "Simple prototype miniaturized using cardboard and custom road simulation.",
      ],
      id: [
        "Sistem autentikasi akses kendaraan berbasis pembacaan kartu RFID.",
        "Kontrol palang gerbang otomatis menggunakan motor servo.",
        "Deteksi keberadaan kendaraan menggunakan sensor ultrasonik.",
        "Layar LCD untuk menampilkan status akses dan petunjuk bagi pengguna.",
        "Indikator buzzer dan LED untuk notifikasi akses valid maupun ditolak.",
        "Penutupan palang otomatis secara aman setelah kendaraan melewati sensor.",
        "Sistem pemantauan real-time riwayat akses keluar-masuk kendaraan.",
        "Dirancang untuk simulasi keamanan perumahan dan parkir cerdas.",
        "Komunikasi data dan otomasi IoT berbasis mikrokontroler ESP32.",
        "Prototipe miniatur yang teruji dengan simulasi jalur jalan raya.",
      ],
    },
  },
  "Multi-Service AI Assistant Bot": {
    description: {
      en: "An intelligent, multi-purpose AI Assistant integrated with n8n workflow automation. It leverages Large Language Models (LLMs) and Vector Databases to provide contextual responses and execute actions across four core modules: Academic Information, Personal Finance Tracking, Appointment Booking, and Car Rental Management.",
      id: "Asisten AI serbaguna yang terintegrasi dengan otomasi alur kerja n8n. Memanfaatkan LLM dan Basis Data Vektor untuk memberikan respon kontekstual dan mengeksekusi aksi pada 4 modul utama: Informasi Akademik, Pencatat Keuangan Pribadi, Booking Jadwal, dan Manajemen Rental Mobil.",
    },
    features: {
      en: [
        "Academic Information System: Retrieval-Augmented Generation (RAG) for answering campus regulations and schedules accurately using vector embeddings.",
        "Finance Tracker: Automatically logs income or expenses into the database through simple chat commands, equipped with budget alerts.",
        "Instant Booking & Car Rental: Seamless end-to-end scheduling and fleet availability check via dynamic API and database lookups.",
        "Advanced Router: n8n conditional routing logic to seamlessly direct user intents to the correct service module without overlapping.",
      ],
      id: [
        "Sistem Informasi Akademik: Implementasi RAG untuk menjawab regulasi kampus dan jadwal secara akurat menggunakan embedding vektor.",
        "Pencatat Keuangan: Mencatat pemasukan dan pengeluaran ke database otomatis melalui perintah chat, dilengkapi peringatan batas anggaran.",
        "Booking Instan & Rental Mobil: Penjadwalan janji temu dan pengecekan ketersediaan armada mobil secara otomatis via API dinamis.",
        "Router Cerdas: Logika percabangan kondisi di n8n untuk mengarahkan maksud pengguna ke modul layanan yang tepat tanpa tumpang tindih.",
      ],
    },
  },
  "WhatsApp RAG AI Assistant Chatbot": {
    description: {
      en: "An intelligent, multi-purpose WhatsApp AI Assistant integrated with n8n workflow automation. It leverages Large Language Models (LLMs) and Vector Databases to provide contextual responses and execute actions across four core modules: Academic Information, Personal Finance Tracking, Appointment Booking, and Car Rental Management.",
      id: "Chatbot asisten AI WhatsApp pintar yang terintegrasi dengan n8n. Memanfaatkan RAG dan basis data vektor untuk menjawab pertanyaan seputar informasi akademik kampus secara akurat 24/7 langsung melalui WhatsApp.",
    },
    features: {
      en: [
        "Retrieval-Augmented Generation (RAG) Implementation: Integrates academic reference documents into the LLM pipeline to provide validated, factual responses regarding campus regulations while minimizing AI hallucinations.",
        "text-embedding-3-small Vector Optimization: Leverages OpenAI's high-performance embedding model to perform precise cosine similarity searches within the vector store against user queries.",
        "WhatsApp Gateway Integration: Connects the automated AI workflow directly with a WhatsApp interface, offering students and users 24/7 responsive access to academic inquiries.",
        "n8n Workflow Orchestration: Utilizes n8n as the core backend orchestrator to seamlessly manage data routing, from handling incoming payloads to querying vector databases and dispatching final responses.",
      ],
      id: [
        "Implementasi RAG: Mengintegrasikan dokumen referensi akademik ke pipeline LLM untuk memberikan jawaban faktual terverifikasi serta meminimalkan halusinasi AI.",
        "Optimasi Vektor text-embedding-3-small: Memanfaatkan model embedding OpenAI untuk pencarian kesamaan kosinus presisi tinggi terhadap kueri pengguna.",
        "Integrasi Gateway WhatsApp: Menghubungkan alur kerja AI langsung ke antarmuka WhatsApp agar mahasiswa dapat bertanya kapan saja 24/7.",
        "Orkestrasi Alur Kerja n8n: Menggunakan n8n sebagai pengatur backend untuk menangani alur data, kueri database vektor, hingga pengiriman pesan balasan.",
      ],
    },
  },
  "Cat Breed Classification (Streamlit)": {
    description: {
      en: "A deep learning-based web application for classifying 12 cat breeds using image recognition. This project compares CNN Scratch, MobileNetV2, and ResNet50 models, with MobileNetV2 achieving the best classification performance through transfer learning.",
      id: "Aplikasi web klasifikasi gambar berbasis deep learning untuk mengenali 12 ras kucing. Proyek ini membandingkan performa model CNN Scratch, MobileNetV2, dan ResNet50, di mana MobileNetV2 mencatat performa terbaik melalui transfer learning.",
    },
    features: {
      en: [
        "Classifies images into 12 different cat breeds using Deep Learning.",
        "Compares CNN Scratch, MobileNetV2, and ResNet50 classification models.",
        "Performs image preprocessing and data augmentation for better model generalization.",
        "Displays prediction confidence scores and probability distribution for each class.",
        "Provides interactive image upload and prediction through a Streamlit dashboard.",
        "Visualizes model performance with accuracy-loss curves and confusion matrices.",
      ],
      id: [
        "Mengklasifikasikan foto ke dalam 12 jenis ras kucing yang berbeda menggunakan Deep Learning.",
        "Membandingkan performa model CNN Scratch, MobileNetV2, dan ResNet50.",
        "Pra-pemrosesan gambar dan augmentasi data untuk meningkatkan kemampuan generalisasi model.",
        "Menampilkan skor keyakinan prediksi (confidence score) dan distribusi probabilitas tiap ras.",
        "Antarmuka unggah foto dan inferensi interaktif melalui dashboard Streamlit.",
        "Visualisasi performa model lengkap dengan kurva akurasi-loss dan confusion matrix.",
      ],
    },
  },
  "HR-TOOLS": {
    description: {
      en: "This is HR TOOLS which is used to manage employee data, starting from personal data, employee performance appraisal work to the attendance system.",
      id: "Sistem HR TOOLS yang digunakan untuk mengelola data kepegawaian perusahaan secara terpadu, mulai dari biodata karyawan, penilaian kinerja kerja, hingga sistem absensi berbasis lokasi.",
    },
    features: {
      en: [
        "Fixed Bug Create, Read, Update and Delete Data Employee, Siswa, and Mata Pelajaran.",
        "Create, Read, Update and Delete Employee Recruitment.",
        "Create, Read, Update and Delete Data Employee Performance appraisal.",
        "Create, Read, Update and Delete Data Employee attendance using a location with a leaflet.",
      ],
      id: [
        "Manajemen data pegawai dan perbaikan bug CRUD data pegawai, siswa, dan mata pelajaran.",
        "Modul rekrutmen pegawai untuk mengelola proses seleksi calon karyawan.",
        "Sistem evaluasi dan penilaian kinerja kerja karyawan (performance appraisal).",
        "Sistem pencatatan absensi pegawai berbasis titik lokasi koordinat peta menggunakan Leaflet.",
      ],
    },
  },
  "Cat Breed Classification (React)": {
    description: {
      en: "A deep learning-based image classification system that identifies 12 different cat breeds. The project compares CNN Scratch, MobileNetV2, and ResNet50 models, with MobileNetV2 achieving the best performance at 82% accuracy. The trained model is deployed through an interactive web dashboard that allows users to upload cat images and receive breed predictions with confidence scores.",
      id: "Sistem klasifikasi gambar berbasis deep learning untuk mengidentifikasi 12 ras kucing dengan akurasi MobileNetV2 mencapai 82%. Model di-deploy melalui dashboard web interaktif (React + FastAPI) yang memungkinkan pengguna mengunggah foto kucing dan memperoleh hasil prediksi instan beserta skor keyakinan.",
    },
    features: {
      en: [
        "Classifies images into 12 different cat breeds.",
        "Compares CNN Scratch, MobileNetV2, and ResNet50 models.",
        "Uses transfer learning with MobileNetV2 and ResNet50.",
        "MobileNetV2 achieved the best performance with 82% accuracy.",
        "Upload cat images directly through the interactive web dashboard.",
        "Displays predicted cat breed with a confidence score.",
        "Shows sorted prediction probabilities for all available classes.",
        "Includes model evaluation using accuracy, precision, recall, and F1-score.",
        "Provides confusion matrix and accuracy-loss visualizations.",
        "Interactive and responsive dashboard with smooth animations.",
        "FastAPI backend for serving machine learning predictions.",
      ],
      id: [
        "Mengklasifikasikan gambar ke dalam 12 jenis ras kucing yang berbeda.",
        "Membandingkan arsitektur model CNN Scratch, MobileNetV2, dan ResNet50.",
        "Menerapkan metode transfer learning pada MobileNetV2 dan ResNet50.",
        "MobileNetV2 menghasilkan performa tertinggi dengan tingkat akurasi 82%." ,
        "Fitur unggah gambar kucing langsung melalui antarmuka web interaktif.",
        "Menampilkan hasil prediksi ras kucing beserta skor tingkat keyakinan (confidence score).",
        "Menyajikan peringkat probabilitas prediksi untuk seluruh kategori kelas.",
        "Evaluasi performa model komprehensif menggunakan metrik Akurasi, Presisi, Recall, dan F1-Score.",
        "Visualisasi evaluasi model lengkap dengan Confusion Matrix dan grafik Accuracy-Loss.",
        "Dashboard web interaktif dan responsif dengan animasi transisi yang mulus.",
        "Backend API berbasis FastAPI untuk melayani inferensi model machine learning berkecepatan tinggi.",
      ],
    },
  },
  "AI UI Chat": {
    description: {
      en: "A modern AI chatbot interface inspired by today's leading conversational AI platforms. Designed with a clean, responsive, and user-friendly experience featuring real-time messaging, conversation history, prompt suggestions, and an elegant dark theme.",
      id: "Antarmuka chatbot AI modern yang terinspirasi dari platform AI terkemuka. Dirancang dengan tampilan bersih, responsif, dan ramah pengguna yang dilengkapi percakapan real-time, riwayat obrolan, saran prompt interaktif, dan tema gelap elegan.",
    },
    features: {
      en: [
        "Modern AI chatbot interface inspired by ChatGPT and Gemini.",
        "Real-time chat conversation with streaming message animation.",
        "Conversation history with easy chat management.",
        "Prompt suggestions and empty-state experience for new users.",
        "Responsive layout optimized for desktop, tablet, and mobile.",
        "Dark mode interface with smooth animations.",
        "Loading, typing, and error states for a realistic AI chat experience.",
        "Reusable and scalable component architecture.",
        "Clean UI built with accessibility and performance in mind.",
        "Prepared for future integration with AI APIs such as OpenAI or Gemini.",
      ],
      id: [
        "Antarmuka chatbot AI modern yang terinspirasi dari ChatGPT dan Google Gemini.",
        "Percakapan chat real-time dengan animasi efek pengetikan teks (streaming message).",
        "Panel riwayat obrolan dengan manajemen sesi percakapan yang mudah.",
        "Saran prompt awal dan tampilan empty-state yang memudahkan pengguna baru.",
        "Tata letak responsif yang dioptimalkan untuk desktop, tablet, dan smartphone.",
        "Tampilan antarmuka mode gelap elegan dengan animasi yang halus.",
        "Indikator status loading, proses pengetikan, dan penanganan error yang realistis.",
        "Arsitektur komponen modular yang rapi dan mudah dikembangkan lebih lanjut.",
        "Desain UI bersih yang mengutamakan aksesibilitas dan performa loading cepat.",
        "Arsitektur siap pakai untuk dihubungkan dengan API LLM seperti OpenAI atau Gemini.",
      ],
    },
  },
  "Coffee Cafe": {
    description: {
      en: "A modern coffee shop landing page designed to showcase coffee products, featured menus, company profile, and contact information. Built with a responsive, visually engaging interface and smooth user experience across all devices.",
      id: "Landing page kedai kopi modern yang menampilkan katalog produk kopi, menu unggulan, profil kedai, serta kontak pemesanan. Dirancang dengan tampilan visual menarik dan pengalaman pengguna yang responsif di semua perangkat.",
    },
    features: {
      en: [
        "Modern and responsive coffee shop landing page.",
        "Interactive hero section with engaging call-to-action.",
        "Featured coffee menu and product showcase.",
        "About section introducing the coffee shop and its story.",
        "Gallery section displaying coffee products and café atmosphere.",
        "Contact section with location and social media links.",
        "Smooth scrolling navigation and responsive mobile menu.",
        "Optimized layout for desktop, tablet, and mobile devices.",
        "Clean UI with reusable components and maintainable structure.",
        "Fast loading static website with responsive design principles.",
      ],
      id: [
        "Landing page kedai kopi yang modern, elegan, dan responsif.",
        "Bagian hero interaktif dengan tombol ajakan bertindak (CTA) yang memikat.",
        "Katalog menu kopi unggulan dan etalase produk pilihan.",
        "Bagian tentang kami yang menceritakan filosofi dan kisah kedai kopi.",
        "Galeri foto suasana kedai dan varian sajian kopi terbaik.",
        "Bagian kontak terintegrasi dengan alamat lokasi dan tautan media sosial.",
        "Navigasi smooth scrolling yang nyaman dan menu mobile yang praktis.",
        "Tata letak yang teroptimasi sempurna untuk desktop, tablet, dan ponsel pintar.",
        "Kode UI yang bersih dan mudah dirawat.",
        "Waktu muat halaman yang sangat cepat dengan standar desain web modern.",
      ],
    },
  },
  "POS (Point of Sale)": {
    description: {
      en: "A modern Point of Sale (POS) web application designed to simplify sales transactions, product management, inventory tracking, and business operations. Built with a responsive interface to provide an efficient and user-friendly experience for cashiers and store owners.",
      id: "Aplikasi web Point of Sale (POS) modern yang dirancang untuk mempermudah transaksi penjualan kasir, manajemen produk, pelacakan stok barang, dan pemantauan performa bisnis secara efisien dan responsif.",
    },
    features: {
      en: [
        "Dashboard with business overview and sales statistics.",
        "Product management with categories and inventory tracking.",
        "Fast cashier interface for creating sales transactions.",
        "Shopping cart with quantity adjustment and discount support.",
        "Order history and transaction management.",
        "Customer management for storing customer information.",
        "Responsive design optimized for desktop, tablet, and mobile devices.",
        "Reusable component architecture for scalability and maintainability.",
        "Modern UI with loading, empty, and error states.",
        "Prepared architecture for future backend and CMS integration.",
      ],
      id: [
        "Dashboard ringkasan bisnis lengkap dengan statistik penjualan dan omset harian.",
        "Manajemen produk terstruktur dengan kategori dan pemantauan stok otomatis.",
        "Antarmuka kasir cepat dan praktis untuk pemrosesan transaksi penjualan tanpa hambatan.",
        "Keranjang belanja interaktif dengan pengaturan jumlah barang dan penerapan diskon.",
        "Riwayat pesanan dan rekapitulasi data transaksi penjualan yang rapi.",
        "Manajemen pelanggan untuk mencatat dan mengelola data pembeli loyal.",
        "Desain responsif yang optimal untuk perangkat tablet kasir, desktop, maupun smartphone.",
        "Arsitektur komponen modular untuk skalabilitas dan kemudahan pemeliharaan sistem.",
        "Antarmuka modern dengan visualisasi status loading, data kosong, dan penanganan kesalahan.",
        "Struktur siap integrasi dengan backend API dan sistem manajemen konten (CMS).",
      ],
    },
  },
  "Digital Wedding Invitations": {
    description: {
      en: "A modern digital wedding invitation platform that allows couples to share elegant online invitations with RSVP, event information, photo gallery, love story, countdown timer, gift section, and responsive design for all devices.",
      id: "Platform undangan pernikahan digital modern dan elegan yang dilengkapi konfirmasi kehadiran (RSVP), detail jadwal acara, galeri foto, kisah cinta mempelai, hitung mundur (countdown), informasi amplop digital, dan desain responsif.",
    },
    features: {
      en: [
        "Beautiful and responsive landing page for digital wedding invitations.",
        "Interactive countdown timer until the wedding ceremony.",
        "Bride & groom profile with love story timeline.",
        "Event schedule with integrated Google Maps location.",
        "Photo gallery with smooth animations and lightbox preview.",
        "RSVP section for guest attendance confirmation.",
        "Digital gift and bank account information.",
        "Background music with play/pause controls.",
        "Guest name personalization through URL parameters.",
        "Optimized performance, accessibility, and mobile-first design.",
      ],
      id: [
        "Landing page undangan pernikahan digital yang estetis, anggun, dan responsif.",
        "Penghitung waktu mundur (countdown timer) interaktif menuju hari pernikahan.",
        "Profil kedua mempelai disertai linimasa perjalanan kisah cinta (love story).",
        "Jadwal rangkaian acara yang terintegrasi langsung dengan navigasi Google Maps.",
        "Galeri foto kenangan dengan animasi halus dan fitur lightbox preview.",
        "Formulir konfirmasi kehadiran tamu (RSVP) secara online.",
        "Informasi amplop digital / rekening bank untuk pengiriman hadiah pernikahan.",
        "Fitur pemutar musik latar romantis dengan kontrol putar dan jeda.",
        "Personalisasi nama tamu undangan otomatis melalui parameter tautan URL.",
        "Performa cepat, mudah diakses, dan nyaman digunakan di semua perangkat seluler.",
      ],
    },
  },
};

export const SUBCATEGORY_TRANSLATIONS: Record<string, { en: string; id: string }> = {
  "Data Visualization": { en: "Data Visualization", id: "Visualisasi Data" },
  "Data Analytics": { en: "Data Analytics", id: "Analisis Data" },
  "Artificial Intelligence": { en: "Artificial Intelligence", id: "Kecerdasan Buatan" },
  "Automation": { en: "Automation", id: "Otomasi" },
  "Data Modeling": { en: "Data Modeling", id: "Pemodelan Data" },
  "Computer Vision": { en: "Computer Vision", id: "Visi Komputer" },
  "Natural Language Processing": { en: "Natural Language Processing", id: "Pemrosesan Bahasa Alami" },
  "Web Development": { en: "Web Development", id: "Pengembangan Web" },
  "Full Stack": { en: "Full Stack", id: "Full Stack" },
  "AI Web Apps": { en: "AI Web Apps", id: "Aplikasi Web AI" },
  "IoT & Embedded": { en: "IoT & Embedded", id: "IoT & Embedded" },
  "Frontend": { en: "Frontend", id: "Frontend" },
  "Backend & API": { en: "Backend & API", id: "Backend & API" },
};

export const BADGE_TRANSLATIONS: Record<string, { en: string; id: string }> = {
  "COMPUTER VISION": { en: "COMPUTER VISION", id: "VISI KOMPUTER" },
  "DATA ANALYTICS": { en: "DATA ANALYTICS", id: "ANALISIS DATA" },
  "AUTOMATION": { en: "AUTOMATION", id: "OTOMASI" },
  "ON PROGRESS": { en: "IN PROGRESS", id: "DALAM PROSES" },
  "DATA ENGINEERING": { en: "DATA ENGINEERING", id: "REKAYASA DATA" },
  "DATA SCIENCE": { en: "DATA SCIENCE", id: "SAINS DATA" },
  "AI PLATFORM": { en: "AI PLATFORM", id: "PLATFORM AI" },
  "WEB DEV": { en: "WEB DEV", id: "PENGEMBANGAN WEB" },
};

export function getTranslatedProject(project: any, language: "en" | "id") {
  if (!project) return project;
  const trans = PROJECT_TRANSLATIONS[project.title];
  if (!trans) return project;
  return {
    ...project,
    description: trans.description[language] || project.description,
    features: trans.features[language] || project.features,
  };
}
