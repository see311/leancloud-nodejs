const APP_ID = 'UWHu3d90DN5PzYbXknr5deJA-gzGzoHsz'
const APP_KEY = 'myMByAL64VApDxsanVtwLhrW'
const AV = require('leancloud-storage')

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function (object) {
  alert('LeanCloud Rocks!');
})