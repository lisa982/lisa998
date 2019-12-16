// pages/welcome/welcome.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    nical:true,
    code: "",
    modalHidden: true,
    nickname: "",
    prurl:"",
    str: "",
    avatarurl: "",
    msg: "",
    title: [{
        name: '社区碳计算器',
        id: "getClass",
        animate: "bounceInLeft"
      }, {
        name: '会议碳计算器',
        id: "getMeet",
        animate: "bounceInRight"
      }

    ]
  },
  
  help: function () {

    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */

  /**
   *  点击确认
   */
  modalConfirm: function () {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  getClass: function() {
    if (this.data.isHide == true) {
      console.log("dd")
    } else {
      console.log(app.globalData.openid)
      wx.redirectTo({
        url: '../classHelp/classHelp?id=' + app.globalData.openid,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
      
    }
  },
  getMeet: function() {
    if (this.data.isHide == true) {
      console.log("dd")
    } else {
      wx.redirectTo({
        url: '../meetHelp/meetHelp?id=' + app.globalData.openid,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  history:function(){
    if (app.globalData.openid==""){
      wx.showToast({
        icon:"none",
        title: '请允许获取授权',
      })
    }else{
     wx.redirectTo({
       url: '../history/history?id=' + app.globalData.openid,
     })
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo.nickname)
              app.globalData.userInfo = res.userInfo
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log(app.globalData.userInfo.nickName)
                  console.log("用户的code:" + res.code)
                  app.globalData.code = res.code
                  // console.log(this.data.nickname, this.data.code)
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  wx.request({
                    // 自行补上自己的 APPID 和 SECRET
                    url: 'https://wkjsq.carbonstop.net/users/login/',
                    method: "get",
                    header: {
                      'content-type': 'application/x-www-form-urlencoded'
                    }, // 设置请求的 header
                    data: {
                      code: res.code,
                      nickname: app.globalData.userInfo.nickName,
                      avatarurl: app.globalData.userInfo.avatarUrl,
                    },
                    success: res => {
                      console.log(res)
                      console.log(res.code)
                      console.log(app.globalData.userInfo.avatarUrl)
                      console.log(app.globalData.userInfo.nickName)
                      // 获取到用户的 openid
                      app.globalData.openid = res.data.openid

                      console.log("用户的openid:" + app.globalData.openid );
                    }
                  });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true,
            msg: ""
          });
        }
      }
    });
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        console.log(res.data)
        app.globalData.openid = res.data
      },
    }), wx.request({
      url: app.globalData.url + 'users/info/',
      success: (res) => {
        app.globalData.HelpText = res.data.info.data[0].text1
        app.globalData.classHelp1 = res.data.info.data[0].text4
        app.globalData.classHelp2 = res.data.info.data[0].text5
        app.globalData.classHelp3 = res.data.info.data[0].text6
        app.globalData.classHelp4 = res.data.info.data[0].text7
        app.globalData.meetHelp1 = res.data.info.data[0].text8
        app.globalData.meetHelp2 = res.data.info.data[0].text9
        app.globalData.meetHelp3 = res.data.info.data[0].text10
        app.globalData.meetHelp4 = res.data.info.data[0].text11
        app.globalData.meetHelp5 = res.data.info.data[0].text12
        app.globalData.meetHelp = res.data.info.data[0].text2
        app.globalData.classHelp = res.data.info.data[0].text3
        console.log(app.globalData.meetHelp1)
      },
      fail: function() {

      }
    })
    console.log(app.globalData.openid)
  },

  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.getSetting({
        success: function(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
                app.globalData.userInfo = res.userInfo
                // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                // 根据自己的需求有其他操作再补充
                // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                wx.login({
                  success: res => {
                    // 获取到用户的 code 之后：res.code
                    console.log(app.globalData.userInfo.nickName)
                    console.log("用户的code:" + res.code)
                    app.globalData.code = res.code
                    // console.log(this.data.nickname, this.data.code)
                    // 可以传给后台，再经过解析获取用户的 openid
                    // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                    wx.request({
                      // 自行补上自己的 APPID 和 SECRET
                      url: 'https://wkjsq.carbonstop.net/users/login/',
                      method: "get",
                      header: {
                        'content-type': 'application/x-www-form-urlencoded'
                      }, // 设置请求的 header
                      data: {
                        code: res.code,
                        nickname: app.globalData.userInfo.nickName,
                        avatarurl: app.globalData.userInfo.avatarUrl,
                      },
                      success: res => {
                        console.log(res)
                        console.log(res.code)
                        console.log(app.globalData.userInfo.avatarUrl)
                        console.log(app.globalData.userInfo.nickName)
                        // 获取到用户的 openid
                        app.globalData.openid = res.data.openid
                        wx.setStorage({
                          key: 'openid',
                          data: res.data.openid,
                          success: function(res) {
                            console.log(res);
                          },
                          fail: function(log) {
                            console.log(log);
                          },
                          complete: function(com) {
                            console.log(com);
                          }
                        })
                        console.log("用户的openid:" + res.data.openid);
                      }
                    });
                  }
                });
              }
            });
          } else {
            // 用户没有授权
            // 改变 isHide 的值，显示授权页面
            that.setData({
              isHide: true,
              msg: ""
            });
          }
        }
      });
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      let user = e.detail.userInfo
      console.log(user);
      console.log(app.globalData.openid)
      this.setData({
        avatarUrl: user.avatarUrl,
        nickname: user.nickname,
      })
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 onShow:function(){

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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: "垃圾分类碳计算器",
      path: '/pages/welcome/welcome',
      imageUrl: 'http://wkjsq.carbonstop.net/static/img/f.png',
      success: function(res) {
        // 转发成功
        wx.showToast({
          title: '分享成功',
          icon: 'none'
        })
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }
})