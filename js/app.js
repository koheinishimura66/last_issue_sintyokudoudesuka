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
