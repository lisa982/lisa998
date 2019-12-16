//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度   
    imageHeight: wx.getSystemInfoSync().windowHeight,//图片宽度   
    indicatorDots: true,
    autoplay: true,//是否自动轮播
    interval: 4000,
    duration: 1000,
    indicatorcolor:"#60C0CB",
    imgUrls: [
      "http://wkjsq.carbonstop.net/static/bj/1.png",
      "http://wkjsq.carbonstop.net/static/bj/2.png",
      "http://wkjsq.carbonstop.net/static/bj/3.png"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
enter:function(){
wx.navigateTo({
  url: '../welcome/welcome',
  success: function(res) {},
  fail: function(res) {},
  complete: function(res) {},
})
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  Enter:function(e){
    console.log("Enter")
    console.log(e.detail.userInfo)
    wx.navigateTo({
      url: '../welcome/welcome',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
      title:"社区垃圾分类碳减排计算器",
      path: '/pages/index/index?name='+ '&id=' + 1 + '',
      imageUrl:"http://wkjsq.carbonstop.net/static/img/3.png",
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '分享成功',
          icon: 'none'
        })
      },
      fail: function (res) {
        // 转发失败
        console.log("fail")
      }
    }
  }
})
