// pages/person/person.js
var api = require('../../utils/api.js')
var viewModel = require('../home/viewModel/homeData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum:0,
    columnId:"",
    header:undefined,
    articles:[],
    isBoss:false,
    isLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.title)
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      isBoss: options.id == '472',
      isLoading:true,
      columnId: options.id
    })
    api.loadDetailCategory(options.id, this.data.pageNum).then(res => {
      var [articles, bannerItem] = viewModel.getColumnData(res)
      console.log(articles, bannerItem)
      this.setData({
        articles: this.data.articles.concat(articles),
        header: bannerItem ? bannerItem : undefined,
        pageNum:++this.data.pageNum,
        isLoading: false
      })
    }).catch(res => {
      this.setData({
        isLoading: false
      })
    })
  },
  loadMore() {
    console.log('load more ..')
    this.setData({
      isLoading: true
    })
    api.loadDetailCategory(this.data.columnId, this.data.pageNum).then(res => {
      var [articles, bannerItem] = viewModel.getColumnData(res)
      console.log(articles, bannerItem)
      this.setData({
        articles: this.data.articles.concat(articles),
        pageNum: ++this.data.pageNum,
        isLoading: false
      })
    }).catch(res => {
      this.setData({
        isLoading: false
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