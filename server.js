const AV = require('leancloud-storage')

AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY,
})

const app = require('./app')

const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000)
app.listen(PORT, err => {
  console.log(`Node app is running on port: ${PORT}`)

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function (err) {
    console.error('Caught exception:', err.stack);
  });
  process.on('unhandledRejection', function (reason, p) {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack);
  });
})

// leancloud-storage 写入测试代码
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function (object) {
//   console.log('LeanCloud Rocks!');
// })