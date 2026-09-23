import { sitePath } from "./paths";

export function SiteBrand() {
  return (
    <a className="brand" href={sitePath("/")} aria-label="Xiran Cheng 首页">
      <span className="brand-mark" aria-hidden="true">
        <img src={sitePath("/personal-mark.png")} alt="" width="1254" height="1254" />
      </span>
      <span>Xiran Cheng</span>
    </a>
  );
}
