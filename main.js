$(function(){
  $('#t').t({
    delay:0.5, //アニメーションの遅延
    speed:20, //アニメーションの速度
    speed_vary:true, //リアルなタイピングのスピード
    beep:false, //タイピング音の有無
    mistype:false, //ミスタイプの有無
    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
    caret:false, //カーソル
    blink:false, //カーソルの点滅の有無
    blink_perm:false, //カーソルの点滅の継続
    repeat:0, //繰り返し
    tag:'span', //要素を内包するタグ
    pause_on_click:true, //クリックで一時停止
    init:function(elm){}, //タイピング開始時のコールバック
    typing:function(elm,chr_or_elm,left,total){}, //タイピング毎のコールバック
    fin:function(elm){} //タイピング終了時のコールバック
  });
});
const VueTyper = window.VueTyper.VueTyper
new Vue({
  el: '#app',
  components: {
    'vue-typer': VueTyper
  },
  data: {
    text: '<div class="">\n  hello!\n</div>'
  }
});