var Promise = require('plugins/es6-promise.js')
var DOMAIN = "https://app.www.gov.cn/govdata/gov/"
var ApiUrls = {
  HOME: DOMAIN+'home.json',
  CATEGORY: DOMAIN + 'source.json',
  COLUMN: DOMAIN + 'columns/column_',
  GovPage: DOMAIN + 'premier.json',
  Service: 'https://appdyn.www.gov.cn/gov/service.shtml'
}

function request(url,params,method = 'GET') {
  return new Promise((resolve, reject) => {
    console.log(url, params)
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

function loadDetailArticle(path) {
  return request(DOMAIN+path)
}

function loadSubcategory(cId, pageNum) {
  return request(DOMAIN + `columns/columnCategory_${cId}_${pageNum}.json`)
}
function loadMainservice() {
  return request("https://appdyn.www.gov.cn/gov/service.shtml?groupName=310100&timer=1537525416552&tokens=Q0itdkTOwjso54wNYmfxc5pTbHjJOtqqfsGVc/XwFMk8vkI/esL759MZ1Vytx0nw" )
}
module.exports = {
  loadHome,
  DOMAIN,
  loadHomeCategory,
  loadDetailCategory,
  loadGov,
  loadDetailArticle,
  loadSubcategory,
  loadMainservice,
}
