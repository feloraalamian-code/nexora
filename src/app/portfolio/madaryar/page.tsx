
"use client";

import { useState } from "react";

const appUrl = "https://feloraalamian-code.github.io/madaryar/";

const features = [
  {
    number: "01",
    title: "آرامش من",
    description: "مراقبت از خود، تمرین تنفس و چالش‌های روزانه.",
    icon: "♡",
  },
  {
    number: "02",
    title: "نظم خانه",
    description: "چک‌لیست کارهای خانه و برنامه‌ریزی روزانه.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "دنیای کودک",
    description: "اطلاعات رشد کودک و ابزارهای کاربردی مادرانه.",
    icon: "✳",
  },
  {
    number: "04",
    title: "پرونده کودک",
    description: "پیگیری اطلاعات و یادآوری‌های مربوط به کودک.",
    icon: "♡",
  },
  {
    number: "05",
    title: "یادآورها",
    description: "مدیریت برنامه‌ها و یادآوری‌های مهم.",
    icon: "◷",
  },
  {
    number: "06",
    title: "دستیار هوشمند",
    description: "همراه دیجیتال برای پرسش‌های مادرانه.",
    icon: "✧",
  },
];

export default function MadaryarPortfolio() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const selected = features[active];

  return (
    <main className="madaryar-page" dir="rtl">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap");

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f8f7f5;
        }

        .madaryar-page {
          --purple: #7564a8;
          --purple-dark: #514471;
          --cream: #f8f7f5;
          --text: #302c3c;
          font-family: "Vazirmatn", sans-serif;
          color: var(--text);
          background: var(--cream);
          overflow: hidden;
        }

        .madaryar-page a {
          color: inherit;
          text-decoration: none;
        }

        .m-nav {
          height: 82px;
          padding: 0 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eae7eb;
          background: #fffdfa;
          position: relative;
          z-index: 10;
        }

        .m-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .m-brand-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: #eee8f5;
          color: var(--purple);
          display: grid;
          place-items: center;
          font-size: 24px;
        }

        .m-brand strong {
          font-size: 21px;
          font-weight: 800;
          display: block;
        }

        .m-brand small {
          color: #a29ba9;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .m-nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 12px;
          color: #77717e;
        }

        .m-nav-links a:hover {
          color: var(--purple);
        }

        .m-nav-cta {
          padding: 12px 20px;
          background: var(--purple);
          color: white !important;
          border-radius: 8px;
        }

        .m-menu {
          display: none;
          border: none;
          background: none;
          font-size: 25px;
          color: var(--purple);
          cursor: pointer;
        }

        .m-hero {
          min-height: 690px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 65px 9%;
          gap: 70px;
          background:
            radial-gradient(ellipse at 78% 42%, #eee5f2 0%, transparent 45%),
            #faf8f6;
        }

        .m-hero-copy {
          max-width: 540px;
        }

        .m-label {
          font-size: 10px;
          letter-spacing: 3px;
          color: var(--purple);
          font-weight: 700;
          margin-bottom: 23px;
        }

        .m-hero h1 {
          font-size: clamp(42px, 5vw, 65px);
          line-height: 1.55;
          font-weight: 800;
          margin: 0;
          letter-spacing: -2px;
        }

        .m-hero h1 span {
          color: var(--purple);
          display: block;
        }

        .m-hero-copy > p {
          color: #817c89;
          font-size: 14px;
          line-height: 2.7;
          margin: 22px 0 30px;
          max-width: 470px;
        }

        .m-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
        }

        .m-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          background: var(--purple);
          color: white !important;
          padding: 15px 23px;
          border-radius: 9px;
          font-size: 12px;
          transition: .25s;
        }

        .m-button:hover {
          background: var(--purple-dark);
          transform: translateY(-3px);
        }

        .m-button-outline {
          background: white;
          color: var(--purple) !important;
          border: 1px solid #ded7e8;
        }

        .m-button-outline:hover {
          color: white !important;
        }

        .m-real-tag {
          display: inline-flex;
          gap: 9px;
          align-items: center;
          padding: 9px 13px;
          border: 1px solid #e8e2ed;
          border-radius: 50px;
          color: #77717e;
          font-size: 10px;
          margin-top: 34px;
          background: #fff;
        }

        .m-real-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #79a98c;
        }

        .m-device-area {
          display: flex;
          justify-content: center;
          position: relative;
          min-width: 0;
        }

        .m-device-decoration {
          position: absolute;
          width: 410px;
          height: 410px;
          border-radius: 50%;
          background: #e9dfee;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .m-device {
          position: relative;
          z-index: 2;
          width: 275px;
          height: 555px;
          background: #27242d;
          padding: 9px;
          border-radius: 40px;
          box-shadow: 0 35px 80px #44365430;
          border: 2px solid #aaa2b0;
        }

        .m-device-inner {
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: #faf8fc;
          position: relative;
        }

        .m-device-top {
          height: 29px;
          background: #faf8fc;
          display: flex;
          justify-content: space-between;
          padding: 5px 17px;
          font-size: 9px;
          position: relative;
          z-index: 2;
        }

        .m-camera {
          width: 65px;
          height: 17px;
          background: #27242d;
          border-radius: 0 0 12px 12px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
        }

        .m-app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 15px 10px;
          font-size: 12px;
        }

        .m-app-header strong {
          color: var(--purple);
          font-size: 16px;
        }

        .m-app-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e8deef;
          display: grid;
          place-items: center;
          color: var(--purple);
        }

        .m-app-welcome {
          margin: 8px 12px;
          padding: 17px 13px;
          background: linear-gradient(135deg, #7564a8, #a394c3);
          border-radius: 14px;
          color: white;
        }

        .m-app-welcome small {
          font-size: 8px;
          opacity: .8;
        }

        .m-app-welcome h3 {
          font-size: 17px;
          margin: 7px 0;
        }

        .m-app-welcome p {
          font-size: 8px;
          margin: 0;
          line-height: 2;
        }

        .m-app-title {
          font-size: 11px;
          font-weight: 700;
          padding: 12px 14px 7px;
        }

        .m-app-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          padding: 5px 12px;
        }

        .m-app-card {
          background: white;
          border: 1px solid #f0ecf3;
          border-radius: 11px;
          min-height: 94px;
          padding: 12px 9px;
        }

        .m-app-card-icon {
          width: 29px;
          height: 29px;
          border-radius: 9px;
          background: #f0eaf5;
          color: #806fae;
          display: grid;
          place-items: center;
          font-size: 17px;
          margin-bottom: 8px;
        }

        .m-app-card strong {
          display: block;
          font-size: 9px;
        }

        .m-app-card small {
          color: #a19ba8;
          font-size: 7px;
        }

        .m-app-bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          height: 48px;
          background: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-top: 1px solid #f0edf2;
          font-size: 15px;
          color: #a69bad;
        }

        .m-app-bottom span:first-child {
          color: var(--purple);
        }

        .m-floating-note {
          position: absolute;
          right: -45px;
          bottom: 100px;
          background: white;
          border-radius: 12px;
          padding: 15px 19px;
          box-shadow: 0 15px 35px #49365a17;
          z-index: 3;
          font-size: 10px;
        }

        .m-floating-note strong {
          display: block;
          color: var(--purple);
          font-size: 16px;
          margin-bottom: 4px;
        }

        .m-intro {
          background: white;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 32px 10%;
          gap: 25px;
          border-bottom: 1px solid #eeebef;
        }

        .m-intro-item {
          text-align: center;
          border-left: 1px solid #efebf0;
        }

        .m-intro-item:last-child {
          border: none;
        }

        .m-intro-item strong {
          display: block;
          font-size: 17px;
          color: var(--purple);
        }

        .m-intro-item span {
          font-size: 10px;
          color: #96909b;
        }

        .m-section {
          padding: 100px 9%;
        }

        .m-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 45px;
        }

        .m-section-heading h2 {
          font-size: 36px;
          margin: 0;
          line-height: 1.8;
        }

        .m-section-heading p {
          font-size: 12px;
          color: #8d8792;
          line-height: 2.5;
          max-width: 390px;
        }

        .m-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .m-feature {
          background: white;
          padding: 29px;
          border: 1px solid #eeeaf0;
          border-radius: 13px;
          transition: .3s;
          min-height: 215px;
        }

        .m-feature:hover {
          border-color: #c6b8da;
          transform: translateY(-5px);
          box-shadow: 0 18px 35px #4436540c;
        }

        .m-feature-number {
          font-size: 10px;
          color: #b3a2ca;
          letter-spacing: 2px;
        }

        .m-feature-icon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          background: #f0eaf5;
          color: var(--purple);
          border-radius: 13px;
          font-size: 22px;
          margin: 20px 0 12px;
        }

        .m-feature h3 {
          font-size: 16px;
          margin: 0 0 8px;
        }

        .m-feature p {
          color: #938d99;
          font-size: 11px;
          line-height: 2.3;
          margin: 0;
        }

        .m-preview {
          background: #eee9f3;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 65px;
          padding: 85px 10%;
        }

        .m-preview-copy h2 {
          font-size: 34px;
          line-height: 1.9;
          margin: 0 0 15px;
        }

        .m-preview-copy p {
          font-size: 12px;
          line-height: 2.5;
          color: #7d7587;
          margin-bottom: 25px;
        }

        .m-screen-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0 25px;
        }

        .m-screen-selector button {
          border: 1px solid #dcd3e5;
          background: white;
          color: #70647f;
          padding: 10px 13px;
          border-radius: 7px;
          font-size: 10px;
          cursor: pointer;
          transition: .2s;
        }

        .m-screen-selector button.active {
          background: var(--purple);
          color: white;
          border-color: var(--purple);
        }

        .m-preview-device-wrap {
          display: flex;
          justify-content: center;
        }

        .m-preview-device {
          width: 290px;
          height: 560px;
          background: #25222c;
          border-radius: 39px;
          padding: 9px;
          box-shadow: 0 30px 70px #51447130;
        }

        .m-preview-screen {
          width: 100%;
          height: 100%;
          background: #faf8fc;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .m-preview-status {
          height: 30px;
          padding: 7px 16px;
          font-size: 9px;
          display: flex;
          justify-content: space-between;
          color: #494052;
          flex-shrink: 0;
        }

        .m-preview-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 17px;
          background: #25222c;
          border-radius: 0 0 12px 12px;
          z-index: 3;
        }

        .m-preview-content {
          padding: 15px 14px 75px;
          flex: 1;
          overflow: hidden;
        }

        .m-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .m-preview-header strong {
          font-size: 17px;
          color: var(--purple);
        }

        .m-preview-header span {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #eee7f5;
          display: grid;
          place-items: center;
          color: var(--purple);
        }

        .m-preview-banner {
          padding: 20px 16px;
          border-radius: 15px;
          background: linear-gradient(135deg, #7564a8, #a99ac5);
          color: white;
          margin-bottom: 19px;
        }

        .m-preview-banner small {
          font-size: 9px;
          opacity: .85;
        }

        .m-preview-banner h3 {
          font-size: 21px;
          margin: 10px 0 6px;
        }

        .m-preview-banner p {
          font-size: 9px;
          line-height: 2;
          margin: 0;
          color: #f5effa;
        }

        .m-preview-heading {
          font-size: 12px;
          font-weight: 700;
          margin: 16px 0 12px;
          color: #41384f;
        }

        .m-preview-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .m-preview-card {
          background: white;
          border: 1px solid #eeeaf2;
          border-radius: 12px;
          padding: 12px 10px;
          min-height: 105px;
        }

        .m-preview-card-icon {
          width: 33px;
          height: 33px;
          display: grid;
          place-items: center;
          background: #f0eaf5;
          color: var(--purple);
          border-radius: 10px;
          font-size: 18px;
          margin-bottom: 9px;
        }

        .m-preview-card strong {
          font-size: 10px;
          display: block;
          color: #443c50;
        }

        .m-preview-card small {
          font-size: 8px;
          color: #a19aa9;
          display: block;
          margin-top: 5px;
        }

        .m-preview-extra {
          background: white;
          border-radius: 12px;
          padding: 13px;
          margin-top: 12px;
          border: 1px solid #eeeaf2;
        }

        .m-preview-extra strong {
          font-size: 10px;
          color: #514471;
          display: block;
          margin-bottom: 7px;
        }

        .m-preview-extra p {
          font-size: 9px;
          line-height: 2;
          color: #938b9a;
          margin: 0;
        }

        .m-preview-bottom {
          height: 53px;
          background: white;
          border-top: 1px solid #eeeaf1;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 16px;
          color: #a69bad;
          flex-shrink: 0;
        }

        .m-preview-bottom span:first-child {
          color: var(--purple);
        }

        .m-process {
          background: white;
          padding: 85px 9%;
        }

        .m-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .m-process-item {
          border-top: 2px solid #d8cbe5;
          padding-top: 20px;
        }

        .m-process-item strong {
          color: var(--purple);
          font-size: 25px;
        }

        .m-process-item h3 {
          font-size: 14px;
          margin: 12px 0;
        }

        .m-process-item p {
          font-size: 11px;
          color: #918b96;
          line-height: 2.3;
        }

        .m-cta {
          margin: 0 9% 85px;
          padding: 55px 8%;
          background: var(--purple-dark);
          border-radius: 18px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .m-cta h2 {
          font-size: 28px;
          margin: 0 0 10px;
        }

        .m-cta p {
          font-size: 11px;
          color: #d5cee0;
          line-height: 2;
        }

        .m-cta .m-button {
          background: white;
          color: var(--purple-dark) !important;
          white-space: nowrap;
        }

        .m-footer {
          background: #282436;
          color: white;
          padding: 35px 9%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
        }

        .m-footer span {
          color: #c2b8ce;
        }

        @media(max-width: 900px) {
          .m-hero {
            gap: 25px;
            padding: 55px 6%;
          }

          .m-hero h1 {
            font-size: 43px;
          }

          .m-floating-note {
            right: -15px;
          }

          .m-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .m-preview {
            gap: 25px;
            padding: 75px 6%;
          }
        }

        @media(max-width: 650px) {
          .m-nav {
            height: 70px;
            padding: 0 5%;
          }

          .m-menu {
            display: block;
          }

          .m-nav-links {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            left: 0;
            background: white;
            padding: 25px;
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
            box-shadow: 0 15px 30px #00000010;
          }

          .m-nav-links.show {
            display: flex;
          }

          .m-hero {
            grid-template-columns: 1fr;
            padding: 50px 7% 65px;
            gap: 45px;
          }

          .m-hero h1 {
            font-size: 43px;
          }

          .m-hero-copy > p {
            font-size: 12px;
          }

          .m-device {
            width: 255px;
            height: 520px;
          }

          .m-device-decoration {
            width: 330px;
            height: 330px;
          }

          .m-floating-note {
            right: -15px;
            bottom: 70px;
          }

          .m-intro {
            padding: 25px 5%;
            gap: 10px;
          }

          .m-intro-item strong {
            font-size: 14px;
          }

          .m-intro-item span {
            font-size: 9px;
          }

          .m-section {
            padding: 65px 6%;
          }

          .m-section-heading {
            display: block;
          }

          .m-section-heading h2 {
            font-size: 28px;
          }

          .m-section-heading p {
            margin-top: 10px;
          }

          .m-feature-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .m-feature {
            padding: 18px;
            min-height: 210px;
          }

          .m-feature h3 {
            font-size: 14px;
          }

          .m-feature p {
            font-size: 10px;
          }

          .m-preview {
            grid-template-columns: 1fr;
            padding: 65px 6%;
          }

          .m-preview-copy h2 {
            font-size: 28px;
          }

          .m-preview-device {
            width: 270px;
            height: 535px;
          }

          .m-process {
            padding: 65px 7%;
          }

          .m-process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .m-cta {
            margin: 0 5% 60px;
            padding: 35px 25px;
            flex-direction: column;
            align-items: flex-start;
          }

          .m-cta h2 {
            font-size: 23px;
          }

          .m-footer {
            padding: 30px 6%;
            flex-direction: column;
            gap: 13px;
            text-align: center;
          }
        }
      `}</style>

      <header className="m-nav">
        <a href="/portfolio" className="m-brand">
          <div className="m-brand-icon">م</div>
          <div>
            <strong>MADARYAR</strong>
            <small>MOTHERHOOD COMPANION</small>
          </div>
        </a>

        <button
          className="m-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="منو"
        >
          ☰
        </button>

        <nav className={`m-nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>درباره پروژه</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>امکانات</a>
          <a href="#preview" onClick={() => setMenuOpen(false)}>پیش‌نمایش اپ</a>
          <a href="/portfolio" onClick={() => setMenuOpen(false)}>بازگشت به نمونه‌کارها</a>
          <a className="m-nav-cta" href={appUrl} target="_blank" rel="noreferrer">
            ورود به مادریار ↗
          </a>
        </nav>
      </header>

      <section className="m-hero" id="home">
        <div className="m-hero-copy">
          <div className="m-label">A REAL DIGITAL PRODUCT · 2026</div>

          <h1>
            مادر بودن،
            <span>قرار نیست تنها باشد.</span>
          </h1>

          <p>
            مادریار یک همراه دیجیتال برای زندگی روزمره مادران است؛
            فضایی برای مراقبت از خود، مدیریت خانه، پیگیری رشد کودک
            و دسترسی به ابزارهای کاربردی در یک تجربه یکپارچه.
          </p>

          <div className="m-actions">
            <a className="m-button" href={appUrl} target="_blank" rel="noreferrer">
              مشاهده نسخه واقعی <span>↗</span>
            </a>
            <a className="m-button m-button-outline" href="#features">
              کشف امکانات
            </a>
          </div>

          <div className="m-real-tag">
            <span className="m-real-dot"></span>
            پروژه واقعی و توسعه‌یافته
          </div>
        </div>

        <div className="m-device-area">
          <div className="m-device-decoration"></div>

          <div className="m-device">
            <div className="m-device-inner">
              <div className="m-device-top">
                <span>۹:۴۱</span>
                <span>● ● ▰</span>
              </div>
              <div className="m-camera"></div>

              <div className="m-app-header">
                <strong>مادریار</strong>
                <div className="m-app-avatar">♡</div>
              </div>

              <div className="m-app-welcome">
                <small>همراه روزهای تو</small>
                <h3>سلام، مامان عزیز!</h3>
                <p>امروز فرصتی برای مراقبت از خودت هم در نظر بگیر.</p>
              </div>

              <div className="m-app-title">از کجا شروع کنیم؟</div>

              <div className="m-app-grid">
                {features.slice(0, 4).map((item) => (
                  <div className="m-app-card" key={item.number}>
                    <div className="m-app-card-icon">{item.icon}</div>
                    <strong>{item.title}</strong>
                    <small>همراه تو</small>
                  </div>
                ))}
              </div>

              <div className="m-app-title">یک قدم کوچک برای امروز</div>
              <div style={{
                margin: "5px 12px",
                padding: "12px",
                borderRadius: "10px",
                background: "#eee8f5",
                fontSize: "9px",
                color: "#65577e",
                lineHeight: 2
              }}>
                امروز چند دقیقه فقط برای خودت وقت بگذار.
              </div>

              <div className="m-app-bottom">
                <span>⌂</span><span>♡</span><span>✳</span><span>☻</span>
              </div>
            </div>
          </div>

          <div className="m-floating-note">
            <strong>یک همراه، چند نقش</strong>
            تمام دنیای مادرانه در یک اپ
          </div>
        </div>
      </section>

      <section className="m-intro">
        <div className="m-intro-item">
          <strong>RTL</strong>
          <span>طراحی فارسی و راست‌چین</span>
        </div>
        <div className="m-intro-item">
          <strong>WEB APP</strong>
          <span>اپلیکیشن تحت وب</span>
        </div>
        <div className="m-intro-item">
          <strong>REAL PROJECT</strong>
          <span>محصول توسعه‌یافته</span>
        </div>
      </section>

      <section className="m-section" id="features">
        <div className="m-section-heading">
          <div>
            <div className="m-label">WHAT'S INSIDE</div>
            <h2>یک همراه برای بخش‌های مختلف زندگی</h2>
          </div>
          <p>
            مادریار با هدف ساده‌تر کردن کارهای روزمره طراحی شده
            تا مادران بتوانند ابزارهای مورد نیاز خود را در یک محیط
            منظم و قابل دسترس پیدا کنند.
          </p>
        </div>

        <div className="m-feature-grid">
          {features.map((feature) => (
            <article className="m-feature" key={feature.number}>
              <div className="m-feature-number">{feature.number}</div>
              <div className="m-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="m-preview" id="preview">
        <div className="m-preview-copy">
          <div className="m-label">INTERACTIVE PREVIEW</div>
          <h2>از نزدیک با فضای مادریار آشنا شو.</h2>
          <p>
            بخش‌های مختلف اپلیکیشن را انتخاب کن و پیش‌نمایش
            رابط کاربری آن‌ها را در قاب موبایل مشاهده کن.
          </p>

          <div className="m-screen-selector">
            {features.map((feature, index) => (
              <button
                key={feature.number}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <p>{selected.description}</p>

          <a
            className="m-button"
            href={appUrl}
            target="_blank"
            rel="noreferrer"
          >
            ورود به نسخه واقعی اپ ↗
          </a>
        </div>

        <div className="m-preview-device-wrap">
          <div className="m-preview-device">
            <div className="m-preview-screen">

              <div className="m-preview-status">
                <span>۹:۴۱</span>
                <span>● ● ▰</span>
              </div>

              <div className="m-preview-notch"></div>

              <div className="m-preview-content">

                <div className="m-preview-header">
                  <strong>MADARYAR</strong>
                  <span>♡</span>
                </div>

                <div className="m-preview-banner">
                  <small>همراه روزهای تو</small>
                  <h3>{selected.title}</h3>
                  <p>یک فضای آرام برای زندگی بهتر و روزهای ساده‌تر.</p>
                </div>

                <div className="m-preview-heading">
                  بخش‌های کاربردی
                </div>

                <div className="m-preview-cards">
                  {features.slice(0, 4).map((item) => (
                    <div className="m-preview-card" key={item.number}>
                      <div className="m-preview-card-icon">
                        {item.icon}
                      </div>
                      <strong>{item.title}</strong>
                      <small>مشاهده امکانات</small>
                    </div>
                  ))}
                </div>

                <div className="m-preview-extra">
                  <strong>{selected.title}</strong>
                  <p>{selected.description}</p>
                </div>

                <div className="m-preview-extra">
                  <strong>یک پیشنهاد برای امروز</strong>
                  <p>
                    قدم‌های کوچک و پیوسته می‌توانند روزهای بهتری بسازند.
                  </p>
                </div>

              </div>

              <div className="m-preview-bottom">
                <span>⌂</span>
                <span>♡</span>
                <span>✳</span>
                <span>☻</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="m-process">
        <div className="m-label">PROJECT OVERVIEW</div>
        <h2 style={{ fontSize: 32, margin: 0 }}>از ایده تا محصول دیجیتال</h2>

        <div className="m-process-grid">
          <div className="m-process-item">
            <strong>01</strong>
            <h3>شناخت نیاز</h3>
            <p>توجه به نیازهای واقعی مادران در زندگی روزمره.</p>
          </div>

          <div className="m-process-item">
            <strong>02</strong>
            <h3>طراحی تجربه</h3>
            <p>ساختاردهی به امکانات و مسیرهای استفاده.</p>
          </div>

          <div className="m-process-item">
            <strong>03</strong>
            <h3>توسعه محصول</h3>
            <p>پیاده‌سازی بخش‌های مختلف اپلیکیشن.</p>
          </div>

          <div className="m-process-item">
            <strong>04</strong>
            <h3>انتشار و اجرا</h3>
            <p>ارائه نسخه آنلاین قابل استفاده برای کاربران.</p>
          </div>
        </div>
      </section>

      <section className="m-cta">
        <div>
          <h2>مادریار را تجربه کن.</h2>
          <p>یک همراه دیجیتال برای روزهای پرمشغله مادرانه.</p>
        </div>

        <a className="m-button" href={appUrl} target="_blank" rel="noreferrer">
          ورود به اپلیکیشن ↗
        </a>
      </section>

      <footer className="m-footer">
        <strong>MADARYAR</strong>
        <span>طراحی و توسعه محصول دیجیتال | NEXORA</span>
      </footer>
    </main>
  );
}
