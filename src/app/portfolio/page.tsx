
"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "./projects";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

.portfolio-page {
  direction: rtl;
  min-height: 100vh;
  color: #211b35;
  background: #fff;
  font-family: 'Vazirmatn', Tahoma, sans-serif;
}

.portfolio-page * { box-sizing: border-box; }
.portfolio-page a { text-decoration: none; color: inherit; }

.p-container {
  width: min(1160px, calc(100% - 48px));
  margin: auto;
}

.p-nav {
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0edf6;
}

.p-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 900;
}

.p-logo-mark {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  color: white;
  border-radius: 12px;
  background: linear-gradient(145deg, #a98bf2, #7045d1);
}

.p-back {
  color: #7452bd !important;
  font-size: 13px;
  font-weight: 700;
}

.p-hero {
  position: relative;
  overflow: hidden;
  padding: 85px 0 70px;
  background:
    radial-gradient(ellipse at 80% 20%, #eadfff 0%, transparent 50%),
    linear-gradient(120deg, #fff, #faf8ff);
}

.p-hero::after {
  content: "N";
  position: absolute;
  left: 7%;
  top: -110px;
  font-size: 380px;
  font-weight: 900;
  line-height: 1;
  color: #8963db;
  opacity: .045;
  pointer-events: none;
}

.p-hero-content {
  position: relative;
  z-index: 1;
}

.p-kicker {
  color: #815bd0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
}

.p-hero h1 {
  max-width: 750px;
  margin: 16px 0;
  font-size: clamp(35px, 5vw, 55px);
  line-height: 1.5;
  font-weight: 900;
}

.p-gradient {
  color: #8057d4;
  background: linear-gradient(100deg, #a58aef, #6840c3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.p-hero p {
  max-width: 610px;
  color: #777187;
  font-size: 14px;
  line-height: 2.3;
}

.p-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 28px;
}

.p-stat strong {
  display: block;
  color: #7149c8;
  font-size: 25px;
  font-weight: 900;
}

.p-stat span {
  color: #8a8398;
  font-size: 11px;
}

.p-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 38px 0 20px;
}

.p-category {
  padding: 10px 16px;
  border: 1px solid #ebe6f3;
  border-radius: 12px;
  color: #746b83;
  background: white;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: .25s;
}

.p-category:hover {
  border-color: #c9b8ef;
  color: #7048c9;
}

.p-category.active {
  color: white;
  border-color: #7950d9;
  background: linear-gradient(110deg, #9672e6, #7048c9);
  box-shadow: 0 7px 17px #7950d92b;
}

.p-category small {
  margin-right: 7px;
  opacity: .7;
}

.p-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
  padding: 15px 0 90px;
}

.p-card {
  display: block;
  min-width: 0;
  overflow: hidden;
  border: 1px solid #eeeaf5;
  border-radius: 19px;
  background: white;
  transition: .3s;
  animation: cardIn .4s ease both;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.p-card:hover {
  transform: translateY(-6px);
  border-color: #d8c9fa;
  box-shadow: 0 20px 45px #6040a514;
}

.p-card:focus-visible {
  outline: 3px solid #9877e6;
  outline-offset: 4px;
}

.p-image {
  height: 225px;
  position: relative;
  overflow: hidden;
  background: #eee8fa;
}

.p-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .5s;
}

.p-card:hover .p-image img {
  transform: scale(1.06);
}

.p-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, #211b3540, transparent 55%);
  pointer-events: none;
}

.p-image-label {
  position: absolute;
  z-index: 2;
  top: 15px;
  right: 15px;
  padding: 7px 10px;
  border-radius: 7px;
  color: #6040a5;
  background: #ffffffed;
  font-size: 9px;
  font-weight: 900;
}

.p-card-content { padding: 20px; }

.p-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: #8b70c2;
  font-size: 10px;
}

.p-kind {
  padding: 5px 8px;
  border-radius: 7px;
  color: #8262c3;
  background: #f3effb;
  font-size: 9px;
}

.p-kind.real {
  color: #32846b;
  background: #eaf7f1;
}

.p-card h2 {
  margin: 13px 0 8px;
  font-size: 17px;
  font-weight: 900;
}

.p-card p {
  min-height: 48px;
  margin: 0;
  color: #817a90;
  font-size: 11px;
  line-height: 2.1;
}

.p-card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 17px;
  padding-top: 13px;
  border-top: 1px solid #f0edf5;
  color: #a29aaa;
  font-size: 10px;
}

.p-card-bottom b {
  color: #7750cb;
  font-size: 11px;
  transition: .2s;
}

.p-card:hover .p-card-bottom b {
  transform: translateX(-4px);
}

.p-empty {
  padding: 35px;
  text-align: center;
  color: #817a90;
}

.p-note {
  margin: 0 0 75px;
  padding: 22px 25px;
  border: 1px solid #eee8fa;
  border-radius: 15px;
  color: #766b88;
  background: #faf8ff;
  font-size: 12px;
  line-height: 2.2;
}

.p-contact {
  padding: 65px 0;
  text-align: center;
  background: radial-gradient(ellipse at 50% 0%, #e7dcff, #faf8ff 65%);
}

.p-contact h2 {
  margin: 0 0 12px;
  font-size: 27px;
}

.p-contact p {
  color: #777187;
  font-size: 13px;
}

.p-contact a {
  display: inline-flex;
  margin-top: 15px;
  padding: 13px 22px;
  border-radius: 12px;
  color: white;
  background: linear-gradient(110deg, #9672e6, #7048c9);
  font-size: 12px;
  font-weight: 800;
}

.p-footer {
  padding: 25px 0;
  border-top: 1px solid #eeeaf5;
  color: #9992a5;
  font-size: 10px;
}

.p-footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

@media(max-width: 850px) {
  .p-grid { grid-template-columns: repeat(2, 1fr); }
}

@media(max-width: 560px) {
  .p-container { width: calc(100% - 32px); }
  .p-nav { min-height: 70px; }
  .p-logo { font-size: 19px; }
  .p-hero { padding: 65px 0 48px; }
  .p-hero h1 { font-size: 36px; }
  .p-hero p { font-size: 12px; }
  .p-stats { gap: 22px; }
  .p-categories { gap: 7px; padding-top: 27px; }
  .p-category { padding: 9px 11px; font-size: 10px; }
  .p-grid {
    grid-template-columns: 1fr;
    gap: 17px;
    padding-bottom: 55px;
  }
  .p-image { height: 220px; }
  .p-card p { min-height: auto; }
  .p-contact h2 { font-size: 23px; }
  .p-footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media(prefers-reduced-motion: reduce) {
  .p-card, .p-card img {
    animation: none !important;
    transition: none !important;
  }
}
`;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("همه پروژه‌ها");

  const categories = ["همه پروژه‌ها", "وب‌سایت", "اپلیکیشن"];

  const filteredProjects =
    activeCategory === "همه پروژه‌ها"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const websiteCount = projects.filter(
    (project) => project.category === "وب‌سایت"
  ).length;

  const appCount = projects.filter(
    (project) => project.category === "اپلیکیشن"
  ).length;

  return (
    <main className="portfolio-page">
      <style>{css}</style>

      <header className="p-container p-nav">
        <Link href="/" className="p-logo">
          <span className="p-logo-mark">N</span>
          <span>NEXORA</span>
        </Link>

        <Link href="/" className="p-back">
          بازگشت به صفحه اصلی ←
        </Link>
      </header>

      <section className="p-hero">
        <div className="p-container p-hero-content">
          <span className="p-kicker">PORTFOLIO / نمونه‌کارها</span>

          <h1>
            ایده‌ها، طراحی می‌شوند؛
            <br />
            <span className="p-gradient">
              تجربه‌ها، ساخته می‌شوند.
            </span>
          </h1>

          <p>
            مجموعه‌ای از وب‌سایت‌ها و اپلیکیشن‌های طراحی‌شده
            با تمرکز بر هویت بصری، تجربه کاربری و راهکارهای
            دیجیتال کاربردی.
          </p>

          <div className="p-stats">
            <div className="p-stat">
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>مجموع پروژه‌ها</span>
            </div>

            <div className="p-stat">
              <strong>{String(websiteCount).padStart(2, "0")}</strong>
              <span>وب‌سایت</span>
            </div>

            <div className="p-stat">
              <strong>{String(appCount).padStart(2, "0")}</strong>
              <span>اپلیکیشن</span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-container">
        <div className="p-categories">
          {categories.map((category) => {
            const count =
              category === "همه پروژه‌ها"
                ? projects.length
                : projects.filter(
                    (project) => project.category === category
                  ).length;

            return (
              <button
                type="button"
                key={category}
                className={`p-category ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
                <small>{String(count).padStart(2, "0")}</small>
              </button>
            );
          })}
        </div>

        <div className="p-grid">
          {filteredProjects.map((project) => (
            <Link
              href={`/portfolio/${project.slug}`}
              className="p-card"
              key={project.id}
              aria-label={`مشاهده پروژه ${project.title}`}
            >
              <div className="p-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="p-image-label">
                  {project.label}
                </span>
              </div>

              <div className="p-card-content">
                <div className="p-card-meta">
                  <span>{project.category}</span>
                  <span
                    className={`p-kind ${
                      project.kind === "پروژه واقعی" ? "real" : ""
                    }`}
                  >
                    {project.kind}
                  </span>
                </div>

                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="p-card-bottom">
                  <span>پروژه {project.id}</span>
                  <b>مشاهده پروژه ←</b>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-empty">
            پروژه‌ای در این دسته‌بندی وجود ندارد.
          </div>
        )}

        <div className="p-note">
          <strong>درباره نمونه‌کارها:</strong>{" "}
          پروژه‌هایی که با عنوان «مفهومی» مشخص شده‌اند،
          طرح‌های نمایشی برای معرفی سبک طراحی و ایده‌های Nexora
          هستند و به معنی سفارش یا همکاری واقعی با مشتری نیستند.
        </div>
      </section>

      <section className="p-contact">
        <div className="p-container">
          <h2>برای پروژه بعدی شما آماده‌ایم</h2>
          <p>
            ایده‌تان را با ما در میان بگذارید تا درباره مسیر اجرای آن صحبت کنیم.
          </p>
          <Link href="/#contact">
            شروع یک همکاری ←
          </Link>
        </div>
      </section>

      <footer className="p-footer">
        <div className="p-container p-footer-inner">
          <span>© تمامی حقوق برای Nexora محفوظ است.</span>
          <Link href="/">NEXORA — استودیوی خلاق دیجیتال</Link>
        </div>
      </footer>
    </main>
  );
}
