//使用AMD规范定义一个模块（requirejs的写法）
//index.js是处理index.html这个页面需求的模块，这里依赖于jquery
define(['jquery'], function () {
  //这里的代码会在jquery模块完全加载完毕后执行
  //这就是requireJS解决的问题
  $('.btn').click(function () {
    alert('Hi,今天我也吃饭了！');
  })

})