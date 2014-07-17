var table = {"チキンおろしだれ":[2.7,1.5,1.2,458,1.4],"ラーメン":[2,3,4,300,1.0]}
console.log("hello world")
/*var getFoodList = function(){
  var checkbox = document.querySelectorAll("[name=menu]");
  var i = 0;
  var result = [];
  while(i < checkbox.length){
    if(checkbox[i].checked){
      result.push(checkbox[i].value);
    }
    i = i + 1;
  }
  return result;
};
var foods = getFoodList();
var a = [0, 0, 0, 0, 0,]
var n = 0
while(n < getFoodList.length)
  a += table[getFoodList[n]]
  n += 1
test() = return a

var T = [a[0]/6*5, a[1]/3*5, a[2]/16*5]

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
