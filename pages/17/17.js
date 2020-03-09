const app = getApp()

Page({
  data: {},
  readMore(event) {
    wx.navigateTo({
      url: '/pages/zhushou/zhushou',
    })
  },
  onLoad() {
    this.setData({
      entities: app.globalData.vehicles
    })
  }
})