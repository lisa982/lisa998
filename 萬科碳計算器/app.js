//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    result1:"",
    people1:"",
    people:"",
    value:"",//测试输入值是否为数字
    url:"https://wkjsq.carbonstop.net/",
    urlImg:"https://wkjsq.carbonstop.net/static/icon/",
    // url:"http://192.168.1.108:8001",
    plane:"",//获取飞机出发地
    train:"",//获取火车出发地
    result:'',//返回社区结果
    openid:"",//返回openid
    openids:"",
    code:"",
    imgurl:"",
    clickList:"",
    trafficList:"",
    planeend:"",
    trainend:"",
    nickname:"",
    foodresult:"",
    hotelresult:"",
    powerresult:"",
    paperresult:"",
    trafficresult:"",
    meetResult:"",
    HelpText:"",//
    classHelp1:"",
    classHelp2: "",
    classHelp3: "",
    classHelp4: "",
    classHelp5: "", 
    meetHelp1: "",
    meetHelp2: "",
    meetHelp3: "",
    meetHelp4: "",
    classHelp:"",
    meetHelp:"",
  }
})