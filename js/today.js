
/**
 * 時刻表示を更新する関数
*/
window.onload = function () {

  //とりあえず初回ページ表示
  updateTime()

  //1秒ごとに表示更新
  timerid = setInterval(updateTime, 1000);

  //ここにjs読み込み完了時に実行する内容を書く
  function updateTime() {
    var now = new Date();
    document.getElementById('date').innerHTML = dateToStr24HPad0(now, 'MM/DD');
    document.getElementById('time').innerHTML = dateToStr24HPad0(now, 'hh:mm:ss');
    var dayOfWeekStr = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
    var wDay = now.getDay()
    document.getElementById('week').innerHTML = dayOfWeekStr[wDay];

    //画像のランダム化
    //日付の下一桁を今日の数字とする
    var todaysNumber = '0' + now.getDate() % 10;
    console.log(todaysNumber);

    //曜日毎に背景画像を変える
    switch (wDay) {
      case 0: changeBG("img/Sunday" + todaysNumber + ".jpg"); break;
      case 1: changeBG("img/Monday" + todaysNumber + ".jpg"); break;
      case 2: changeBG("img/Tuesday" + todaysNumber + ".jpg"); break;
      case 3: changeBG("img/Wednesday" + todaysNumber + ".jpg"); break;
      case 4: changeBG("img/Thursday" + todaysNumber + ".jpg"); break;
      case 5: changeBG("img/Friday" + todaysNumber + ".jpg"); break;
      case 6: changeBG("img/Saturday" + todaysNumber + ".jpg"); break;
      default: console.log("invalid wDay.");
    }
  }
};

/**
 * 24時間表記＆0パディングで時刻を返す
 * @param {Date} date 時刻
 * @param {String} format 時刻表記フォーマット。未指定の場合は `YYYY/MM/DD hh:mm:ss`
 * @return {String} 引数で渡されたformatに従って整形された時刻
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
 * CSSのbackground(背景)を上書きする
 * @param {String} IMG 背景に適用したい画像のPath
*/
function changeBG(IMG) {
  document.body.style.background = "url(" + IMG + ") no-repeat center center fixed";
  document.body.style.backgroundSize = "cover"
}

/**
 * 整数で乱数を返す
 * @param 乱数の最大値
 * @return {int} 乱数
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
