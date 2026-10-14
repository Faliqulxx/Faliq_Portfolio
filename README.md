<div align="center">
  
  # 🚀 Faliqul Ishbah - Personal Portfolio
  
  **AI Automation Engineer • Data Scientist • Fullstack & Frontend Web Developer**
  
  [![Website](https://img.shields.io/badge/Website-faliq--portfolio.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://faliq-portfolio.vercel.app/)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Faliqul_Ishbah-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/faliqul-ishbah/)
  [![GitHub](https://img.shields.io/badge/GitHub-Faliqulxx-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Faliqulxx)
  
  *A modern, interactive, and high-performance digital portfolio showcasing projects, professional journey, certifications, and AI innovations.*
</div>

---

## 📖 Overview

Welcome to my personal web portfolio! This website is engineered from the ground up to showcase my work in **Artificial Intelligence, Data Science, AI Automation (n8n), and Modern Web Development**.

Designed with **performance, accessibility, fluid micro-interactions**, and a **sleek dark/light aesthetic**, this portfolio delivers a fast and memorable experience on both desktop and mobile devices.

---

## ✨ Key Features & Highlights

### 1. 🌐 Bi-Lingual Support (EN & ID)
- Seamless real-time language switching between **English** and **Bahasa Indonesia** without page reloads.
- Full localization across all sections: Hero, About, Projects, Gallery, Experience, and AI Assistant.

### 2. 🤖 Interactive AI Assistant (`/ai-assistant`)
- Custom AI chatbot powered by the **Google Gemini API** (`@google/generative-ai`).
- Smart pre-built query templates with intelligent fallback responses.
- Quick prompt buttons with clean monochrome flat icons and Markdown rendering (code blocks, bullet points, formatting).

### 3. 🚀 Dynamic Projects Showcase (`/projects`)
- Categorized switcher: **General Dev** (Web, Full Stack, Frontend/Backend, IoT) and **Data Science** (Analytics, Visualization, AI/ML, Computer Vision).
- Multi-faceted filter system: Subcategory pills, full-text live search, and sorting (Pinned, Featured, Newest, Oldest, Title A-Z).
- Rich project detail modals with image carousels, live demo links, and GitHub repositories.

### 4. 📜 Certificates & Credentials
- Interactive horizontal carousel showcasing certified achievements (Dicoding, Coursera, IBM, etc.).
- Direct credential verification links and preview modals.

### 5. 💼 Experience Timeline (`/experience`)
- Interactive vertical timeline covering freelance roles, internships, and educational milestones.
- Real-time active status indicator (**Live** pulsing badge) for ongoing roles.

### 6. 📸 Gallery Showcase (`/gallery`)
- Interactive cards featuring campus leadership, hackathons, IoT prototyping, and event documentation.

### 7. 🎨 Micro-Interactions & UX Polish
- **Smart Session Intro**: Introductory animation plays strictly on the first visit per session using `sessionStorage`, keeping subsequent navigation instant and seamless.
- **Theme Switching**: Dark / Light mode toggle with smooth color transitions.
- **Sound Effects**: Optional interactive audio feedback for clicks and switches.
- **Responsive Navigation**: Adaptive pill navigation bar with active section highlight.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 13](https://nextjs.org/) (App Router), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Design** | [Tailwind CSS](https://tailwindcss.com/), Vanilla CSS Modules, CSS Variables |
| **Animations & 3D** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), [Three.js](https://threejs.org/) / [React Three Fiber](https://r3f.docs.pmnd.rs/) |
| **AI Integration** | [Google Generative AI SDK](https://www.npmjs.com/package/@google/generative-ai) (Gemini Models) |
| **Email Service** | [Resend](https://resend.com/) & [React Email](https://react.email/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Bootstrap, FontAwesome, Feather, Heroicons) |
| **Deployment & Hosting** | [Vercel](https://vercel.com/) with Speed Insights and Analytics |

---

## 📂 Project Structure

The project has been organized into modular, maintainable directories:

```text
Portfolio_v1/
├── app/                      # Next.js App Router pages
│   ├── about/                # About page
│   ├── ai-assistant/         # AI Assistant Chat page
│   ├── contact/              # Contact page
│   ├── experience/           # Professional experience page
│   ├── gallery/              # Gallery page
│   ├── projects/             # Projects directory & showcase
│   ├── skills/               # Skills breakdown page
│   ├── layout.tsx            # Root layout & providers
│   └── page.tsx              # Home page
├── components/               # Modular UI components
│   ├── chat/                 # Chat interface, prompt bar & templates
│   ├── cv/                   # Interactive CV dialogs & viewer
│   ├── layout/               # Header, Footer, PillNav
│   ├── loading/              # First-session intro animation
│   ├── providers/            # Theme, Language, Sound, Toaster providers
│   ├── sections/             # Intro, About, Projects, Experience, Contact
│   └── ui/                   # Reusable buttons, badges, headings, animations
├── context/                  # React Contexts (Language, Theme, ActiveSection)
├── lib/                      # Static datasets, hooks, types, translations
├── public/                   # Static assets (images, icons, resume PDF)
└── nextupdate.md             # Upcoming roadmap plan (Admin Panel architecture)
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18.x or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Faliqulxx/Portfolio_v1.git
   cd Portfolio_v1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Google Gemini API Key for AI Assistant
   GEMINI_API_KEY=your_gemini_api_key_here

   # Resend API Key for Contact Form
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🗺️ Roadmap & Future Enhancements

- [x] 🤖 **AI Portfolio Assistant** (Google Gemini API with streaming & template fallbacks)
- [x] 🌍 **Bilingual Localization** (English & Bahasa Indonesia)
- [x] 📜 **Certificates & Credentials Showcase** (Interactive carousel & verification links)
- [x] 📸 **Interactive Gallery Page** (Campus, achievements, and IoT builds)
- [x] 🗂️ **Clean Component Restructuring** (`components/` modular architecture)
- [x] 📱 **Responsive UI Refinements** (Mobile sort dropdowns & flat monochrome icons)
- [ ] 🔐 **Admin Panel Integration** (Supabase PostgreSQL + Auth + Storage CRUD for Projects, Experience, and Certificates — *see details in [`nextupdate.md`](./nextupdate.md)*)
- [ ] 📝 **Personal Tech Blog** (Markdown / MDX technical articles)

---

## 👨‍💻 Author

**Faliqul Ishbah**
- 🌐 Website: [faliq-portfolio.vercel.app](https://faliq-portfolio.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/faliqul-ishbah](https://www.linkedin.com/in/faliqul-ishbah/)
- 🐙 GitHub: [@Faliqulxx](https://github.com/Faliqulxx)
- 📧 Email: [faliqul.isback@gmail.com](mailto:faliqul.isback@gmail.com)

---

<div align="center">
  <sub>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.</sub>
</div>
