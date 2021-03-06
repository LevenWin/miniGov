// pages/gwy/gwy.js
var api = require('../../utils/api.js') 
var viewModel = require('../home/viewModel/homeData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[],
    moreMember:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.loadGov().then(res => {
      var items = viewModel.getGovsItem(res)
      console.log(items,214)
      this.setData({
        items:items,
      })
    }).catch(() => {

    });
  },
  shouwMoreMemo() {
    this.setData({
      moreMember:!this.data.moreMember
    })
  },
  seeMore(e) {
    wx.navigateTo({
      url: '/pages/person/person?id=' + e.currentTarget.dataset.releatedcolumnid + '&title=' + e.currentTarget.dataset.title,
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})