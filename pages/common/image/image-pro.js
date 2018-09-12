// pages/common/image/image-pro.js
var api = require('../../../utils/api.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String,
      value:'',
      observer:(newVal, oldVal, changePath) =>{ 

      }
    },
    mode:{
      type:String,
      value:'aspectFill',
      observer: (newVal, oldVal, changePath) => {
      }
    },
    width:{
      type:String,
      value:'100%'
    },
    height:{
      type:String,
      value:'100%'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loaded:false,
    full: api.DOMAIN
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onImageLoad: function(e) {
      const width = e.detail.width,
        height = e.detail.height;
      this.setData({
        loaded: true
      })
      this.triggerEvent('load', e.detail);
    },
    _onImageFailed: function(e) {
      console.log(JSON.stringify(e))
      let msgs = e.detail.errMsg.split('(');
      this.setData({
        error: "(" + msgs[msgs.length - 1]
      })
      this.triggerEvent('error', e.detail);
    }
  }
})
