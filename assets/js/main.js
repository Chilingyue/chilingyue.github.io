/* ============================================================
 * 作品集交互：数据渲染 / 语言切换 / 主题切换 / 灯箱 / 滚动动画
 * ============================================================ */

/* ---------- 全局状态 ---------- */
const state = {
  lang: localStorage.getItem("portfolio-lang") ||
    (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"),
  theme: localStorage.getItem("portfolio-theme") || "auto",
};

/* ---------- 工具函数 ---------- */
function t(bilingual) {
  return (bilingual && (bilingual[state.lang] || bilingual.en)) || "";
}
function h(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}
function imgPath(project, file) {
  return `projects/${project.id}/images/${file}`;
}
function videoPath(project, file) {
  return `projects/${project.id}/videos/${file}`;
}
function docPath(project, file) {
  return `projects/${project.id}/docs/${file}`;
}

/* ---------- 主题（SVG 图标，不依赖 emoji 字体）---------- */
const THEME_ICONS = {
  light:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7"/></svg>',
  dark:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.4 13.8A8.4 8.4 0 0 1 10.2 3.6a8.4 8.4 0 1 0 10.2 10.2z"/></svg>',
  auto:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8.5 20h7M12 16.5V20"/></svg>',
};
function applyTheme() {
  if (state.theme === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", state.theme);
  }
  const btn = document.getElementById("theme-btn");
  if (btn) btn.innerHTML = THEME_ICONS[state.theme];
}
function toggleTheme() {
  const order = ["auto", "light", "dark"];
  state.theme = order[(order.indexOf(state.theme) + 1) % order.length];
  localStorage.setItem("portfolio-theme", state.theme);
  applyTheme();
}

/* ---------- 语言 ---------- */
function applyLang() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  const btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = state.lang === "zh" ? "EN" : "中";
}
function toggleLang() {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("portfolio-lang", state.lang);
  applyLang();
  rerender();
}

/* ---------- 公共导航 ---------- */
function buildNav() {
  const nav = h("nav", "nav");
  const inner = h("div", "nav-inner");
  const brand = h("a", "nav-brand", t(SITE_DATA.owner.name));
  brand.href = "index.html";
  const spacer = h("div", "nav-spacer");
  const langBtn = h("button", "icon-btn lang-btn");
  langBtn.id = "lang-btn";
  langBtn.textContent = state.lang === "zh" ? "EN" : "中";
  langBtn.addEventListener("click", toggleLang);
  const themeBtn = h("button", "icon-btn");
  themeBtn.id = "theme-btn";
  themeBtn.innerHTML = THEME_ICONS[state.theme];
  themeBtn.addEventListener("click", toggleTheme);
  inner.append(brand, spacer, langBtn, themeBtn);
  nav.appendChild(inner);
  return nav;
}

/* ---------- 页脚 ---------- */
function buildFooter() {
  const footer = h("footer", "footer");
  const inner = h("div", "container footer-inner");
  const copy = h(
    "span",
    "",
    `© ${new Date().getFullYear()} ${t(SITE_DATA.owner.name)}`
  );
  const gh = SITE_DATA.owner.contacts.find((c) => c.type === "GitHub");
  const link = h("a", "", gh ? gh.url.replace("https://", "") : "");
  if (gh) link.href = gh.url;
  inner.append(copy, link);
  footer.appendChild(inner);
  return footer;
}

/* ============================================================
 * 首页
 * ============================================================ */
function renderHome() {
  document.title = `${t(SITE_DATA.owner.name)} · Portfolio`;
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.append(buildNav());

  /* Hero */
  const hero = h("header", "hero");
  const heroBox = h("div", "container");
  heroBox.append(
    h("h1", "", t(SITE_DATA.owner.name)),
    h("p", "role", t(SITE_DATA.owner.role)),
    h("p", "bio", t(SITE_DATA.owner.bio))
  );
  const contactRow = h("div", "contact-row");
  SITE_DATA.owner.contacts.forEach((c) => {
    const btn = h("a", "btn btn-ghost", c.type);
    btn.href = c.url;
    if (c.url.startsWith("http")) btn.target = "_blank";
    contactRow.appendChild(btn);
  });
  heroBox.appendChild(contactRow);
  hero.appendChild(heroBox);

  /* 项目列表 */
  const section = h("section", "section");
  const box = h("div", "container");
  const head = h("div", "section-head");
  head.append(
    h("h2", "", state.lang === "zh" ? "项目" : "Projects"),
    h("p", "", state.lang === "zh" ? "课程、科研与工程实践成果" : "Coursework, research and engineering work")
  );
  const grid = h("div", "project-grid");
  SITE_DATA.projects.forEach((p) => grid.appendChild(projectCard(p)));
  box.append(head, grid);
  section.appendChild(box);

  root.append(hero, buildAboutSection(), section, buildFooter());
}

/* ---------- 首页：关于我（教育 / 技术栈 / 荣誉）---------- */
function buildAboutSection() {
  const zh = state.lang === "zh";
  const owner = SITE_DATA.owner;
  const section = h("section", "section");
  const box = h("div", "container");

  const head = h("div", "section-head");
  head.append(
    h("h2", "", zh ? "关于我" : "About"),
    h("p", "", zh ? "教育背景、技术栈与荣誉" : "Education, skills and honors")
  );
  box.appendChild(head);

  /* 教育 */
  if (owner.education && owner.education.length) {
    const block = h("div", "about-block");
    block.appendChild(h("h3", "about-title", zh ? "教育" : "Education"));
    const list = h("div", "edu-list");
    owner.education.forEach((e) => {
      const item = h("div", "edu-item");
      const main = h("div", "edu-main");
      main.append(
        h("div", "edu-school", t(e.school)),
        h("div", "edu-degree", t(e.degree))
      );
      const side = h("div", "edu-side");
      side.append(
        h("span", "edu-period", e.period),
        h("span", "edu-note", t(e.note))
      );
      item.append(main, side);
      list.appendChild(item);
    });
    block.appendChild(list);
    box.appendChild(block);
  }

  /* 技术栈 */
  if (owner.skills && owner.skills.length) {
    const block = h("div", "about-block");
    block.appendChild(h("h3", "about-title", zh ? "技术栈" : "Skills"));
    const groups = h("div", "skill-groups");
    owner.skills.forEach((g) => {
      const group = h("div", "skill-group");
      group.appendChild(h("div", "skill-label", t(g.label)));
      const tags = h("div", "tags");
      g.items.forEach((i) => tags.appendChild(h("span", "tag", i)));
      group.appendChild(tags);
      groups.appendChild(group);
    });
    block.appendChild(groups);
    box.appendChild(block);
  }

  /* 荣誉 */
  if (owner.awards && owner.awards.length) {
    const block = h("div", "about-block");
    block.appendChild(h("h3", "about-title", zh ? "荣誉" : "Honors"));
    const chips = h("div", "award-chips");
    owner.awards.forEach((a) => {
      const chip = h("span", "award-chip");
      chip.append(
        h("span", "award-cat", t(a.category)),
        h("span", "award-title", t(a.title))
      );
      chips.appendChild(chip);
    });
    block.appendChild(chips);
    box.appendChild(block);
  }

  section.appendChild(box);
  return section;
}

function projectCard(p) {
  const card = h("a", "project-card");
  if (p.externalUrl) {
    card.href = p.externalUrl;
    card.target = "_blank";
    card.rel = "noopener";
  } else {
    card.href = `project.html?id=${p.id}`;
  }
  const cover = h("div", "project-cover");
  const img = h("img");
  img.src = p.cover;
  img.alt = t(p.title);
  img.loading = "lazy";
  cover.appendChild(img);

  const body = h("div", "project-body");
  body.append(
    h("span", "project-period", `${p.period} · ${t(p.subtitle)}`),
    h("h3", "", t(p.title))
  );
  body.appendChild(h("p", "card-summary", t(p.summary)));
  const tags = h("div", "tags");
  p.tags.slice(0, 5).forEach((tag) => tags.appendChild(h("span", "tag", tag)));
  body.appendChild(tags);
  const moreLabel = p.externalUrl
    ? (state.lang === "zh" ? "打开页面" : "Open Page")
    : (state.lang === "zh" ? "查看项目" : "View Project");
  body.appendChild(h("span", "card-more", moreLabel + " →"));
  card.append(cover, body);
  return card;
}

/* ============================================================
 * 项目详情页
 * ============================================================ */
const LABELS = {
  overview: { zh: "项目概览", en: "Overview" },
  metrics: { zh: "关键指标", en: "Key Metrics" },
  background: { zh: "项目背景", en: "Background" },
  contributions: { zh: "我的工作与贡献", en: "My Contributions" },
  goals: { zh: "项目目标", en: "Goals" },
  workflow: { zh: "工作流程", en: "Workflow" },
  innovations: { zh: "特色与创新点", en: "Innovations" },
  gallery: { zh: "图片画廊", en: "Gallery" },
  videos: { zh: "视频演示", en: "Videos" },
  docs: { zh: "过程文档", en: "Process Documents" },
  issues: { zh: "问题与解决", en: "Issues & Solutions" },
  references: { zh: "参考资料", en: "References" },
};

function sectionWrap(labelKey, contentNode) {
  const section = h("section", "section reveal toc-target");
  section.id = "sec-" + labelKey;
  const box = h("div", "container");
  box.appendChild(h("div", "section-head", `<h2>${t(LABELS[labelKey])}</h2>`));
  box.appendChild(contentNode);
  section.appendChild(box);
  return section;
}

function renderDetail(projectId) {
  const p = SITE_DATA.projects.find((x) => x.id === projectId);
  if (!p) {
    document.getElementById("app").innerHTML =
      '<div class="container" style="padding:80px 24px"><h2>Project not found</h2><a class="btn btn-primary" href="index.html">← Home</a></div>';
    return;
  }
  document.title = `${t(p.title)} · ${t(SITE_DATA.owner.name)}`;
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.append(buildNav(), detailHero(p));

  /* 指标 */
  if (p.metrics) {
    const row = h("div", "metric-row");
    p.metrics.forEach((m) => {
      const card = h("div", "metric");
      card.append(h("div", "value", m.value), h("div", "label", t(m.label)));
      row.appendChild(card);
    });
    root.appendChild(sectionWrap("metrics", row));
  }

  /* 背景 */
  root.appendChild(
    sectionWrap("background", h("div", "prose", `<p>${t(p.background)}</p>`))
  );

  /* 贡献 */
  if (p.contributions) {
    const list = h("div", "contrib-list");
    p.contributions.forEach((c) => list.appendChild(h("div", "contrib-item", t(c))));
    root.appendChild(sectionWrap("contributions", list));
  }

  /* 目标 */
  const goalList = h("ul", "list-card");
  p.goals.forEach((g) => goalList.appendChild(h("li", "", t(g))));
  root.appendChild(sectionWrap("goals", goalList));

  /* 工作流程 */
  const flow = h("div", "flow-grid");
  p.workflow.forEach((w) => {
    const item = h("div", "flow-item");
    item.append(
      h("div", "num", w.step),
      h("h4", "", t(w.title)),
      h("p", "", t(w.desc))
    );
    flow.appendChild(item);
  });
  root.appendChild(sectionWrap("workflow", flow));

  /* 创新点 */
  const innoList = h("ul", "list-card");
  p.innovations.forEach((i) => innoList.appendChild(h("li", "", t(i))));
  root.appendChild(sectionWrap("innovations", innoList));

  /* 画廊 */
  const galleryWrap = h("div", "");
  p.gallery.forEach((group) => {
    const g = h("div", "gallery-group");
    g.appendChild(h("h3", "", t(group.label)));
    const grid = h("div", "gallery-grid");
    const slides = group.images.map((im) => ({
      src: imgPath(p, im.file),
      caption: t(im.caption),
    }));
    group.images.forEach((im, idx) => {
      const cell = h("figure", "gallery-cell");
      const tw = h("div", "thumb-wrap");
      const img = h("img");
      img.src = imgPath(p, "thumbs/" + im.file);
      img.alt = t(im.caption);
      img.loading = "lazy";
      tw.appendChild(img);
      cell.append(tw, h("figcaption", "", t(im.caption)));
      cell.addEventListener("click", () => openLightbox(slides, idx));
      grid.appendChild(cell);
    });
    g.appendChild(grid);
    galleryWrap.appendChild(g);
  });
  root.appendChild(sectionWrap("gallery", galleryWrap));

  /* 视频 */
  const videoGrid = h("div", "video-grid");
  p.videos.forEach((v) => {
    const card = h("div", "video-card");
    const video = h("video");
    video.controls = true;
    video.preload = "none";
    video.poster = videoPath(p, v.poster);
    const source = h("source");
    source.src = videoPath(p, v.file);
    source.type = "video/mp4";
    video.appendChild(source);
    const info = h("div", "video-info");
    info.append(
      h("h4", "", `${t(v.title)}<span class="dur">${v.duration}</span>`),
      h("p", "", t(v.desc))
    );
    card.append(video, info);
    videoGrid.appendChild(card);
  });
  root.appendChild(sectionWrap("videos", videoGrid));

  /* 文档 */
  const docGrid = h("div", "doc-grid");
  p.docs.forEach((d) => {
    const card = h("div", "doc-card");
    card.append(h("h4", "", t(d.title)), h("p", "note", t(d.note)));
    const actions = h("div", "doc-actions");
    const preview = h("a", "btn btn-primary", state.lang === "zh" ? "预览" : "Preview");
    preview.href = docPath(p, d.pdf);
    preview.target = "_blank";
    const download = h("a", "btn btn-ghost", state.lang === "zh" ? "下载 PPTX" : "PPTX");
    download.href = docPath(p, d.pptx);
    download.download = "";
    actions.append(preview, download);
    card.appendChild(actions);
    docGrid.appendChild(card);
  });
  root.appendChild(sectionWrap("docs", docGrid));

  /* 问题 */
  const issueList = h("div", "issue-list");
  p.issues.forEach((is) => {
    const card = h("div", "issue-card");
    const iw = h("div", "issue-img-wrap");
    const img = h("img");
    img.src = imgPath(p, is.img);
    img.alt = t(is.title);
    img.loading = "lazy";
    img.addEventListener("click", () =>
      openLightbox([{ src: imgPath(p, is.img), caption: t(is.title) }], 0)
    );
    iw.appendChild(img);
    const body = h("div", "issue-body");
    body.appendChild(h("h4", "", t(is.title)));
    const sym = h("div", "issue-row",
      `<span class="k k-sym">${state.lang === "zh" ? "现象" : "Symptom"}</span><span>${t(is.symptom)}</span>`);
    const sol = h("div", "issue-row",
      `<span class="k k-sol">${state.lang === "zh" ? "解决" : "Solution"}</span><span>${t(is.solution)}</span>`);
    body.append(sym, sol);
    if (is.links && is.links.length) {
      const links = h("div", "issue-links");
      is.links.forEach((url) => {
        const a = h("a", "", url);
        a.href = url;
        a.target = "_blank";
        links.appendChild(a);
      });
      body.appendChild(links);
    }
    card.append(iw, body);
    issueList.appendChild(card);
  });
  root.appendChild(sectionWrap("issues", issueList));

  /* 参考资料 */
  const refList = h("div", "ref-list");
  p.references.forEach((r) => {
    const item = h("div", "ref-item");
    item.appendChild(h("span", "ref-title", t(r.title)));
    const btn = h("a", "btn btn-ghost", state.lang === "zh" ? "查看 PDF" : "View PDF");
    btn.href = docPath(p, r.file);
    btn.target = "_blank";
    item.appendChild(btn);
    refList.appendChild(item);
  });
  root.appendChild(sectionWrap("references", refList));

  root.appendChild(buildFooter());
  buildToc();
  observeReveal();
}

/* ============================================================
 * 侧边滚动目录（scroll spy，仅宽屏显示）
 * ============================================================ */
let tocScrollHandler = null;
function buildToc() {
  const sections = Array.from(document.querySelectorAll(".toc-target"));
  if (!sections.length) return;
  const aside = h("aside", "toc");
  aside.setAttribute("aria-label", "section navigation");
  const ul = h("ul", "toc-list");
  sections.forEach((sec) => {
    const key = sec.id.replace("sec-", "");
    const li = h("li", "toc-item");
    const a = h("a", "toc-link", t(LABELS[key]));
    a.href = "#" + sec.id;
    a.dataset.target = sec.id;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      sec.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "#" + sec.id);
    });
    li.appendChild(a);
    ul.appendChild(li);
  });
  aside.appendChild(ul);
  document.getElementById("app").appendChild(aside);
  observeToc(sections);
}

function observeToc(sections) {
  // 移除旧监听，避免语言切换 rerender 后累积
  if (tocScrollHandler) {
    window.removeEventListener("scroll", tocScrollHandler);
    tocScrollHandler = null;
  }
  const links = Array.from(document.querySelectorAll(".toc-link"));
  function setActive(id) {
    links.forEach((a) => a.classList.toggle("active", a.dataset.target === id));
  }
  function update() {
    let current = sections[0].id;
    sections.forEach((s) => {
      if (s.getBoundingClientRect().top <= 110) current = s.id;
    });
    setActive(current);
  }
  tocScrollHandler = () => {
    requestAnimationFrame(update);
  };
  window.addEventListener("scroll", tocScrollHandler, { passive: true });
  update();
}

function detailHero(p) {
  const hero = h("header", "detail-hero toc-target");
  hero.id = "sec-overview";
  const box = h("div", "container");
  const back = h("a", "back", `← ${state.lang === "zh" ? "返回首页" : "Back Home"}`);
  back.href = "index.html";
  box.appendChild(back);
  box.appendChild(h("h1", "", t(p.title)));
  box.appendChild(h("p", "subtitle", t(p.subtitle)));
  const meta = h("div", "detail-meta");
  meta.appendChild(h("span", "period-pill", p.period));
  box.appendChild(meta);
  const tags = h("div", "tags");
  p.tags.forEach((tag) => tags.appendChild(h("span", "tag", tag)));
  box.appendChild(tags);
  hero.appendChild(box);
  return hero;
}

/* ============================================================
 * 灯箱
 * ============================================================ */
let lbSlides = [];
let lbIndex = 0;
function buildLightbox() {
  const lb = h("div", "lightbox");
  lb.id = "lightbox";
  const img = h("img");
  img.id = "lb-img";
  const caption = h("div", "lb-caption");
  caption.id = "lb-caption";
  const close = h("button", "lb-close", "✕");
  close.id = "lb-close";
  const prev = h("button", "lb-nav lb-prev", "‹");
  prev.id = "lb-prev";
  const next = h("button", "lb-nav lb-next", "›");
  next.id = "lb-next";
  lb.append(prev, next, img, caption, close);
  document.body.appendChild(lb);

  close.addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    showLbSlide((lbIndex - 1 + lbSlides.length) % lbSlides.length);
  });
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    showLbSlide((lbIndex + 1) % lbSlides.length);
  });
}
function openLightbox(slides, index) {
  lbSlides = slides;
  lbIndex = index;
  showLbSlide(index);
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function showLbSlide(index) {
  lbIndex = index;
  document.getElementById("lb-img").src = lbSlides[index].src;
  document.getElementById("lb-caption").textContent = lbSlides[index].caption || "";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (!lb || !lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft")
    document.getElementById("lb-prev").click();
  if (e.key === "ArrowRight")
    document.getElementById("lb-next").click();
});

/* ============================================================
 * 滚动进入动画
 * ============================================================ */
function observeReveal() {
  const nodes = document.querySelectorAll(".reveal");
  // 兜底：不支持 IntersectionObserver 时直接全部显示
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((n) => io.observe(n));
}

/* ============================================================
 * 启动与重渲染
 * ============================================================ */
function rerender() {
  const id = new URLSearchParams(location.search).get("id");
  if (id) renderDetail(id);
  else renderHome();
}

applyTheme();
applyLang();
buildLightbox();
rerender();
if (!new URLSearchParams(location.search).get("id")) observeReveal();
