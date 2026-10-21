(function () {
  "use strict";
  var cv = window.CV;
  document.documentElement.classList.add("js");

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function ext(url) { return /^https?:/.test(url); }
  function linkAttrs(url) {
    return 'href="' + esc(url) + '"' + (ext(url) ? ' target="_blank" rel="noopener"' : "");
  }
  function link(url, label, cls) {
    return '<a class="' + (cls || "") + '" ' + linkAttrs(url) + '><span class="ul">' + esc(label) + "</span>" +
      (ext(url) ? '<span class="arrow" aria-hidden="true">↗</span>' : "") + "</a>";
  }
  function maybeLink(url, html) {
    return url ? '<a ' + linkAttrs(url) + '><span class="ul">' + html + '</span><span class="arrow" aria-hidden="true">↗</span></a>' : html;
  }
  function row(year, inner) {
    return '<li class="row reveal"><div class="year">' + esc(year) + '</div><div>' + inner + "</div></li>";
  }
  function title(main, sub) {
    return "<h3>" + main + (sub ? '<span class="sep">/</span><span class="light">' + esc(sub) + "</span>" : "") + "</h3>";
  }

  /* ---------- hero ---------- */
  var downloadIcon = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1v8M2.5 5.5 6 9l3.5-3.5M1 11h10" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';
  document.getElementById("hero").innerHTML =
    '<div class="kicker reveal">' + esc(cv.role) + "</div>" +
    '<h1 class="reveal" style="--d:80ms">' + esc(cv.name) + "</h1>" +
    '<p class="statement reveal" style="--d:180ms">' + esc(cv.statement).replace(/\.$/, '<span class="dot-pink">.</span>') + "</p>" +
    '<p class="profile reveal" style="--d:260ms">' + esc(cv.profile) + "</p>" +
    '<ul class="focus reveal" style="--d:340ms">' + cv.focus.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
    '<div class="hero__links reveal" style="--d:420ms">' +
      '<a class="btn" href="' + esc(cv.cvPdf) + '" download>Download CV ' + downloadIcon + "</a>" +
      cv.contact.map(function (c) { return link(c.link, c.label === "Email" ? c.value : c.label, ""); }).join("") +
    "</div>" +
    '<a class="scroll-cue reveal" style="--d:560ms" href="#projects"><i></i>Scroll</a>';

  /* ---------- sections ---------- */
  var S = [];

  // Projects
  // Text rows until at least one project has an image; then image cards.
  function imgs(p) { return p.images || (p.image ? [{ src: p.image }] : []); }
  var hasImages = cv.projects.some(function (p) { return imgs(p).length; });
  var proj = !hasImages
    ? '<ul class="pcards">' + cv.projects.map(function (p, i) {
        return '<li class="pcard reveal" style="--d:' + i * 80 + 'ms">' +
          '<div class="year">' + esc(p.year) + "</div>" +
          '<h3 class="feature">' + maybeLink(p.link, esc(p.title)) + "</h3>" +
          '<p class="feature__sub">' + esc(p.subtitle) + "</p>" +
          '<p class="meta">' + esc(p.where) + (p.role ? " · " + esc(p.role) : "") + "</p></li>";
      }).join("") + "</ul>"
    : '<div class="projects">' + cv.projects.map(function (p, i) {
    var set = imgs(p);
    var media = set.length
      ? set.map(function (im, k) {
          return '<img src="' + esc(im.src) + '" alt="' + (k ? "" : esc(p.title)) + '"' +
            (im.pos ? ' style="object-position:' + esc(im.pos) + '"' : "") +
            (k === 0 ? ' class="is-on"' : "") + ' loading="lazy" decoding="async">';
        }).join("") +
        (set.length > 1 ? '<div class="dots" aria-hidden="true">' + set.map(function (_, k) { return "<i" + (k ? "" : ' class="is-on"') + "></i>"; }).join("") + "</div>" : "")
      : '<div class="placeholder"></div>';
    var body =
      '<div class="project__media" data-count="' + set.length + '">' + media + "</div>" +
      '<div class="project__body">' +
        '<div class="project__year">' + esc(p.year) + "</div>" +
        '<h3 class="project__title">' + (p.link ? '<span class="ul">' + esc(p.title) + '</span><span class="arrow" aria-hidden="true">↗</span>' : esc(p.title)) + "</h3>" +
        '<p class="project__sub">' + esc(p.subtitle) + "</p>" +
        '<p class="project__where">' + esc(p.where) + (p.role ? " · " + esc(p.role) : "") + "</p>" +
      "</div>";
    var d = ' style="--d:' + i * 80 + 'ms"';
    return p.link
      ? '<a class="project reveal"' + d + " " + linkAttrs(p.link) + ">" + body + "</a>"
      : '<article class="project reveal"' + d + ">" + body + "</article>";
  }).join("") + "</div>";
  if (cv.earlierProjects && cv.earlierProjects.length) {
    proj += '<div class="subhead reveal">Earlier projects</div><ul class="rows">' +
      cv.earlierProjects.map(function (p) {
        return row(p.year, title(maybeLink(p.link, esc(p.title))) + '<p class="meta">' + esc(p.where) + "</p>");
      }).join("") + "</ul>";
  }
  S.push({ id: "projects", nav: "Projects", title: "Research projects", html: proj });

  // Publications
  S.push({ id: "publications", nav: "Publications", title: "Publications", html:
    '<ul class="rows">' + cv.publications.map(function (p) {
      var authors = esc(p.authors).replace("Yan, M.", '<span class="me">Yan, M.</span>');
      var links = (p.links || []).map(function (l) { return link(l.url, l.label, ""); }).join("");
      return row(p.year,
        '<p class="cite">' + authors +
        '<span class="t">' + esc(p.title) + (p.status ? '<span class="tag">' + esc(p.status) + "</span>" : "") + "</span>" +
        '<span class="v">' + esc(p.venue) + "</span></p>" +
        (links ? '<div class="pub-links">' + links + "</div>" : ""));
    }).join("") + "</ul>" });

  // Teaching
  S.push({ id: "teaching", nav: "Teaching", title: "Teaching", html:
    '<p class="section__note">' + esc(cv.teaching.note) + "</p>" +
    '<ul class="rows">' + cv.teaching.items.map(function (t) {
      return row(t.term,
        "<h3>" + esc(t.course) + '<span class="tag tag--level">' + esc(t.level) + "</span></h3>" +
        '<p class="meta">' + esc(t.topic) + "</p>");
    }).join("") + "</ul>" });

  // Grants
  S.push({ id: "grants", nav: "Grants & Awards", title: "Grants & awards", html:
    '<ul class="rows">' + cv.grants.map(function (g) {
      return row(g.year, title(maybeLink(g.link, esc(g.title))) + '<p class="meta">' + esc(g.detail) + "</p>");
    }).join("") + "</ul>" });

  // Exhibitions
  S.push({ id: "exhibitions", nav: "Exhibitions", title: "Exhibitions", html:
    '<ul class="rows">' + cv.exhibitions.map(function (e) {
      return row(e.year, title(maybeLink(e.link, esc(e.title)), e.subtitle) +
        '<p class="meta">' + esc(e.where) + (e.role ? " · " + esc(e.role) : "") + "</p>");
    }).join("") + "</ul>" });

  // Experience
  S.push({ id: "experience", nav: "Experience", title: "Academic experience", html:
    '<ul class="rows">' + cv.experience.map(function (x) {
      return row(x.year, title(esc(x.org), x.position) +
        '<p class="meta">' + esc(x.place) + "</p>" +
        '<ul class="points">' + x.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
        (x.link ? '<div class="more">' + link(x.link, x.linkLabel || "More", "") + "</div>" : ""));
    }).join("") + "</ul>" });

  // Education
  S.push({ id: "education", nav: "Education", title: "Education", html:
    '<ul class="rows">' + cv.education.map(function (e) {
      return row(e.year, title(esc(e.org), e.degree) + (e.note ? '<p class="meta">' + esc(e.note) + "</p>" : ""));
    }).join("") + "</ul>" });

  document.getElementById("sections").innerHTML = S.map(function (s, i) {
    var n = String(i + 1).padStart(2, "0");
    return '<section class="section" id="' + s.id + '" aria-labelledby="h-' + s.id + '">' +
      '<div class="section__head reveal"><span class="section__num">' + n + '</span>' +
      '<h2 class="section__title" id="h-' + s.id + '">' + esc(s.title) + "</h2></div>" + s.html + "</section>";
  }).join("");

  document.getElementById("nav").innerHTML = S.map(function (s) {
    return '<a href="#' + s.id + '" data-id="' + s.id + '">' + esc(s.nav) + "</a>";
  }).join("");

  document.getElementById("railFoot").innerHTML =
    cv.contact.map(function (c) { return '<a ' + linkAttrs(c.link) + ">" + esc(c.label) + "</a>"; }).join("") +
    '<a href="' + esc(cv.cvPdf) + '" download>CV (PDF)</a>';

  document.getElementById("footer").innerHTML =
    "<span>© " + new Date().getFullYear() + " " + esc(cv.name) + " · Last updated " + esc(cv.updated) + "</span>" +
    '<a href="#top">Back to top ↑</a>';

  /* ---------- reveal on scroll ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- project image cycling on hover / focus ---------- */
  document.querySelectorAll(".project__media").forEach(function (m) {
    var pics = m.querySelectorAll("img"), dots = m.querySelectorAll(".dots i");
    if (pics.length < 2) return;
    var card = m.closest(".project"), k = 0, timer = null;
    function show(n) {
      pics[k].classList.remove("is-on"); if (dots[k]) dots[k].classList.remove("is-on");
      k = n % pics.length;
      pics[k].classList.add("is-on"); if (dots[k]) dots[k].classList.add("is-on");
    }
    function start() { if (timer) return; show(k + 1); timer = setInterval(function () { show(k + 1); }, reduce ? 2600 : 1600); }
    function stop() { clearInterval(timer); timer = null; show(0); }
    card.addEventListener("mouseenter", start); card.addEventListener("mouseleave", stop);
    card.addEventListener("focusin", start); card.addEventListener("focusout", stop);
    // touch: tap the image to step through
    m.addEventListener("click", function (e) { if (matchMedia("(hover: none)").matches) { e.preventDefault(); show(k + 1); } });
  });
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    // stagger rows inside the same list
    document.querySelectorAll(".rows").forEach(function (list) {
      list.querySelectorAll(":scope > .row").forEach(function (r, i) { r.style.setProperty("--d", Math.min(i, 6) * 60 + "ms"); });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- active section + progress + rail name ---------- */
  var links = {};
  document.querySelectorAll("#nav a").forEach(function (a) { links[a.dataset.id] = a; });
  var sections = S.map(function (s) { return document.getElementById(s.id); });
  var bar = document.querySelector(".progress span");
  var hero = document.getElementById("hero");
  var ticking = false;

  function update() {
    ticking = false;
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
    document.body.classList.toggle("past-hero", y > hero.offsetHeight * 0.55);
    var current = null, line = window.innerHeight * 0.35;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.id; });
    if (y + window.innerHeight >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1].id;
    Object.keys(links).forEach(function (id) {
      var on = id === current;
      links[id].classList.toggle("is-active", on);
      if (on) links[id].setAttribute("aria-current", "true"); else links[id].removeAttribute("aria-current");
    });
    // keep active tab visible in the mobile top bar
    if (current && window.innerWidth <= 1000) {
      var a = links[current], nav = a.parentNode;
      var target = a.getBoundingClientRect().left - nav.getBoundingClientRect().left + nav.scrollLeft - 12;
      if (Math.abs(nav.scrollLeft - target) > 40) nav.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
    }
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
