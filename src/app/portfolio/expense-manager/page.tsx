
"use client";

import { useMemo, useState } from "react";

type Transaction = {
  id: number;
  title: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
};

const initialTransactions: Transaction[] = [
  { id: 1, title: "حقوق ماهانه", category: "درآمد", date: "امروز", amount: 28000000, type: "income" },
  { id: 2, title: "خرید سوپرمارکت", category: "خرید روزانه", date: "امروز", amount: 850000, type: "expense" },
  { id: 3, title: "قبض و اینترنت", category: "قبوض", date: "دیروز", amount: 420000, type: "expense" },
  { id: 4, title: "پروژه طراحی سایت", category: "درآمد جانبی", date: "۲۸ مهر", amount: 6500000, type: "income" },
  { id: 5, title: "رستوران", category: "تفریح", date: "۲۷ مهر", amount: 680000, type: "expense" },
  { id: 6, title: "هزینه رفت‌وآمد", category: "حمل‌ونقل", date: "۲۶ مهر", amount: 350000, type: "expense" },
];

const categories = [
  { name: "خرید روزانه", amount: 3200000, color: "#77a58a", percent: 40 },
  { name: "خانه و قبوض", amount: 2100000, color: "#d6b878", percent: 26 },
  { name: "حمل‌ونقل", amount: 1450000, color: "#8096bd", percent: 18 },
  { name: "تفریح", amount: 1250000, color: "#c58b7c", percent: 16 },
];

const money = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

export default function ExpenseManagerPage() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [category, setCategory] = useState("خرید روزانه");

  const totals = useMemo(() => {
    const income = transactions
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + item.amount, 0);

    const expense = transactions
      .filter((item) => item.type === "expense")
      .reduce((sum, item) => sum + item.amount, 0);

    return { income, expense, balance: income - expense };
  }, [transactions]);

  const filteredTransactions = transactions.filter((item) => {
    if (filter === "income") return item.type === "income";
    if (filter === "expense") return item.type === "expense";
    return true;
  });

  const addTransaction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const numericAmount = Number(amount.replace(/,/g, ""));

    if (!title.trim() || !numericAmount || numericAmount <= 0) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      title: title.trim(),
      category: type === "income" ? "درآمد" : category,
      date: "همین حالا",
      amount: numericAmount,
      type,
    };

    setTransactions((current) => [newTransaction, ...current]);
    setTitle("");
    setAmount("");
    setShowForm(false);
  };

  return (
    <main className="finance-page" dir="rtl">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Tahoma, Arial, sans-serif;
          background: #f3f3ed;
        }

        button,
        input,
        select {
          font-family: inherit;
        }
      `}</style>

      <style jsx>{`
        .finance-page {
          min-height: 100vh;
          background: #f3f3ed;
          color: #24372f;
        }

        .sidebar {
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          width: 235px;
          background: #172b25;
          color: #fff;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          z-index: 5;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 8px 35px;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          background: #b8d3a9;
          color: #172b25;
          display: grid;
          place-items: center;
          font-size: 24px;
          font-weight: bold;
        }

        .brand strong {
          font-size: 19px;
          letter-spacing: -1px;
        }

        .brand small {
          display: block;
          font-size: 9px;
          color: #9caea3;
          margin-top: 5px;
          letter-spacing: 2px;
        }

        .nav-label {
          color: #758b7e;
          font-size: 10px;
          padding: 12px 12px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #a9b8ae;
          padding: 14px 13px;
          border-radius: 9px;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .nav-item.active {
          background: #2d483b;
          color: #d8e9ce;
        }

        .nav-symbol {
          width: 22px;
          text-align: center;
          font-size: 17px;
        }

        .sidebar-bottom {
          margin-top: auto;
          border-top: 1px solid #35483e;
          padding-top: 20px;
        }

        .user-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #d7c39c;
          color: #24372f;
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: bold;
        }

        .user-box strong {
          display: block;
          font-size: 11px;
        }

        .user-box small {
          color: #91a398;
          font-size: 9px;
          margin-top: 5px;
          display: block;
        }

        .main {
          margin-right: 235px;
          padding: 30px 38px 65px;
          max-width: 1550px;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 35px;
        }

        .topbar h1 {
          margin: 0;
          font-size: 23px;
          color: #21392e;
        }

        .topbar p {
          color: #929a91;
          font-size: 11px;
          margin: 9px 0 0;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .date-chip {
          background: #fff;
          border: 1px solid #e8e8df;
          padding: 12px 15px;
          border-radius: 8px;
          font-size: 11px;
          color: #65756a;
        }

        .add-btn {
          background: #244b3b;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 13px 18px;
          font-size: 11px;
          cursor: pointer;
          transition: 0.2s;
        }

        .add-btn:hover {
          background: #37674f;
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .summary-card {
          background: #fff;
          border: 1px solid #e8e8df;
          border-radius: 12px;
          padding: 22px;
          min-height: 140px;
        }

        .summary-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #8c978e;
          font-size: 11px;
        }

        .summary-icon {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          background: #edf2e9;
          color: #527d60;
          display: grid;
          place-items: center;
          font-size: 19px;
        }

        .summary-card strong {
          display: block;
          font-size: 25px;
          margin-top: 15px;
          color: #263c30;
          letter-spacing: -1px;
        }

        .summary-card strong small {
          font-size: 10px;
          font-weight: normal;
          color: #89948b;
          margin-right: 5px;
        }

        .summary-card.balance {
          background: #244b3b;
          border-color: #244b3b;
        }

        .summary-card.balance .summary-top,
        .summary-card.balance strong,
        .summary-card.balance strong small {
          color: #edf4e9;
        }

        .summary-card.balance .summary-icon {
          background: #42664e;
          color: #e3efd9;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr;
          gap: 18px;
          margin-top: 22px;
        }

        .panel {
          background: #fff;
          border: 1px solid #e8e8df;
          border-radius: 12px;
          padding: 23px;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 23px;
        }

        .panel-header h2 {
          font-size: 15px;
          margin: 0;
          color: #2c4034;
        }

        .panel-header span {
          color: #a1a69e;
          font-size: 10px;
        }

        .chart-area {
          height: 205px;
          display: flex;
          align-items: end;
          justify-content: space-around;
          gap: 13px;
          border-bottom: 1px solid #eeeeea;
          padding: 0 8px 10px;
        }

        .bar-group {
          height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: end;
          gap: 9px;
        }

        .bars {
          height: 165px;
          display: flex;
          align-items: end;
          gap: 4px;
        }

        .bar {
          width: 13px;
          border-radius: 5px 5px 2px 2px;
        }

        .bar.income {
          background: #b8d1a8;
        }

        .bar.expense {
          background: #d6b77e;
        }

        .bar-label {
          font-size: 9px;
          color: #939c92;
        }

        .chart-legend {
          display: flex;
          gap: 20px;
          margin-top: 17px;
          font-size: 10px;
          color: #879187;
        }

        .legend-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-left: 6px;
        }

        .budget-total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f5f5ef;
          border-radius: 9px;
          padding: 15px;
          margin-bottom: 22px;
        }

        .budget-total small {
          color: #8e978e;
          font-size: 10px;
        }

        .budget-total strong {
          display: block;
          font-size: 19px;
          margin-top: 7px;
        }

        .budget-circle {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: conic-gradient(#709777 0 68%, #e3e8df 68% 100%);
          display: grid;
          place-items: center;
        }

        .budget-circle span {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #f5f5ef;
          display: grid;
          place-items: center;
          font-size: 10px;
          font-weight: bold;
        }

        .category-list {
          display: grid;
          gap: 18px;
        }

        .category-row {
          display: grid;
          gap: 8px;
        }

        .category-info {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }

        .category-info span:first-child {
          color: #68766b;
        }

        .category-info span:last-child {
          color: #34483b;
          font-weight: bold;
        }

        .category-track {
          height: 6px;
          border-radius: 20px;
          background: #eff0e9;
          overflow: hidden;
        }

        .category-fill {
          height: 100%;
          border-radius: 20px;
        }

        .transactions {
          margin-top: 22px;
        }

        .filters {
          display: flex;
          gap: 7px;
        }

        .filter-btn {
          border: 1px solid #e7e9e1;
          color: #8a948b;
          background: white;
          border-radius: 6px;
          padding: 7px 11px;
          font-size: 10px;
          cursor: pointer;
        }

        .filter-btn.selected {
          background: #244b3b;
          color: white;
          border-color: #244b3b;
        }

        .table-head,
        .transaction-row {
          display: grid;
          grid-template-columns: 1.6fr 1fr 0.8fr 1fr;
          align-items: center;
          gap: 10px;
        }

        .table-head {
          padding: 12px 10px;
          color: #a0a69e;
          font-size: 10px;
          border-bottom: 1px solid #eeeeea;
        }

        .transaction-row {
          padding: 14px 10px;
          border-bottom: 1px solid #f0f0eb;
          font-size: 11px;
        }

        .transaction-name {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          color: #405347;
        }

        .transaction-icon {
          width: 33px;
          height: 33px;
          border-radius: 9px;
          background: #eef2e9;
          color: #64876a;
          display: grid;
          place-items: center;
          font-size: 15px;
        }

        .transaction-row small {
          color: #9aa197;
          font-size: 9px;
        }

        .positive {
          color: #5d936d;
          direction: ltr;
          text-align: right;
          font-weight: bold;
        }

        .negative {
          color: #bd8069;
          direction: ltr;
          text-align: right;
          font-weight: bold;
        }

        .empty {
          text-align: center;
          padding: 35px 10px;
          color: #9aa197;
          font-size: 12px;
        }

        .footer-note {
          text-align: center;
          color: #a0a69e;
          font-size: 10px;
          padding: 35px 0 0;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: #14271fcc;
          display: grid;
          place-items: center;
          padding: 20px;
          z-index: 20;
        }

        .modal {
          width: 100%;
          max-width: 420px;
          background: #fff;
          border-radius: 14px;
          padding: 25px;
          box-shadow: 0 20px 70px #0003;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 17px;
        }

        .close-btn {
          border: 0;
          background: #f1f2ed;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 17px;
        }

        .form-field {
          display: grid;
          gap: 8px;
          margin-bottom: 16px;
        }

        .form-field label {
          font-size: 11px;
          color: #68766b;
        }

        .form-field input,
        .form-field select {
          width: 100%;
          padding: 13px;
          border: 1px solid #e5e8df;
          border-radius: 8px;
          background: #fafbf8;
          outline: none;
          font-size: 12px;
          color: #34483b;
        }

        .form-field input:focus,
        .form-field select:focus {
          border-color: #719779;
        }

        .type-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 18px;
        }

        .type-switch button {
          padding: 12px;
          border: 1px solid #e5e8df;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          color: #68766b;
          font-size: 11px;
        }

        .type-switch button.active {
          background: #244b3b;
          color: white;
          border-color: #244b3b;
        }

        .submit-btn {
          width: 100%;
          border: 0;
          background: #244b3b;
          color: white;
          padding: 14px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
        }

        @media (max-width: 1050px) {
          .sidebar {
            width: 190px;
          }

          .main {
            margin-right: 190px;
            padding: 25px;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .sidebar {
            position: static;
            width: 100%;
            height: auto;
            padding: 15px 18px;
          }

          .brand {
            padding: 0;
          }

          .sidebar .nav-label,
          .sidebar .nav-item,
          .sidebar-bottom {
            display: none;
          }

          .main {
            margin-right: 0;
            padding: 22px 15px 40px;
          }

          .topbar {
            align-items: flex-start;
            gap: 15px;
            flex-direction: column;
            margin-bottom: 23px;
          }

          .top-actions {
            width: 100%;
          }

          .date-chip {
            flex: 1;
            text-align: center;
          }

          .summary-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .summary-card {
            min-height: 110px;
          }

          .summary-card strong {
            font-size: 22px;
          }

          .panel {
            padding: 16px;
          }

          .table-head,
          .transaction-row {
            grid-template-columns: 1.5fr 0.8fr 1fr;
          }

          .table-head span:nth-child(2),
          .transaction-row > small:nth-child(2) {
            display: none;
          }

          .panel-header {
            gap: 10px;
            flex-wrap: wrap;
          }

          .filters {
            flex-wrap: wrap;
          }

          .chart-area {
            gap: 5px;
          }

          .bar {
            width: 9px;
          }
        }
      `}</style>

      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">د</div>
          <div>
            <strong>دخل‌وخرج</strong>
            <small>PERSONAL FINANCE</small>
          </div>
        </div>

        <div className="nav-label">مدیریت مالی</div>
        <div className="nav-item active">
          <span className="nav-symbol">▦</span>
          داشبورد
        </div>
        <div className="nav-item">
          <span className="nav-symbol">↔</span>
          تراکنش‌ها
        </div>
        <div className="nav-item">
          <span className="nav-symbol">◉</span>
          بودجه‌بندی
        </div>
        <div className="nav-item">
          <span className="nav-symbol">▤</span>
          گزارش مالی
        </div>

        <div className="nav-label" style={{ marginTop: 24 }}>
          حساب کاربری
        </div>
        <div className="nav-item">
          <span className="nav-symbol">⚙</span>
          تنظیمات
        </div>

        <div className="sidebar-bottom">
          <div className="user-box">
            <div className="user-avatar">م</div>
            <div>
              <strong>مدیریت حساب من</strong>
              <small>حساب شخصی</small>
            </div>
          </div>
        </div>
      </aside>

      <section className="main">
        <header className="topbar">
          <div>
            <h1>داشبورد مالی</h1>
            <p>نگاهی روشن به وضعیت مالی و هزینه‌های این ماه</p>
          </div>

          <div className="top-actions">
            <div className="date-chip">مهر ۱۴۰۵ · گزارش ماهانه</div>
            <button className="add-btn" onClick={() => setShowForm(true)}>
              + ثبت تراکنش
            </button>
          </div>
        </header>

        <section className="summary-grid">
          <div className="summary-card balance">
            <div className="summary-top">
              موجودی خالص
              <div className="summary-icon">◈</div>
            </div>
            <strong>
              {money(totals.balance)}
              <small>تومان</small>
            </strong>
          </div>

          <div className="summary-card">
            <div className="summary-top">
              مجموع درآمد
              <div className="summary-icon">↗</div>
            </div>
            <strong>
              {money(totals.income)}
              <small>تومان</small>
            </strong>
          </div>

          <div className="summary-card">
            <div className="summary-top">
              مجموع هزینه
              <div className="summary-icon">↘</div>
            </div>
            <strong>
              {money(totals.expense)}
              <small>تومان</small>
            </strong>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>روند درآمد و هزینه</h2>
              <span>نمایش آزمایشی ماهانه</span>
            </div>

            <div className="chart-area">
              {[
                { month: "فروردین", a: 65, b: 35 },
                { month: "اردیبهشت", a: 85, b: 45 },
                { month: "خرداد", a: 58, b: 50 },
                { month: "تیر", a: 95, b: 55 },
                { month: "مرداد", a: 72, b: 40 },
                { month: "شهریور", a: 100, b: 62 },
                { month: "مهر", a: 88, b: 48 },
              ].map((item) => (
                <div className="bar-group" key={item.month}>
                  <div className="bars">
                    <div
                      className="bar income"
                      style={{ height: `${item.a}%` }}
                    />
                    <div
                      className="bar expense"
                      style={{ height: `${item.b}%` }}
                    />
                  </div>
                  <span className="bar-label">{item.month}</span>
                </div>
              ))}
            </div>

            <div className="chart-legend">
              <span>
                <i
                  className="legend-dot"
                  style={{ background: "#b8d1a8" }}
                />
                درآمد
              </span>
              <span>
                <i
                  className="legend-dot"
                  style={{ background: "#d6b77e" }}
                />
                هزینه
              </span>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>بودجه ماهانه</h2>
              <span>مهر ۱۴۰۵</span>
            </div>

            <div className="budget-total">
              <div>
                <small>بودجه مصرف‌شده از ۱۲ میلیون</small>
                <strong>۸,۰۰۰,۰۰۰ تومان</strong>
              </div>
              <div className="budget-circle">
                <span>۶۸٪</span>
              </div>
            </div>

            <div className="category-list">
              {categories.map((item) => (
                <div className="category-row" key={item.name}>
                  <div className="category-info">
                    <span>{item.name}</span>
                    <span>{money(item.amount)} تومان</span>
                  </div>
                  <div className="category-track">
                    <div
                      className="category-fill"
                      style={{
                        width: `${item.percent}%`,
                        background: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel transactions">
          <div className="panel-header">
            <h2>تراکنش‌های اخیر</h2>
            <div className="filters">
              {[
                { label: "همه", value: "all" },
                { label: "درآمدها", value: "income" },
                { label: "هزینه‌ها", value: "expense" },
              ].map((item) => (
                <button
                  key={item.value}
                  className={`filter-btn ${
                    filter === item.value ? "selected" : ""
                  }`}
                  onClick={() => setFilter(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="table-head">
            <span>شرح تراکنش</span>
            <span>دسته‌بندی</span>
            <span>تاریخ</span>
            <span>مبلغ</span>
          </div>

          {filteredTransactions.length === 0 ? (
            <div className="empty">تراکنشی برای نمایش وجود ندارد.</div>
          ) : (
            filteredTransactions.map((item) => (
              <div className="transaction-row" key={item.id}>
                <div className="transaction-name">
                  <div className="transaction-icon">
                    {item.type === "income" ? "↗" : "↘"}
                  </div>
                  {item.title}
                </div>
                <small>{item.category}</small>
                <small>{item.date}</small>
                <span className={item.type === "income" ? "positive" : "negative"}>
                  {item.type === "income" ? "+" : "−"}
                  {money(item.amount)}
                </span>
              </div>
            ))
          )}
        </section>

        <div className="footer-note">
          طراحی مفهومی اپلیکیشن دخل‌وخرج | بخشی از مجموعه نمونه‌کارهای Nexora
        </div>
      </section>

      {showForm && (
        <div className="modal-backdrop" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <h3>ثبت تراکنش جدید</h3>
              <button
                className="close-btn"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={addTransaction}>
              <div className="type-switch">
                <button
                  type="button"
                  className={type === "expense" ? "active" : ""}
                  onClick={() => setType("expense")}
                >
                  ثبت هزینه
                </button>
                <button
                  type="button"
                  className={type === "income" ? "active" : ""}
                  onClick={() => setType("income")}
                >
                  ثبت درآمد
                </button>
              </div>

              <div className="form-field">
                <label>عنوان تراکنش</label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="مثلاً خرید هفتگی"
                  required
                />
              </div>

              <div className="form-field">
                <label>مبلغ به تومان</label>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="مثلاً ۵۰۰۰۰۰"
                  required
                />
              </div>

              {type === "expense" && (
                <div className="form-field">
                  <label>دسته‌بندی</label>
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <option>خرید روزانه</option>
                    <option>خانه و قبوض</option>
                    <option>حمل‌ونقل</option>
                    <option>تفریح</option>
                    <option>سلامت</option>
                    <option>سایر</option>
                  </select>
                </div>
              )}

              <button className="submit-btn" type="submit">
                ذخیره تراکنش
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
