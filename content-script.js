// 接收popup的请求
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd == 'download') {
    sendResponse(findImg())
  }
})

// 查找页面上的图片
function findImg() {
  var imgArr = []
  var articles = document.getElementsByTagName('article')
  Array.prototype.slice.call(articles).forEach(function (item) {
    var srcArr = []
    var imgs = Array.prototype.slice.call(item.getElementsByTagName('img'))
    imgs.forEach(function (value) {
      if (value.alt.indexOf('的头像') === -1) {
        srcArr.push(value.src)
      }
    })
    imgArr.push(...srcArr)
  })
  return imgArr
}
