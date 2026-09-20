const categories = [
  { title: "哲学思考", english: "Philosophy", description: "关于自我、技术与生活。", translation: "On the self, technology and everyday life." },
  { title: "绘画", english: "Painting", description: "用颜色与线条记录观察。", translation: "Observations in color and line." },
  { title: "摄影", english: "Photography", description: "城市、旅途与日常的一瞬。", translation: "Moments from cities, journeys and daily life." },
  { title: "音乐评测", english: "Music Reviews", description: "从一张专辑开始，认真聆听。", translation: "Listening closely, one record at a time." },
  { title: "硅光工业", english: "Silicon Photonics", description: "关于技术与产业的学习和思考。", translation: "Notes on technology and industry." },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Xiran Cheng 首页">Xiran Cheng</a>
        <nav aria-label="主导航 / Main navigation">
          <a href="/about">关于 <span lang="en">About</span></a>
          <a href="#work">档案 <span lang="en">Archive</span></a>
        </nav>
      </header>
      <main id="top">
        <section className="hero wrap">
          <p className="eyebrow">ENGINEERING · ART · IDEAS</p>
          <h1>Xiran Cheng<span className="hero-subtitle">A space for curiosity.</span></h1>
          <div className="hero-intro">
            <p>美国东北大学电气工程博士在读。<br />在技术、艺术与思想之间，持续观察。</p>
            <p lang="en">Ph.D. student in Electrical Engineering at Northeastern University.<br />Exploring technology, art and ideas.</p>
          </div>
          <a className="text-link" href="/about">关于我 <span lang="en">About me</span><span aria-hidden="true">↗</span></a>
        </section>
        <section className="archive wrap" id="work" aria-labelledby="archive-title">
          <div className="section-heading">
            <h2 id="archive-title">关注与记录<span lang="en">The archive.</span></h2>
            <p className="section-note">持续整理中 <span lang="en">In progress</span></p>
          </div>
          <div className="archive-list">
            {categories.map((category, index) => (
              <article className="archive-row" key={category.english}>
                <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{category.title}<span lang="en">{category.english}</span></h3>
                <div className="row-description"><p>{category.description}</p><p lang="en">{category.translation}</p></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer wrap" id="contact">
        <span>© 2026 Xiran Cheng</span>
        <a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  );
}
