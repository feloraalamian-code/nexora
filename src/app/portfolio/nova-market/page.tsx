
"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  brand: string;
  emoji: string;
  image: string;
  color: string;
};

const money = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const categories = [
  { name: "موبایل و دیجیتال", en: "DIGITAL", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=85" },
  { name: "مد و پوشاک", en: "FASHION", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=85" },
  { name: "خانه و آشپزخانه", en: "HOME", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500&q=85" },
  { name: "زیبایی و سلامت", en: "BEAUTY", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=85" },
  { name: "ورزش و سفر", en: "SPORT & TRAVEL", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=85" },
  { name: "کتاب و لوازم تحریر", en: "BOOKS", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=85" },
  { name: "اسباب‌بازی و کودک", en: "KIDS", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&q=85" },
  { name: "سوپرمارکت", en: "GROCERY", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=85" },
];

const products: Product[] = [
  { id: 1, name: "گوشی موبایل سامسونگ Galaxy A55", category: "موبایل و دیجیتال", price: 18900000, oldPrice: 21500000, brand: "Samsung", emoji: "📱", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&q=85", color: "#edf0f7" },
  { id: 2, name: "لپ‌تاپ مدرن مناسب کار و روزمره", category: "موبایل و دیجیتال", price: 42900000, oldPrice: 45900000, brand: "HP", emoji: "💻", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=85", color: "#edf0f4" },
  { id: 3, name: "هدفون بی‌سیم باکیفیت", category: "موبایل و دیجیتال", price: 2450000, brand: "Sound", emoji: "🎧", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85", color: "#f2ece8" },
  { id: 4, name: "ساعت هوشمند اسپرت", category: "موبایل و دیجیتال", price: 3250000, oldPrice: 3900000, brand: "Smart", emoji: "⌚", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85", color: "#edf0f5" },
  { id: 5, name: "مانتو کژوال زنانه", category: "مد و پوشاک", price: 1590000, oldPrice: 1890000, brand: "NOVA", emoji: "👗", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&q=85", color: "#f3e9e9" },
  { id: 6, name: "کیف دستی مینیمال", category: "مد و پوشاک", price: 1250000, brand: "NOVA Style", emoji: "👜", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=85", color: "#f0ebe5" },
  { id: 7, name: "کتانی روزمره", category: "مد و پوشاک", price: 2190000, oldPrice: 2600000, brand: "Urban", emoji: "👟", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85", color: "#f1e9e8" },
  { id: 8, name: "چراغ رومیزی مدرن", category: "خانه و آشپزخانه", price: 980000, brand: "Home", emoji: "💡", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&q=85", color: "#f2ede3" },
  { id: 9, name: "صندلی راحتی مدرن", category: "خانه و آشپزخانه", price: 7800000, oldPrice: 8500000, brand: "NOVA Home", emoji: "🪑", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=700&q=85", color: "#ecece7" },
  { id: 10, name: "ست ظروف آشپزخانه", category: "خانه و آشپزخانه", price: 1450000, brand: "Kitchen", emoji: "🍽️", image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700&q=85", color: "#eeece6" },
  { id: 11, name: "محصول مراقبت از پوست", category: "زیبایی و سلامت", price: 650000, oldPrice: 790000, brand: "Beauty", emoji: "🧴", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&q=85", color: "#f4e9e9" },
  { id: 12, name: "ست محصولات مراقبت شخصی", category: "زیبایی و سلامت", price: 1190000, brand: "Care", emoji: "🧼", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f5?w=700&q=85", color: "#edf1eb" },
  { id: 13, name: "کفش ورزشی سبک", category: "ورزش و سفر", price: 2890000, oldPrice: 3200000, brand: "Sport", emoji: "👟", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=700&q=85", color: "#edf0f4" },
  { id: 14, name: "کوله‌پشتی مسافرتی", category: "ورزش و سفر", price: 1750000, brand: "Travel", emoji: "🎒", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=85", color: "#ededeb" },
  { id: 15, name: "کتاب داستان و رمان", category: "کتاب و لوازم تحریر", price: 185000, brand: "Book", emoji: "📚", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700&q=85", color: "#f0eae1" },
  { id: 16, name: "دفتر یادداشت مینیمال", category: "کتاب و لوازم تحریر", price: 125000, brand: "Paper", emoji: "📒", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=700&q=85", color: "#edf0f2" },
  { id: 17, name: "اسباب‌بازی آموزشی کودک", category: "اسباب‌بازی و کودک", price: 490000, oldPrice: 590000, brand: "Kids", emoji: "🧸", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=700&q=85", color: "#f2eade" },
  { id: 18, name: "ساختنی آموزشی", category: "اسباب‌بازی و کودک", price: 720000, brand: "Play", emoji: "🧩", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=700&q=85", color: "#edf0f2" },
  { id: 19, name: "بسته قهوه و نوشیدنی", category: "سوپرمارکت", price: 285000, brand: "Daily", emoji: "☕", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=700&q=85", color: "#eee8df" },
  { id: 20, name: "محصولات خوراکی روزمره", category: "سوپرمارکت", price: 195000, brand: "Market", emoji: "🛒", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=85", color: "#edf1e9" },
];

function SafeImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  return failed ? (
    <div className={`flex items-center justify-center bg-[#eeeef5] text-4xl ${className}`}>✦</div>
  ) : (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />
  );
}

export default function NovaMarketPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("همه کالاها");
  const [cart, setCart] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sort, setSort] = useState("پیشنهاد نووا");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const matchCategory = category === "همه کالاها" || product.category === category;
      const matchSearch = `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase().trim());
      return matchCategory && matchSearch;
    });

    if (sort === "ارزان‌ترین") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "گران‌ترین") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "بیشترین تخفیف") {
      result = [...result].sort((a, b) =>
        ((b.oldPrice || b.price) - b.price) / (b.oldPrice || b.price) -
        ((a.oldPrice || a.price) - a.price) / (a.oldPrice || a.price)
      );
    }
    return result;
  }, [category, query, sort]);

  const cartItems = products.map((product) => ({
    ...product,
    quantity: cart.filter((id) => id === product.id).length,
  })).filter((product) => product.quantity > 0);

  const cartCount = cart.length;
  const cartTotal = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);

  function addToCart(product: Product) {
    setCart((old) => [...old, product.id]);
  }

  function removeOne(id: number) {
    setCart((old) => {
      const index = old.indexOf(id);
      if (index === -1) return old;
      return old.filter((_, i) => i !== index);
    });
  }

  function chooseCategory(name: string) {
    setCategory(name);
    setMobileMenu(false);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  function toggleFavorite(id: number) {
    setFavorites((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]);
  }

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#f7f7fa] text-[#24253a]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap");
        .nova-page { font-family: "Vazirmatn", sans-serif; }
        .nova-page button, .nova-page input, .nova-page select { font-family: inherit; }
        .nova-product-image img { transition: transform .55s ease; }
        .nova-product-card:hover .nova-product-image img { transform: scale(1.075); }
        .nova-category-image img { transition: transform .65s ease; }
        .nova-category-card:hover .nova-category-image img { transform: scale(1.1); }
        .nova-scroll::-webkit-scrollbar { height: 4px; }
        .nova-scroll::-webkit-scrollbar-thumb { background: #d6d5e2; border-radius: 20px; }
        @keyframes nova-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        .nova-float { animation: nova-float 4s ease-in-out infinite; }
      `}</style>

      <div className="nova-page">

        {/* Installment Payment Strip */}
        <div className="relative overflow-hidden border-b border-[#e9e1f3] bg-gradient-to-l from-[#f1eafa] via-white to-[#f6f2fb] px-4 py-3">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-between lg:px-7">
            <div className="flex items-center gap-2 text-[11px] font-black text-[#302c43] md:text-xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e8def5] text-[#8060ad]">✦</span>
              <span>خرید راحت‌تر با پرداخت اقساطی</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-lg border border-[#e9e1f1] bg-white px-3 py-2 text-[10px] font-black text-[#51416d] shadow-sm md:text-[11px]">ترب‌پی</span>
              <span className="rounded-lg border border-[#e9e1f1] bg-white px-3 py-2 text-[10px] font-black text-[#51416d] shadow-sm md:text-[11px]">اسنپ‌پی</span>
              <span className="rounded-lg border border-[#e9e1f1] bg-white px-3 py-2 text-[10px] font-black text-[#51416d] shadow-sm md:text-[11px]">دیجی‌پی</span>
            </div>
            <span className="hidden text-[9px] text-[#8b8298] lg:block">روش‌های پرداخت اقساطی، مطابق شرایط سرویس‌دهندگان</span>
          </div>
        </div>

        {/* Announcement */}
        <div className="bg-[#292943] px-4 py-2 text-center text-[10px] font-medium text-white md:text-xs">
          <span className="text-[#d9b9ff]">✦</span>
          <span className="mx-2">انتخاب‌های تازه، تجربه‌ای متفاوت از خرید</span>
          <span className="hidden text-white/40 sm:inline">| ارسال به سراسر ایران</span>
        </div>

        {/* Header */}
        <header id="home" className="sticky top-0 z-40 border-b border-[#eeeef2] bg-white/95 shadow-[0_3px_20px_rgba(30,30,60,0.035)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-4 lg:px-7">
            <a href="#home" className="shrink-0 text-center" dir="ltr">
              <div className="text-[27px] font-black leading-none tracking-[0.15em] text-[#292943]">NOVA<span className="text-[#9273c6]">.</span></div>
              <div className="mt-1 text-[8px] font-semibold tracking-[0.42em] text-[#9b98aa]">MARKET</div>
            </a>

            <div className="relative mx-auto hidden max-w-[600px] flex-1 md:block">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#9693a6]">⌕</span>
              <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }} placeholder="دنبال چه محصولی می‌گردی؟" className="w-full rounded-xl border border-transparent bg-[#f5f5f8] py-3.5 pr-12 pl-5 text-xs outline-none transition focus:border-[#c7b5e6] focus:bg-white focus:ring-4 focus:ring-[#9273c6]/10" />
              {query && <button onClick={() => setQuery("")} className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">×</button>}
            </div>

            <div className="mr-auto flex shrink-0 items-center gap-2">
              <button onClick={() => {
                setCategory("همه کالاها"); setQuery("");
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }} className="hidden rounded-xl px-3 py-2.5 text-xs font-bold text-[#69677a] transition hover:bg-[#f5f3f9] sm:block">فروشگاه</button>

              <button onClick={() => {
                setCategory("همه کالاها"); setQuery("");
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                setSort("پیشنهاد نووا");
              }} className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#ecebf1] text-xl transition hover:border-[#c8b8e3] hover:bg-[#f8f6fc]" title="علاقه‌مندی‌ها">
                ♡
                {favorites.length > 0 && <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9273c6] px-1 text-[9px] text-white">{money(favorites.length)}</span>}
              </button>

              <button onClick={() => setCartOpen(true)} className="relative flex h-11 items-center gap-2 rounded-xl bg-[#292943] px-4 text-xs font-bold text-white transition hover:bg-[#48436c]">
                <span className="text-lg">🛒</span>
                <span className="hidden sm:inline">سبد خرید</span>
                {cartCount > 0 && <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d9b9ff] px-1 text-[10px] font-black text-[#292943]">{money(cartCount)}</span>}
              </button>

              <button onClick={() => setMobileMenu(!mobileMenu)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ecebf1] text-xl lg:hidden">☰</button>
            </div>
          </div>

          <div className="px-4 pb-3 md:hidden">
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#9693a6]">⌕</span>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جست‌وجوی کالا و برند..." className="w-full rounded-xl bg-[#f5f5f8] py-3 pr-11 pl-4 text-xs outline-none focus:ring-2 focus:ring-[#9273c6]/20" />
            </div>
          </div>

          <nav className="hidden border-t border-[#f0eff4] lg:block">
            <div className="nova-scroll mx-auto flex max-w-[1440px] items-center gap-8 overflow-x-auto px-7 py-3">
              <button onClick={() => chooseCategory("همه کالاها")} className={`shrink-0 text-xs transition ${category === "همه کالاها" ? "font-black text-[#8b6abf]" : "text-[#69677a] hover:text-[#8b6abf]"}`}>همه محصولات</button>
              {categories.map((item) => <button key={item.name} onClick={() => chooseCategory(item.name)} className={`shrink-0 text-xs transition ${category === item.name ? "font-black text-[#8b6abf]" : "text-[#69677a] hover:text-[#8b6abf]"}`}>{item.name}</button>)}
            </div>
          </nav>

          {mobileMenu && <div className="border-t border-[#eeeef2] bg-white p-4 lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => chooseCategory("همه کالاها")} className="rounded-lg bg-[#f5f3f9] p-3 text-xs font-bold">همه محصولات</button>
              {categories.map((item) => <button key={item.name} onClick={() => chooseCategory(item.name)} className="rounded-lg border border-[#eeeef2] p-3 text-xs">{item.name}</button>)}
            </div>
          </div>}
        </header>

        {/* Compact Hero */}
        <section className="mx-auto max-w-[1440px] px-4 pt-5 lg:px-7 lg:pt-7">
          <div className="relative flex min-h-[190px] overflow-hidden rounded-[22px] bg-[#292943] md:min-h-[215px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(160,126,205,0.3),transparent_35%)]" />
            <div className="absolute -left-16 -top-28 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -left-8 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute bottom-[-120px] right-[40%] h-64 w-64 rounded-full bg-[#9273c6]/15 blur-3xl" />
            <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-9 md:px-12">
              <div className="max-w-[480px] text-center sm:text-right">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-semibold tracking-widest text-[#d9c7f3]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c9a8f4]" />
                  DISCOVER SOMETHING NEW
                </div>
                <h1 className="text-[21px] font-black leading-[1.8] text-white md:text-[27px]">
                  انتخاب‌های تازه،
                  <span className="text-[#c9a8f4]"> برای زندگی بهتر</span>
                </h1>
                <p className="mt-1 text-[11px] leading-7 text-white/65 md:text-xs">از دنیای دیجیتال تا سبک زندگی؛ هر چیزی که دوست داری، یک‌جا پیدا کن.</p>
                <button onClick={() => chooseCategory("همه کالاها")} className="mt-3 rounded-xl bg-white px-6 py-3 text-[11px] font-black text-[#292943] transition hover:bg-[#e9ddf8]">
                  کشف محصولات <span className="mr-3">←</span>
                </button>
              </div>

              <div className="relative hidden h-[175px] w-[43%] max-w-[440px] sm:block">
                <div className="absolute left-[8%] top-[12%] h-[145px] w-[145px] rotate-[-9deg] overflow-hidden rounded-[25px] border-[5px] border-white/20 shadow-2xl nova-float">
                  <SafeImage src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=85" alt="هدفون" className="h-full w-full object-cover" />
                </div>
                <div className="absolute right-[8%] top-[5%] h-[135px] w-[135px] rotate-[9deg] overflow-hidden rounded-[22px] border-[5px] border-white/20 shadow-2xl">
                  <SafeImage src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=85" alt="کیف" className="h-full w-full object-cover" />
                </div>
                <div className="absolute bottom-[-2px] right-[37%] h-[85px] w-[85px] rotate-[-5deg] overflow-hidden rounded-[20px] border-[5px] border-white/20 shadow-2xl">
                  <SafeImage src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=85" alt="محصول مراقبت پوست" className="h-full w-full object-cover" />
                </div>
                <div className="absolute right-[0%] top-[3%] text-3xl text-[#c9a8f4]">✦</div>
                <div className="absolute bottom-[15%] left-[0%] text-2xl text-white/50">✧</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-[1440px] px-4 pt-5 lg:px-7">
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[#eeedf2] bg-white p-4 md:grid-cols-4 md:p-5">
            {[["◇", "تنوع انتخاب", "برای هر سلیقه"], ["↻", "بازگشت آسان", "خرید با خیال راحت"], ["➤", "ارسال سراسری", "به تمام ایران"], ["♡", "پشتیبانی", "همراه شما هستیم"]].map(([icon, title, subtitle], index) => (
              <div key={title} className={`flex items-center gap-3 px-2 py-2 ${index > 1 ? "md:border-r md:border-[#eeedf2]" : ""}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f2eef8] text-xl text-[#8c6bbd]">{icon}</div>
                <div><p className="text-[11px] font-black">{title}</p><p className="mt-1 text-[9px] text-[#a09eac]">{subtitle}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-[1440px] px-4 pt-10 lg:px-7 lg:pt-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-bold tracking-[0.22em] text-[#987dbd]">EXPLORE NOVA</p>
              <h2 className="mt-2 text-xl font-black md:text-2xl">دنیای خریدت را کشف کن</h2>
              <p className="mt-2 text-[10px] text-[#92909f]">از میان دسته‌بندی‌های متنوع، انتخاب کن</p>
            </div>
            <button onClick={() => chooseCategory("همه کالاها")} className="text-[10px] font-bold text-[#896bb6] transition hover:text-[#554078]">مشاهده همه ←</button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((item) => (
              <button key={item.name} onClick={() => chooseCategory(item.name)} className="nova-category-card group overflow-hidden rounded-2xl border border-[#eeedf2] bg-white text-right transition duration-300 hover:-translate-y-1 hover:border-[#d8c9ec] hover:shadow-[0_12px_30px_rgba(55,45,80,0.08)]">
                <div className="nova-category-image relative aspect-[1.25/1] overflow-hidden bg-[#eeedf3]">
                  <SafeImage src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute bottom-3 right-3 text-[8px] font-bold tracking-[0.15em] text-white/80">{item.en}</span>
                </div>
                <div className="flex min-h-[54px] items-center justify-between gap-1 px-3 py-2">
                  <span className="text-[10px] font-black leading-5">{item.name}</span>
                  <span className="text-sm text-[#9b80c4] transition group-hover:-translate-x-1">←</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Campaign banners */}
        <section className="mx-auto max-w-[1440px] px-4 pt-10 lg:px-7">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative flex min-h-[175px] overflow-hidden rounded-[20px] bg-[#eae4f2]">
              <div className="relative z-10 flex w-[58%] flex-col justify-center p-5 md:p-7">
                <span className="text-[9px] font-bold tracking-[0.18em] text-[#8b70b2]">NOVA SELECTION</span>
                <h3 className="mt-2 text-base font-black leading-7 text-[#302c43] md:text-lg">انتخاب‌هایی برای<br />سلیقه خاص تو</h3>
                <button onClick={() => chooseCategory("مد و پوشاک")} className="mt-4 w-fit rounded-lg bg-[#302c43] px-4 py-2.5 text-[9px] font-bold text-white transition hover:bg-[#6c568b]">دیدن محصولات ←</button>
              </div>
              <div className="absolute left-0 top-0 h-full w-[48%]">
                <SafeImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85" alt="مد و پوشاک" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#eae4f2]/30" />
              </div>
            </div>
            <div className="relative flex min-h-[175px] overflow-hidden rounded-[20px] bg-[#e6e9f1]">
              <div className="relative z-10 flex w-[58%] flex-col justify-center p-5 md:p-7">
                <span className="text-[9px] font-bold tracking-[0.18em] text-[#71809e]">TECH & LIFE</span>
                <h3 className="mt-2 text-base font-black leading-7 text-[#292d42] md:text-lg">تکنولوژی در<br />کنار زندگی روزمره</h3>
                <button onClick={() => chooseCategory("موبایل و دیجیتال")} className="mt-4 w-fit rounded-lg bg-[#30364c] px-4 py-2.5 text-[9px] font-bold text-white transition hover:bg-[#53617e]">کشف دنیای دیجیتال ←</button>
              </div>
              <div className="absolute left-0 top-0 h-full w-[48%]">
                <SafeImage src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=85" alt="تکنولوژی" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#e6e9f1]/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-[1440px] scroll-mt-40 px-4 pb-14 pt-12 lg:px-7">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[9px] font-bold tracking-[0.22em] text-[#987dbd]">THE NOVA COLLECTION</p>
              <h2 className="mt-2 text-xl font-black md:text-2xl">{category === "همه کالاها" ? "محصولات منتخب" : category}</h2>
              <p className="mt-2 text-[10px] text-[#9997a6]">{money(filtered.length)} محصول برای انتخاب شما</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden text-[10px] text-[#9997a6] sm:inline">مرتب‌سازی:</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl border border-[#eae9ef] bg-white px-3 py-3 text-[10px] outline-none focus:border-[#bca6dc]">
                <option>پیشنهاد نووا</option>
                <option>ارزان‌ترین</option>
                <option>گران‌ترین</option>
                <option>بیشترین تخفیف</option>
              </select>
            </div>
          </div>

          <div className="nova-scroll mb-6 flex gap-2 overflow-x-auto pb-3">
            {["همه کالاها", ...categories.map((item) => item.name)].map((name) => (
              <button key={name} onClick={() => setCategory(name)} className={`shrink-0 rounded-full px-4 py-2.5 text-[10px] font-semibold transition ${category === name ? "bg-[#302c43] text-white shadow-md shadow-[#302c43]/10" : "border border-[#eae9ef] bg-white text-[#777486] hover:border-[#bca6dc] hover:text-[#7d5da9]"}`}>{name}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-[#eeedf2] bg-white px-5 py-20 text-center">
              <div className="text-4xl text-[#a38bc7]">⌕</div>
              <h3 className="mt-4 text-sm font-black">محصولی پیدا نشد</h3>
              <p className="mt-2 text-xs text-[#9693a4]">عبارت جست‌وجو یا دسته‌بندی را تغییر بده.</p>
              <button onClick={() => { setQuery(""); setCategory("همه کالاها"); }} className="mt-5 rounded-xl bg-[#302c43] px-6 py-3 text-xs font-bold text-white">نمایش همه محصولات</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {filtered.map((product) => {
                const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
                return (
                  <article key={product.id} className="nova-product-card group overflow-hidden rounded-[18px] border border-[#eeedf2] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#dcd1eb] hover:shadow-[0_15px_35px_rgba(45,38,70,0.09)]">
                    <div className="nova-product-image relative m-2 overflow-hidden rounded-[13px]" style={{ backgroundColor: product.color }}>
                      <div className="aspect-[1/1.05]">
                        <SafeImage src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                      {discount > 0 && <span className="absolute right-2 top-2 rounded-md bg-[#e85d77] px-2 py-1 text-[9px] font-black text-white">{money(discount)}٪</span>}
                      <button onClick={() => toggleFavorite(product.id)} aria-label="افزودن به علاقه‌مندی‌ها" className={`absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm backdrop-blur transition ${favorites.includes(product.id) ? "text-[#e65b7b]" : "text-[#777486] hover:text-[#e65b7b]"}`}>
                        {favorites.includes(product.id) ? "♥" : "♡"}
                      </button>
                    </div>
                    <div className="px-3 pb-3 pt-1">
                      <div className="mb-2 flex items-center justify-between gap-1">
                        <span className="truncate text-[9px] text-[#9997a6]">{product.category}</span>
                        <span className="shrink-0 text-[8px] font-semibold text-[#9a83bb]">{product.brand}</span>
                      </div>
                      <h3 className="min-h-[43px] text-[11px] font-bold leading-6 text-[#303044]">{product.name}</h3>
                      <div className="mt-3 min-h-[44px]">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-[12px] font-black text-[#302c43]">{money(product.price)}</p>
                          <span className="text-[8px] text-[#9997a6]">تومان</span>
                        </div>
                        {product.oldPrice ? <p className="mt-1 text-[9px] text-[#aaa7b3] line-through">{money(product.oldPrice)}</p> : <p className="mt-1 text-[9px] text-transparent">بدون تخفیف</p>}
                      </div>
                      <button onClick={() => addToCart(product)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#302c43] py-3 text-[9px] font-bold text-white transition hover:bg-[#79619e] active:scale-[0.98]">
                        <span className="text-sm">＋</span> افزودن به سبد خرید
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Closing Banner */}
        <section className="mx-auto max-w-[1440px] px-4 pb-12 lg:px-7">
          <div className="relative overflow-hidden rounded-[22px] bg-[#eae5f2] px-6 py-8 md:px-10">
            <div className="absolute -left-12 -top-20 h-52 w-52 rounded-full border-[25px] border-white/40" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-[#8c70b5]">A LITTLE MORE NOVA</p>
                <h3 className="mt-2 text-lg font-black text-[#302c43]">انتخاب خوب، از یک جست‌وجوی ساده شروع می‌شود.</h3>
                <p className="mt-2 text-[10px] leading-6 text-[#777184]">دنیای محصولات نووا همیشه برای کشف کردن چیزهای تازه آماده است.</p>
              </div>
              <button onClick={() => chooseCategory("همه کالاها")} className="shrink-0 rounded-xl bg-[#302c43] px-6 py-3.5 text-[10px] font-bold text-white transition hover:bg-[#78619b]">بازگشت به فروشگاه ←</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#292943] px-5 pb-6 pt-12 text-white">
          <div className="mx-auto grid max-w-[1440px] gap-9 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-black tracking-[0.15em]" dir="ltr">NOVA<span className="text-[#c9a8f4]">.</span></div>
              <p className="mt-4 max-w-xs text-[10px] leading-8 text-white/50">نووا، جایی برای کشف محصولات متنوع و تجربه یک انتخاب ساده‌تر. دنیای خرید، نزدیک‌تر از همیشه.</p>
              <div className="mt-4 flex gap-2">
                {["◎", "◉", "✉"].map((icon) => <span key={icon} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-sm text-white/70">{icon}</span>)}
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-black">دسترسی سریع</h3>
              <a href="#home" className="mb-4 block text-[10px] text-white/55 hover:text-white">صفحه اصلی</a>
              <a href="#products" className="mb-4 block text-[10px] text-white/55 hover:text-white">فروشگاه</a>
              <a href="#products" className="block text-[10px] text-white/55 hover:text-white">محصولات منتخب</a>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-black">راهنمای خرید</h3>
              <p className="mb-4 text-[10px] text-white/55">ثبت سفارش</p>
              <p className="mb-4 text-[10px] text-white/55">روش‌های ارسال</p>
              <p className="mb-4 text-[10px] text-white/55">شرایط بازگشت کالا</p>
              <p className="text-[10px] text-white/55">پرسش‌های متداول</p>
            </div>
            <div>
              <h3 className="mb-5 text-xs font-black">ارتباط با نووا</h3>
              <p className="mb-3 text-[10px] leading-7 text-white/55">برای دریافت راهنمایی و پشتیبانی، از راه‌های ارتباطی فروشگاه استفاده کنید.</p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[10px] text-white/65">پشتیبانی مشتریان NOVA MARKET</div>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-[1440px] border-t border-white/10 pt-6 text-center text-[9px] text-white/35">NOVA MARKET © 2026 — DESIGN & DEVELOPMENT BY NEXORA</div>
        </footer>

        {/* Cart Drawer */}
        {cartOpen && (
          <div className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-[2px]" onClick={() => setCartOpen(false)}>
            <aside onClick={(e) => e.stopPropagation()} className="absolute bottom-0 left-0 top-0 flex w-full max-w-[430px] flex-col bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#eeedf2] p-5">
                <div>
                  <h2 className="text-sm font-black text-[#302c43]">سبد خرید شما</h2>
                  <p className="mt-1 text-[10px] text-[#9997a6]">{money(cartCount)} عدد کالا</p>
                </div>
                <button onClick={() => setCartOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f3f8] text-xl text-[#777486]">×</button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f1edf7] text-4xl text-[#9173bb]">🛒</div>
                    <h3 className="mt-5 text-sm font-black">سبد خریدت خالی است</h3>
                    <p className="mt-2 text-[10px] text-[#9997a6]">هنوز محصولی به سبد خرید اضافه نکرده‌ای.</p>
                    <button onClick={() => setCartOpen(false)} className="mt-5 rounded-xl bg-[#302c43] px-6 py-3 text-[10px] font-bold text-white">ادامه خرید</button>
                  </div>
                ) : (
                  cartItems.map((product) => (
                    <div key={product.id} className="mb-3 flex gap-3 rounded-xl border border-[#eeedf2] p-3">
                      <div className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: product.color }}>
                        <SafeImage src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold leading-6">{product.name}</p>
                        <p className="mt-1 text-[10px] font-black text-[#8063a7]">{money(product.price)} تومان</p>
                        <div className="mt-2 flex items-center gap-3">
                          <button onClick={() => addToCart(product)} className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f0edf6] text-sm text-[#8063a7]">+</button>
                          <span className="text-xs font-black">{money(product.quantity)}</span>
                          <button onClick={() => removeOne(product.id)} className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8edef] text-sm text-[#d65a76]">−</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-[#eeedf2] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs text-[#777486]">مبلغ کل سفارش</span>
                  <span className="text-lg font-black text-[#302c43]">{money(cartTotal)}<span className="mr-1 text-[9px] font-medium">تومان</span></span>
                </div>
                <button disabled={cart.length === 0} onClick={() => alert("این نسخه نمایشی است و درگاه پرداخت واقعی ندارد.")} className="w-full rounded-xl bg-[#302c43] py-4 text-xs font-bold text-white transition hover:bg-[#76609a] disabled:cursor-not-allowed disabled:opacity-40">ادامه فرایند خرید</button>
                <p className="mt-3 text-center text-[9px] text-[#aaa7b3]">نسخه نمایشی فروشگاه — بدون پرداخت واقعی</p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
