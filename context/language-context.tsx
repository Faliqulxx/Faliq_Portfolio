"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // ── Navbar ──
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.aiAssistant": "AI Assistant",

    // ── Intro ──
    "intro.hi": "Hello, I'm",
    "intro.headline": "I have hands-on experience in",
    "intro.expertise":
      "Data Science, Data Analysis, AI Automation, IoT Development, and Frontend Development",
    "intro.with": ", with expertise in",
    "intro.and": "and",
    "intro.contactMe": "Contact Me",
    "intro.downloadCV": "Download CV",
    "intro.availableForWork": "Available for Work * Available for Collaboration * ",

    // ── About (Preview) ──
    "about.title": "About Me",
    "about.hi": "Hi, I'm",
    "about.roleTitle": "Data Scientist & AI Automation Engineer",
    "about.roleDesc":
      "with hands-on experience in data processing, machine learning, and building automated AI workflows with tools like Python, n8n, and REST APIs.",
    "about.bio":
      "Hello, I'm Faliq! My primary interests and expertise are in Data Science, supported by skills in Data Analysis, AI Automation, and Internet of Things (IoT). I have experience in data processing, data analysis, data visualization, and machine learning, transforming raw data into valuable insights using Python, Pandas, Scikit-learn, and SQL. In the field of AI Automation, I design and develop automated workflows using n8n, integrate RESTful APIs, and automate data pipelines to improve operational efficiency. I also have a strong interest and hands-on experience in developing IoT systems, sensor-based device monitoring, and implementing smart technologies for livestock farming and smart agriculture. My goal is to create impactful data-driven, AI-powered, and IoT-based solutions through innovative automation that delivers real-world value.",
    "about.mySkills": "My Skills",
    "about.myExpertise": "My Expertise",
    "about.education": "Education",
    "about.certifications": "Certifications",
    "about.location": "Location",
    "about.viewMore": "View More",
    "about.viewAll": "View All",
    "about.close": "Close",
    "about.details": "Details",
    "about.issuedBy": "Issued by",
    "about.credentialId": "Credential ID",
    "about.viewCredential": "View Credential",
    "about.year": "Year",
    "about.gpa": "GPA",
    "about.field": "Field",
    "about.openToWork": "Available for Work",
    "about.graduated": "GRADUATED",
    "about.relevantCoursework": "RELEVANT COURSEWORK:",
    "about.highlySatisfactory": "HIGHLY SATISFACTORY",
    "about.techStack": "TECH STACK",
    "about.myFocus": "My Focus",
    "about.whatIDoBest": "What I Do Best",
    "about.focusDesc":
      "Combining Data Science with AI Automation to build efficient, data-driven solutions — from predictive models to smart IoT systems.",

    // ── About (Full View / Timeline) ──
    "about.full.heroTag": "ABOUT ME",
    "about.full.heroTitle1": "Every journey",
    "about.full.heroTitle2": "starts",
    "about.full.heroTitle3": "somewhere.",
    "about.full.heroDesc":
      "From a small town in Gresik to the city of Malang, this is the story of how curiosity, discipline, and technology shaped my path.",
    "about.full.scrollJourney": "Scroll to explore my journey ↓",
    "about.full.originStory": "Origin Story",
    "about.full.originLocation": "Faliqul Ishbah · East Java, Indonesia",
    "about.full.scribble1": "Same person, Bigger dreams.",
    "about.full.scribble2": "Discipline build my character.",
    "about.full.scribble3": "Small steps, big dreams.",
    "about.full.scribble4": "The beginning of everything.",
    "about.full.scribble5": "Same curiosity. Bigger goals.",
    "about.full.node1Title": "University",
    "about.full.node1Inst": "Universitas Muhammadiyah Malang",
    "about.full.node1Major": "Informatics Engineering",
    "about.full.node1Gpa": "GPA: 3.59 / 4.00",
    "about.full.node1Quote":
      "“This is where I turned my curiosity into technical skills and started building things.”",
    "about.full.whatILearned": "What I Learned",
    "about.full.thesisTitle": "Thesis / Final Project",
    "about.full.thesisDesc":
      "Development of a RAG-Based Chatbot for Academic Information Services in the Informatics Study Program at UMM",
    "about.full.certsTag": "CERTIFICATES",
    "about.full.certsTitle": "Proof of the Journey",
    "about.full.certsDesc1": "A collection of",
    "about.full.certsDesc2":
      "certifications and achievements that support my learning process.",
    "about.full.totalCerts": "Total Certificates",
    "about.full.viewCert": "View Certificate",
    "about.full.issued": "Issued:",
    "about.full.node2Title": "High School",
    "about.full.node2Inst": "Modern Islamic Boarding School Darussalam Gontor",
    "about.full.node2Major": "Natural Sciences",
    "about.full.node2Gpa": "GPA: 8.80 / 10",
    "about.full.node2Quote":
      "“A period of discipline, independence, and learning outside the classroom.”",
    "about.full.node3Title": "Junior High School",
    "about.full.node3Inst": "MTs Islamiyah",
    "about.full.node3Major": "Natural Sciences",
    "about.full.node3Gpa": "GPA: 80 / 100",
    "about.full.node3Quote": "“Where my curiosity started to take shape.”",
    "about.full.node4Title": "Primary School",
    "about.full.node4Inst": "MI Islamiyah",
    "about.full.node4Major": "Natural Sciences",
    "about.full.node4Gpa": "GPA: 90.5 / 100",
    "about.full.node4Quote": "“Where the journey began.”",
    "about.full.andNow": "AND NOW...",
    "about.full.broughtMe": "The journey brought me",
    "about.full.here": "here.",
    "about.full.broughtMeDesc":
      "From learning the basics in Gresik to studying Informatics in Malang, I'm now building things with technology, data, and curiosity.",
    "about.full.exploreProjects": "Explore My Projects",
    "about.full.cardData": "Data Analysis & Visualization",
    "about.full.cardSoftware": "Software Development",
    "about.full.cardAi": "AI & Automation",
    "about.full.cardWeb": "Web Development",

    // ── Experience ──
    "experience.title": "My Experience",
    "experience.eyebrow": "EXPERIENCE",
    "experience.heading": "Where I put skills to work.",
    "experience.subtitle": "From data to web and AI automation. Here's my work and project journey.",
    "experience.viewAll": "View all experience →",
    "experience.present": "Present",
    "experience.exp1.title": "AI Automation Engineer (Freelance)",
    "experience.exp1.location": "Gresik",
    "experience.exp1.desc":
      "Worked on the development of an AI-based chatbot for the Informatics Study Program. Designed and implemented automated workflows, integrated APIs, and supported chatbot functionality to provide academic information and improve user interaction efficiency.",
    "experience.exp2.title": "Web Programmer (Intern)",
    "experience.exp2.location": "DISPARTA Kab. Pasuruan",
    "experience.exp2.desc":
      "Maintained and improved official websites for DISPARTA and OnTrip, including bug fixing, feature enhancements, performance optimization, and resolving user-reported issues. Collaborated with stakeholders to ensure system reliability and usability.",
    "experience.exp3.title": "Software Engineer (Freelance)",
    "experience.exp3.location": "Gresik",
    "experience.exp3.desc":
      "Supported MSMEs and online businesses by developing, customizing, and maintaining websites and online stores. Handled feature implementation, bug fixing, UI improvements, and basic system optimization.",
    "experience.exp4.title": "Data Scientist (Coursework)",
    "experience.exp4.location": "Telkom Indonesia",
    "experience.exp4.desc":
      "Focused on data analysis and data-driven feature development for HR tools. Performed data processing, analysis, and visualization for employee attendance, shift patterns, leave records, and performance assessments.",

    // ── Projects ──
    "projects.title": "My Projects",
    "projects.selectedWorks": "Selected Works",
    "projects.selectedWorksSubtitle":
      "A showcase of functional web solutions focused on data accuracy, automation, and user experience.",
    "projects.viewAll": "View All Projects",
    "projects.readCaseStudy": "Read Case Study",
    "projects.viewCaseStudy": "VIEW CASE STUDY",
    "projects.visitSite": "Visit Site",
    "projects.details": "Details",
    "projects.cat.data": "Data Science",
    "projects.cat.web": "General Dev",
    "projects.searchPlaceholder": "Search projects...",
    "projects.filters": "Filters",
    "projects.filterBySub": "Filter by Sub Category (Multiple Select)",
    "projects.clearFilters": "Clear filters",
    "projects.sort": "Sort:",
    "projects.sort.pinned": "Pinned Order",
    "projects.sort.featured": "Featured First",
    "projects.sort.newest": "Newest First",
    "projects.sort.oldest": "Oldest First",
    "projects.sort.title": "Title (A-Z)",
    "projects.showing": "Showing",
    "projects.entries": "entries",
    "projects.exploreWriteup": "Explore Writeup",
    "projects.noMatch": "No projects match your search.",
    "projects.modal.features": "Features",
    "projects.modal.techStack": "Tech Stack",
    "projects.modal.liveDemo": "Live Demo",
    "projects.modal.github": "GitHub",

    // ── Gallery ──
    "gallery.tag": "Moments & Memories",
    "gallery.title": "Gallery",
    "gallery.desc":
      "A collection of moments, projects, and memories captured along the journey.",

    // ── Contact ──
    "contact.title": "Contact Me",
    "contact.tag": "CONTACT",
    "contact.getInTouch": "Get In Touch",
    "contact.getInTouchDesc":
      "Have a question, project, or want to discuss further? I'd love to hear from you.",
    "contact.responseTime": "I usually respond within 1-2 business days.",
    "contact.formTitle": "Send a Message",
    "contact.formDesc":
      "Fill out the form below, and I will get back to you as soon as possible.",
    "contact.fullName": "Full Name",
    "contact.selectTopic": "Select message topic",
    "contact.topicCollab": "Project Collaboration",
    "contact.topicHiring": "Job Opportunity / Hiring",
    "contact.topicTech": "Technical & AI Discussion",
    "contact.topicOther": "Other Inquiry",
    "contact.subtitle":
      "Got a project idea or want to work together? Feel free to reach out — I'd love to connect!",
    "contact.connectDigitally": "Connect Digitally",
    "contact.name": "Your Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.namePlaceholder": "Enter your name",
    "contact.emailPlaceholder": "example@email.com",
    "contact.subjectPlaceholder": "Select message topic",
    "contact.messagePlaceholder": "Write your message here...",
    "contact.orReach": "Or reach me directly on",
    "contact.success": "Message sent successfully! I'll get back to you soon.",

    // ── Footer ──
    "footer.rights": "All rights reserved",
    "footer.builtWith": "Built with",
    "footer.backToTop": "Back to top",

    // ── AI Assistant ──
    "ai.title": "Faliqul AI Assistant",
    "ai.subtitle": "Instant & accurate response regarding Portfolio",
    "ai.clear": "Clear Chat",
    "ai.welcomeTitle": "Hello! How can I help you today?",
    "ai.welcomeDesc":
      "Choose a topic below or write your own question about Faliqul's background, projects, and skills.",
    "ai.askPrompt": "Ask →",
    "ai.inputPlaceholder": "Type your question about Faliqul...",
    "ai.prompt1.title": "Skills & Expertise",
    "ai.prompt1.desc": "Tell me about him and the skills he possesses",
    "ai.prompt2.title": "Projects Overview",
    "ai.prompt2.desc": "What projects has he built so far?",
    "ai.prompt3.title": "AI & ML Experience",
    "ai.prompt3.desc":
      "Explain his experience in AI, Data Science, and Machine Learning",
    "ai.prompt4.title": "Tech Stack",
    "ai.prompt4.desc": "What technologies and programming languages does he master?",
    "ai.prompt5.title": "Best Project",
    "ai.prompt5.desc": "Show and explain the best project he has ever built?",

    // ── Section headings ──
    "section.skills": "My Skills",
    "section.projects": "My Projects",
    "section.experience": "My Experience",
    "section.contact": "Contact Me",
    "section.about": "About Me",
  },

  id: {
    // ── Navbar ──
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.gallery": "Galeri",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",
    "nav.aiAssistant": "Asisten AI",

    // ── Intro ──
    "intro.hi": "Halo, saya",
    "intro.headline": "Saya memiliki pengalaman langsung di bidang",
    "intro.expertise":
      "Data Science, Analisis Data, AI Automation, Pengembangan IoT, dan Pengembangan Frontend",
    "intro.with": ", dengan keahlian dalam",
    "intro.and": "dan",
    "intro.contactMe": "Hubungi Saya",
    "intro.downloadCV": "Unduh CV",
    "intro.availableForWork": "Tersedia untuk Kerja * Tersedia untuk Kolaborasi * ",

    // ── About (Preview) ──
    "about.title": "Tentang Saya",
    "about.hi": "Hai, saya",
    "about.roleTitle": "Data Scientist & AI Automation Engineer",
    "about.roleDesc":
      "dengan pengalaman langsung dalam pemrosesan data, machine learning, dan membangun alur kerja otomatisasi AI dengan alat seperti Python, n8n, dan REST API.",
    "about.bio":
      "Halo, saya Faliq! Minat dan keahlian utama saya adalah di bidang Data Science, didukung oleh kemampuan dalam Analisis Data, AI Automation, dan Internet of Things (IoT). Saya memiliki pengalaman dalam pengolahan data, analisis data, visualisasi data, dan machine learning, mengubah data mentah menjadi wawasan berharga menggunakan Python, Pandas, Scikit-learn, dan SQL. Di bidang AI Automation, saya merancang dan mengembangkan alur kerja otomatis menggunakan n8n, mengintegrasikan RESTful API, dan mengotomasi pipeline data untuk meningkatkan efisiensi operasional. Saya juga memiliki minat dan pengalaman langsung dalam pengembangan sistem IoT, pemantauan perangkat berbasis sensor, dan penerapan teknologi cerdas untuk peternakan dan pertanian cerdas. Tujuan saya adalah menciptakan solusi berbasis data, bertenaga AI, dan berbasis IoT yang berdampak melalui otomasi inovatif yang memberikan nilai nyata.",
    "about.mySkills": "Keahlian Saya",
    "about.myExpertise": "Bidang Keahlian",
    "about.education": "Pendidikan",
    "about.certifications": "Sertifikasi",
    "about.location": "Lokasi",
    "about.viewMore": "Lihat Lebih",
    "about.viewAll": "Lihat Semua",
    "about.close": "Tutup",
    "about.details": "Detail",
    "about.issuedBy": "Diterbitkan oleh",
    "about.credentialId": "ID Kredensial",
    "about.viewCredential": "Lihat Kredensial",
    "about.year": "Tahun",
    "about.gpa": "IPK",
    "about.field": "Jurusan",
    "about.openToWork": "Tersedia untuk Kerja",
    "about.graduated": "LULUS",
    "about.relevantCoursework": "MATA KULIAH RELEVAN:",
    "about.highlySatisfactory": "SANGAT MEMUASKAN",
    "about.techStack": "TEKNOLOGI",
    "about.myFocus": "Fokus Saya",
    "about.whatIDoBest": "Keahlian Utama Saya",
    "about.focusDesc":
      "Menggabungkan Data Science dengan AI Automation untuk membangun solusi berbasis data yang efisien — dari model prediktif hingga sistem IoT pintar.",

    // ── About (Full View / Timeline) ──
    "about.full.heroTag": "TENTANG SAYA",
    "about.full.heroTitle1": "Setiap perjalanan",
    "about.full.heroTitle2": "dimulai dari",
    "about.full.heroTitle3": "suatu tempat.",
    "about.full.heroDesc":
      "Dari kota kecil di Gresik hingga ke kota Malang, ini adalah kisah bagaimana rasa ingin tahu, disiplin, dan teknologi membentuk perjalanan saya.",
    "about.full.scrollJourney": "Gulir untuk menjelajahi perjalanan saya ↓",
    "about.full.originStory": "Kisah Awal",
    "about.full.originLocation": "Faliqul Ishbah · Jawa Timur, Indonesia",
    "about.full.scribble1": "Orang yang sama, Mimpi yang lebih besar.",
    "about.full.scribble2": "Disiplin membentuk karakter saya.",
    "about.full.scribble3": "Langkah kecil, mimpi besar.",
    "about.full.scribble4": "Awal mula dari segalanya.",
    "about.full.scribble5": "Rasa ingin tahu yang sama. Tujuan yang lebih besar.",
    "about.full.node1Title": "Universitas",
    "about.full.node1Inst": "Universitas Muhammadiyah Malang",
    "about.full.node1Major": "Teknik Informatika",
    "about.full.node1Gpa": "IPK: 3.59 / 4.00",
    "about.full.node1Quote":
      "“Di sinilah saya mengubah rasa ingin tahu menjadi keterampilan teknis dan mulai membangun berbagai karya nyata.”",
    "about.full.whatILearned": "Hal yang Saya Pelajari",
    "about.full.thesisTitle": "Tugas Akhir / Skripsi",
    "about.full.thesisDesc":
      "Pengembangan Chatbot Berbasis RAG Untuk Layanan Informasi Akademik Program Studi Informatika UMM",
    "about.full.certsTag": "SERTIFIKAT",
    "about.full.certsTitle": "Bukti Perjalanan",
    "about.full.certsDesc1": "Koleksi dari",
    "about.full.certsDesc2":
      "sertifikasi dan pencapaian yang mendukung proses pembelajaran saya.",
    "about.full.totalCerts": "Total Sertifikat",
    "about.full.viewCert": "Lihat Sertifikat",
    "about.full.issued": "Diterbitkan:",
    "about.full.node2Title": "Sekolah Menengah Atas",
    "about.full.node2Inst": "Pondok Modern Darussalam Gontor",
    "about.full.node2Major": "Ilmu Pengetahuan Alam",
    "about.full.node2Gpa": "Nilai: 8.80 / 10",
    "about.full.node2Quote":
      "“Masa kedisiplinan, kemandirian, dan pembelajaran di luar ruang kelas.”",
    "about.full.node3Title": "Sekolah Menengah Pertama",
    "about.full.node3Inst": "MTs Islamiyah",
    "about.full.node3Major": "Ilmu Pengetahuan Alam",
    "about.full.node3Gpa": "Nilai: 80 / 100",
    "about.full.node3Quote": "“Tempat di mana rasa ingin tahu saya mulai terbentuk.”",
    "about.full.node4Title": "Sekolah Dasar",
    "about.full.node4Inst": "MI Islamiyah",
    "about.full.node4Major": "Ilmu Pengetahuan Alam",
    "about.full.node4Gpa": "Nilai: 90.5 / 100",
    "about.full.node4Quote": "“Di mana seluruh perjalanan dimulai.”",
    "about.full.andNow": "DAN SEKARANG...",
    "about.full.broughtMe": "Perjalanan membawa saya ke",
    "about.full.here": "sini.",
    "about.full.broughtMeDesc":
      "Dari mempelajari dasar-dasar di Gresik hingga studi Informatika di Malang, kini saya membangun berbagai hal dengan teknologi, data, dan rasa ingin tahu.",
    "about.full.exploreProjects": "Jelajahi Proyek Saya",
    "about.full.cardData": "Analisis & Visualisasi Data",
    "about.full.cardSoftware": "Pengembangan Perangkat Lunak",
    "about.full.cardAi": "AI & Otomasi",
    "about.full.cardWeb": "Pengembangan Web",

    // ── Experience ──
    "experience.title": "Pengalaman Saya",
    "experience.eyebrow": "PENGALAMAN",
    "experience.heading": "Di sinilah keahlian saya bekerja.",
    "experience.subtitle": "Dari data, web, sampai AI automation. Berikut perjalanan kerja dan proyek saya.",
    "experience.viewAll": "Lihat semua pengalaman →",
    "experience.present": "Sekarang",
    "experience.exp1.title": "AI Automation Engineer (Freelance)",
    "experience.exp1.location": "Gresik",
    "experience.exp1.desc":
      "Bekerja pada pengembangan chatbot berbasis AI untuk Program Studi Informatika. Merancang dan mengimplementasikan alur kerja otomatis, mengintegrasikan API, dan mengoptimalkan fungsi chatbot untuk menyediakan informasi akademik dan efisiensi interaksi pengguna.",
    "experience.exp2.title": "Web Programmer (Magang)",
    "experience.exp2.location": "DISPARTA Kab. Pasuruan",
    "experience.exp2.desc":
      "Memelihara dan meningkatkan situs web resmi DISPARTA dan OnTrip, termasuk perbaikan bug, penambahan fitur, optimasi performa, dan menyelesaikan isu pengguna. Berkolaborasi dengan stakeholder untuk memastikan keandalan sistem.",
    "experience.exp3.title": "Software Engineer (Freelance)",
    "experience.exp3.location": "Gresik",
    "experience.exp3.desc":
      "Mendukung UMKM dan bisnis online dengan mengembangkan, menyesuaikan, dan memelihara situs web serta toko online. Menangani implementasi fitur, perbaikan bug, peningkatan UI, dan optimasi sistem.",
    "experience.exp4.title": "Data Scientist (Studi Independen)",
    "experience.exp4.location": "Telkom Indonesia",
    "experience.exp4.desc":
      "Berfokus pada analisis data dan pengembangan fitur berbasis data untuk HR tools. Melakukan pemrosesan, analisis, dan visualisasi data kehadiran karyawan, pola shift, catatan cuti, dan penilaian kinerja.",

    // ── Projects ──
    "projects.title": "Proyek Saya",
    "projects.selectedWorks": "Karya Pilihan",
    "projects.selectedWorksSubtitle":
      "Kumpulan solusi web fungsional yang berfokus pada akurasi data, otomasi, dan pengalaman pengguna.",
    "projects.viewAll": "Lihat Semua Proyek",
    "projects.readCaseStudy": "Baca Studi Kasus",
    "projects.viewCaseStudy": "LIHAT STUDI KASUS",
    "projects.visitSite": "Kunjungi Web",
    "projects.details": "Detail",
    "projects.cat.data": "Sains Data",
    "projects.cat.web": "Pengembangan Umum",
    "projects.searchPlaceholder": "Cari proyek...",
    "projects.filters": "Filter",
    "projects.filterBySub": "Filter berdasarkan Sub Kategori (Pilih Banyak)",
    "projects.clearFilters": "Hapus filter",
    "projects.sort": "Urutkan:",
    "projects.sort.pinned": "Urutan Disematkan",
    "projects.sort.featured": "Unggulan Dahulu",
    "projects.sort.newest": "Terbaru Dahulu",
    "projects.sort.oldest": "Terlama Dahulu",
    "projects.sort.title": "Judul (A-Z)",
    "projects.showing": "Menampilkan",
    "projects.entries": "proyek",
    "projects.exploreWriteup": "Lihat Detail",
    "projects.noMatch": "Tidak ada proyek yang cocok dengan pencarian Anda.",
    "projects.modal.features": "Fitur Utama",
    "projects.modal.techStack": "Teknologi",
    "projects.modal.liveDemo": "Demo Langsung",
    "projects.modal.github": "GitHub",

    // ── Gallery ──
    "gallery.tag": "Momen & Kenangan",
    "gallery.title": "Galeri",
    "gallery.desc":
      "Koleksi momen, proyek, dan kenangan yang terabadikan sepanjang perjalanan.",

    // ── Contact ──
    "contact.title": "Hubungi Saya",
    "contact.tag": "CONTACT",
    "contact.getInTouch": "Get In Touch",
    "contact.getInTouchDesc":
      "Punya pertanyaan, proyek, atau ingin berdiskusi lebih lanjut? Saya akan senang mendengar dari Anda.",
    "contact.responseTime": "Saya biasanya merespon dalam 1-2 hari kerja.",
    "contact.formTitle": "Kirim Pesan",
    "contact.formDesc":
      "Isi form di bawah ini, dan saya akan membalas secepatnya.",
    "contact.fullName": "Nama Lengkap",
    "contact.selectTopic": "Pilih topik pesan",
    "contact.topicCollab": "Kerjasama Proyek",
    "contact.topicHiring": "Peluang Kerja / Hiring",
    "contact.topicTech": "Diskusi Teknis & AI",
    "contact.topicOther": "Lainnya",
    "contact.subtitle":
      "Punya ide proyek atau ingin bekerja sama? Jangan ragu untuk menghubungi — saya senang bisa terhubung!",
    "contact.connectDigitally": "Terhubung Secara Digital",
    "contact.name": "Nama Lengkap",
    "contact.email": "Email",
    "contact.subject": "Subjek",
    "contact.message": "Pesan",
    "contact.send": "Kirim Pesan",
    "contact.sending": "Mengirim...",
    "contact.namePlaceholder": "Masukkan nama Anda",
    "contact.emailPlaceholder": "contoh@email.com",
    "contact.subjectPlaceholder": "Pilih topik pesan",
    "contact.messagePlaceholder": "Tulis pesan Anda di sini...",
    "contact.orReach": "Atau hubungi saya langsung di",
    "contact.success": "Pesan berhasil dikirim! Saya akan segera merespons Anda.",

    // ── Footer ──
    "footer.rights": "Hak cipta dilindungi undang-undang",
    "footer.builtWith": "Dibuat dengan",
    "footer.backToTop": "Kembali ke atas",

    // ── AI Assistant ──
    "ai.title": "Asisten AI Faliqul",
    "ai.subtitle": "Respon instan & akurat mengenai Portofolio",
    "ai.clear": "Bersihkan Chat",
    "ai.welcomeTitle": "Halo! Ada yang bisa saya bantu hari ini?",
    "ai.welcomeDesc":
      "Pilih topik di bawah ini atau tulis pertanyaan Anda sendiri tentang latar belakang, proyek, dan keahlian Faliqul.",
    "ai.askPrompt": "Tanyakan →",
    "ai.inputPlaceholder": "Ketik pertanyaan Anda tentang Faliqul...",
    "ai.prompt1.title": "Keahlian & Kemampuan",
    "ai.prompt1.desc": "Ceritakan tentang dia dan keahlian yang dimilikinya",
    "ai.prompt2.title": "Ikhtisar Proyek",
    "ai.prompt2.desc": "Apa saja proyek yang telah dibangun olehnya?",
    "ai.prompt3.title": "Pengalaman AI & ML",
    "ai.prompt3.desc":
      "Jelaskan pengalamannya di bidang AI, Data Science, dan Machine Learning",
    "ai.prompt4.title": "Tech Stack",
    "ai.prompt4.desc": "Teknologi dan bahasa pemrograman apa saja yang dikuasainya?",
    "ai.prompt5.title": "Proyek Terbaik",
    "ai.prompt5.desc": "Tunjukkan dan jelaskan proyek terbaik yang pernah dibangun olehnya?",

    // ── Section headings ──
    "section.skills": "Keahlian Saya",
    "section.projects": "Proyek Saya",
    "section.experience": "Pengalaman Saya",
    "section.contact": "Hubungi Saya",
    "section.about": "Tentang Saya",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "en" || saved === "id") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "id" : "en";
      localStorage.setItem("language", next);
      return next;
    });
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
