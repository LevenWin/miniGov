var Promise = require('plugins/es6-promise.js')
var DOMAIN = "https://app.www.gov.cn/govdata/gov/"
var ApiUrls = {
  HOME: DOMAIN+'home.json',
  CATEGORY: DOMAIN + 'source.json',
  COLUMN: DOMAIN + 'columns/column_',
  GovPage: DOMAIN + 'premier.json'
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

function loadDetailCategory(columnId, page) {
  return request(`https://appdyn.www.gov.cn/gov/column.shtml?page=${page}&columnId=${columnId}&categoryId=0`)
}
 function loadGov() {
   return request(ApiUrls.GovPage)
 }
module.exports = {
  loadHome,
  DOMAIN,
  loadHomeCategory,
  loadDetailCategory,
  loadGov,
}
