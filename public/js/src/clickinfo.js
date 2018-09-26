var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array(
      "(๑￫ܫ￩)",
      "@(｡･o･)@",
      "@(o･ｪ･)@",
      "ヽ( o･ｪ･)ﾉ ",
      "@(/o･ｪ･o)@/",
      "@(o･ｪ･o)@",
      "<゜)))彡",
      "ζ°)))彡",
      "(:◎)≡",
      "<*)) >>=<",
      "(      。＿ 。） ✎ ＿",
      "( ´_ゝ`)✎",
      "눈_눈",
      "ᕕ( ᐛ )ᕗ"
    );
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "#BFEFFF"
    });
    $("body").append($i);
    $i.animate({
        "top": y - 180,
        "opacity": 0
      },
      1500,
      function() {
        $i.remove();
      });
  });
});
