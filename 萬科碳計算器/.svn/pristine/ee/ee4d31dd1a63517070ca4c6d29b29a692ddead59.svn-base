// pages/class/classResult.js
import wxCharts from '../../utils/wxcharts-min.js'
var app = getApp();
var ringChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    greening_refuse: "",
    harmful: "",
    kitchen_waste: "",
    recovery: "",
    result: "",
    text: "",
    people: "",
    trees: ""
  },
  // 重新计算按钮 
  replace:function() {
    wx.navigateTo({
      url: '../welcome/welcome',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(JSON.parse(options.id))
    var num = JSON.parse(options.id)
    var that = this
    console.log(num.per_capita, num.trees)
    if (num.greening_refuse < 10) {
      num.greening_refuse = num.greening_refuse * 100
      console.log(num.greening_refuse)
    } else {
      console.log(num.greening_refuse)
    }
    if (num.harmful < 50) {
      num.harmful = num.harmful * 100
    } else {

    }
    if (num.recovery < 50) {
      num.recovery = num.recovery * 100
    } else {

    }
    if (num.kitchen_waste < 50) {
      num.kitchen_waste = num.kitchen_waste * 100
    } else {

    }
    that.setData({
      greening_refuse: num.greening_refuse,
      harmful: num.harmful,
      kitchen_waste: num.kitchen_waste,
      recovery: num.recovery,
      result: num.result,
      people: parseInt(num.per_capita),
      trees: num.trees
    })
    console.log(that.data.result)
    if (num.result < 10) {
      console.log("xiaoyu10")
      that.setData({
        text: "      通过垃圾分类，您的社区共计减少" + num.result + "千克二氧化碳排放，相当于种植" + num.trees + "棵树，人均减排" + num.per_capita + "千克二氧化碳，表现欠佳，垃圾分类人人有责，要加油哦！"
      })
    } else if (num.result >= 10 && num.result <= 40) {
      console.log("dayu40")
      that.setData({
        text: "      通过垃圾分类，您的社区共计减少" + num.result + "千克二氧化碳排放，相当于种植" + num.trees + "棵树，人均减排" + num.per_capita + "千克二氧化碳，表现一般，要积极开展垃圾分类哦！"
      })
    } else if (num.result > 40) {
      console.log("dayu409")
      that.setData({
        text: "      通过垃圾分类，您的社区共计减少" + num.result + " 千克二氧化碳排放，相当于种植" + num.trees + "棵树，人均减排" + num.per_capita + "千克二氧化碳，表现优秀，继续保持吧！"
      })
    }
    console.log(that.data.greening_refuse)
    this.charts()
  },
  charts: function() {
    let that = this
    var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
    var windowwidth = res.windowWidth;
    console.log(that.data.greening_refuse * 100)
    new wxCharts({
      canvasId: 'canvas6',
      type: 'radar',
      categories: ['绿化垃圾', '有害垃圾', '厨余垃圾', '可回收垃圾'],
      series: [{
        name: '垃圾分类碳减排量',
        data: [that.data.greening_refuse, that.data.harmful, that.data.kitchen_waste, that.data.recovery ]
      }],
      width: windowwidth,
      height: 300,
      extra: {
        radar: {
          max: 200//雷达数值的最大值
        }
      }
    });
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
  onShareAppMessage: function(res) {
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "社区垃圾分类碳减排计算器",
      path: '/pages/index/index?name=' + '&id=' + 1 + '',
      success: function(res) {
        // 转发成功
        wx.showToast({
          title: '分享成功',
          icon: 'none'
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '分享失败',
          icon: 'none'
        })
      }
    }
  }
})