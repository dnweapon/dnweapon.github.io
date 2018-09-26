---
title: IE8兼容问题
tags: IE8
categories: BUG
abbrlink: f0f4849e
---
## js时间函数显示NaN解决方案
### 出现问题: new Date(时间字符串)得到的数据是NaN。
### 解决方案: 调用如下函数来获取时间。调用方式parseISO8601(时间字符串)返回的是日期对象。

```
function parseISO8601(dateStringInRange) {
    var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
    date = new Date(NaN), 
    month,
    parts = isoExp.exec(dateStringInRange);
    
    if(parts) {
      month = +parts[2];
      date.setFullYear(parts[1], month - 1, parts[3]);
      if(month != date.getMonth() + 1) {
        date.setTime(NaN);
      }
    }
    return date;
}
```

---

## IE低版本兼容
### 解决方案：在head标签内CSS加载之前加上如下语句可以解决IE8兼容模式的问题,意为强制IE浏览器使用最新的版本来渲染页面

```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

---

## IE8下placeholder不显示
### 解决方案: 遍历placeholder，引用如下代码可解决

```
$(document).ready(function() {
    if ($(".inputd input").val() != "") {
        $(this).next(".input_placeholder").hide();
    };
    $(".inputd .input_placeholder").click(function() {
    	$(this).prev().focus();
    });
    $(".inputd input").focusin(function() {
        $(this).next(".input_placeholder").hide();
    });
    $(".inputd input").focusout(function() {
        if ($(this).val() == "") {
            $(this).next(".input_placeholder").show();
        };
    });
});
```