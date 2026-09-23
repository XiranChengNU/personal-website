import type { Metadata } from "next";
import { sitePath } from "../paths";

export const dynamic = "force-static";

const title = "Unity 1 · Painting · Xiran Cheng";
const description = "Unity 1, a digital painting by Xiran Cheng, 2021.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [], type: "article" },
  twitter: { card: "summary", title, description, images: [] },
};

export default function PaintingPage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href={sitePath("/")} aria-label="Xiran Cheng 首页">Xiran Cheng</a>
        <nav aria-label="主导航 / Main navigation">
          <a href={sitePath("/about/")}>关于 <span lang="en">About</span></a>
          <a href={sitePath("/painting/")} aria-current="page">绘画 <span lang="en">Painting</span></a>
          <a href={sitePath("/#work")}>档案 <span lang="en">Archive</span></a>
        </nav>
      </header>
      <main className="painting-page wrap">
        <div className="painting-heading" data-reveal="expand">
          <p className="eyebrow">PAINTING / 绘画</p>
          <h1>Unity 1</h1>
          <p>2021 · 数字绘画 <span lang="en">Digital painting</span></p>
        </div>
        <figure className="artwork" data-reveal="expand">
          <img src={sitePath("/unity-1.jpeg")} alt="Unity 1：粉褐色背景上，绿色、蓝色、黄色与红色的宽阔弧形笔触。" width="2388" height="1668" />
          <figcaption>Unity 1 <span>© 2021 Xiran Cheng</span></figcaption>
        </figure>
        <a className="text-link painting-back" href={sitePath("/#work")}>返回档案 <span lang="en">Back to archive</span><span aria-hidden="true">↗</span></a>
      </main>
      <footer className="site-footer wrap"><span>© 2026 Xiran Cheng</span><a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
