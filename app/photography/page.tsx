import type { Metadata } from "next";
import { sitePath } from "../paths";
import { SiteBrand } from "../site-brand";

export const dynamic = "force-static";

const title = "Photography · Xiran Cheng";
const description = "A photograph at Apple Park Visitor Center, taken November 2, 2024.";
const photo = sitePath("/apple-park-visitor-center.jpeg");
const photoAlt = "Apple Park Visitor Center 的玻璃外墙与一张店面整修告示，映出蓝色天空和树影。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [], type: "article" },
  twitter: { card: "summary", title, description, images: [] },
};

export default function PhotographyPage() {
  return (
    <>
      <header className="site-header">
        <SiteBrand />
        <nav aria-label="主导航 / Main navigation">
          <a href={sitePath("/about/")}>关于 <span lang="en">About</span></a>
          <a href={sitePath("/philosophy/")}>哲学思考 <span lang="en">Philosophy</span></a>
          <a href={sitePath("/painting/")}>绘画 <span lang="en">Painting</span></a>
          <a href={sitePath("/photography/")} aria-current="page">摄影 <span lang="en">Photography</span></a>
          <a href={sitePath("/#work")}>档案 <span lang="en">Archive</span></a>
        </nav>
      </header>
      <main className="photography-page wrap">
        <div className="photography-heading" data-reveal="expand">
          <p className="eyebrow">PHOTOGRAPHY / 摄影</p>
          <h1>Photography.</h1>
          <p>Apple Park Visitor Center · 2024</p>
        </div>
        <div className="photo-toolbar">
          <span>01 / 01</span>
          <button type="button" id="photo-info-toggle" className="photo-info-toggle" aria-controls="photo-info-panel" aria-expanded="false">
            <span aria-hidden="true" className="info-glyph">i</span> Information <span lang="zh-CN">/ 拍摄信息</span>
          </button>
        </div>
        <figure className="photograph" data-reveal="expand">
          <div className="photo-stage">
            <button type="button" className="photo-zoom" id="photo-zoom" aria-label="放大照片 / Enlarge photograph">
              <img src={photo} alt={photoAlt} width="3000" height="2000" />
            </button>
            <aside className="photo-info-panel" id="photo-info-panel" aria-label="拍摄参数 / Photo information" hidden>
              <div className="photo-info-head">
                <h2>Information<span>拍摄信息</span></h2>
                <button type="button" id="photo-info-close" aria-label="关闭拍摄信息 / Close information">×</button>
              </div>
              <dl>
                <div><dt>拍摄时间 <span>Date & time</span></dt><dd>2024.11.02 · 2:45 PM</dd></div>
                <div><dt>地点 <span>Location</span></dt><dd>Apple Park Visitor Center</dd></div>
                <div><dt>相机 <span>Camera</span></dt><dd>FUJIFILM X-T4</dd></div>
                <div><dt>镜头 <span>Lens</span></dt><dd>XF16-80mmF4 R OIS WR</dd></div>
                <div><dt>焦距 <span>Focal length</span></dt><dd>120 mm</dd></div>
                <div><dt>曝光 <span>Exposure</span></dt><dd>ISO 160 · +0.3 EV · f/4 · 1/1600 s</dd></div>
                <div><dt>原片 <span>Original file</span></dt><dd>JPEG · 6240 × 4160 · 26 MP</dd></div>
              </dl>
            </aside>
          </div>
          <figcaption><span>Apple Park Visitor Center</span><span>November 2, 2024 · Xiran Cheng</span></figcaption>
        </figure>
        <dialog className="photo-lightbox" id="photo-lightbox" aria-label="放大的照片 / Enlarged photograph">
          <button type="button" id="photo-lightbox-close" className="photo-lightbox-close" aria-label="关闭大图 / Close enlarged photograph">×</button>
          <img src={photo} alt={photoAlt} width="3000" height="2000" />
        </dialog>
        <a className="text-link photography-back" href={sitePath("/#work")}>返回档案 <span lang="en">Back to archive</span><span aria-hidden="true">↗</span></a>
        <script src={sitePath("/photography.js")} defer />
      </main>
      <footer className="site-footer wrap"><span>© 2026 Xiran Cheng</span><a href="https://github.com/XiranChengNU">GitHub <span aria-hidden="true">↗</span></a></footer>
    </>
  );
}
