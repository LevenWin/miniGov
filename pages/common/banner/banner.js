// pages/common/banner/banner.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items:{
      type:Array,
      value:[],
      observer: (newVal, oldVal, changePath) => {
      } 
    },
    currentIndex:{
      type:Number,
      value:0,
      observer: (newVal, oldVal, changePath) => {
      } 
    },
    shouldShowInfo:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    config:{
      "indicator-dots":true,
      "autoplay":true,
      "current":0,
      "interval":3000,
      "duration":500,
      "circular":true,
      "indicator-active-color":"#999999",
      "indicator-color":"#eeeeee"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    didChange(e) {

    },
    clickItem (e) {
      this.triggerEvent('clickArticle', {'path': e.currentTarget.dataset.path})
    }
  }
})
