// pages/common/homeList/home-list.js
var viewModel = require('../../home/viewModel/homeData.js')
var api = require('../../../utils/api.js')

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
    }
  },
  ready: function(){
    if (this.properties.listItem.title == '要闻') {
      this.setData({
        isHome: true
      })
    }
    this.loadData()
  },

  /**
   * 组件的初始数据
   */
  data: {
    bannerItems:[],
    section3:{},
    newSection:{},
    isHome:false
  },

  
  /**
   * 组件的方法列表
   */
  methods: {
    loadData() {
      if (this.data.isHome) {
        api.loadHome().then(res => {
          var banners = viewModel.getBanners(res);
          var section3 = viewModel.getSection3(res);
          var newSection = viewModel.getNewSection(res)
          var section4 = viewModel.getSection4(res);
          console.log(section4['items']['0']['article'],324)
          this.setData({
            bannerItems: banners,
            section3: section3,
            newSection:newSection,
            section4:section4,
          })
        });
      } else {

      }
    },
  }
})
