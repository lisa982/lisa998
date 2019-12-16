// pages/copy/copy.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: "",
    talks: "",
    details: "",
    nax: "-1"
  },
  talk(e) {
    console.log(e.detail.value);
    var that = this;
    that.setData({
      details: e.detail.value
    });
    // console.log(that.data.details)
  },
  send: function() {
    let that = this
    console.log(that.data.openid)
    console.log(that.data.details)
    wx.showLoading({
      icon: "none",
      title: '加载中',
    })
    wx.request({
      url: app.globalData.url + '/community/paste/',
      data: {
        openid: that.data.openid,
        type: "会议",
        value: that.data.details,
      },
      success: (res) => {
        wx.hideLoading()
        console.log(that.data.details)
        if (res.data.msg == "粘贴有丢失") {
          console.log(res)
          wx.showToast({
            icon: "none",
            title: '请返回重新进行复制' + res.data.msg,
          })
          that.setData({
            details: ""
          })
        } else if (res.data.error) {
          wx.showToast({
            icon: "none",
            title:  res.data.error,
          })
          that.setData({
            details: ""
          })
        } else {
          console.log(res.data)
          wx.redirectTo({
            url: '../meet/meetResult?id=' + JSON.stringify(res.data),
            success: function(res) {
              wx.hideLoading();
            },
            fail: function(res) {},
            complete: function(res) {},
          })
          that.setData({
            details: ""
          })
        }
      },
      fail: (err) => {
        console.log(err)
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    let that = this
    that.setData({
      openid: options.id
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})