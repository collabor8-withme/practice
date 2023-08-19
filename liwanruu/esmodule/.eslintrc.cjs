module.exports = {
   "env": {  
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "parserOptions": {
   "sourceType": "module"
},
  //   "off" or 0 - 关闭规则
  //   "warn" or 1 - 将规则视为一个警告（不会影响退出码）,只警告，不会退出程序
  //   "error" or 2 - 将规则视为一个错误 (退出码为1)，报错并退出程序
 rules: {
    //"no-unused-vars": 'error',
    "no-multiple-empty-lines": 'error' ,// 不允许有连续多行空行(关闭规则)
    "semi":'error', 
    // override configuration set by extending "eslint:recommended"
    "no-empty": 'warn',
    "no-cond-assign": 'error', 
   
 }
}