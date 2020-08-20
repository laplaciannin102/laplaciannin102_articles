document.onselectstart='';
document.onmousedown='';
document.body.onselectstart='';
document.body.onmousedown='';

/*
関数群
*/

function showRika() {
  var aa_obj = document.getElementById("AA_txt")

  /*
  alert("aaa")
  var f = new File(bits=DOMString, name="../assets/txt/rika.txt")
  //var f = new File("../txt/rika.txt")
  alert("bbb")
  f.open('r');
  var rika = f.read();
  f.close();
  */

  var rika = "みぃ　 ＿＿＿＿_\n　　_／　　　　 ＼\n　／ ／ /　　＼＼ ヽ\n`/ //　/　 |　 ヽヽ|\n/ ｲ｜|｜ | | |｜| ||\n＼| Lヒ辷|_|_辷L|ノ|\n　Ｔ|､ｨ9ﾍ　　ｲ9ﾍ| ||\n　｜||ヒｿ 、 ヒｿ| ||\n　｜|ヽ　 ー　　| ||\n　｜|　＞ー―-イ| ||\n　｜|／＼{只}／`| ||\n　｜|∥　<ハ> 　| ||\n　｜|∥　｜｜ 　| ﾊ|"

  aa_obj.innerText = rika;
  aa_obj.style = "background-color:blue;color:white;padding:20px;"
};

function showBoom() {
  var aa_obj = document.getElementById("AA_txt")

  var boom = "　　　　　　　　　　　　　　　　　　　　　　　　 ＿＿＿＿_\n　　　　　　　　 　 　 　 　 　 　 　 　 _ .:´:: :: :: :: :: :: :: :: : |\n　　　 　 　 　 　 　 　 　 　 　 ,...＜ :: :: :: :: :: :: :: :: :: :: :: ::|\n　　　　　　　　　　　　　　　／ : :: :: :: :: :: :: :: :: :: :: :: :: :: ::|\n　　　　　　　　　　　　　　<:: :: :: ::_:: :: :: :: :: :: :: :: :: :: :: :: ::|\n. 　,个 ､　　　　　　　　　　｀ヽ::／　＼:: :: :: :: :: :: :: :: :: :: ::|\n　/　＼::＼＿　　　　　　　　 /　 ●　｀ー―　､:: :: :: :: :: ::|\n　!　　　｀ヽ、:::ヽ 　 　 　 　 /| 、 　 　 　● 　 !:: :: :: :: :: ::|\n　l /´＼　　＼:∧　　　 __ /::.ー― ､　　　　　 |:: :: :: :: :: : |\n　丶 　　＼　　＼:.ー<´::／:: :: :: :: :: ＼＿＿.ノ:: :: :: :: :: :::|\n　 　 ＼　　)　　 　 _＞<:: :: :: ／: :: :: :: :: :: :: ／´＼:: :: :: ﾉ\n　　　　 ￣￣￣￣　　　｀ー'<＿_ノ: :: :: :: ／　　　　 ￣\n　　　　　　　　　,ヘ ＿＿＿　　 <＿_ノ::/\n　　　　　　　　　l:: :: :: :: :: :: ::｀ヽ ＿_/:::::l\n　　 　 　 　 　 八:: :: :: :: :: :: :: :: :: :: :: :: :′\n　　　　　　　　　　＼:: :: :: :: :: :: :: :: :: ::/\n　　　　 　 　 　 　 　 ＼:: :: :: :: :: :: ::ノ\n　　　　　　　　　　　　　　￣￣￣"

  aa_obj.innerText = boom;
  aa_obj.style = "background-color:blue;color:white;padding:20px;"
};

function delAA() {
  var aa_obj = document.getElementById("AA_txt")

  aa_obj.innerText = "";
  aa_obj.removeAttribute("style");
};


/*
スマートフォン判定
max-device-width: 640px
*/
function isSmartPhone() {
  if (window.matchMedia && window.matchMedia("(max-device-width: 1280px)").matches) {
    return true;
  } else {
    return false;
  }
}

/*PCスタイル*/
function setPCStyle() {
  var article_body_obj = document.getElementById("article_body");
  article_body_obj.style.width = "1000px"
}

/*スマートフォンスタイル*/
function setSmartPhoneStyle() {
  var article_body_obj = document.getElementById("article_body");
  article_body_obj.style.fontSize = "16pt"
  article_body_obj.style.width = "40em"
}


/*
メイン実行
*/

/* スマートフォンの場合スマートフォンのstyle設定を行う */
if (isSmartPhone()) {
  console.log("set smartphone style")
  setSmartPhoneStyle()
}
