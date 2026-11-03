
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const EMAIL = "felorakoroshi@gmail.com";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

.contact-page {
  --purple: #7950d9;
  --deep: #211936;
  --muted: #81798f;
  --line: #eee9f6;
  direction: rtl;
  min-height: 100vh;
  color: var(--deep);
  background: #fff;
  font-family: 'Vazirmatn', Tahoma, sans-serif;
  overflow: hidden;
}
.contact-page * { box-sizing: border-box; }
.contact-page a { color: inherit; text-decoration: none; }
.c-container { width: min(1160px,calc(100% - 48px)); margin: auto; }

/* HEADER */

.c-nav {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line);
}
.c-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -.5px;
}
.c-logo-mark {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  color: white;
  border-radius: 13px;
  background: linear-gradient(145deg,#b49af5,#7045d1);
  box-shadow: 0 7px 20px #7950d933;
}
.c-back {
  color: #7452bd !important;
  font-size: 12px;
  font-weight: 800;
  transition: .2s;
}
.c-back:hover { color: #a17ce9 !important; }

/* HERO */

.c-hero {
  position: relative;
  padding: 78px 0 72px;
  background:
    radial-gradient(ellipse at 85% 30%,#e9deff 0%,transparent 43%),
    radial-gradient(ellipse at 10% 100%,#f4efff 0%,transparent 40%),
    linear-gradient(120deg,#fff,#faf8ff);
}
.c-hero-inner {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  align-items: center;
  gap: 45px;
}
.c-kicker {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #8059d0;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
}
.c-kicker::before {
  content: "";
  width: 23px;
  height: 2px;
  background: #9874e1;
  border-radius: 5px;
}
.c-hero h1 {
  margin: 18px 0;
  font-size: clamp(36px,4.8vw,55px);
  line-height: 1.55;
  font-weight: 900;
  letter-spacing: -1.8px;
}
.c-gradient {
  color: #8057d4;
  background: linear-gradient(100deg,#a58aef,#6840c3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.c-hero-desc {
  max-width: 540px;
  margin: 0;
  color: #777187;
  font-size: 13px;
  line-height: 2.5;
}
.c-hero-decoration {
  position: relative;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-orbit {
  position: absolute;
  width: 245px;
  height: 245px;
  border: 1px solid #d9c9f5;
  border-radius: 50%;
  animation: c-rotate 24s linear infinite;
}
.c-orbit::before,
.c-orbit::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #9b7ae4;
  box-shadow: 0 0 20px #9b7ae466;
}
.c-orbit::before { top: 27px; right: 30px; }
.c-orbit::after { bottom: 32px; left: 23px; }
.c-orbit-two {
  position: absolute;
  width: 190px;
  height: 190px;
  border: 1px dashed #cbb9ef;
  border-radius: 50%;
  animation: c-rotate 30s linear infinite reverse;
}
.c-contact-symbol {
  position: relative;
  z-index: 2;
  width: 115px;
  height: 115px;
  display: grid;
  place-items: center;
  border: 1px solid #ffffff;
  border-radius: 34px;
  background: linear-gradient(145deg,#b69af4,#7851d1);
  box-shadow: 0 25px 55px #7950d944,inset 0 1px 1px #ffffff88;
  transform: rotate(-8deg);
  animation: c-float 4s ease-in-out infinite;
}
.c-contact-symbol svg {
  width: 53px;
  height: 53px;
  stroke: white;
  stroke-width: 1.5;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.c-floating-card {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 15px;
  border: 1px solid #ffffff;
  border-radius: 13px;
  background: #ffffffeb;
  box-shadow: 0 12px 30px #39205b12;
  color: #55466e;
  font-size: 10px;
  font-weight: 800;
  backdrop-filter: blur(10px);
}
.c-floating-card span {
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: #805bd0;
  background: #f0eaff;
  font-size: 16px;
}
.c-floating-one { top: 24px; right: 5px; }
.c-floating-two { bottom: 28px; left: 0; }

@keyframes c-float {
  0%,100% { transform: translateY(0) rotate(-8deg); }
  50% { transform: translateY(-13px) rotate(-5deg); }
}
@keyframes c-rotate {
  to { transform: rotate(360deg); }
}

/* MAIN */

.c-main {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  align-items: start;
  gap: 55px;
  padding-top: 75px;
  padding-bottom: 95px;
}
.c-label {
  color: #9877d1;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.2px;
}
.c-info h2,
.c-form-wrap h2 {
  margin: 12px 0;
  font-size: 23px;
  font-weight: 900;
  letter-spacing: -.5px;
}
.c-info > p,
.c-form-wrap > p {
  color: var(--muted);
  font-size: 12px;
  line-height: 2.5;
}

/* CONTACT CARDS */

.c-info-box {
  margin-top: 28px;
  padding: 24px;
  border: 1px solid #eee8fa;
  border-radius: 19px;
  background:
    radial-gradient(circle at 100% 0%,#f1eaff 0%,transparent 55%),
    #fcfbff;
}
.c-info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 24px;
}
.c-info-item:last-child { margin-bottom: 0; }
.c-info-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: #8059d0;
  background: #f0eaff;
}
.c-info-icon svg {
  width: 19px;
  height: 19px;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.c-info-content span {
  display: block;
  margin-bottom: 5px;
  color: #9b82c9;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .8px;
}
.c-info-content strong {
  display: block;
  color: #514866;
  font-size: 12px;
  font-weight: 800;
  line-height: 2;
  overflow-wrap: anywhere;
}
.c-info-content p {
  margin: 0;
  color: #81798f;
  font-size: 11px;
  line-height: 2.2;
}
.c-email-link { transition: color .2s; }
.c-email-link:hover { color: #8059d0; }

/* FORM */

.c-form-wrap {
  position: relative;
  padding: 34px;
  border: 1px solid #eeeaf5;
  border-radius: 22px;
  background: white;
  box-shadow: 0 18px 55px #6040a50c;
}
.c-form-wrap::before {
  content: "";
  position: absolute;
  top: -1px;
  right: 35px;
  width: 65px;
  height: 3px;
  border-radius: 0 0 5px 5px;
  background: linear-gradient(90deg,#b69af4,#7048c9);
}
.c-form {
  display: grid;
  gap: 18px;
  margin-top: 27px;
}
.c-field {
  display: grid;
  gap: 9px;
}
.c-field label {
  color: #554b68;
  font-size: 11px;
  font-weight: 800;
}
.c-field input,
.c-field textarea,
.c-field select {
  width: 100%;
  padding: 14px;
  border: 1px solid #e9e4f1;
  border-radius: 11px;
  outline: none;
  color: #403650;
  background: #fff;
  font-family: inherit;
  font-size: 12px;
  transition: .2s;
}
.c-field input:focus,
.c-field textarea:focus,
.c-field select:focus {
  border-color: #a98bf2;
  box-shadow: 0 0 0 3px #7950d912;
}
.c-field textarea {
  min-height: 135px;
  resize: vertical;
  line-height: 2.2;
}
.c-field input::placeholder,
.c-field textarea::placeholder { color: #b0a9bc; }
.c-field input[dir="ltr"] { text-align: left; }
.c-field select { cursor: pointer; }
.c-optional {
  color: #a49aaf;
  font-size: 9px;
  font-weight: 500;
  margin-right: 5px;
}
.c-submit {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 12px;
  padding: 15px 20px;
  color: white;
  background: linear-gradient(110deg,#9672e6,#7048c9);
  font-family: inherit;
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
  transition: .25s;
  box-shadow: 0 8px 20px #7950d921;
}
.c-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px #7950d944;
}
.c-submit span { font-size: 17px; }
.c-status {
  padding: 13px 15px;
  border: 1px solid #e7defa;
  border-radius: 11px;
  color: #6845ae;
  background: #f7f3ff;
  font-size: 11px;
  line-height: 2.2;
}
.c-note {
  margin-top: 16px;
  color: #a29aaa;
  font-size: 10px;
  line-height: 2.3;
}

/* FOOTER */

.c-footer {
  padding: 26px 0;
  border-top: 1px solid #eeeaf5;
  color: #9992a5;
  font-size: 10px;
}
.c-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
.c-footer a {
  color: #7655b9;
  font-weight: 800;
}

/* RESPONSIVE */

@media(max-width:850px) {
  .c-hero-inner {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .c-hero-decoration { height: 230px; }
  .c-main {
    grid-template-columns: 1fr;
    gap: 35px;
  }
}
@media(max-width:560px) {
  .c-container { width: calc(100% - 32px); }
  .c-nav { height: 70px; }
  .c-logo { font-size: 19px; }
  .c-logo-mark { width: 35px; height: 35px; }
  .c-back { font-size: 10px; }
  .c-hero { padding: 55px 0 35px; }
  .c-hero h1 {
    font-size: 36px;
    letter-spacing: -1px;
  }
  .c-hero-desc { font-size: 12px; }
  .c-hero-decoration { height: 205px; }
  .c-orbit { width: 190px; height: 190px; }
  .c-orbit-two { width: 150px; height: 150px; }
  .c-contact-symbol {
    width: 90px;
    height: 90px;
    border-radius: 27px;
  }
  .c-contact-symbol svg {
    width: 43px;
    height: 43px;
  }
  .c-floating-card { padding: 9px 11px; }
  .c-floating-one { right: 0; }
  .c-floating-two { left: 0; }
  .c-main {
    padding-top: 45px;
    padding-bottom: 60px;
  }
  .c-form-wrap { padding: 25px 18px; }
  .c-info-box { padding: 20px; }
  .c-footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media(prefers-reduced-motion:reduce) {
  .c-orbit,
  .c-orbit-two,
  .c-contact-symbol { animation: none; }
  .c-submit,
  .c-back { transition: none; }
}
`;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="3"/>
      <path d="m4 7 8 6 8-6"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="m12 3 9 5-9 5-9-5 9-5Z"/>
      <path d="m3 12 9 5 9-5"/>
      <path d="m3 16 9 5 9-5"/>
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "طراحی وب‌سایت",
    budget: "",
    message: "",
  });

  const [prepared, setPrepared] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent("درخواست همکاری با Nexora");

    const body = encodeURIComponent(
      `نام: ${form.name}
شماره تماس: ${form.phone}
خدمت موردنظر: ${form.service}
بودجه تقریبی: ${form.budget || "مشخص نشده"}

توضیحات پروژه:
${form.message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setPrepared(true);
  }

  return (
    <main className="contact-page">
      <style>{css}</style>

      <header className="c-container c-nav">
        <Link href="/" className="c-logo">
          <span className="c-logo-mark">N</span>
          <span>NEXORA</span>
        </Link>

        <Link href="/" className="c-back">
          بازگشت به صفحه اصلی ←
        </Link>
      </header>

      <section className="c-hero">
        <div className="c-container c-hero-inner">
          <div>
            <span className="c-kicker">
              CONTACT / ارتباط با ما
            </span>

            <h1>
              بیایید درباره ایده شما
              <br />
              <span className="c-gradient">
                صحبت کنیم.
              </span>
            </h1>

            <p className="c-hero-desc">
              هر پروژه دیجیتال با یک ایده شروع می‌شود.
              درباره نیازتان برای ما بنویسید تا بتوانیم
              مسیر مناسبی برای تبدیل ایده شما به یک
              تجربه دیجیتال طراحی کنیم.
            </p>
          </div>

          <div className="c-hero-decoration">
            <div className="c-orbit"/>
            <div className="c-orbit-two"/>

            <div className="c-contact-symbol">
              <svg viewBox="0 0 24 24">
                <path d="M4 5h16v12H8l-4 3V5Z"/>
                <path d="M8 9h8M8 13h5"/>
              </svg>
            </div>

            <div className="c-floating-card c-floating-one">
              <span>✉</span>
              ارتباط مستقیم
            </div>

            <div className="c-floating-card c-floating-two">
              <span>✦</span>
              ایده تا اجرا
            </div>
          </div>
        </div>
      </section>

      <section className="c-container c-main">
        <div className="c-info">
          <span className="c-label">GET IN TOUCH</span>

          <h2>راه‌های ارتباطی</h2>

          <p>
            برای شروع همکاری یا دریافت اطلاعات بیشتر،
            می‌توانید از راه‌های ارتباطی زیر با Nexora
            در تماس باشید.
          </p>

          <div className="c-info-box">
            <div className="c-info-item">
              <div className="c-info-icon">
                <MailIcon/>
              </div>

              <div className="c-info-content">
                <span>EMAIL ADDRESS</span>

                <strong dir="ltr">
                  <a
                    href="mailto:felorakoroshi@gmail.com"
                    className="c-email-link"
                  >
                    felorakoroshi@gmail.com
                  </a>
                </strong>
              </div>
            </div>

            <div className="c-info-item">
              <div className="c-info-icon">
                <ClockIcon/>
              </div>

              <div className="c-info-content">
                <span>WORKING HOURS</span>
                <strong>با هماهنگی قبلی</strong>
                <p>
                  زمان بررسی و پیگیری درخواست‌ها پس از دریافت
                  پیام هماهنگ خواهد شد.
                </p>
              </div>
            </div>

            <div className="c-info-item">
              <div className="c-info-icon">
                <LayersIcon/>
              </div>

              <div className="c-info-content">
                <span>OUR SERVICES</span>
                <p>
                  طراحی وب‌سایت، طراحی اپلیکیشن و تولید
                  محتوای تبلیغاتی با هوش مصنوعی
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="c-form-wrap">
          <span className="c-label">PROJECT INQUIRY</span>

          <h2>فرم درخواست همکاری</h2>

          <p>
            چند اطلاعات اولیه درباره پروژه‌تان وارد کنید
            تا بتوانیم بهتر با نیاز شما آشنا شویم.
          </p>

          <form className="c-form" onSubmit={handleSubmit}>
            <div className="c-field">
              <label htmlFor="name">
                نام و نام خانوادگی
              </label>

              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="نام خود را وارد کنید"
                value={form.name}
                onChange={(e) => {
                  setForm({...form, name: e.target.value});
                  setPrepared(false);
                }}
              />
            </div>

            <div className="c-field">
              <label htmlFor="phone">
                شماره تماس
              </label>

              <input
                id="phone"
                name="phone"
                required
                type="tel"
                dir="ltr"
                inputMode="tel"
                autoComplete="tel"
                placeholder="09xxxxxxxxx"
                value={form.phone}
                onChange={(e) => {
                  setForm({...form, phone: e.target.value});
                  setPrepared(false);
                }}
              />
            </div>

            <div className="c-field">
              <label htmlFor="service">
                خدمت موردنظر
              </label>

              <select
                id="service"
                name="service"
                value={form.service}
                onChange={(e) => {
                  setForm({...form, service: e.target.value});
                  setPrepared(false);
                }}
              >
                <option>طراحی وب‌سایت</option>
                <option>طراحی اپلیکیشن</option>
                <option>تولید محتوای تبلیغاتی با هوش مصنوعی</option>
                <option>سایر موارد</option>
              </select>
            </div>

            <div className="c-field">
              <label htmlFor="budget">
                بودجه تقریبی پروژه
                <span className="c-optional">(اختیاری)</span>
              </label>

              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={(e) => {
                  setForm({...form, budget: e.target.value});
                  setPrepared(false);
                }}
              >
                <option value="">ترجیح می‌دهم فعلاً مشخص نکنم</option>
                <option>کمتر از ۲۰ میلیون تومان</option>
                <option>۲۰ تا ۵۰ میلیون تومان</option>
                <option>۵۰ تا ۱۰۰ میلیون تومان</option>
                <option>بیشتر از ۱۰۰ میلیون تومان</option>
                <option>نیاز به مشاوره دارم</option>
              </select>
            </div>

            <div className="c-field">
              <label htmlFor="message">
                توضیحات پروژه
              </label>

              <textarea
                id="message"
                name="message"
                required
                placeholder="کمی درباره ایده، نیازها و انتظارات خود توضیح دهید..."
                value={form.message}
                onChange={(e) => {
                  setForm({...form, message: e.target.value});
                  setPrepared(false);
                }}
              />
            </div>

            <button type="submit" className="c-submit">
              آماده‌سازی درخواست ارسال
              <span>←</span>
            </button>

            {prepared && (
              <div className="c-status" role="status">
                درخواست شما برای ارسال از طریق برنامه ایمیل
                آماده شده است. لطفاً در پنجره ایمیل، اطلاعات
                را بررسی و دکمه ارسال را انتخاب کنید.
                اگر برنامه ایمیل باز نشد، مستقیماً به آدرس
                felorakoroshi@gmail.com پیام بدهید.
              </div>
            )}
          </form>

          <div className="c-note">
            با انتخاب دکمه، برنامه ایمیل دستگاه شما باز می‌شود.
            این فرم هنوز به سامانه ذخیره درخواست متصل نیست.
          </div>
        </div>
      </section>

      <footer className="c-footer">
        <div className="c-container c-footer-inner">
          <span>© تمامی حقوق برای Nexora محفوظ است.</span>

          <Link href="/">
            NEXORA — استودیوی خلاق دیجیتال
          </Link>
        </div>
      </footer>
    </main>
  );
}
