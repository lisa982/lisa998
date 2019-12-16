// pages/copy/copy.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: "",
    talks: ""
  },
  talk(e) {
    this.setData({
      talks: e.detail.value
    })
  },
  send: function() {
    let that = this
    console.log(that.data.openid)
    console.log(that.data.talks)
    wx.showLoading({
      icon: "none",
      title: '加载中',
    })
    wx.request({
      url: app.globalData.url + '/community/paste/',
      data: {
        openid: that.data.openid,
        type: "社区",
        value:that.data.talks,
      },
      success: (res) => {
        console.log(that.data.talks)
        if (res.data.msg == "粘贴有丢失") {
          console.log(res)
          wx.showToast({
            icon: "none",
            title: '请返回重新进行复制' + res.data.msg,
          })
          that.setData({
            talks: ""
          })
        }else if(res.data.error){
          wx.showToast({
            icon: "none",
            title: res.data.error,
          })
        } else {
          console.log(res.data)
          wx.redirectTo({
            url: '../class/classResult?id=' + JSON.stringify(res.data),
            success: function (res) {
              wx.hideLoading();
            },
            fail: function (res) { },
            complete: function (res) { },
          })
          that.setData({
            talks: ""
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