"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:85px}
body{font-family:'Vazirmatn',Tahoma,sans-serif}
button{font-family:inherit}
.home{direction:rtl;overflow:hidden;color:#211735;background:#fff;font-family:'Vazirmatn',Tahoma,sans-serif}
.home a{text-decoration:none;color:inherit}
.container{width:min(1180px,calc(100% - 48px));margin:auto}

/* HEADER */
.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.93);backdrop-filter:blur(20px);border-bottom:1px solid #eee9f7}
.nav{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.logo{display:flex;align-items:center;gap:11px;font-size:25px;font-weight:900;letter-spacing:-1px;color:#42217c}
.logo-mark{width:39px;height:39px;display:grid;place-items:center;color:white;border-radius:13px;background:linear-gradient(145deg,#b49af6,#7045c7);box-shadow:0 8px 20px #8057d43b}
.links{display:flex;align-items:center;gap:27px}
.links a{color:#655a79;font-size:13px;font-weight:700;transition:.25s}
.links a:hover{color:#8055d0}
.nav-cta{padding:12px 19px;border-radius:12px;color:white!important;background:linear-gradient(110deg,#9673e6,#7047c9);font-size:12px;font-weight:800;box-shadow:0 8px 20px #8057d42b}
.mobile-toggle{display:none;width:42px;height:42px;border:1px solid #e9e0f5;border-radius:12px;background:white;color:#7047b9;font-size:23px;cursor:pointer}
.mobile-menu{display:none}

/* HERO */
.hero{position:relative;isolation:isolate;min-height:690px;background:radial-gradient(ellipse at 20% 40%,#e9ddff 0%,transparent 42%),radial-gradient(ellipse at 85% 85%,#f3edff 0%,transparent 36%),linear-gradient(115deg,#fff,#fbf9ff 55%,#f7f2ff)}
.hero:before{content:"";position:absolute;inset:0;z-index:-1;opacity:.18;background-image:radial-gradient(#a58bdb 1px,transparent 1px);background-size:28px 28px;mask-image:linear-gradient(to bottom,black,transparent 85%)}
.hero-inner{min-height:690px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:20px;padding:55px 0 65px}
.hero-content{position:relative;z-index:3}
.hero-tag{display:inline-flex;align-items:center;gap:9px;padding:9px 15px;border:1px solid #e5dafa;border-radius:30px;color:#7651bf;background:#ffffffc9;font-size:11px;font-weight:800;margin-bottom:24px}
.hero-tag span{width:8px;height:8px;border-radius:50%;background:#9670e3;box-shadow:0 0 0 5px #9670e31c}
.hero h1{max-width:600px;font-size:clamp(39px,5vw,63px);line-height:1.48;font-weight:900;letter-spacing:-2px}
.gradient{color:#8055d1;background:linear-gradient(100deg,#a98bf1,#7546ce,#5631a7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-description{max-width:510px;margin-top:22px;color:#746b85;font-size:14px;line-height:2.5}
.hero-actions{display:flex;flex-wrap:wrap;gap:13px;margin-top:31px}
.btn{display:inline-flex;justify-content:center;align-items:center;gap:9px;padding:15px 23px;border-radius:13px;font-size:12px;font-weight:800;transition:.3s;cursor:pointer}
.btn-primary{color:white!important;background:linear-gradient(120deg,#9974e8,#7046c8);box-shadow:0 12px 28px #8057d43b}
.btn-primary:hover{transform:translateY(-4px);box-shadow:0 17px 35px #8057d44d}
.btn-light{color:#6c4caf!important;background:white;border:1px solid #e6ddf5}
.btn-light:hover{border-color:#a98bea;transform:translateY(-3px)}
.hero-footnote{display:flex;align-items:center;gap:10px;margin-top:30px;color:#93899f;font-size:11px}
.hero-footnote span{width:25px;height:1px;background:#bda9e5}

/* 3D SHOWCASE */
.hero-visual{height:550px;min-width:0;position:relative;perspective:1400px}
.three-mount{position:absolute;inset:0;z-index:2;cursor:grab;touch-action:pan-y}
.three-mount:active{cursor:grabbing}
.three-mount canvas{display:block;width:100%;height:100%;outline:none}
.visual-glow{position:absolute;width:470px;height:470px;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,#c5a7ff75 0%,#d9c8fa38 38%,transparent 72%);filter:blur(28px)}
.visual-label{position:absolute;z-index:4;padding:13px 17px;border:1px solid #ffffffd9;border-radius:15px;background:#ffffffd9;backdrop-filter:blur(15px);box-shadow:0 15px 40px #54377d16;color:#65458f;font-size:10px;font-weight:800;pointer-events:none}
.visual-label strong{display:block;color:#49306f;font-size:14px;margin-bottom:4px}
.visual-label.one{top:35px;right:0}
.visual-label.two{bottom:45px;left:0}
.visual-label.three{top:48%;left:0}
.visual-caption{position:absolute;z-index:4;bottom:3px;right:50%;transform:translateX(50%);white-space:nowrap;color:#988aa9;font-size:10px;pointer-events:none}

/* SECTIONS */
.section{padding:85px 0}
.section-heading{max-width:700px;margin:0 auto 43px;text-align:center}
.eyebrow{display:inline-block;margin-bottom:13px;color:#8a66d0;font-size:10px;font-weight:900;letter-spacing:1.4px}
.section-heading h2{color:#2a1d40;font-size:clamp(27px,3.5vw,39px);font-weight:900;line-height:1.6}
.section-heading p{margin-top:12px;color:#81778f;font-size:13px;line-height:2.3}

/* PROJECTS */
.projects-section{background:radial-gradient(ellipse at 50% 0%,#f0e9ff,transparent 65%),#faf9fd}
.project-subheading{display:flex;align-items:center;justify-content:space-between;gap:15px;margin:0 0 22px}
.project-subheading h3{color:#34234e;font-size:19px;font-weight:900}
.project-subheading span{color:#9a87b7;font-size:10px;font-weight:800;letter-spacing:1px}
.project-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;perspective:1400px;align-items:stretch}
.scroll-3d{height:100%;opacity:0;transform:perspective(1200px) rotateX(10deg) translateY(35px) scale(.97);transition:opacity .7s ease,transform .8s cubic-bezier(.2,.75,.25,1);will-change:transform,opacity}
.scroll-3d.is-visible{opacity:1;transform:perspective(1200px) rotateX(0) translateY(0) scale(1)}
.project-card,.app-card{display:flex;flex-direction:column;height:100%;min-width:0;overflow:hidden;border:1px solid #eee8f7;border-radius:17px;background:white;transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease;transform-style:preserve-3d}
.project-card:hover,.app-card:hover{transform:translateY(-6px);border-color:#d3c0f2;box-shadow:0 18px 35px #55348b19}
.project-art{height:175px;min-height:175px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;isolation:isolate;padding:12px}
.project-art:before{content:"";position:absolute;width:220px;height:220px;border-radius:50%;background:#ffffff35;filter:blur(35px);z-index:-1}
.project-art.nova{background:linear-gradient(135deg,#171625,#46316e,#9a75d1)}
.project-art.travel{background:linear-gradient(135deg,#123c4c,#287e91,#a7d9d2)}
.project-art.dentiva{background:linear-gradient(135deg,#173e58,#4b8ca7,#b8dce9)}
.project-art.mehr{background:linear-gradient(135deg,#38245d,#8660b5,#d8b8ec)}
.project-art.forma{background:linear-gradient(135deg,#40352c,#907b65,#d9c7ae)}
.project-art.bunzo{background:linear-gradient(135deg,#171717,#69351c,#f18b35)}
.project-art.beautiva{background:linear-gradient(135deg,#592d4c,#ba7795,#f2d4df)}
.project-art.khaneh{background:linear-gradient(135deg,#24483f,#75998a,#d0e0d4)}
.art-window{position:relative;z-index:2;width:96%;height:145px;padding:7px;border-radius:11px;background:#fff;box-shadow:0 18px 38px #15102065;transform:perspective(1000px) rotateY(-7deg) rotateX(2deg);transition:transform .4s ease}
.project-card:hover .art-window{transform:perspective(1000px) rotateY(-2deg) rotateX(1deg) translateY(-3px)}
.art-browser{height:14px;display:flex;align-items:center;gap:4px;border-bottom:1px solid #f0edf5;padding:0 4px 5px}
.art-browser i{width:5px;height:5px;border-radius:50%;background:#c4b5d9}
.art-layout{height:121px;padding:6px 5px;display:grid;grid-template-columns:.8fr 1.2fr;gap:7px}
.art-copy{padding-top:5px;display:flex;flex-direction:column;align-items:flex-start;min-width:0}
.art-copy b{display:block;color:#38294f;font-size:9px;line-height:1.7}
.art-copy span{display:block;width:85%;height:4px;margin-top:6px;border-radius:5px;background:#e9e2f1}
.art-copy .art-mini-button{width:auto;height:auto;padding:4px 6px;background:#7954bf;color:#fff;font-size:7px;border-radius:5px;margin-top:7px}
.art-picture{position:relative;overflow:hidden;border-radius:8px;background:#e8e0f4;min-width:0}
.art-picture img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}
.project-card:hover .art-picture img{transform:scale(1.07)}
.art-picture:after{content:"";position:absolute;inset:45% 0 0;background:linear-gradient(transparent,#17102055);pointer-events:none}
.art-caption{position:absolute;z-index:2;bottom:7px;right:7px;color:white;font-size:7px;font-weight:900;text-shadow:0 2px 8px #0008}
.nova .art-picture{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:4px;background:#fff;padding:4px}
.nova .nova-tile{position:relative;overflow:hidden;border-radius:5px;background:#eee}
.nova .nova-tile img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.project-card:hover .nova-tile img{transform:scale(1.08)}
.nova .art-caption{bottom:5px;right:5px;background:#39245fdd;padding:3px 5px;border-radius:4px}
.travel .art-caption{background:#124d5ddd;padding:4px 6px;border-radius:4px}
.dentiva .art-caption{background:#245b70dd;padding:4px 6px;border-radius:4px}
.mehr .art-caption{background:#543577dd;padding:4px 6px;border-radius:4px}
.forma .art-caption{background:#493a2ddd;padding:4px 6px;border-radius:4px}
.bunzo .art-caption{background:#9a461bdd;padding:4px 6px;border-radius:4px}
.beautiva .art-caption{background:#873e62dd;padding:4px 6px;border-radius:4px}
.khaneh .art-caption{background:#315d4ddd;padding:4px 6px;border-radius:4px}
.project-content{padding:13px 14px 14px;flex:1;display:flex;flex-direction:column}
.project-meta{display:flex;justify-content:space-between;align-items:center;gap:5px;color:#9878ce;font-size:8px;font-weight:900;letter-spacing:.3px}
.project-content h3{margin-top:8px;color:#34234e;font-size:14px;font-weight:900;line-height:1.7}
.project-content p{display:none}
.concept-note{display:inline-flex;margin-top:8px;padding:4px 7px;border-radius:20px;background:#f3edfc;color:#8055c5;font-size:8px;font-weight:800;align-self:flex-start}
.project-link{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:10px;color:#7952c8;font-size:10px;font-weight:800}
.all-projects{display:flex;justify-content:center;margin-top:27px}
.apps-divider{height:1px;margin:58px 0 45px;background:linear-gradient(90deg,transparent,#e4d9f2,transparent)}

/* APPLICATIONS */
.apps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;perspective:1400px}
.app-visual{height:245px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;isolation:isolate}
.app-visual.madaryar{background:linear-gradient(145deg,#f5e3ee,#d9c4f2)}
.app-visual.travel-app{background:linear-gradient(145deg,#d8f0ef,#b6dce7)}
.app-visual.finance{background:linear-gradient(145deg,#e9e0fa,#c7b7eb)}
.app-orb{position:absolute;width:210px;height:210px;border-radius:50%;background:#ffffff80;filter:blur(25px)}
.app-phone{position:relative;z-index:2;width:128px;height:215px;padding:6px;border:4px solid #302440;border-radius:25px;background:#302440;box-shadow:0 22px 45px #30244040;transform:rotate(-5deg) translateZ(25px);transition:.5s}
.app-card:hover .app-phone{transform:rotate(0) translateY(-8px) scale(1.04)}
.app-screen{height:100%;overflow:hidden;padding:10px 8px;border-radius:15px;background:#fff}
.app-screen-title{width:70%;height:8px;margin:7px auto 10px;border-radius:8px;background:#a98ae0}
.app-screen-photo{height:64px;margin:8px 0;border-radius:8px;overflow:hidden;background:#eee}
.app-screen-photo img{width:100%;height:100%;object-fit:cover;display:block}
.app-screen-block{height:27px;margin-bottom:7px;border-radius:7px;background:linear-gradient(135deg,#e8dcf7,#c0a7e7)}
.app-screen-line{height:4px;margin:7px 0;border-radius:5px;background:#e9e1f2}
.app-screen-line.short{width:65%}
.madaryar .app-screen-title{background:#d88db4}
.madaryar .app-screen-block{background:linear-gradient(135deg,#f5d8e7,#d99fc0)}
.travel-app .app-screen-title{background:#398c9b}
.travel-app .app-screen-block{background:linear-gradient(135deg,#c8e9e6,#71b6bd)}
.finance .app-screen-title{background:#7654c0}
.finance .app-screen-block{background:linear-gradient(135deg,#e0d5fa,#9276d0)}
.app-card-content{padding:20px}
.app-card-content>span:first-child{color:#9876d1;font-size:9px;font-weight:900}
.app-card-content h3{margin-top:8px;color:#34234e;font-size:17px;font-weight:900}
.app-card-content p{margin-top:8px;color:#81778f;font-size:11px;line-height:2.2}
.app-card-bottom{display:flex;justify-content:space-between;align-items:center;margin-top:15px;padding-top:12px;border-top:1px solid #f0edf5;color:#7952c8;font-size:10px;font-weight:800}

/* WHY NEXORA */
.why-section{position:relative;background:linear-gradient(135deg,#f9f6ff,#fff 55%,#f6f0ff)}
.why-grid{display:grid;grid-template-columns:1fr .85fr;gap:55px;align-items:center}
.why-copy h2{font-size:clamp(29px,4vw,43px);line-height:1.65;color:#2c2042;font-weight:900}
.why-copy h2 span{color:#8055d1}
.why-copy>p{margin-top:15px;color:#7d728d;font-size:13px;line-height:2.5}
.why-items{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:25px}
.why-item{padding:17px;border:1px solid #ebe3f6;border-radius:15px;background:#ffffffc9}
.why-item b{display:block;color:#49316d;font-size:12px;margin-bottom:6px}
.why-item p{color:#8a8097;font-size:10px;line-height:2}
.why-visual{position:relative;min-height:330px;display:grid;place-items:center;perspective:800px}
.why-orb{position:absolute;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,#cdb8f6,#e9ddfc 55%,transparent 72%);filter:blur(3px)}
.why-cube{position:relative;width:170px;height:170px;border-radius:38px;transform:rotate(-12deg) rotateY(-15deg);background:linear-gradient(145deg,#c9b4f4,#744bc3);box-shadow:25px 35px 60px #5a3b922b;display:grid;place-items:center;color:white;font-size:58px;font-weight:900;transition:.5s}
.why-visual:hover .why-cube{transform:rotate(0) rotateY(15deg) translateY(-8px)}
.why-chip{position:absolute;padding:13px 17px;border:1px solid white;border-radius:14px;background:#ffffffdf;box-shadow:0 15px 35px #54377d20;color:#694a9b;font-size:10px;font-weight:800}
.why-chip.one{top:35px;right:0}
.why-chip.two{bottom:35px;left:0}

/* CTA & FOOTER */
.cta-section{padding:65px 0 85px;background:white}
.cta{position:relative;overflow:hidden;padding:70px 30px;text-align:center;color:white;border-radius:28px;background:radial-gradient(circle at 15% 15%,#b89dfb55,transparent 35%),radial-gradient(circle at 85% 85%,#c7a4ff38,transparent 35%),linear-gradient(120deg,#39205f,#6840a8,#8054c9);box-shadow:0 25px 55px #58368c2c}
.cta h2{position:relative;font-size:clamp(26px,4vw,38px);font-weight:900}
.cta p{position:relative;max-width:650px;margin:14px auto 26px;color:#eee7fb;font-size:13px;line-height:2.3}
.cta .btn{background:white;color:#6844a7}
.footer{padding:42px 0 24px;border-top:1px solid #eee9f5;background:#fcfbfe}
.footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:40px;padding-bottom:32px}
.footer-logo{display:inline-flex;align-items:center;gap:9px;color:#4d327b;font-size:22px;font-weight:900}
.footer-about{max-width:320px;margin-top:13px;color:#8a8097;font-size:11px;line-height:2.4}
.footer-col h4{margin-bottom:15px;color:#483363;font-size:13px}
.footer-col a,.footer-col p{display:block;margin:10px 0;color:#80758f;font-size:11px;line-height:1.9}
.footer-col a:hover{color:#8055d1}
.footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-top:20px;border-top:1px solid #eee9f5}
.footer-copy{color:#968da2;font-size:10px}
.footer-links{display:flex;gap:18px;color:#756a86;font-size:11px}

/* RESPONSIVE */
@media(max-width:960px){
 .hero-inner{grid-template-columns:1fr;text-align:center;padding-top:45px;gap:0}
 .hero-content{order:1}
 .hero-visual{order:2;width:min(100%,620px);margin:0 auto;height:470px}
 .hero-description{margin-left:auto;margin-right:auto}
 .hero-actions,.hero-footnote{justify-content:center}
 .why-grid{gap:25px}
 .project-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
}
@media(max-width:700px){
 .container{width:calc(100% - 32px)}
 .nav{min-height:70px}
 .logo{font-size:21px}
 .links,.nav>.nav-cta{display:none}
 .mobile-toggle{display:grid;place-items:center}
 .mobile-menu{display:flex;flex-direction:column;gap:0;padding:5px 16px 16px;background:#fff;border-top:1px solid #f0eaf7}
 .mobile-menu a{padding:13px 8px;border-bottom:1px solid #f3eff8;color:#655a79;font-size:13px;font-weight:700}
 .mobile-menu .mobile-cta{margin-top:10px;text-align:center;border:0;border-radius:11px;background:#8055d1;color:white}
 .hero{min-height:0}
 .hero-inner{min-height:0;padding:48px 0 20px}
 .hero h1{font-size:37px;letter-spacing:-1px}
 .hero-description{font-size:12px}
 .hero-visual{height:390px;margin-top:5px}
 .visual-label{padding:9px 11px;font-size:8px}
 .visual-label strong{font-size:11px}
 .visual-label.one{top:18px;right:0}
 .visual-label.two{bottom:30px;left:0}
 .visual-label.three{top:48%;left:0}
 .visual-caption{font-size:8px;bottom:2px}
 .section{padding:65px 0}
 .section-heading{margin-bottom:30px}
 .section-heading h2{font-size:26px}
 .section-heading p{font-size:11px}
 .project-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}
 .project-art{height:140px;min-height:140px;padding:7px}
 .art-window{height:115px;width:98%;padding:5px}
 .art-browser{height:12px}
 .art-layout{height:94px;gap:5px;padding:5px 4px}
 .art-copy b{font-size:7px}
 .art-copy span{height:3px;margin-top:5px}
 .art-copy .art-mini-button{font-size:6px;padding:3px 5px;margin-top:5px}
 .art-caption{font-size:6px}
 .project-content{padding:10px}
 .project-content h3{font-size:11px}
 .project-meta{font-size:7px}
 .project-link{font-size:9px;padding-top:8px}
 .concept-note{font-size:7px}
 .project-subheading h3{font-size:16px}
 .apps-divider{margin:42px 0 32px}
 .apps-grid{grid-template-columns:1fr}
 .app-visual{height:220px}
 .why-grid{grid-template-columns:1fr}
 .why-visual{min-height:270px;order:-1}
 .why-cube{width:145px;height:145px;font-size:50px}
 .why-orb{width:230px;height:230px}
 .why-chip.one{right:5px;top:20px}
 .why-chip.two{left:5px;bottom:20px}
 .why-items{gap:9px}
 .why-item{padding:13px}
 .cta{padding:50px 18px;border-radius:22px}
 .footer-grid{grid-template-columns:1fr 1fr;gap:22px}
 .footer-grid>div:first-child{grid-column:1/-1}
 .footer-bottom{flex-direction:column;text-align:center}
 .footer-links{flex-wrap:wrap;justify-content:center}
}
@media(max-width:390px){
 .hero h1{font-size:32px}
 .hero-visual{height:340px}
 .hero-actions .btn{width:100%}
 .project-grid{gap:8px}
 .project-art{height:120px;min-height:120px}
 .art-window{height:100px}
 .art-layout{height:79px}
 .project-content{padding:8px}
 .project-content h3{font-size:10px}
 .project-meta{font-size:6px}
 .why-items{grid-template-columns:1fr}
 .footer-grid{grid-template-columns:1fr}
 .footer-grid>div:first-child{grid-column:auto}
}
@media(prefers-reduced-motion:reduce){
 *,*:before,*:after{scroll-behavior:auto!important;animation:none!important;transition:none!important}
 .scroll-3d{opacity:1;transform:none}
}
`;

const websites = [
  { title: "NOVA MARKET", name: "فروشگاه نوا", desc: "فروشگاه اینترنتی جامع", href: "/portfolio/nova-market", style: "nova", label: "E-COMMERCE", image: "" },
  { title: "TRAVELORA", name: "تراولورا", desc: "گردشگری و رزرو سفر", href: "/portfolio/travelora", style: "travel", label: "TRAVEL", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85" },
  { title: "DENTIVA", name: "دنتیوا", desc: "کلینیک دندان‌پزشکی", href: "/portfolio/dentiva", style: "dentiva", label: "HEALTHCARE", image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=85" },
  { title: "MEHR LANGUAGE", name: "مؤسسه زبان مهر", desc: "آموزش زبان", href: "/portfolio/mehr-language", style: "mehr", label: "EDUCATION", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=85" },
  { title: "FORMA INTERIOR", name: "فرما اینتریور", desc: "معماری و دکوراسیون داخلی", href: "/portfolio/forma-interior", style: "forma", label: "INTERIOR", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85" },
  { title: "BUNZO", name: "بانزو", desc: "فست‌فود و سفارش آنلاین برگر", href: "/portfolio/bunzo", style: "bunzo", label: "BURGER", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85" },
  { title: "BEAUTIVA", name: "بیوتیوا", desc: "فروشگاه آرایشی و بهداشتی", href: "/portfolio/beautiva", style: "beautiva", label: "BEAUTY", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=85" },
  { title: "KHANEH NAMA", name: "خانه‌نما", desc: "خرید و اجاره املاک", href: "/portfolio/khaneh-nama", style: "khaneh", label: "REAL ESTATE", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85" },
];

const apps = [
  { title: "مادریار", label: "MADARYAR APP", desc: "دستیار دیجیتال مادران با ابزارهای کاربردی برای مدیریت امور روزمره و همراهی در مسیر رشد کودک.", href: "/portfolio/madaryar", style: "madaryar", status: "پروژه توسعه‌یافته", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&q=80" },
  { title: "همراه سفر", label: "TRAVEL APP", desc: "ایده یک اپلیکیشن برای برنامه‌ریزی سفر، مدیریت مقصدها و سازمان‌دهی تجربه گردشگری.", href: "/portfolio/travel-companion", style: "travel-app", status: "پروژه مفهومی", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80" },
  { title: "مدیریت مالی شخصی", label: "FINANCE APP", desc: "رابط کاربری مفهومی برای ثبت هزینه‌ها، مدیریت بودجه و بررسی وضعیت مالی.", href: "/portfolio/expense-manager", style: "finance", status: "پروژه مفهومی", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80" },
];

/* 3D PORTFOLIO SHOWCASE */
function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationId = 0;
    let disposed = false;

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0.1, 11.5);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      mount.appendChild(renderer.domElement);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x70558f, 2.1));

      const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
      keyLight.position.set(-4, 7, 8);
      keyLight.castShadow = true;
      scene.add(keyLight);

      const purpleLight = new THREE.PointLight(0x9869f0, 65, 18);
      purpleLight.position.set(3, 2, -2);
      scene.add(purpleLight);

      const warmLight = new THREE.PointLight(0xffd6b0, 30, 15);
      warmLight.position.set(-4, -2, 4);
      scene.add(warmLight);

      const stage = new THREE.Group();
      scene.add(stage);

      const addGeometry = <T extends THREE.BufferGeometry>(geometry: T): T => {
        geometries.push(geometry);
        return geometry;
      };

      const addMaterial = <T extends THREE.Material>(material: T): T => {
        materials.push(material);
        return material;
      };

      const roundedMaterial = (color: number, metalness = 0.35, roughness = 0.3) =>
        addMaterial(new THREE.MeshStandardMaterial({ color, metalness, roughness }));

      // A soft platform beneath the devices.
      const platform = new THREE.Mesh(
        addGeometry(new THREE.CylinderGeometry(3.15, 3.45, 0.12, 80)),
        roundedMaterial(0xe9e0f7, 0.55, 0.3)
      );
      platform.position.set(0, -1.65, -0.15);
      platform.scale.set(1, 1, 0.52);
      platform.receiveShadow = true;
      stage.add(platform);

      const platformTop = new THREE.Mesh(
        addGeometry(new THREE.CylinderGeometry(2.95, 3.12, 0.035, 80)),
        addMaterial(new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.25,
          roughness: 0.2,
          transparent: true,
          opacity: 0.9,
        }))
      );
      platformTop.position.set(0, -1.57, -0.15);
      platformTop.scale.set(1, 1, 0.52);
      stage.add(platformTop);

      // Create rich preview artwork for each brand.
      const makeScreenTexture = (
        brand: string,
        subtitle: string,
        background: string,
        accent: string,
        photoUrl: string,
        type: string
      ) => {
        const canvas = document.createElement("canvas");
        canvas.width = 1000;
        canvas.height = 650;
        const ctx = canvas.getContext("2d");

        if (!ctx) return null;

        const bg = ctx.createLinearGradient(0, 0, 1000, 650);
        bg.addColorStop(0, background);
        bg.addColorStop(1, accent);
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 1000, 650);

        // Browser frame
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 1000, 650);
        ctx.fillStyle = "#f4f1f8";
        ctx.fillRect(0, 0, 1000, 43);

        ["#f18b9c", "#f4c46e", "#7bc9a5"].forEach((color, i) => {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(22 + i * 22, 21, 6, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = "#ded8e8";
        ctx.fillRect(90, 15, 430, 12);
        ctx.fillStyle = background;
        ctx.fillRect(0, 43, 1000, 607);

        // Brand header
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 43, 1000, 78);
        ctx.fillStyle = background;
        ctx.font = "bold 35px Arial";
        ctx.textAlign = "left";
        ctx.fillText(brand, 48, 94);

        ctx.fillStyle = "#756b82";
        ctx.font = "20px Arial";
        ctx.fillText("HOME     ABOUT     SERVICES     CONTACT", 490, 91);

        // Main content
        if (type === "bunzo") {
          ctx.fillStyle = "#171717";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#ff963e";
          ctx.font = "bold 68px Arial";
          ctx.fillText("BIG TASTE.", 55, 245);
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 46px Arial";
          ctx.fillText("NO COMPROMISE.", 55, 305);
          ctx.fillStyle = "#c9c2bd";
          ctx.font = "22px Arial";
          ctx.fillText("FRESH BURGERS • BOLD FLAVORS", 60, 350);
        } else if (type === "forma") {
          ctx.fillStyle = "#f0e8dc";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#44372e";
          ctx.font = "bold 54px Arial";
          ctx.fillText("Spaces with", 55, 235);
          ctx.fillText("a point of view.", 55, 300);
        } else if (type === "beautiva") {
          ctx.fillStyle = "#f8edf1";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#6e3652";
          ctx.font = "bold 62px Arial";
          ctx.fillText("YOUR BEAUTY,", 55, 240);
          ctx.fillText("YOUR WAY.", 55, 310);
        } else if (type === "travel") {
          ctx.fillStyle = "#e7f3f1";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#174b58";
          ctx.font = "bold 58px Arial";
          ctx.fillText("FIND YOUR", 55, 230);
          ctx.fillText("NEXT JOURNEY", 55, 300);
        } else if (type === "dentiva") {
          ctx.fillStyle = "#e8f4f8";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#24586d";
          ctx.font = "bold 58px Arial";
          ctx.fillText("SMILE WITH", 55, 235);
          ctx.fillText("CONFIDENCE", 55, 305);
        } else if (type === "mehr") {
          ctx.fillStyle = "#f0e9f8";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#503675";
          ctx.font = "bold 58px Arial";
          ctx.fillText("LEARN A NEW", 55, 235);
          ctx.fillText("LANGUAGE", 55, 305);
        } else if (type === "khaneh") {
          ctx.fillStyle = "#eaf1eb";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#315c4b";
          ctx.font = "bold 58px Arial";
          ctx.fillText("FIND YOUR", 55, 235);
          ctx.fillText("PLACE TO LIVE", 55, 305);
        } else {
          ctx.fillStyle = "#f1edfa";
          ctx.fillRect(0, 121, 1000, 529);
          ctx.fillStyle = "#49316e";
          ctx.font = "bold 58px Arial";
          ctx.fillText("DISCOVER MORE", 55, 235);
          ctx.fillText("IN ONE PLACE", 55, 305);
        }

        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.roundRect(55, 385, 190, 52, 12);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 20px Arial";
        ctx.fillText("EXPLORE NOW", 80, 418);

        // Product / photo area
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.roundRect(610, 155, 340, 420, 24);
        ctx.fill();

        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.roundRect(635, 180, 290, 370, 18);
        ctx.fill();

        // Decorative image placeholder, replaced by photo when loaded.
        ctx.fillStyle = "rgba(255,255,255,.22)";
        ctx.beginPath();
        ctx.arc(780, 360, 110, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255,255,255,.7)";
        ctx.fillRect(665, 485, 220, 9);
        ctx.fillRect(665, 508, 155, 7);

        if (photoUrl) {
          const photo = new Image();
          photo.crossOrigin = "anonymous";
          photo.onload = () => {
            if (!ctx) return;
            ctx.save();
            ctx.beginPath();
            ctx.roundRect(650, 195, 260, 270, 16);
            ctx.clip();
            ctx.globalAlpha = 0.92;
            ctx.drawImage(photo, 650, 195, 260, 270);
            ctx.restore();
            texture.needsUpdate = true;
          };
          photo.src = photoUrl;
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 4;
        textures.push(texture);
        return texture;
      };

      const screenData = [
        {
          brand: "FORMA",
          subtitle: "Interior design",
          background: "#44372e",
          accent: "#b99c7b",
          image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
          type: "forma",
        },
        {
          brand: "BUNZO",
          subtitle: "Burger house",
          background: "#171717",
          accent: "#e8752e",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
          type: "bunzo",
        },
        {
          brand: "BEAUTIVA",
          subtitle: "Beauty & care",
          background: "#6e3652",
          accent: "#d99ab7",
          image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=85",
          type: "beautiva",
        },
        {
          brand: "TRAVELORA",
          subtitle: "Travel booking",
          background: "#174b58",
          accent: "#54a9a8",
          image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85",
          type: "travel",
        },
        {
          brand: "DENTIVA",
          subtitle: "Dental clinic",
          background: "#24586d",
          accent: "#79b9cd",
          image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=85",
          type: "dentiva",
        },
        {
          brand: "MEHR",
          subtitle: "Language institute",
          background: "#503675",
          accent: "#a988d2",
          image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=85",
          type: "mehr",
        },
        {
          brand: "KHANEH NAMA",
          subtitle: "Real estate",
          background: "#315c4b",
          accent: "#83aa91",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
          type: "khaneh",
        },
        {
          brand: "NOVA MARKET",
          subtitle: "Online marketplace",
          background: "#30204f",
          accent: "#9b78d1",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85",
          type: "nova",
        },
      ];

      // Main laptop
      const laptop = new THREE.Group();
      laptop.position.set(-0.15, -0.38, 0.65);
      laptop.rotation.set(-0.06, -0.13, 0);
      laptop.scale.setScalar(1.04);
      stage.add(laptop);

      const laptopScreenFrame = new THREE.Mesh(
        addGeometry(new THREE.BoxGeometry(4.35, 2.85, 0.16)),
        roundedMaterial(0x292333, 0.72, 0.24)
      );
      laptopScreenFrame.position.set(0, 1.02, 0);
      laptopScreenFrame.castShadow = true;
      laptop.add(laptopScreenFrame);

      const laptopScreen = new THREE.Mesh(
        addGeometry(new THREE.PlaneGeometry(4.13, 2.62)),
        addMaterial(new THREE.MeshBasicMaterial({
          map: makeScreenTexture(
            "NEXORA",
            "Digital experiences",
            "#38245f",
            "#a58be0",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
            "forma"
          ),
        }))
      );
      laptopScreen.position.set(0, 1.02, 0.086);
      laptop.add(laptopScreen);

      const cameraDot = new THREE.Mesh(
        addGeometry(new THREE.SphereGeometry(0.025, 16, 16)),
        addMaterial(new THREE.MeshBasicMaterial({ color: 0x8d82a1 }))
      );
      cameraDot.position.set(0, 2.39, 0.087);
      laptop.add(cameraDot);

      const laptopBase = new THREE.Mesh(
        addGeometry(new THREE.BoxGeometry(4.72, 0.13, 2.65)),
        roundedMaterial(0xc9c5d1, 0.82, 0.22)
      );
      laptopBase.position.set(0, -0.48, 1.17);
      laptopBase.rotation.x = -0.06;
      laptopBase.castShadow = true;
      laptop.add(laptopBase);

      const keyboard = new THREE.Mesh(
        addGeometry(new THREE.BoxGeometry(3.35, 0.025, 1.12)),
        addMaterial(new THREE.MeshStandardMaterial({
          color: 0x716b7c,
          metalness: 0.2,
          roughness: 0.7,
        }))
      );
      keyboard.position.set(0, -0.397, 1.15);
      laptop.add(keyboard);

      const trackpad = new THREE.Mesh(
        addGeometry(new THREE.BoxGeometry(0.95, 0.018, 0.58)),
        addMaterial(new THREE.MeshStandardMaterial({
          color: 0xe7e3ed,
          metalness: 0.2,
          roughness: 0.45,
        }))
      );
      trackpad.position.set(0, -0.38, 1.85);
      laptop.add(trackpad);

      // Phone beside laptop
      const phone = new THREE.Group();
      phone.position.set(2.35, -0.53, 1.5);
      phone.rotation.set(-0.04, -0.25, -0.12);
      phone.scale.setScalar(0.84);
      stage.add(phone);

      const phoneBody = new THREE.Mesh(
        addGeometry(new THREE.BoxGeometry(1.03, 2.08, 0.13)),
        roundedMaterial(0x292333, 0.75, 0.2)
      );
      phoneBody.castShadow = true;
      phone.add(phoneBody);

      const phoneScreenTexture = (() => {
        const canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 800;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, 400, 800);
        ctx.fillStyle = "#f7edf4";
        ctx.fillRect(0, 0, 400, 800);

        ctx.fillStyle = "#9c5c83";
        ctx.font = "bold 34px Arial";
        ctx.textAlign = "center";
        ctx.fillText("MADARYAR", 200, 95);

        ctx.fillStyle = "#5b4965";
        ctx.font = "bold 25px Arial";
        ctx.fillText("سلام، خوش آمدی", 200, 155);

        ctx.fillStyle = "#e8c9da";
        ctx.beginPath();
        ctx.roundRect(28, 195, 344, 205, 22);
        ctx.fill();

        ctx.fillStyle = "#b66f9a";
        ctx.beginPath();
        ctx.arc(200, 285, 65, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.font = "bold 23px Arial";
        ctx.fillText("مادریار", 200, 293);

        ["رشد کودک", "یادآوری‌ها", "سلامت و مراقبت", "برنامه روزانه"].forEach((label, i) => {
          const y = 455 + i * 72;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.roundRect(28, y, 344, 56, 13);
          ctx.fill();
          ctx.fillStyle = "#7c5d78";
          ctx.font = "bold 20px Arial";
          ctx.fillText(label, 200, y + 35);
        });

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        textures.push(texture);
        return texture;
      })();

      if (phoneScreenTexture) {
        const phoneScreen = new THREE.Mesh(
          addGeometry(new THREE.PlaneGeometry(0.91, 1.91)),
          addMaterial(new THREE.MeshBasicMaterial({ map: phoneScreenTexture }))
        );
        phoneScreen.position.z = 0.071;
        phone.add(phoneScreen);
      }

      const phoneSpeaker = new THREE.Mesh(
        addGeometry(new THREE.BoxGeometry(0.25, 0.025, 0.012)),
        addMaterial(new THREE.MeshBasicMaterial({ color: 0x17131d }))
      );
      phoneSpeaker.position.set(0, 0.96, 0.075);
      phone.add(phoneSpeaker);

      // Floating portfolio preview cards
      const floatingCards: THREE.Group[] = [];

      const floatingItems = [
        { index: 1, x: -2.95, y: 1.75, z: -0.9, width: 1.55, height: 1.02, rotation: 0.13 },
        { index: 2, x: 2.75, y: 1.95, z: -0.7, width: 1.5, height: 1.0, rotation: -0.15 },
        { index: 3, x: -3.05, y: -0.75, z: -0.55, width: 1.5, height: 1.0, rotation: -0.12 },
        { index: 4, x: 3.35, y: -1.25, z: -0.6, width: 1.45, height: 0.96, rotation: 0.14 },
      ];

      floatingItems.forEach((item, i) => {
        const data = screenData[item.index];
        const group = new THREE.Group();
        group.position.set(item.x, item.y, item.z);
        group.rotation.set(-0.04, item.rotation, item.rotation * 0.5);
        stage.add(group);
        floatingCards.push(group);

        const frame = new THREE.Mesh(
          addGeometry(new THREE.BoxGeometry(item.width + 0.1, item.height + 0.1, 0.09)),
          roundedMaterial(0xffffff, 0.55, 0.2)
        );
        frame.castShadow = true;
        group.add(frame);

        const texture = makeScreenTexture(
          data.brand,
          data.subtitle,
          data.background,
          data.accent,
          data.image,
          data.type
        );

        const preview = new THREE.Mesh(
          addGeometry(new THREE.PlaneGeometry(item.width, item.height)),
          addMaterial(new THREE.MeshBasicMaterial({ map: texture }))
        );
        preview.position.z = 0.051;
        group.add(preview);

        const smallShadow = new THREE.Mesh(
          addGeometry(new THREE.PlaneGeometry(item.width + 0.22, item.height + 0.2)),
          addMaterial(new THREE.MeshBasicMaterial({
            color: 0x6847a2,
            transparent: true,
            opacity: 0.13,
          }))
        );
        smallShadow.position.z = -0.07;
        group.add(smallShadow);
      });

      // Decorative orbit rings
      const ring = new THREE.Mesh(
        addGeometry(new THREE.TorusGeometry(4.35, 0.012, 8, 140)),
        addMaterial(new THREE.MeshStandardMaterial({
          color: 0xb69ae5,
          metalness: 0.8,
          roughness: 0.25,
          transparent: true,
          opacity: 0.55,
        }))
      );
      ring.rotation.x = 1.15;
      ring.rotation.y = 0.2;
      ring.position.y = -0.1;
      stage.add(ring);

      const smallRing = new THREE.Mesh(
        addGeometry(new THREE.TorusGeometry(3.65, 0.009, 8, 120)),
        addMaterial(new THREE.MeshStandardMaterial({
          color: 0xd6c4f0,
          transparent: true,
          opacity: 0.65,
        }))
      );
      smallRing.rotation.x = 1.4;
      smallRing.rotation.y = -0.25;
      stage.add(smallRing);

      // Floating particles
      const particlesGeometry = addGeometry(new THREE.BufferGeometry());
      const particlePositions = new Float32Array(180);

      for (let i = 0; i < particlePositions.length; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 10;
        particlePositions[i + 1] = (Math.random() - 0.5) * 6;
        particlePositions[i + 2] = (Math.random() - 0.5) * 5;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3)
      );

      const particles = new THREE.Points(
        particlesGeometry,
        addMaterial(new THREE.PointsMaterial({
          color: 0x9674ce,
          size: 0.035,
          transparent: true,
          opacity: 0.7,
        }))
      );
      stage.add(particles);

      const target = { x: 0, y: 0 };
      const current = { x: 0, y: 0 };
      let isVisible = true;

      const onPointerMove = (event: PointerEvent) => {
        const rect = mount.getBoundingClientRect();
        target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      };

      const onPointerLeave = () => {
        target.x = 0;
        target.y = 0;
      };

      const resize = () => {
        if (disposed || !renderer) return;
        const width = Math.max(mount.clientWidth, 1);
        const height = Math.max(mount.clientHeight, 1);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;

        if (width < 480) {
          camera.position.z = 14.4;
          stage.scale.setScalar(0.79);
        } else if (width < 700) {
          camera.position.z = 13.2;
          stage.scale.setScalar(0.87);
        } else {
          camera.position.z = 11.5;
          stage.scale.setScalar(1);
        }

        camera.updateProjectionMatrix();
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      resize();

      mount.addEventListener("pointermove", onPointerMove);
      mount.addEventListener("pointerleave", onPointerLeave);

      const visibilityObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      });
      visibilityObserver.observe(mount);

      const clock = new THREE.Clock();

      const animate = () => {
        if (disposed || !renderer) return;

        animationId = requestAnimationFrame(animate);
        if (!isVisible) return;

        const elapsed = clock.getElapsedTime();

        current.x += (target.x - current.x) * 0.045;
        current.y += (target.y - current.y) * 0.045;

        laptop.position.y = -0.38 + Math.sin(elapsed * 0.8) * 0.045;
        laptop.rotation.y = -0.13 + current.x * 0.055;
        laptop.rotation.x = -0.06 + current.y * 0.025;

        phone.position.y = -0.53 + Math.sin(elapsed * 0.9 + 1.2) * 0.09;
        phone.rotation.y = -0.25 + current.x * 0.08;

        floatingCards.forEach((card, index) => {
          const item = floatingItems[index];
          card.position.y = item.y + Math.sin(elapsed * 0.85 + index * 1.4) * 0.11;
          card.rotation.y = item.rotation + current.x * 0.08;
          card.rotation.x = -0.04 + current.y * 0.035;
          card.rotation.z = item.rotation * 0.5 + Math.sin(elapsed * 0.4 + index) * 0.012;
        });

        stage.rotation.y = current.x * 0.025;
        ring.rotation.z = elapsed * 0.025;
        smallRing.rotation.z = -elapsed * 0.018;
        particles.rotation.y = elapsed * 0.018;

        camera.position.x = current.x * 0.12;
        camera.position.y = 0.1 - current.y * 0.08;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        disposed = true;
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        visibilityObserver.disconnect();

        mount.removeEventListener("pointermove", onPointerMove);
        mount.removeEventListener("pointerleave", onPointerLeave);

        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        textures.forEach((texture) => texture.dispose());

        renderer?.dispose();

        if (renderer?.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error("Three.js portfolio hero initialization failed:", error);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      textures.forEach((texture) => texture.dispose());
      renderer?.dispose();
      mount.innerHTML = "";
    }
  }, []);

  return (
    <div className="hero-visual">
      <div className="visual-glow" />
      <div className="three-mount" ref={mountRef} />

      <div className="visual-label one">
        <strong>CREATIVE PORTFOLIO</strong>
        وب‌سایت‌ها و محصولات دیجیتال
      </div>

      <div className="visual-label two">
        <strong>WEB & APP</strong>
        طراحی و توسعه دیجیتال
      </div>

      <div className="visual-label three">
        <strong>3D EXPERIENCE</strong>
        از ایده تا تجربه
      </div>

      <div className="visual-caption">
        نگاهی سه‌بعدی به دنیای پروژه‌های Nexora
      </div>
    </div>
  );
}

/* SCROLL REVEAL */
function Scroll3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -25px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="scroll-3d">{children}</div>;
}

/* WEBSITE ARTWORK */
function ProjectArtwork({ style, image }: { style: string; image: string }) {
  const content: Record<string, { title: string; subtitle: string }> = {
    nova: { title: "NOVA MARKET", subtitle: "خرید از دنیایی از محصولات" },
    travel: { title: "TRAVELORA", subtitle: "Discover your next journey" },
    dentiva: { title: "DENTIVA", subtitle: "A brighter smile" },
    mehr: { title: "MEHR LANGUAGE", subtitle: "Start learning today" },
    forma: { title: "FORMA", subtitle: "Design your space" },
    bunzo: { title: "BUNZO", subtitle: "Taste the difference" },
    beautiva: { title: "BEAUTIVA", subtitle: "Beauty & Care" },
    khaneh: { title: "KHANEH NAMA", subtitle: "خانه‌ای برای زندگی بهتر" },
  };

  const item = content[style] || content.nova;

  return (
    <div className={`project-art ${style}`}>
      <div className="art-window">
        <div className="art-browser"><i /><i /><i /></div>
        <div className="art-layout">
          <div className="art-copy">
            <b>{item.title}</b>
            <span /><span /><span /><span />
            <span className="art-mini-button">مشاهده پروژه</span>
          </div>

          {style === "nova" ? (
            <div className="art-picture">
              <div className="nova-tile">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" alt="ساعت و کالای دیجیتال" loading="lazy" />
              </div>
              <div className="nova-tile">
                <img src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=80" alt="لوازم خانه" loading="lazy" />
              </div>
              <div className="nova-tile">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" alt="کفش و پوشاک" loading="lazy" />
              </div>
              <div className="nova-tile">
                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80" alt="دوربین و لوازم الکترونیکی" loading="lazy" />
              </div>
              <span className="art-caption">NOVA MARKET</span>
            </div>
          ) : (
            <div className="art-picture">
              <img src={image} alt={item.title} loading="lazy" />
              <span className="art-caption">{item.subtitle}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* APP ARTWORK */
function AppArtwork({ style, image }: { style: string; image: string }) {
  const screens: Record<string, { title: string; subtitle: string; first: string; second: string }> = {
    madaryar: { title: "مادریار", subtitle: "همراه مادر و کودک", first: "رشد و مراقبت کودک", second: "یادآوری‌های روزانه" },
    "travel-app": { title: "همراه سفر", subtitle: "سفر بعدی تو", first: "برنامه سفر", second: "مقصدهای محبوب" },
    finance: { title: "مدیریت مالی", subtitle: "خلاصه وضعیت مالی", first: "هزینه‌های ماهانه", second: "مدیریت بودجه" },
  };

  const item = screens[style] || screens.madaryar;

  return (
    <div className={`app-visual ${style}`}>
      <div className="app-orb" />
      <div className="app-phone">
        <div className="app-screen">
          <div style={{ textAlign: "center", color: "#45335f", fontSize: "10px", fontWeight: 900, marginBottom: "5px" }}>
            {item.title}
          </div>
          <div style={{ textAlign: "center", color: "#93859f", fontSize: "7px", marginBottom: "9px" }}>
            {item.subtitle}
          </div>
          <div className="app-screen-title" />
          <div className="app-screen-photo">
            <img src={image} alt={item.title} loading="lazy" />
          </div>
          <div style={{ fontSize: "8px", color: "#57466e", fontWeight: 800, margin: "7px 0" }}>
            {item.first}
          </div>
          <div className="app-screen-block" />
          <div className="app-screen-line" />
          <div className="app-screen-line short" />
          <div style={{ fontSize: "8px", color: "#57466e", fontWeight: 800, margin: "7px 0" }}>
            {item.second}
          </div>
          <div className="app-screen-block" />
        </div>
      </div>
    </div>
  );
}

/* HOME PAGE */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{css}</style>

      <main className="home">
        <header className="header">
          <div className="container nav">
            <Link href="/" className="logo" onClick={closeMenu}>
              <span className="logo-mark">N</span>
              NEXORA
            </Link>

            <nav className="links">
              <Link href="/">خانه</Link>
              <Link href="/services">خدمات</Link>
              <Link href="/portfolio">نمونه‌کارها</Link>
              <Link href="/about">درباره ما</Link>
              <Link href="/contact">تماس</Link>
            </nav>

            <Link href="/contact" className="nav-cta">شروع همکاری</Link>

            <button
              type="button"
              className="mobile-toggle"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <nav className="mobile-menu">
              <Link href="/" onClick={closeMenu}>خانه</Link>
              <Link href="/services" onClick={closeMenu}>خدمات</Link>
              <Link href="/portfolio" onClick={closeMenu}>نمونه‌کارها</Link>
              <Link href="/about" onClick={closeMenu}>درباره ما</Link>
              <Link href="/contact" onClick={closeMenu}>تماس</Link>
              <Link href="/contact" className="mobile-cta" onClick={closeMenu}>شروع همکاری</Link>
            </nav>
          )}
        </header>

        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-tag">
                <span />
                طراحی و توسعه تجربه‌های دیجیتال
              </div>

              <h1>
                از یک ایده
                <br />
                تا یک <span className="gradient">تجربه دیجیتال</span>
                <br />
                متفاوت
              </h1>

              <p className="hero-description">
                در Nexora ایده‌ها به تجربه‌های دیجیتال تبدیل می‌شوند؛
                از طراحی و توسعه وب‌سایت و اپلیکیشن تا خلق محتوای
                تبلیغاتی با کمک هوش مصنوعی.
              </p>

              <div className="hero-actions">
                <Link href="/portfolio" className="btn btn-primary">
                  کشف پروژه‌ها <span>←</span>
                </Link>
                <Link href="/contact" className="btn btn-light">
                  درباره پروژه‌ات صحبت کنیم
                </Link>
              </div>

              <div className="hero-footnote">
                <span />
                طراحی هدفمند، تجربه کاربری و راهکارهای دیجیتال
              </div>
            </div>

            <ThreeHero />
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">SELECTED WORK</span>
              <h2>ایده‌ها، در قالب تجربه‌های دیجیتال</h2>
              <p>
                نگاهی به وب‌سایت‌ها و اپلیکیشن‌هایی که در Nexora
                طراحی و توسعه داده‌ایم یا به‌عنوان پروژه مفهومی ساخته‌ایم.
              </p>
            </div>

            <div className="project-subheading">
              <h3>وب‌سایت‌های منتخب</h3>
              <span>8 WEBSITE PROJECTS</span>
            </div>

            <div className="project-grid">
              {websites.map((project) => (
                <Scroll3D key={project.title}>
                  <Link href={project.href} className="project-card">
                    <ProjectArtwork style={project.style} image={project.image} />
                    <div className="project-content">
                      <div className="project-meta">
                        <span>{project.label}</span>
                        <span>WEBSITE DESIGN</span>
                      </div>
                      <h3>{project.name}</h3>
                      <span className="concept-note">پروژه مفهومی</span>
                      <div className="project-link">
                        <span>مشاهده پروژه</span>
                        <span>←</span>
                      </div>
                    </div>
                  </Link>
                </Scroll3D>
              ))}
            </div>

            <div className="all-projects">
              <Link href="/portfolio" className="btn btn-light">
                مشاهده همه نمونه‌کارها ←
              </Link>
            </div>

            <div className="apps-divider" />

            <div className="project-subheading">
              <h3>اپلیکیشن‌ها</h3>
              <span>APPLICATION PROJECTS</span>
            </div>

            <div className="apps-grid">
              {apps.map((app) => (
                <Scroll3D key={app.title}>
                  <Link href={app.href} className="app-card">
                    <AppArtwork style={app.style} image={app.image} />
                    <div className="app-card-content">
                      <span>{app.label}</span>
                      <h3>{app.title}</h3>
                      <p>{app.desc}</p>
                      <span className="concept-note">{app.status}</span>
                      <div className="app-card-bottom">
                        <span>مشاهده اپلیکیشن</span>
                        <span>←</span>
                      </div>
                    </div>
                  </Link>
                </Scroll3D>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-grid">
            <div className="why-copy">
              <span className="eyebrow">WHY NEXORA</span>
              <h2>
                فقط ساختن یک وب‌سایت نیست؛
                <span> خلق یک تجربه است.</span>
              </h2>
              <p>
                هر پروژه مسیر و نیازهای خودش را دارد. در Nexora تلاش می‌کنیم
                راهکار دیجیتال متناسب با هدف پروژه طراحی کنیم؛ راهکاری که
                هم ظاهر حرفه‌ای داشته باشد و هم استفاده از آن برای مخاطب ساده باشد.
              </p>

              <div className="why-items">
                <div className="why-item">
                  <b>طراحی هدفمند</b>
                  <p>تصمیم‌های طراحی بر اساس نیاز و هدف پروژه.</p>
                </div>
                <div className="why-item">
                  <b>توجه به جزئیات</b>
                  <p>اهمیت دادن به تجربه کاربری و کیفیت اجرا.</p>
                </div>
                <div className="why-item">
                  <b>نگاه توسعه‌پذیر</b>
                  <p>توجه به نیازهای امروز و مسیر رشد محصول.</p>
                </div>
                <div className="why-item">
                  <b>ابزارهای خلاقانه</b>
                  <p>استفاده هوشمندانه از فناوری‌های جدید.</p>
                </div>
              </div>
            </div>

            <div className="why-visual">
              <div className="why-orb" />
              <div className="why-cube">N</div>
              <div className="why-chip one">CREATIVE THINKING</div>
              <div className="why-chip two">DIGITAL EXPERIENCE</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta">
              <h2>ایده‌ای برای ساختن دارید؟</h2>
              <p>
                هر تجربه دیجیتال از یک ایده شروع می‌شود.
                درباره ایده‌تان با ما صحبت کنید تا مسیر تبدیل آن
                به یک محصول دیجیتال را بررسی کنیم.
              </p>
              <Link href="/contact" className="btn">
                شروع گفتگو با Nexora ←
              </Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" className="footer-logo">
                  <span className="logo-mark">N</span>
                  NEXORA
                </Link>
                <p className="footer-about">
                  Nexora در حوزه طراحی و توسعه محصولات دیجیتال فعالیت می‌کند؛
                  از وب‌سایت و اپلیکیشن تا محتوای تبلیغاتی خلاقانه با کمک هوش مصنوعی.
                </p>
              </div>

              <div className="footer-col">
                <h4>دسترسی سریع</h4>
                <Link href="/">خانه</Link>
                <Link href="/about">درباره ما</Link>
                <Link href="/services">خدمات</Link>
                <Link href="/portfolio">نمونه‌کارها</Link>
              </div>

              <div className="footer-col">
                <h4>ارتباط با Nexora</h4>
                <Link href="/contact">تماس با ما</Link>
                <p>
                  برای شروع همکاری و مطرح کردن ایده پروژه‌تان
                  با ما در ارتباط باشید.
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copy">
                © 2026 NEXORA — تمامی حقوق محفوظ است.
              </div>
              <div className="footer-links">
                <Link href="/about">درباره ما</Link>
                <Link href="/portfolio">نمونه‌کارها</Link>
                <Link href="/contact">تماس</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}