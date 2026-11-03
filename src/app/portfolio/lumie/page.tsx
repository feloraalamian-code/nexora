
"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "زنانه" | "بچگانه";
  type: string;
  price: number;
  oldPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  badge?: string;
};

type CartItem = {
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

const money = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const products: Product[] = [
  {
    id: 1,
    name: "مانتو کتی آوا",
    category: "زنانه",
    type: "مانتو",
    price: 1850000,
    oldPrice: 2250000,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700",
    colors: ["مشکی", "کرم", "قهوه‌ای"],
    sizes: ["36", "38", "40", "42"],
    badge: "پرفروش",
  },
  {
    id: 2,
    name: "پیراهن مجلسی الیزه",
    category: "زنانه",
    type: "پیراهن",
    price: 2450000,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700",
    colors: ["مشکی", "زرشکی"],
    sizes: ["36", "38", "40", "42"],
    badge: "جدید",
  },
  {
    id: 3,
    name: "ست مینیمال روزمره",
    category: "زنانه",
    type: "ست لباس",
    price: 1680000,
    oldPrice: 1950000,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
    colors: ["کرم", "طوسی", "مشکی"],
    sizes: ["S", "M", "L", "XL"],
    badge: "تخفیف",
  },
  {
    id: 4,
    name: "شومیز لینن آلیس",
    category: "زنانه",
    type: "شومیز",
    price: 1150000,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=700",
    colors: ["سفید", "صورتی", "آبی"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 5,
    name: "کت کوتاه کلاسیک",
    category: "زنانه",
    type: "کت",
    price: 2180000,
    image: "https://images.unsplash.com/photo-1548624149-f3e0d4e5c7c3?w=700",
    colors: ["کرم", "مشکی"],
    sizes: ["36", "38", "40", "42"],
    badge: "جدید",
  },
  {
    id: 6,
    name: "مانتو تابستانی لیا",
    category: "زنانه",
    type: "مانتو",
    price: 1390000,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=700",
    colors: ["سفید", "صورتی"],
    sizes: ["36", "38", "40"],
  },
  {
    id: 7,
    name: "پیراهن گل‌دار کودک",
    category: "بچگانه",
    type: "پیراهن",
    price: 890000,
    oldPrice: 1050000,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700",
    colors: ["صورتی", "سفید"],
    sizes: ["2-3 سال", "4-5 سال", "6-7 سال"],
    badge: "محبوب",
  },
  {
    id: 8,
    name: "ست راحتی کوچولو",
    category: "بچگانه",
    type: "ست لباس",
    price: 750000,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=700",
    colors: ["آبی", "زرد", "سبز"],
    sizes: ["2-3 سال", "4-5 سال", "6-7 سال"],
  },
  {
    id: 9,
    name: "هودی رنگی کودک",
    category: "بچگانه",
    type: "هودی",
    price: 820000,
    oldPrice: 980000,
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=700",
    colors: ["صورتی", "آبی", "کرم"],
    sizes: ["2-3 سال", "4-5 سال", "6-7 سال"],
    badge: "تخفیف",
  },
  {
    id: 10,
    name: "پیراهن مهمانی کودک",
    category: "بچگانه",
    type: "پیراهن",
    price: 1120000,
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=700",
    colors: ["سفید", "صورتی"],
    sizes: ["2-3 سال", "4-5 سال", "6-7 سال"],
    badge: "جدید",
  },
  {
    id: 11,
    name: "ست تابستانی کودک",
    category: "بچگانه",
    type: "ست لباس",
    price: 690000,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700",
    colors: ["زرد", "آبی"],
    sizes: ["2-3 سال", "4-5 سال", "6-7 سال"],
  },
  {
    id: 12,
    name: "ژاکت بافت کوچولو",
    category: "بچگانه",
    type: "بافت",
    price: 950000,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700",
    colors: ["کرم", "صورتی", "قهوه‌ای"],
    sizes: ["2-3 سال", "4-5 سال", "6-7 سال"],
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

.lumie {
  --ink: #30272b;
  --muted: #8d8185;
  --pink: #bb8297;
  --pink-dark: #965e74;
  --cream: #faf7f4;
  --line: #eee7e4;
  direction: rtl;
  background: #fff;
  color: var(--ink);
  font-family: 'Vazirmatn', sans-serif;
  min-height: 100vh;
  overflow: hidden;
}
.lumie * { box-sizing: border-box; }
.lumie button, .lumie input { font-family: inherit; }
.lumie button { cursor: pointer; }
.lumie a { color: inherit; text-decoration: none; }

.lumie .announcement {
  background: #382e33;
  color: white;
  text-align: center;
  padding: 10px 15px;
  font-size: 11px;
  letter-spacing: .2px;
}
.lumie .announcement span { color: #edc7d4; font-weight: 800; }

.lumie .header {
  height: 86px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f2eeee;
  position: relative;
  z-index: 10;
  background: white;
}
.lumie .logo {
  font-family: Georgia, serif;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #94667a;
}
.lumie .logo small {
  display: block;
  font-family: 'Vazirmatn';
  font-size: 9px;
  letter-spacing: 4px;
  text-align: center;
  color: #95878d;
  margin-top: -5px;
}
.lumie .nav {
  display: flex;
  gap: 34px;
  align-items: center;
  font-size: 13px;
}
.lumie .nav a:hover { color: var(--pink-dark); }
.lumie .header-actions { display: flex; align-items: center; gap: 19px; }
.lumie .icon-btn {
  background: transparent;
  border: 0;
  color: var(--ink);
  font-size: 20px;
  position: relative;
  padding: 5px;
}
.lumie .count {
  position: absolute;
  top: -5px;
  right: -7px;
  background: var(--pink);
  color: white;
  border-radius: 50%;
  min-width: 17px;
  height: 17px;
  font-size: 10px;
  display: grid;
  place-items: center;
}
.lumie .search-wrap {
  background: #f8f5f3;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 38px;
  width: 195px;
  gap: 8px;
}
.lumie .search-wrap input {
  border: 0;
  outline: 0;
  background: transparent;
  width: 100%;
  font-size: 11px;
  color: var(--ink);
}
.lumie .mobile-menu { display: none; }

.lumie .hero {
  margin: 25px auto 0;
  width: 94%;
  min-height: 490px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f2e9e5;
  overflow: hidden;
  position: relative;
}
.lumie .hero-copy {
  padding: 75px 12% 65px 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 2;
}
.lumie .eyebrow {
  color: #a06d82;
  font-size: 11px;
  letter-spacing: 3px;
  font-weight: 700;
}
.lumie .hero h1 {
  font-size: clamp(35px, 4.6vw, 62px);
  line-height: 1.5;
  margin: 18px 0 12px;
  font-weight: 800;
  color: #392c31;
}
.lumie .hero h1 em {
  font-family: Georgia, serif;
  color: #a36d83;
  font-style: italic;
  font-weight: 500;
}
.lumie .hero p {
  font-size: 13px;
  color: #76696d;
  line-height: 2.3;
  max-width: 360px;
  margin: 0 0 25px;
}
.lumie .primary-btn {
  border: 0;
  background: #49363e;
  color: white;
  padding: 14px 28px;
  font-size: 12px;
  transition: .25s;
}
.lumie .primary-btn:hover { background: var(--pink-dark); transform: translateY(-2px); }
.lumie .hero-image {
  min-height: 490px;
  background-size: cover;
  background-position: center 35%;
  position: relative;
}
.lumie .hero-image:after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f2e9e5 0%, transparent 35%);
}
.lumie .hero-stamp {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 85px;
  height: 85px;
  border: 1px solid #ffffffa8;
  color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  font-family: Georgia, serif;
  font-size: 13px;
  z-index: 2;
}

.lumie .section { width: 90%; max-width: 1400px; margin: 85px auto; }
.lumie .section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 28px;
}
.lumie .section-heading h2 {
  font-size: 25px;
  margin: 0;
  font-weight: 800;
}
.lumie .section-heading p { font-size: 11px; color: var(--muted); margin: 7px 0 0; }
.lumie .text-link { font-size: 11px; color: var(--pink-dark); border-bottom: 1px solid #cba7b5; padding-bottom: 5px; }

.lumie .category-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.lumie .category-card {
  height: 370px;
  position: relative;
  overflow: hidden;
  background: #eee;
  text-align: right;
  display: flex;
  align-items: flex-end;
}
.lumie .category-card img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .7s;
}
.lumie .category-card:hover img { transform: scale(1.06); }
.lumie .category-card:after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, #20181bba, transparent 75%);
}
.lumie .category-content {
  z-index: 1;
  color: white;
  padding: 30px;
}
.lumie .category-content span { font-size: 10px; letter-spacing: 2px; }
.lumie .category-content h3 { font-size: 27px; margin: 8px 0; }
.lumie .category-content button {
  background: white;
  color: #382d31;
  border: 0;
  padding: 10px 22px;
  font-size: 11px;
  margin-top: 8px;
}

.lumie .benefits {
  background: #f9f5f2;
  padding: 35px 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  text-align: center;
}
.lumie .benefit-icon { font-size: 25px; color: #a77389; }
.lumie .benefits h4 { font-size: 12px; margin: 9px 0 5px; }
.lumie .benefits p { font-size: 10px; color: var(--muted); margin: 0; }

.lumie .filters {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}
.lumie .filter {
  border: 1px solid #e9e0e1;
  color: #74676d;
  background: white;
  border-radius: 25px;
  padding: 9px 20px;
  font-size: 11px;
}
.lumie .filter.active, .lumie .filter:hover {
  background: #49363e;
  color: white;
  border-color: #49363e;
}
.lumie .sort {
  border: 1px solid var(--line);
  background: white;
  padding: 9px 12px;
  font-size: 11px;
  border-radius: 20px;
  color: var(--ink);
  outline: 0;
}
.lumie .product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px 17px;
}
.lumie .product-card { min-width: 0; }
.lumie .product-image {
  height: 320px;
  background: #f6f2ef;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.lumie .product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s;
}
.lumie .product-card:hover .product-image img { transform: scale(1.05); }
.lumie .product-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #fff;
  color: #9a637b;
  padding: 5px 10px;
  font-size: 10px;
}
.lumie .heart {
  position: absolute;
  left: 12px;
  top: 12px;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: #ffffffeb;
  font-size: 17px;
  color: #8f6b78;
}
.lumie .heart.liked { color: #c54d72; }
.lumie .quick-add {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  width: calc(100% - 24px);
  padding: 12px;
  background: #fff;
  border: 0;
  font-size: 11px;
  opacity: 0;
  transform: translateY(10px);
  transition: .25s;
}
.lumie .product-card:hover .quick-add { opacity: 1; transform: translateY(0); }
.lumie .product-info { padding: 13px 2px; }
.lumie .product-info small { color: #a17b8a; font-size: 10px; }
.lumie .product-info h3 { font-size: 13px; font-weight: 600; margin: 5px 0 9px; }
.lumie .prices { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }
.lumie .price { font-size: 13px; font-weight: 800; }
.lumie .old-price { font-size: 10px; color: #aaa; text-decoration: line-through; }
.lumie .empty { padding: 60px 15px; text-align: center; color: var(--muted); grid-column: 1/-1; }

.lumie .installment {
  background: #40333a;
  color: white;
  padding: 45px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  position: relative;
  overflow: hidden;
}
.lumie .installment:after {
  content: "L";
  position: absolute;
  left: 9%;
  top: -100px;
  font-family: Georgia, serif;
  font-size: 280px;
  color: #ffffff08;
}
.lumie .installment h2 { font-size: 24px; margin: 0 0 10px; }
.lumie .installment p { font-size: 12px; color: #d5c7cc; margin: 0; line-height: 2; }
.lumie .payment-brands { display: flex; gap: 12px; z-index: 1; }
.lumie .payment-brand {
  background: white;
  color: #42363b;
  min-width: 125px;
  padding: 15px 20px;
  text-align: center;
  border-radius: 5px;
}
.lumie .payment-brand strong { display: block; font-size: 17px; }
.lumie .payment-brand small { font-size: 9px; color: #8a7d83; }

.lumie .newsletter {
  text-align: center;
  padding: 65px 15px;
  background: #faf7f5;
}
.lumie .newsletter h2 { font-size: 23px; margin: 0 0 10px; }
.lumie .newsletter p { color: var(--muted); font-size: 11px; }
.lumie .newsletter-form {
  margin: 22px auto 0;
  max-width: 410px;
  display: flex;
  background: white;
  border: 1px solid #eee3e5;
  padding: 5px;
}
.lumie .newsletter-form input { border: 0; outline: 0; flex: 1; min-width: 0; padding: 10px; font-size: 11px; }
.lumie .newsletter-form button { background: #49363e; color: white; border: 0; padding: 0 20px; font-size: 11px; }

.lumie .footer {
  background: #30272b;
  color: white;
  padding: 50px 7% 20px;
}
.lumie .footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 35px;
  padding-bottom: 35px;
}
.lumie .footer .logo { color: #e6bccc; }
.lumie .footer p { color: #c3b7bc; font-size: 11px; line-height: 2.2; max-width: 280px; }
.lumie .footer h4 { font-size: 12px; margin: 8px 0 18px; }
.lumie .footer a { display: block; color: #c3b7bc; font-size: 11px; margin: 12px 0; }
.lumie .footer-bottom {
  border-top: 1px solid #51464b;
  padding-top: 20px;
  color: #a99da2;
  font-size: 10px;
  text-align: center;
}

.lumie .overlay {
  position: fixed;
  inset: 0;
  background: #21191db5;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
}
.lumie .drawer {
  background: white;
  width: min(440px, 100%);
  height: 100%;
  padding: 25px;
  overflow-y: auto;
  animation: lumieSlide .25s ease;
}
@keyframes lumieSlide { from { transform: translateX(30px); opacity: .6; } to { transform: translateX(0); opacity: 1; } }
.lumie .drawer-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 18px; }
.lumie .drawer-head h3 { margin: 0; font-size: 17px; }
.lumie .close { border: 0; background: transparent; font-size: 25px; color: var(--ink); }
.lumie .cart-row { display: flex; gap: 13px; padding: 17px 0; border-bottom: 1px solid var(--line); }
.lumie .cart-row img { width: 82px; height: 100px; object-fit: cover; }
.lumie .cart-details { flex: 1; }
.lumie .cart-details h4 { font-size: 12px; margin: 3px 0 7px; }
.lumie .cart-details p { font-size: 10px; color: var(--muted); margin: 4px 0; }
.lumie .quantity { display: flex; align-items: center; gap: 13px; margin-top: 10px; }
.lumie .quantity button { width: 25px; height: 25px; border: 1px solid var(--line); background: white; }
.lumie .cart-total { margin-top: 25px; display: flex; justify-content: space-between; font-weight: 800; font-size: 14px; }
.lumie .checkout { width: 100%; padding: 15px; background: #49363e; color: white; border: 0; margin-top: 20px; }
.lumie .empty-cart { text-align: center; padding: 75px 10px; color: var(--muted); }
.lumie .empty-cart div { font-size: 45px; }

.lumie .modal-product {
  margin: auto;
  background: white;
  width: min(780px, 94%);
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}
.lumie .modal-product > img { width: 100%; height: 490px; object-fit: cover; }
.lumie .modal-info { padding: 35px; }
.lumie .modal-info h2 { font-size: 23px; margin: 12px 0; }
.lumie .modal-info p { color: var(--muted); font-size: 11px; line-height: 2; }
.lumie .option-label { font-size: 11px; font-weight: 800; margin: 25px 0 10px; }
.lumie .option-list { display: flex; flex-wrap: wrap; gap: 8px; }
.lumie .option {
  border: 1px solid #e7dfe1;
  background: white;
  padding: 8px 13px;
  font-size: 11px;
}
.lumie .option.selected { border-color: #96647a; background: #f8edf2; color: #88576d; }
.lumie .modal-info .primary-btn { width: 100%; margin-top: 25px; }

.lumie .toast {
  position: fixed;
  bottom: 25px;
  right: 50%;
  transform: translateX(50%);
  z-index: 100;
  background: #342930;
  color: white;
  padding: 13px 23px;
  font-size: 12px;
  box-shadow: 0 8px 30px #0002;
  animation: lumieToast .25s ease;
}
@keyframes lumieToast { from { opacity: 0; bottom: 10px; } to { opacity: 1; bottom: 25px; } }

@media(max-width:900px) {
  .lumie .nav { gap: 15px; }
  .lumie .search-wrap { width: 150px; }
  .lumie .product-grid { grid-template-columns: repeat(3, 1fr); }
  .lumie .product-image { height: 280px; }
  .lumie .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media(max-width:650px) {
  .lumie .announcement { font-size: 9px; }
  .lumie .header { height: 68px; padding: 0 4%; }
  .lumie .logo { font-size: 28px; }
  .lumie .nav { display: none; }
  .lumie .mobile-menu { display: inline-block; }
  .lumie .header-actions { gap: 10px; }
  .lumie .search-wrap { width: 36px; padding: 0 10px; }
  .lumie .search-wrap input { display: none; }
  .lumie .hero { grid-template-columns: 1fr; width: 100%; margin-top: 0; }
  .lumie .hero-copy { order: 2; padding: 35px 8%; }
  .lumie .hero-image { order: 1; min-height: 350px; }
  .lumie .hero-image:after { background: linear-gradient(0deg, #f2e9e5, transparent 30%); }
  .lumie .hero h1 { font-size: 38px; }
  .lumie .section { width: 92%; margin: 60px auto; }
  .lumie .section-heading h2 { font-size: 20px; }
  .lumie .category-grid { gap: 10px; }
  .lumie .category-card { height: 250px; }
  .lumie .category-content { padding: 15px; }
  .lumie .category-content h3 { font-size: 20px; }
  .lumie .benefits { grid-template-columns: 1fr 1fr; padding: 25px 5%; }
  .lumie .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 10px; }
  .lumie .product-image { height: 245px; }
  .lumie .product-info h3 { font-size: 11px; }
  .lumie .quick-add { opacity: 1; transform: none; padding: 9px; }
  .lumie .installment { flex-direction: column; align-items: flex-start; padding: 35px 7%; }
  .lumie .installment h2 { font-size: 19px; }
  .lumie .payment-brand { min-width: 110px; padding: 12px; }
  .lumie .footer-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .lumie .modal-product { grid-template-columns: 1fr; }
  .lumie .modal-product > img { height: 280px; }
  .lumie .modal-info { padding: 22px; }
  .lumie .filters { gap: 6px; }
  .lumie .filter { padding: 8px 13px; }
}
`;

export default function LumiePage() {
  const [category, setCategory] = useState("همه");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [toast, setToast] = useState("");
  const [newsletter, setNewsletter] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("lumie-cart");
      const savedFavorites = localStorage.getItem("lumie-favorites");
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("lumie-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("lumie-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchCategory =
        category === "همه" || p.category === category;
      const matchSearch =
        p.name.includes(search.trim()) ||
        p.category.includes(search.trim()) ||
        p.type.includes(search.trim());
      return matchCategory && matchSearch;
    });

    if (sort === "cheap") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "expensive") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "discount") {
      list = [...list].sort(
        (a, b) =>
          (b.oldPrice ? b.oldPrice - b.price : 0) -
          (a.oldPrice ? a.oldPrice - a.price : 0)
      );
    }
    return list;
  }, [category, search, sort]);

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const openProduct = (product: Product) => {
    setSelected(product);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
  };

  const addToCart = (
    product: Product,
    size: string,
    color: string
  ) => {
    setCart((old) => {
      const existing = old.find(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
      );
      if (existing) {
        return old.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...old, { product, size, color, quantity: 1 }];
    });
    setSelected(null);
    notify("محصول به سبد خرید اضافه شد");
  };

  const changeQuantity = (index: number, amount: number) => {
    setCart((old) =>
      old
        .map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  };

  const chooseCategory = (value: string) => {
    setCategory(value);
    setSearch("");
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="lumie">
      <style>{css}</style>

      <div className="announcement">
        ارسال رایگان برای خریدهای بالای ۳ میلیون تومان
        <span> | خرید آسان، پرداخت منعطف</span>
      </div>

      <header className="header">
        <button
          className="icon-btn mobile-menu"
          onClick={() => setMobileNav(!mobileNav)}
          aria-label="منو"
        >
          ☰
        </button>

        <div className="logo">
          LUMIÉ
          <small>WOMEN & KIDS</small>
        </div>

        <nav
          className="nav"
          style={mobileNav ? {
            display: "flex",
            position: "absolute",
            top: "68px",
            right: 0,
            left: 0,
            background: "white",
            padding: 20,
            flexDirection: "column",
            alignItems: "stretch",
            boxShadow: "0 10px 20px #0001",
          } : undefined}
        >
          <a href="#home" onClick={() => setMobileNav(false)}>خانه</a>
          <a href="#products" onClick={() => chooseCategory("زنانه")}>پوشاک زنانه</a>
          <a href="#products" onClick={() => chooseCategory("بچگانه")}>پوشاک بچگانه</a>
          <a href="#installment">خرید اقساطی</a>
          <a href="#footer">درباره ما</a>
        </nav>

        <div className="header-actions">
          <div className="search-wrap">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              placeholder="جست‌وجوی محصول..."
            />
          </div>
          <button
            className="icon-btn"
            title="علاقه‌مندی‌ها"
            onClick={() => {
              setCategory("همه");
              setSearch("");
              notify(`تعداد علاقه‌مندی‌ها: ${favorites.length}`);
            }}
          >
            ♡
            {favorites.length > 0 && <span className="count">{favorites.length}</span>}
          </button>
          <button className="icon-btn" onClick={() => setDrawer(true)} title="سبد خرید">
            ♧
            {totalCount > 0 && <span className="count">{totalCount}</span>}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">A LITTLE MORE BEAUTIFUL</span>
          <h1>
            زیبایی در
            <br />
            <em>جزئیات</em> زندگی
          </h1>
          <p>
            از استایل روزمره تا لحظه‌های خاص؛
            انتخاب‌هایی دوست‌داشتنی برای شما و کوچولوهایتان.
          </p>
          <button className="primary-btn" onClick={() => chooseCategory("همه")}>
            کشف کالکشن جدید ←
          </button>
        </div>
        <div
          className="hero-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1300)",
          }}
        >
          <div className="hero-stamp">NEW<br />COLLECTION<br />2026</div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <h2>دنیای LUMIÉ</h2>
            <p>برای هر سلیقه، یک انتخاب زیبا</p>
          </div>
        </div>
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
              alt="کالکشن زنانه"
            />
            <div className="category-content">
              <span>WOMEN COLLECTION</span>
              <h3>استایل زنانه</h3>
              <button onClick={() => chooseCategory("زنانه")}>مشاهده محصولات ←</button>
            </div>
          </div>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1000"
              alt="کالکشن بچگانه"
            />
            <div className="category-content">
              <span>KIDS COLLECTION</span>
              <h3>دنیای کوچولوها</h3>
              <button onClick={() => chooseCategory("بچگانه")}>مشاهده محصولات ←</button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>
          <div className="benefit-icon">♡</div>
          <h4>انتخاب باکیفیت</h4>
          <p>توجه به کیفیت و جزئیات</p>
        </div>
        <div>
          <div className="benefit-icon">♧</div>
          <h4>ارسال مطمئن</h4>
          <p>بسته‌بندی و ارسال سفارش‌ها</p>
        </div>
        <div>
          <div className="benefit-icon">↺</div>
          <h4>پشتیبانی خرید</h4>
          <p>همراه شما در مسیر خرید</p>
        </div>
        <div>
          <div className="benefit-icon">✧</div>
          <h4>خرید اقساطی</h4>
          <p>پرداخت منعطف از سرویس‌های همکار</p>
        </div>
      </section>

      <section className="section" id="products">
        <div className="section-heading">
          <div>
            <h2>انتخاب‌های دوست‌داشتنی</h2>
            <p>محصولات منتخب از کالکشن جدید LUMIÉ</p>
          </div>
          <span className="text-link">{filtered.length} محصول</span>
        </div>

        <div className="filters">
          {["همه", "زنانه", "بچگانه"].map((item) => (
            <button
              key={item}
              className={`filter ${category === item ? "active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item === "همه" ? "همه محصولات" : item}
            </button>
          ))}
          <select
            className="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="مرتب‌سازی محصولات"
          >
            <option value="default">مرتب‌سازی</option>
            <option value="cheap">ارزان‌ترین</option>
            <option value="expensive">گران‌ترین</option>
            <option value="discount">بیشترین تخفیف</option>
          </select>
        </div>

        <div className="product-grid">
          {filtered.length === 0 ? (
            <div className="empty">محصولی با این مشخصات پیدا نشد.</div>
          ) : (
            filtered.map((product) => (
              <article className="product-card" key={product.id}>
                <div
                  className="product-image"
                  onClick={() => openProduct(product)}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                  <button
                    className={`heart ${favorites.includes(product.id) ? "liked" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    aria-label="افزودن به علاقه‌مندی‌ها"
                  >
                    {favorites.includes(product.id) ? "♥" : "♡"}
                  </button>
                  <button
                    className="quick-add"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProduct(product);
                    }}
                  >
                    انتخاب سایز و افزودن به سبد
                  </button>
                </div>
                <div className="product-info">
                  <small>{product.category} / {product.type}</small>
                  <h3>{product.name}</h3>
                  <div className="prices">
                    <span className="price">{money(product.price)} تومان</span>
                    {product.oldPrice && (
                      <span className="old-price">
                        {money(product.oldPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="installment" id="installment">
        <div>
          <span className="eyebrow" style={{ color: "#e5b8ca" }}>SHOP NOW, PAY LATER</span>
          <h2>زیبایی را به تعویق ننداز!</h2>
          <p>
            خرید دلخواهت را انتخاب کن و در صورت فراهم بودن شرایط،
            از روش‌های پرداخت اقساطی استفاده کن.
          </p>
        </div>
        <div className="payment-brands">
          <div className="payment-brand">
            <strong>ترب‌پی</strong>
            <small>پرداخت اقساطی</small>
          </div>
          <div className="payment-brand">
            <strong>اسنپ‌پی</strong>
            <small>الان بخر، بعداً پرداخت کن</small>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <span className="eyebrow">STAY IN TOUCH</span>
        <h2>از دنیای LUMIÉ جا نمون!</h2>
        <p>برای اطلاع از کالکشن‌های جدید و پیشنهادهای ویژه همراه ما باش.</p>
        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!newsletter.trim()) return;
            notify("در نسخه نمایشی، عضویت خبرنامه ثبت آزمایشی شد.");
            setNewsletter("");
          }}
        >
          <input
            type="email"
            required
            value={newsletter}
            onChange={(e) => setNewsletter(e.target.value)}
            placeholder="آدرس ایمیل شما"
          />
          <button type="submit">عضویت</button>
        </form>
      </section>

      <footer className="footer" id="footer">
        <div className="footer-grid">
          <div>
            <div className="logo">LUMIÉ</div>
            <p>
              دنیایی از انتخاب‌های زیبا برای استایل شما و کوچولوهایتان.
              همراه شما برای خریدی دلنشین‌تر.
            </p>
          </div>
          <div>
            <h4>دسترسی سریع</h4>
            <a href="#home">صفحه اصلی</a>
            <a href="#products">محصولات</a>
            <a href="#installment">خرید اقساطی</a>
          </div>
          <div>
            <h4>راهنمای خرید</h4>
            <a href="#products">راهنمای انتخاب سایز</a>
            <a href="#footer">شرایط ارسال</a>
            <a href="#footer">قوانین بازگشت کالا</a>
          </div>
          <div>
            <h4>ارتباط با ما</h4>
            <p>برای دریافت اطلاعات و پشتیبانی سفارش‌ها با ما در ارتباط باشید.</p>
            <a href="mailto:hello@lumie.example">hello@lumie.example</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 LUMIÉ — تمامی حقوق برای این فروشگاه محفوظ است.
        </div>
      </footer>

      {drawer && (
        <div className="overlay" onClick={() => setDrawer(false)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <h3>سبد خرید شما ({totalCount})</h3>
              <button className="close" onClick={() => setDrawer(false)}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div>♡</div>
                <h3>سبد خرید شما خالی است</h3>
                <p>وقتشه یک انتخاب دوست‌داشتنی داشته باشی!</p>
                <button className="primary-btn" onClick={() => setDrawer(false)}>
                  مشاهده محصولات
                </button>
              </div>
            ) : (
              <>
                {cart.map((item, index) => (
                  <div className="cart-row" key={`${item.product.id}-${item.size}-${item.color}`}>
                    <img src={item.product.image} alt={item.product.name} />
                    <div className="cart-details">
                      <h4>{item.product.name}</h4>
                      <p>سایز: {item.size} | رنگ: {item.color}</p>
                      <p>{money(item.product.price)} تومان</p>
                      <div className="quantity">
                        <button onClick={() => changeQuantity(index, -1)}>−</button>
                        <span>{money(item.quantity)}</span>
                        <button onClick={() => changeQuantity(index, 1)}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <span>مبلغ کل</span>
                  <span>{money(totalPrice)} تومان</span>
                </div>
                <p style={{ fontSize: 10, color: "#999", lineHeight: 2 }}>
                  هزینه ارسال در مرحله نهایی محاسبه می‌شود.
                </p>
                <button
                  className="checkout"
                  onClick={() => notify("ثبت سفارش و اتصال درگاه در نسخه نمایشی فعال نیست.")}
                >
                  ادامه ثبت سفارش
                </button>
              </>
            )}
          </aside>
        </div>
      )}

      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div className="modal-product" onClick={(e) => e.stopPropagation()}>
            <button
              className="close"
              style={{ position: "absolute", left: 15, top: 10, zIndex: 2 }}
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img src={selected.image} alt={selected.name} />
            <div className="modal-info">
              <small style={{ color: "#a16e83" }}>{selected.category} / {selected.type}</small>
              <h2>{selected.name}</h2>
              <div className="price">{money(selected.price)} تومان</div>
              <p>
                انتخابی زیبا از کالکشن LUMIÉ؛ مناسب برای استایل روزمره و لحظه‌های خاص.
              </p>

              <div className="option-label">انتخاب سایز</div>
              <div className="option-list">
                {selected.sizes.map((size) => (
                  <button
                    key={size}
                    className={`option ${selectedSize === size ? "selected" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="option-label">انتخاب رنگ</div>
              <div className="option-list">
                {selected.colors.map((color) => (
                  <button
                    key={color}
                    className={`option ${selectedColor === color ? "selected" : ""}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>

              <button
                className="primary-btn"
                onClick={() => addToCart(selected, selectedSize, selectedColor)}
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}
