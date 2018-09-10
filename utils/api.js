var Promise = require('plugins/es6-promise.js')
var DOMAIN = "https://app.www.gov.cn/govdata/gov/"
var ApiUrls = {
  HOME: DOMAIN+'home.json',
  CATEGORY: DOMAIN + 'source.json',
  COLUMN: DOMAIN + 'columns/column_'
}

function request(url,params,method = 'GET') {
  return new Promise((resolve, reject) => {
    console.log(url)
    wx.request({
      url: url,
      method:method,
      data:JSON.stringify(params),
      header: {
        "Content-Type": "application/json",
      },
      success: (res => {
        console.log(res.data)
        resolve(res.data)
      }),
      fail: reject
    })
  })
}

function loadHome() {
  return request(ApiUrls.HOME)
}

function loadHomeCategory() {
  return request(ApiUrls.CATEGORY)
}

function loadDetailCategory(columnId, typeId) {
  return request(ApiUrls.COLUMN+columnId+'_'+typeId)
}
module.exports = {
  loadHome,
  DOMAIN,
  loadHomeCategory,
  loadDetailCategory,
}
