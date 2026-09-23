import type { Metadata } from "next";
import { sitePath } from "../paths";

export const dynamic = "force-static";

const title = "Unity · Painting · Xiran Cheng";
const description = "Unity 1–5, a series of digital paintings by Xiran Cheng from 2021.";

const paintings = [
  {
    title: "Unity 1",
    image: "/unity-1.jpeg",
    width: 2388,
    height: 1668,
    alt: "粉褐色背景上，绿色、蓝色、黄色与红色的宽阔弧形笔触。",
  },
  {
    title: "Unity 2",
    image: "/unity-2.jpeg",
    width: 2048,
    height: 2048,
    alt: "淡粉色背景上，紫色、蓝色、绿色与橘色笔触交叠。",
  },
  {
    title: "Unity 3",
    image: "/unity-3.jpeg",
    width: 2048,
    height: 2048,
    alt: "黑色背景上，荧亮彩色笔触被一道深色斜线贯穿。",
  },
  {
    title: "Unity 4",
    image: "/unity-4.jpeg",
    width: 2048,
    height: 2048,
    alt: "绿色、蓝色与棕色笔触之间，一道白色斜线穿过画面。",
  },
  {
    title: "Unity 5",
    image: "/unity-5.jpeg",
    width: 2048,
    height: 2048,
    alt: "柔和的粉紫与暖褐色笔触旋向深色中心。",
  },
];

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
          <h1>Unity</h1>
          <p>五幅绘画 · 2021 <span lang="en">Five digital paintings</span></p>
        </div>
        <div className="painting-gallery">
          {paintings.map((painting, index) => (
            <figure className={`artwork${index === 0 ? " artwork-featured" : ""}`} data-reveal="expand" key={painting.title}>
              <a href={sitePath(painting.image)} aria-label={`查看 ${painting.title} 原图 / View full image`}>
                <img src={sitePath(painting.image)} alt={`${painting.title}：${painting.alt}`} width={painting.width} height={painting.height} loading={index === 0 ? "eager" : "lazy"} />
              </a>
              <figcaption><span>{painting.title}</span><span>2021 · Digital painting</span></figcaption>
            </figure>
          ))}
        </div>
        <a className="text-link painting-back" href={sitePath("/#work")}>返回档案 <span lang="en">Back to archive</span><span aria-hidden="true">↗</span></a>
      </main>
      <footer className="site-footer wrap"><span>© 2026 Xiran Cheng</span><a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
