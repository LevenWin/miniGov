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
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    loadData() {  
      console.log(this.properties.listItem.title, this.data.articles.length == 0)

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
            newSection:newSection,
            section4:section4,
          })
        });
      } else if (this.properties.listItem.title != '要闻' &&util.isEmptyObject(this.data.articles)) {
        api.loadDetailCategory(this.properties.listItem.columnId, this.properties.listItem.type).then(res => {
          var [banner, articles] = viewModel.filterBannerAndArticle(res.articles);
          this.setData({
            bannerItems: banner,
            articles: articles
          })
        })

      }
    },
  }
})
