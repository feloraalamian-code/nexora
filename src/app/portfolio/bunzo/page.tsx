
"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  english: string;
  description: string;
  price: number;
  category: "گوشت" | "مرغ";
  image: string;
  tag?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "کلاسیک برگر",
    english: "CLASSIC BURGER",
    description: "گوشت گریل‌شده، پنیر چدار، کاهو و سس مخصوص بانزو",
    price: 800000,
    category: "گوشت",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=90",
    tag: "محبوب",
  },
  {
    id: 2,
    name: "دابل چیز برگر",
    english: "DOUBLE CHEESE",
    description: "دو لایه گوشت، پنیر چدار دوبل و سس مخصوص",
    price: 950000,
    category: "گوشت",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/DFC_2394_Double_cheeseburger_stacked_with_two_juicy_patties_melted_cheddar_crisp_lettuce_and_tomato_on_a_soft_sesame_bun.jpg?width=900",
    tag: "پرفروش",
  },
  {
    id: 3,
    name: "تریپل برگر",
    english: "TRIPLE BURGER",
    description: "سه لایه گوشت آبدار، پنیر چدار و نان تازه",
    price: 1000000,
    category: "گوشت",
    image: "https://static.wixstatic.com/media/10763f_af4a9a68237c4686b67e78b2eb1d3f8b~mv2.jpg/v1/fill/w_900,h_850,al_c,q_85/10763f_af4a9a68237c4686b67e78b2eb1d3f8b~mv2.jpg",
    tag: "ویژه بانزو",
  },
  {
    id: 4,
    name: "مشروم برگر",
    english: "MUSHROOM BURGER",
    description: "گوشت گریل‌شده، قارچ تفت‌داده و پنیر مخصوص",
    price: 900000,
    category: "گوشت",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=90",
  },
  {
    id: 5,
    name: "چیکن برگر",
    english: "CHICKEN BURGER",
    description: "فیله مرغ سوخاری، کاهو و سس دست‌ساز",
    price: 850000,
    category: "مرغ",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900&q=90",
    tag: "جدید",
  },
  {
    id: 6,
    name: "اسپایسی چیکن",
    english: "SPICY CHICKEN",
    description: "مرغ کریسپی، پنیر، سس تند و خیارشور",
    price: 900000,
    category: "مرغ",
    image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?w=900&q=90",
  },
];

const sauces = [
  { name: "سس مخصوص بانزو", en: "BUNZO SPECIAL", color: "#f4a340" },
  { name: "سس باربیکیو", en: "BBQ SAUCE", color: "#9b4a26" },
  { name: "سس پنیر", en: "CHEESE SAUCE", color: "#f5c84c" },
  { name: "سس اسپایسی", en: "SPICY SAUCE", color: "#d94a2d" },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-IR").format(price) + " تومان";

export default function BunzoPage() {
  const [activeCategory, setActiveCategory] = useState("همه برگرها");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "همه برگرها") return products;
    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const cartItems = products.filter((item) => (cart[item.id] || 0) > 0);

  const cartCount = Object.values(cart).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * cart[item.id],
    0
  );

  function addToCart(product: Product) {
    setCart((previous) => ({
      ...previous,
      [product.id]: (previous[product.id] || 0) + 1,
    }));
    setNotice(`${product.name} به سبد خرید اضافه شد`);
    window.setTimeout(() => setNotice(""), 2200);
  }

  function changeQuantity(id: number, amount: number) {
    setCart((previous) => {
      const next = { ...previous };
      const quantity = (next[id] || 0) + amount;

      if (quantity <= 0) delete next[id];
      else next[id] = quantity;

      return next;
    });
  }

  return (
    <main className="bunzo" dir="rtl">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap");

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Vazirmatn", sans-serif;
        }

        .bunzo {
          --orange: #ff6b22;
          --orange-light: #ff8b42;
          --black: #151515;
          background: #f8f6f2;
          color: var(--black);
          min-height: 100vh;
          overflow: hidden;
          font-family: "Vazirmatn", sans-serif;
        }

        .bunzo button {
          font-family: inherit;
          cursor: pointer;
        }

        .bunzo a {
          color: inherit;
          text-decoration: none;
        }

        .bunzo-header {
          height: 84px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          position: relative;
          z-index: 20;
          border-bottom: 1px solid #eee;
        }

        .bunzo-logo {
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -2px;
          direction: ltr;
          color: var(--black);
        }

        .bunzo-logo span {
          color: var(--orange);
        }

        .bunzo-nav {
          display: flex;
          align-items: center;
          gap: 35px;
          font-size: 13px;
          font-weight: 700;
          color: #555;
        }

        .bunzo-nav a:hover {
          color: var(--orange);
        }

        .bunzo-cart-button {
          background: var(--black);
          color: #fff;
          border: 0;
          border-radius: 40px;
          padding: 12px 20px;
          font-size: 13px;
          font-weight: 800;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: 0.25s;
        }

        .bunzo-cart-button:hover {
          background: var(--orange);
          transform: translateY(-2px);
        }

        .cart-number {
          background: var(--orange);
          color: #fff;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
        }

        .bunzo-hero {
          min-height: 610px;
          background: #171717;
          color: #fff;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 65px 8%;
          isolation: isolate;
        }

        .hero-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: #ff6b22;
          filter: blur(170px);
          opacity: 0.2;
          left: 12%;
          top: 10%;
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 570px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--orange-light);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          direction: ltr;
        }

        .hero-eyebrow::before {
          content: "";
          width: 30px;
          height: 2px;
          background: var(--orange);
        }

        .hero-content h1 {
          font-size: clamp(48px, 6vw, 82px);
          line-height: 1.2;
          margin: 24px 0 18px;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .hero-content h1 span {
          color: var(--orange);
          display: block;
        }

        .hero-description {
          max-width: 430px;
          color: #bcbcbc;
          line-height: 2.2;
          font-size: 14px;
          margin-bottom: 32px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .hero-primary {
          background: var(--orange);
          color: #fff;
          border: 0;
          padding: 16px 30px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 800;
          transition: 0.25s;
        }

        .hero-primary:hover {
          background: #ff8545;
          transform: translateY(-3px);
        }

        .hero-secondary {
          color: #fff;
          border: 1px solid #555;
          padding: 15px 25px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          transition: 0.25s;
        }

        .hero-secondary:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .hero-visual {
          min-height: 450px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-ring {
          width: min(390px, 85%);
          aspect-ratio: 1;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 50%;
          position: absolute;
          box-shadow: 0 0 80px rgba(255, 107, 34, 0.08);
        }

        .hero-ring::before,
        .hero-ring::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 50%;
          inset: 25px;
        }

        .hero-ring::after {
          inset: 55px;
        }

        .hero-burger {
          width: min(410px, 95%);
          height: 340px;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(-7deg);
          animation: burgerFloat 5s ease-in-out infinite;
        }

        .hero-burger img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 30px 35px rgba(0, 0, 0, 0.55));
          border-radius: 25px;
        }

        .hero-sticker {
          position: absolute;
          z-index: 4;
          left: 0;
          bottom: 45px;
          background: var(--orange);
          color: #fff;
          width: 95px;
          height: 95px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotate(-12deg);
          box-shadow: 0 15px 35px #0005;
        }

        .hero-sticker strong {
          font-size: 22px;
          line-height: 1.3;
        }

        .hero-sticker small {
          font-size: 10px;
          font-weight: 800;
        }

        @keyframes burgerFloat {
          0%, 100% {
            transform: translateY(0) rotate(-7deg);
          }
          50% {
            transform: translateY(-16px) rotate(-3deg);
          }
        }

        .hero-bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          border-top: 1px solid #ffffff1c;
          padding: 17px 8%;
          display: flex;
          justify-content: space-between;
          color: #aaa;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .hero-bottom strong {
          color: var(--orange);
          direction: ltr;
        }

        .bunzo-marquee {
          background: var(--orange);
          color: #fff;
          padding: 17px 0;
          overflow: hidden;
          white-space: nowrap;
          direction: ltr;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .bunzo-marquee span {
          margin: 0 32px;
        }

        .bunzo-marquee b {
          color: #222;
          margin: 0 8px;
        }

        .bunzo-menu {
          padding: 100px 8%;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 25px;
          margin-bottom: 38px;
        }

        .section-kicker {
          color: var(--orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          direction: ltr;
        }

        .section-heading h2 {
          font-size: clamp(30px, 4vw, 48px);
          margin: 10px 0 0;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .section-heading p {
          color: #888;
          font-size: 13px;
          line-height: 2;
          max-width: 300px;
          margin: 0;
        }

        .menu-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 35px;
        }

        .filter-button {
          border: 1px solid #e2dfd9;
          background: transparent;
          padding: 11px 22px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 800;
          color: #666;
          transition: 0.2s;
        }

        .filter-button:hover,
        .filter-button.active {
          background: var(--black);
          border-color: var(--black);
          color: #fff;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #eeece7;
          border-radius: 12px;
          overflow: hidden;
          transition: 0.3s;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px #0000000c;
        }

        .product-image {
          height: 235px;
          background: #eeeae4;
          overflow: hidden;
          position: relative;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s;
        }

        .product-card:hover .product-image img {
          transform: scale(1.09) rotate(-2deg);
        }

        .product-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--orange);
          color: #fff;
          padding: 6px 12px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 800;
        }

        .product-info {
          padding: 20px;
        }

        .product-english {
          color: var(--orange);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          direction: ltr;
          text-align: right;
        }

        .product-info h3 {
          font-size: 19px;
          font-weight: 900;
          margin: 8px 0;
        }

        .product-info p {
          font-size: 11px;
          color: #888;
          line-height: 2;
          min-height: 42px;
          margin: 0 0 20px;
        }

        .product-footer {
          border-top: 1px solid #f0eee9;
          padding-top: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .product-price {
          font-size: 13px;
          font-weight: 900;
          white-space: nowrap;
        }

        .add-button {
          background: var(--black);
          color: #fff;
          border: 0;
          border-radius: 6px;
          padding: 11px 16px;
          font-size: 11px;
          font-weight: 800;
          transition: 0.2s;
        }

        .add-button:hover {
          background: var(--orange);
        }

        .sauce-section {
          padding: 85px 8%;
          background: #eeeae3;
        }

        .sauce-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 35px;
        }

        .sauce-card {
          background: #fff;
          border-radius: 10px;
          padding: 25px 18px;
          text-align: center;
          transition: 0.25s;
        }

        .sauce-card:hover {
          transform: translateY(-6px);
        }

        .sauce-orb {
          width: 75px;
          height: 75px;
          margin: 0 auto 18px;
          border-radius: 50%;
          box-shadow: inset -8px -9px 15px #0002, 0 10px 20px #0001;
        }

        .sauce-card h3 {
          font-size: 14px;
          margin: 0 0 5px;
          font-weight: 900;
        }

        .sauce-card small {
          font-size: 9px;
          letter-spacing: 1px;
          color: #999;
          direction: ltr;
          display: block;
        }

        .promo-section {
          background: var(--orange);
          color: #fff;
          padding: 65px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          position: relative;
          overflow: hidden;
        }

        .promo-section::after {
          content: "B";
          position: absolute;
          font-size: 270px;
          font-weight: 900;
          opacity: 0.1;
          left: 8%;
          top: -90px;
          direction: ltr;
        }

        .promo-section h2 {
          font-size: clamp(27px, 4vw, 43px);
          font-weight: 900;
          margin: 0 0 10px;
        }

        .promo-section p {
          margin: 0;
          font-size: 13px;
          color: #fff;
          opacity: 0.9;
        }

        .promo-button {
          flex-shrink: 0;
          background: #171717;
          color: #fff;
          border: 0;
          padding: 15px 27px;
          border-radius: 6px;
          font-weight: 800;
          font-size: 12px;
          position: relative;
          z-index: 2;
        }

        .features-section {
          padding: 75px 8%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          background: #fff;
        }

        .feature {
          text-align: center;
          padding: 15px;
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          background: #fff0e8;
          color: var(--orange);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 15px;
        }

        .feature h3 {
          font-size: 15px;
          font-weight: 900;
          margin: 0 0 8px;
        }

        .feature p {
          font-size: 11px;
          color: #888;
          line-height: 2;
          margin: 0;
        }

        .bunzo-footer {
          background: #171717;
          color: #fff;
          padding: 55px 8% 25px;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
          padding-bottom: 35px;
        }

        .footer-brand {
          max-width: 330px;
        }

        .footer-brand .bunzo-logo {
          color: #fff;
          display: inline-block;
          margin-bottom: 12px;
        }

        .footer-brand p {
          color: #999;
          font-size: 12px;
          line-height: 2.2;
        }

        .footer-links h4 {
          font-size: 13px;
          margin: 5px 0 18px;
        }

        .footer-links a {
          display: block;
          color: #999;
          font-size: 11px;
          margin: 12px 0;
        }

        .footer-links a:hover {
          color: var(--orange);
        }

        .footer-bottom {
          border-top: 1px solid #ffffff1a;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          color: #777;
          font-size: 10px;
        }

        .cart-overlay {
          position: fixed;
          inset: 0;
          background: #0009;
          z-index: 100;
          display: flex;
          justify-content: flex-start;
        }

        .cart-panel {
          background: #fff;
          width: min(430px, 100%);
          height: 100%;
          padding: 25px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 40px #0002;
          animation: cartIn 0.25s ease;
        }

        @keyframes cartIn {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 18px;
        }

        .cart-header h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 900;
        }

        .close-cart {
          border: 0;
          background: #f3f3f3;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          font-size: 20px;
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 15px 0;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #eee;
        }

        .cart-item img {
          width: 72px;
          height: 72px;
          border-radius: 8px;
          object-fit: cover;
        }

        .cart-item-info {
          flex: 1;
        }

        .cart-item-info h4 {
          margin: 0 0 6px;
          font-size: 13px;
        }

        .cart-item-info p {
          margin: 0;
          color: var(--orange);
          font-size: 11px;
          font-weight: 800;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .quantity-controls button {
          width: 27px;
          height: 27px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 5px;
          font-weight: 900;
        }

        .quantity-controls span {
          font-size: 12px;
          font-weight: 900;
        }

        .cart-empty {
          text-align: center;
          color: #999;
          margin: auto;
          font-size: 13px;
        }

        .cart-empty strong {
          display: block;
          font-size: 42px;
          margin-bottom: 10px;
        }

        .cart-total {
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .cart-total-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .checkout-button {
          width: 100%;
          background: var(--orange);
          color: #fff;
          border: 0;
          border-radius: 7px;
          padding: 16px;
          font-size: 13px;
          font-weight: 900;
        }

        .notice {
          position: fixed;
          bottom: 25px;
          right: 50%;
          transform: translateX(50%);
          background: #222;
          color: #fff;
          padding: 13px 24px;
          border-radius: 40px;
          z-index: 200;
          font-size: 12px;
          box-shadow: 0 8px 30px #0003;
        }

        @media (max-width: 900px) {
          .bunzo-header {
            padding: 0 5%;
          }

          .bunzo-nav {
            gap: 16px;
          }

          .bunzo-hero {
            padding: 60px 6%;
            grid-template-columns: 1fr 1fr;
          }

          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sauce-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .bunzo-header {
            height: 70px;
          }

          .bunzo-logo {
            font-size: 28px;
          }

          .bunzo-nav {
            display: none;
          }

          .bunzo-cart-button {
            padding: 9px 13px;
            font-size: 11px;
          }

          .bunzo-hero {
            grid-template-columns: 1fr;
            padding: 55px 7% 75px;
          }

          .hero-content {
            text-align: center;
          }

          .hero-eyebrow {
            justify-content: center;
          }

          .hero-content h1 {
            font-size: 52px;
          }

          .hero-description {
            margin-right: auto;
            margin-left: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-visual {
            min-height: 320px;
          }

          .hero-burger {
            height: 280px;
          }

          .hero-sticker {
            left: 5%;
            bottom: 15px;
            width: 75px;
            height: 75px;
          }

          .hero-bottom {
            padding: 13px 6%;
            font-size: 9px;
          }

          .bunzo-menu {
            padding: 65px 6%;
          }

          .section-heading {
            display: block;
          }

          .section-heading p {
            margin-top: 15px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .product-image {
            height: 250px;
          }

          .sauce-section {
            padding: 65px 6%;
          }

          .sauce-grid {
            gap: 12px;
          }

          .sauce-card {
            padding: 20px 10px;
          }

          .promo-section {
            padding: 50px 7%;
            display: block;
          }

          .promo-button {
            margin-top: 25px;
            display: inline-block;
          }

          .features-section {
            grid-template-columns: 1fr;
            padding: 50px 7%;
            gap: 30px;
          }

          .footer-top {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            display: block;
            line-height: 2;
          }
        }
      `}</style>

      <header className="bunzo-header">
        <a href="#" className="bunzo-logo">
          BUN<span>Z</span>O<span>.</span>
        </a>

        <nav className="bunzo-nav">
          <a href="#">خانه</a>
          <a href="#menu">منوی برگرها</a>
          <a href="#sauces">سس‌های مخصوص</a>
          <a href="#about">درباره بانزو</a>
        </nav>

        <button
          className="bunzo-cart-button"
          onClick={() => setCartOpen(true)}
        >
          <span>سبد خرید</span>
          <span className="cart-number">{cartCount}</span>
        </button>
      </header>

      <section className="bunzo-hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="hero-eyebrow">NOT JUST A BURGER</div>

          <h1>
            گاز اول،
            <span>عشق همیشگی.</span>
          </h1>

          <p className="hero-description">
            اینجا خبری از برگرهای معمولی نیست. گوشت تازه، نان نرم،
            پنیر کش‌دار و ترکیبی از طعم‌هایی که فراموش نمی‌کنی.
            به دنیای بانزو خوش اومدی!
          </p>

          <div className="hero-actions">
            <a href="#menu" className="hero-primary">
              دیدن منوی برگرها
            </a>
            <a href="#about" className="hero-secondary">
              داستان بانزو
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-ring" />
          <div className="hero-burger">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=90"
              alt="برگر ویژه بانزو"
            />
          </div>
          <div className="hero-sticker">
            <strong>100%</strong>
            <small>FRESH</small>
          </div>
        </div>

        <div className="hero-bottom">
          <span>FRESH INGREDIENTS · REAL TASTE</span>
          <strong>EST. BUNZO</strong>
        </div>
      </section>

      <div className="bunzo-marquee">
        <span>BIG BURGERS</span><b>✦</b>
        <span>BOLD FLAVORS</span><b>✦</b>
        <span>FRESH EVERY DAY</span><b>✦</b>
        <span>WELCOME TO BUNZO</span><b>✦</b>
        <span>BIG BURGERS</span>
      </div>

      <section className="bunzo-menu" id="menu">
        <div className="section-heading">
          <div>
            <div className="section-kicker">THE BUNZO MENU</div>
            <h2>منوی خوشمزه ما</h2>
          </div>
          <p>
            هر برگر با مواد تازه و ترکیب اختصاصی بانزو آماده می‌شه.
            انتخاب با توئه!
          </p>
        </div>

        <div className="menu-filters">
          {["همه برگرها", "گوشت", "مرغ"].map((category) => (
            <button
              key={category}
              className={`filter-button ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.tag && (
                  <span className="product-tag">{product.tag}</span>
                )}
              </div>

              <div className="product-info">
                <div className="product-english">{product.english}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="product-footer">
                  <span className="product-price">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    className="add-button"
                    onClick={() => addToCart(product)}
                  >
                    + افزودن به سبد
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sauce-section" id="sauces">
        <div className="section-heading">
          <div>
            <div className="section-kicker">THE SECRET TASTE</div>
            <h2>جادوی سس‌های بانزو</h2>
          </div>
          <p>
            بعضی طعم‌ها فقط با یک سس خاص کامل می‌شن.
            ترکیب‌های مخصوص ما رو امتحان کن.
          </p>
        </div>

        <div className="sauce-grid">
          {sauces.map((sauce) => (
            <div className="sauce-card" key={sauce.en}>
              <div
                className="sauce-orb"
                style={{ background: sauce.color }}
              />
              <h3>{sauce.name}</h3>
              <small>{sauce.en}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div>
          <h2>گرسنه‌ای؟ وقت بانزوئه!</h2>
          <p>برگر مورد علاقه‌ات رو انتخاب کن و از طعم واقعی لذت ببر.</p>
        </div>
        <a href="#menu" className="promo-button">
          انتخاب برگر من
        </a>
      </section>

      <section className="features-section" id="about">
        <div className="feature">
          <div className="feature-icon">✦</div>
          <h3>مواد اولیه تازه</h3>
          <p>انتخاب روزانه مواد اولیه باکیفیت برای طعمی متفاوت.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">♨</div>
          <h3>پخت تازه و حرفه‌ای</h3>
          <p>هر برگر با دقت و درست در زمان سفارش آماده می‌شود.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">♥</div>
          <h3>طعم اختصاصی بانزو</h3>
          <p>ترکیب‌های خاص و سس‌هایی که فقط در بانزو پیدا می‌کنی.</p>
        </div>
      </section>

      <footer className="bunzo-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="bunzo-logo">
              BUN<span>Z</span>O<span>.</span>
            </a>
            <p>
              بانزو، جایی برای عاشقان برگرهای واقعی.
              طعمی متفاوت، تجربه‌ای فراموش‌نشدنی.
            </p>
          </div>

          <div className="footer-links">
            <h4>دسترسی سریع</h4>
            <a href="#">صفحه اصلی</a>
            <a href="#menu">منوی برگرها</a>
            <a href="#sauces">سس‌های مخصوص</a>
          </div>

          <div className="footer-links">
            <h4>ارتباط با بانزو</h4>
            <a href="#about">درباره ما</a>
            <a href="#menu">سفارش برگر</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BUNZO. All rights reserved.</span>
          <span>MADE FOR BURGER LOVERS.</span>
        </div>
      </footer>

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setCartOpen(false);
            }
          }}
        >
          <aside className="cart-panel">
            <div className="cart-header">
              <h2>سبد خرید شما</h2>
              <button
                className="close-cart"
                onClick={() => setCartOpen(false)}
                aria-label="بستن سبد خرید"
              >
                ×
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <strong>🍔</strong>
                سبد خریدت هنوز خالیه!
                <p>یک برگر خوشمزه انتخاب کن.</p>
              </div>
            ) : (
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>{formatPrice(item.price)}</p>
                    </div>

                    <div className="quantity-controls">
                      <button
                        onClick={() => changeQuantity(item.id, -1)}
                        aria-label="کم کردن تعداد"
                      >
                        −
                      </button>
                      <span>{cart[item.id]}</span>
                      <button
                        onClick={() => changeQuantity(item.id, 1)}
                        aria-label="زیاد کردن تعداد"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-total">
              <div className="cart-total-row">
                <span>مبلغ کل</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>

              <button
                className="checkout-button"
                onClick={() => {
                  if (cartItems.length === 0) return;
                  setNotice("این نسخه نمایشی است؛ پرداخت آنلاین فعال نیست.");
                  window.setTimeout(() => setNotice(""), 3000);
                }}
              >
                ادامه سفارش
              </button>
            </div>
          </aside>
        </div>
      )}

      {notice && <div className="notice">{notice}</div>}
    </main>
  );
}
