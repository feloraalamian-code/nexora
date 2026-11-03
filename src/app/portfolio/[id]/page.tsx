
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../projects";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

.project-page {
  direction: rtl;
  min-height: 100vh;
  color: #211b35;
  background: #fff;
  font-family: 'Vazirmatn', Tahoma, sans-serif;
}

.project-page * { box-sizing: border-box; }
.project-page a { text-decoration: none; color: inherit; }

.project-container {
  width: min(1100px, calc(100% - 40px));
  margin: auto;
}

.project-nav {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0edf6;
}

.project-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 21px;
  font-weight: 900;
}

.project-logo span:first-child {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  color: white;
  border-radius: 12px;
  background: linear-gradient(145deg, #a98bf2, #7045d1);
}

.project-back {
  color: #7950d9 !important;
  font-size: 12px;
  font-weight: 800;
}

.project-content {
  padding: 65px 0 90px;
}

.project-label {
  color: #8057d4;
  font-size: 11px;
  font-weight: 900;
}

.project-content h1 {
  margin: 15px 0;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 900;
}

.project-description {
  max-width: 720px;
  color: #777187;
  font-size: 14px;
  line-height: 2.4;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 25px 0;
}

.project-meta span {
  padding: 9px 14px;
  border-radius: 9px;
  color: #7656b8;
  background: #f4effc;
  font-size: 11px;
  font-weight: 700;
}

.project-image {
  width: 100%;
  height: 460px;
  overflow: hidden;
  border-radius: 22px;
  background: #eee8fa;
}

.project-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-info {
  margin-top: 35px;
  padding: 28px;
  border: 1px solid #eee8fa;
  border-radius: 17px;
  background: #faf8ff;
}

.project-info h2 {
  margin: 0 0 12px;
  font-size: 20px;
}

.project-info p {
  margin: 0;
  color: #777187;
  font-size: 13px;
  line-height: 2.3;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.project-button {
  display: inline-flex;
  padding: 13px 20px;
  border-radius: 11px;
  color: white !important;
  background: linear-gradient(110deg, #9672e6, #7048c9);
  font-size: 12px;
  font-weight: 800;
}

.project-button.secondary {
  color: #7656b8 !important;
  border: 1px solid #e9e2f4;
  background: white;
}

@media(max-width: 600px) {
  .project-image { height: 260px; }
  .project-content { padding-top: 45px; }
  .project-container { width: calc(100% - 32px); }
}
`;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <style>{css}</style>

      <header className="project-container project-nav">
        <Link href="/" className="project-logo">
          <span>N</span>
          <span>NEXORA</span>
        </Link>

        <Link href="/portfolio" className="project-back">
          ← بازگشت به نمونه‌کارها
        </Link>
      </header>

      <section className="project-container project-content">
        <span className="project-label">
          {project.label}
        </span>

        <h1>{project.title}</h1>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.kind}</span>
          <span>پروژه {project.id}</span>
        </div>

        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-info">
          <h2>درباره این پروژه</h2>
          <p>{project.description}</p>
          <p>
            {project.kind === "مفهومی"
              ? "این پروژه یک طرح مفهومی برای نمایش ایده و توانایی‌های طراحی Nexora است."
              : "این پروژه از نمونه‌کارهای واقعی Nexora است."}
          </p>
        </div>

        <div className="project-actions">
          <Link href="/portfolio" className="project-button">
            مشاهده سایر پروژه‌ها
          </Link>

          <Link href="/#contact" className="project-button secondary">
            ارتباط با Nexora
          </Link>
        </div>
      </section>
    </main>
  );
}
