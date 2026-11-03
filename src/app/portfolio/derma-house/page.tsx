
"use client";

import { useState, type FormEvent } from "react";

const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const services = [
  {
    n: "01",
    title: "فیشیال تخصصی",
    en: "FACIAL THERAPY",
    desc: "پاکسازی عمیق، آبرسانی و مراقبت حرفه‌ای متناسب با نیاز پوست.",
    price: "از ۱,۲۰۰,۰۰۰ تومان",
    image: "photo-1570172619644-dfd03ed5d881",
  },
  {
    n: "02",
    title: "درمان لک و تیرگی",
    en: "SKIN TREATMENT",
    desc: "بررسی وضعیت پوست و انتخاب روش مراقبتی مناسب.",
    price: "از ۱,۸۰۰,۰۰۰ تومان",
    image: "photo-1616394584738-fc6e612e71b9",
  },
  {
    n: "03",
    title: "جوان‌سازی پوست",
    en: "SKIN REJUVENATION",
    desc: "روش‌های تخصصی برای بهبود ظاهر و شادابی پوست.",
    price: "پس از مشاوره",
    image: "photo-1611930022073-b7a4ba5fcccd",
  },
  {
    n: "04",
    title: "مشاوره مراقبت پوست",
    en: "SKIN CONSULTATION",
    desc: "شناخت نیازهای پوست و دریافت برنامه مراقبتی اختصاصی.",
    price: "با تعیین وقت قبلی",
    image: "photo-1608248543803-ba4f8c70ae0b",
  },
];

const prices = [
  ["فیشیال پایه", "۱,۲۰۰,۰۰۰ تومان"],
  ["فیشیال تخصصی", "۱,۸۰۰,۰۰۰ تومان"],
  ["آبرسانی و احیای پوست", "۱,۵۰۰,۰۰۰ تومان"],
  ["مشاوره تخصصی پوست", "تماس بگیرید"],
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
    <div className={`relative overflow-hidden bg-[#e5f0ef] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#e0efed] to-[#f2f7f5]">
          <div className="text-center text-[#397c78]">
            <div className="text-5xl">✧</div>
            <div className="mt-3 text-[10px] font-bold tracking-[0.25em]" dir="ltr">
              DERMA HOUSE
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DermaHousePage() {
  const [service, setService] = useState("مشاوره مراقبت پوست");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function selectService(title: string) {
    setService(title);
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !/^09\d{9}$/.test(phone)) return;
    setSubmitted(true);
  }

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f7faf9] text-[#183535]">

      {/* Top bar */}
      <div className="bg-[#153d3b] px-5 py-3 text-[10px] text-white/80 md:px-12">
        <div className="mx-auto flex max-w-[1380px] justify-between gap-3">
          <span>کلینیک تخصصی پوست و مراقبت زیبایی</span>
          <span dir="ltr">SAT – THU / 09:00 – 20:00</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#e8efed] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 md:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dff0ed] text-xl font-black text-[#26736d]">
              D
            </div>
            <div>
              <div className="text-xl font-black tracking-[0.12em]" dir="ltr">DERMA</div>
              <div className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-[#829a96]" dir="ltr">
                HOUSE CLINIC
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-semibold text-[#657e7a] md:flex">
            <a href="#services" className="transition hover:text-[#26736d]">خدمات</a>
            <a href="#doctor" className="transition hover:text-[#26736d]">رویکرد تخصصی</a>
            <a href="#gallery" className="transition hover:text-[#26736d]">فضای کلینیک</a>
            <a href="#prices" className="transition hover:text-[#26736d]">تعرفه‌ها</a>
          </nav>

          <a
            href="#booking"
            className="rounded-xl bg-[#26736d] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-teal-100 transition hover:bg-[#195c57]"
          >
            درخواست نوبت
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#edf7f5]" />
        <div className="pointer-events-none absolute -bottom-48 left-0 h-[500px] w-[500px] rounded-full bg-[#f0f7f5]" />

        <div className="relative mx-auto grid max-w-[1380px] items-center gap-12 px-5 py-14 md:grid-cols-2 md:px-12 md:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8ebe7] bg-[#f0f8f6] px-4 py-2 text-[10px] font-bold text-[#26736d]">
              <span className="h-2 w-2 rounded-full bg-[#42a69a]" />
              SKIN HEALTH & BEAUTY
            </div>

            <h1 className="text-[43px] font-black leading-[1.55] tracking-tight md:text-[65px]">
              زیبایی پوست،
              <br />
              <span className="text-[#26736d]">از مراقبت درست</span>
              <br />
              شروع می‌شود.
            </h1>

            <p className="mt-7 max-w-[470px] text-sm leading-9 text-[#718582]">
              درماهاوس، فضایی برای شناخت بهتر پوست و انتخاب روش‌های مراقبتی
              متناسب با نیازهای شماست. مراقبت آگاهانه، با همراهی تخصصی و
              توجه به ویژگی‌های هر پوست.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="rounded-xl bg-[#26736d] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-teal-100 transition hover:-translate-y-1 hover:bg-[#195c57]"
              >
                دریافت مشاوره
                <span className="mr-3">←</span>
              </a>
              <a
                href="#services"
                className="rounded-xl border border-[#dce9e6] px-7 py-4 text-sm font-bold text-[#345c58] transition hover:border-[#26736d] hover:text-[#26736d]"
              >
                مشاهده خدمات
              </a>
            </div>

            <div className="mt-14 grid max-w-[450px] grid-cols-2 border-t border-[#e5eeeb] pt-6">
              <div>
                <div className="text-sm font-black text-[#26736d]">مراقبت تخصصی</div>
                <p className="mt-2 text-xs text-[#829591]">متناسب با نیاز هر پوست</p>
              </div>
              <div className="border-r border-[#e5eeeb] pr-6">
                <div className="text-sm font-black text-[#26736d]">مشاوره آگاهانه</div>
                <p className="mt-2 text-xs text-[#829591]">انتخاب روش با بررسی پوست</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-3xl bg-[#d8eeea]" />
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-3xl bg-[#e8f3f0]" />

            <Photo
              src={photo("photo-1570172619644-dfd03ed5d881", 1300)}
              alt="مراقبت تخصصی پوست"
              className="relative z-10 h-[390px] rounded-[28px] shadow-2xl shadow-teal-900/10 md:h-[540px]"
            />

            <div className="absolute bottom-7 right-5 z-20 max-w-[270px] rounded-2xl bg-white p-5 shadow-xl shadow-slate-300/50 md:right-[-25px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4f1] text-xl text-[#26736d]">
                  ✧
                </div>
                <div>
                  <div className="text-sm font-black">مراقبت، با شناخت آغاز می‌شود</div>
                  <div className="mt-1 text-[10px] text-[#829591]">یک انتخاب متناسب با پوست شما</div>
                </div>
              </div>
            </div>

            <div className="absolute left-5 top-5 z-20 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
              <div className="text-[9px] font-bold tracking-widest text-[#829591]" dir="ltr">DERMA HOUSE</div>
              <div className="mt-1 text-xs font-black text-[#26736d]">SKINCARE STUDIO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-20 md:grid-cols-3 md:items-center md:px-10">
        <div>
          <p className="text-[10px] font-black tracking-[0.25em] text-[#39857d]" dir="ltr">OUR APPROACH</p>
          <h2 className="mt-4 text-3xl font-black leading-relaxed">
            هر پوست،
            <br />
            نیاز متفاوتی دارد.
          </h2>
        </div>

        <p className="text-sm leading-9 text-[#718582] md:col-span-2">
          ما به جای پیشنهاد یک روش یکسان برای همه، بر شناخت نوع پوست،
          بررسی نیازهای فردی و انتخاب مراقبت مناسب تمرکز می‌کنیم.
          هدف، تجربه‌ای آگاهانه و متناسب با شرایط هر مراجعه‌کننده است.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#153d3b] px-5 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1350px]">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#8dd0c5]" dir="ltr">
                OUR SERVICES
              </p>
              <h2 className="text-3xl font-black md:text-5xl">خدمات تخصصی درماهاوس</h2>
            </div>
            <p className="max-w-xs text-xs leading-8 text-white/60">
              انتخاب روش مناسب پس از بررسی شرایط پوست و مشاوره تخصصی
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((item) => (
              <article
                key={item.n}
                className="group grid grid-cols-[110px_1fr] gap-5 border-t border-white/15 pt-6 md:grid-cols-[175px_1fr] md:gap-7"
              >
                <Photo
                  src={photo(item.image, 600)}
                  alt={item.title}
                  className="aspect-[4/5] rounded-xl"
                />

                <div className="flex flex-col justify-between py-1">
                  <div>
                    <div className="text-[9px] font-bold tracking-[0.2em] text-[#8dd0c5]" dir="ltr">
                      {item.en}
                    </div>
                    <h3 className="mt-4 text-lg font-black md:text-2xl">{item.title}</h3>
                    <p className="mt-4 text-xs leading-8 text-white/60">{item.desc}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[10px] text-[#a5d8d0]">{item.price}</span>
                    <button
                      onClick={() => selectService(item.title)}
                      className="text-xs font-bold text-white underline decoration-[#75bdb3] underline-offset-8 transition hover:text-[#8dd0c5]"
                    >
                      درخواست مشاوره ←
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist approach */}
      <section id="doctor" className="mx-auto grid max-w-[1350px] items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-12">
        <div className="relative">
          <Photo
            src={photo("photo-1600334129128-685c5582fd35", 1100)}
            alt="فضای آرام و مدرن کلینیک"
            className="h-[350px] rounded-[28px] shadow-xl shadow-slate-300/40 md:h-[500px]"
          />
          <div className="absolute -bottom-6 right-5 rounded-2xl bg-white p-5 shadow-xl">
            <div className="text-sm font-black text-[#26736d]">نگاه تخصصی به مراقبت پوست</div>
            <div className="mt-2 text-[10px] text-[#829591]">شناخت، بررسی و انتخاب آگاهانه</div>
          </div>
        </div>

        <div className="py-8 md:px-8">
          <p className="text-[10px] font-black tracking-[0.3em] text-[#39857d]" dir="ltr">
            PERSONALIZED SKINCARE
          </p>
          <h2 className="mt-6 text-3xl font-black leading-[1.7] md:text-5xl">
            مراقبت تخصصی،
            <br />
            <span className="text-[#26736d]">با نگاه علمی.</span>
          </h2>
          <p className="mt-7 text-sm leading-9 text-[#718582]">
            انتخاب خدمات پوستی باید با توجه به شرایط و نیازهای هر فرد انجام شود.
            در این مجموعه، مشاوره و انتخاب روش مراقبتی بر اساس بررسی وضعیت پوست
            و نظر متخصص صورت می‌گیرد.
          </p>

          <div className="mt-9 space-y-5">
            {[
              ["۰۱", "شناخت وضعیت پوست", "بررسی نیازها و ویژگی‌های پوست"],
              ["۰۲", "انتخاب روش مناسب", "توجه به شرایط و هدف مراجعه‌کننده"],
              ["۰۳", "پیگیری و مراقبت", "ارائه راهنمایی برای ادامه مراقبت"],
            ].map((item) => (
              <div key={item[0]} className="flex items-center gap-4 border-b border-[#e8efed] pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f1] text-xs font-black text-[#26736d]">
                  {item[0]}
                </span>
                <div>
                  <h3 className="text-sm font-black">{item[1]}</h3>
                  <p className="mt-2 text-xs text-[#829591]">{item[2]}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#booking"
            className="mt-8 inline-flex rounded-xl bg-[#26736d] px-7 py-4 text-xs font-bold text-white transition hover:bg-[#195c57]"
          >
            درخواست جلسه مشاوره
            <span className="mr-3">←</span>
          </a>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="bg-[#edf5f3] px-5 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-[#39857d]" dir="ltr">
              SERVICE GUIDE
            </p>
            <h2 className="mt-5 text-4xl font-black leading-relaxed">تعرفه خدمات</h2>
            <p className="mt-5 text-sm leading-9 text-[#718582]">
              هزینه نهایی بر اساس نوع خدمات و شرایط مراجعه‌کننده تعیین می‌شود.
              برای دریافت قیمت قطعی و اطلاعات بیشتر، درخواست مشاوره ثبت کنید.
            </p>
            <a
              href="#booking"
              className="mt-7 inline-flex rounded-xl border border-[#26736d] px-6 py-3 text-xs font-bold text-[#26736d] transition hover:bg-[#26736d] hover:text-white"
            >
              دریافت مشاوره قیمت
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-9">
            {prices.map(([title, price], i) => (
              <div
                key={title}
                className="flex items-center justify-between gap-4 border-b border-[#edf1ef] py-6 last:border-0"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold text-[#69a49c]">0{i + 1}</span>
                  <span className="text-sm font-bold">{title}</span>
                </div>
                <span className="whitespace-nowrap text-xs font-bold text-[#26736d]">{price}</span>
              </div>
            ))}
            <p className="mt-4 text-[10px] text-[#9aa9a5]">* قیمت‌ها نمونه و مفهومی هستند.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-[1380px] px-5 py-24 md:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-[#39857d]" dir="ltr">
              OUR SPACE
            </p>
            <h2 className="mt-4 text-3xl font-black">فضایی برای آرامش و مراقبت</h2>
          </div>
          <p className="max-w-xs text-xs leading-7 text-[#829591]">
            محیطی آرام و مدرن برای تجربه خدمات مراقبت پوست
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Photo
            src={photo("photo-1600334129128-685c5582fd35", 1000)}
            alt="فضای داخلی کلینیک"
            className="col-span-2 h-[240px] rounded-2xl md:h-[390px]"
          />
          <Photo
            src={photo("photo-1608248543803-ba4f8c70ae0b", 700)}
            alt="محصولات مراقبت پوست"
            className="h-[240px] rounded-2xl md:h-[390px]"
          />
          <Photo
            src={photo("photo-1611930022073-b7a4ba5fcccd", 700)}
            alt="محصولات و ابزار مراقبت پوست"
            className="h-[240px] rounded-2xl md:h-[390px]"
          />
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-[#153d3b] px-5 py-24 text-white md:px-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-[#8dd0c5]" dir="ltr">
              BOOK YOUR CONSULTATION
            </p>
            <h2 className="mt-6 text-4xl font-black leading-[1.6] md:text-5xl">
              اولین قدم برای
              <br />
              <span className="text-[#8dd0c5]">شناخت بهتر پوستت.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-9 text-white/65">
              اطلاعات خود را ثبت کنید تا برای هماهنگی وقت مشاوره با شما تماس بگیریم.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#8dd0c5]">
                ✓
              </div>
              <div>
                <div className="text-sm font-bold">درخواست مشاوره</div>
                <div className="mt-1 text-xs text-white/50">با تعیین وقت قبلی</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 text-[#183535] shadow-2xl shadow-black/20 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e5f4ef] text-3xl text-[#26736d]">
                  ✓
                </div>
                <h3 className="mt-6 text-2xl font-black">درخواست شما ثبت شد.</h3>
                <p className="mt-4 text-xs leading-7 text-[#829591]">
                  این فرم در نسخه نمایشی است و به سامانه واقعی متصل نیست.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl border border-[#26736d] px-6 py-3 text-xs font-bold text-[#26736d]"
                >
                  ثبت درخواست جدید
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-7">
                  <h3 className="text-2xl font-black">فرم درخواست نوبت</h3>
                  <p className="mt-2 text-xs text-[#829591]">
                    اطلاعاتت را وارد کن تا با تو تماس بگیریم.
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">نام و نام خانوادگی</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="نام شما"
                    className="w-full rounded-xl border border-[#e1ebe8] bg-[#f7faf9] px-4 py-4 text-sm outline-none transition focus:border-[#39857d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">شماره موبایل</label>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    pattern="09[0-9]{9}"
                    maxLength={11}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09123456789"
                    dir="ltr"
                    className="w-full rounded-xl border border-[#e1ebe8] bg-[#f7faf9] px-4 py-4 text-left text-sm outline-none transition focus:border-[#39857d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">خدمت موردنظر</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-[#e1ebe8] bg-[#f7faf9] px-4 py-4 text-sm outline-none focus:border-[#39857d]"
                  >
                    {services.map((item) => (
                      <option key={item.n} value={item.title}>{item.title}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#26736d] py-4 text-sm font-bold text-white shadow-lg shadow-teal-100 transition hover:bg-[#195c57]"
                >
                  ثبت درخواست مشاوره
                  <span className="mr-2">←</span>
                </button>

                <p className="text-center text-[10px] text-[#9aa9a5]">
                  ثبت این فرم در حال حاضر نمایشی است.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102e2d] px-5 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-[1350px] flex-wrap items-start justify-between gap-10">
          <div>
            <div className="text-3xl font-black tracking-[0.12em]" dir="ltr">DERMA.</div>
            <div className="mt-2 text-[9px] tracking-[0.35em] text-[#8dd0c5]" dir="ltr">
              HOUSE CLINIC
            </div>
            <p className="mt-5 max-w-xs text-xs leading-8 text-white/55">
              مراقبت آگاهانه از پوست، با توجه به نیازهای هر فرد.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-xs">
            <div className="space-y-4">
              <div className="font-black text-[#8dd0c5]">دسترسی سریع</div>
              <a href="#services" className="block text-white/65 transition hover:text-white">خدمات</a>
              <a href="#prices" className="block text-white/65 transition hover:text-white">تعرفه‌ها</a>
              <a href="#gallery" className="block text-white/65 transition hover:text-white">گالری</a>
            </div>
            <div className="space-y-4">
              <div className="font-black text-[#8dd0c5]">ارتباط با ما</div>
              <p className="text-white/65" dir="ltr">021 - 00000000</p>
              <p className="text-white/65">تهران، آدرس کلینیک</p>
              <a href="#booking" className="block text-white/65 transition hover:text-white">درخواست نوبت</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1350px] border-t border-white/10 pt-6 text-[10px] text-white/40">
          <div className="flex flex-wrap justify-between gap-3">
            <span>DERMA HOUSE © 2026</span>
            <span>DESIGN & DEVELOPMENT BY NEXORA</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
