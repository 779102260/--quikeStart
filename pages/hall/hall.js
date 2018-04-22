var app = getApp();
Page({
  data: {
    basePath: app.host + "images/",
    types: []
  },
  onLoad: function () {
    wx.request({
      url: app.host + "jp.php",
      success: this.onLoadSuccess.bind(this)
    })
  },
  onLoadSuccess: function (msg) {
    this.setData({ types: msg.data.data })
  },
  openDetailPage: function (e) {
    wx.navigateTo({
      url: '/pages/detail/detail?enname=' + e.detail.sid
    })
  }
})