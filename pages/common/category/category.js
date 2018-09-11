// pages/common/category/category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedItems:[],
    unselectedItems:[],
    css:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addItem(e) {
      var item = e.currentTarget.dataset.item;
      var selectedItems = this.data.selectedItems; 
      var unselectedItems = [];
      for (var i in this.data.unselectedItems) {
        if (this.data.unselectedItems[i]['columnId'] != item['columnId']) {
          unselectedItems.push(this.data.unselectedItems[i])
          
        }else {
          selectedItems.push(this.data.unselectedItems[i])
        }
      }
      this.setData({
        selectedItems: selectedItems,
        unselectedItems: unselectedItems,
      })
    },
    deleteItem(e) {
      var item = e.currentTarget.dataset.item;
      var selectedItems = [];
      var unselectedItems = this.data.unselectedItems;
      for (var i in this.data.selectedItems) {
        if (this.data.selectedItems[i]['columnId'] != item['columnId']) {
          selectedItems.push(this.data.selectedItems[i])
        } else {
          unselectedItems.push(this.data.selectedItems[i])
        }
      }
      this.setData({
        selectedItems: selectedItems,
        unselectedItems: unselectedItems,
      })
    },
    show(selectedItems, unselectedItems){
      console.log('show', selectedItems[0])
      this.setData({
        selectedItems: selectedItems,
        unselectedItems: unselectedItems,
        css:'.weui-animate-drop-down'
      })
    },
    hide(){
      wx.setStorageSync('selected-items', this.data.selectedItems)
      wx.setStorageSync('unselected-items', this.data.unselectedItems)
      this.triggerEvent("didHideCategory")
      this.setData({
        css: 'weui-animate-drop-up'
      })
      
    }

  }
})
