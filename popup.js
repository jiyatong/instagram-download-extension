function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}

sendMessageToContentScript({ cmd: 'download', value: '获取图片地址' }, function (response) {
  var app = document.getElementById('app')
  response.forEach(function (item, index) {
    var a = document.createElement('a')
    a.href = item
    a.target = '_blank'
    var img = document.createElement('img')
    img.src = item
    img.width = 300
    a.appendChild(img)
    app.appendChild(a)
  })
})




