

/**
 * 24時間表記＆0パディングで時刻を返す関数
 * @param 時刻表記フォーマット hh:mm:ss ←こういうやつ
 * @return {String} 引数 format に従って整形された時刻
*/
function dateToStr24HPad0(date, format) {
  if (!format) {
    format = 'YYYY/MM/DD hh:mm:ss'
  }
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  return format;
}

/**
 * 時刻表示を更新する関数
*/
window.onload = function () {

  //とりあえず初回ページ表示
  updateTime()

  //1秒ごとに表示更新
  timerid = setInterval(updateTime, 1000);

  // ここに読み込み完了時に実行してほしい内容を書く。
  function updateTime() {
    var now = new Date();
    document.getElementById('date').innerHTML = dateToStr24HPad0(now, 'MM/DD');
    document.getElementById('time').innerHTML = dateToStr24HPad0(now, 'hh:mm:ss');
    var dayOfWeekStr = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    var wDay = now.getDay()
    document.getElementById('week').innerHTML = dayOfWeekStr[wDay];

    //曜日毎に背景画像を変える
    //console.log('wDay=' + wDay)
    switch (wDay) {
      case 0: changeBG("img/00.jpg"); break;
      case 1: changeBG("img/10.jpg"); break;
      case 2: changeBG("img/20.jpg"); break;
      case 3: changeBG("img/30.jpg"); break;
      case 4: changeBG("img/40.jpg"); break;
      case 5: changeBG("img/50.jpg"); break;
      case 6: changeBG("img/60.jpg"); break;
      default: console.log("invalid wDay.");
    }
  }
};

/**
 * 背景を変える関数（CSSのbackgroundを上書きする）
 * @param 背景に適用したい画像
*/
function changeBG(IMG) {
  document.body.style.background = "url(" + IMG + ") no-repeat center center";
  document.body.style.backgroundSize = "cover"
}
