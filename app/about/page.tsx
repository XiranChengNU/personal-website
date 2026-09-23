import type { Metadata } from "next";
import { sitePath } from "../paths";

export const dynamic = "force-static";

const title = "Xiran Cheng · About";
const description = "Northeastern University EE 博士在读。北京八中、北京工业大学、UC Davis 与 Northeastern University 的教育经历。";
export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, images: [], type: "profile" },
  twitter: { card: "summary", title, description, images: [] },
};

const education = [
  {
    school: "北京市第八中学",
    english: "Beijing No. 8 High School",
    degree: "高中",
    degreeEnglish: "High school",
    period: "2017 — 2020",
    image: sitePath("/education/beijing-no8-logo.png"),
    mark: "mark-no8",
    current: false,
  },
  {
    school: "北京工业大学",
    english: "Beijing University of Technology",
    degree: "应用物理 · 本科",
    degreeEnglish: "Bachelor’s · Applied Physics",
    period: "2020 — 2024",
    image: sitePath("/education/bjut-seal.png"),
    mark: "",
    current: false,
  },
  {
    school: "加州大学戴维斯分校",
    english: "University of California, Davis",
    degree: "电气与计算机工程 · 硕士",
    degreeEnglish: "Master’s · Electrical and Computer Engineering",
    period: "2024 — 2026",
    image: sitePath("/education/ucdavis-wordmark.gif"),
    mark: "mark-ucdavis",
    current: false,
  },
  {
    school: "美国东北大学",
    english: "Northeastern University",
    degree: "电气工程 · 博士在读",
    degreeEnglish: "Ph.D. student · Electrical Engineering",
    period: "2026.09 —",
    image: sitePath("/education/northeastern-monogram.png"),
    mark: "mark-neu",
    current: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href={sitePath("/")} aria-label="Xiran Cheng 首页">Xiran Cheng</a>
        <nav aria-label="主导航 / Main navigation">
          <a href={sitePath("/about/")} aria-current="page">关于 <span lang="en">About</span></a>
          <a href={sitePath("/painting/")}>绘画 <span lang="en">Painting</span></a>
          <a href={sitePath("/photography/")}>摄影 <span lang="en">Photography</span></a>
          <a href={sitePath("/#work")}>档案 <span lang="en">Archive</span></a>
        </nav>
      </header>
      <main>
        <section className="profile-hero wrap">
          <p className="eyebrow" data-reveal>ABOUT / 关于</p>
          <h1 data-reveal="expand">Xiran Cheng</h1>
          <p className="profile-role" data-reveal>Electrical Engineering. <span>Northeastern University · 博士在读 / Ph.D. student</span></p>
          <div className="profile-copy" data-reveal>
            <p>从应用物理到电气工程，我持续探索技术，也用绘画、摄影、音乐与哲学拓展观察世界的方式。</p>
            <p lang="en">From applied physics to electrical engineering, I explore technology alongside painting, photography, music and philosophy.</p>
          </div>
        </section>
        <section className="education wrap" aria-labelledby="education-title">
          <div className="section-heading" data-reveal="expand">
            <h2 id="education-title">教育经历<span lang="en">Education.</span></h2>
          </div>
          <ol className="education-list">
            {education.map((item) => (
              <li className="education-item" key={item.english} data-reveal="expand">
                <div className={`school-mark ${item.mark}`}>
                  {item.mark === "mark-no8" ? (
                    <span className="no8-emblem"><img src={item.image} alt="北京市第八中学校徽" width="300" height="70" /></span>
                  ) : (
                    <img src={item.image} alt={`${item.school} / ${item.english} 校方标志`} width="88" height="88" />
                  )}
                </div>
                <div>
                  <h3 className="school-name">{item.school}</h3>
                  <p className="school-english" lang="en">{item.english}</p>
                  <p className="school-degree">{item.degree}<br /><span lang="en">{item.degreeEnglish}</span></p>
                </div>
                {(item.period || item.current) && <div className="school-period">{item.period}{item.current && <span className="current">至今 · Present</span>}</div>}
              </li>
            ))}
          </ol>
        </section>
        <section className="profile-interests wrap" aria-labelledby="interests-title">
          <div className="section-heading" data-reveal="expand"><h2 id="interests-title">课堂之外<span lang="en">Beyond engineering.</span></h2></div>
          <p className="interest-inline" data-reveal>哲学思考、绘画、摄影、音乐评测，以及硅光工业分享。</p>
          <p className="interest-inline" lang="en" data-reveal>Philosophy, painting, photography, music reviews and notes on silicon photonics.</p>
          <a className="text-link" href={sitePath("/#work")} data-reveal>浏览档案 <span lang="en">Explore the archive</span><span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="site-footer wrap"><span>© 2026 Xiran Cheng</span><a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
