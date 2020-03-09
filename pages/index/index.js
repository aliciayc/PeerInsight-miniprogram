const app = getApp()

Page({
  data: {
    "slides": [
      {
        "id": 1,
        "header": "Cameron Wang",
        "sub_header": "Founder of PeerInsight",
        "description": "2017年创办PeerInsight, 芝加哥大学gap year，SAT 1580分",
        "image": "photos/cameronPT.png"
      },
      {
        "id": 2,
        "header": "Yuchen Fu",
        "sub_header": "Co-founder and Technician",
        "description": "UCB2022, 伯克利在校生，CS & Econ double major, GPA 4.8, ACT 34分，首考GRE 329分",
        "image": "photos/ycPT.png"
      },
      {
        "id": 3,
        "header": "Gabriel Guan",
        "sub_header": "Technician",
        "description": "UCB2022, 伯克利在校生，CS & Cog Sci double major",
        "image": "photos/tianyiPT.png"
      }
    ]
  },
  readMore(event) {
    wx.navigateTo({
      url: '/pages/zhushou/zhushou',
    })
  },
  readMore(event) {
    wx.navigateTo({
      url: '/pages/zhushou/zhushou',
    })
  },
  readOf(event) {
    wx.navigateTo({
      url: '/pages/Of/Of',
    })
  },
  read16(event) {
    wx.navigateTo({
      url: '/pages/16/16',
    })
  },
  read17(event) {
    wx.navigateTo({
      url: '/pages/17/17',
    })
  },
  read18(event) {
    wx.navigateTo({
      url: '/pages/18/18',
    })
  },
  read19(event) {
    wx.navigateTo({
      url: '/pages/19/19',
    })
  },
  onLoad() {
    this.setData({
      entities: app.globalData.vehicles
    })
  }
})
