import type { Metadata } from "next";
import { sitePath } from "../paths";
import { SiteBrand } from "../site-brand";

export const dynamic = "force-static";

const title = "再宗教化 · 哲学思考 · Xiran Cheng";
const description = "关于灵性体验、消费主义与私人宗教的中英双语札记。";

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
          <a href={sitePath("/painting/")}>绘画 <span lang="en">Painting</span></a>
          <a href={sitePath("/photography/")}>摄影 <span lang="en">Photography</span></a>
          <a href={sitePath("/#work")}>档案 <span lang="en">Archive</span></a>
        </nav>
      </header>
      <main className="philosophy-page wrap">
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

        <article className="philosophy-essay" aria-labelledby="essay-title">
          <header className="essay-heading" data-reveal="expand">
            <p className="eyebrow">01 / ESSAY</p>
            <h2 id="essay-title">再宗教化<span lang="en">Re-Sacralization</span></h2>
          </header>
          <section className="essay-language" lang="zh-CN" aria-labelledby="essay-zh" data-reveal="expand">
            <h3 id="essay-zh">中文版 <span lang="en">Chinese</span></h3>
            <p>人依然追求灵性体验，大脑也渴望近乎“高潮”的超验感受。这或许是思考的诅咒。信仰不会凭空消失。科学为世界祛魅之后，人们或许又需要以另一种方式复魅：重新认识世界，也重新理解自我。然而，这条路很容易滑向非理性。再加上资产阶级革命带来的私有化影响，古典宗教的超验性逐渐被艺术、符号与消费主义替代。宗教化因此转向经验化、私人化，私人的宗教由此诞生。</p>
            <p>因此，一条可能的进路，是创造属于自己的宗教。它以相信为起点，不依赖证据，也不容置疑。面对超验性的狂热与集体无意识的狂热，我们可以试着将它们拆解为私人领域中独一无二的热情。任何能让人触及超验感的事物，都可能成为寄托：偶像、二次元、绘画、音乐、游戏、哲学、故事、电影，以及其他消费品。</p>
            <p>当代的主流宗教，或许已是消费主义的宗教、中产阶级的宗教。它向人许诺希望，为不确定的生活搭建确定的意义。</p>
            <p>也许，我们可以尝试建立自己的私人宗教。它不必传教，却必须由自己亲手建构，无论采用什么方式。这个过程可能漫长而痛苦。如果目的是寻找意义，就不要把游戏或任何转移思考的方式当作逃避，也不要陷入狄奥尼索斯式的狂欢。那种狂欢可以持续一生；而思考带来的痛苦，或许是重生无法绕过的一段路。</p>
          </section>
          <section className="essay-language essay-language-en" lang="en" aria-labelledby="essay-en" data-reveal="expand">
            <h3 id="essay-en">English version</h3>
            <p>We still seek spiritual experience. The mind longs for a transcendent intensity that feels almost like a climax. Perhaps this is the curse of thought. Faith does not simply disappear. After science disenchants the world, we may seek another way to enchant it again: to see the world anew and to understand ourselves anew. Yet this path can easily slip into irrationality. Alongside the privatizing force of the bourgeois revolution, the transcendence once offered by classical religion has gradually given way to art, symbols, and consumerism. Religion thus becomes experiential and private, and a personal religion emerges.</p>
            <p>One possible path, then, is to create a religion of one’s own. It begins with belief, requires no proof, and resists doubt. A collective, unconscious fervor for transcendence might be broken down into a singular passion within one’s private life. Anything that evokes a sense of the transcendent could become its focus: idols, fictional worlds, painting, music, games, philosophy, stories, films, and other things we consume.</p>
            <p>Perhaps the dominant religion of our time is consumerism, a religion of the middle class. It promises hope and constructs a definite meaning for an uncertain life.</p>
            <p>We might instead try to build a personal religion. It need not be preached, but it must be made by us, whatever form it takes. The process may be long and painful. If we are searching for meaning, we should not use games—or any other distraction from thought—as an escape, nor lose ourselves in Dionysian frenzy. Such frenzy could last a lifetime. The pain of thinking, however, may be a passage we cannot avoid on the way to being born anew.</p>
          </section>
        </article>
        <a className="text-link philosophy-back" href={sitePath("/#work")}>返回档案 <span lang="en">Back to archive</span><span aria-hidden="true">↗</span></a>
      </main>
      <footer className="site-footer wrap"><span>© 2026 Xiran Cheng</span><a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
