// pages/classHelp/classHelp.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    nical: true,
  },
  metro2: function () {
    wx.navigateTo({
      url: '../copy/copy?id=' + app.globalData.openid,
      success: function (res) {
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
        wx.navigateTo({
          url: '../welcome/welcome?id=' + app.globalData.openid,
        })
      }
    })
  },
  back: function () {
    wx.showLoading({
      title: '加载中',
      icon: "none",
    })
    wx.navigateTo({
      url: '../welcome/welcome?id=' + app.globalData.openid,
      success: function (res) {
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
        wx.navigateTo({
          url: '../welcome/welcome?id=' + app.globalData.openid,
        })
      },
      complete: function (res) { },
    })
  },
  // 点击帮助
  metro1: function () {

    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */
  modalCandel: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  begin: function () {
    wx.showLoading({
      title: '加载中',
      icon: "none",
    })
    wx.navigateTo({
      url: '../class/class?id=' + app.globalData.openid,
      success: function (res) {
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
        wx.navigateTo({
          url: '../welcome/welcome?id=' + app.globalData.openid,
        })
      },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "垃圾分类碳计算器",
      path: '/pages/welcome/welcome',
      imageUrl: 'http://wkjsq.carbonstop.net/static/img/f.png',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '分享成功',
          icon: 'none'
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享失败',
          icon: 'none'
        })
      }
    }
  }
})