
"use client";

import { useState } from "react";

const projects = [
  {
    id: 1, no: "01", title: "رزیدنس آوید", en: "AVID RESIDENCE",
    category: "مسکونی", location: "تهران، زعفرانیه", size: "۲۸۰ متر مربع",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90",
    description: "ترکیب آرامش، متریال طبیعی و نور در یک فضای مسکونی معاصر."
  },
  {
    id: 2, no: "02", title: "ویلای آتریوم", en: "ATRIUM VILLA",
    category: "مسکونی", location: "کردان، البرز", size: "۴۲۰ متر مربع",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90",
    description: "ارتباط معماری داخلی با طبیعت و فضای بیرونی."
  },
  {
    id: 3, no: "03", title: "استودیو نُما", en: "NOMA STUDIO",
    category: "اداری", location: "تهران", size: "۱۸۰ متر مربع",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=90",
    description: "فضایی خلاقانه با تأکید بر نور، عملکرد و سادگی."
  },
  {
    id: 4, no: "04", title: "خانه سنگ و چوب", en: "STONE & WOOD",
    category: "مسکونی", location: "لواسان", size: "۳۵۰ متر مربع",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=90",
    description: "هم‌نشینی بافت‌های طبیعی در فضایی گرم و ماندگار."
  },
  {
    id: 5, no: "05", title: "کافه مونو", en: "MONO CAFE",
    category: "تجاری", location: "تهران", size: "۱۲۰ متر مربع",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1400&q=90",
    description: "طراحی فضایی صمیمی با زبان معماری مینیمال."
  },
  {
    id: 6, no: "06", title: "آپارتمان سپید", en: "SEPID APARTMENT",
    category: "مسکونی", location: "تهران، الهیه", size: "۲۲۰ متر مربع",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=90",
    description: "تعادل میان حجم، نور و جزئیات در یک خانه معاصر."
  }
];

const services = [
  {
    no: "01", title: "طراحی معماری داخلی",
    en: "INTERIOR ARCHITECTURE",
    description: "طراحی یکپارچه فضا بر اساس نیاز، شخصیت و سبک زندگی کارفرما؛ از جانمایی فضاها تا طراحی جزئیات معماری."
  },
  {
    no: "02", title: "بازسازی و اجرای فضا",
    en: "RENOVATION & EXECUTION",
    description: "برنامه‌ریزی و بازآفرینی فضاهای قدیمی با انتخاب متریال مناسب و توجه به کیفیت اجرای جزئیات."
  },
  {
    no: "03", title: "مدلسازی و رندر سه‌بعدی",
    en: "3D VISUALIZATION",
    description: "ارائه تصاویر سه‌بعدی واقع‌گرایانه برای درک بهتر ترکیب متریال، نور، رنگ و چیدمان پیش از اجرا."
  },
  {
    no: "04", title: "طراحی مبلمان و جزئیات",
    en: "FURNITURE & DETAIL",
    description: "طراحی عناصر اختصاصی و انتخاب مبلمان، نورپردازی و اکسسوری متناسب با هویت هر پروژه."
  }
];

const processSteps = [
  ["01", "شناخت و گفت‌وگو"],
  ["02", "ایده‌پردازی و کانسپت"],
  ["03", "طراحی و انتخاب متریال"],
  ["04", "اجرا و تکمیل"]
];

export default function FormaInterior() {
  const [filter, setFilter] = useState("همه");
  const [activeService, setActiveService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = filter === "همه"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <main className="forma" dir="rtl">

      {/* HEADER */}

      <header className="header">
        <a href="#home" className="logo">
          <span className="logo-mark">F.</span>
          <span className="logo-name">
            <strong>FORMA</strong>
            <small>INTERIOR ARCHITECTURE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="باز کردن منو"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={menuOpen ? "navigation show" : "navigation"}>
          {[
            ["خانه", "#home"],
            ["رویکرد ما", "#about"],
            ["پروژه‌ها", "#projects"],
            ["خدمات", "#services"],
            ["ارتباط", "#contact"]
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="header-cta">
          درخواست مشاوره <span>↖</span>
        </a>
      </header>

      {/* NEW CINEMATIC HERO */}

      <section className="hero" id="home">

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2200&q=95"
            alt="طراحی معماری داخلی لوکس و معاصر"
          />
          <div className="hero-shade" />
        </div>

        <div className="hero-top">
          <span>INDEPENDENT DESIGN STUDIO</span>
          <span>TEHRAN / IRAN</span>
        </div>

        <div className="hero-content">

          <div className="hero-heading">
            <div className="hero-kicker">
              <span className="kicker-line" />
              معماری داخلی با نگاهی متفاوت
            </div>

            <h1>
              خانه‌ای
              <br />
              فراتر از
              <br />
              <em>تصور شما.</em>
            </h1>

            <p className="hero-description">
              ما فضاهایی خلق می‌کنیم که تنها زیبا نیستند؛
              بلکه بازتابی از شخصیت، سبک زندگی و احساس شما هستند.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-primary">
                مشاهده پروژه‌ها
                <span>↙</span>
              </a>
              <a href="#about" className="hero-secondary">
                کشف دنیای FORMA
              </a>
            </div>
          </div>

          <div className="hero-project-card">
            <div className="card-top">
              <span>FEATURED PROJECT</span>
              <span>01 / 06</span>
            </div>

            <div className="card-divider" />

            <h3>رزیدنس آوید</h3>
            <span className="card-en">AVID RESIDENCE</span>

            <div className="card-details">
              <div>
                <span>LOCATION</span>
                <strong>تهران، زعفرانیه</strong>
              </div>
              <div>
                <span>AREA</span>
                <strong>۲۸۰ متر مربع</strong>
              </div>
            </div>

            <a href="#projects" className="card-link">
              کشف این پروژه <span>↖</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-bottom-left">
            <span className="scroll-circle">↓</span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="hero-bottom-center">
            <span>FORM</span>
            <i />
            <span>LIGHT</span>
            <i />
            <span>MATERIAL</span>
          </div>

          <span className="hero-bottom-right">
            DESIGN WITH MEANING — 2026
          </span>
        </div>

        <div className="hero-vertical">ARCHITECTURE / INTERIOR / DESIGN</div>
      </section>

      {/* ABOUT */}

      <section className="about section" id="about">
        <div className="section-index">
          <span>01</span>
          <span>ABOUT THE STUDIO</span>
          <i />
        </div>

        <div className="about-layout">
          <div className="about-title">
            <span className="eyebrow">PHILOSOPHY OF SPACE</span>
            <h2>
              زیبایی در
              <br />
              <em>تعادل است.</em>
            </h2>
            <div className="about-symbol">F.</div>
          </div>

          <div className="about-description">
            <h3>
              هر فضا می‌تواند
              <br />
              امضای خودش را داشته باشد.
            </h3>
            <p>
              در FORMA طراحی از یک سؤال ساده آغاز می‌شود:
              چه چیزی یک فضا را واقعاً خاص می‌کند؟
            </p>
            <p>
              پاسخ ما در شناخت دقیق نیازها، انتخاب هوشمندانه
              متریال و توجه به جزئیاتی است که تفاوت اصلی را می‌سازند.
            </p>
            <a href="#services" className="simple-link">
              رویکرد طراحی ما <span>↖</span>
            </a>
          </div>
        </div>

        <div className="about-stats">
          <div><strong>01</strong><span>طراحی اختصاصی</span></div>
          <div><strong>360°</strong><span>نگاه جامع به فضا</span></div>
          <div><strong>∞</strong><span>امکان خلق ایده‌های تازه</span></div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}

      <section className="visual-break">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=95"
          alt="فضای معماری داخلی معاصر"
        />
        <div className="visual-break-overlay" />
        <div className="visual-break-content">
          <span>BEYOND THE ORDINARY</span>
          <h2>فضاهایی که<br />احساس می‌شوند.</h2>
          <p>LESS, BUT MORE MEANINGFUL.</p>
        </div>
        <span className="visual-break-number">02 — SPACES</span>
      </section>

      {/* PROJECTS */}

      <section className="projects section" id="projects">
        <div className="section-index">
          <span>02</span>
          <span>SELECTED WORKS</span>
          <i />
        </div>

        <div className="projects-heading">
          <div>
            <span className="eyebrow">A SELECTION OF OUR WORK</span>
            <h2>پروژه‌های<br /><em>منتخب ما.</em></h2>
          </div>
          <p>
            هر پروژه یک پاسخ متفاوت به نیازهای یک فضاست.
            مجموعه‌ای از ایده‌ها، متریال‌ها و تجربه‌های معماری.
          </p>
        </div>

        <div className="project-filters">
          {["همه", "مسکونی", "تجاری", "اداری"].map(item => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "selected" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="project-gallery">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              className={index % 3 === 1 ? "project-card project-tall" : "project-card"}
            >
              <div className="project-photo">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="photo-number">{project.no}</span>
                <span className="photo-arrow">↖</span>
                <div className="photo-hover">
                  <span>{project.en}</span>
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="project-meta">
                <div>
                  <span>{project.en}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-details">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                  <span>{project.size}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-end">
          <span>END OF SELECTED WORKS</span>
          <span>{String(visibleProjects.length).padStart(2, "0")} / 06</span>
        </div>
      </section>

      {/* MATERIALS */}

      <section className="material-section">
        <div className="material-image">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1500&q=90"
            alt="جزئیات متریال طراحی داخلی"
            loading="lazy"
          />
        </div>

        <div className="material-copy">
          <span className="eyebrow">THE LANGUAGE OF MATERIALS</span>
          <h2>
            شخصیت فضا
            <br />
            در جزئیات
            <br />
            <em>شکل می‌گیرد.</em>
          </h2>
          <p>
            چوب، سنگ، بافت، نور و رنگ؛ هر انتخاب بخشی از زبان معماری است.
            ما به دنبال هماهنگی میان این عناصر هستیم.
          </p>
          <div className="material-tags">
            <span>STONE</span>
            <span>WOOD</span>
            <span>TEXTURE</span>
            <span>LIGHT</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services section" id="services">
        <div className="section-index">
          <span>03</span>
          <span>OUR EXPERTISE</span>
          <i />
        </div>

        <div className="services-heading">
          <span className="eyebrow">WHAT WE CREATE</span>
          <h2>از تصور <em>تا ساخت.</em></h2>
          <p>
            خدمات طراحی ما برای شکل‌گیری یک تجربه کامل،
            از اولین ایده تا آخرین جزئیات در نظر گرفته شده‌اند.
          </p>
        </div>

        <div className="services-layout">
          <div className="service-list">
            {services.map((service, index) => (
              <button
                key={service.no}
                className={activeService === index ? "service-row active" : "service-row"}
                onClick={() => setActiveService(index)}
              >
                <span className="service-no">{service.no}</span>
                <span className="service-name">
                  <strong>{service.title}</strong>
                  <small>{service.en}</small>
                </span>
                <span className="service-plus">
                  {activeService === index ? "−" : "+"}
                </span>
              </button>
            ))}
          </div>

          <div className="service-detail" key={activeService}>
            <span className="detail-no">{services[activeService].no}</span>
            <span className="eyebrow">OUR EXPERTISE</span>
            <h3>{services[activeService].title}</h3>
            <p>{services[activeService].description}</p>
            <span className="detail-decoration">FORMA.</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="process">
        <div className="process-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1500&q=90"
            alt="فضای معماری معاصر"
            loading="lazy"
          />
        </div>

        <div className="process-copy">
          <span className="eyebrow">04 / OUR PROCESS</span>
          <h2>یک مسیر<br /><em>فکرشده.</em></h2>
          <p>
            طراحی خوب نتیجه یک تصمیم اتفاقی نیست.
            هر مرحله با دقت و هماهنگی پیش می‌رود
            تا ایده اولیه به فضایی قابل زندگی تبدیل شود.
          </p>

          <div className="process-list">
            {processSteps.map(([no, title]) => (
              <div key={no}>
                <span>{no}</span>
                <strong>{title}</strong>
                <i>↙</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}

      <section className="quote">
        <span className="quote-top">A THOUGHT ABOUT DESIGN</span>
        <span className="quote-symbol">“</span>
        <h2>
          معماری فقط ساختن یک فضا نیست؛
          <br />
          <em>ساختن احساسی ماندگار است.</em>
        </h2>
        <span className="quote-bottom">FORMA INTERIOR STUDIO</span>
      </section>

      {/* CONTACT */}

      <section className="contact section" id="contact">
        <div className="section-index">
          <span>05</span>
          <span>START A PROJECT</span>
          <i />
        </div>

        <span className="eyebrow">LET'S TALK ABOUT YOUR SPACE</span>
        <h2>بیایید چیزی<br /><em>ماندگار خلق کنیم.</em></h2>

        <div className="contact-bottom">
          <p>
            هر فضای خاص با یک گفت‌وگوی ساده آغاز می‌شود.
            برای شروع مسیر طراحی، با ما در ارتباط باشید.
          </p>
          <a href="mailto:hello@forma.ir" className="contact-link">
            ارسال درخواست مشاوره <span>↖</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a href="#home" className="footer-logo">FORMA<span>.</span></a>
            <p>INTERIOR ARCHITECTURE STUDIO</p>
          </div>

          <div className="footer-nav">
            <a href="#about">درباره استودیو</a>
            <a href="#projects">پروژه‌ها</a>
            <a href="#services">خدمات</a>
            <a href="#contact">ارتباط</a>
          </div>

          <div className="footer-statement">
            <span>DESIGNED AROUND LIFE.</span>
            <span>TEHRAN / IRAN</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FORMA INTERIOR</span>
          <span>AN EXPERIMENT IN FORM & SPACE.</span>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        *{box-sizing:border-box}
        html{scroll-behavior:smooth;scroll-padding-top:85px}
        body{margin:0;background:#f3f0e9}
        .forma{
          --bg:#f3f0e9;
          --ink:#282820;
          --muted:#817c70;
          --gold:#a18a6b;
          --line:#d8d1c5;
          background:var(--bg);
          color:var(--ink);
          font-family:'Vazirmatn',sans-serif;
          overflow:hidden;
        }
        .forma a{color:inherit;text-decoration:none}
        .forma button{font-family:inherit}
        .forma img{display:block;max-width:100%}

        /* HEADER */
        .header{
          height:82px;padding:0 7%;
          display:flex;justify-content:space-between;
          align-items:center;background:var(--bg);
          position:relative;z-index:20;
        }
        .logo{display:flex;align-items:center;gap:10px;direction:ltr}
        .logo-mark{font:48px 'Playfair Display';color:var(--gold);line-height:1}
        .logo-name{display:flex;flex-direction:column;gap:3px}
        .logo-name strong{font:19px 'Playfair Display';letter-spacing:4px}
        .logo-name small{font:8px 'Playfair Display';letter-spacing:1.5px;color:var(--muted)}
        .navigation{display:flex;gap:34px}
        .navigation a{font-size:11px;color:#68665c;transition:.3s}
        .navigation a:hover{color:var(--gold)}
        .header-cta{border:1px solid #a99a83;padding:12px 19px;font-size:10px;transition:.3s}
        .header-cta:hover{background:var(--ink);color:white}
        .header-cta span{margin-right:12px}
        .menu-toggle{display:none;background:none;border:0;font-size:25px;cursor:pointer}

        /* HERO - COMPLETE REDESIGN */
        .hero{
          position:relative;
          min-height:760px;
          height:min(850px,calc(100svh - 82px));
          background:#38372e;
          color:#fff;
          overflow:hidden;
          isolation:isolate;
        }
        .hero-image{position:absolute;inset:0;z-index:-2;overflow:hidden}
        .hero-image img{
          width:100%;height:100%;object-fit:cover;
          object-position:center 53%;
          animation:heroZoom 18s ease-out both;
        }
        .hero-shade{
          position:absolute;inset:0;
          background:
            linear-gradient(270deg,rgba(25,24,19,.76) 0%,rgba(25,24,19,.53) 35%,rgba(25,24,19,.13) 75%,rgba(25,24,19,.28) 100%),
            linear-gradient(0deg,rgba(20,19,15,.48),transparent 32%);
        }
        .hero-top{
          position:absolute;top:30px;left:7%;right:7%;
          display:flex;justify-content:space-between;
          direction:ltr;
          font:9px 'Playfair Display';
          letter-spacing:2px;color:#f1eadd;
          animation:fadeUp 1s .2s both;
        }
        .hero-content{
          position:absolute;inset:0;
          display:flex;align-items:center;justify-content:space-between;
          padding:100px 11% 90px 9%;
          gap:35px;
        }
        .hero-heading{
          width:55%;max-width:650px;
          animation:fadeUp 1s .35s both;
        }
        .hero-kicker{
          display:flex;align-items:center;gap:13px;
          font-size:12px;color:#e5d6bd;
          margin-bottom:27px;
        }
        .kicker-line{width:35px;height:1px;background:#c7ad88}
        .hero-heading h1{
          font-size:clamp(65px,8.1vw,112px);
          font-weight:400;line-height:1.35;
          letter-spacing:-3px;margin:0;
          text-shadow:0 4px 35px #0002;
        }
        .hero-heading h1 em{
          font-family:'Playfair Display',serif;
          font-weight:400;color:#c5aa83;
          font-style:italic;
        }
        .hero-description{
          max-width:390px;font-size:12px;
          color:#e5dfd4;line-height:2.7;
          margin:24px 0 30px;
        }
        .hero-actions{display:flex;align-items:center;gap:28px;flex-wrap:wrap}
        .hero-primary{
          display:flex;align-items:center;gap:23px;
          padding:14px 19px;background:#c1a780;
          color:#29271f!important;font-size:11px;
          transition:.35s;
        }
        .hero-primary span{font-size:18px}
        .hero-primary:hover{background:#eee4d3;transform:translateY(-3px)}
        .hero-secondary{
          font-size:11px;color:#f1e9dc!important;
          border-bottom:1px solid #b9a181;padding-bottom:8px;
        }

        .hero-project-card{
          width:255px;flex-shrink:0;
          padding:24px;
          background:rgba(243,240,233,.93);
          color:#302e26;
          border:1px solid rgba(255,255,255,.55);
          box-shadow:0 25px 80px #0003;
          backdrop-filter:blur(12px);
          animation:cardIn 1s .65s both;
          align-self:flex-end;
          margin-bottom:50px;
        }
        .card-top{
          display:flex;justify-content:space-between;
          font:8px 'Playfair Display';
          letter-spacing:1px;color:#8a7a61;
        }
        .card-divider{height:1px;background:#d9d0c1;margin:18px 0}
        .hero-project-card h3{font-size:20px;font-weight:500;margin:0 0 5px}
        .card-en{font:9px 'Playfair Display';letter-spacing:1.5px;color:#9b8669}
        .card-details{
          display:grid;grid-template-columns:1fr 1fr;
          gap:12px;margin:25px 0;
        }
        .card-details div{display:flex;flex-direction:column;gap:8px}
        .card-details span{font:8px 'Playfair Display';letter-spacing:1px;color:#9a8a73}
        .card-details strong{font-size:10px;font-weight:500}
        .card-link{
          border-top:1px solid #d9d0c1;
          padding-top:16px;display:flex;justify-content:space-between;
          font-size:10px;
        }
        .card-link span{font-size:17px;color:#9b8262}

        .hero-bottom{
          position:absolute;bottom:0;left:7%;right:7%;
          height:65px;border-top:1px solid #ffffff40;
          display:flex;align-items:center;justify-content:space-between;
          direction:ltr;
          font:8px 'Playfair Display';letter-spacing:1.5px;color:#eee6d8;
        }
        .hero-bottom-left{display:flex;align-items:center;gap:12px}
        .scroll-circle{
          width:29px;height:29px;border:1px solid #d5c1a1;
          border-radius:50%;display:grid;place-items:center;font-size:14px;
        }
        .hero-bottom-center{display:flex;align-items:center;gap:12px}
        .hero-bottom-center i{width:20px;height:1px;background:#c4ad8b}
        .hero-vertical{
          position:absolute;left:24px;top:50%;
          transform:translateY(-50%) rotate(-90deg);
          transform-origin:left center;
          font:8px 'Playfair Display';letter-spacing:2px;
          color:#eee4d4;
        }

        /* COMMON */
        .section{padding:110px 10%}
        .section-index{
          display:flex;align-items:center;gap:15px;
          font:9px 'Playfair Display';letter-spacing:1.5px;
          direction:ltr;color:#8e826f;
        }
        .section-index i{height:1px;background:var(--line);flex:1}
        .eyebrow{
          display:block;font:9px 'Playfair Display';
          letter-spacing:2px;color:#9a8466;
          margin-bottom:20px;direction:ltr;text-align:right;
        }

        /* ABOUT */
        .about-layout{
          display:grid;grid-template-columns:1fr .8fr;
          gap:12%;margin-top:80px;align-items:center;
        }
        .about-title h2{
          font-size:clamp(45px,5.5vw,72px);
          line-height:1.5;font-weight:400;margin:0;
        }
        .about-title h2 em,.projects-heading h2 em,
        .services-heading h2 em,.process-copy h2 em{
          font:italic 400 1em 'Playfair Display';color:var(--gold);
        }
        .about-symbol{font:105px 'Playfair Display';color:#e3ddd1;margin-top:35px;line-height:1}
        .about-description h3{font-size:20px;font-weight:500;line-height:2;margin:0 0 20px}
        .about-description p{font-size:12px;line-height:2.8;color:var(--muted)}
        .simple-link{display:inline-block;font-size:11px;margin-top:20px;padding-bottom:9px;border-bottom:1px solid var(--gold)}
        .simple-link span{margin-right:13px}
        .about-stats{
          display:grid;grid-template-columns:repeat(3,1fr);
          border-top:1px solid var(--line);margin-top:75px;padding-top:25px;
        }
        .about-stats>div{display:flex;flex-direction:column;gap:10px}
        .about-stats strong{font:37px 'Playfair Display';color:#9a8262}
        .about-stats span{font-size:10px;color:var(--muted)}

        /* VISUAL BREAK */
        .visual-break{height:590px;position:relative;overflow:hidden}
        .visual-break>img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
        .visual-break-overlay{position:absolute;inset:0;background:linear-gradient(90deg,#14140f90,#14140f19)}
        .visual-break-content{position:absolute;top:50%;right:12%;transform:translateY(-50%);color:white}
        .visual-break-content>span,.visual-break-content>p{font:9px 'Playfair Display';letter-spacing:2px}
        .visual-break-content h2{font-size:clamp(42px,5vw,65px);font-weight:400;line-height:1.65;margin:25px 0}
        .visual-break-number{position:absolute;bottom:25px;left:7%;font:9px 'Playfair Display';color:white;letter-spacing:2px}

        /* PROJECTS */
        .projects-heading{display:flex;justify-content:space-between;align-items:flex-end;margin-top:65px;gap:30px}
        .projects-heading h2{font-size:clamp(45px,5.5vw,68px);font-weight:400;line-height:1.5;margin:0}
        .projects-heading>p{max-width:320px;color:var(--muted);font-size:12px;line-height:2.6;margin-bottom:10px}
        .project-filters{display:flex;gap:30px;margin:55px 0 35px;border-bottom:1px solid var(--line)}
        .project-filters button{
          background:transparent;border:0;border-bottom:2px solid transparent;
          padding:0 0 14px;color:#8b867a;font-size:11px;cursor:pointer;
        }
        .project-filters button.selected{color:var(--ink);border-bottom-color:#9c8567}
        .project-gallery{display:grid;grid-template-columns:1fr 1fr;gap:70px 30px;align-items:start}
        .project-card:nth-child(even){margin-top:100px}
        .project-photo{height:390px;position:relative;overflow:hidden;background:#e4dfd4}
        .project-tall .project-photo{height:470px}
        .project-photo>img{width:100%;height:100%;object-fit:cover;transition:transform .9s}
        .project-photo:hover>img{transform:scale(1.055)}
        .photo-number{position:absolute;top:17px;right:18px;color:white;font:12px 'Playfair Display';text-shadow:0 2px 5px #0007}
        .photo-arrow{
          position:absolute;bottom:17px;left:17px;width:42px;height:42px;
          display:grid;place-items:center;background:#f3f0e9;font-size:20px;transition:.3s;
        }
        .project-photo:hover .photo-arrow{background:#302f28;color:white}
        .photo-hover{
          position:absolute;inset:auto 0 0;padding:55px 20px 20px;color:white;
          opacity:0;transform:translateY(10px);transition:.4s;
          background:linear-gradient(transparent,#171711d9);
        }
        .project-photo:hover .photo-hover{opacity:1;transform:translateY(0)}
        .photo-hover>span{font:10px 'Playfair Display';letter-spacing:1.5px}
        .photo-hover p{font-size:11px;line-height:2;margin:8px 0 0}
        .project-meta{display:flex;justify-content:space-between;align-items:flex-start;padding-top:19px;gap:15px}
        .project-meta>div:first-child>span{font:9px 'Playfair Display';color:#9a866b;letter-spacing:1.2px}
        .project-meta h3{font-size:17px;font-weight:500;margin:7px 0}
        .project-details{display:flex;flex-direction:column;gap:6px;text-align:left;font-size:9px;color:#898376}
        .gallery-end{
          display:flex;justify-content:space-between;border-top:1px solid var(--line);
          padding-top:18px;margin-top:75px;font:9px 'Playfair Display';
          color:#898273;letter-spacing:1.5px;direction:ltr;
        }

        /* MATERIALS */
        .material-section{display:grid;grid-template-columns:1fr 1fr;min-height:590px;background:#e8e3d9}
        .material-image{min-height:590px;overflow:hidden}
        .material-image img{width:100%;height:100%;object-fit:cover;transition:transform 1s}
        .material-image:hover img{transform:scale(1.035)}
        .material-copy{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:70px 12%}
        .material-copy h2{font-size:clamp(38px,4vw,57px);line-height:1.7;font-weight:400;margin:0}
        .material-copy h2 em{font:italic 400 1em 'Playfair Display';color:#947b5c}
        .material-copy>p{max-width:390px;font-size:12px;line-height:2.7;color:#797469;margin:25px 0}
        .material-tags{display:flex;gap:10px;flex-wrap:wrap}
        .material-tags span{border:1px solid #c5b9a6;padding:8px 11px;font:8px 'Playfair Display';letter-spacing:1px;color:#7f715e}

        /* SERVICES */
        .services-heading{margin:65px 0 50px}
        .services-heading h2{font-size:clamp(43px,5vw,64px);font-weight:400;margin:0}
        .services-heading>p{font-size:12px;color:var(--muted);line-height:2.5;max-width:420px}
        .services-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:9%;align-items:stretch}
        .service-list{border-top:1px solid var(--line)}
        .service-row{
          width:100%;display:flex;align-items:center;text-align:right;gap:22px;
          padding:23px 0;background:transparent;border:0;
          border-bottom:1px solid var(--line);cursor:pointer;color:var(--ink);
        }
        .service-no{font:12px 'Playfair Display';color:#a18b6e}
        .service-name{display:flex;flex-direction:column;gap:5px;flex:1}
        .service-name strong{font-size:14px;font-weight:500}
        .service-name small{font:8px 'Playfair Display';letter-spacing:1px;color:#999184;direction:ltr;text-align:right}
        .service-plus{font-size:22px;color:#a38d70;transition:transform .3s}
        .service-row.active .service-plus{transform:rotate(45deg)}
        .service-row.active .service-name strong{color:#947b5b}
        .service-detail{
          background:#e8e3d9;padding:30px;position:relative;min-height:270px;
          overflow:hidden;display:flex;flex-direction:column;justify-content:center;
          animation:fadeUp .3s both;
        }
        .detail-no{position:absolute;top:12px;left:20px;font:60px 'Playfair Display';color:#d8d0c2}
        .service-detail .eyebrow{position:relative}
        .service-detail h3{font-size:22px;font-weight:500;position:relative}
        .service-detail p{font-size:11px;color:#777267;line-height:2.5;position:relative}
        .detail-decoration{font:11px 'Playfair Display';letter-spacing:3px;color:#a18b6d;margin-top:15px}

        /* PROCESS */
        .process{display:grid;grid-template-columns:1fr 1fr;background:#eae6dd;direction:ltr}
        .process-image{min-height:630px;overflow:hidden}
        .process-image img{width:100%;height:100%;object-fit:cover}
        .process-copy{direction:rtl;display:flex;flex-direction:column;justify-content:center;padding:80px 12%}
        .process-copy h2{font-size:clamp(42px,5vw,65px);font-weight:400;line-height:1.5;margin:0}
        .process-copy>p{font-size:12px;line-height:2.6;color:#777267;margin:20px 0 30px}
        .process-list{border-top:1px solid #d0c9bd}
        .process-list>div{display:flex;align-items:center;gap:20px;border-bottom:1px solid #d0c9bd;padding:17px 0}
        .process-list span{font:12px 'Playfair Display';color:#9b866a}
        .process-list strong{font-size:11px;font-weight:500;flex:1}
        .process-list i{font-style:normal;color:#a28b6c}

        /* QUOTE */
        .quote{padding:105px 20px;background:#302f28;color:#f3f0e9;text-align:center}
        .quote-top,.quote-bottom{display:block;font:9px 'Playfair Display';letter-spacing:2px;color:#b5a48b}
        .quote-symbol{display:block;height:90px;font:100px 'Playfair Display';color:#a38d6e}
        .quote h2{font-size:clamp(23px,3.5vw,43px);font-weight:400;line-height:2;margin:20px 0 30px}
        .quote h2 em{font:italic 400 1em 'Playfair Display';color:#c4b398}

        /* CONTACT */
        .contact{background:#e8e3d9}
        .contact>.eyebrow{margin-top:65px}
        .contact h2{font-size:clamp(44px,6vw,78px);line-height:1.6;font-weight:400;margin:0}
        .contact h2 em{font:italic 400 1em 'Playfair Display';color:#957e5f}
        .contact-bottom{display:flex;align-items:center;justify-content:space-between;gap:25px;border-top:1px solid #cec6b9;margin-top:55px;padding-top:25px}
        .contact-bottom p{max-width:390px;font-size:12px;line-height:2.5;color:#777267}
        .contact-link{border-bottom:1px solid #9a8569;padding-bottom:10px;font-size:11px;white-space:nowrap}
        .contact-link span{margin-right:15px}

        /* FOOTER */
        .footer{background:#302f28;color:#f3f0e9;padding:65px 9% 23px}
        .footer-main{display:grid;grid-template-columns:1fr 1fr 1fr;gap:25px;align-items:center;padding-bottom:55px}
        .footer-logo{font:43px 'Playfair Display';letter-spacing:5px}
        .footer-logo span{color:#b59b78}
        .footer-main>div:first-child p{font:8px 'Playfair Display';letter-spacing:2px;color:#a8a194}
        .footer-nav{display:flex;flex-direction:column;gap:13px;font-size:10px;color:#d1c9bb}
        .footer-nav a:hover{color:#c6ad89}
        .footer-statement{display:flex;flex-direction:column;gap:12px;text-align:left;font:9px 'Playfair Display';letter-spacing:1.5px;color:#b7ad9d}
        .footer-bottom{border-top:1px solid #555348;padding-top:20px;display:flex;justify-content:space-between;direction:ltr;font:8px 'Playfair Display';letter-spacing:1px;color:#aaa395}

        /* ANIMATIONS */
        @keyframes heroZoom{
          from{transform:scale(1.09)}
          to{transform:scale(1)}
        }
        @keyframes fadeUp{
          from{opacity:0;transform:translateY(25px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes cardIn{
          from{opacity:0;transform:translateX(-25px)}
          to{opacity:1;transform:translateX(0)}
        }

        /* TABLET */
        @media(max-width:950px){
          .header{padding:0 5%}
          .navigation{gap:17px}
          .hero{min-height:700px}
          .hero-content{padding-right:8%;padding-left:7%}
          .hero-heading h1{font-size:75px}
          .hero-project-card{width:220px;padding:19px}
          .section{padding:85px 7%}
          .project-photo{height:320px}
          .project-tall .project-photo{height:390px}
          .material-copy{padding:50px 8%}
        }

        /* MOBILE */
        @media(max-width:650px){
          .header{height:72px;padding:0 6%}
          .logo-mark{font-size:38px}
          .logo-name strong{font-size:16px}
          .menu-toggle{display:block}
          .navigation{
            display:none;position:absolute;top:72px;right:0;left:0;
            padding:25px 8%;background:#f3f0e9;flex-direction:column;
            gap:22px;box-shadow:0 15px 20px #00000012;
          }
          .navigation.show{display:flex}
          .header-cta{display:none}

          .hero{height:auto;min-height:790px;height:calc(100svh - 72px);max-height:950px}
          .hero-image img{object-position:57% center}
          .hero-shade{
            background:linear-gradient(0deg,rgba(24,23,18,.9),rgba(24,23,18,.48) 65%,rgba(24,23,18,.3));
          }
          .hero-top{top:20px;left:6%;right:6%;font-size:7px;letter-spacing:1px}
          .hero-content{
            padding:90px 8% 105px;
            flex-direction:column;align-items:flex-start;
            justify-content:center;gap:30px;
          }
          .hero-heading{width:100%;max-width:none}
          .hero-kicker{font-size:10px;margin-bottom:16px}
          .hero-heading h1{font-size:clamp(58px,15vw,82px);line-height:1.3;letter-spacing:-2px}
          .hero-description{font-size:11px;max-width:310px;line-height:2.3;margin:17px 0 20px}
          .hero-actions{gap:19px}
          .hero-primary{padding:12px 14px;font-size:10px}
          .hero-secondary{font-size:10px}
          .hero-project-card{
            width:min(100%,310px);padding:15px 18px;
            margin:0 0 0 auto;
          }
          .card-divider{margin:11px 0}
          .hero-project-card h3{font-size:17px}
          .card-details{margin:13px 0}
          .card-link{padding-top:10px}
          .hero-bottom{left:6%;right:6%;height:48px;font-size:7px}
          .hero-bottom-center{display:none}
          .hero-bottom-right{font-size:6px}
          .hero-vertical{display:none}

          .section{padding:75px 7%}
          .about-layout{grid-template-columns:1fr;gap:25px;margin-top:50px}
          .about-title h2{font-size:53px}
          .about-symbol{font-size:75px;margin-top:15px}
          .about-description h3{font-size:18px}
          .about-stats{margin-top:45px;gap:10px}
          .about-stats strong{font-size:29px}
          .about-stats span{font-size:9px}
          .visual-break{height:430px}
          .visual-break-content{right:8%}
          .visual-break-content h2{font-size:42px}
          .projects-heading{flex-direction:column;align-items:flex-start;margin-top:45px}
          .projects-heading h2{font-size:51px}
          .projects-heading>p{font-size:11px}
          .project-filters{gap:20px;margin:38px 0 25px}
          .project-gallery{grid-template-columns:1fr;gap:40px}
          .project-card:nth-child(even){margin-top:0}
          .project-photo,.project-tall .project-photo{height:310px}
          .photo-hover{opacity:1;transform:none}
          .project-meta h3{font-size:15px}
          .project-details{font-size:8px}
          .gallery-end{margin-top:45px}
          .material-section{grid-template-columns:1fr}
          .material-image{min-height:360px;height:360px}
          .material-copy{padding:65px 8%}
          .material-copy h2{font-size:45px}
          .services-heading{margin:45px 0 35px}
          .services-heading h2{font-size:48px}
          .services-layout{grid-template-columns:1fr;gap:30px}
          .service-row{gap:15px}
          .service-detail{min-height:235px}
          .process{grid-template-columns:1fr}
          .process-image{min-height:370px;height:370px}
          .process-copy{padding:65px 8%}
          .process-copy h2{font-size:48px}
          .quote{padding:80px 18px}
          .quote h2{font-size:24px}
          .contact>.eyebrow{margin-top:45px}
          .contact h2{font-size:46px}
          .contact-bottom{flex-direction:column;align-items:flex-start;gap:15px;margin-top:35px}
          .footer{padding:50px 7% 22px}
          .footer-main{grid-template-columns:1fr 1fr;gap:35px}
          .footer-statement{grid-column:1/-1;text-align:right}
          .footer-bottom{font-size:7px;gap:12px}
        }

        @media(prefers-reduced-motion:reduce){
          .forma *,.forma *::before,.forma *::after{
            animation-duration:.01ms!important;
            transition-duration:.01ms!important;
            scroll-behavior:auto!important;
          }
        }
      `}</style>
    </main>
  );
}
