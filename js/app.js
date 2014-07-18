var table = {"チキンおろしだれ":[2.7,1.5,1.2,458,1.4],"ラーメン":[2,3,4,300,1.0]}
var getFoodList = function(){

var T = table["チキンおろしだれ"]

window.onload = function() {
  var rc = new html5jp.graph.radar("sample");
  if( ! rc ) { return; }
  var items = [
    ["前回のあなた", 5, 3, 5],
    ["あなたの値", T[0], T[1], T[2]]
  ];
  var params = {
    aCap: ["赤", "緑", "黄"]
  }
  rc.draw(items, params);
};
