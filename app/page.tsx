const categories = [
  {
    number: "01",
    title: "哲学思考",
    english: "Philosophy",
    description: "关于自我、技术与生活，也关于那些暂时没有答案的问题。",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1800&q=90",
    layout: "card-wide",
  },
  {
    number: "02",
    title: "画画",
    english: "Painting",
    description: "颜色、线条，以及尚未完成的练习。",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=90",
    layout: "card-half",
  },
  {
    number: "03",
    title: "摄影",
    english: "Photography",
    description: "保留城市、旅途和日常中容易错过的一瞬。",
    image:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1400&q=90",
    layout: "card-half",
  },
  {
    number: "04",
    title: "音乐评测",
    english: "Music Reviews",
    description: "从一张专辑出发，记录真诚的听觉感受。",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=90",
    layout: "card-third",
  },
  {
    number: "05",
    title: "硅光工业",
    english: "Silicon Photonics",
    description: "把复杂的产业和技术趋势，讲成可以读懂的故事。",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90",
    layout: "card-third",
  },
  {
    number: "06",
    title: "关于我",
    english: "About",
    description: "在理性与感性之间，持续观察、创造与记录。",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90",
    layout: "card-third",
    href: "/about",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页 / Back to home">
          Personal Archive
        </a>
        <nav aria-label="主导航 / Main navigation">
          <a href="/about">关于</a>
          <a href="#work">作品</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">个人档案 · PERSONAL ARCHIVE</p>
          <h1>
            为好奇心，
            <br />
            <span>留一个空间。</span>
          </h1>
          <p className="hero-english" lang="en">
            A space for curiosity.
          </p>
          <div className="hero-intro" id="about">
            <p>艺术、思想与科技，在这里相遇。</p>
            <p lang="en">Where art, ideas and technology come together.</p>
          </div>
          <a className="primary-link" href="#work">
            浏览内容 <span lang="en">Explore</span>
          </a>
        </div>

        <figure className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2000&q=92"
            alt="夜色中的城市灯光"
          />
          <figcaption>
            <span>观察世界，也观察自己。</span>
            <span lang="en">Observe the world. Observe the self.</span>
          </figcaption>
        </figure>
      </section>

      <section className="archive" id="work">
        <div className="section-intro">
          <p>SELECTED ARCHIVE</p>
          <h2>我所关注的，构成了我。</h2>
          <span lang="en">What I pay attention to becomes part of who I am.</span>
        </div>

        <div className="archive-grid">
          {categories.map((category) => (
            <article className={`archive-card ${category.layout}`} key={category.number}>
              <img src={category.image} alt="" loading="lazy" />
              <div className="card-shade" />
              <div className="card-topline">
                <span>{category.number}</span>
                <span>{category.href ? "VIEW PROFILE" : "COMING SOON"}</span>
              </div>
              <div className="card-copy">
                <p lang="en">{category.english}</p>
                <h3>{category.title}</h3>
                <span>{category.description}</span>
              </div>
              {category.href ? (
                <a
                  className="card-link-overlay"
                  href={category.href}
                  aria-label="查看程熙然的个人介绍 / View Xiran Cheng's profile"
                />
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div>
          <p>继续好奇。</p>
          <span lang="en">Stay curious.</span>
        </div>
        <p className="contact">联系方式将在这里更新 · Contact coming soon</p>
        <p className="copyright">© 2026 Personal Archive</p>
      </footer>
    </main>
  );
}
