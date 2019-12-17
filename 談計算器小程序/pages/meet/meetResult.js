// pages/meet/meetResult.js
import wxCharts from '../../utils/wxcharts-min.js'
var app = getApp();
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "44"
  },
  touchHandler: function(e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  replace: function () {
    wx.navigateTo({
      url: '../welcome/welcome',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options, e) {
    console.log(JSON.parse(options.id))
    let num = JSON.parse(options.id)
    let arr = []
    let that = this
    arr.push(num.foodresult, num.hotelresult, num.powerresult, num.paperresult, num.trafficresult)
    app.globalData.hotelresult = num.hotelresult
    app.globalData.trafficresult = num.trafficresult
    app.globalData.foodresult = num.foodresult
    app.globalData.paperresult = num.paperresult
    app.globalData.powerresult = num.powerresult
    app.globalData.meetResult = num.result
    var windowWidth = 350;
    // try {
    //   var res = wx.getSystemInfoSync();
    //   windowWidth = res.windowWidth;
    //   console.log(windowWidth)
    // } catch (e) {
    //   console.error('getSystemInfoSync failed!');
    // }
      var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
        var windowwidth = res.windowWidth;
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: "餐饮",
        data: num.foodresult,
      }, {
        name: "住宿",
        data: num.hotelresult,
      }, {
        name: "会议用能",
        data: num.powerresult,
      }, {
        name: "会议用纸",
        data: num.paperresult,
      }, {
        name: "交通",
        data: num.trafficresult,
      }],
      width: windowwidth,
      height: 300,
      dataLabel: true,
    })
    let max = that.bubbleSort(arr)
    console.log(max, max[4], app.globalData.hotelresult)
    if (max[4] == app.globalData.foodresult) {
      that.setData({
        text: "本次会议共计排放" + app.globalData.meetResult + "千克二氧化碳，其中餐饮排放最多，请合理膳食，荤素搭配，营养更均衡。"
      })
    } else if (max[4] == app.globalData.hotelresult) {
      that.setData({
        text: "本次会议共计排放" + app.globalData.meetResult + "千克二氧化碳，其中住宿排放最多，请合理安排住宿，减少酒店住宿，对环境更友好。"
      })
    } else if (max[4] == app.globalData.powerresult) {
      that.setData({
        text: "本次会议共计排放" + app.globalData.meetResult + "千克二氧化碳，其中会场用能排放最多，请节约用电，减少能源消耗。"
      })
    } else if (max[4] == app.globalData.paperresult) {
      that.setData({
        text: "本次会议共计排放" + app.globalData.meetResult + "千克二氧化碳，其中会场用纸排放最多，请节约用纸，尽量双面打印，减少资源消耗。"
      })
    } else if (max[4] == app.globalData.trafficresult) {
      that.setData({
        text: "本次会议共计排放" + app.globalData.meetResult + "千克二氧化碳，其中交通出行排放最多，请合理安排出行方式，尽量选择公共交通出行。"
      })
    }

  },
  bubbleSort: function(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          var temp;
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
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
      path: '/pages/index/index?name=' + '&id=' +1 + '',
      success: function(res) {
        // 转发成功
        wx.showToast({
          title: '分享成功',
          icon: 'none'
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享失败',
          icon: 'none'
        })
      }
    }
  }
})