import type { Metadata } from "next";

const title = "程熙然 · Xiran Cheng";
const description =
  "应用物理本科生，从北京八中到 Northeastern University。Applied Physics, art and technology.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [], type: "profile" },
  twitter: { card: "summary", title, description, images: [] },
};

const interests = [
  ["硅光", "Silicon Photonics"],
  ["哲学", "Philosophy"],
  ["绘画", "Painting"],
  ["摄影", "Photography"],
  ["音乐", "Music"],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="返回首页 / Back to home">
          Personal Archive
        </a>
        <nav aria-label="主导航 / Main navigation">
          <a aria-current="page" href="/about">关于</a>
          <a href="/#work">作品</a>
          <a href="/#contact">联系</a>
        </nav>
      </header>

      <section className="about-hero">
        <p className="eyebrow">ABOUT / 关于</p>
        <h1>程熙然<span lang="en">Xiran Cheng</span></h1>
        <div className="about-intro">
          <p>
            我关注光如何成为技术，也关注思想、图像与声音如何成为表达。
            2026 年 9 月起，我将在 Northeastern University 开始应用物理本科学习。
          </p>
          <p lang="en">
            I explore how light becomes technology—and how ideas, images and sound
            become expression. I will begin my undergraduate studies in Applied
            Physics at Northeastern University in September 2026.
          </p>
        </div>
        <div className="identity-line">
          <span>应用物理本科</span>
          <span lang="en">B.S. in Applied Physics</span>
          <span>Boston, MA</span>
        </div>
      </section>

      <section className="education-section" aria-labelledby="education-title">
        <div className="about-section-heading">
          <p>EDUCATION / 教育经历</p>
          <h2 id="education-title">从北京，到波士顿。</h2>
          <span lang="en">From Beijing to Boston.</span>
        </div>

        <div className="education-path">
          <article className="education-card">
            <div className="school-mark school-mark-no8">
              <img src="/education/beijing-no8-logo.png" alt="北京市第八中学校徽与校名" />
            </div>
            <div className="education-copy">
              <p className="education-date">2017 — 2020</p>
              <h3>北京市第八中学</h3>
              <p lang="en">Beijing No. 8 High School</p>
              <span>Beijing, China</span>
            </div>
          </article>

          <div className="education-connector" aria-hidden="true"><span /></div>

          <article className="education-card education-card-neu">
            <div className="school-mark school-mark-neu">
              <img src="/education/northeastern-monogram.png" alt="Northeastern University 红色 N 标志" />
            </div>
            <div className="education-copy">
              <p className="education-date">STARTING SEP 2026</p>
              <h3>Northeastern University</h3>
              <p>应用物理本科 · B.S. in Applied Physics</p>
              <span>Boston, Massachusetts</span>
            </div>
          </article>
        </div>
      </section>

      <section className="interests-section" aria-labelledby="interests-title">
        <div>
          <p className="eyebrow">INTERESTS / 关注领域</p>
          <h2 id="interests-title">理性与感性，都是理解世界的方法。</h2>
          <p lang="en">Reason and sensibility are both ways of understanding the world.</p>
        </div>
        <ul className="interest-list">
          {interests.map(([chinese, english], index) => (
            <li key={english}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{chinese}</strong>
              <em lang="en">{english}</em>
            </li>
          ))}
        </ul>
      </section>

      <footer className="about-footer">
        <div><p>保持好奇，也保持诚实。</p><span lang="en">Stay curious. Stay honest.</span></div>
        <a className="text-link" href="/">返回档案 <span lang="en">Back to archive ↗</span></a>
        <p className="copyright">© 2026 Xiran Cheng</p>
      </footer>
    </main>
  );
}
