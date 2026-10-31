"""
Generates a documentation PowerPoint presentation (.pptx)
for OmniCore AI, WhatsApp AI Rental Mobil, and WhatsApp RAG AI Assistant Chatbot.
"""

import os
import io
from PIL import Image
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# ─── COLOR PALETTE ─────────────────────────────────────────────────────────────
BG_DARK = RGBColor(11, 15, 25)         # Deep dark navy #0b0f19
CARD_BG = RGBColor(20, 26, 42)         # Dark slate card #141a2a
CARD_BORDER = RGBColor(40, 52, 78)     # Card border #28344e
TEXT_WHITE = RGBColor(255, 255, 255)   # #ffffff
TEXT_MUTED = RGBColor(160, 174, 192)   # #a0aec0
TEXT_SECONDARY = RGBColor(203, 213, 225) # #cbd5e1

ACCENT_BLUE = RGBColor(56, 189, 248)   # Cyan/Light Blue #38bdf8
ACCENT_GREEN = RGBColor(52, 211, 153)  # Mint Green #34d399
ACCENT_PURPLE = RGBColor(168, 85, 247) # Violet/Purple #a855f7
ACCENT_ORANGE = RGBColor(251, 146, 60) # Orange/Amber #fb923c

def convert_webp_to_png(webp_path):
    """Converts a webp file into a BytesIO PNG stream for python-pptx."""
    if not os.path.exists(webp_path):
        return None
    try:
        im = Image.open(webp_path)
        buf = io.BytesIO()
        im.save(buf, format="PNG")
        buf.seek(0)
        return buf
    except Exception as e:
        print(f"Error converting {webp_path}: {e}")
        return None

def set_slide_background(slide, prs):
    """Draws a full-slide dark background rectangle."""
    bg_shape = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height
    )
    bg_shape.fill.solid()
    bg_shape.fill.fore_color.rgb = BG_DARK
    bg_shape.line.color.rgb = BG_DARK
    return bg_shape

def add_header(slide, tag_text, title_text, tag_color=ACCENT_BLUE):
    """Adds a standardized header block with tag and main title."""
    # Tag / Category
    tag_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(11.7), Inches(0.4))
    tf = tag_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = tag_text.upper()
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = tag_color

    # Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.85), Inches(11.7), Inches(0.7))
    tf = title_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = title_text
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = TEXT_WHITE

def create_card(slide, left, top, width, height, bg_color=CARD_BG, border_color=CARD_BORDER):
    """Creates a rounded rectangle container card."""
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    card.line.color.rgb = border_color
    card.line.width = Pt(1.2)
    return card

def main():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 1: COVER SLIDE
    # ══════════════════════════════════════════════════════════════════════════
    s1 = prs.slides.add_slide(blank_layout)
    set_slide_background(s1, prs)

    # Accent top border
    top_bar = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.12))
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = ACCENT_BLUE
    top_bar.line.fill.background()

    # Badge Pill
    badge = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.2), Inches(1.5), Inches(3.2), Inches(0.42))
    badge.fill.solid()
    badge.fill.fore_color.rgb = RGBColor(24, 38, 64)
    badge.line.color.rgb = ACCENT_BLUE
    badge.line.width = Pt(1)
    tf = badge.text_frame
    p = tf.paragraphs[0]
    p.text = "PORTFOLIO DOKUMENTASI PROYEK AI"
    p.font.size = Pt(10)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE
    p.alignment = PP_ALIGN.CENTER

    # Main Title
    title_box = s1.shapes.add_textbox(Inches(1.2), Inches(2.1), Inches(10.8), Inches(1.6))
    tf = title_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = "Sistem AI & Otomasi Cerdas Berbasis Workflow & RAG"
    p.font.size = Pt(34)
    p.font.bold = True
    p.font.color.rgb = TEXT_WHITE

    # Subtitle
    sub_box = s1.shapes.add_textbox(Inches(1.2), Inches(3.6), Inches(10.8), Inches(1.0))
    tf = sub_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = "Dokumentasi Arsitektur, Implementasi Teknis, dan Studi Kasus pada:\n1. OmniCore AI   •   2. WhatsApp AI Rental Mobil   •   3. WhatsApp RAG AI Assistant"
    p.font.size = Pt(15)
    p.font.color.rgb = TEXT_MUTED

    # Author Card
    author_card = create_card(s1, Inches(1.2), Inches(5.0), Inches(10.8), Inches(1.6))
    auth_box = s1.shapes.add_textbox(Inches(1.5), Inches(5.2), Inches(10.2), Inches(1.2))
    tf = auth_box.text_frame
    tf.word_wrap = True
    p1 = tf.paragraphs[0]
    p1.text = "Faliqul Ishbah"
    p1.font.size = Pt(18)
    p1.font.bold = True
    p1.font.color.rgb = ACCENT_GREEN

    p2 = tf.add_paragraph()
    p2.text = "AI Automation Engineer & Data Scientist  |  Gresik, Jawa Timur, Indonesia"
    p2.font.size = Pt(13)
    p2.font.color.rgb = TEXT_SECONDARY

    p3 = tf.add_paragraph()
    p3.text = "Tech: n8n Workflow Orchestration, LangChain, Hybrid LLMs (Gemini & OpenAI), Supabase pgvector, PostgreSQL"
    p3.font.size = Pt(11)
    p3.font.color.rgb = TEXT_MUTED

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 2: EXECUTIVE SUMMARY & OVERVIEW
    # ══════════════════════════════════════════════════════════════════════════
    s2 = prs.slides.add_slide(blank_layout)
    set_slide_background(s2, prs)
    add_header(s2, "Ringkasan Eksekutif", "Tiga Pilar Solusi AI & Otomasi Berdampak Nyata", ACCENT_BLUE)

    pillars = [
        {
            "tag": "PROYEK 01",
            "title": "OmniCore AI",
            "role": "Omnichannel Conversational Hub",
            "color": ACCENT_BLUE,
            "desc": "Platform asisten hibrida yang beroperasi simultan di WhatsApp, Telegram, dan LINE.",
            "points": [
                "Adaptive RAG bebas halusinasi berbasis dokumen pengetahuan resmi.",
                "Autonomous ETL Google Drive (Spreadsheet, PDF, Docs) ke PostgreSQL JSONB.",
                "Hybrid Semantic Vector Search + Real-Time SQL Query aggregation.",
                "Interaksi manusiawi dengan realistic typing delay dan read receipts."
            ]
        },
        {
            "tag": "PROYEK 02",
            "title": "WhatsApp AI Rental Mobil",
            "role": "Autonomous End-to-End Booking Agent",
            "color": ACCENT_GREEN,
            "desc": "Asisten reservasi rental mobil swalayan 24/7 terhubung langsung ke kalender operasional.",
            "points": [
                "Pemesanan mandiri tanpa antrean admin WhatsApp 24 jam nonstop.",
                "Sinkronisasi real-time Google Calendar mencegah jadwal ganda (anti-double-booking).",
                "Multimodal Audio: Menerima Voice Note (Whisper) & membalas Voice Note (TTS).",
                "Integrasi Webhook Payment Gateway & Auto-Cancel otomatis pesanan kedaluwarsa."
            ]
        },
        {
            "tag": "PROYEK 03",
            "title": "WhatsApp RAG AI Assistant",
            "role": "Academic Knowledge Retrieval Bot",
            "color": ACCENT_PURPLE,
            "desc": "Chatbot cerdas penjawab regulasi akademik & kemahasiswaan berbasis basis data vektor.",
            "points": [
                "Menggantikan pencarian manual ratusan halaman buku panduan kampus.",
                "Pipeline RAG: Chunking dokumen -> OpenAI Embeddings -> Supabase pgvector.",
                "Pencarian Cosine Similarity berakurasi tinggi dengan sumber jawaban tervalidasi.",
                "Akses mobile tanpa hambatan langsung dari aplikasi WhatsApp mahasiswa."
            ]
        }
    ]

    card_w = Inches(3.75)
    card_gap = Inches(0.3)
    start_x = Inches(0.8)

    for i, col in enumerate(pillars):
        x = start_x + i * (card_w + card_gap)
        create_card(s2, x, Inches(1.8), card_w, Inches(5.1))

        tb = s2.shapes.add_textbox(x + Inches(0.25), Inches(2.0), card_w - Inches(0.5), Inches(4.7))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p0 = tf.paragraphs[0]
        p0.text = col["tag"]
        p0.font.size = Pt(10)
        p0.font.bold = True
        p0.font.color.rgb = col["color"]

        p1 = tf.add_paragraph()
        p1.text = col["title"]
        p1.font.size = Pt(18)
        p1.font.bold = True
        p1.font.color.rgb = TEXT_WHITE
        p1.space_after = Pt(2)

        p2 = tf.add_paragraph()
        p2.text = col["role"]
        p2.font.size = Pt(11)
        p2.font.color.rgb = col["color"]
        p2.space_after = Pt(8)

        p3 = tf.add_paragraph()
        p3.text = col["desc"]
        p3.font.size = Pt(11)
        p3.font.color.rgb = TEXT_SECONDARY
        p3.space_after = Pt(12)

        for pt in col["points"]:
            bullet = tf.add_paragraph()
            bullet.text = f"•  {pt}"
            bullet.font.size = Pt(10.5)
            bullet.font.color.rgb = TEXT_MUTED
            bullet.space_after = Pt(6)

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 3: COMMON ARCHITECTURE & TECH STACK
    # ══════════════════════════════════════════════════════════════════════════
    s3 = prs.slides.add_slide(blank_layout)
    set_slide_background(s3, prs)
    add_header(s3, "Arsitektur Teknologi", "Framework & Komponen Ekosistem Otomasi", ACCENT_BLUE)

    layers = [
        {
            "layer": "LAYER 1: USER CHANNELS & MESSAGING GATEWAY",
            "tech": "WhatsApp (WAHA / WhatsApp Cloud API), Telegram Bot API, LINE Messaging API",
            "desc": "Menjembatani pesan masuk dari pengguna di platform pesan instan paling populer secara real-time via Webhook."
        },
        {
            "layer": "LAYER 2: WORKFLOW ORCHESTRATION & AGENTIC LOGIC",
            "tech": "n8n Workflow Automation Platform & LangChain Agents",
            "desc": "Mengatur alur logika dinamis, routing percakapan, memory management, tool execution, dan automasi pemanggilan API."
        },
        {
            "layer": "LAYER 3: HYBRID AI ENGINE & MULTIMODAL INFERENCE",
            "tech": "Google Gemini 1.5/2.0 Flash, OpenAI GPT-4o, OpenAI Whisper (Speech-to-Text) & TTS (Text-to-Speech)",
            "desc": "Memberikan pemahaman bahasa alami (NLU), transkripsi pesan suara, sintesis audio, dan inferensi berbasis guardrails."
        },
        {
            "layer": "LAYER 4: RETRIEVAL-AUGMENTED GENERATION (RAG) & STORAGE",
            "tech": "Supabase (pgvector), PostgreSQL, Google Drive API, Google Calendar API, Google Sheets",
            "desc": "Menyimpan embedding pengetahuan, query SQL tabular, manajemen jadwal ketersediaan armada, dan basis data transaksi."
        }
    ]

    for i, item in enumerate(layers):
        y = Inches(1.8) + i * Inches(1.28)
        create_card(s3, Inches(0.8), y, Inches(11.73), Inches(1.15))

        tb = s3.shapes.add_textbox(Inches(1.1), y + Inches(0.12), Inches(11.1), Inches(0.95))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p0 = tf.paragraphs[0]
        p0.text = item["layer"]
        p0.font.size = Pt(10)
        p0.font.bold = True
        p0.font.color.rgb = ACCENT_BLUE

        p1 = tf.add_paragraph()
        p1.text = item["tech"]
        p1.font.size = Pt(13)
        p1.font.bold = True
        p1.font.color.rgb = TEXT_WHITE
        p1.space_after = Pt(2)

        p2 = tf.add_paragraph()
        p2.text = item["desc"]
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_MUTED

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 4: OMNICORE AI - OVERVIEW & PROBLEM STATEMENT
    # ══════════════════════════════════════════════════════════════════════════
    s4 = prs.slides.add_slide(blank_layout)
    set_slide_background(s4, prs)
    add_header(s4, "Proyek 01: OmniCore AI", "Asisten Omnichannel Cerdas 24/7 Berbasis RAG & SQL Tabular", ACCENT_BLUE)

    # Left Column: Problem & Solution
    create_card(s4, Inches(0.8), Inches(1.8), Inches(6.8), Inches(5.1))
    tb_left = s4.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(6.2), Inches(4.7))
    tf_l = tb_left.text_frame
    tf_l.word_wrap = True
    tf_l.margin_left = tf_l.margin_top = tf_l.margin_right = tf_l.margin_bottom = 0

    p = tf_l.paragraphs[0]
    p.text = "LATAR BELAKANG & TANTANGAN BISNIS"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE

    p = tf_l.add_paragraph()
    p.text = "Komunikasi pelanggan sering tersebar di berbagai aplikasi pesan (WhatsApp, Telegram, LINE). Admin sering kewalahan menjawab pertanyaan berulang, terjadi keterlambatan respon di luar jam kerja, serta risiko tinggi halusinasi jawaban jika menggunakan chatbot generatif standar."
    p.font.size = Pt(11.5)
    p.font.color.rgb = TEXT_SECONDARY
    p.space_after = Pt(10)

    p = tf_l.add_paragraph()
    p.text = "SOLUSI YANG DIKEMBANGKAN"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GREEN

    points = [
        "Satu Otak, Tiga Saluran: Mengintegrasikan WhatsApp (WAHA), Telegram Bot, dan LINE Messaging API ke satu alur orkestrasi n8n terpusat.",
        "Adaptive RAG (Anti-Halusinasi): Jawaban hanya diambil dari dokumen resmi yang diindeks dalam Supabase pgvector.",
        "Autonomous Google Drive Ingestion: Alur otomatis mengekstrak dokumen baru (Excel, PDF, Docs) di Google Drive ke PostgreSQL secara berkala.",
        "Pencarian Gabungan (Hybrid Search): Memadukan pencarian semantik teks dengan query SQL dinamis untuk membaca data tabel (harga, jadwal, daftar inventaris)."
    ]
    for pt in points:
        bp = tf_l.add_paragraph()
        bp.text = f"✔  {pt}"
        bp.font.size = Pt(10.5)
        bp.font.color.rgb = TEXT_MUTED
        bp.space_after = Pt(5)

    # Right Column: Screenshot Card
    create_card(s4, Inches(7.9), Inches(1.8), Inches(4.6), Inches(5.1))
    omni_img_stream = convert_webp_to_png("public/images/project/OmniCore AI/1.webp")
    if omni_img_stream:
        s4.shapes.add_picture(omni_img_stream, Inches(8.1), Inches(2.0), width=Inches(4.2))
    
    cap_box = s4.shapes.add_textbox(Inches(8.1), Inches(6.3), Inches(4.2), Inches(0.5))
    tf_c = cap_box.text_frame
    tf_c.word_wrap = True
    p = tf_c.paragraphs[0]
    p.text = "Antarmuka alur kerja & interaksi asisten OmniCore AI"
    p.font.size = Pt(9.5)
    p.font.color.rgb = TEXT_MUTED
    p.alignment = PP_ALIGN.CENTER

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 5: OMNICORE AI - TECHNICAL ARCHITECTURE & WORKFLOW
    # ══════════════════════════════════════════════════════════════════════════
    s5 = prs.slides.add_slide(blank_layout)
    set_slide_background(s5, prs)
    add_header(s5, "Proyek 01: OmniCore AI", "Arsitektur Alur Kerja n8n & Pipeline Hybrid Retrieval", ACCENT_BLUE)

    steps = [
        {
            "num": "01",
            "title": "Ingestion & ETL Pipeline",
            "points": [
                "Google Drive Webhook mendeteksi upload dokumen (Excel/CSV/PDF).",
                "Data tabel diparsing ke PostgreSQL baris JSONB.",
                "Teks naratif di-chunk dan diubah ke vektor embedding melalui OpenAI/Gemini."
            ]
        },
        {
            "num": "02",
            "title": "Omnichannel Router",
            "points": [
                "Menerima webhook dari WhatsApp (WAHA), Telegram, atau LINE.",
                "Normalisasi format pesan, ID pengguna, dan sesi percakapan.",
                "Mengaktifkan indikator status 'typing' realistis dan read receipt."
            ]
        },
        {
            "num": "03",
            "title": "Hybrid Query Processor",
            "points": [
                "Klasifikasi niat (Intent Classifier): Tanya informasi naratif vs Cek data tabel.",
                "Semantic Search: Cosine similarity via Supabase pgvector.",
                "SQL Engine: Dynamic parameterized SQL untuk perhitungan angka/tabel."
            ]
        },
        {
            "num": "04",
            "title": "Grounded Response Generator",
            "points": [
                "Penggabungan konteks tervalidasi ke dalam prompt LLM.",
                "Guardrail anti-halusinasi: menolak menjawab jika info tidak ada di database.",
                "Mengirim respons rapi ke pengguna di channel asalnya."
            ]
        }
    ]

    card_w = Inches(2.78)
    card_gap = Inches(0.2)
    start_x = Inches(0.8)

    for i, st in enumerate(steps):
        x = start_x + i * (card_w + card_gap)
        create_card(s5, x, Inches(1.8), card_w, Inches(5.1))

        tb = s5.shapes.add_textbox(x + Inches(0.2), Inches(2.0), card_w - Inches(0.4), Inches(4.7))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p0 = tf.paragraphs[0]
        p0.text = st["num"]
        p0.font.size = Pt(28)
        p0.font.bold = True
        p0.font.color.rgb = ACCENT_BLUE

        p1 = tf.add_paragraph()
        p1.text = st["title"]
        p1.font.size = Pt(14)
        p1.font.bold = True
        p1.font.color.rgb = TEXT_WHITE
        p1.space_after = Pt(12)

        for pt in st["points"]:
            bullet = tf.add_paragraph()
            bullet.text = f"• {pt}"
            bullet.font.size = Pt(10.5)
            bullet.font.color.rgb = TEXT_SECONDARY
            bullet.space_after = Pt(8)

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 6: WHATSAPP AI RENTAL MOBIL - OVERVIEW & PROBLEM STATEMENT
    # ══════════════════════════════════════════════════════════════════════════
    s6 = prs.slides.add_slide(blank_layout)
    set_slide_background(s6, prs)
    add_header(s6, "Proyek 02: WhatsApp AI Rental Mobil", "Otomasi Reservasi Rental Mobil Mandiri 24/7 Berbasis AI Agent", ACCENT_GREEN)

    # Left Column: Problem & Solution
    create_card(s6, Inches(0.8), Inches(1.8), Inches(6.8), Inches(5.1))
    tb_left = s6.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(6.2), Inches(4.7))
    tf_l = tb_left.text_frame
    tf_l.word_wrap = True
    tf_l.margin_left = tf_l.margin_top = tf_l.margin_right = tf_l.margin_bottom = 0

    p = tf_l.paragraphs[0]
    p.text = "MASALAH OPERASIONAL RENTAL MOBIL KONVENSIONAL"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GREEN

    p = tf_l.add_paragraph()
    p.text = "Bisnis rental mobil konvensional bergantung pada admin manual untuk membalas chat WhatsApp. Kendala fatal yang sering terjadi: lambat merespon pemesanan di luar jam kantor, sering salah catat jadwal berujung double-booking armada, perhitungan DP dan biaya supir yang keliru, serta booking gantung yang tidak dibayar."
    p.font.size = Pt(11.5)
    p.font.color.rgb = TEXT_SECONDARY
    p.space_after = Pt(10)

    p = tf_l.add_paragraph()
    p.text = "SOLUSI YANG DIBANGUN DENGAN N8N & LANGCHAIN"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE

    points = [
        "Self-Service 24/7 Booking: Pelanggan dapat reservasi mobil kapan pun tanpa perlu menunggu konfirmasi admin manual.",
        "Verifikasi Jadwal Real-Time: Agen AI memeriksa Google Calendar secara langsung agar tidak terjadi jadwal ganda pada armada yang sama.",
        "Dukungan Multimodal Audio: Pelanggan bisa mengirimkan Voice Note, AI mentranskripsinya via Whisper dan membalas dengan audio ramah via TTS.",
        "Background Auto-Cancellation: Cron job otomatis membatalkan pesanan yang belum dibayar dalam batas waktu tertentu dan mengosongkan jadwal kembali."
    ]
    for pt in points:
        bp = tf_l.add_paragraph()
        bp.text = f"✔  {pt}"
        bp.font.size = Pt(10.5)
        bp.font.color.rgb = TEXT_MUTED
        bp.space_after = Pt(5)

    # Right Column: Screenshot Card
    create_card(s6, Inches(7.9), Inches(1.8), Inches(4.6), Inches(5.1))
    rental_img_stream = convert_webp_to_png("public/images/project/Rental Mobil/1.webp")
    if rental_img_stream:
        s6.shapes.add_picture(rental_img_stream, Inches(8.1), Inches(2.0), width=Inches(4.2))
    
    cap_box = s6.shapes.add_textbox(Inches(8.1), Inches(6.3), Inches(4.2), Inches(0.5))
    tf_c = cap_box.text_frame
    tf_c.word_wrap = True
    p = tf_c.paragraphs[0]
    p.text = "Percakapan reservasi & verifikasi jadwal booking otomatis"
    p.font.size = Pt(9.5)
    p.font.color.rgb = TEXT_MUTED
    p.alignment = PP_ALIGN.CENTER

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 7: WHATSAPP AI RENTAL MOBIL - DETAILED WORKFLOW & CAPABILITIES
    # ══════════════════════════════════════════════════════════════════════════
    s7 = prs.slides.add_slide(blank_layout)
    set_slide_background(s7, prs)
    add_header(s7, "Proyek 02: WhatsApp AI Rental Mobil", "Mekanisme Pemesanan, Multimodal Voice, & Integrasi Pembayaran", ACCENT_GREEN)

    feature_cards = [
        {
            "title": "1. Pemrosesan Multimodal Audio",
            "desc": "WhatsApp Voice Note -> OpenAI Whisper (transkripsi akurat) -> LangChain Agent memproses isi -> Respons disintesis kembali via OpenAI TTS menjadi audio WhatsApp natural."
        },
        {
            "title": "2. Verifikasi Jadwal & Anti Double-Booking",
            "desc": "Pengecekan live ke Google Calendar API. Jika armada A sedang disewa pada tanggal permintaan, AI merekomendasikan armada alternatif yang tersedia tanpa error."
        },
        {
            "title": "3. Kalkulasi Otomatis DP & Tambahan Biaya",
            "desc": "AI menghitung durasi hari sewa, biaya supir (all-in / lepas kunci), diskon durasi, dan nominal Down Payment (DP) secara presisi sebelum menerbitkan instruksi bayar."
        },
        {
            "title": "4. Webhook Pembayaran & Auto-Cancel",
            "desc": "Payment Gateway memicu Webhook n8n saat DP terbayar (status 'Confirmed'). Jika 15 menit belum dibayar, background cron job otomatis merilis jadwal kalender."
        }
    ]

    for i, fc in enumerate(feature_cards):
        row = i // 2
        col = i % 2
        x = Inches(0.8) + col * Inches(5.95)
        y = Inches(1.8) + row * Inches(2.5)

        create_card(s7, x, y, Inches(5.75), Inches(2.3))

        tb = s7.shapes.add_textbox(x + Inches(0.25), y + Inches(0.2), Inches(5.25), Inches(1.9))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p0 = tf.paragraphs[0]
        p0.text = fc["title"]
        p0.font.size = Pt(14)
        p0.font.bold = True
        p0.font.color.rgb = ACCENT_GREEN
        p0.space_after = Pt(6)

        p1 = tf.add_paragraph()
        p1.text = fc["desc"]
        p1.font.size = Pt(11)
        p1.font.color.rgb = TEXT_SECONDARY

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 8: WHATSAPP RAG AI ASSISTANT - OVERVIEW & CAMPUS GUIDANCE
    # ══════════════════════════════════════════════════════════════════════════
    s8 = prs.slides.add_slide(blank_layout)
    set_slide_background(s8, prs)
    add_header(s8, "Proyek 03: WhatsApp RAG AI Assistant", "Pusat Informasi Akademik & Regulasi Kampus Bebas Halusinasi", ACCENT_PURPLE)

    # Left Column
    create_card(s8, Inches(0.8), Inches(1.8), Inches(6.8), Inches(5.1))
    tb_left = s8.shapes.add_textbox(Inches(1.1), Inches(2.0), Inches(6.2), Inches(4.7))
    tf_l = tb_left.text_frame
    tf_l.word_wrap = True
    tf_l.margin_left = tf_l.margin_top = tf_l.margin_right = tf_l.margin_bottom = 0

    p = tf_l.paragraphs[0]
    p.text = "TANTANGAN INFORMASI AKADEMIK MAHASISWA"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_PURPLE

    p = tf_l.add_paragraph()
    p.text = "Dokumen akademik, panduan KRS, skripsi, magang, dan beasiswa umumnya tersebar dalam berkas PDF tebal puluhan hingga ratusan halaman. Mahasiswa enggan membaca dokumen panjang dan sering bertanya berulang ke bagian akademik yang memiliki batas jam operasional kantor."
    p.font.size = Pt(11.5)
    p.font.color.rgb = TEXT_SECONDARY
    p.space_after = Pt(10)

    p = tf_l.add_paragraph()
    p.text = "SOLUSI RAG VIA WHATSAPP"
    p.font.size = Pt(11)
    p.font.bold = True
    p.font.color.rgb = ACCENT_BLUE

    points = [
        "Akses Instan 24 Jam: Mahasiswa cukup chat WhatsApp seperti bertanya ke teman, bot menjawab dalam hitungan detik.",
        "Jawaban Tervalidasi & Bebas Halusinasi: Bot hanya menyajikan jawaban yang bersumber langsung dari buku pedoman resmi kampus.",
        "Pencarian Konseptual (Semantic): Mahasiswa tidak perlu menggunakan kata kunci persis; pemahaman makna (intent) dijembatani oleh model vektor.",
        "Penghematan Beban Admin Akademik: Mengurangi hingga 80% pertanyaan repetitif seputar jadwal, syarat yudisium, dan prosedur kampus."
    ]
    for pt in points:
        bp = tf_l.add_paragraph()
        bp.text = f"✔  {pt}"
        bp.font.size = Pt(10.5)
        bp.font.color.rgb = TEXT_MUTED
        bp.space_after = Pt(5)

    # Right Column: Screenshot Card
    create_card(s8, Inches(7.9), Inches(1.8), Inches(4.6), Inches(5.1))
    rag_img_stream = convert_webp_to_png("public/images/project/chatbot_ai/1.webp")
    if rag_img_stream:
        s8.shapes.add_picture(rag_img_stream, Inches(8.1), Inches(2.0), width=Inches(4.2))
    
    cap_box = s8.shapes.add_textbox(Inches(8.1), Inches(6.3), Inches(4.2), Inches(0.5))
    tf_c = cap_box.text_frame
    tf_c.word_wrap = True
    p = tf_c.paragraphs[0]
    p.text = "Contoh tanya jawab mahasiswa seputar regulasi kampus di WhatsApp"
    p.font.size = Pt(9.5)
    p.font.color.rgb = TEXT_MUTED
    p.alignment = PP_ALIGN.CENTER

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 9: WHATSAPP RAG AI ASSISTANT - RAG PIPELINE & VECTOR DB
    # ══════════════════════════════════════════════════════════════════════════
    s9 = prs.slides.add_slide(blank_layout)
    set_slide_background(s9, prs)
    add_header(s9, "Proyek 03: WhatsApp RAG AI Assistant", "Implementasi Pipeline RAG: Chunking, Embedding, & Similarity Search", ACCENT_PURPLE)

    rag_stages = [
        {
            "step": "STAGE 1",
            "title": "Data Preparation & Chunking",
            "desc": "Buku pedoman akademik dipecah menjadi unit-unit teks logis (chunking) dengan overlap optimal agar konteks kalimat tidak terpotong."
        },
        {
            "step": "STAGE 2",
            "title": "Vector Embedding Generation",
            "desc": "Setiap chunk teks dikonversi menjadi representasi vektor numerik berdimensi tinggi menggunakan OpenAI text-embedding-3-small."
        },
        {
            "step": "STAGE 3",
            "title": "Vector Indexing di Supabase pgvector",
            "desc": "Vektor dan metadata disimpan dalam PostgreSQL Supabase menggunakan ekstensi pgvector dan indeks HNSW untuk pencarian milidetik."
        },
        {
            "step": "STAGE 4",
            "title": "Similarity Search & Prompt Augmentation",
            "desc": "Pertanyaan mahasiswa dikonversi ke vektor, lalu dilakukan pencarian Cosine Similarity untuk mengambil top-K chunk paling relevan sebagai acuan LLM."
        }
    ]

    for i, stage in enumerate(rag_stages):
        y = Inches(1.8) + i * Inches(1.28)
        create_card(s9, Inches(0.8), y, Inches(11.73), Inches(1.15))

        tb = s9.shapes.add_textbox(Inches(1.1), y + Inches(0.12), Inches(11.1), Inches(0.95))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p0 = tf.paragraphs[0]
        p0.text = stage["step"]
        p0.font.size = Pt(10)
        p0.font.bold = True
        p0.font.color.rgb = ACCENT_PURPLE

        p1 = tf.add_paragraph()
        p1.text = stage["title"]
        p1.font.size = Pt(13)
        p1.font.bold = True
        p1.font.color.rgb = TEXT_WHITE
        p1.space_after = Pt(2)

        p2 = tf.add_paragraph()
        p2.text = stage["desc"]
        p2.font.size = Pt(10.5)
        p2.font.color.rgb = TEXT_MUTED

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 10: COMPARATIVE MATRIX TABLE
    # ══════════════════════════════════════════════════════════════════════════
    s10 = prs.slides.add_slide(blank_layout)
    set_slide_background(s10, prs)
    add_header(s10, "Analisis Komparatif", "Perbandingan Fitur, Arsitektur, & Penggunaan Tiga Solusi", ACCENT_BLUE)

    # Table layout
    rows = 6
    cols = 4
    left = Inches(0.8)
    top = Inches(1.8)
    width = Inches(11.73)
    height = Inches(5.0)

    table_shape = s10.shapes.add_table(rows, cols, left, top, width, height)
    tbl = table_shape.table

    # Set column widths
    tbl.columns[0].width = Inches(2.2)
    tbl.columns[1].width = Inches(3.17)
    tbl.columns[2].width = Inches(3.17)
    tbl.columns[3].width = Inches(3.19)

    table_data = [
        ["Parameter", "OmniCore AI", "WhatsApp AI Rental Mobil", "WhatsApp RAG AI Assistant"],
        ["Fokus Utama", "Omnichannel Conversational Hub", "Autonomous Car Rental Booking", "Campus Academic Guidance"],
        ["Saluran Komunikasi", "WhatsApp (WAHA), Telegram, LINE", "WhatsApp Cloud API (Text & Voice)", "WhatsApp API (Mobile Chat)"],
        ["Model Kecerdasan", "Google Gemini & OpenAI GPT", "LangChain Agent + Whisper & TTS", "OpenAI Embeddings + GPT"],
        ["Penyimpanan Data", "Supabase pgvector + PostgreSQL", "Google Calendar API + PostgreSQL", "Supabase pgvector + PostgreSQL"],
        ["Keunggulan Kunci", "Autonomous ETL Drive & Hybrid SQL", "Multimodal Voice & Anti Double-Booking", "Zero-Hallucination Academic RAG"]
    ]

    for r_idx, row in enumerate(table_data):
        for c_idx, cell_text in enumerate(row):
            cell = tbl.cell(r_idx, c_idx)
            cell.text = cell_text
            cell.fill.solid()
            if r_idx == 0:
                cell.fill.fore_color.rgb = RGBColor(28, 38, 62)
            else:
                cell.fill.fore_color.rgb = CARD_BG if r_idx % 2 == 1 else RGBColor(16, 21, 34)

            for p in cell.text_frame.paragraphs:
                p.alignment = PP_ALIGN.LEFT
                if r_idx == 0:
                    p.font.bold = True
                    p.font.size = Pt(11)
                    p.font.color.rgb = ACCENT_BLUE
                else:
                    p.font.size = Pt(10)
                    if c_idx == 0:
                        p.font.bold = True
                        p.font.color.rgb = TEXT_WHITE
                    else:
                        p.font.color.rgb = TEXT_SECONDARY

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 11: BUSINESS VALUE & MEASURABLE IMPACT
    # ══════════════════════════════════════════════════════════════════════════
    s11 = prs.slides.add_slide(blank_layout)
    set_slide_background(s11, prs)
    add_header(s11, "Nilai Bisnis & Dampak Nyata", "Manfaat Operasional dari Penerapan Sistem AI & Otomasi", ACCENT_GREEN)

    impacts = [
        {
            "metric": "24/7",
            "title": "Ketersediaan Nonstop",
            "desc": "Layanan selalu aktif sepanjang waktu tanpa mengenal libur, melayani pelanggan saat jam istirahat dan malam hari ketika staf manusia offline."
        },
        {
            "metric": "0 Detik",
            "title": "Waktu Tunggu Respon",
            "desc": "Pertanyaan dan reservasi diproses instan dalam hitungan detik. Mengeliminasi antrean chat dan mencegah pelanggan berpindah ke kompetitor."
        },
        {
            "metric": "100%",
            "title": "Akurasi Jadwal & Data",
            "desc": "Pengecekan langsung kalender operasional dan database memastikan tidak ada double-booking armada dan kesalahan hitung DP."
        },
        {
            "metric": "80%",
            "title": "Pengurangan Beban Rutin",
            "desc": "Mengotomasikan hingga 80% pertanyaan berulang dan alur administrasi manual, sehingga tim dapat fokus pada hal strategis dan closing penjualan."
        }
    ]

    card_w = Inches(2.78)
    card_gap = Inches(0.2)
    start_x = Inches(0.8)

    for i, imp in enumerate(impacts):
        x = start_x + i * (card_w + card_gap)
        create_card(s11, x, Inches(1.8), card_w, Inches(5.1))

        tb = s11.shapes.add_textbox(x + Inches(0.2), Inches(2.2), card_w - Inches(0.4), Inches(4.3))
        tf = tb.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

        p0 = tf.paragraphs[0]
        p0.text = imp["metric"]
        p0.font.size = Pt(36)
        p0.font.bold = True
        p0.font.color.rgb = ACCENT_GREEN
        p0.space_after = Pt(4)

        p1 = tf.add_paragraph()
        p1.text = imp["title"]
        p1.font.size = Pt(15)
        p1.font.bold = True
        p1.font.color.rgb = TEXT_WHITE
        p1.space_after = Pt(12)

        p2 = tf.add_paragraph()
        p2.text = imp["desc"]
        p2.font.size = Pt(11)
        p2.font.color.rgb = TEXT_MUTED

    # ══════════════════════════════════════════════════════════════════════════
    # SLIDE 12: CONCLUSION & CONTACT INFORMATION
    # ══════════════════════════════════════════════════════════════════════════
    s12 = prs.slides.add_slide(blank_layout)
    set_slide_background(s12, prs)
    add_header(s12, "Penutup & Kontak Pengembang", "Membangun Solusi AI & Otomasi Berdampak untuk Masa Depan", ACCENT_BLUE)

    create_card(s12, Inches(0.8), Inches(1.8), Inches(11.73), Inches(5.1))

    tb = s12.shapes.add_textbox(Inches(1.2), Inches(2.1), Inches(10.9), Inches(4.5))
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0

    p = tf.paragraphs[0]
    p.text = "Faliqul Ishbah"
    p.font.size = Pt(24)
    p.font.bold = True
    p.font.color.rgb = TEXT_WHITE

    p = tf.add_paragraph()
    p.text = "AI Automation Engineer • Data Scientist • Fullstack & Frontend Developer"
    p.font.size = Pt(13)
    p.font.color.rgb = ACCENT_BLUE
    p.space_after = Pt(16)

    p = tf.add_paragraph()
    p.text = "Komitmen Pengembangan:"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_GREEN

    p = tf.add_paragraph()
    p.text = "Tiga proyek ini merepresentasikan kapabilitas end-to-end dalam merancang arsitektur AI yang tidak hanya cerdas di atas kertas, tetapi terbukti tangguh dan terintegrasi langsung dengan ekosistem bisnis nyata (messaging API, workflow engine, payment gateway, dan database vektor)."
    p.font.size = Pt(11)
    p.font.color.rgb = TEXT_SECONDARY
    p.space_after = Pt(20)

    p = tf.add_paragraph()
    p.text = "Tautan & Kontak Resmi:"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = ACCENT_ORANGE

    contacts = [
        "🌐 Website Portofolio: https://faliq-portfolio.vercel.app/",
        "💼 LinkedIn: https://www.linkedin.com/in/faliqulishbah/",
        "🐙 GitHub: https://github.com/Faliqulxx",
        "✉️ Email: faliqul.isback@gmail.com",
        "📍 Lokasi: Gresik, Jawa Timur, Indonesia"
    ]
    for c in contacts:
        cp = tf.add_paragraph()
        cp.text = c
        cp.font.size = Pt(11)
        cp.font.color.rgb = TEXT_MUTED
        cp.space_after = Pt(4)

    output_path = "Dokumentasi_Proyek_AI_Faliqul_Ishbah.pptx"
    prs.save(output_path)
    print(f"Presentation successfully created: {output_path}")

if __name__ == "__main__":
    main()

