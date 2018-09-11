// pages/common/homeList/home-list.js
var viewModel = require('../../home/viewModel/homeData.js')
var api = require('../../../utils/api.js')
var util = require('../../../utils/util.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listItem:{
      type:Object,
      value:{},
      observer:((newVal, oldVal, changePath) => {
      })
    },
    currentIndex: {
      type: Number,
      value:0,
      observer: ((newVal, oldVal, changePath) => {
        if (newVal !=  oldVal) {

        }
      })
    }
  },
  ready: function(){
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    bannerItems:[],
    articles:{},
    loading:false,
    currentPage:0
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    loadData() {  
      if (this.properties.listItem.title == '要闻'
      && this.data.bannerItems.length == 0) {
        api.loadHome().then(res => {

          var banners = viewModel.getBanners(res);

          var section3 = viewModel.getSection3(res);

          var newSection = viewModel.getNewSection(res)

          var section4 = viewModel.getSection4(res);
          this.setData({
            bannerItems: banners,
            section3: section3,
            newSection:newSection ? newSection : {},
            section4:section4,
          })
        }).catch(() => {
          this.setData({
            loading: false,
          })
        });
      } else if (this.properties.listItem.title != '要闻' &&util.isEmptyObject(this.data.articles)) {
        this.setData({
          loading: true,
        })
        api.loadDetailCategory(this.properties.listItem.columnId, this.data.currentPage).then(res => {

         
          var [banner, articles] = viewModel.filterBannerAndArticle(res.articles);
          this.setData({
            bannerItems: banner,
            articles: articles,
            currentPage: 1,
            loading: false,
          })
        }).catch(()=>{
          this.setData({
            loading:false
          })
        })
      }
    },

    loadMore() {
      if (this.properties.listItem.title != '要闻'
        && !this.data.loading) {
        this.setData({
          loading: true,
        })
        api.loadDetailCategory(this.properties.listItem.columnId, this.data.currentPage).then(res => {


          var [banner, articles] = viewModel.filterBannerAndArticle(res.articles);
          this.setData({
            articles: this.data.articles.concat(articles),
            currentPage: this.data.currentPage + 1,
            loading:false,
          })
        }).catch(() => {
          this.setData({
            loading:false,
          })
        })
      }
    },

    scrollToEnd(e) {
      this.loadMore()
    }


  }
})
