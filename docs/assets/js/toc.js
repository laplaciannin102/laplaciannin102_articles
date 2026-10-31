/*
記事一覧ページの絞り込み検索
タイトル・カテゴリ・タグ・同義語(data-keywords)に検索語を含む記事だけを表示する.
*/

(function () {
  var input = document.getElementById("toc_search");
  var counter = document.getElementById("toc_count");
  if (!input) {
    return;
  }

  var items = Array.prototype.slice.call(document.querySelectorAll(".toc_section li[data-keywords]"));
  var total = counter ? counter.textContent : "";

  function hasVisibleItem(el) {
    return el.querySelector("li[data-keywords]:not([hidden])") !== null;
  }

  input.addEventListener("input", function () {
    var words = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var hits = {};

    items.forEach(function (li) {
      var keywords = li.getAttribute("data-keywords");
      var hit = words.every(function (w) { return keywords.indexOf(w) >= 0; });
      li.hidden = !hit;
      if (hit) {
        hits[li.getAttribute("data-href")] = true;
      }
    });

    document.querySelectorAll(".toc_sub, .toc_group, .toc_section").forEach(function (el) {
      el.hidden = !hasVisibleItem(el);
    });

    document.querySelectorAll(".toc_group").forEach(function (g) {
      if (words.length) {
        g.open = true;
      }
    });

    // 検索中は「最近更新された記事」とカテゴリへのジャンプを隠す
    document.querySelectorAll(".toc_recent, .toc_jump").forEach(function (el) {
      el.hidden = words.length > 0;
    });

    if (counter) {
      counter.textContent = words.length ? Object.keys(hits).length + " 件ヒット" : total;
    }
  });
})();
