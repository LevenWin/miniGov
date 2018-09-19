// pages/common/subGrid/item-grid.js
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
    items:[
      {
        "cID":10054,
        "cImage":'../../../image/hallServiceCategoryIcon.png',
        "cTitle":'会议'
      },
      {
        "cID": 10055,
        "cImage": '../../../image/stateCouncilEventIcon.png',
        "cTitle": '活动'
      },
      {
      "cID": 10056,
        "cImage": '../../../image/stateCouncilVisitIcon.png',
      "cTitle": '出访'
      },
      {
        "cID": 10057,
        "cImage": '../../../image/stateCouncilSpeechIcon.png',
        "cTitle": '讲话'
      },
      {
        "cID": 10058,
        "cImage": '../../../image/hallServiceCategoryIcon.png',
        "cTitle": '文章'
      },
      {
        "cID": 10059,
        "cImage": '../../../image/stateCouncilPhotoIcon.png',
        "cTitle": '图片'
      },
      {
        "cID": 1005,
        "cImage": '../../../image/stateCouncilVideoIcon.png',
        "cTitle": '视频'
      },
      {
        "cID": 10054,
        "cImage": '../../../image/stateCouncilInstructions.png',
        "cTitle": '批示'
      },
      {
        "cID": 10054,
        "cImage": '../../../image/stateCouncilCall.png',
        "cTitle": '致电'
      },
      {
        "cID": 10054,
        "cImage": '../../../image/stateCouncilCongratulation.png',
        "cTitle": '通话'
      },
      {
        "cID": 10054,
        "cImage": '../../../image/stateCouncilReply.png',
        "cTitle": '回信'
      },
      {
        "cID": 10054,
        "cImage": '../../../image/stateCouncilAttendIcon.png',
        "cTitle": '出席参加'
      }
    ],
    rowCount:3,
    config: {
      "indicator-dots": true,
      "autoplay": true,
      "current": 0,
      "interval": 3000,
      "duration": 500,
      "circular": true,
      "indicator-active-color": "#dddddd",
      "indicator-color": "#eeeeee"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(e) {
      this.triggerEvent('clickGridItem', {"id": e.currentTarget.dataset.id,"title":e.currentTarget.dataset.title})
    }
  }
})
