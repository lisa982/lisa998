// pages/meet/meetResult2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    save: true,
    load: true,
    prurl: '',
    tips: '加载时间较久，请稍后.....',
    show: true,
    animated: true,
    imgurl: "",
  },
  result: function() {
   wx.redirectTo({
     url: '../welcome/welcome',
   })
  },

  saveImg: function() {
    let that = this
    console.log(that.data.prurl)
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() { //这里是用户同意授权后的回调
              setTimeout(() => {
                wx.saveImageToPhotosAlbum({ // 这张图片保存到本地相册
                  //shareImgSrc为canvas赋值的图片路径
                  filePath: that.data.prurl,
                  success(res) {
                    console.log('保存成功');
                    wx.showModal({
                      title: '保存成功',
                      content: '图片成功保存到相册了，快去发朋友圈吧~',
                      showCancel: false,
                      confirmText: '确认',
                      confirmColor: '#21e6c1',
                      success: function(res) {
                        if (res.confirm) {
                          console.log('用户点击确定');
                          wx.navigateTo({
                            url: '../welcome/welcome',
                          })
                        }
                      }
                    })
                  },
                  fail(a) {
                    console.log(a)
                  }
                })
              }, 1000)
            },
            fail(a) { //这((里是用户拒绝授权后的回调
              console.log(a)
            }
          })
        } else { //用户已经授权过了
          setTimeout(() => {
            wx.saveImageToPhotosAlbum({ // 这张图片保存到本地相册
              //shareImgSrc为canvas赋值的图片路径
              filePath: that.data.prurl,
              success(res) {
                console.log('保存成功');
                wx.showModal({
                  title: '保存成功',
                  content: '图片成功保存到相册了，快去发朋友圈吧~',
                  showCancel: false,
                  confirmText: '确认',
                  confirmColor: '#21e6c1',
                  success: function(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                      wx.navigateTo({
                        url: '../welcome/welcome',
                      })
                    }
                  }
                })
              },
              fail(a) {
                console.log(a)
              }
            })
          }, 1000)
        }
      }
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.openid)
    setTimeout(() => {
      //           console.log(app.globalData.openid, app.globalData.meetResult)
      let that = this
      var windowwidth;
      var windowheight
      wx.getSystemInfo({
        success: function (res) {
          console.log(res.windowWidth)
          windowwidth = res.windowWidth
          windowheight = res.windowHeight
        },
      })
      wx.showLoading({
        icon: "none",
        title: '加载中，请稍等~',
      })
      wx.request({
        url: 'https://wkjsq.carbonstop.net/users/img/',
        data: {
          openid:app.globalData.openid,
          result: app.globalData.meetResult,
        },
        success: (res) => {
          wx.hideLoading()
          console.log(res.data)
          app.globalData.imgurl = res.data.imgurl
          console.log(that.data.prurl)
          const ctx = wx.createCanvasContext('myCanvas1')
          wx.getImageInfo({
            src: app.globalData.imgurl, //服务器返回的图片地址
            success: function (res) {
              //res.path是网络图片的本地地址
              console.log(res)
              let Path = res.path;
              ctx.drawImage(Path, windowwidth * 0.1, windowheight * 0.05, windowwidth * 0.8, windowheight*0.6);
              ctx.draw(true, function () {
              
                setTimeout(() => {
                  wx.hideLoading()
                  // console.log('time')
                  wx.canvasToTempFilePath({
                    canvasId: 'myCanvas1',
                    success: function (res) {
                      console.log(res.tempFilePath)
                      that.setData({
                        prurl:res.tempFilePath
                      })
                      // wx.previewImage({
                      //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
                      // })
                    },
                    fail: function (res) {
                      wx.hideLoading()
                      console.log(res)
                    }
                  });
                }, 1000)
              })
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      })
    }, 1000)
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
  onShareAppMessage: function (res) {
    let that = this
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
        that.setData({
          save: true
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