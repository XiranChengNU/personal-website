const categories = [
  {
    number: "01",
    title: "哲学思考",
    english: "Philosophy",
    description: "关于自我、技术与生活的随笔，也记录那些暂时没有答案的问题。",
    englishDescription:
      "Notes on the self, technology and everyday life — including questions that remain open.",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=88",
  },
  {
    number: "02",
    title: "画画",
    english: "Painting",
    description: "颜色、线条与不完整的练习；收集作品，也保存创作过程。",
    englishDescription:
      "Colour, line and unfinished studies — a home for both finished work and process.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=88",
  },
  {
    number: "03",
    title: "音乐评测",
    english: "Music Reviews",
    description: "从一张专辑、一场演出或一个声音出发，写下真诚的听觉感受。",
    englishDescription:
      "Honest listening notes sparked by an album, a live show or a single compelling sound.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=88",
  },
  {
    number: "04",
    title: "摄影",
    english: "Photography",
    description: "用镜头保留城市、旅途与日常生活中容易错过的一瞬。",
    englishDescription:
      "Frames from cities, journeys and the easily missed moments of ordinary life.",
    image:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1600&q=88",
  },
  {
    number: "05",
    title: "硅光工业分享",
    english: "Silicon Photonics",
    description: "把复杂的产业、技术趋势与工作观察，讲成可以读懂的故事。",
    englishDescription:
      "Making industry shifts, technical trends and field observations easier to understand.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=88",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页 / Back to home">
          MY<span>·</span>ARCHIVE
        </a>
        <nav aria-label="主导航 / Main navigation">
          <a href="#about">关于 / About</a>
          <a href="#categories">分类 / Archive</a>
          <a href="#contact">联系 / Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL ARCHIVE / 个人档案 · 2026</p>
          <h1>
            Between light,
            <br />
            sound & <em>thought.</em>
          </h1>
          <p className="hero-chinese">在光、声音与思想之间。</p>

          <div className="introduction" id="about">
            <p>
              你好，欢迎来到我的个人空间。这里既存放理性的工业观察，也保留画笔、
              镜头、音乐和日常思考留下的痕迹。
            </p>
            <p lang="en">
              Welcome to my personal space — an archive where industry insight meets
              painting, photography, music and everyday reflection.
            </p>
          </div>

          <a className="explore" href="#categories">
            开始阅读 / Explore <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-image" role="img" aria-label="夜色中的城市与灯光">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="image-caption">
            <span>ABOUT / 自我介绍</span>
            <span>PERSONAL · ONLINE</span>
          </div>
        </div>
      </section>

      <section className="category-section" id="categories">
        <div className="section-heading">
          <p>FIVE DIRECTIONS / 五个方向</p>
          <h2>
            我正在记录的事
            <span>What I’m documenting</span>
          </h2>
          <span>SELECTED CATEGORIES · 01—05</span>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.title}>
              <div className="card-image-wrap">
                <img src={category.image} alt="" className="card-image" />
                <span className="card-number">{category.number}</span>
              </div>
              <div className="card-copy">
                <div className="card-title-row">
                  <h3>{category.title}</h3>
                  <p lang="en">{category.english}</p>
                </div>
                <p>{category.description}</p>
                <p lang="en">{category.englishDescription}</p>
                <span className="card-status">
                  内容准备中 / Coming soon <b aria-hidden="true">↗</b>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <p>
          保持好奇，持续记录。
          <span>Stay curious. Keep documenting.</span>
        </p>
        <span className="contact-placeholder">联系方式 / Contact · 待补充</span>
        <span>© 2026 PERSONAL ARCHIVE</span>
      </footer>
    </main>
  );
}
