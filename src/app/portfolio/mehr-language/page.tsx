
"use client";

import { useState, type FormEvent } from "react";

const courses = [
  {
    id: 1,
    title: "مکالمه انگلیسی",
    subtitle: "از اولین جمله تا مکالمه روان",
    level: "مبتدی تا پیشرفته",
    duration: "۳ ماه",
    price: "۲,۴۰۰,۰۰۰",
    tag: "محبوب‌ترین دوره",
    accent: "#5275e8",
    symbol: "EN",
  },
  {
    id: 2,
    title: "آمادگی آیلتس",
    subtitle: "آمادگی هدفمند برای آزمون IELTS",
    level: "متوسط به بالا",
    duration: "۴ ماه",
    price: "۴,۸۰۰,۰۰۰",
    tag: "آمادگی آزمون",
    accent: "#16a6a0",
    symbol: "IELTS",
  },
  {
    id: 3,
    title: "زبان آلمانی",
    subtitle: "یادگیری اصولی از سطح A1",
    level: "بدون پیش‌نیاز",
    duration: "۳ ماه",
    price: "۲,۸۰۰,۰۰۰",
    tag: "دوره جدید",
    accent: "#d18a4d",
    symbol: "DE",
  },
];

const schedule = [
  { day: "شنبه و دوشنبه", time: "۱۷:۰۰ تا ۱۸:۳۰", course: "مکالمه انگلیسی", level: "A2" },
  { day: "یکشنبه و سه‌شنبه", time: "۱۸:۰۰ تا ۱۹:۳۰", course: "آمادگی آیلتس", level: "IELTS" },
  { day: "شنبه و چهارشنبه", time: "۱۵:۰۰ تا ۱۶:۳۰", course: "زبان آلمانی", level: "A1" },
];

const photos = {
  hero: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=85",
  study: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
  books: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85",
};

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
    <div className={`relative overflow-hidden bg-[#e8edf8] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#dce7fa] to-[#edf2fb]">
          <div className="text-center text-[#5275e8]">
            <div className="text-5xl">✦</div>
            <div className="mt-3 text-xs font-bold">MEHR LANGUAGE</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MehrLanguagePage() {
  const [activeTab, setActiveTab] = useState("همه دوره‌ها");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState("نمی‌دانم");
  const [submitted, setSubmitted] = useState(false);

  const filteredCourses =
    activeTab === "همه دوره‌ها"
      ? courses
      : courses.filter((course) =>
          activeTab === "انگلیسی" ? course.id !== 3 : course.id === 3
        );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fullName.trim() || !/^09\d{9}$/.test(phone)) return;
    setSubmitted(true);
  }

  function chooseCourse(title: string) {
    setSelectedCourse(title);
    document.getElementById("placement")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f7f9fd] text-[#17243c]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#e8edf5] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5275e8] text-2xl font-black text-white shadow-lg shadow-blue-200">
              م
            </div>
            <div>
              <div className="text-xl font-black tracking-wider text-[#17243c]">MEHR</div>
              <div className="text-[9px] font-semibold tracking-[0.25em] text-[#8793a7]" dir="ltr">
                LANGUAGE INSTITUTE
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-[#65728a] md:flex">
            <a href="#courses" className="transition hover:text-[#5275e8]">دوره‌ها</a>
            <a href="#method" className="transition hover:text-[#5275e8]">روش آموزش</a>
            <a href="#schedule" className="transition hover:text-[#5275e8]">برنامه کلاس‌ها</a>
            <a href="#about" className="transition hover:text-[#5275e8]">درباره مهر</a>
          </nav>

          <a
            href="#placement"
            className="rounded-xl bg-[#5275e8] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-[#3e60ce]"
          >
            تعیین سطح رایگان
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#eef2ff]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[#eaf8f7]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce5ff] bg-[#f4f6ff] px-4 py-2 text-xs font-bold text-[#5275e8]">
              <span className="h-2 w-2 rounded-full bg-[#5275e8]" />
              یادگیری زبان با یک مسیر روشن
            </div>

            <h1 className="text-[43px] font-black leading-[1.5] tracking-tight md:text-[66px]">
              زبان جدید،
              <br />
              <span className="text-[#5275e8]">دنیای جدید.</span>
            </h1>

            <p className="mt-6 max-w-[490px] text-sm leading-9 text-[#738097] md:text-base">
              در مؤسسه مهر، یادگیری زبان فقط حفظ کردن لغت و قواعد نیست.
              اینجا یاد می‌گیری با اعتمادبه‌نفس صحبت کنی، ارتباط بسازی و
              فرصت‌های تازه‌ای برای خودت خلق کنی.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="rounded-xl bg-[#5275e8] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-1 hover:bg-[#3e60ce]"
              >
                مشاهده دوره‌ها
                <span className="mr-3">←</span>
              </a>
              <a
                href="#method"
                className="rounded-xl border border-[#e1e6ef] bg-white px-7 py-4 text-sm font-bold text-[#34425a] transition hover:border-[#5275e8] hover:text-[#5275e8]"
              >
                شیوه آموزش ما
              </a>
            </div>

            <div className="mt-14 grid max-w-[470px] grid-cols-3 border-t border-[#e9edf4] pt-7">
              <div>
                <div className="text-3xl font-black text-[#17243c]" dir="ltr">۱۲+</div>
                <div className="mt-2 text-xs text-[#8793a7]">سال تجربه آموزشی</div>
              </div>
              <div className="border-r border-[#e9edf4] pr-5">
                <div className="text-3xl font-black text-[#17243c]" dir="ltr">۳۵۰۰+</div>
                <div className="mt-2 text-xs text-[#8793a7]">زبان‌آموز</div>
              </div>
              <div className="border-r border-[#e9edf4] pr-5">
                <div className="text-3xl font-black text-[#17243c]" dir="ltr">۲۵+</div>
                <div className="mt-2 text-xs text-[#8793a7]">مدرس متخصص</div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[550px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-3xl bg-[#dce6ff]" />
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-3xl bg-[#d9f0ed]" />

            <Photo
              src={photos.hero}
              alt="فضای مطالعه و یادگیری"
              className="relative z-10 h-[390px] rounded-[28px] shadow-2xl shadow-slate-300 md:h-[520px]"
            />

            <div className="absolute -bottom-7 right-5 z-20 max-w-[270px] rounded-2xl bg-white p-5 shadow-xl shadow-slate-300/60 md:right-[-30px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf1ff] text-xl text-[#5275e8]">
                  ✦
                </div>
                <div>
                  <div className="text-sm font-black">مسیر یادگیری تو</div>
                  <div className="mt-1 text-[10px] text-[#8793a7]">از سطح فعلی تا هدف دلخواه</div>
                </div>
              </div>
            </div>

            <div className="absolute left-5 top-5 z-20 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
              <div className="text-[9px] font-bold tracking-widest text-[#8793a7]" dir="ltr">LEARN · GROW · CONNECT</div>
              <div className="mt-1 text-sm font-black text-[#5275e8]">شروع کن، قدم‌به‌قدم</div>
            </div>
          </div>
        </div>
      </section>

      {/* Small feature strip */}
      <section className="relative z-10 mx-auto -mt-1 max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-4 rounded-3xl bg-[#17243c] p-7 text-white shadow-xl shadow-slate-200 md:grid-cols-3 md:p-9">
          {[
            ["01", "آموزش هدفمند", "برنامه متناسب با سطح و هدف تو"],
            ["02", "تمرین کاربردی", "یادگیری از طریق موقعیت‌های واقعی"],
            ["03", "پیشرفت قابل سنجش", "ارزیابی و بازخورد در طول دوره"],
          ].map((item) => (
            <div key={item[0]} className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0 md:border-b-0 md:border-l md:pb-0 md:pl-7">
              <div className="text-sm font-black text-[#8da5ff]" dir="ltr">{item[0]}</div>
              <div>
                <h3 className="text-sm font-black">{item[1]}</h3>
                <p className="mt-2 text-xs leading-6 text-[#aeb9cf]">{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="mx-auto max-w-[1320px] px-5 py-24 md:px-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-black tracking-widest text-[#5275e8]" dir="ltr">EXPLORE OUR COURSES</div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">مسیر یادگیری خودت را انتخاب کن</h2>
            <p className="mt-4 text-sm leading-7 text-[#7d899e]">
              دوره‌ای متناسب با نیازت پیدا کن و با برنامه‌ای مشخص شروع کن.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["همه دوره‌ها", "انگلیسی", "آلمانی"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl px-5 py-3 text-xs font-bold transition ${
                  activeTab === tab
                    ? "bg-[#5275e8] text-white shadow-lg shadow-blue-200"
                    : "border border-[#e2e7f0] bg-white text-[#65728a] hover:border-[#5275e8] hover:text-[#5275e8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col rounded-3xl border border-[#e8edf5] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/70"
            >
              <div className="flex items-center justify-between">
                <span
                  className="rounded-full px-3 py-2 text-[10px] font-bold"
                  style={{ backgroundColor: `${course.accent}18`, color: course.accent }}
                >
                  {course.tag}
                </span>
                <span
                  className="flex h-12 min-w-12 items-center justify-center rounded-2xl px-2 text-xs font-black text-white"
                  style={{ backgroundColor: course.accent }}
                  dir="ltr"
                >
                  {course.symbol}
                </span>
              </div>

              <div className="mt-9">
                <h3 className="text-xl font-black">{course.title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#8994a7]">{course.subtitle}</p>
              </div>

              <div className="my-7 space-y-4 border-y border-[#edf0f5] py-5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8994a7]">سطح دوره</span>
                  <span className="font-bold text-[#34425a]">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8994a7]">مدت دوره</span>
                  <span className="font-bold text-[#34425a]">{course.duration}</span>
                </div>
              </div>

              <div className="mt-auto flex items-end justify-between gap-3">
                <div>
                  <div className="text-[10px] text-[#8994a7]">شهریه دوره</div>
                  <div className="mt-2 text-lg font-black text-[#17243c]">
                    {course.price}
                    <span className="mr-1 text-[10px] font-normal text-[#8994a7]">تومان</span>
                  </div>
                </div>
                <button
                  onClick={() => chooseCourse(course.title)}
                  className="rounded-xl px-4 py-3 text-xs font-bold text-white transition hover:opacity-85"
                  style={{ backgroundColor: course.accent }}
                >
                  ثبت‌نام
                  <span className="mr-2">←</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-[10px] text-[#a0a9b8]">
          * دوره‌ها، شهریه‌ها و اطلاعات این صفحه نمونه مفهومی برای نمایش هستند.
        </p>
      </section>

      {/* Method */}
      <section id="method" className="overflow-hidden bg-[#edf2fc] py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 md:grid-cols-2 md:px-10">
          <div className="relative">
            <Photo
              src={photos.study}
              alt="محیط مطالعه و یادگیری"
              className="h-[350px] rounded-[28px] shadow-xl shadow-slate-300 md:h-[470px]"
            />
            <div className="absolute -bottom-7 -left-4 rounded-2xl bg-white p-6 shadow-xl">
              <div className="text-3xl font-black text-[#5275e8]" dir="ltr">01 — 04</div>
              <div className="mt-2 text-xs font-bold text-[#64718a]">چهار مرحله تا پیشرفت</div>
            </div>
          </div>

          <div id="about">
            <div className="text-xs font-black tracking-widest text-[#5275e8]" dir="ltr">THE MEHR METHOD</div>
            <h2 className="mt-5 text-3xl font-black leading-[1.6] md:text-5xl">
              فقط یاد نگیر؛
              <br />
              <span className="text-[#5275e8]">از زبان استفاده کن.</span>
            </h2>
            <p className="mt-5 text-sm leading-9 text-[#738097]">
              ما باور داریم یادگیری زبان باید به زندگی واقعی وصل باشد.
              برای همین، مسیر آموزش در مهر از شناخت نیازهای تو شروع می‌شود
              و با تمرین و ارزیابی ادامه پیدا می‌کند.
            </p>

            <div className="mt-9 space-y-6">
              {[
                ["۰۱", "تعیین سطح", "شناخت دقیق سطح و نیازهای زبان‌آموز"],
                ["۰۲", "برنامه شخصی", "انتخاب مسیر متناسب با هدف یادگیری"],
                ["۰۳", "تمرین و تعامل", "تمرین مکالمه و استفاده از زبان در موقعیت واقعی"],
                ["۰۴", "ارزیابی پیشرفت", "بررسی منظم عملکرد و اصلاح مسیر"],
              ].map((item) => (
                <div key={item[0]} className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black text-[#5275e8] shadow-sm">
                    {item[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-black">{item[1]}</h3>
                    <p className="mt-2 text-xs leading-6 text-[#8994a7]">{item[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second image and message */}
      <section className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-24 md:grid-cols-2 md:px-10">
        <div>
          <div className="text-xs font-black tracking-widest text-[#5275e8]" dir="ltr">A NEW WAY TO LEARN</div>
          <h2 className="mt-5 text-3xl font-black leading-[1.6] md:text-4xl">
            هر قدم کوچک،
            <br />
            یک پیشرفت بزرگ است.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-9 text-[#738097]">
            مهم نیست از کجا شروع می‌کنی؛ مهم این است که مسیر درستی برای ادامه
            داشته باشی. در مهر، یادگیری را به قدم‌های ساده و قابل انجام تقسیم
            می‌کنیم تا پیشرفتت را ببینی.
          </p>
          <a
            href="#placement"
            className="mt-8 inline-flex rounded-xl bg-[#17243c] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#5275e8]"
          >
            شروع مسیر یادگیری
            <span className="mr-3">←</span>
          </a>
        </div>

        <Photo
          src={photos.books}
          alt="کتاب‌ها و منابع آموزشی"
          className="h-[300px] rounded-[28px] shadow-xl shadow-slate-200 md:h-[390px]"
        />
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-white py-24">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="text-xs font-black tracking-widest text-[#5275e8]" dir="ltr">CLASS TIMETABLE</div>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">برنامه کلاس‌ها</h2>
            </div>
            <p className="text-xs text-[#8994a7]">نمونه‌ای از زمان‌بندی دوره‌های آموزشی</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#e8edf5]">
            <table className="w-full min-w-[620px] border-collapse text-right">
              <thead className="bg-[#f2f5fc]">
                <tr className="text-xs text-[#64718a]">
                  <th className="px-6 py-5">روزهای برگزاری</th>
                  <th className="px-6 py-5">ساعت</th>
                  <th className="px-6 py-5">عنوان دوره</th>
                  <th className="px-6 py-5">سطح</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item) => (
                  <tr key={item.course} className="border-t border-[#edf0f5] text-sm transition hover:bg-[#f8faff]">
                    <td className="px-6 py-6 text-[#65728a]">{item.day}</td>
                    <td className="px-6 py-6 font-medium text-[#34425a]" dir="ltr">{item.time}</td>
                    <td className="px-6 py-6 font-black text-[#17243c]">{item.course}</td>
                    <td className="px-6 py-6">
                      <span className="rounded-lg bg-[#edf1ff] px-3 py-2 text-xs font-bold text-[#5275e8]" dir="ltr">
                        {item.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Placement */}
      <section id="placement" className="bg-[#17243c] py-24 text-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 md:grid-cols-2 md:px-10">
          <div>
            <div className="text-xs font-black tracking-widest text-[#9db2ff]" dir="ltr">YOUR JOURNEY STARTS HERE</div>
            <h2 className="mt-6 text-4xl font-black leading-[1.5] md:text-5xl">
              اولین قدم،
              <br />
              <span className="text-[#9db2ff]">شناخت سطح توست.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-9 text-[#b5c1d6]">
              فرم را تکمیل کن تا برای تعیین سطح و انتخاب دوره مناسب با تو تماس بگیریم.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-[#9db2ff]">✓</div>
              <div>
                <div className="text-sm font-bold">مشاوره اولیه رایگان</div>
                <div className="mt-1 text-xs text-[#aab7ce]">شروع با شناخت درست از سطح زبان</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 text-[#17243c] shadow-2xl shadow-black/20 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f7f1] text-3xl text-[#169b78]">✓</div>
                <h3 className="mt-6 text-2xl font-black">درخواست ثبت شد!</h3>
                <p className="mt-3 text-sm leading-7 text-[#8793a7]">
                  ممنون از اعتمادت. این پیام در نسخه نمایشی سایت ثبت شده است.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-bold text-[#5275e8] underline underline-offset-4"
                >
                  بازگشت به فرم
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-7">
                  <h3 className="text-2xl font-black">درخواست تعیین سطح</h3>
                  <p className="mt-2 text-xs text-[#8994a7]">اطلاعاتت را وارد کن تا با تو تماس بگیریم.</p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">نام و نام خانوادگی</label>
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="نام خود را وارد کنید"
                    className="w-full rounded-xl border border-[#e2e7f0] bg-[#f8faff] px-4 py-4 text-sm outline-none transition focus:border-[#5275e8] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">شماره موبایل</label>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09123456789"
                    inputMode="numeric"
                    dir="ltr"
                    maxLength={11}
                    pattern="09[0-9]{9}"
                    className="w-full rounded-xl border border-[#e2e7f0] bg-[#f8faff] px-4 py-4 text-left text-sm outline-none transition focus:border-[#5275e8] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">دوره موردنظر</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full rounded-xl border border-[#e2e7f0] bg-[#f8faff] px-4 py-4 text-sm outline-none focus:border-[#5275e8]"
                  >
                    <option value="">انتخاب دوره</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold">سطح فعلی زبان</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full rounded-xl border border-[#e2e7f0] bg-[#f8faff] px-4 py-4 text-sm outline-none focus:border-[#5275e8]"
                  >
                    <option>نمی‌دانم</option>
                    <option>مبتدی</option>
                    <option>متوسط</option>
                    <option>پیشرفته</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#5275e8] py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-[#3e60ce]"
                >
                  ارسال درخواست
                  <span className="mr-2">←</span>
                </button>
                <p className="text-center text-[10px] text-[#a0a9b8]">
                  این فرم در حال حاضر نمایشی است و به سامانه ثبت اطلاعات متصل نیست.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111c30] py-14 text-white">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-10 px-5 md:flex-row md:items-start md:px-10">
          <div>
            <div className="text-3xl font-black tracking-widest" dir="ltr">MEHR.</div>
            <p className="mt-4 max-w-xs text-xs leading-8 text-[#aab7ce]">
              یادگیری زبان برای ارتباط بهتر با جهان؛ با آموزش هدفمند و همراهی قدم‌به‌قدم.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-xs">
            <div className="space-y-4">
              <div className="font-black text-[#9db2ff]">دسترسی سریع</div>
              <a href="#courses" className="block text-[#c0cadb] transition hover:text-white">دوره‌ها</a>
              <a href="#schedule" className="block text-[#c0cadb] transition hover:text-white">برنامه کلاس‌ها</a>
              <a href="#method" className="block text-[#c0cadb] transition hover:text-white">روش آموزش</a>
            </div>
            <div className="space-y-4">
              <div className="font-black text-[#9db2ff]">ارتباط با ما</div>
              <p className="text-[#c0cadb]" dir="ltr">021 - 12345678</p>
              <p className="text-[#c0cadb]">تهران، خیابان نمونه</p>
              <p className="text-[#c0cadb]" dir="ltr">@mehr.language</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1320px] border-t border-white/10 px-5 pt-6 text-[10px] text-[#7f8da7] md:px-10">
          <div className="flex flex-wrap justify-between gap-3">
            <span>© 2026 MEHR Language Institute</span>
            <span>طراحی مفهومی توسط NEXORA</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
