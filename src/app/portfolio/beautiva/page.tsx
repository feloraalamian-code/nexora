
"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  tag?: string;
  rating: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "سرم آبرسان هیالورونیک",
    brand: "SKIN LAB",
    category: "مراقبت پوست",
    price: 485000,
    oldPrice: 620000,
    image: "photo-1608248543803-ba4f8c70ae0b",
    tag: "پرفروش",
    rating: "4.9",
  },
  {
    id: 2,
    name: "رژ لب مخملی شماره ۱۲",
    brand: "VELVET BEAUTY",
    category: "آرایش صورت",
    price: 365000,
    image: "photo-1586495777744-4413f21062fa",
    tag: "جدید",
    rating: "4.8",
  },
  {
    id: 3,
    name: "کرم مرطوب کننده روزانه",
    brand: "DERMA CARE",
    category: "مراقبت پوست",
    price: 520000,
    oldPrice: 680000,
    image: "photo-1556229010-6c3f2c9ca5f8",
    rating: "4.9",
  },
  {
    id: 4,
    name: "پالت سایه نود",
    brand: "NUDE STUDIO",
    category: "آرایش صورت",
    price: 790000,
    image: "photo-1512496015851-a90fb38ba796",
    rating: "4.7",
  },
  {
    id: 5,
    name: "ماسک مو ترمیم کننده",
    brand: "HAIR THERAPY",
    category: "مراقبت مو",
    price: 430000,
    image: "photo-1601049541289-9b1b7bbbfe19",
    tag: "پیشنهاد ویژه",
    rating: "4.8",
  },
  {
    id: 6,
    name: "ضد آفتاب بی رنگ SPF50",
    brand: "SUN TOUCH",
    category: "مراقبت پوست",
    price: 610000,
    oldPrice: 750000,
    image: "photo-1556228578-0d85b1a4d571",
    rating: "4.9",
  },
  {
    id: 7,
    name: "ریمل حجم دهنده مشکی",
    brand: "LASH PRO",
    category: "آرایش صورت",
    price: 390000,
    image: "photo-1631214540242-2a7c6e3f2a4b",
    rating: "4.7",
  },
  {
    id: 8,
    name: "روغن آرگان مو",
    brand: "PURE HAIR",
    category: "مراقبت مو",
    price: 470000,
    image: "photo-1608571423902-eed4a5ad8108",
    rating: "4.8",
  },
];

const categories = [
  {
    name: "آرایش صورت",
    en: "MAKEUP",
    image: "photo-1522335789203-aabd1fc54bc9",
    number: "01",
  },
  {
    name: "مراقبت پوست",
    en: "SKINCARE",
    image: "photo-1571781926291-c477ebfd024b",
    number: "02",
  },
  {
    name: "مراقبت مو",
    en: "HAIR CARE",
    image: "photo-1527799820374-dcf8d9d4a388",
    number: "03",
  },
];

const photo = (id: string, width = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const formatPrice = (price: number) =>
  price.toLocaleString("fa-IR") + " تومان";

function Icon({
  name,
  size = 21,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<string, React.ReactNode> = {
    search: <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>,
    bag: <>
      <path d="M5 8h14l1 13H4L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>,
    heart: <path d="M20.8 8.8c0 4.5-8.8 10-8.8 10S3.2 13.3 3.2 8.8A4.5 4.5 0 0 1 12 6.5a4.5 4.5 0 0 1 8.8 2.3Z" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="m18 6-12 12M6 6l12 12" />,
    arrow: <path d="M19 12H5m7-7-7 7 7 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    user: <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>,
    check: <path d="m5 12 4 4L19 6" />,
    trash: <>
      <path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6" />
    </>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export default function BeautivaPage() {
  const [category, setCategory] = useState("همه");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        category === "همه" || product.category === category;

      const matchSearch =
        product.name.includes(search) ||
        product.brand.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [category, search]);

  const cartProducts = products.filter((product) =>
    cart.includes(product.id)
  );

  const total = cartProducts.reduce((sum, p) => sum + p.price, 0);

  const addToCart = (id: number) => {
    setCart((old) => [...old, id]);
    setNotice("محصول به سبد خرید اضافه شد");
    setTimeout(() => setNotice(""), 2200);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((old) =>
      old.includes(id)
        ? old.filter((item) => item !== id)
        : [...old, id]
    );
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <main className="beautiva" dir="rtl">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Vazirmatn', sans-serif;
          background: #faf8f5;
        }

        button, input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        .beautiva {
          --wine: #773c48;
          --pink: #e7c9c8;
          --cream: #faf8f5;
          --dark: #292322;
          --muted: #938985;
          --line: #eee7e2;
          background: var(--cream);
          color: var(--dark);
          min-height: 100vh;
          overflow: hidden;
        }

        .announcement {
          background: #713b47;
          color: #fff9f6;
          text-align: center;
          font-size: 11px;
          padding: 10px 15px;
          letter-spacing: .3px;
        }

        .announcement span {
          color: #f4d9c9;
          font-weight: 800;
        }

        .header {
          height: 88px;
          max-width: 1440px;
          margin: auto;
          padding: 0 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
          position: relative;
          z-index: 20;
          background: #faf8f5;
        }

        .logo {
          color: var(--wine);
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -1.8px;
          line-height: 1;
        }

        .logo small {
          display: block;
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 4px;
          text-align: center;
          margin-top: 7px;
          color: #9b7775;
          direction: ltr;
        }

        .nav {
          display: flex;
          gap: 35px;
          align-items: center;
        }

        .nav button {
          border: 0;
          background: none;
          font-size: 13px;
          color: #514844;
          transition: .2s;
        }

        .nav button:hover {
          color: var(--wine);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .icon-btn {
          background: none;
          border: 0;
          color: #493b39;
          display: flex;
          align-items: center;
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -9px;
          right: -9px;
          background: var(--wine);
          color: white;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          font-size: 10px;
          display: grid;
          place-items: center;
        }

        .mobile-menu {
          display: none;
        }

        .hero {
          max-width: 1440px;
          margin: auto;
          padding: 40px 6% 50px;
        }

        .hero-box {
          min-height: 515px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f0e2de;
          overflow: hidden;
          position: relative;
          border-radius: 4px;
        }

        .hero-content {
          padding: 70px 11% 65px 5%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          color: var(--wine);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          direction: ltr;
        }

        .hero h1 {
          font-size: clamp(36px, 4.3vw, 63px);
          line-height: 1.55;
          font-weight: 800;
          margin: 20px 0 13px;
          color: #4d3434;
        }

        .hero h1 em {
          color: #995d65;
          font-style: normal;
        }

        .hero-desc {
          color: #806e68;
          line-height: 2.2;
          font-size: 13px;
          max-width: 380px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 23px;
          margin-top: 32px;
        }

        .primary-btn {
          background: var(--wine);
          color: white;
          border: 1px solid var(--wine);
          padding: 15px 27px;
          font-size: 12px;
          transition: .3s;
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .primary-btn:hover {
          background: #4e2932;
          transform: translateY(-3px);
        }

        .text-btn {
          border: 0;
          background: none;
          color: #654a49;
          font-size: 12px;
          text-decoration: underline;
          text-underline-offset: 6px;
        }

        .hero-image {
          position: relative;
          min-height: 515px;
          background: #d8b8b1;
          overflow: hidden;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: transform .8s;
        }

        .hero-box:hover .hero-image img {
          transform: scale(1.04);
        }

        .hero-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(240,226,222,.15), transparent 45%);
          pointer-events: none;
        }

        .hero-label {
          position: absolute;
          z-index: 2;
          bottom: 25px;
          left: 25px;
          background: rgba(250,248,245,.91);
          padding: 14px 20px;
          color: #6c4647;
          font-size: 10px;
          letter-spacing: 1px;
          direction: ltr;
        }

        .hero-label strong {
          display: block;
          font-size: 15px;
          letter-spacing: 0;
          margin-top: 5px;
        }

        .trust-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 25px;
          border: 1px solid var(--line);
          background: #fffdfa;
        }

        .trust-item {
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--wine);
          border-left: 1px solid var(--line);
        }

        .trust-item:last-child {
          border-left: 0;
        }

        .trust-item strong {
          display: block;
          color: #473b37;
          font-size: 12px;
          margin-bottom: 3px;
        }

        .trust-item small {
          display: block;
          color: #9c918b;
          font-size: 10px;
        }

        .section {
          max-width: 1440px;
          margin: auto;
          padding: 75px 6%;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
        }

        .section-kicker {
          color: #a17875;
          font-size: 10px;
          letter-spacing: 2px;
          direction: ltr;
          display: block;
          margin-bottom: 9px;
          font-weight: 700;
        }

        .section-title {
          font-size: 27px;
          font-weight: 800;
          color: #453432;
        }

        .section-desc {
          color: #a09690;
          font-size: 11px;
          margin-top: 8px;
        }

        .view-all {
          background: none;
          border: 0;
          color: var(--wine);
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .category-card {
          height: 330px;
          position: relative;
          overflow: hidden;
          background: #eadbd5;
          cursor: pointer;
        }

        .category-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .65s;
        }

        .category-card:hover img {
          transform: scale(1.08);
        }

        .category-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(43,29,28,.68), transparent 65%);
        }

        .category-info {
          position: absolute;
          bottom: 25px;
          right: 25px;
          color: white;
        }

        .category-info small {
          display: block;
          direction: ltr;
          text-align: right;
          letter-spacing: 2px;
          font-size: 10px;
          margin-bottom: 8px;
        }

        .category-info strong {
          font-size: 22px;
          font-weight: 700;
        }

        .category-number {
          position: absolute;
          left: 20px;
          top: 20px;
          color: white;
          font-size: 12px;
          letter-spacing: 2px;
          direction: ltr;
        }

        .products-section {
          background: #f3eeea;
          padding-top: 75px;
          padding-bottom: 85px;
        }

        .products-inner {
          max-width: 1440px;
          margin: auto;
          padding: 0 6%;
        }

        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid #dfd4ce;
          color: #796e68;
          padding: 9px 20px;
          font-size: 11px;
          transition: .2s;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: var(--wine);
          border-color: var(--wine);
          color: white;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 23px;
        }

        .product-card {
          background: #fffdfa;
          position: relative;
          min-width: 0;
          transition: .3s;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(77,52,46,.07);
        }

        .product-image {
          height: 265px;
          position: relative;
          overflow: hidden;
          background: #e9dfd9;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .6s;
        }

        .product-card:hover .product-image img {
          transform: scale(1.07);
        }

        .product-tag {
          position: absolute;
          top: 13px;
          right: 13px;
          background: #fffdfa;
          color: var(--wine);
          padding: 6px 11px;
          font-size: 9px;
        }

        .favorite-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          background: rgba(255,253,250,.93);
          color: #7d6d67;
          border: 0;
          border-radius: 50%;
        }

        .favorite-btn.active {
          color: #a34355;
        }

        .quick-add {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(119,60,72,.94);
          color: white;
          border: 0;
          padding: 13px;
          font-size: 11px;
          transform: translateY(100%);
          transition: .3s;
        }

        .product-card:hover .quick-add {
          transform: translateY(0);
        }

        .product-info {
          padding: 17px 16px 20px;
        }

        .product-brand {
          color: #a28b84;
          font-size: 9px;
          letter-spacing: 1.2px;
          direction: ltr;
          text-align: right;
        }

        .product-name {
          font-size: 13px;
          font-weight: 600;
          color: #493d39;
          margin: 8px 0 12px;
          min-height: 23px;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
        }

        .product-price {
          color: var(--wine);
          font-size: 13px;
          font-weight: 800;
        }

        .old-price {
          display: block;
          color: #b4a9a3;
          font-size: 10px;
          text-decoration: line-through;
          margin-top: 3px;
        }

        .rating {
          font-size: 10px;
          color: #a58a60;
          direction: ltr;
        }

        .empty-products {
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 10px;
          color: #92847e;
          font-size: 13px;
        }

        .campaign {
          max-width: 1440px;
          margin: 75px auto;
          padding: 0 6%;
        }

        .campaign-box {
          min-height: 310px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #713e49;
          overflow: hidden;
          color: white;
        }

        .campaign-image {
          min-height: 310px;
          position: relative;
          overflow: hidden;
        }

        .campaign-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }

        .campaign-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 45px 12%;
        }

        .campaign-content small {
          letter-spacing: 3px;
          direction: ltr;
          font-size: 10px;
          color: #e7c6c2;
        }

        .campaign-content h2 {
          font-size: 34px;
          line-height: 1.7;
          margin: 12px 0;
        }

        .campaign-content p {
          font-size: 12px;
          line-height: 2;
          color: #ead4d1;
        }

        .campaign-content button {
          background: #f8eee8;
          color: var(--wine);
          border: 0;
          padding: 13px 23px;
          margin-top: 22px;
          font-size: 11px;
        }

        .brands {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 38px 6%;
          text-align: center;
        }

        .brands p {
          color: #a3948c;
          font-size: 10px;
          letter-spacing: 2px;
          direction: ltr;
          margin-bottom: 26px;
        }

        .brand-list {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
          color: #8c7b73;
          direction: ltr;
        }

        .brand-list span {
          font-family: Georgia, serif;
          font-size: 22px;
          letter-spacing: 1px;
        }

        .newsletter {
          max-width: 1440px;
          margin: auto;
          padding: 85px 6%;
          text-align: center;
        }

        .newsletter h2 {
          font-size: 27px;
          color: #503c39;
          margin-bottom: 12px;
        }

        .newsletter p {
          color: #978a84;
          font-size: 12px;
          line-height: 2;
        }

        .newsletter-form {
          max-width: 470px;
          display: flex;
          margin: 25px auto 0;
          border: 1px solid #dfd3ce;
          background: #fffdfa;
          padding: 5px;
        }

        .newsletter-form input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 10px 14px;
          font-size: 12px;
          direction: rtl;
        }

        .newsletter-form button {
          background: var(--wine);
          color: white;
          border: 0;
          padding: 12px 23px;
          font-size: 11px;
        }

        .footer {
          background: #342b29;
          color: #eee3dc;
          padding: 60px 6% 25px;
        }

        .footer-inner {
          max-width: 1320px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 50px;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 900;
          color: #edcfca;
          direction: ltr;
        }

        .footer-about p {
          color: #b8aaa2;
          font-size: 11px;
          line-height: 2.4;
          margin-top: 16px;
          max-width: 280px;
        }

        .footer h4 {
          font-size: 13px;
          color: #f1d9d3;
          margin-bottom: 22px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links button {
          border: 0;
          background: none;
          color: #b8aaa2;
          font-size: 11px;
          text-align: right;
        }

        .footer-links button:hover {
          color: white;
        }

        .footer-bottom {
          max-width: 1320px;
          margin: 45px auto 0;
          border-top: 1px solid #514541;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: #a99b94;
          font-size: 10px;
        }

        .search-panel {
          position: absolute;
          top: 100%;
          left: 6%;
          right: 6%;
          background: #fffdfa;
          padding: 20px;
          box-shadow: 0 10px 25px #00000012;
          z-index: 25;
          display: flex;
          gap: 12px;
        }

        .search-panel input {
          flex: 1;
          border: 0;
          border-bottom: 1px solid #ddd0c9;
          background: transparent;
          padding: 10px;
          outline: none;
          font-size: 13px;
        }

        .search-panel button {
          background: var(--wine);
          color: white;
          border: 0;
          padding: 10px 18px;
          font-size: 11px;
        }

        .cart-backdrop {
          position: fixed;
          inset: 0;
          background: #20181780;
          z-index: 100;
        }

        .cart-drawer {
          position: fixed;
          z-index: 101;
          top: 0;
          bottom: 0;
          left: 0;
          width: min(420px, 92vw);
          background: #fffdfa;
          padding: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 10px 0 35px #00000015;
          animation: slideIn .3s ease;
        }

        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .cart-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--line);
        }

        .cart-head h3 {
          font-size: 17px;
        }

        .cart-list {
          overflow-y: auto;
          flex: 1;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }

        .cart-item img {
          width: 65px;
          height: 75px;
          object-fit: cover;
        }

        .cart-item-info {
          flex: 1;
        }

        .cart-item-info strong {
          display: block;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .cart-item-info small {
          color: var(--wine);
          font-size: 11px;
        }

        .remove-btn {
          border: 0;
          background: none;
          color: #a28e88;
        }

        .cart-total {
          border-top: 1px solid var(--line);
          padding-top: 20px;
        }

        .cart-total div {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 20px;
        }

        .cart-total button {
          width: 100%;
          background: var(--wine);
          color: white;
          border: 0;
          padding: 15px;
          font-size: 12px;
        }

        .cart-empty {
          margin: auto;
          text-align: center;
          color: #9a8982;
          font-size: 13px;
          line-height: 2.5;
        }

        .toast {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          background: #493438;
          color: white;
          padding: 13px 24px;
          z-index: 200;
          font-size: 12px;
          box-shadow: 0 5px 25px #0002;
          animation: toastIn .3s ease;
        }

        @keyframes toastIn {
          from { opacity: 0; transform: translate(-50%, 15px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        @media(max-width: 900px) {
          .nav { gap: 17px; }
          .hero { padding-left: 4%; padding-right: 4%; }
          .hero-box { min-height: 420px; }
          .hero-image { min-height: 420px; }
          .hero-content { padding-right: 8%; }
          .product-grid { grid-template-columns: repeat(2, 1fr); }
          .product-image { height: 290px; }
          .section, .products-inner, .campaign { padding-left: 4%; padding-right: 4%; }
          .footer-inner { grid-template-columns: repeat(2, 1fr); }
        }

        @media(max-width: 650px) {
          .announcement { font-size: 10px; }
          .header { height: 70px; padding: 0 5%; }
          .logo { font-size: 25px; }
          .logo small { font-size: 7px; }
          .nav {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            left: 0;
            background: #faf8f5;
            padding: 25px;
            flex-direction: column;
            align-items: stretch;
            gap: 22px;
            box-shadow: 0 10px 20px #0000000c;
          }
          .nav.open { display: flex; }
          .nav button { text-align: right; }
          .mobile-menu { display: flex; }
          .header-actions { gap: 17px; }
          .hero { padding: 20px 4% 30px; }
          .hero-box { display: flex; flex-direction: column-reverse; }
          .hero-image { min-height: 310px; }
          .hero-content { padding: 34px 25px 40px; }
          .hero h1 { font-size: 35px; margin: 12px 0; }
          .hero-desc { font-size: 12px; }
          .hero-actions { margin-top: 23px; }
          .primary-btn { padding: 13px 18px; }
          .trust-row { grid-template-columns: 1fr; }
          .trust-item { border-left: 0; border-bottom: 1px solid var(--line); justify-content: flex-start; padding-right: 25px; }
          .trust-item:last-child { border-bottom: 0; }
          .section { padding-top: 55px; padding-bottom: 55px; }
          .section-title { font-size: 22px; }
          .section-head { align-items: flex-start; gap: 15px; }
          .section-head .view-all { white-space: nowrap; margin-top: 15px; }
          .category-grid { grid-template-columns: 1fr; gap: 14px; }
          .category-card { height: 270px; }
          .products-inner { padding-top: 0; }
          .product-grid { gap: 12px; }
          .product-image { height: 190px; }
          .product-info { padding: 13px 10px; }
          .product-name { font-size: 11px; }
          .product-price { font-size: 11px; }
          .product-tag { top: 8px; right: 8px; font-size: 8px; }
          .favorite-btn { top: 7px; left: 7px; width: 29px; height: 29px; }
          .quick-add { transform: none; padding: 10px; font-size: 10px; }
          .campaign { margin: 40px auto; padding: 0 4%; }
          .campaign-box { grid-template-columns: 1fr; }
          .campaign-image { min-height: 240px; }
          .campaign-content { padding: 35px 25px; }
          .campaign-content h2 { font-size: 27px; }
          .brands { padding: 30px 5%; }
          .brand-list span { font-size: 17px; }
          .newsletter { padding: 60px 5%; }
          .newsletter h2 { font-size: 22px; }
          .footer { padding: 45px 6% 20px; }
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 35px 20px; }
          .footer-about { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .search-panel { left: 3%; right: 3%; }
        }

        @media(hover: none) {
          .quick-add { transform: none; }
        }
      `}</style>

      <div className="announcement">
        به دنیای زیبایی خوش آمدید | <span>ارسال رایگان</span> برای خریدهای بالای ۲ میلیون تومان
      </div>

      <header className="header">
        <button
          className="icon-btn mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="منو"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        <div className="logo">
          BEAUTIVA
          <small>BEAUTY IS YOURS</small>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("home")}>صفحه اصلی</button>
          <button onClick={() => scrollTo("categories")}>دسته‌بندی محصولات</button>
          <button onClick={() => scrollTo("products")}>فروشگاه</button>
          <button onClick={() => scrollTo("campaign")}>پیشنهاد ویژه</button>
          <button onClick={() => scrollTo("footer")}>درباره ما</button>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="جستجو"
          >
            <Icon name="search" />
          </button>

          <button className="icon-btn" aria-label="علاقه‌مندی‌ها" onClick={() => {
            setCategory("همه");
            setSearch("");
            scrollTo("products");
            setNotice(`${favorites.length} محصول در علاقه‌مندی‌های شماست`);
            setTimeout(() => setNotice(""), 2200);
          }}>
            <Icon name="heart" />
            {favorites.length > 0 && <span className="cart-count">{favorites.length}</span>}
          </button>

          <button
            className="icon-btn"
            onClick={() => setCartOpen(true)}
            aria-label="سبد خرید"
          >
            <Icon name="bag" />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </div>

        {searchOpen && (
          <div className="search-panel">
            <input
              autoFocus
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCategory("همه");
              }}
              placeholder="نام محصول یا برند را جستجو کنید..."
            />
            <button onClick={() => {
              setSearchOpen(false);
              scrollTo("products");
            }}>
              جستجو
            </button>
          </div>
        )}
      </header>

      <section className="hero" id="home">
        <div className="hero-box">
          <div className="hero-content">
            <span className="eyebrow">DISCOVER YOUR BEAUTY</span>
            <h1>
              زیبایی تو،
              <br />
              <em>امضای توست.</em>
            </h1>
            <p className="hero-desc">
              مجموعه‌ای منتخب از محصولات آرایشی و مراقبتی
              برای لحظه‌هایی که می‌خواهی بهترین نسخه خودت باشی.
            </p>
            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => scrollTo("products")}
              >
                خرید محصولات <Icon name="arrow" size={16} />
              </button>
              <button
                className="text-btn"
                onClick={() => scrollTo("categories")}
              >
                کشف محصولات
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={photo("photo-1596462502278-27bfdc403348", 1100)}
              alt="مجموعه محصولات آرایشی و زیبایی"
            />
            <div className="hero-label">
              THE BEAUTY EDIT
              <strong>Everyday Essentials</strong>
            </div>
          </div>
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <Icon name="check" size={24} />
            <div>
              <strong>ضمانت اصالت کالا</strong>
              <small>انتخاب با اطمینان</small>
            </div>
          </div>
          <div className="trust-item">
            <Icon name="bag" size={24} />
            <div>
              <strong>ارسال سریع سفارش</strong>
              <small>تحویل در کوتاه‌ترین زمان</small>
            </div>
          </div>
          <div className="trust-item">
            <Icon name="heart" size={24} />
            <div>
              <strong>انتخاب محصولات باکیفیت</strong>
              <small>زیبایی با انتخاب هوشمندانه</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="section-head">
          <div>
            <span className="section-kicker">EXPLORE COLLECTIONS</span>
            <h2 className="section-title">دنیای زیبایی را کشف کن</h2>
            <p className="section-desc">
              مجموعه‌ای برای مراقبت و درخشش هر روز تو
            </p>
          </div>
          <button className="view-all" onClick={() => scrollTo("products")}>
            همه محصولات <Icon name="arrow" size={16} />
          </button>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <div
              className="category-card"
              key={item.number}
              onClick={() => {
                setCategory(item.name);
                scrollTo("products");
              }}
            >
              <img src={photo(item.image, 800)} alt={item.name} />
              <div className="category-overlay" />
              <span className="category-number">{item.number}</span>
              <div className="category-info">
                <small>{item.en}</small>
                <strong>{item.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="products-inner">
          <div className="section-head">
            <div>
              <span className="section-kicker">OUR BEST SELECTION</span>
              <h2 className="section-title">منتخب زیبایی</h2>
              <p className="section-desc">
                محصولات محبوب و پرطرفدار BEAUTIVA
              </p>
            </div>
            <span className="section-desc">
              {filteredProducts.length.toLocaleString("fa-IR")} محصول
            </span>
          </div>

          <div className="filters">
            {["همه", "آرایش صورت", "مراقبت پوست", "مراقبت مو"].map((item) => (
              <button
                key={item}
                className={`filter-btn ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img
                      src={photo(product.image, 600)}
                      alt={product.name}
                      loading="lazy"
                    />

                    {product.tag && (
                      <span className="product-tag">{product.tag}</span>
                    )}

                    <button
                      className={`favorite-btn ${favorites.includes(product.id) ? "active" : ""}`}
                      onClick={() => toggleFavorite(product.id)}
                      aria-label="افزودن به علاقه‌مندی‌ها"
                    >
                      <Icon name="heart" size={17} />
                    </button>

                    <button
                      className="quick-add"
                      onClick={() => addToCart(product.id)}
                    >
                      + افزودن به سبد خرید
                    </button>
                  </div>

                  <div className="product-info">
                    <div className="product-brand">{product.brand}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-bottom">
                      <div>
                        <div className="product-price">
                          {formatPrice(product.price)}
                        </div>
                        {product.oldPrice && (
                          <span className="old-price">
                            {formatPrice(product.oldPrice)}
                          </span>
                        )}
                      </div>
                      <span className="rating">★ {product.rating}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-products">
                محصولی با این مشخصات پیدا نشد.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="campaign" id="campaign">
        <div className="campaign-box">
          <div className="campaign-image">
            <img
              src={photo("photo-1611930022073-b7a4ba5fcccd", 1000)}
              alt="مجموعه مراقبت پوست"
              loading="lazy"
            />
          </div>
          <div className="campaign-content">
            <small>THE SKINCARE COLLECTION</small>
            <h2>مراقبت از پوست،
              <br />
              یک انتخاب روزانه
            </h2>
            <p>
              با محصولات مراقبتی منتخب، روتین زیبایی خودت را کامل کن.
            </p>
            <button onClick={() => {
              setCategory("مراقبت پوست");
              scrollTo("products");
            }}>
              مشاهده محصولات پوست
            </button>
          </div>
        </div>
      </section>

      <section className="brands">
        <p>BEAUTY BRANDS WE LOVE</p>
        <div className="brand-list">
          <span>ORDINARY</span>
          <span>LOREAL</span>
          <span>NYX</span>
          <span>LA ROCHE</span>
          <span>OLAPLEX</span>
        </div>
      </section>

      <section className="newsletter">
        <span className="section-kicker">STAY IN TOUCH</span>
        <h2>از دنیای زیبایی جا نمان!</h2>
        <p>
          برای اطلاع از محصولات جدید و پیشنهادهای ویژه همراه ما باش.
        </p>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            setNotice("ثبت‌نام نمایشی با موفقیت انجام شد!");
            setTimeout(() => setNotice(""), 2500);
          }}
        >
          <input type="email" placeholder="ایمیل شما..." required />
          <button type="submit">عضویت</button>
        </form>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-about">
            <div className="footer-logo">BEAUTIVA</div>
            <p>
              زیبایی یک تعریف ثابت ندارد. در BEAUTIVA تلاش می‌کنیم
              مجموعه‌ای از محصولات آرایشی و مراقبتی را برای انتخابی
              آگاهانه و تجربه‌ای لذت‌بخش فراهم کنیم.
            </p>
          </div>

          <div>
            <h4>دسترسی سریع</h4>
            <div className="footer-links">
              <button onClick={() => scrollTo("home")}>صفحه اصلی</button>
              <button onClick={() => scrollTo("categories")}>دسته‌بندی‌ها</button>
              <button onClick={() => scrollTo("products")}>فروشگاه</button>
              <button onClick={() => scrollTo("campaign")}>پیشنهاد ویژه</button>
            </div>
          </div>

          <div>
            <h4>راهنمای خرید</h4>
            <div className="footer-links">
              <button onClick={() => setNotice("این بخش در نسخه نمایشی است.")}>نحوه ثبت سفارش</button>
              <button onClick={() => setNotice("این بخش در نسخه نمایشی است.")}>روش‌های ارسال</button>
              <button onClick={() => setNotice("این بخش در نسخه نمایشی است.")}>شرایط بازگشت کالا</button>
              <button onClick={() => setNotice("این بخش در نسخه نمایشی است.")}>سؤالات متداول</button>
            </div>
          </div>

          <div>
            <h4>ارتباط با ما</h4>
            <div className="footer-links">
              <button onClick={() => setNotice("ایمیل نمونه: hello@beautiva.ir")}>hello@beautiva.ir</button>
              <button onClick={() => setNotice("شماره تماس نمایشی: ۰۲۱-۱۲۳۴۵۶۷۸")}>۰۲۱-۱۲۳۴۵۶۷۸</button>
              <button onClick={() => setNotice("اینستاگرام نمونه: @beautiva")}>اینستاگرام</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BEAUTIVA. All rights reserved.</span>
          <span>طراحی و توسعه با عشق به زیبایی</span>
        </div>
      </footer>

      {cartOpen && (
        <>
          <div
            className="cart-backdrop"
            onClick={() => setCartOpen(false)}
          />
          <aside className="cart-drawer" dir="rtl">
            <div className="cart-head">
              <h3>سبد خرید شما ({cart.length})</h3>
              <button className="icon-btn" onClick={() => setCartOpen(false)}>
                <Icon name="close" />
              </button>
            </div>

            {cartProducts.length ? (
              <>
                <div className="cart-list">
                  {cartProducts.map((product, index) => (
                    <div className="cart-item" key={`${product.id}-${index}`}>
                      <img src={photo(product.image, 200)} alt={product.name} />
                      <div className="cart-item-info">
                        <strong>{product.name}</strong>
                        <small>{formatPrice(product.price)}</small>
                      </div>
                      <button
                        className="remove-btn"
                        aria-label="حذف محصول"
                        onClick={() => {
                          const copy = [...cart];
                          copy.splice(index, 1);
                          setCart(copy);
                        }}
                      >
                        <Icon name="trash" size={17} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <div>
                    <span>مجموع سفارش</span>
                    <strong>{formatPrice(total)}</strong>
                  </div>
                  <button onClick={() => setNotice("اتصال درگاه پرداخت در نسخه نمایشی فعال نیست.")}>
                    ادامه فرایند خرید
                  </button>
                </div>
              </>
            ) : (
              <div className="cart-empty">
                <Icon name="bag" size={35} />
                <p>سبد خرید شما هنوز خالی است.</p>
                <button
                  className="primary-btn"
                  onClick={() => {
                    setCartOpen(false);
                    scrollTo("products");
                  }}
                >
                  مشاهده محصولات
                </button>
              </div>
            )}
          </aside>
        </>
      )}

      {notice && <div className="toast">{notice}</div>}
    </main>
  );
}
