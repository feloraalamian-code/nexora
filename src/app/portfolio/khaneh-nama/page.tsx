
"use client";

import { useMemo, useState } from "react";

type Property = {
  id: number;
  title: string;
  location: string;
  city: string;
  price: number;
  priceText: string;
  area: number;
  rooms: number;
  image: string;
  type: "buy" | "rent";
  featured?: boolean;
  description: string;
};

const properties: Property[] = [
  {
    id: 1,
    title: "آپارتمان مدرن با تراس اختصاصی",
    location: "الهیه، خیابان فرشته",
    city: "تهران",
    price: 18500000000,
    priceText: "۱۸ میلیارد و ۵۰۰ میلیون",
    area: 185,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
    type: "buy",
    featured: true,
    description: "واحدی لوکس با طراحی مدرن، نورگیری عالی، تراس بزرگ و متریال باکیفیت."
  },
  {
    id: 2,
    title: "ویلای مدرن با استخر اختصاصی",
    location: "لواسان، منطقه سبز",
    city: "تهران",
    price: 42000000000,
    priceText: "۴۲ میلیارد",
    area: 320,
    rooms: 4,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=85",
    type: "buy",
    featured: true,
    description: "ویلای مستقل با محوطه‌سازی حرفه‌ای، استخر و چشم‌انداز زیبا."
  },
  {
    id: 3,
    title: "آپارتمان مینیمال و نورگیر",
    location: "زعفرانیه، خیابان آصف",
    city: "تهران",
    price: 12500000000,
    priceText: "۱۲ میلیارد و ۵۰۰ میلیون",
    area: 140,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85",
    type: "buy",
    description: "آپارتمانی خوش‌نقشه با طراحی داخلی مینیمال و امکانات کامل."
  },
  {
    id: 4,
    title: "خانه ویلایی با معماری خاص",
    location: "کردان، شهرک ویلایی",
    city: "کرج",
    price: 28000000000,
    priceText: "۲۸ میلیارد",
    area: 450,
    rooms: 4,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=85",
    type: "buy",
    description: "ویلای مدرن با حیاط بزرگ، فضای سبز و معماری چشم‌نواز."
  },
  {
    id: 5,
    title: "واحد لوکس با طراحی معاصر",
    location: "نیاوران، خیابان باهنر",
    city: "تهران",
    price: 95000000,
    priceText: "۹۵ میلیون",
    area: 160,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1000&q=85",
    type: "rent",
    description: "واحدی خوش‌ساخت با امکانات رفاهی و دسترسی مناسب."
  },
  {
    id: 6,
    title: "آپارتمان دلباز با منظره شهر",
    location: "سعادت‌آباد، بلوار دریا",
    city: "تهران",
    price: 65000000,
    priceText: "۶۵ میلیون",
    area: 130,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&q=85",
    type: "rent",
    description: "واحدی روشن با نقشه کاربردی و چشم‌انداز شهری."
  },
  {
    id: 7,
    title: "خانه مدرن با فضای باز",
    location: "دماوند، منطقه گیلاوند",
    city: "دماوند",
    price: 8900000000,
    priceText: "۸ میلیارد و ۹۰۰ میلیون",
    area: 260,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1000&q=85",
    type: "buy",
    description: "خانه‌ای مستقل با فضای باز و طراحی داخلی گرم و مدرن."
  },
  {
    id: 8,
    title: "پنت‌هاوس با تراس بزرگ",
    location: "ولنجک، خیابان سیزدهم",
    city: "تهران",
    price: 140000000,
    priceText: "۱۴۰ میلیون",
    area: 220,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=85",
    type: "rent",
    description: "پنت‌هاوسی لوکس با تراس اختصاصی و چشم‌انداز باز."
  }
];

const money = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

export default function KhanehNamaPage() {
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");
  const [minRooms, setMinRooms] = useState("all");
  const [selected, setSelected] = useState<Property | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [visitSent, setVisitSent] = useState(false);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchesType =
        activeType === "all" || p.type === activeType;

      const matchesSearch =
        !search.trim() ||
        `${p.title} ${p.location} ${p.city}`.includes(search.trim());

      const matchesRooms =
        minRooms === "all" || p.rooms >= Number(minRooms);

      return matchesType && matchesSearch && matchesRooms;
    });
  }, [activeType, search, minRooms]);

  const visibleProperties = showAll
    ? filtered
    : filtered.slice(0, 6);

  function openProperty(p: Property) {
    setSelected(p);
    setVisitSent(false);
  }

  return (
    <main className="kn" dir="rtl">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .kn {
          --ink: #202b36;
          --muted: #78818a;
          --gold: #b69a69;
          --cream: #f8f7f3;
          font-family: 'Vazirmatn', sans-serif;
          background: #fff;
          color: var(--ink);
          overflow: hidden;
        }

        .kn button,
        .kn input,
        .kn select {
          font-family: inherit;
        }

        .kn button {
          cursor: pointer;
        }

        .kn-container {
          width: min(1180px, calc(100% - 44px));
          margin: auto;
        }

        .kn-header {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeea;
          background: #fff;
          position: relative;
          z-index: 5;
        }

        .kn-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 22px;
          font-weight: 900;
          color: var(--ink);
          text-decoration: none;
        }

        .kn-logo-icon {
          width: 43px;
          height: 43px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: var(--ink);
          color: #d7bd91;
          font-size: 23px;
        }

        .kn-nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .kn-nav a {
          text-decoration: none;
          color: #5f6871;
          font-size: 13px;
          transition: .2s;
        }

        .kn-nav a:hover {
          color: var(--gold);
        }

        .kn-header-btn {
          background: var(--ink);
          color: white;
          border: 0;
          border-radius: 7px;
          padding: 12px 20px;
          font-size: 12px;
        }

        .kn-hero {
          background: #f4f2ec;
          padding: 65px 0 58px;
          position: relative;
        }

        .kn-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.03fr;
          align-items: center;
          gap: 50px;
        }

        .kn-eyebrow {
          color: #a58a5e;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .kn-hero h1 {
          font-size: clamp(32px, 4.1vw, 54px);
          line-height: 1.65;
          font-weight: 800;
          margin: 0;
          color: #25313c;
        }

        .kn-hero h1 span {
          color: #a58a5e;
        }

        .kn-hero-desc {
          color: #737b80;
          font-size: 14px;
          line-height: 2.4;
          max-width: 440px;
          margin: 17px 0 25px;
        }

        .kn-hero-actions {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .kn-primary {
          border: 0;
          border-radius: 7px;
          padding: 14px 23px;
          background: #26333e;
          color: #fff;
          font-size: 13px;
          transition: .2s;
        }

        .kn-primary:hover {
          background: #a58a5e;
          transform: translateY(-2px);
        }

        .kn-text-link {
          color: #4e5960;
          text-decoration: none;
          font-size: 13px;
        }

        .kn-hero-visual {
          height: 390px;
          position: relative;
        }

        .kn-hero-photo {
          width: 88%;
          height: 100%;
          margin-right: auto;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          background: #ddd9d0;
        }

        .kn-hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .kn-hero-tag {
          position: absolute;
          bottom: 24px;
          right: 0;
          background: #fff;
          padding: 17px 22px;
          min-width: 190px;
          box-shadow: 0 12px 35px #00000012;
        }

        .kn-hero-tag small {
          display: block;
          color: #9b8b71;
          font-size: 10px;
        }

        .kn-hero-tag strong {
          font-size: 15px;
          display: block;
          margin-top: 6px;
        }

        .kn-stats {
          background: #26333e;
          color: #fff;
          padding: 25px 0;
        }

        .kn-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          text-align: center;
        }

        .kn-stat {
          border-left: 1px solid #ffffff20;
        }

        .kn-stat:last-child {
          border: 0;
        }

        .kn-stat strong {
          font-size: 23px;
          display: block;
          color: #d8c29c;
        }

        .kn-stat span {
          font-size: 11px;
          color: #d3d7d8;
        }

        .kn-section {
          padding: 75px 0;
        }

        .kn-section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 28px;
          gap: 15px;
        }

        .kn-section-head h2 {
          font-size: 28px;
          margin: 6px 0 0;
          color: #27343e;
        }

        .kn-section-head p {
          color: #879096;
          font-size: 12px;
          margin: 7px 0 0;
        }

        .kn-filter {
          display: flex;
          gap: 9px;
          align-items: center;
          flex-wrap: wrap;
          background: #f8f7f4;
          border: 1px solid #efeee9;
          padding: 13px;
          border-radius: 9px;
          margin-bottom: 30px;
        }

        .kn-search {
          flex: 1;
          min-width: 180px;
          display: flex;
          align-items: center;
          gap: 9px;
          background: #fff;
          border: 1px solid #e9e8e3;
          padding: 0 12px;
          border-radius: 6px;
          height: 43px;
        }

        .kn-search input {
          width: 100%;
          border: 0;
          outline: 0;
          font-size: 12px;
          background: transparent;
          color: var(--ink);
        }

        .kn-select {
          height: 43px;
          border: 1px solid #e9e8e3;
          border-radius: 6px;
          background: white;
          padding: 0 12px;
          font-size: 12px;
          color: #56616a;
          outline: none;
        }

        .kn-tabs {
          display: flex;
          gap: 5px;
          background: #fff;
          padding: 4px;
          border: 1px solid #e9e8e3;
          border-radius: 7px;
        }

        .kn-tab {
          border: 0;
          background: transparent;
          padding: 10px 14px;
          font-size: 11px;
          color: #69737b;
          border-radius: 5px;
        }

        .kn-tab.active {
          background: #26333e;
          color: white;
        }

        .kn-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .kn-card {
          border: 1px solid #ecece8;
          border-radius: 9px;
          overflow: hidden;
          background: #fff;
          transition: .3s;
        }

        .kn-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px #17232c12;
        }

        .kn-card-image {
          height: 225px;
          position: relative;
          background: #e8e5de;
          overflow: hidden;
        }

        .kn-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .6s;
        }

        .kn-card:hover .kn-card-image img {
          transform: scale(1.05);
        }

        .kn-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 10px;
          color: #34414b;
        }

        .kn-card-content {
          padding: 19px;
        }

        .kn-card-location {
          font-size: 11px;
          color: #9a886a;
          margin-bottom: 9px;
        }

        .kn-card h3 {
          font-size: 15px;
          margin: 0 0 17px;
          font-weight: 700;
        }

        .kn-card-meta {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #efefec;
          padding-bottom: 15px;
          color: #7e878c;
          font-size: 11px;
        }

        .kn-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          gap: 8px;
        }

        .kn-price small {
          display: block;
          font-size: 10px;
          color: #9ba1a2;
        }

        .kn-price strong {
          font-size: 13px;
          color: #27343e;
        }

        .kn-detail-btn {
          border: 1px solid #dcd8ce;
          background: white;
          color: #35414b;
          padding: 9px 12px;
          border-radius: 5px;
          font-size: 10px;
        }

        .kn-detail-btn:hover {
          background: #26333e;
          color: white;
          border-color: #26333e;
        }

        .kn-empty {
          grid-column: 1 / -1;
          padding: 60px 20px;
          text-align: center;
          background: #f8f7f4;
          color: #777;
          border-radius: 8px;
        }

        .kn-view-all {
          display: block;
          margin: 35px auto 0;
          border: 1px solid #d8d3c8;
          background: white;
          padding: 13px 28px;
          border-radius: 5px;
          color: #35414b;
          font-size: 12px;
        }

        .kn-view-all:hover {
          background: #26333e;
          color: white;
        }

        .kn-feature {
          background: #f5f4ef;
          padding: 65px 0;
        }

        .kn-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .kn-feature-image {
          height: 350px;
          overflow: hidden;
          background: #ddd;
        }

        .kn-feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .kn-feature h2 {
          font-size: 29px;
          line-height: 1.8;
          margin: 8px 0 15px;
        }

        .kn-feature p {
          color: #7d8588;
          line-height: 2.5;
          font-size: 13px;
        }

        .kn-feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 24px;
        }

        .kn-feature-list div {
          font-size: 12px;
          color: #47535a;
        }

        .kn-feature-list span {
          color: #a58a5e;
          margin-left: 7px;
        }

        .kn-contact {
          padding: 70px 0;
          text-align: center;
        }

        .kn-contact h2 {
          font-size: 27px;
          margin: 8px 0;
        }

        .kn-contact p {
          color: #81898c;
          font-size: 13px;
          line-height: 2;
        }

        .kn-contact-btn {
          display: inline-block;
          margin-top: 15px;
          background: #26333e;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          padding: 14px 25px;
          font-size: 12px;
          border: 0;
        }

        .kn-footer {
          background: #202c36;
          color: #fff;
          padding: 35px 0;
        }

        .kn-footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .kn-footer p {
          color: #aab1b5;
          font-size: 11px;
          margin: 7px 0 0;
        }

        .kn-footer a {
          color: #d8c29c;
          text-decoration: none;
          font-size: 12px;
        }

        .kn-modal-backdrop {
          position: fixed;
          inset: 0;
          background: #17212bd9;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .kn-modal {
          width: min(750px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          background: white;
          border-radius: 12px;
          position: relative;
        }

        .kn-modal-image {
          height: 290px;
          background: #ddd;
        }

        .kn-modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .kn-close {
          position: absolute;
          top: 14px;
          left: 14px;
          border: 0;
          background: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 20px;
          z-index: 2;
        }

        .kn-modal-content {
          padding: 26px;
        }

        .kn-modal-content h2 {
          font-size: 22px;
          margin: 8px 0;
        }

        .kn-modal-content p {
          color: #778087;
          font-size: 13px;
          line-height: 2.2;
        }

        .kn-modal-info {
          display: flex;
          gap: 25px;
          padding: 16px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          font-size: 12px;
        }

        .kn-visit-form {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .kn-visit-form input {
          flex: 1;
          min-width: 0;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          outline: none;
        }

        .kn-success {
          background: #eef5ed;
          color: #376b42;
          padding: 12px;
          border-radius: 6px;
          font-size: 12px;
          margin-top: 15px;
        }

        @media(max-width: 900px) {
          .kn-hero-grid {
            gap: 25px;
          }

          .kn-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .kn-nav {
            gap: 15px;
          }
        }

        @media(max-width: 650px) {
          .kn-container {
            width: calc(100% - 30px);
          }

          .kn-header {
            height: 70px;
          }

          .kn-nav {
            display: none;
          }

          .kn-logo {
            font-size: 19px;
          }

          .kn-hero {
            padding: 42px 0;
          }

          .kn-hero-grid {
            grid-template-columns: 1fr;
          }

          .kn-hero h1 {
            font-size: 34px;
          }

          .kn-hero-visual {
            height: 270px;
          }

          .kn-hero-photo {
            width: 94%;
          }

          .kn-hero-tag {
            bottom: 12px;
          }

          .kn-stats-grid {
            gap: 8px;
          }

          .kn-stat strong {
            font-size: 19px;
          }

          .kn-stat span {
            font-size: 9px;
          }

          .kn-section {
            padding: 48px 0;
          }

          .kn-section-head {
            align-items: start;
            flex-direction: column;
          }

          .kn-section-head h2 {
            font-size: 23px;
          }

          .kn-filter {
            align-items: stretch;
          }

          .kn-search {
            flex-basis: 100%;
          }

          .kn-select {
            flex: 1;
          }

          .kn-tabs {
            width: 100%;
          }

          .kn-tab {
            flex: 1;
          }

          .kn-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .kn-card-image {
            height: 230px;
          }

          .kn-feature-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .kn-feature-image {
            height: 260px;
          }

          .kn-feature h2 {
            font-size: 24px;
          }

          .kn-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .kn-visit-form {
            flex-direction: column;
          }

          .kn-modal-image {
            height: 210px;
          }

          .kn-modal-info {
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}</style>

      <header className="kn-header">
        <div
          className="kn-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <a href="#" className="kn-logo">
            <span className="kn-logo-icon">⌂</span>
            خانه‌نما
          </a>

          <nav className="kn-nav">
            <a href="#">صفحه اصلی</a>
            <a href="#properties">جست‌وجوی ملک</a>
            <a href="#about">درباره ما</a>
            <a href="#contact">تماس با ما</a>
          </nav>

          <button
            className="kn-header-btn"
            onClick={() =>
              document.getElementById("properties")?.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            مشاهده املاک
          </button>
        </div>
      </header>

      <section className="kn-hero">
        <div className="kn-container kn-hero-grid">
          <div>
            <div className="kn-eyebrow">خانه‌ای برای زندگی بهتر</div>

            <h1>
              جایی که
              <br />
              <span>زندگی تازه</span>
              <br />
              آغاز می‌شود.
            </h1>

            <p className="kn-hero-desc">
              خانه‌ای که همیشه تصورش را داشته‌اید، شاید همین‌جا منتظر شما باشد.
              با خانه‌نما، انتخاب خانه مناسب ساده‌تر از همیشه است.
            </p>

            <div className="kn-hero-actions">
              <button
                className="kn-primary"
                onClick={() =>
                  document.getElementById("properties")?.scrollIntoView({
                    behavior: "smooth"
                  })
                }
              >
                کشف خانه‌ها ←
              </button>

              <a href="#about" className="kn-text-link">
                بیشتر درباره ما
              </a>
            </div>
          </div>

          <div className="kn-hero-visual">
            <div className="kn-hero-photo">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85"
                alt="خانه مدرن"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="kn-hero-tag">
              <small>انتخاب ویژه خانه‌نما</small>
              <strong>خانه‌ای فراتر از انتظار</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="kn-stats">
        <div className="kn-container kn-stats-grid">
          <div className="kn-stat">
            <strong>+۲۵۰</strong>
            <span>ملک منتخب</span>
          </div>

          <div className="kn-stat">
            <strong>+۱۸۰</strong>
            <span>معامله موفق</span>
          </div>

          <div className="kn-stat">
            <strong>+۱۲</strong>
            <span>منطقه تحت پوشش</span>
          </div>
        </div>
      </section>

      <section className="kn-section" id="properties">
        <div className="kn-container">
          <div className="kn-section-head">
            <div>
              <div className="kn-eyebrow">مجموعه املاک</div>
              <h2>خانه مورد علاقه‌تان را پیدا کنید</h2>
              <p>
                از میان گزینه‌های منتخب، خانه مناسب خود را انتخاب کنید.
              </p>
            </div>

            <span style={{ color: "#a58a5e", fontSize: 12 }}>
              {money(filtered.length)} ملک
            </span>
          </div>

          <div className="kn-filter">
            <div className="kn-search">
              <span>⌕</span>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowAll(false);
                }}
                placeholder="جست‌وجوی نام ملک، شهر یا منطقه..."
              />
            </div>

            <select
              className="kn-select"
              value={minRooms}
              onChange={(e) => setMinRooms(e.target.value)}
            >
              <option value="all">تعداد اتاق</option>
              <option value="1">حداقل ۱ اتاق</option>
              <option value="2">حداقل ۲ اتاق</option>
              <option value="3">حداقل ۳ اتاق</option>
              <option value="4">حداقل ۴ اتاق</option>
            </select>

            <div className="kn-tabs">
              {[
                ["all", "همه املاک"],
                ["buy", "خرید"],
                ["rent", "اجاره"]
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={`kn-tab ${
                    activeType === value ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveType(value);
                    setShowAll(false);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="kn-grid">
            {visibleProperties.length > 0 ? (
              visibleProperties.map((p) => (
                <article className="kn-card" key={p.id}>
                  <div className="kn-card-image">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <span className="kn-badge">
                      {p.type === "buy" ? "فروش" : "اجاره"}
                    </span>
                  </div>

                  <div className="kn-card-content">
                    <div className="kn-card-location">
                      ⌖ {p.location}
                    </div>

                    <h3>{p.title}</h3>

                    <div className="kn-card-meta">
                      <span>▣ {money(p.area)} متر</span>
                      <span>◈ {money(p.rooms)} خواب</span>
                      <span>⌂ {p.city}</span>
                    </div>

                    <div className="kn-card-bottom">
                      <div className="kn-price">
                        <small>
                          {p.type === "buy" ? "قیمت کل" : "اجاره ماهانه"}
                        </small>
                        <strong>{p.priceText} تومان</strong>
                      </div>

                      <button
                        className="kn-detail-btn"
                        onClick={() => openProperty(p)}
                      >
                        جزئیات ملک ←
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="kn-empty">
                ملکی با این مشخصات پیدا نشد.
                <br />
                عبارت جست‌وجو یا فیلترها را تغییر دهید.
              </div>
            )}
          </div>

          {filtered.length > 6 && (
            <button
              className="kn-view-all"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "نمایش کمتر" : "مشاهده همه املاک"}
            </button>
          )}
        </div>
      </section>

      <section className="kn-feature" id="about">
        <div className="kn-container kn-feature-grid">
          <div className="kn-feature-image">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=85"
              alt="طراحی داخلی مدرن"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div>
            <div className="kn-eyebrow">
              تجربه‌ای متفاوت در انتخاب ملک
            </div>

            <h2>انتخاب خانه، فقط یک معامله نیست.</h2>

            <p>
              ما باور داریم خانه فقط یک فضای فیزیکی نیست؛
              بخشی از آینده و سبک زندگی شماست.
              خانه‌نما کمک می‌کند با اطلاعات شفاف‌تر و انتخابی آگاهانه‌تر،
              خانه مناسب خود را پیدا کنید.
            </p>

            <div className="kn-feature-list">
              <div><span>✦</span> اطلاعات شفاف املاک</div>
              <div><span>✦</span> انتخاب‌های متنوع</div>
              <div><span>✦</span> تجربه جست‌وجوی آسان</div>
              <div><span>✦</span> همراهی در انتخاب</div>
            </div>
          </div>
        </div>
      </section>

      <section className="kn-contact" id="contact">
        <div className="kn-container">
          <div className="kn-eyebrow">همراه شما در انتخاب</div>

          <h2>هنوز خانه رؤیایی‌تان را پیدا نکرده‌اید؟</h2>

          <p>
            برای پیدا کردن گزینه مناسب، جست‌وجو را از همین‌جا شروع کنید.
          </p>

          <button
            className="kn-contact-btn"
            onClick={() =>
              document.getElementById("properties")?.scrollIntoView({
                behavior: "smooth"
              })
            }
          >
            جست‌وجوی املاک
          </button>
        </div>
      </section>

      <footer className="kn-footer">
        <div className="kn-container kn-footer-inner">
          <div>
            <div style={{ fontSize: 20, fontWeight: 900 }}>
              ⌂ خانه‌نما
            </div>
            <p>خانه‌ای برای زندگی بهتر.</p>
          </div>

          <a href="#properties">مشاهده املاک</a>

          <span style={{ color: "#9ca5aa", fontSize: 10 }}>
            © ۱۴۰۵ خانه‌نما - تمامی حقوق محفوظ است.
          </span>
        </div>
      </footer>

      {selected && (
        <div
          className="kn-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="kn-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="kn-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="kn-modal-image">
              <img src={selected.image} alt={selected.title} />
            </div>

            <div className="kn-modal-content">
              <div className="kn-eyebrow">
                {selected.type === "buy"
                  ? "ملک برای فروش"
                  : "ملک برای اجاره"}
              </div>

              <h2>{selected.title}</h2>

              <p>
                ⌖ {selected.location}، {selected.city}
              </p>

              <p>{selected.description}</p>

              <div className="kn-modal-info">
                <span>
                  متراژ: {money(selected.area)} متر
                </span>

                <span>
                  اتاق خواب: {money(selected.rooms)}
                </span>

                <span>
                  قیمت: {selected.priceText} تومان
                </span>
              </div>

              <form
                className="kn-visit-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setVisitSent(true);
                }}
              >
                <input
                  required
                  placeholder="شماره تماس شما"
                  type="tel"
                />

                <button className="kn-primary" type="submit">
                  درخواست بازدید
                </button>
              </form>

              {visitSent && (
                <div className="kn-success">
                  درخواست شما در نسخه نمایشی ثبت شد.
                  برای ارسال واقعی درخواست، اتصال به سیستم مدیریت اطلاعات لازم است.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
