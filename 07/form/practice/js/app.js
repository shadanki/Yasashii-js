/*プログラムで使用する変数の設定*******************/
// フォームの要素を取得
let button = document.getElementById('button');
let form = document.getElementById('form');
let textarea =  document.getElementById('textarea');

// 文字数制限
let maxTextNum = textarea.getAttribute('maxlength');

/* 要素を追加　*******************/
// 残り文字数を表示する要素をの追加
let textMessage = document.createElement('div');
let parent =  textarea.parentElement;
parent.insertBefore(textMessage, textarea);

/*イベント処理*****************/
// お問合せしたいとき
button.addEventListener('click', function() {
  // フォームを表示
  form.style.display = 'block';
});