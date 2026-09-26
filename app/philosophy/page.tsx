import type { Metadata } from "next";
import { sitePath } from "../paths";
import { SiteBrand } from "../site-brand";

export const dynamic = "force-static";

const title = "哲学思考 · Xiran Cheng";
const description = "毕英杰与维特根斯坦的两段引文。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "article" },
  twitter: { card: "summary", title, description },
};

export default function PhilosophyPage() {
  return (
    <>
      <header className="site-header">
        <SiteBrand />
        <nav aria-label="主导航 / Main navigation">
          <a href={sitePath("/about/")}>关于 <span lang="en">About</span></a>
          <a href={sitePath("/philosophy/")} aria-current="page">哲学思考 <span lang="en">Philosophy</span></a>
          <a href={sitePath("/painting/")}>绘画 <span lang="en">Painting</span></a>
          <a href={sitePath("/photography/")}>摄影 <span lang="en">Photography</span></a>
          <a href={sitePath("/#work")}>档案 <span lang="en">Archive</span></a>
        </nav>
      </header>
      <main className="philosophy-page wrap">
        <figure className="action-seal">
          <div className="action-seal-label"><span>行动优先</span><span lang="en">ACTION FIRST</span></div>
          <blockquote>
            <p>“在我人生的这一阶段，哲学已完成了它的使命——让我对前方道路有了清楚的认识，虽然还不是完全透彻，却足以让我开始行动……我希望，有朝一日能重返思想的世界，去整合我通过实践赢得的洞见，但在那之前，笔必须让位于马鞍，沉思必须让位于行动。”</p>
          </blockquote>
          <figcaption>—— 毕英杰 · <a href="https://mp.weixin.qq.com/s/bYrarwnKH1jaTTgJ5NilBA" target="_blank" rel="noopener noreferrer">引文出处 ↗</a></figcaption>
        </figure>
        <header className="philosophy-heading" data-reveal="expand">
          <p className="eyebrow">PHILOSOPHY / 哲学思考</p>
          <h1>思想札记<span lang="en">Notes on philosophy.</span></h1>
        </header>

        <figure className="philosophy-quote" data-reveal="expand">
          <blockquote>
            <p lang="de">Wir fühlen, daß selbst, wenn alle möglichen wissenschaftlichen Fragen beantwortet sind, unsere Lebensprobleme noch gar nicht berührt sind.</p>
            <p>我们感到，即使所有可能的科学问题都已得到解答，我们的生活问题仍然丝毫没有被触及。</p>
          </blockquote>
          <figcaption>路德维希·维特根斯坦，《逻辑哲学论》6.52 · <a href="https://people.umass.edu/klement/tlp/tlp-hyperlinked.html" target="_blank" rel="noopener noreferrer">德文原文 ↗</a></figcaption>
        </figure>

        <a className="text-link philosophy-back" href={sitePath("/#work")}>返回档案 <span lang="en">Back to archive</span><span aria-hidden="true">↗</span></a>
      </main>
      <footer className="site-footer wrap"><span>© 2026 Xiran Cheng</span><a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
