// pages/service/view/verticalArticle/vertical-article.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articles:{
      type:Array,
      value:[],
      observer:(newVal, oldVal, path) => {
        console.log(newVal,31234251)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
