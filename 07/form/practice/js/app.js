/*プログラムで使用する変数の設定*******************/
// フォームの要素を取得
let button = document.getElementById('button');
let form = document.getElementById('form');
let textarea =  document.getElementById('textarea');

// 文字数制限
let maxTextNum = textarea.getAttribute('maxlength');
// 残り時間（秒）
let remainingTimeNum = 10;

/* 要素を追加　*******************/
// 残り文字数を表示する要素をの追加
let textMessage = document.createElement('div');
let parent =  textarea.parentElement;
parent.insertBefore(textMessage, textarea);

// 残り時間を表示する要素の追加
let timeMessage = document.createElement('div');
parent.insertBefore(timeMessage, null);

/*イベント処理*****************/
// お問合せしたいとき
button.addEventListener('click', function() {
  // フォームを表示
  form.style.display = 'block';

  // タイマー処理で残り時間を表示
  let timerId = setInterval(function() {
    timeMessage.innerHTML = '<p>制限時間:' + remainingTimeNum + '秒</p>';
    if (remainingTimeNum <= 0) {
      alert('制限時間終了');
      clearInterval(timerId);
    }
    remainingTimeNum--;
  },1000);
});

// テキストエリアでキーをタイプしたとき
textarea.addEventListener('keyup', function() {
  let currentTextNum = textarea.value.length;
  textMessage.innerHTML = '<p>あと「' + (maxTextNum - currentTextNum) + '」 文字入力できます。</p>';
})