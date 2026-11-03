"use client";

import { useState } from "react";

const clinicImage =
  "https://www.vitaldental.com.au/retina-images/practice-gallery/img23-big.jpg";

const services = [
  {
    number: "01",
    title: "ایمپلنت دندان",
    english: "DENTAL IMPLANT",
    description:
      "بازگرداندن زیبایی و عملکرد طبیعی دندان‌ها با روش‌های نوین کاشت دندان.",
    image:
      "https://irp.cdn-website.com/ae36c8ad/dms3rep/multi/10088-ai-image-tooth-implant.jpg",
  },
  {
    number: "02",
    title: "لمینت و زیبایی",
    english: "COSMETIC DENTISTRY",
    description:
      "طراحی لبخندی هماهنگ و طبیعی با روش‌های نوین اصلاح طرح لبخند.",
    image:
      "https://www.parkpracticehealth.co.uk/desktop/web/ckfinder/userfiles/images/Porcelain%20Veneers.png",
  },
  {
    number: "03",
    title: "ارتودنسی",
    english: "ORTHODONTICS",
    description:
      "اصلاح نظم دندان‌ها و ایجاد لبخندی متناسب با چهره شما.",
    image:
      "https://www.danburydentalcare.co.uk/images/fixedbraces.jpg",
  },
];

const faqs = [
  {
    question: "آیا قبل از درمان نیاز به مشاوره دارم؟",
    answer:
      "بله، در جلسه مشاوره شرایط دهان و دندان شما بررسی می‌شود و مناسب‌ترین روش درمان پیشنهاد خواهد شد.",
  },
  {
    question: "چطور می‌توانم وقت رزرو کنم؟",
    answer:
      "می‌توانید فرم درخواست نوبت را تکمیل کنید تا برای هماهنگی با شما تماس گرفته شود.",
  },
  {
    question: "آیا خدمات کلینیک شامل معاینه اولیه است؟",
    answer:
      "برای اطلاع از شرایط معاینه و هزینه‌ها می‌توانید با کلینیک تماس بگیرید.",
  },
];

function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`photo ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="photo-fallback">
          <span>DENTIVA</span>
          <small>Dental Care</small>
        </div>
      )}
    </div>
  );
}

export default function DentivaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="dentiva" dir="rtl">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap");

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #fff;
          font-family: "Vazirmatn", sans-serif;
        }

        .dentiva {
          --navy: #102d3b;
          --teal: #2d8580;
          --gold: #c6a56a;
          --muted: #71818a;
          color: var(--navy);
          background: #fff;
          overflow: hidden;
          font-family: "Vazirmatn", sans-serif;
        }

        .dentiva button,
        .dentiva input,
        .dentiva textarea {
          font-family: inherit;
        }

        .dentiva a {
          color: inherit;
          text-decoration: none;
        }

        .dentiva .container {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }

        .dentiva .topbar {
          background: var(--navy);
          color: #dce7e8;
          padding: 10px 0;
          font-size: 11px;
        }

        .dentiva .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .dentiva .topbar-left {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }

        .dentiva .navbar {
          height: 82px;
          display: flex;
          align-items: center;
          background: white;
          position: relative;
          z-index: 5;
        }

        .dentiva .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .dentiva .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          direction: ltr;
        }

        .dentiva .logo-mark {
          width: 42px;
          height: 42px;
          border: 1px solid var(--teal);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--teal);
          font-size: 21px;
          font-weight: 500;
        }

        .dentiva .logo-name {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--navy);
        }

        .dentiva .logo-name small {
          display: block;
          font-size: 8px;
          letter-spacing: 3px;
          color: var(--muted);
          font-weight: 500;
          text-align: center;
        }

        .dentiva .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 13px;
          color: #52636c;
        }

        .dentiva .nav-links a:hover {
          color: var(--teal);
        }

        .dentiva .button {
          border: 0;
          border-radius: 5px;
          background: var(--teal);
          color: white;
          padding: 13px 23px;
          font-size: 13px;
          cursor: pointer;
          transition: 0.25s;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .dentiva .button:hover {
          background: var(--navy);
          transform: translateY(-2px);
        }

        /* HERO */

        .dentiva .hero {
          position: relative;
          min-height: 590px;
          display: flex;
          align-items: center;
          background: var(--navy);
          overflow: hidden;
        }

        .dentiva .hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .dentiva .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .dentiva .hero-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            270deg,
            rgba(9, 34, 46, 0.94) 0%,
            rgba(9, 34, 46, 0.83) 35%,
            rgba(9, 34, 46, 0.38) 72%,
            rgba(9, 34, 46, 0.18) 100%
          );
        }

        .dentiva .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          width: 100%;
          padding: 100px 0;
        }

        .dentiva .hero-copy {
          max-width: 590px;
        }

        .dentiva .eyebrow {
          color: #cbb17f;
          font-size: 11px;
          letter-spacing: 3px;
          direction: ltr;
          text-align: right;
          margin-bottom: 22px;
          font-weight: 600;
        }

        .dentiva .hero h1 {
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.65;
          font-weight: 700;
          margin: 0 0 18px;
        }

        .dentiva .hero h1 span {
          color: #d7bd8d;
        }

        .dentiva .hero p {
          color: #e0e8e9;
          font-size: 15px;
          line-height: 2.3;
          max-width: 490px;
          margin: 0 0 30px;
        }

        .dentiva .hero-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
        }

        .dentiva .button-outline {
          border: 1px solid rgba(255, 255, 255, 0.65);
          color: white;
          border-radius: 5px;
          padding: 12px 23px;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
        }

        .dentiva .hero-label {
          position: absolute;
          bottom: 28px;
          left: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 10px;
          letter-spacing: 2px;
          direction: ltr;
        }

        .dentiva .hero-fallback {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, #102d3b, #2d8580);
        }

        /* STATS */

        .dentiva .stats {
          background: #f5f8f7;
          padding: 34px 0;
        }

        .dentiva .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .dentiva .stat {
          text-align: center;
          border-left: 1px solid #dce5e3;
          padding: 5px 12px;
        }

        .dentiva .stat:last-child {
          border-left: 0;
        }

        .dentiva .stat strong {
          display: block;
          font-size: 27px;
          color: var(--teal);
          font-weight: 700;
          direction: ltr;
        }

        .dentiva .stat span {
          font-size: 12px;
          color: #6e7e84;
        }

        /* SECTION TITLES */

        .dentiva .section {
          padding: 100px 0;
        }

        .dentiva .section-heading {
          text-align: center;
          margin: 0 auto 48px;
          max-width: 620px;
        }

        .dentiva .section-heading .eyebrow {
          text-align: center;
          margin-bottom: 12px;
        }

        .dentiva .section-heading h2 {
          font-size: 32px;
          margin: 0 0 13px;
          font-weight: 700;
        }

        .dentiva .section-heading p {
          color: var(--muted);
          font-size: 13px;
          line-height: 2.1;
          margin: 0;
        }

        /* SERVICES */

        .dentiva .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .dentiva .service-card {
          border: 1px solid #e7edeb;
          background: white;
          transition: 0.3s;
          overflow: hidden;
        }

        .dentiva .service-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 45px rgba(16, 45, 59, 0.1);
        }

        .dentiva .service-image {
          height: 245px;
          overflow: hidden;
          background: #e9efed;
        }

        .dentiva .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s;
        }

        .dentiva .service-card:hover .service-image img {
          transform: scale(1.05);
        }

        .dentiva .service-info {
          padding: 25px;
        }

        .dentiva .service-number {
          color: var(--gold);
          font-size: 12px;
          direction: ltr;
          display: block;
          margin-bottom: 10px;
        }

        .dentiva .service-info h3 {
          font-size: 19px;
          margin: 0 0 5px;
        }

        .dentiva .service-info .english {
          font-size: 9px;
          color: var(--teal);
          letter-spacing: 2px;
          direction: ltr;
          text-align: right;
          display: block;
          margin-bottom: 14px;
        }

        .dentiva .service-info p {
          font-size: 12px;
          line-height: 2.1;
          color: var(--muted);
          min-height: 52px;
          margin: 0 0 18px;
        }

        .dentiva .more-link {
          color: var(--teal);
          font-size: 12px;
          font-weight: 600;
        }

        /* ABOUT */

        .dentiva .about {
          background: #f5f8f7;
        }

        .dentiva .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .dentiva .about-photo {
          height: 430px;
          position: relative;
          background: #dce8e5;
        }

        .dentiva .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .dentiva .about-text .eyebrow {
          margin-bottom: 14px;
        }

        .dentiva .about-text h2 {
          font-size: 33px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .dentiva .about-text p {
          color: var(--muted);
          font-size: 13px;
          line-height: 2.5;
          margin: 0 0 20px;
        }

        .dentiva .about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 25px 0 30px;
        }

        .dentiva .about-point {
          font-size: 12px;
          color: var(--navy);
        }

        .dentiva .about-point span {
          color: var(--teal);
          margin-left: 8px;
        }

        /* SPECIALTIES */

        .dentiva .specialties {
          background: var(--navy);
          color: white;
          padding: 75px 0;
        }

        .dentiva .specialties .section-heading h2 {
          color: white;
        }

        .dentiva .specialties .section-heading p {
          color: #bdcbce;
        }

        .dentiva .specialty-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .dentiva .specialty {
          padding: 28px 15px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          text-align: center;
        }

        .dentiva .specialty-icon {
          width: 48px;
          height: 48px;
          border: 1px solid var(--gold);
          color: var(--gold);
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: 0 auto 15px;
          font-size: 20px;
        }

        .dentiva .specialty h3 {
          font-size: 14px;
          margin: 0 0 8px;
        }

        .dentiva .specialty p {
          color: #bdcbce;
          font-size: 11px;
          line-height: 2;
          margin: 0;
        }

        /* QUOTE */

        .dentiva .quote {
          padding: 80px 0;
          text-align: center;
          background: #f5f8f7;
        }

        .dentiva .quote-mark {
          font-size: 55px;
          line-height: 1;
          color: var(--gold);
        }

        .dentiva .quote h2 {
          max-width: 720px;
          margin: 10px auto 15px;
          font-size: 25px;
          line-height: 2;
        }

        .dentiva .quote p {
          font-size: 12px;
          color: var(--muted);
        }

        /* BOOKING */

        .dentiva .booking-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
        }

        .dentiva .booking-text h2 {
          font-size: 31px;
          line-height: 1.8;
          margin: 0 0 15px;
        }

        .dentiva .booking-text p {
          font-size: 13px;
          color: var(--muted);
          line-height: 2.3;
        }

        .dentiva .contact-line {
          margin-top: 28px;
          font-size: 13px;
          line-height: 2.5;
        }

        .dentiva .contact-line strong {
          color: var(--teal);
          display: block;
        }

        .dentiva .booking-form {
          background: #f5f8f7;
          padding: 35px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .dentiva .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dentiva .field.full {
          grid-column: 1 / -1;
        }

        .dentiva .field label {
          font-size: 11px;
          color: #53666e;
        }

        .dentiva .field input,
        .dentiva .field textarea,
        .dentiva .field select {
          width: 100%;
          border: 1px solid #dce5e3;
          background: white;
          padding: 13px;
          outline: none;
          font-size: 12px;
          color: var(--navy);
          border-radius: 3px;
        }

        .dentiva .field input:focus,
        .dentiva .field textarea:focus,
        .dentiva .field select:focus {
          border-color: var(--teal);
        }

        .dentiva .field textarea {
          resize: vertical;
          min-height: 90px;
        }

        .dentiva .success-message {
          grid-column: 1 / -1;
          color: var(--teal);
          font-size: 13px;
          line-height: 2;
        }

        /* FAQ */

        .dentiva .faq {
          background: #f5f8f7;
        }

        .dentiva .faq-list {
          max-width: 800px;
          margin: auto;
        }

        .dentiva .faq-item {
          background: white;
          border: 1px solid #e5ece9;
          margin-bottom: 12px;
        }

        .dentiva .faq-question {
          width: 100%;
          background: white;
          border: 0;
          padding: 20px 23px;
          text-align: right;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: var(--navy);
          font-size: 13px;
        }

        .dentiva .faq-question span:last-child {
          color: var(--teal);
          font-size: 20px;
        }

        .dentiva .faq-answer {
          padding: 0 23px 20px;
          font-size: 12px;
          line-height: 2.2;
          color: var(--muted);
        }

        /* FOOTER */

        .dentiva .footer {
          background: #0b2531;
          color: white;
          padding: 55px 0 22px;
        }

        .dentiva .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 50px;
          padding-bottom: 40px;
        }

        .dentiva .footer .logo-name {
          color: white;
        }

        .dentiva .footer p {
          font-size: 12px;
          line-height: 2.3;
          color: #b7c7ca;
          max-width: 330px;
        }

        .dentiva .footer h3 {
          font-size: 14px;
          margin: 0 0 18px;
        }

        .dentiva .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #b7c7ca;
          font-size: 12px;
        }

        .dentiva .copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          padding-top: 20px;
          text-align: center;
          color: #91a7ad;
          font-size: 10px;
        }

        .dentiva .photo-fallback {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #dce8e5, #b8d1cd);
          color: var(--navy);
          gap: 8px;
        }

        .dentiva .photo-fallback span {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .dentiva .photo-fallback small {
          font-size: 10px;
          letter-spacing: 2px;
        }

        @media (max-width: 850px) {
          .dentiva .nav-links {
            display: none;
          }

          .dentiva .hero {
            min-height: 540px;
          }

          .dentiva .services-grid {
            grid-template-columns: 1fr 1fr;
          }

          .dentiva .about-grid {
            gap: 30px;
          }

          .dentiva .specialty-grid {
            grid-template-columns: 1fr 1fr;
          }

          .dentiva .booking-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .dentiva .container {
            width: min(100% - 30px, 1180px);
          }

          .dentiva .topbar-left {
            display: none;
          }

          .dentiva .navbar {
            height: 70px;
          }

          .dentiva .navbar .button {
            padding: 10px 13px;
            font-size: 11px;
          }

          .dentiva .hero {
            min-height: 540px;
          }

          .dentiva .hero-photo::after {
            background: rgba(9, 34, 46, 0.72);
          }

          .dentiva .hero-content {
            padding: 75px 0;
          }

          .dentiva .hero h1 {
            font-size: 34px;
          }

          .dentiva .hero p {
            font-size: 13px;
          }

          .dentiva .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 22px 0;
          }

          .dentiva .stat:nth-child(2) {
            border-left: 0;
          }

          .dentiva .section {
            padding: 70px 0;
          }

          .dentiva .section-heading h2 {
            font-size: 26px;
          }

          .dentiva .services-grid {
            grid-template-columns: 1fr;
          }

          .dentiva .service-image {
            height: 235px;
          }

          .dentiva .about-grid {
            grid-template-columns: 1fr;
          }

          .dentiva .about-photo {
            height: 280px;
          }

          .dentiva .about-text h2 {
            font-size: 27px;
          }

          .dentiva .specialty-grid {
            grid-template-columns: 1fr 1fr;
          }

          .dentiva .quote h2 {
            font-size: 20px;
          }

          .dentiva .booking-form {
            padding: 20px;
            grid-template-columns: 1fr;
          }

          .dentiva .field.full {
            grid-column: auto;
          }

          .dentiva .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>

      {/* نوار بالای سایت */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>لبخند سالم، شروع یک زندگی زیباتر</span>
          <div className="topbar-left">
            <span>شنبه تا پنجشنبه | ۹ تا ۲۰</span>
            <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
          </div>
        </div>
      </div>

      {/* منو */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <div className="logo-mark">D</div>
            <div className="logo-name">
              DENTIVA
              <small>DENTAL CLINIC</small>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#">صفحه اصلی</a>
            <a href="#about">درباره ما</a>
            <a href="#services">خدمات</a>
            <a href="#specialties">تخصص‌ها</a>
            <a href="#faq">سؤالات متداول</a>
          </nav>

          <a href="#booking" className="button">
            رزرو نوبت
          </a>
        </div>
      </header>

      {/* تصویر اصلی کلینیک */}
      <section className="hero">
        <div className="hero-photo">
          <Photo
            src={clinicImage}
            alt="فضای واقعی و مدرن کلینیک دندانپزشکی"
          />
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">WELCOME TO DENTIVA</div>

            <h1>
              لبخندی زیبا،
              <br />
              با مراقبتی <span>حرفه‌ای</span>
            </h1>

            <p>
              در دنتیوا، سلامت و زیبایی لبخند شما در اولویت است.
              تجربه‌ای متفاوت از خدمات دندانپزشکی در محیطی مدرن،
              آرام و حرفه‌ای.
            </p>

            <div className="hero-actions">
              <a href="#booking" className="button">
                دریافت مشاوره و رزرو نوبت
              </a>
              <a href="#services" className="button-outline">
                مشاهده خدمات
              </a>
            </div>
          </div>
        </div>

        <div className="container hero-label">
          MODERN DENTAL EXPERIENCE
        </div>
      </section>

      {/* آمار */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <strong>۱۵+</strong>
            <span>سال تجربه</span>
          </div>
          <div className="stat">
            <strong>۲۵۰۰+</strong>
            <span>مراجعه‌کننده</span>
          </div>
          <div className="stat">
            <strong>۱۲+</strong>
            <span>خدمات تخصصی</span>
          </div>
          <div className="stat">
            <strong>۹۸٪</strong>
            <span>رضایت مراجعه‌کنندگان</span>
          </div>
        </div>
      </section>

      {/* خدمات */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">OUR SERVICES</div>
            <h2>خدمات تخصصی دنتیوا</h2>
            <p>
              مجموعه‌ای از خدمات درمانی و زیبایی دندانپزشکی با
              تمرکز بر سلامت، دقت و زیبایی لبخند شما.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image">
                  <Photo
                    src={service.image}
                    alt={service.title}
                  />
                </div>

                <div className="service-info">
                  <span className="service-number">
                    {service.number}
                  </span>
                  <h3>{service.title}</h3>
                  <span className="english">{service.english}</span>
                  <p>{service.description}</p>
                  <a href="#booking" className="more-link">
                    دریافت مشاوره ←
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* درباره کلینیک */}
      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-photo">
            <Photo
              src={clinicImage}
              alt="اتاق درمان و تجهیزات کلینیک دنتیوا"
            />
          </div>

          <div className="about-text">
            <div className="eyebrow">ABOUT DENTIVA</div>
            <h2>
              تجربه‌ای متفاوت از
              <br />
              دندانپزشکی مدرن
            </h2>

            <p>
              ما در دنتیوا باور داریم که مراقبت از دندان‌ها فقط
              به درمان محدود نمی‌شود. تجربه مراجعه، آرامش بیمار،
              دقت در تشخیص و توجه به جزئیات نیز اهمیت زیادی دارد.
            </p>

            <p>
              هدف ما فراهم کردن فضایی حرفه‌ای برای ارائه خدمات
              درمانی و زیبایی دندانپزشکی است.
            </p>

            <div className="about-points">
              <div className="about-point">
                <span>✓</span>
                تجهیزات مدرن
              </div>
              <div className="about-point">
                <span>✓</span>
                محیط آرام و بهداشتی
              </div>
              <div className="about-point">
                <span>✓</span>
                مشاوره تخصصی
              </div>
              <div className="about-point">
                <span>✓</span>
                توجه به نیاز بیمار
              </div>
            </div>

            <a href="#booking" className="button">
              ارتباط با کلینیک
            </a>
          </div>
        </div>
      </section>

      {/* تخصص‌ها */}
      <section className="specialties" id="specialties">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">WHY DENTIVA</div>
            <h2>چرا دنتیوا؟</h2>
            <p>
              توجه به کیفیت درمان و تجربه مراجعه‌کننده،
              در تمام مراحل خدمات دندانپزشکی.
            </p>
          </div>

          <div className="specialty-grid">
            {[
              {
                icon: "✧",
                title: "تجهیزات به‌روز",
                text: "استفاده از تجهیزات مدرن در فرایند درمان",
              },
              {
                icon: "◇",
                title: "دقت در درمان",
                text: "توجه به جزئیات و شرایط هر مراجعه‌کننده",
              },
              {
                icon: "✚",
                title: "سلامت و بهداشت",
                text: "رعایت اصول بهداشتی در محیط کلینیک",
              },
              {
                icon: "♡",
                title: "تجربه آرام",
                text: "توجه به آرامش و رضایت مراجعه‌کنندگان",
              },
            ].map((item) => (
              <div className="specialty" key={item.title}>
                <div className="specialty-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نقل قول */}
      <section className="quote">
        <div className="container">
          <div className="quote-mark">“</div>
          <h2>
            لبخند شما، زیباترین نتیجه مراقبت و توجه به سلامت
            دهان و دندان است.
          </h2>
          <p>DENTIVA · YOUR SMILE MATTERS</p>
        </div>
      </section>

      {/* رزرو نوبت */}
      <section className="section" id="booking">
        <div className="container booking-grid">
          <div className="booking-text">
            <div className="eyebrow">BOOK AN APPOINTMENT</div>
            <h2>
              برای لبخندتان
              <br />
              قدم اول را بردارید
            </h2>
            <p>
              برای دریافت مشاوره یا هماهنگی نوبت، اطلاعات خود را
              در فرم روبه‌رو وارد کنید.
            </p>

            <div className="contact-line">
              <strong>شماره تماس</strong>
              ۰۲۱-۱۲۳۴۵۶۷۸
            </div>

            <div className="contact-line">
              <strong>ساعات پاسخگویی</strong>
              شنبه تا پنجشنبه، ساعت ۹ تا ۲۰
            </div>
          </div>

          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="field">
              <label>نام و نام خانوادگی</label>
              <input
                type="text"
                placeholder="نام شما"
                required
              />
            </div>

            <div className="field">
              <label>شماره تماس</label>
              <input
                type="tel"
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                required
              />
            </div>

            <div className="field full">
              <label>خدمت موردنظر</label>
              <select defaultValue="">
                <option value="" disabled>
                  انتخاب خدمت
                </option>
                <option>ایمپلنت دندان</option>
                <option>لمینت و زیبایی</option>
                <option>ارتودنسی</option>
                <option>معاینه و مشاوره</option>
                <option>سایر خدمات</option>
              </select>
            </div>

            <div className="field full">
              <label>توضیحات</label>
              <textarea placeholder="اگر توضیحی دارید بنویسید..." />
            </div>

            {submitted && (
              <div className="success-message">
                درخواست شما ثبت شد. این فرم در نسخه نمایشی
                است و هنوز به سیستم ارسال اطلاعات متصل نشده است.
              </div>
            )}

            <button className="button field full" type="submit">
              ثبت درخواست نوبت
            </button>
          </form>
        </div>
      </section>

      {/* سوالات متداول */}
      <section className="section faq" id="faq">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">FAQ</div>
            <h2>سؤالات متداول</h2>
            <p>
              پاسخ برخی از پرسش‌های رایج شما درباره خدمات کلینیک.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="logo">
                <div className="logo-mark">D</div>
                <div className="logo-name">
                  DENTIVA
                  <small>DENTAL CLINIC</small>
                </div>
              </div>
              <p>
                دنتیوا؛ همراه شما برای حفظ سلامت دندان‌ها
                و ساختن لبخندی زیباتر.
              </p>
            </div>

            <div>
              <h3>دسترسی سریع</h3>
              <div className="footer-links">
                <a href="#">صفحه اصلی</a>
                <a href="#about">درباره ما</a>
                <a href="#services">خدمات</a>
                <a href="#booking">رزرو نوبت</a>
              </div>
            </div>

            <div>
              <h3>ارتباط با ما</h3>
              <div className="footer-links">
                <span>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</span>
                <span>شنبه تا پنجشنبه</span>
                <span>ساعت ۹ تا ۲۰</span>
              </div>
            </div>
          </div>

          <div className="copyright">
            © DENTIVA Dental Clinic — تمامی حقوق محفوظ است.
          </div>
        </div>
      </footer>
    </main>
  );
}