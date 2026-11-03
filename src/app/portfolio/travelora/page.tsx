
"use client";

import { useMemo, useState } from "react";

const destinations = [
  { name: "استانبول", country: "ترکیه", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=700&q=85" },
  { name: "دبی", country: "امارات", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85" },
  { name: "بالی", country: "اندونزی", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=85" },
  { name: "پاریس", country: "فرانسه", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=85" },
];

const tours = [
  {
    id: 1,
    title: "سفر خاطره‌انگیز به استانبول",
    city: "استانبول",
    country: "ترکیه",
    duration: "۵ شب و ۶ روز",
    price: "۲۸,۹۰۰,۰۰۰",
    rating: "۴.۹",
    tag: "پیشنهاد ویژه",
    image: destinations[0].image,
    description: "گشت شهری، بازدید از جاذبه‌های تاریخی و تجربه خرید در بازارهای معروف استانبول."
  },
  {
    id: 2,
    title: "تجربه لوکس در دبی",
    city: "دبی",
    country: "امارات",
    duration: "۴ شب و ۵ روز",
    price: "۳۵,۵۰۰,۰۰۰",
    rating: "۴.۸",
    tag: "محبوب",
    image: destinations[1].image,
    description: "اقامت در هتل باکیفیت، بازدید از برج خلیفه و تجربه تفریحات مدرن دبی."
  },
  {
    id: 3,
    title: "تعطیلات رویایی در بالی",
    city: "بالی",
    country: "اندونزی",
    duration: "۷ شب و ۸ روز",
    price: "۵۸,۰۰۰,۰۰۰",
    rating: "۵.۰",
    tag: "طبیعت‌گردی",
    image: destinations[2].image,
    description: "سواحل زیبا، طبیعت استوایی و اقامت در فضایی آرام و دلنشین."
  }
];

function TravelImage({
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
    <div className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-200 text-4xl">
          ✦
        </div>
      )}
    </div>
  );
}

export default function TraveloraPage() {
  const [destination, setDestination] = useState("همه مقصدها");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("۲ نفر");
  const [appliedDestination, setAppliedDestination] = useState("همه مقصدها");
  const [selectedTour, setSelectedTour] = useState<(typeof tours)[number] | null>(null);
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredTours = useMemo(() => {
    if (appliedDestination === "همه مقصدها") return tours;
    return tours.filter((tour) => tour.city === appliedDestination);
  }, [appliedDestination]);

  function searchTours() {
    setAppliedDestination(destination);
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  }

  function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setNotice("ایمیل شما برای عضویت در خبرنامه ثبت شد. (نسخه نمایشی)");
    setEmail("");
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#f8fafc] text-slate-800" style={{ fontFamily: "Tahoma, sans-serif" }}>
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        button, input, select { font: inherit; }
        button { cursor: pointer; }
        .travel-container { width: min(1160px, calc(100% - 40px)); margin-inline: auto; }
        .travel-link { transition: color .2s ease; }
        .travel-link:hover { color: #0e9f9a; }
        .travel-button { transition: all .2s ease; }
        .travel-button:hover { transform: translateY(-2px); box-shadow: 0 10px 24px #0f766e22; }
        .tour-card { transition: transform .25s ease, box-shadow .25s ease; }
        .tour-card:hover { transform: translateY(-5px); box-shadow: 0 18px 40px #0f172a12; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="travel-container flex h-[76px] items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-2xl font-black text-teal-700">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-xl text-white">T</span>
            Travelora
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a className="travel-link" href="#home">صفحه اصلی</a>
            <a className="travel-link" href="#tours">تورهای مسافرتی</a>
            <a className="travel-link" href="#destinations">مقصدها</a>
            <a className="travel-link" href="#about">درباره ما</a>
            <a className="travel-link" href="#contact">تماس با ما</a>
          </nav>

          <a href="#search" className="travel-button hidden rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white md:block">
            برنامه‌ریزی سفر
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xl md:hidden"
            aria-label="باز کردن منو"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
            {[
              ["صفحه اصلی", "#home"],
              ["تورهای مسافرتی", "#tours"],
              ["مقصدها", "#destinations"],
              ["درباره ما", "#about"],
              ["تماس با ما", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Compact Hero */}
      <section id="home" className="travel-container pt-7">
        <div className="relative flex min-h-[245px] items-center overflow-hidden rounded-[22px] bg-gradient-to-l from-[#103d46] via-[#116b70] to-[#168e87] px-7 py-9 md:min-h-[255px] md:px-14">
          <div className="relative z-10 max-w-[650px] text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold">
              ✦ دنیایی از سفرهای فراموش‌نشدنی
            </span>

            <h1 className="mt-4 text-3xl font-black leading-[1.6] md:text-4xl">
              دنیا منتظر توست،
              <span className="block text-[#8cf0d7]">سفر را شروع کن!</span>
            </h1>

            <p className="mt-2 max-w-[470px] text-sm leading-8 text-white/80">
              مقصد بعدی‌ات را انتخاب کن و با Travelora تجربه‌ای متفاوت از سفر و کشف دنیا داشته باش.
            </p>

            <a href="#search" className="travel-button mt-4 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-teal-800">
              کشف مقصدها ←
            </a>
          </div>
        </div>
      </section>

      {/* Search */}
      <section id="search" className="travel-container relative z-20 -mt-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/5 md:p-7">
          <div className="mb-5">
            <h2 className="text-lg font-black">سفر بعدی‌ات را پیدا کن</h2>
            <p className="mt-1 text-xs text-slate-500">اطلاعات سفر را وارد کن و تورهای مناسب را ببین.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <label className="block">
              <span className="mb-2 block text-xs font-bold text-slate-600">مقصد سفر</span>
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3.5 text-sm outline-none focus:border-teal-500">
                <option>همه مقصدها</option>
                {destinations.map((d) => <option key={d.name}>{d.name}</option>)}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold text-slate-600">تاریخ سفر</span>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3.5 text-sm outline-none focus:border-teal-500" />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold text-slate-600">تعداد مسافران</span>
              <select value={people} onChange={(e) => setPeople(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3.5 text-sm outline-none focus:border-teal-500">
                <option>۱ نفر</option>
                <option>۲ نفر</option>
                <option>۳ نفر</option>
                <option>۴ نفر</option>
                <option>۵ نفر یا بیشتر</option>
              </select>
            </label>

            <div className="flex items-end">
              <button onClick={searchTours} className="travel-button w-full rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white">
                جستجوی تورها ←
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section id="tours" className="travel-container py-24">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-teal-600">انتخاب‌های جذاب برای تو</span>
            <h2 className="mt-2 text-3xl font-black">تورهای پیشنهادی</h2>
            <p className="mt-2 text-sm text-slate-500">مقصدی را انتخاب کن و برای سفر آماده شو.</p>
          </div>
          <span className="rounded-full bg-teal-50 px-4 py-2 text-xs font-bold text-teal-700">
            {filteredTours.length} تور
          </span>
        </div>

        {filteredTours.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => (
              <article key={tour.id} className="tour-card overflow-hidden rounded-2xl border border-slate-100 bg-white">
                <div className="relative h-[220px]">
                  <TravelImage src={tour.image} alt={tour.title} className="absolute inset-0" />
                  <span className="absolute right-4 top-4 rounded-lg bg-white px-3 py-2 text-xs font-bold text-teal-700 shadow">{tour.tag}</span>
                  <span className="absolute bottom-4 left-4 rounded-lg bg-slate-950/70 px-3 py-2 text-xs font-bold text-white">★ {tour.rating}</span>
                </div>
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                    <span>📍 {tour.city}، {tour.country}</span>
                    <span>•</span>
                    <span>◷ {tour.duration}</span>
                  </div>
                  <h3 className="text-lg font-black">{tour.title}</h3>
                  <p className="mt-3 min-h-[48px] text-sm leading-7 text-slate-500">{tour.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <span className="text-xs text-slate-400">شروع قیمت از</span>
                      <div className="mt-1 text-lg font-black text-teal-700">{tour.price} <span className="text-xs font-normal">تومان</span></div>
                    </div>
                    <button onClick={() => setSelectedTour(tour)} className="travel-button rounded-xl bg-teal-600 px-4 py-3 text-xs font-bold text-white">
                      مشاهده تور
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
            <div className="text-4xl">🧳</div>
            <h3 className="mt-4 text-lg font-black">فعلاً توری برای این مقصد نداریم</h3>
            <p className="mt-2 text-sm text-slate-500">یک مقصد دیگر انتخاب کن تا تورهای موجود را ببینی.</p>
            <button onClick={() => { setDestination("همه مقصدها"); setAppliedDestination("همه مقصدها"); }} className="mt-5 rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white">
              نمایش همه تورها
            </button>
          </div>
        )}
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-white py-20">
        <div className="travel-container">
          <div className="mb-9 text-center">
            <span className="text-xs font-bold text-teal-600">دنیا را کشف کن</span>
            <h2 className="mt-2 text-3xl font-black">مقصدهای محبوب</h2>
            <p className="mt-3 text-sm text-slate-500">از شهرهای پرجنب‌وجوش تا سواحل آرام و رویایی.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {destinations.map((d) => (
              <button key={d.name} onClick={() => { setDestination(d.name); setAppliedDestination(d.name); document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" }); }} className="group relative h-[220px] overflow-hidden rounded-2xl text-right md:h-[280px]">
                <TravelImage src={d.image} alt={d.name} className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <div className="absolute bottom-5 right-5 text-white">
                  <h3 className="text-xl font-black">{d.name}</h3>
                  <p className="mt-1 text-xs text-white/80">{d.country}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="travel-container grid items-center gap-10 py-24 md:grid-cols-2">
        <div>
          <span className="text-xs font-bold text-teal-600">درباره Travelora</span>
          <h2 className="mt-3 text-3xl font-black leading-[1.7]">
            سفر خوب از یک <span className="text-teal-600">انتخاب خوب</span> شروع می‌شود.
          </h2>
          <p className="mt-5 text-sm leading-8 text-slate-600">
            Travelora با هدف ساده‌تر کردن برنامه‌ریزی سفر طراحی شده است. اینجا می‌توانی مقصدهای جذاب را کشف کنی، تورها را مقایسه کنی و برای ماجراجویی بعدی‌ات ایده بگیری.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-black text-teal-700">۲۴/۷</div>
              <p className="mt-2 text-xs text-slate-500">همراه سفر</p>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-black text-teal-700">۵۰+</div>
              <p className="mt-2 text-xs text-slate-500">ایده سفر</p>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <div className="text-2xl font-black text-teal-700">۱۰۰٪</div>
              <p className="mt-2 text-xs text-slate-500">تجربه متفاوت</p>
            </div>
          </div>
        </div>

        <div className="relative h-[330px] overflow-hidden rounded-3xl">
          <TravelImage src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=85" alt="کوهستان و طبیعت" className="absolute inset-0" />
          <div className="absolute bottom-5 right-5 rounded-xl bg-white/90 px-5 py-4 backdrop-blur">
            <p className="text-sm font-black text-slate-800">ماجراجویی منتظر توست</p>
            <p className="mt-1 text-xs text-slate-500">مقصد بعدی را تو انتخاب کن.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="bg-[#eaf8f6] py-16">
        <div className="travel-container text-center">
          <span className="text-xs font-bold text-teal-700">همراه ما باش</span>
          <h2 className="mt-3 text-2xl font-black">ایده‌های سفر را از دست نده!</h2>
          <p className="mt-3 text-sm text-slate-600">برای دریافت پیشنهادهای سفر، ایمیلت را وارد کن.</p>
          <form onSubmit={subscribe} className="mx-auto mt-7 flex max-w-[480px] flex-col gap-3 sm:flex-row">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل شما" className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-teal-500" />
            <button type="submit" className="travel-button rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white">عضویت در خبرنامه</button>
          </form>
          {notice && <p className="mt-4 text-sm font-semibold text-teal-700">{notice}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102b35] py-12 text-white">
        <div className="travel-container grid gap-9 md:grid-cols-3">
          <div>
            <div className="text-2xl font-black text-teal-300">Travelora</div>
            <p className="mt-4 max-w-[300px] text-sm leading-8 text-white/60">
              مقصدهای تازه، تجربه‌های تازه و خاطره‌هایی که تا همیشه همراهت می‌مانند.
            </p>
          </div>
          <div>
            <h3 className="font-bold">دسترسی سریع</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <a href="#home">صفحه اصلی</a>
              <a href="#tours">تورهای مسافرتی</a>
              <a href="#destinations">مقصدها</a>
              <a href="#about">درباره ما</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">ارتباط با ما</h3>
            <p className="mt-4 text-sm leading-8 text-white/60">این صفحه یک نمونه‌کار نمایشی از طراحی وب‌سایت گردشگری است.</p>
            <p className="mt-3 text-sm text-teal-300">Travelora © 2026</p>
          </div>
        </div>
        <div className="travel-container mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          تمامی حقوق این طرح محفوظ است.
        </div>
      </footer>

      {/* Tour details modal */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" onClick={() => setSelectedTour(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="tour-modal-title" className="max-h-[90vh] w-full max-w-[500px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 id="tour-modal-title" className="text-xl font-black">جزئیات تور</h2>
              <button onClick={() => setSelectedTour(null)} aria-label="بستن" className="rounded-lg bg-slate-100 px-3 py-2 text-lg">×</button>
            </div>
            <div className="relative mt-5 h-[190px] overflow-hidden rounded-xl">
              <TravelImage src={selectedTour.image} alt={selectedTour.title} className="absolute inset-0" />
            </div>
            <h3 className="mt-5 text-lg font-black">{selectedTour.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-500">{selectedTour.description}</p>
            <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">مدت سفر</span><strong>{selectedTour.duration}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">تاریخ انتخابی</span><strong>{date || "هنوز انتخاب نشده"}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">تعداد مسافران</span><strong>{people}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">قیمت پایه</span><strong className="text-teal-700">{selectedTour.price} تومان</strong></div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-400">
              این صفحه نمونه‌کار نمایشی است؛ رزرو و پرداخت واقعی در این نسخه انجام نمی‌شود.
            </p>
            <button onClick={() => { setSelectedTour(null); setNotice("در نسخه نمایشی، درخواست رزرو ثبت واقعی نمی‌شود."); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="travel-button mt-5 w-full rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white">
              ثبت درخواست (نمایشی)
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
