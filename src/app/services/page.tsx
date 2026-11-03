
"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "طراحی و توسعه وب‌سایت",
    subtitle: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "طراحی وب‌سایت‌های حرفه‌ای، سریع و واکنش‌گرا متناسب با هویت برند و نیاز کسب‌وکار شما.",
    features: [
      "طراحی اختصاصی رابط کاربری",
      "نمایش صحیح در موبایل و دسکتاپ",
      "ساخت صفحات و بخش‌های موردنیاز",
      "توجه به سرعت و اصول سئو",
    ],
    icon: "WEB",
    className: "web",
  },
  {
    number: "02",
    title: "طراحی و توسعه اپلیکیشن",
    subtitle: "APP DESIGN & DEVELOPMENT",
    description:
      "طراحی تجربه کاربری و رابط اپلیکیشن‌های کاربردی با تمرکز بر سادگی، زیبایی و دسترسی آسان.",
    features: [
      "طراحی رابط کاربری اپلیکیشن",
      "طراحی مسیر حرکت کاربران",
      "ساخت نمونه اولیه و ماکاپ",
      "طراحی نسخه موبایل",
    ],
    icon: "APP",
    className: "app",
  },
  {
    number: "03",
    title: "تیزر تبلیغاتی با هوش مصنوعی",
    subtitle: "AI VIDEO & ADVERTISING",
    description:
      "خلق ویدئوهای تبلیغاتی خلاقانه با کمک ابزارهای هوش مصنوعی برای معرفی محصولات و خدمات.",
    features: [
      "ایده‌پردازی و سناریونویسی",
      "تولید تصاویر و ویدئوهای AI",
      "ساخت تیزر معرفی محصول",
      "تدوین و آماده‌سازی محتوای تبلیغاتی",
    ],
    icon: "AI",
    className: "video",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

.services-page {
  --purple: #7950d9;
  --ink: #211b35;
  direction: rtl;
  min-height: 100vh;
  background: #fff;
  color: var(--ink);
  font-family: 'Vazirmatn', Tahoma, sans-serif;
}
.services-page * { box-sizing: border-box; }
.services-page a { color: inherit; text-decoration: none; }
.s-container { width: min(1160px, calc(100% - 48px)); margin: auto; }

.s-nav {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0edf6;
}
.s-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 900;
}
.s-logo-mark {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  color: white;
  border-radius: 12px;
  background: linear-gradient(145deg,#a98bf2,#7045d1);
  box-shadow: 0 7px 18px #7950d933;
}
.s-back { color: #7452bd !important; font-size: 13px; font-weight: 700; }

.s-hero {
  position: relative;
  overflow: hidden;
  padding: 92px 0 85px;
  background:
    radial-gradient(ellipse at 82% 20%,#eadfff 0%,transparent 50%),
    linear-gradient(120deg,#fff,#faf8ff);
}
.s-hero::after {
  content: "";
  position: absolute;
  width: 330px;
  height: 330px;
  border: 1px solid #a98bf22b;
  border-radius: 50%;
  left: -120px;
  bottom: -190px;
}
.s-kicker {
  color: #815bd0;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
}
.s-hero h1 {
  max-width: 760px;
  margin: 18px 0;
  font-size: clamp(36px,5vw,58px);
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: -1.8px;
}
.s-gradient {
  color: #8057d4;
  background: linear-gradient(100deg,#a58aef,#6840c3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.s-hero p {
  max-width: 620px;
  margin: 0;
  color: #777187;
  font-size: 14px;
  line-height: 2.4;
}
.s-hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}
.s-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 22px;
  border-radius: 11px;
  color: white !important;
  background: linear-gradient(110deg,#9672e6,#7048c9);
  font-size: 12px;
  font-weight: 800;
  transition: .25s;
}
.s-button:hover { transform: translateY(-3px); box-shadow: 0 10px 25px #7950d933; }
.s-button-outline {
  color: #7652bd !important;
  border: 1px solid #e7def8;
  background: white;
}

.s-intro { padding: 75px 0 25px; }
.s-section-label {
  color: #8b70c2;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.5px;
}
.s-section-title {
  margin: 12px 0;
  font-size: 29px;
  font-weight: 900;
}
.s-section-desc {
  max-width: 620px;
  margin: 0;
  color: #817a90;
  font-size: 13px;
  line-height: 2.3;
}

.s-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 22px;
  padding: 28px 0 85px;
}
.s-card {
  position: relative;
  overflow: hidden;
  padding: 26px 23px;
  border: 1px solid #eeeaf5;
  border-radius: 19px;
  background: #fff;
  transition: transform .3s,box-shadow .3s,border-color .3s;
}
.s-card:hover {
  transform: translateY(-7px);
  border-color: #d8c9fa;
  box-shadow: 0 20px 45px #6040a514;
}
.s-card::before {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  left: -65px;
  top: -65px;
  border-radius: 50%;
  background: #f3edff;
}
.s-card.app::before { background: #eaf2ff; }
.s-card.video::before { background: #f8eafa; }
.s-card-top {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.s-number { color: #a18bc9; font-size: 12px; font-weight: 900; }
.s-icon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  color: #7950d9;
  background: #f2ecff;
  font-size: 14px;
  font-weight: 900;
}
.s-card.app .s-icon { color: #4778c9; background: #edf3ff; }
.s-card.video .s-icon { color: #a04da7; background: #f8edfa; }
.s-subtitle {
  margin-top: 25px;
  color: #9678ca;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}
.s-card h3 {
  margin: 10px 0;
  font-size: 20px;
  font-weight: 900;
}
.s-card > p {
  min-height: 78px;
  margin: 0;
  color: #817a90;
  font-size: 12px;
  line-height: 2.2;
}
.s-features {
  display: grid;
  gap: 12px;
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid #f0edf5;
}
.s-feature {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #655d74;
  font-size: 11px;
}
.s-check {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 19px;
  height: 19px;
  border-radius: 6px;
  color: #7950d9;
  background: #f2ecff;
  font-size: 11px;
  font-weight: 900;
}
.s-card.app .s-check { color: #4778c9; background: #edf3ff; }
.s-card.video .s-check { color: #a04da7; background: #f8edfa; }

.s-process {
  padding: 75px 0;
  background: #faf8ff;
}
.s-process-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 16px;
  margin-top: 35px;
}
.s-step {
  padding: 22px 19px;
  border: 1px solid #eee8f8;
  border-radius: 15px;
  background: white;
}
.s-step span {
  color: #9672df;
  font-size: 12px;
  font-weight: 900;
}
.s-step h3 { margin: 13px 0 7px; font-size: 15px; }
.s-step p {
  margin: 0;
  color: #817a90;
  font-size: 11px;
  line-height: 2.1;
}

.s-cta {
  padding: 80px 0;
  text-align: center;
  background: radial-gradient(ellipse at 50% 0%,#e7dcff,#faf8ff 65%);
}
.s-cta h2 { margin: 0 0 12px; font-size: 28px; }
.s-cta p {
  max-width: 550px;
  margin: 0 auto 25px;
  color: #777187;
  font-size: 13px;
  line-height: 2.2;
}
.s-footer {
  padding: 25px 0;
  border-top: 1px solid #eeeaf5;
  color: #9992a5;
  font-size: 10px;
}
.s-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

@media(max-width:900px) {
  .s-grid { grid-template-columns: 1fr 1fr; }
  .s-process-grid { grid-template-columns: 1fr 1fr; }
}
@media(max-width:600px) {
  .s-container { width: calc(100% - 32px); }
  .s-nav { height: 70px; }
  .s-logo { font-size: 19px; }
  .s-hero { padding: 65px 0 55px; }
  .s-hero h1 { font-size: 36px; }
  .s-hero p { font-size: 12px; }
  .s-section-title { font-size: 24px; }
  .s-intro { padding-top: 55px; }
  .s-grid { grid-template-columns: 1fr; gap: 16px; padding-bottom: 55px; }
  .s-card > p { min-height: auto; }
  .s-process { padding: 55px 0; }
  .s-process-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .s-step { padding: 17px 13px; }
  .s-cta h2 { font-size: 23px; }
  .s-footer-inner { flex-direction: column; align-items: flex-start; }
}
`;

export default function ServicesPage() {
  return (
    <main className="services-page">
      <style>{css}</style>

      <header className="s-container s-nav">
        <Link href="/" className="s-logo">
          <span className="s-logo-mark">N</span>
          <span>NEXORA</span>
        </Link>
        <Link href="/" className="s-back">
          بازگشت به صفحه اصلی ←
        </Link>
      </header>

      <section className="s-hero">
        <div className="s-container">
          <span className="s-kicker">NEXORA / OUR SERVICES</span>
          <h1>
            از ایده تا تجربه؛
            <br />
            <span className="s-gradient">راهکارهای دیجیتال برای رشد.</span>
          </h1>
          <p>
            از طراحی وب‌سایت و اپلیکیشن تا تولید تیزرهای تبلیغاتی با هوش
            مصنوعی؛ در Nexora ایده‌ها را به تجربه‌های دیجیتال تبدیل می‌کنیم.
          </p>
          <div className="s-hero-actions">
            <a href="#services" className="s-button">مشاهده خدمات</a>
            <Link href="/#contact" className="s-button s-button-outline">
              درخواست همکاری
            </Link>
          </div>
        </div>
      </section>

      <section className="s-container" id="services">
        <div className="s-intro">
          <span className="s-section-label">WHAT WE DO</span>
          <h2 className="s-section-title">خدمات ما</h2>
          <p className="s-section-desc">
            هر کسب‌وکار به راهکار دیجیتال متناسب با نیاز خودش احتیاج دارد.
            خدمات Nexora با تمرکز بر طراحی حرفه‌ای و تجربه کاربری ارائه می‌شوند.
          </p>
        </div>

        <div className="s-grid">
          {services.map((service) => (
            <article className={`s-card ${service.className}`} key={service.number}>
              <div className="s-card-top">
                <span className="s-number">{service.number}</span>
                <span className="s-icon">{service.icon}</span>
              </div>

              <div className="s-subtitle">{service.subtitle}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="s-features">
                {service.features.map((feature) => (
                  <div className="s-feature" key={feature}>
                    <span className="s-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="s-process">
        <div className="s-container">
          <span className="s-section-label">HOW WE WORK</span>
          <h2 className="s-section-title">مسیر اجرای یک پروژه</h2>
          <p className="s-section-desc">
            از شناخت نیاز تا تحویل خروجی، مراحل کار با برنامه‌ریزی و هماهنگی پیش می‌روند.
          </p>

          <div className="s-process-grid">
            <article className="s-step">
              <span>01 / DISCOVER</span>
              <h3>شناخت نیاز</h3>
              <p>بررسی ایده، هدف و انتظارات پروژه.</p>
            </article>
            <article className="s-step">
              <span>02 / PLAN</span>
              <h3>برنامه‌ریزی</h3>
              <p>تعیین ساختار، مسیر طراحی و جزئیات اجرا.</p>
            </article>
            <article className="s-step">
              <span>03 / CREATE</span>
              <h3>طراحی و اجرا</h3>
              <p>تبدیل ایده به خروجی دیجیتال و بررسی جزئیات.</p>
            </article>
            <article className="s-step">
              <span>04 / DELIVER</span>
              <h3>تحویل پروژه</h3>
              <p>بررسی نهایی و آماده‌سازی خروجی مورد توافق.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="s-cta">
        <div className="s-container">
          <h2>ایده‌ای برای شروع دارید؟</h2>
          <p>
            درباره پروژه‌تان با ما صحبت کنید تا بتوانیم راهکار مناسب آن را بررسی کنیم.
          </p>
          <Link href="/#contact" className="s-button">
            شروع یک همکاری ←
          </Link>
        </div>
      </section>

      <footer className="s-footer">
        <div className="s-container s-footer-inner">
          <span>© تمامی حقوق برای Nexora محفوظ است.</span>
          <Link href="/">NEXORA — استودیوی خلاق دیجیتال</Link>
        </div>
      </footer>
    </main>
  );
}
