// pages/common/category-tab.js
var app = App()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabItems:{
      type:Array,
      value:[],
 
    },
    tabViewScrollLeft:{
      type:Number,
      value:0,
      observer: (newVal, oldVal, changPath) => {
        this.setData({
          sliderLeft: newVal / app.globalData.config.screen.screenWidth *120
        })
      }
    },
    currentIndex:{
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedId:0,
    sliderLeft:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      var itemIndex = e.currentTarget.dataset.index;
      this.triggerEvent('tabItemClick', itemIndex);
      this.updateSlider(itemIndex)
    },

    updateSlider(index) {
      this.setData({
        selectedId: index,
        sliderLeft: index * 120 ,
        currentIndex:index
      })
    },
   
    didScroll(e) {

    }
  }
})
