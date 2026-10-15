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
  "OmniCore AI": {
    description: {
      en: "OmniCore AI is an omnichannel conversational AI assistant operating 24/7 across WhatsApp (via WAHA), Telegram, and LINE. Powered by n8n workflow orchestration, hybrid AI models (Google Gemini & OpenAI GPT), Supabase vector database (pgvector), and PostgreSQL, it delivers accurate, hallucination-free responses using adaptive Retrieval-Augmented Generation (RAG) and dynamic SQL tabular queries connected to Google Drive.",
      id: "OmniCore AI adalah asisten chatbot cerdas omnichannel 24/7 yang beroperasi di WhatsApp (via WAHA), Telegram, dan LINE. Mengintegrasikan orkestrasi alur kerja n8n, model AI hibrida (Google Gemini & OpenAI GPT), basis data vektor Supabase (pgvector), serta PostgreSQL, sistem ini menghadirkan respons akurat bebas halusinasi berbasis RAG adaptif dan kueri SQL data tabular yang tersinkronisasi otomatis dengan Google Drive.",
    },
    features: {
      en: [
        "Adaptive RAG Architecture: Delivers strictly verified, hallucination-free answers grounded on authoritative knowledge base documents stored in Supabase pgvector.",
        "Autonomous Google Drive ETL: Synchronizes and extracts spreadsheets (Excel/CSV), PDFs, and Docs autonomously, parsing tabular data into PostgreSQL JSONB rows.",
        "Hybrid Semantic & SQL Retrieval: Combines vector similarity search for narrative context with precise SQL aggregations for tabular records (schedules, pricing, rosters).",
        "Omnichannel & Human-like Typing: Connects WhatsApp, Telegram, and LINE with realistic typing delays, read receipts, and interactive onboarding flows.",
      ],
      id: [
        "Arsitektur RAG Adaptif: Memberikan jawaban akurat dan bebas halusinasi yang berakar kuat pada dokumen knowledge base terverifikasi di Supabase pgvector.",
        "Pipeline ETL Google Drive Otomatis: Mendeteksi dan mengekstrak dokumen (Excel, CSV, PDF, Docs) secara otonom serta memetakan data tabular ke tabel PostgreSQL JSONB.",
        "Hybrid Semantic & SQL Retrieval: Memadukan pencarian semantik vektor untuk konteks naratif dengan kueri SQL presisi untuk data terstruktur (jadwal, tarif, daftar).",
        "Integrasi Omnichannel & Simulasi Ketikan: Terhubung ke WhatsApp, Telegram, dan LINE dengan jeda simulasi ketikan manusia, tanda baca pesan, dan onboarding pengguna baru.",
      ],
    },
  },
  "WhatsApp AI Rental Mobil": {
    description: {
      en: "WhatsApp AI Rental Mobil is an end-to-end automated car rental booking assistant powered by n8n and LangChain AI Agents. It provides 24/7 self-service vehicle reservations, real-time schedule checks via Google Calendar, down payment calculations, automatic cancellations via background cron jobs, and seamless payment gateway webhook integrations, complete with multimodal voice note processing using OpenAI Whisper and TTS.",
      id: "WhatsApp AI Rental Mobil adalah asisten reservasi rental mobil otomatis 24/7 berbasis alur kerja n8n dan LangChain AI Agent. Sistem ini menangani pemesanan mobil mandiri, verifikasi ketersediaan jadwal real-time via Google Calendar, kalkulasi DP & total biaya, pembatalan otomatis pesanan kedaluwarsa berbasis cron job, serta integrasi webhook payment gateway, dilengkapi pemrosesan voice note multimodal via OpenAI Whisper dan TTS.",
    },
    features: {
      en: [
        "Multimodal Voice & Text Support: Accepts text and WhatsApp voice notes, transcribing audio with OpenAI Whisper and responding with synthesized voice notes via OpenAI TTS.",
        "Intelligent Booking & Anti-Double-Booking: Checks live vehicle schedules directly against Google Calendar and calculates rental duration, driver fees, and down payments without computational errors.",
        "Self-Service Rescheduling & Cancellation: Enables customers to adjust trip dates or cancel bookings conversationally, updating Google Calendar and Google Sheets automatically.",
        "Automated Payment Webhook & Auto-Cancel: Verifies payment gateway webhook callbacks, while a 1-minute background cron job automatically cancels unpaid bookings past their deadline.",
      ],
      id: [
        "Dukungan Multimodal Suara & Teks: Menerima pesan teks maupun voice note WhatsApp, mentranskripsikan audio dengan OpenAI Whisper dan membalas dengan voice note sintetis via OpenAI TTS.",
        "Booking Cerdas & Anti Double-Booking: Memeriksa ketersediaan jadwal mobil langsung ke Google Calendar serta menghitung durasi sewa, biaya sopir, dan DP tanpa halusinasi hitungan.",
        "Reschedule & Pembatalan Mandiri: Memungkinkan pelanggan mengubah tanggal sewa atau membatalkan pesanan via chat, memperbarui Google Calendar dan Google Sheets secara otomatis.",
        "Webhook Pembayaran & Auto-Cancel: Memvalidasi callback payment gateway otomatis, serta menjalankan background cron job tiap 1 menit untuk membatalkan pesanan yang kedaluwarsa.",
      ],
    },
  },
  "CampRent": {
    description: {
      en: "CampRent is a specialized camping equipment rental management system designed for outdoor gear business operations. The platform features an intelligent date-and-unit-based availability engine, multi-tier role management (Customer, Staff, Owner), automated rental lifecycle tracking, and integrated inspection workflows.",
      id: "CampRent adalah sistem manajemen operasional penyewaan peralatan camping yang dirancang khusus untuk pemilik usaha rental outdoor. Platform ini menghadirkan engine ketersediaan akurat berbasis rentang tanggal dan unit fisik individual, manajemen peran bertingkat (Customer, Staff, Owner), pelacakan siklus sewa menyeluruh (booking, pickup, return), serta pencatatan inspeksi fisik dan jaminan identitas.",
    },
    features: {
      en: [
        "Date-Based Availability: Calculates real-time gear availability based on exact rental date ranges and physical individual unit tracking rather than static stock counts.",
        "Complete Rental Lifecycle: Manages end-to-end rental states from pending, waiting payment, confirmed, ready for pickup, rented, returning, to completed.",
        "Role-Based Operations: Provides tailored interfaces and permission levels for Guests, Customers (booking & history), Staff (pickup, return & maintenance), and Owners (inventory, calendar & financial reports).",
        "Gear Inspection & Guarantee: Tracks individual physical units with item condition inspection, identity deposit verification (KTP/SIM/KTM), and penalty calculations for damage or late returns.",
      ],
      id: [
        "Ketersediaan Berbasis Tanggal: Menghitung ketersediaan peralatan secara real-time berdasarkan rentang tanggal sewa dan pelacakan unit fisik individual, bukan sekadar stok statis.",
        "Siklus Sewa Menyeluruh: Mengelola alur status sewa terpadu dari pemesanan, menunggu pembayaran, konfirmasi, siap diambil, disewa, pengembalian, hingga selesai.",
        "Operasional Berbasis Peran: Menyediakan antarmuka dan hak akses khusus untuk Guest, Customer (pemesanan & riwayat sewa), Staff (pickup, return & maintenance), dan Owner (inventaris, kalender & laporan).",
        "Inspeksi & Jaminan Sewa: Mendukung pelacakan unit fisik spesifik dilengkapi dokumentasi inspeksi kondisi barang, penahanan jaminan identitas (KTP/SIM/KTM), dan kalkulasi denda.",
      ],
    },
  },
  "SignalHR": {
    description: {
      en: "SignalHR is an AI-powered Applicant Tracking System designed to streamline modern recruitment workflows. It enables HR teams to manage vacancies, automate resume parsing, and evaluate candidate-job compatibility using intelligent scoring algorithms. The platform delivers end-to-end recruitment analytics to optimize hiring decisions efficiently.",
      id: "SignalHR adalah Sistem Pelacakan Pelamar (ATS) berbasis AI yang dirancang untuk merampingkan alur kerja rekrutmen modern. Platform ini membantu tim HR mengelola lowongan kerja, mengotomatisasi ekstraksi resume, dan mengevaluasi kecocokan kandidat dengan algoritma cerdas. Sistem ini menyediakan analitik rekrutmen terpadu untuk mengoptimalkan keputusan perekrutan.",
    },
    features: {
      en: [
        "Job Management: Enables HR teams to create, customize, and publish vacancies with structured requirements and salary benchmarks.",
        "AI Resume Parsing: Automatically extracts candidate profiles, skills, work history, and educational background from PDF and DOCX documents.",
        "Candidate Matchmaking: Computes an intelligent compatibility score from 0 to 100 based on required skills and qualifications.",
        "Recruitment Analytics: Visualizes applicant funnels, stage transitions, and skills distribution to monitor overall hiring performance effectively.",
      ],
      id: [
        "Manajemen Lowongan: Memungkinkan tim HR membuat, menyesuaikan, dan mempublikasikan lowongan kerja lengkap dengan kriteria dan rentang gaji.",
        "AI Resume Parsing: Mengekstrak profil pelamar, keahlian, pengalaman kerja, dan riwayat pendidikan secara otomatis dari dokumen PDF dan DOCX.",
        "Pencocokan Kandidat: Menghitung skor kecocokan kandidat dari 0 hingga 100 secara cerdas berdasarkan kualifikasi posisi pekerjaan.",
        "Analitik Rekrutmen: Memvisualisasikan corong pelamar, progres tahapan, dan distribusi keahlian untuk memantau performa perekrutan secara efektif.",
      ],
    },
  },
  "Sistem Informasi Logistik CGN": {
    description: {
      en: "CGN Logistics Information System is an enterprise digital platform designed to optimize supply chain and warehouse operations. It streamlines inventory tracking, delivery monitoring, and logistics performance analytics to maximize overall organizational efficiency. The system ensures high data security and an intuitive interface for seamless operational management.",
      id: "Sistem Informasi Logistik CGN adalah platform digital perusahaan yang dirancang untuk mengoptimalkan operasional rantai pasok dan pergudangan. Sistem ini merampingkan pelacakan inventaris, pemantauan pengiriman, dan analitik performa logistik guna memaksimalkan efisiensi organisasi. Platform ini menjamin keamanan data tinggi dan antarmuka intuitif untuk manajemen operasional yang lancar.",
    },
    features: {
      en: [
        "Inventory Management: Tracks, organizes, and optimizes warehouse stock levels in real time for efficient resource allocation.",
        "Stock Oversight: Empowers administrative control with automated alerts and accurate logs of all incoming and outgoing goods.",
        "Delivery Monitoring: Offers end-to-end shipment visibility, allowing logistics teams to track distribution status and ensure timely deliveries.",
        "Performance Analytics: Delivers comprehensive operational reports and data visualizations to identify logistical bottlenecks and improve efficiency.",
      ],
      id: [
        "Manajemen Inventaris: Melacak, mengatur, dan mengoptimalkan tingkat stok gudang secara real-time untuk alokasi sumber daya yang efisien.",
        "Pengawasan Stok: Memberikan kendali administratif presisi dengan peringatan otomatis serta pencatatan akurat barang masuk dan keluar.",
        "Pemantauan Pengiriman: Menyediakan visibilitas distribusi menyeluruh agar tim logistik dapat memantau status kiriman dan menjamin ketepatan waktu.",
        "Analitik Performa: Menyajikan laporan operasional komprehensif dan visualisasi data untuk mengidentifikasi hambatan logistik serta meningkatkan efisiensi.",
      ],
    },
  },
  "Shopee App Review Intelligence Dashboard": {
    description: {
      en: "This project is an interactive analytics dashboard engineered to extract actionable business insights from Shopee customer reviews. It leverages Natural Language Processing and sentiment analysis to evaluate user feedback across various ratings and categories. The platform empowers product teams to identify common complaints, satisfaction trends, and feature improvement areas.",
      id: "Proyek ini merupakan dashboard analitik interaktif yang dirancang untuk mengekstrak wawasan bisnis dari ulasan pelanggan Shopee. Platform ini memanfaatkan Pemrosesan Bahasa Alami dan analisis sentimen untuk mengevaluasi umpan balik pengguna di berbagai rating. Sistem ini membantu tim produk mengidentifikasi keluhan umum, tren kepuasan, dan area pengembangan fitur.",
    },
    features: {
      en: [
        "Sentiment Analysis: Automatically classifies customer reviews into positive, neutral, and negative categories using machine learning pipelines.",
        "Rating Distribution: Visualizes user satisfaction levels and rating breakdowns across diverse time intervals and product categories.",
        "Trend Discovery: Uncovers emerging discussion topics and recurring user complaints through automated Indonesian text mining algorithms.",
        "Interactive Visualizations: Displays dynamic charts and summary metrics to help stakeholders make data-driven product improvement decisions.",
      ],
      id: [
        "Analisis Sentimen: Mengklasifikasikan ulasan pelanggan secara otomatis ke dalam kategori positif, netral, dan negatif menggunakan machine learning.",
        "Distribusi Rating: Memvisualisasikan tingkat kepuasan pengguna dan sebaran rating ulasan di berbagai rentang waktu serta kategori produk.",
        "Identifikasi Tren: Menemukan topik pembicaraan hangat dan keluhan pengguna yang berulang melalui algoritma penambangan teks berbahasa Indonesia.",
        "Visualisasi Interaktif: Menampilkan grafik analitik dinamis dan ringkasan metrik untuk mendukung pengambilan keputusan pengembangan produk berbasis data.",
      ],
    },
  },
  "E-Commerce Ikan Me": {
    description: {
      en: "E-Commerce Ikan Me is a specialized digital marketplace developed to empower local freshwater fish farmers in Berasan Mulya. The platform connects rural producers directly with regional consumers to expand market reach and boost village economic growth. It facilitates transparent transactions, product cataloging, and localized delivery coordination.",
      id: "E-Commerce Ikan Me adalah platform marketplace digital yang dikembangkan untuk memberdayakan pembudidaya ikan air tawar di Berasan Mulya. Platform ini menghubungkan produsen lokal langsung dengan konsumen guna memperluas jangkauan pasar dan mendorong ekonomi desa. Sistem memfasilitasi transaksi transparan, katalog produk segar, dan koordinasi pengiriman lokal terpadu.",
    },
    features: {
      en: [
        "Merchant Storefronts: Provides dedicated merchant portals for local fish farmers to showcase, price, and manage their aquaculture harvests.",
        "Direct Marketplace: Facilitates seamless transactions between buyers and sellers with comprehensive product catalogs and search filters.",
        "Delivery Coordination: Streamlines order processing and logistics dispatch to ensure freshwater products arrive fresh and on schedule.",
        "Order Tracking: Offers transaction tracking and invoice generation for transparent sales monitoring by local fish farmers.",
      ],
      id: [
        "Etalase Penjual: Menyediakan portal toko khusus bagi pembudidaya ikan untuk memajang, menentukan harga, dan mengelola hasil panen perikanan.",
        "Marketplace Langsung: Memfasilitasi transaksi jual-beli langsung antara konsumen dan produsen dengan katalog produk serta fitur pencarian lengkap.",
        "Koordinasi Pengiriman: Mempermudah pemrosesan pesanan dan pengiriman logistik agar produk perikanan segar sampai tepat waktu ke pembeli.",
        "Pelacakan Pesanan: Menyediakan pelacakan status transaksi dan pencetakan faktur belanja untuk transparansi rekapitulasi penjualan nelayan lokal.",
      ],
    },
  },
  "Match Schedule MPL Indonesia": {
    description: {
      en: "This website is a demonstration of a clone that imitates the appearance and features of the official MPL Indonesia website. It provides information similar to the actual MPL Indonesia website, including match schedules, team listings, and standings.",
      id: "Website demonstrasi dan klon dari situs resmi MPL Indonesia yang menyajikan informasi kompetisi esport secara lengkap. Situs ini menyediakan informasi serupa dengan website resmi MPL, meliputi jadwal pertandingan, daftar tim peserta, klasemen terkini, serta rekap skor turnamen.",
    },
    features: {
      en: [
        "Match Schedules: Provides information about the schedule of matches in the MPL Indonesia league.",
        "Team Listings: Displays a list of teams participating in the MPL Indonesia league.",
        "Standings: Shows the current standings of the teams in the league, indicating their performance.",
        "Past Match Results: Displays the results and summaries of previous matches in the MPL Indonesia league.",
      ],
      id: [
        "Jadwal Pertandingan: Menyajikan jadwal lengkap seluruh laga pertandingan yang berlangsung di liga MPL Indonesia.",
        "Daftar Tim: Menampilkan daftar tim esport profesional yang berkompetisi di liga turnamen MPL Indonesia.",
        "Klasemen: Menampilkan posisi klasemen sementara dan performa poin tiap tim sepanjang musim turnamen.",
        "Hasil Pertandingan: Menyajikan ringkasan hasil skor dan rekap pertandingan sebelumnya di liga MPL Indonesia.",
      ],
    },
  },
  "Autogate RFID": {
    description: {
      en: "Autogate RFID is an integrated IoT smart parking and barrier gate prototype built for residential and commercial security. The system automates vehicle access using RFID authentication, ultrasonic sensors, and microcontrollers paired with a web monitoring dashboard. It provides real-time logging, gate automation, and visual entry status indicators.",
      id: "Autogate RFID adalah prototipe gerbang pintar dan akses parkir IoT terintegrasi untuk keamanan perumahan maupun area komersial. Sistem mengotomatisasi akses kendaraan menggunakan autentikasi RFID, sensor ultrasonik, dan mikrokontroler yang terhubung ke dashboard pemantauan web. Proyek ini menyediakan pencatatan real-time, otomasi palang, dan indikator status visual terpadu.",
    },
    features: {
      en: [
        "RFID Authentication: Validates registered vehicle keycards instantly to permit or restrict physical entry into secured parking zones.",
        "Automated Barrier: Controls motorized gate movement via servo actuators triggered automatically upon successful user identity verification.",
        "Obstacle Detection: Uses ultrasonic distance sensors to detect vehicle presence and prevent accidental gate closure during transit.",
        "Real-time Monitoring: Logs vehicle timestamps and access events to a centralized web dashboard for security oversight.",
      ],
      id: [
        "Autentikasi RFID: Memvalidasi kartu akses kendaraan terdaftar secara instan untuk mengizinkan atau menolak akses masuk gerbang.",
        "Palang Otomatis: Menggerakkan palang gerbang secara otomatis menggunakan aktuator servo saat verifikasi identitas pengguna berhasil.",
        "Deteksi Rintangan: Menggunakan sensor jarak ultrasonik untuk mendeteksi posisi kendaraan dan mencegah palang menutup saat kendaraan melintas.",
        "Pemantauan Real-Time: Mencatat riwayat waktu akses kendaraan ke dashboard web terpusat untuk pengawasan keamanan berkala.",
      ],
    },
  },
  "Multi-Service AI Assistant Bot": {
    description: {
      en: "Multi-Service AI Assistant Bot is an automated conversational system powered by n8n workflows and large language models. It delivers unified AI assistance across academic guidance, personal expense tracking, appointment scheduling, and car rental inquiries. The bot utilizes intelligent semantic routing to deliver precise, context-aware responses seamlessly.",
      id: "Multi-Service AI Assistant Bot adalah sistem percakapan otomatis berbasis alur kerja n8n dan model bahasa besar (LLM). Asisten ini menyediakan dukungan terpadu untuk informasi akademik, pencatatan keuangan pribadi, penjadwalan janji temu, dan pemesanan rental mobil. Bot memanfaatkan routing semantik cerdas untuk memberikan respon kontekstual secara presisi dan efisien.",
    },
    features: {
      en: [
        "Academic Guidance: Employs Retrieval-Augmented Generation to answer complex university guidelines and academic policies using vector embeddings.",
        "Financial Tracking: Automatically logs user expenses and income entries into a database via conversational chat commands with alerts.",
        "Booking & Rentals: Facilitates rapid appointment scheduling and vehicle availability lookups through dynamic API integrations and queries.",
        "Intent Routing: Utilizes conditional workflow logic to direct user inquiries to the appropriate service module without conflict.",
      ],
      id: [
        "Informasi Akademik: Menerapkan Retrieval-Augmented Generation untuk menjawab panduan dan regulasi kampus secara akurat menggunakan embedding vektor.",
        "Pencatat Keuangan: Mencatat pengeluaran dan pemasukan pengguna ke basis data secara otomatis melalui perintah percakapan chat interaktif.",
        "Booking & Rental: Memfasilitasi reservasi janji temu dan pengecekan ketersediaan armada kendaraan secara dinamis melalui integrasi API.",
        "Routing Niat Cerdas: Menggunakan logika alur kerja n8n untuk mengarahkan pertanyaan pengguna ke modul layanan yang tepat tanpa kendala.",
      ],
    },
  },
  "WhatsApp RAG AI Assistant Chatbot": {
    description: {
      en: "This project is a 24/7 intelligent WhatsApp assistant that integrates n8n orchestration with OpenAI embeddings and vector databases. It utilizes Retrieval-Augmented Generation to provide verified campus regulations and academic guidance directly to students. The system eliminates hallucinations while offering an accessible messaging interface for everyday academic queries.",
      id: "Proyek ini adalah asisten WhatsApp cerdas 24/7 yang mengintegrasikan orkestrasi n8n dengan embedding OpenAI dan basis data vektor. Sistem memanfaatkan Retrieval-Augmented Generation untuk menyajikan regulasi kampus dan panduan akademik terverifikasi langsung kepada mahasiswa. Solusi ini meminimalkan halusinasi AI sekaligus menyediakan antarmuka pesan instan yang praktis digunakan.",
    },
    features: {
      en: [
        "RAG Architecture: Grounded on authoritative campus documentation to ensure factual accuracy and eliminate artificial intelligence hallucinations.",
        "Semantic Search: Leverages vector embeddings and cosine similarity search to retrieve the most relevant knowledge base paragraphs.",
        "WhatsApp Gateway: Connects intelligent backend workflows directly with WhatsApp for instant, frictionless mobile access anytime.",
        "Automated Pipelines: Uses n8n to orchestrate webhook payloads, vector lookups, and conversational responses without manual intervention.",
      ],
      id: [
        "Arsitektur RAG: Berpijak pada dokumen akademik resmi untuk memastikan akurasi data faktual dan meniadakan risiko halusinasi AI.",
        "Pencarian Semantik: Memanfaatkan embedding vektor dan kesamaan kosinus untuk menemukan paragraf referensi yang paling relevan dengan kueri.",
        "Gateway WhatsApp: Menghubungkan alur backend cerdas langsung ke WhatsApp agar pengguna dapat berkonsultasi kapan saja dengan mudah.",
        "Pipeline Otomatis: Menggunakan n8n untuk mengorkestrasi payload webhook, pencarian basis data vektor, dan pengiriman respon pesan secara otomatis.",
      ],
    },
  },
  "Cat Breed Classification (Streamlit)": {
    description: {
      en: "This project is an interactive computer vision web application developed to identify and classify 12 distinct cat breeds from images. It evaluates deep learning architectures including Custom CNN, MobileNetV2, and ResNet50 to determine optimal prediction accuracy. The solution features an intuitive Streamlit dashboard for real-time model inference and diagnostic analysis.",
      id: "Proyek ini merupakan aplikasi web visi komputer interaktif yang dikembangkan untuk mengidentifikasi 12 ras kucing dari gambar. Sistem menguji arsitektur deep learning mencakup Custom CNN, MobileNetV2, dan ResNet50 guna memperoleh akurasi prediksi terbaik. Solusi ini dilengkapi dashboard Streamlit intuitif untuk inferensi model real-time dan analisis evaluasi performa.",
    },
    features: {
      en: [
        "Multi-Class Recognition: Identifies 12 different domestic cat breeds with high precision using transfer learning architectures.",
        "Model Benchmarking: Compares Custom CNN, MobileNetV2, and ResNet50 performance to evaluate accuracy and computational efficiency.",
        "Confidence Scoring: Displays detailed prediction probabilities across all possible breed categories with interactive visual bar charts.",
        "Performance Metrics: Visualizes training accuracy-loss curves and confusion matrices directly inside the interactive user dashboard.",
      ],
      id: [
        "Klasifikasi Multi-Kelas: Mengidentifikasi 12 ras kucing domestik dengan tingkat presisi tinggi memanfaatkan arsitektur transfer learning.",
        "Uji Tolok Ukur Model: Membandingkan kinerja CNN Custom, MobileNetV2, dan ResNet50 untuk menilai akurasi serta efisiensi komputasi model.",
        "Skor Keyakinan: Menampilkan probabilitas prediksi secara mendalam untuk seluruh kategori ras kucing menggunakan grafik batang visual interaktif.",
        "Metrik Performa: Memvisualisasikan kurva akurasi-loss pelatihan dan confusion matrix secara komprehensif langsung pada dashboard pengguna.",
      ],
    },
  },
  "HR-TOOLS": {
    description: {
      en: "HR-TOOLS is a comprehensive human resource management web application designed to streamline internal company administrative processes. The platform simplifies employee record management, recruitment pipeline tracking, performance appraisals, and geolocation-based attendance verification. It enables organizations to boost operational efficiency and maintain reliable workforce documentation.",
      id: "HR-TOOLS adalah aplikasi web manajemen sumber daya manusia yang dirancang untuk merampingkan administrasi internal perusahaan. Platform ini menyederhanakan pengelolaan data pegawai, pelacakan proses rekrutmen, evaluasi kinerja karyawan, serta verifikasi presensi berbasis geolokasi. Sistem ini memungkinkan organisasi meningkatkan efisiensi operasional dan menjaga keteraturan dokumentasi ketenagakerjaan.",
    },
    features: {
      en: [
        "Employee Management: Manages comprehensive employee profiles, departmental records, and employment histories in a centralized relational database.",
        "Recruitment Tracking: Organizes candidate pipelines from job requisition to applicant screening and interview scheduling seamlessly.",
        "Performance Appraisals: Evaluates staff productivity and KPI milestones through structured appraisal forms and periodic review cycles.",
        "Geolocation Attendance: Validates daily employee check-ins and check-outs using Leaflet interactive maps and GPS coordinate verification.",
      ],
      id: [
        "Manajemen Karyawan: Mengelola biodata pegawai, penempatan departemen, dan riwayat pekerjaan dalam basis data relasional yang terpusat.",
        "Pelacakan Rekrutmen: Mengorganisasi alur lamaran kerja mulai dari pembukaan lowongan, peninjauan berkas, hingga penjadwalan sesi wawancara.",
        "Penilaian Kinerja: Mengevaluasi produktivitas kerja dan capaian KPI staf melalui formulir penilaian terstruktur serta siklus tinjauan berkala.",
        "Presensi Geolokasi: Memvalidasi absensi harian karyawan secara akurat menggunakan peta interaktif Leaflet dan verifikasi koordinat GPS.",
      ],
    },
  },
  "Cat Breed Classification (React)": {
    description: {
      en: "This system is a full-stack deep learning web platform engineered to classify 12 cat breeds with 82% benchmark accuracy. It pairs a high-performance FastAPI inference backend with a modern, animated React frontend for frictionless image analysis. Users receive instant predictions, probability breakdowns, and comprehensive breed profile insights upon image upload.",
      id: "Sistem ini merupakan platform web deep learning full-stack yang dirancang untuk mengklasifikasikan 12 ras kucing dengan akurasi 82%. Aplikasi memadukan backend inferensi berkinerja tinggi FastAPI dengan frontend React animasi modern untuk analisis gambar yang mulus. Pengguna memperoleh prediksi instan, rincian probabilitas, dan wawasan ras setelah mengunggah foto.",
    },
    features: {
      en: [
        "Image Inference: Classifies uploaded cat photos into 12 recognized breeds instantly using an optimized MobileNetV2 model.",
        "Probability Breakdown: Shows sorted confidence scores and percentage distributions across all classes with animated progress indicators.",
        "High-Speed API: Delivers rapid prediction endpoints using an asynchronous FastAPI service tailored for machine learning workloads.",
        "Responsive Dashboard: Features a sleek, responsive interface built with React, Vite, Tailwind CSS, and Framer Motion animations.",
      ],
      id: [
        "Inferensi Gambar: Mengklasifikasikan foto kucing yang diunggah ke dalam 12 ras secara instan menggunakan model teroptimasi MobileNetV2.",
        "Rincian Probabilitas: Menampilkan skor keyakinan terurut dan persentase sebaran seluruh kelas dengan indikator animasi visual interaktif.",
        "API Berkecepatan Tinggi: Menyediakan endpoint prediksi cepat menggunakan layanan asinkron FastAPI yang dirancang khusus untuk inferensi model.",
        "Dashboard Responsif: Menampilkan antarmuka modern dan responsif yang dibangun dengan React, Vite, Tailwind CSS, serta animasi Framer Motion.",
      ],
    },
  },
  "AI UI Chat": {
    description: {
      en: "AI UI Chat is a contemporary conversational AI interface crafted to emulate leading chatbots like ChatGPT and Gemini. It provides a polished dark-mode environment featuring streaming message animations, prompt suggestions, and structured chat history. The project emphasizes intuitive responsiveness, accessibility, and modular architecture ready for language model integration.",
      id: "AI UI Chat adalah antarmuka percakapan AI kontemporer yang dirancang menyerupai platform chatbot terkemuka seperti ChatGPT dan Gemini. Aplikasi ini menghadirkan mode gelap elegan dengan animasi pengetikan streaming, saran prompt, dan riwayat obrolan terstruktur. Proyek ini mengedepankan responsivitas intuitif, aksesibilitas, dan arsitektur modular yang siap dihubungkan ke LLM.",
    },
    features: {
      en: [
        "Streaming Conversations: Simulates real-time artificial intelligence responses with realistic typing indicators and dynamic streaming text effects.",
        "Session Management: Stores and organizes chat histories, allowing users to switch, rename, or clear active conversations effortlessly.",
        "Prompt Templates: Offers pre-built suggestions and creative starters to help users initiate productive discussions right away.",
        "Modern Dark Mode: Delivers a refined dark-themed aesthetic with accessible typography and fluid Framer Motion micro-interactions.",
      ],
      id: [
        "Percakapan Streaming: Mensimulasikan respon AI real-time dengan efek teks berjalan (streaming) dan indikator animasi pengetikan yang alami.",
        "Manajemen Sesi: Menyimpan serta merapikan riwayat percakapan agar pengguna dapat beralih atau membersihkan sesi obrolan dengan mudah.",
        "Templat Prompt: Menyediakan pilihan saran pertanyaan awal yang kreatif untuk membantu pengguna memulai interaksi obrolan secara instan.",
        "Tema Gelap Modern: Menampilkan estetika tema gelap yang elegan dengan tipografi kontras tinggi dan mikro-interaksi dinamis Framer Motion.",
      ],
    },
  },
  "Coffee Cafe": {
    description: {
      en: "Coffee Cafe is a visually immersive landing page created for a specialty artisanal coffee shop brand. It showcases signature beverage menus, company heritage, customer testimonials, and physical store locations through a clean, responsive layout. The website delivers smooth navigational transitions and mobile-first optimization to drive customer foot traffic.",
      id: "Coffee Cafe adalah landing page visual yang menarik, diciptakan khusus untuk brand kedai kopi artisan pilihan. Situs ini menampilkan menu minuman unggulan, filosofi racikan kopi, testimoni pelanggan, dan lokasi kedai dalam tata letak yang bersih dan responsif. Website ini menyajikan transisi navigasi halus dan optimasi mobile-first untuk kenyamanan pengunjung.",
    },
    features: {
      en: [
        "Interactive Showcase: Displays signature coffee blends and seasonal menu items with high-resolution imagery and pricing information.",
        "Brand Storytelling: Presents café origins, roasting philosophy, and commitment to quality beans in an engaging narrative layout.",
        "Store Locator: Provides café operating hours, physical address details, and quick social media connectivity for visitors.",
        "Mobile-First Design: Ensures rapid loading speeds and intuitive touch navigation across smartphones, tablets, and desktop displays.",
      ],
      id: [
        "Katalog Interaktif: Menampilkan varian menu kopi andalan dan produk musiman lengkap dengan foto resolusi tinggi serta informasi harga.",
        "Narasi Profil: Menceritakan filosofi kedai, proses pemanggangan biji kopi, dan komitmen terhadap mutu dalam sajian visual yang memikat.",
        "Informasi Lokasi: Menyajikan jam operasional kedai, detail alamat fisik, dan tautan media sosial untuk memudahkan kunjungan pelanggan.",
        "Desain Mobile-First: Menjamin waktu muat kilat serta navigasi sentuh yang nyaman di berbagai perangkat ponsel pintar maupun komputer.",
      ],
    },
  },
  "POS (Point of Sale)": {
    description: {
      en: "POS (Point of Sale) is an intuitive retail management web application built to accelerate daily checkout transactions and store operations. It features a responsive cashier terminal, real-time inventory tracking, flexible cart discounting, and comprehensive sales reporting. The interface is optimized for speed, precision, and multi-device usability in retail environments.",
      id: "POS (Point of Sale) adalah aplikasi web manajemen ritel intuitif yang dibuat untuk mempercepat transaksi kasir harian dan operasional toko. Aplikasi ini menghadirkan terminal kasir responsif, pelacakan stok barang real-time, perhitungan diskon keranjang, dan laporan penjualan komprehensif. Antarmukanya dioptimalkan untuk kecepatan proses transaksi serta kenyamanan penggunaan di berbagai perangkat kasir.",
    },
    features: {
      en: [
        "Cashier Terminal: Accelerates order processing with rapid product scanning, quantity adjustments, and custom discount calculation tools.",
        "Inventory Control: Tracks product stock levels, categories, and low-inventory warnings automatically to prevent stockouts during operations.",
        "Transaction History: Records completed sales, customer data, and itemized receipts for transparent financial auditing and order reviews.",
        "Analytics Dashboard: Highlights key business metrics, total daily revenue, and best-selling products through clean visual cards.",
      ],
      id: [
        "Terminal Kasir: Mempercepat proses pemesanan dengan pencarian kilat produk, penyesuaian kuantitas, serta penghitungan diskon belanja otomatis.",
        "Kontrol Inventaris: Memantau jumlah stok barang, klasifikasi kategori, dan peringatan batas minimum persediaan untuk mencegah kehabisan stok.",
        "Riwayat Transaksi: Mencatat seluruh penjualan selesai, data pembeli, serta nota transaksi untuk kemudahan audit keuangan dan pembukuan.",
        "Dashboard Analitik: Menyoroti metrik performa utama toko, total pendapatan harian, dan produk terlaris melalui kartu visual informatif.",
      ],
    },
  },
  "Digital Wedding Invitations": {
    description: {
      en: "Digital Wedding Invitations is an elegant online invitation platform designed to deliver unforgettable event announcements for couples. It combines interactive RSVP confirmation, live countdown timers, couple stories, event maps, and digital gift registries. The application ensures an emotionally engaging, mobile-optimized experience for wedding guests worldwide.",
      id: "Digital Wedding Invitations adalah platform undangan pernikahan online yang anggun, dirancang untuk menghadirkan kabar bahagia berkesan bagi pasangan. Website memadukan konfirmasi kehadiran RSVP interaktif, penghitung waktu mundur acara, galeri kisah cinta, peta lokasi, dan amplop digital. Aplikasi ini menyajikan pengalaman yang hangat dan responsif bagi para tamu undangan.",
    },
    features: {
      en: [
        "Personalized Greetings: Renders customized guest names dynamically via URL parameters to make every invitation feel personal and exclusive.",
        "Interactive RSVP: Allows invited guests to confirm attendance and submit heartfelt congratulations messages directly through the platform.",
        "Event Schedule: Integrates ceremony timelines, dress codes, and interactive Google Maps links for effortless venue navigation.",
        "Digital Gift Registry: Provides secure digital bank transfer details and automated gift confirmation for attending or remote guests.",
      ],
      id: [
        "Personalisasi Tamu: Menampilkan nama tamu undangan secara dinamis melalui parameter tautan URL agar terasa personal dan eksklusif.",
        "RSVP Interaktif: Memfasilitasi konfirmasi kehadiran para undangan serta pengiriman pesan ucapan selamat dan doa secara daring.",
        "Jadwal Rangkaian Acara: Mengintegrasikan linimasa prosesi akad, resepsi, panduan busana, serta rute navigasi peta Google Maps.",
        "Amplop Digital: Menyediakan nomor rekening bank dan dompet digital yang aman untuk kemudahan pengiriman kado atau tanda kasih.",
      ],
    },
  },
  "PawMart POS": {
    description: {
      en: "PawMart POS is a specialized point-of-sale and pet shop management web application tailored for modern pet care businesses. It integrates retail cashier transactions, grooming service queue management, pet hotel boarding maps, and customer loyalty reward tracking into a unified dashboard. The platform delivers responsive cross-device usability to optimize daily pet store operational efficiency.",
      id: "PawMart POS adalah aplikasi web point of sale dan manajemen toko pet shop terpadu yang dirancang khusus untuk bisnis perawatan hewan peliharaan modern. Sistem mengintegrasikan transaksi kasir ritel, antrean layanan grooming, denah penitipan hewan (pet hotel), dan program loyalitas pelanggan dalam satu dashboard. Platform ini menyajikan antarmuka responsif di semua perangkat untuk mengoptimalkan operasional pet shop.",
    },
    features: {
      en: [
        "Cashier & POS Terminal: Accelerates retail checkouts with barcode scanning, instant receipt printing, flexible payment options, and tax calculations.",
        "Pet Care Services: Manages grooming queues and scheduled service appointments with real-time progress indicators and technician assignment tools.",
        "Pet Boarding Grid: Provides an interactive visual room grid to track kennel occupancy, check-in schedules, and special pet needs.",
        "Customer Loyalty Club: Tracks membership tier progressions, reward point redemptions, and custom promotional vouchers for recurring pet owners.",
      ],
      id: [
        "Terminal Kasir POS: Mempercepat checkout ritel dengan pemindaian barcode, cetak struk instan, opsi ragam metode bayar, dan kalkulasi pajak otomatis.",
        "Layanan Perawatan Hewan: Mengelola antrean salon grooming dan reservasi jadwal perawatan dengan indikator status progres pengerjaan secara real-time.",
        "Peta Penitipan Kamar: Menyediakan denah visual interaktif untuk memantau okupansi kandang, jadwal check-in hotel, serta riwayat khusus hewan.",
        "Program Loyalitas Member: Mencatat peringkat keanggotaan pelanggan, penukaran poin belanja, serta kupon diskon promosi untuk meningkatkan retensi pembeli.",
      ],
    },
  },
  "BanguMart POS": {
    description: {
      en: "BanguMart POS is a comprehensive retail and wholesale management web platform engineered specifically for building material and hardware supply stores. It streamlines multi-unit inventory tracking, tiered customer pricing, contractor credit receivables, and job-site delivery logistics in one centralized interface. The system maximizes cash-flow visibility and operational efficiency across store branches.",
      id: "BanguMart POS adalah platform web manajemen penjualan ritel dan grosir yang dirancang khusus untuk kebutuhan operasional toko material bahan bangunan. Aplikasi ini merampingkan pengelolaan inventaris multisatuan, harga bertingkat, piutang kontraktor, serta logistik surat jalan pengiriman dalam satu sistem terpusat. Platform ini meningkatkan visibilitas arus kas dan efisiensi operasional toko secara signifikan.",
    },
    features: {
      en: [
        "Multi-Unit Pricing: Accommodates flexible sales pricing across multiple packaging units including bags, square meters, rods, and bulk bundles.",
        "Contractor Receivables: Manages credit lines, project debt billing, and installment repayment histories for registered contractor partners seamlessly.",
        "Delivery Logistics: Generates formal delivery orders and tracks fleet dispatch status directly to construction project job-site destinations.",
        "Material Estimator: Calculates required quantities of cement, sand, and bricks dynamically to generate immediate price quotations for clients.",
      ],
      id: [
        "Harga Multi-Satuan: Mendukung fleksibilitas penetapan harga bertingkat untuk berbagai unit kemasan seperti sak, meter persegi, batang, hingga borongan.",
        "Piutang Kontraktor: Mengelola plafon pinjaman kredit, penagihan nota proyek, serta rekap pelunasan angsuran mitra kontraktor secara terstruktur.",
        "Surat Jalan Pengiriman: Mencetak dokumen faktur pengiriman resmi dan memantau status armada antar barang langsung ke lokasi proyek konstruksi.",
        "Kalkulator Estimasi Material: Menghitung estimasi kebutuhan semen, pasir, dan bata secara dinamis untuk menerbitkan surat penawaran harga instan.",
      ],
    },
  },
  "Stickman: The Trap Door": {
    description: {
      en: "Stickman: The Trap Door is an engaging 2D troll platformer web game built with TypeScript and HTML5 Canvas. Inspired by games like Cat Mario and Level Devil, players navigate treacherous levels packed with deceptive traps, disappearing floors, trick doors, and surprise spikes. The game features precision physics, custom avatar creation with camera photo crop, dynamic Web Audio sound synthesis, and local progress tracking.",
      id: "Stickman: The Trap Door adalah game web 2D troll platformer interaktif berbasis TypeScript dan HTML5 Canvas. Terinspirasi dari game ala Cat Mario dan Level Devil, pemain mengendalikan stickman melewati berbagai level penuh jebakan licik seperti lantai runtuh, duri tersembunyi, pintu palsu yang kabur, hingga checkpoint menipu. Game ini dilengkapi fisika platformer yang adil, kustomisasi kepala stickman via kamera/foto, efek suara sintesis Web Audio API, serta penyimpanan progres lokal.",
    },
    features: {
      en: [
        "Troll Mechanics & Traps: Features challenging 2D platformer puzzles with sneaky surprises including pop-up spikes, crumbling tiles, collapsing floors, and deceptive exit doors.",
        "Fair Platformer Physics: Implements responsive physics tuning with coyote time and jump buffering to keep movement and jumps feeling tight and fair.",
        "Custom Stickman Head: Empowers players to customize their stickman avatar by taking a live webcam photo or uploading an image with automatic face cropping.",
        "Procedural Web Audio & Storage: Synthesizes dynamic sound effects and death jingles natively via Web Audio API, with instant respawns and localStorage progress tracking.",
      ],
      id: [
        "Mekanik & Jebakan Troll: Menyajikan teka-teki platformer 2D menantang dengan kejutan licik seperti duri tersembunyi, ubin runtuh, balok penghimpit, dan pintu keluar yang kabur.",
        "Fisika Platformer Responsif: Mengimplementasikan kontrol pergerakan presisi yang dilengkapi coyote time dan jump buffering agar gameplay tetap adil dan nyaman dikendalikan.",
        "Kustomisasi Kepala Stickman: Memungkinkan pemain mengubah wajah stickman menggunakan foto selfie kamera (webcam) langsung atau unggahan file dengan fitur pemotongan (crop) wajah.",
        "Audio Prosedural & Penyimpanan Lokal: Menghasilkan efek suara interaktif secara langsung melalui Web Audio API, fitur respawn instan, serta pencatatan skor kematian via localStorage.",
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
  "GAME DEV": { en: "GAME DEV", id: "GAME DEV" },
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
