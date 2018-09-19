// pages/subCategory/subCategory.js

var api = require('../../utils/api.js')
var viewModel = require('../home/viewModel/homeData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:0,
    isLoading:false,
    articles:[],
    cId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isLoading:true,
      cId:options.cId
    })
    wx.setNavigationBarTitle({
      title: options.title,
    })
    api.loadSubcategory(options.cId, this.data.pageNum).then(res => {
      this.setData({
        isLoading:false,
        pageNum:1,
        articles: this.data.articles.concat(viewModel.getSubCategory(res))
      })
    }).catch(res => {
      this.setData({
        isLoading: false,
      })
    })
  },

  loadMore() {
    this.setData({
      isLoading: true,
    })
    api.loadSubcategory(this.data.cId, this.data.pageNum).then(res => {
      this.setData({
        isLoading: false,
        pageNum: ++this.data.pageNum,
        articles: this.data.articles.concat(viewModel.getSubCategory(res))
      })
    }).catch(res => {
      this.setData({
        isLoading: false,
      })
    })
  },
  clickArticle(e) {
    wx.navigateTo({
      url: '/pages/web/web?src=' + e.currentTarget.dataset.src + '&path=' + e.currentTarget.dataset.path,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})