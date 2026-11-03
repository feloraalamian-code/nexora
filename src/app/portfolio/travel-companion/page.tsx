
"use client";

import { useState } from "react";

const destinations = [
  {
    name: "ماسوله",
    province: "گیلان",
    days: "۲ روز",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900",
    description: "قدم زدن در کوچه‌های پلکانی و هوای مه‌آلود شمال",
  },
  {
    name: "کاشان",
    province: "اصفهان",
    days: "۳ روز",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900",
    description: "خانه‌های تاریخی، معماری اصیل و باغ‌های ایرانی",
  },
  {
    name: "قشم",
    province: "هرمزگان",
    days: "۴ روز",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    description: "ساحل، طبیعت شگفت‌انگیز و تجربه زندگی جزیره‌ای",
  },
];

const tasks = [
  "رزرو محل اقامت",
  "خرید بلیت رفت و برگشت",
  "آماده کردن مدارک سفر",
  "بستن چمدان",
];

const expenses = [
  { title: "اقامتگاه", amount: "۲,۴۰۰,۰۰۰", icon: "⌂" },
  { title: "حمل و نقل", amount: "۸۵۰,۰۰۰", icon: "↗" },
  { title: "غذا و کافه", amount: "۶۲۰,۰۰۰", icon: "♨" },
];

export default function TravelCompanionPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [checkedTasks, setCheckedTasks] = useState<number[]>([0, 1]);
  const [activeDestination, setActiveDestination] = useState(0);

  const toggleTask = (index: number) => {
    setCheckedTasks((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <main className="travel-page" dir="rtl">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f6f5ef;
          font-family: Tahoma, Arial, sans-serif;
        }
      `}</style>

      <style jsx>{`
        .travel-page {
          min-height: 100vh;
          background: #f6f5ef;
          color: #243b35;
          overflow: hidden;
        }

        .topbar {
          max-width: 1280px;
          margin: auto;
          padding: 24px 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e5e4db;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          background: #244c42;
          color: #f5d69a;
          border-radius: 15px 15px 15px 4px;
          display: grid;
          place-items: center;
          font-size: 23px;
        }

        .nav {
          display: flex;
          gap: 30px;
          color: #718079;
          font-size: 13px;
        }

        .nav span:first-child {
          color: #244c42;
          font-weight: bold;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #e5d6b9;
          display: grid;
          place-items: center;
          color: #244c42;
          font-weight: bold;
        }

        .hero {
          max-width: 1280px;
          margin: auto;
          padding: 58px 35px 35px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 55px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #b08043;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .eyebrow:before {
          content: "";
          width: 25px;
          height: 1px;
          background: #b08043;
        }

        h1 {
          font-size: clamp(35px, 4.5vw, 62px);
          line-height: 1.5;
          margin: 0;
          letter-spacing: -2px;
          color: #244c42;
        }

        h1 span {
          color: #bd9157;
        }

        .hero-text {
          max-width: 490px;
          color: #78847d;
          font-size: 14px;
          line-height: 2.3;
          margin: 18px 0 27px;
        }

        .primary-btn {
          border: 0;
          background: #244c42;
          color: white;
          border-radius: 9px;
          padding: 15px 25px;
          font-family: inherit;
          font-size: 13px;
          cursor: pointer;
          transition: 0.2s;
        }

        .primary-btn:hover {
          background: #37695b;
          transform: translateY(-2px);
        }

        .hero-note {
          display: inline-block;
          margin-right: 15px;
          font-size: 11px;
          color: #9a9e92;
        }

        .hero-visual {
          position: relative;
          min-height: 370px;
          border-radius: 8px 100px 8px 8px;
          overflow: hidden;
          background: #d6d4bd;
        }

        .hero-visual img {
          width: 100%;
          height: 370px;
          object-fit: cover;
          display: block;
        }

        .image-label {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.93);
          padding: 14px 18px;
          border-radius: 8px;
          font-size: 12px;
          color: #244c42;
        }

        .image-label strong {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }

        .floating-card {
          position: absolute;
          top: 22px;
          left: 20px;
          background: #fffdf6;
          border-radius: 10px;
          padding: 14px 17px;
          font-size: 11px;
          box-shadow: 0 10px 35px #243b351c;
        }

        .floating-card strong {
          display: block;
          color: #244c42;
          font-size: 17px;
          margin-bottom: 5px;
        }

        .content {
          max-width: 1280px;
          margin: auto;
          padding: 20px 35px 75px;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin: 25px 0;
        }

        .section-heading h2 {
          font-size: 23px;
          margin: 0 0 8px;
          color: #244c42;
        }

        .section-heading p {
          color: #92978e;
          font-size: 12px;
          margin: 0;
        }

        .text-link {
          color: #a77a43;
          font-size: 12px;
          cursor: pointer;
        }

        .destination-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .destination-card {
          background: #fffefa;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #ecebe2;
          transition: 0.25s;
          cursor: pointer;
        }

        .destination-card:hover,
        .destination-card.selected {
          transform: translateY(-4px);
          border-color: #bd9157;
          box-shadow: 0 12px 30px #243b3510;
        }

        .destination-image {
          height: 190px;
          position: relative;
          overflow: hidden;
        }

        .destination-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s;
        }

        .destination-card:hover img {
          transform: scale(1.05);
        }

        .days-tag {
          position: absolute;
          top: 13px;
          right: 13px;
          background: #fffefa;
          border-radius: 6px;
          padding: 7px 10px;
          font-size: 10px;
        }

        .destination-info {
          padding: 17px;
        }

        .destination-info h3 {
          margin: 0 0 6px;
          font-size: 17px;
        }

        .province {
          color: #ad895a;
          font-size: 11px;
        }

        .destination-info p {
          color: #89918a;
          font-size: 11px;
          line-height: 2;
          margin: 12px 0 0;
        }

        .dashboard {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 20px;
          margin-top: 65px;
        }

        .panel {
          background: #fffefa;
          border: 1px solid #eae9e0;
          border-radius: 12px;
          padding: 25px;
        }

        .panel-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .panel-title h3 {
          margin: 0;
          font-size: 17px;
        }

        .panel-title span {
          font-size: 11px;
          color: #b18b57;
        }

        .trip-summary {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #f4f2e8;
          border-radius: 9px;
          padding: 16px;
          margin-bottom: 20px;
        }

        .trip-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #dfe9df;
          display: grid;
          place-items: center;
          font-size: 22px;
        }

        .trip-summary strong {
          display: block;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .trip-summary small {
          color: #92978e;
          font-size: 10px;
        }

        .progress-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          margin-bottom: 9px;
        }

        .progress-track {
          width: 100%;
          height: 7px;
          background: #eeeee6;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .progress-fill {
          height: 100%;
          background: #638b70;
          border-radius: 20px;
          transition: width 0.3s;
        }

        .task-list {
          display: grid;
          gap: 14px;
        }

        .task {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 12px;
          color: #66746c;
          cursor: pointer;
        }

        .task input {
          accent-color: #638b70;
          width: 16px;
          height: 16px;
        }

        .task.done span {
          text-decoration: line-through;
          color: #a6aaa2;
        }

        .expense-total {
          background: #244c42;
          color: white;
          padding: 22px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .expense-total small {
          color: #c4d2c9;
          font-size: 11px;
        }

        .expense-total strong {
          display: block;
          font-size: 27px;
          margin-top: 9px;
        }

        .expense-total span {
          color: #d6c49e;
          font-size: 11px;
        }

        .expense-list {
          display: grid;
          gap: 17px;
        }

        .expense-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #efeee7;
          padding-bottom: 14px;
        }

        .expense-name {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
        }

        .expense-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: #f1eee3;
          display: grid;
          place-items: center;
          color: #987b4c;
          font-size: 17px;
        }

        .expense-amount {
          font-size: 12px;
          font-weight: bold;
        }

        .expense-unit {
          color: #92978e;
          font-size: 10px;
          margin-right: 4px;
        }

        .app-preview {
          margin-top: 65px;
          background: #e8e8dc;
          border-radius: 16px;
          padding: 45px;
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 45px;
          align-items: center;
        }

        .app-preview h2 {
          font-size: 29px;
          line-height: 1.8;
          margin: 0 0 15px;
          color: #244c42;
        }

        .app-preview p {
          color: #78847d;
          font-size: 13px;
          line-height: 2.3;
          max-width: 440px;
        }

        .feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px;
          margin-top: 25px;
        }

        .feature {
          background: #f9f8f1;
          padding: 13px;
          border-radius: 8px;
          font-size: 11px;
          color: #50665b;
        }

        .phone-wrap {
          display: flex;
          justify-content: center;
        }

        .phone {
          width: 255px;
          background: #1d302a;
          padding: 9px;
          border-radius: 32px;
          box-shadow: 0 25px 50px #203e352b;
          transform: rotate(-3deg);
        }

        .phone-screen {
          background: #f8f7ef;
          min-height: 440px;
          border-radius: 25px;
          padding: 20px 15px;
          overflow: hidden;
        }

        .phone-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          margin-bottom: 22px;
        }

        .phone-greeting {
          font-size: 11px;
          color: #89928a;
        }

        .phone-screen h3 {
          font-size: 20px;
          color: #244c42;
          margin: 7px 0 15px;
        }

        .phone-destination {
          height: 125px;
          position: relative;
          border-radius: 13px;
          overflow: hidden;
        }

        .phone-destination img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .phone-destination span {
          position: absolute;
          bottom: 10px;
          right: 10px;
          color: white;
          font-size: 12px;
          font-weight: bold;
          text-shadow: 0 1px 5px #000;
        }

        .phone-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 7px;
          margin-top: 17px;
        }

        .phone-tab {
          text-align: center;
          padding: 10px 2px;
          background: #e9eee5;
          border-radius: 8px;
          color: #52705e;
          font-size: 9px;
        }

        .phone-bottom {
          margin-top: 17px;
          padding: 14px;
          background: white;
          border-radius: 10px;
          font-size: 10px;
          color: #65756b;
          line-height: 2;
        }

        .footer {
          background: #244c42;
          color: #f4f0df;
          padding: 28px 35px;
          text-align: center;
          font-size: 11px;
        }

        .footer strong {
          color: #e0c28f;
        }

        @media (max-width: 800px) {
          .topbar {
            padding: 17px 20px;
          }

          .nav {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 40px 20px 20px;
            gap: 30px;
          }

          .hero-visual {
            min-height: 260px;
            border-radius: 8px 65px 8px 8px;
          }

          .hero-visual img {
            height: 260px;
          }

          .content {
            padding: 15px 20px 50px;
          }

          .destination-grid {
            grid-template-columns: 1fr;
          }

          .destination-image {
            height: 210px;
          }

          .dashboard {
            grid-template-columns: 1fr;
            margin-top: 45px;
          }

          .app-preview {
            grid-template-columns: 1fr;
            padding: 28px 20px;
            gap: 35px;
          }

          .app-preview h2 {
            font-size: 24px;
          }

          .phone {
            transform: none;
          }

          .section-heading h2 {
            font-size: 19px;
          }
        }

        @media (max-width: 420px) {
          .profile > span {
            display: none;
          }

          .hero-note {
            display: block;
            margin: 14px 0 0;
          }

          .panel {
            padding: 19px;
          }

          .feature-list {
            grid-template-columns: 1fr;
          }

          .app-preview {
            margin-top: 45px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">⌁</div>
          <span>هم‌سفر</span>
        </div>

        <nav className="nav">
          <span>خانه</span>
          <span>مقصدها</span>
          <span>برنامه سفر</span>
          <span>هزینه‌ها</span>
        </nav>

        <div className="profile">
          <div className="avatar">م</div>
          <span>سفرهای من</span>
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="eyebrow">TRAVEL, YOUR WAY</div>
          <h1>
            سفر را
            <br />
            <span>آسان‌تر زندگی کن.</span>
          </h1>
          <p className="hero-text">
            از انتخاب مقصد تا آخرین لحظه سفر، همه چیز را در یک همراه هوشمند
            برنامه‌ریزی کن. کمتر نگران باش و بیشتر از مسیر لذت ببر.
          </p>
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("destinations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            کشف مقصدها
          </button>
          <span className="hero-note">همراه تمام لحظه‌های سفر تو</span>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200"
            alt="منظره طبیعت و کوهستان"
          />
          <div className="image-label">
            <strong>ماجراجویی از همین‌جا شروع می‌شود</strong>
            مقصد بعدی تو کجاست؟
          </div>
          <div className="floating-card">
            <strong>۱۲+</strong>
            مقصد برای کشف کردن
          </div>
        </div>
      </section>

      <section className="content" id="destinations">
        <div className="section-heading">
          <div>
            <h2>مقصدهای پیشنهادی</h2>
            <p>برای سفر بعدی‌ات از اینجا الهام بگیر</p>
          </div>
          <span className="text-link">مشاهده همه مقصدها ←</span>
        </div>

        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className={`destination-card ${
                activeDestination === index ? "selected" : ""
              }`}
              onClick={() => setActiveDestination(index)}
            >
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <span className="days-tag">{destination.days} اقامت</span>
              </div>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <span className="province">{destination.province}</span>
                <p>{destination.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="dashboard">
          <div className="panel">
            <div className="panel-title">
              <h3>برنامه سفر من</h3>
              <span>سفر بعدی من</span>
            </div>

            <div className="trip-summary">
              <div className="trip-icon">⌖</div>
              <div>
                <strong>سفر به {destinations[activeDestination].name}</strong>
                <small>۲۵ تا ۲۷ آبان · ۲ شب و ۳ روز</small>
              </div>
            </div>

            <div className="progress-row">
              <span>آمادگی برای سفر</span>
              <strong>{Math.round((checkedTasks.length / tasks.length) * 100)}٪</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${(checkedTasks.length / tasks.length) * 100}%`,
                }}
              />
            </div>

            <div className="task-list">
              {tasks.map((task, index) => (
                <label
                  className={`task ${
                    checkedTasks.includes(index) ? "done" : ""
                  }`}
                  key={task}
                >
                  <input
                    type="checkbox"
                    checked={checkedTasks.includes(index)}
                    onChange={() => toggleTask(index)}
                  />
                  <span>{task}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-title">
              <h3>مدیریت هزینه سفر</h3>
              <span>گزارش آزمایشی</span>
            </div>

            <div className="expense-total">
              <small>مجموع هزینه‌های ثبت‌شده</small>
              <strong>۳,۸۷۰,۰۰۰</strong>
              <span>تومان</span>
            </div>

            <div className="expense-list">
              {expenses.map((expense) => (
                <div className="expense-item" key={expense.title}>
                  <div className="expense-name">
                    <div className="expense-icon">{expense.icon}</div>
                    {expense.title}
                  </div>
                  <div className="expense-amount">
                    {expense.amount}
                    <span className="expense-unit">تومان</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="app-preview">
          <div>
            <div className="eyebrow">YOUR TRAVEL ASSISTANT</div>
            <h2>
              تمام سفر،
              <br />
              در جیب تو.
            </h2>
            <p>
              یک فضای ساده و کاربردی برای مدیریت سفرهایت؛ مقصدها را ذخیره کن،
              برنامه روزانه بچین، هزینه‌ها را ثبت کن و هیچ چیز مهمی را فراموش
              نکن.
            </p>

            <div className="feature-list">
              <div className="feature">⌖ انتخاب و ذخیره مقصدها</div>
              <div className="feature">▤ برنامه‌ریزی روزانه</div>
              <div className="feature">◈ مدیریت هزینه‌ها</div>
              <div className="feature">✓ چک‌لیست وسایل سفر</div>
            </div>
          </div>

          <div className="phone-wrap">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-top">
                  <strong>هم‌سفر</strong>
                  <span>۹:۴۱</span>
                </div>
                <div className="phone-greeting">سلام، مسافر عزیز!</div>
                <h3>وقت یک سفر تازه است</h3>
                <div className="phone-destination">
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600"
                    alt="طبیعت"
                  />
                  <span>ماجراجویی بعدی تو</span>
                </div>
                <div className="phone-tabs">
                  <div className="phone-tab">⌖ مقصدها</div>
                  <div className="phone-tab">▤ برنامه</div>
                  <div className="phone-tab">◈ هزینه‌ها</div>
                </div>
                <div className="phone-bottom">
                  <strong>چک‌لیست سفر</strong>
                  <br />
                  ✓ رزرو اقامتگاه
                  <br />
                  ✓ خرید بلیت
                  <br />
                  ○ آماده کردن چمدان
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <footer className="footer">
        طراحی مفهومی اپلیکیشن <strong>هم‌سفر</strong> | بخشی از مجموعه نمونه‌کارهای Nexora
      </footer>
    </main>
  );
}
