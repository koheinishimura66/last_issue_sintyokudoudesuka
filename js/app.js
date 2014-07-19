<<<<<<< HEAD
var table = {"チキンおろしだれ":[2.7,1.5,1.2,458,1.4],"ラーメン":[2,3,4,300,1.0]}
var getFoodList = function(){

var T = table["チキンおろしだれ"]

=======
>>>>>>> parent of edd616d... チェックボックス迷走中
window.onload = function() {
  var rc = new html5jp.graph.radar("sample");
  if( ! rc ) { return; }
  var items = [
    ["前回のあなた", 5, 3, 5],
    ["あなたの値", 3, 4, 3]
  ];
  var params = {
    aCap: ["赤", "緑", "黄"]
  }
  rc.draw(items, params);
};
