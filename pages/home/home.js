// pages/home/home.js
var api = require('../../utils/api.js') 
var viewModel = require('viewModel/homeData.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabItems:[],
    scrollLeft:0,
    bannerItems:[],
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
  },
  loadData() {
    api.loadHomeCategory().then(res => {
      var items = viewModel.getTabItems(res['columns'])
      items = [{ "title": "要闻", "columnId": "0" }].concat(items);
      this.setData({
        tabItems:items
      })
      this.loadDetailData(0);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  tabItemClick(e) {
    this.setData({
      currentIndex:e.detail
    })
  },
  didUpdateIndexByScroll(e) {
    console.log(e.detail.current)
    var tab = this.selectComponent("#tab")
    tab.updateSlider(e.detail.current);
    this.loadDetailData(e.detail.current);
  },
  loadDetailData(index) {
    var list = this.selectComponent(`#list${index}`)
    console.log(list)
    list.loadData()
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})