# Plan: Admin Panel untuk Projects, Experience, & Sertifikat

Dokumen ini berisi rencana arsitektur dan tahapan implementasi untuk menambahkan Admin Panel mandiri ke portofolio.

---

## 1. Arsitektur & Komponen Utama

```
┌────────────────────────────────────────────────────────┐
│                   ADMIN PANEL (/admin)                 │
│  - Login Screen (Password / Email Magic Link)          │
│  - Dashboard CRUD (Projects, Experience, Certificates) │
│  - Image / File Uploader                               │
└───────────────────────────┬────────────────────────────┘
                            │ (Mutations: Insert/Update/Delete)
                            ▼
┌────────────────────────────────────────────────────────┐
│                   DATABASE & STORAGE                   │
│  - Database: PostgreSQL (Menyimpan teks, tech, tahun)  │
│  - Storage: Cloud Bucket (File gambar & PDF sertifikat)│
│  - Auth: Session / JWT Token                           │
└───────────────────────────┬────────────────────────────┘
                            │ (Query data)
                            ▼
┌────────────────────────────────────────────────────────┐
│                   WEBSITE PORTOFOLIO                   │
│  - Fetch data dari Database                            │
│  - Fallback ke lib/data.ts (jika offline/gagal)        │
└────────────────────────────────────────────────────────┘
```

---

## 2. Rekomendasi Tech Stack

| Komponen | Rekomendasi Utama (Paling Efisien) | Alternatif |
| :--- | :--- | :--- |
| **Backend & Database** | **Supabase** (PostgreSQL gratis, performa tinggi, SDK resmi Next.js) | Prisma + Neon PostgreSQL / MongoDB |
| **Auth** | **Supabase Auth** (email/password aman + session cookies) | NextAuth.js / Jose JWT |
| **File Storage** | **Supabase Storage** (bucket untuk cover project & foto sertifikat) | Cloudinary / Uploadthing |
| **UI Framework** | **Tailwind CSS + Lucide Icons** (senada dengan tema website saat ini) | Shadcn UI components |

---

## 3. Struktur Tabel Database (Schema Plan)

### A. Tabel `projects`
- `id` (UUID / Integer, Primary Key)
- `title` (VARCHAR)
- `category` (ARRAY / TEXT: `'web'`, `'data'`)
- `subcategories` (ARRAY: misal `['Web Development', 'Full Stack']`)
- `description_en` & `description_id` (TEXT)
- `tech` (ARRAY: `['Next.js', 'Python', 'Tailwind']`)
- `image` (TEXT / URL cover)
- `screenshots` (ARRAY TEXT / URLs)
- `features_en` & `features_id` (ARRAY TEXT)
- `demo_url` & `github_url` (TEXT, optional)
- `pinned` (BOOLEAN, default: false)
- `created_at` (TIMESTAMP)

### B. Tabel `experiences`
- `id` (UUID / Integer, Primary Key)
- `title` (VARCHAR: e.g. "Software Engineer / Web Dev")
- `location` (VARCHAR)
- `description_en` & `description_id` (TEXT)
- `icon_type` (VARCHAR: `'work'`, `'education'`)
- `date_en` & `date_id` (VARCHAR: e.g. "2024 – Present", "2024 – Sekarang")
- `is_present` (BOOLEAN, untuk badge live)
- `order_index` (INTEGER, untuk urutan timeline)

### C. Tabel `certificates`
- `id` (UUID / Integer, Primary Key)
- `title` (VARCHAR)
- `issuer` (VARCHAR: Dicoding, Coursera, dll.)
- `issue_date` (VARCHAR / DATE)
- `credential_id` (VARCHAR, optional)
- `credential_url` (VARCHAR, link verifikasi)
- `image_url` (VARCHAR, gambar sertifikat)
- `skills` (ARRAY TEXT)

---

## 4. Tahapan Eksekusi Step-by-Step

### Fase 1: Setup Database & Storage
1. Buat project baru di **Supabase** (gratis).
2. Eksekusi SQL Migration untuk membuat tabel `projects`, `experiences`, dan `certificates`.
3. Buat storage bucket (misal: `portfolio-assets`) untuk upload gambar proyek dan sertifikat dengan public read access.
4. Simpan environment variables di `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`).

### Fase 2: Autentikasi & Security Route
1. Buat rute `/admin/login`:
   - Form input Email & Password sederhana dengan gaya desain monokrom portofolio.
2. Tambahkan **Next.js Middleware** (`middleware.ts`):
   - Memvalidasi token sesi. Jika bukan admin yang login, otomatis redirect kembali ke `/admin/login`.
   - Mengamankan seluruh sub-rute `/admin/*` dan API mutation.

### Fase 3: Pembuatan Tampilan Admin Panel (`/admin`)
1. **Layout Admin** (`app/admin/layout.tsx`):
   - Sidebar navigasi minimalis:
     - 📁 **Projects** (`/admin/projects`)
     - 💼 **Experience** (`/admin/experience`)
     - 📜 **Certificates** (`/admin/certificates`)
     - 🚪 Tombol Logout
2. **Halaman CRUD Projects**:
   - Tabel list project dengan filter & pencarian.
   - Form modal / halaman tambah & edit:
     - Input judul, kategori (`General Dev` / `Data Science`), tech stack (tag pills), deskripsi (ID & EN).
     - Drag & drop image uploader langsung ke Supabase Storage.
     - Toggle pin / featured.
     - Tombol Delete dengan dialog konfirmasi.
3. **Halaman CRUD Experience**:
   - List timeline experience.
   - Form tambah/edit jabatan, perusahaan, durasi, checkbox "Sampai Sekarang / Live".
4. **Halaman CRUD Certificates**:
   - List sertifikat + upload gambar sertifikat + link credential.

### Fase 4: Seeding Data Awal
1. Buat skrip migrasi sekali jalan (`seed-database.ts`) untuk memindahkan seluruh isi data yang saat ini ada di `lib/data.ts` ke Supabase.
2. Memastikan tidak perlu mengetik ulang semua data yang sudah ada sebelumnya.

### Fase 5: Integrasi ke Halaman Publik Portofolio
1. Buat data fetching helper (`lib/db.ts`).
2. Terapkan strategi **Graceful Fallback**:
   - Website mengambil data dari Database Supabase.
   - Jika koneksi internet lambat / database kuota habis / offline, sistem otomatis memakai data cadangan dari `lib/data.ts` sehingga website tidak akan pernah blank/error.
3. Gunakan fitur **Next.js Revalidation (ISR / Tag revalidation)**:
   - Begitu Anda klik "Simpan" di Admin Panel, halaman publik langsung update tanpa perlu rebuild / redeploy Vercel.
