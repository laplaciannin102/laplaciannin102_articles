/*
記事ページの目次で, いま読んでいる見出しを強調する.
*/

(function () {
  var side = document.querySelector(".article_toc_side");
  if (!side) {
    return;
  }

  var links = side.querySelectorAll('a[href^="#"]');
  var headings = [];
  var linkById = {};
  for (var i = 0; i < links.length; i++) {
    var id = decodeURIComponent(links[i].getAttribute("href").slice(1));
    var heading = document.getElementById(id);
    if (heading) {
      headings.push(heading);
      linkById[id] = links[i];
    }
  }

  var current = null;

  function update() {
    // 画面上端(固定ヘッダーの下)より上にある最後の見出し
    var active = headings[0];
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top <= 100) {
        active = headings[i];
      } else {
        break;
      }
    }
    var link = active ? linkById[active.id] : null;
    if (link === current) {
      return;
    }
    if (current) {
      current.classList.remove("active");
    }
    current = link;
    if (current) {
      current.classList.add("active");
      // 目次が長いときは, 強調した項目が目次の枠内に見えるようにする
      var top = current.offsetTop - side.scrollTop;
      if (top < 40 || top > side.clientHeight - 40) {
        side.scrollTop = current.offsetTop - side.clientHeight / 2;
      }
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
