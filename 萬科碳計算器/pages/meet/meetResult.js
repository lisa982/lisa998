// pages/meet/meetResult.js
import wxCharts from '../../utils/wxcharts-min.js'
var app = getApp();
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    nickname1: "",
    save: true,
    load: true,
    prurl: '',
    tips: '加载时间较久，请稍后.....',
    show: true,
    animated: true,
    imgurl:"",
  },
  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  replace: function () {
    wx.redirectTo({
      url: '../welcome/welcome',
    })
  },
  //文本换行 参数：1、canvas对象，2、文本 3、距离左侧的距离 4、距离顶部的距离 5、6、文本的宽度
  drawText: function (ctx, str, leftWidth, initHeight, titleHeight, canvasWidth) {
    var lineWidth = 0;
    var lastSubStrIndex = 0; //每次开始截取的字符串的索引
    for (let i = 0; i < str.length; i++) {
      lineWidth += ctx.measureText(str[i]).width;
      if (lineWidth > canvasWidth) {
        ctx.fillText(str.substring(lastSubStrIndex, i), leftWidth, initHeight); //绘制截取部分
        initHeight += 16; //16为字体的高度
        lineWidth = 0;
        lastSubStrIndex = i;
        titleHeight += 30;
      }
      if (i == str.length - 1) { //绘制剩余部分
        ctx.fillText(str.substring(lastSubStrIndex, i + 1), leftWidth, initHeight);
      }
    }
    // 标题border-bottom 线距顶部距离
    titleHeight = titleHeight + 10;
    return titleHeight
  },
  result: function () {
    wx.redirectTo({
      url: 'meetResult2',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    // wx.getSystemInfo({
    //   success: function (res) {
    //     console.log(res.platform)
    //     if (res.platform == "ios") {
    //    wx.showModal({
    //      title: '请截图保存',
    //      content: '',
    //    })
    //       wx.request({
    //         url: 'http://wkjsq.carbonstop.net/users/img/?openid=o866L5WEEOAhJE_fCpP_XwzrepVk',
    //         data: {
    //           openid: app.globalData.openid,
    //           result: app.globalData.meetResult,
    //         },
    //         success: (res) => {
    //           wx.hideLoading()
    //           console.log(res.data)
    //           that.setData({
    //             prurl: res.data.imgurl
    //           })
    //           app.globalData.imgurl = res.data.imgurl
    //           console.log(that.data.prurl)
    //           const ctx = wx.createCanvasContext('myCanvas1')
    //           wx.getImageInfo({
    //             src: app.globalData.imgurl, //服务器返回的图片地址
    //             success: function (res) {
    //               //res.path是网络图片的本地地址
    //               console.log(res)
    //               let Path = res.path;
                
    //             },
    //             fail: function (res) {
    //               console.log(res)
    //             }
    //           })
    //         }
    //       })
    //     }else{
    //       setTimeout(() => {
    //         console.log(app.globalData.openid, app.globalData.meetResult)
    //         let that = this
    //         var windowwidth;
    //         var windowheight
    //         wx.getSystemInfo({
    //           success: function (res) {
    //             console.log(res.windowWidth)
    //             windowwidth = res.windowWidth
    //             windowheight = res.windowHeight
    //           },
    //         })
    //         wx.showLoading({
    //           icon: "none",
    //           title: '加载中，请稍等~',
    //         })
    //         wx.request({
    //           url: 'http://wkjsq.carbonstop.net/users/img/?openid=o866L5WEEOAhJE_fCpP_XwzrepVk',
    //           data: {
    //             openid: app.globalData.openid,
    //             result: app.globalData.meetResult,
    //           },
    //           success: (res) => {
    //             wx.hideLoading()
    //             console.log(res.data)
    //             that.setData({
    //               prurl: res.data.imgurl
    //             })
    //             app.globalData.imgurl = res.data.imgurl
    //             console.log(that.data.prurl)
    //             const ctx = wx.createCanvasContext('myCanvas1')
    //             wx.getImageInfo({
    //               src: app.globalData.imgurl, //服务器返回的图片地址
    //               success: function (res) {
    //                 //res.path是网络图片的本地地址
    //                 console.log(res)
    //                 let Path = res.path;

    //                 ctx.drawImage(Path, windowwidth * 0.2, windowheight * 0.15, windowwidth * 0.6, windowheight * 0.5);
    //                 ctx.draw(false, function () {
    //                   that.setData({
    //                     save: false,
    //                     load: true
    //                   })
    //                   setTimeout(() => {
    //                     wx.hideLoading()
    //                     // console.log('time')
    //                     wx.canvasToTempFilePath({
    //                       canvasId: 'myCanvas1',
    //                       success: function (res) {
    //                         console.log(res.tempFilePath)
    //                         // wx.previewImage({
    //                         //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
    //                         // })
    //                         that.setData({
    //                           prurl: res.tempFilePath,
    //                           save: false
    //                         })
    //                       },
    //                       fail: function (res) {
    //                         wx.hideLoading()
    //                         console.log(res)
    //                       }
    //                     });
    //                   }, 1000)
    //                 })
    //               },
    //               fail: function (res) {
    //                 console.log(res)
    //               }
    //             })
    //           }
    //         })
    //       }, 1000)
    //     }
    //   }
    // })
  },

    // let that = this
    // wx.showLoading({
    //   icon: "none",
    //   title: '加载中，请稍等~',
    // })
    // var windowwidth;
    // var windowheight
    // wx.getSystemInfo({
    //   success: function (res) {
    //     console.log(res.windowWidth)
    //     windowwidth = res.windowWidth
    //     windowheight = res.windowHeight
    //   },
    // })
    // ctx.drawImage('../../img/historyback.png', windowwidth * 0.2, windowheight * 0.15, windowwidth * 0.6, windowheight * 0.5);
    // ctx.setFillStyle('white')
    // ctx.fillRect(windowwidth * 0.25, windowheight * 0.2, windowwidth * 0.5, windowheight * 0.4)
    // ctx.drawImage('../../img/carbonstoplogoda.png', windowwidth * 0.55, windowheight * 0.22, windowwidth * 0.12, windowheight * 0.025);
    // ctx.drawImage('../../img/vankelogoda.png', windowwidth * 0.3, windowheight * 0.22, windowwidth * 0.12, windowheight * 0.025);
    // ctx.drawImage('../../img/QRcode_kuang.png', windowwidth * 0.42, windowheight * 0.50, windowwidth * 0.16, windowheight * 0.09);
    // ctx.drawImage('../../img/QRcode.jpg', windowwidth * 0.428, windowheight * 0.505, windowwidth * 0.14, windowheight * 0.080);
    // ctx.setTextAlign('left')    // 文字居中
    // ctx.setFillStyle('#000000') // 文字颜色：黑色
    // ctx.setFontSize(windowwidth * 0.03) // 文字字号：22px
    // // ctx.fillText(, 120, 200)
    // that.drawText(ctx, '「' + app.globalData.userInfo.nickName + '」经过碳计算器计算，结果展示如下：', windowwidth * 0.34, windowheight * 0.29, windowwidth * 0.52, windowheight * 0.2);
    // that.drawText(ctx, that.data.text, windowwidth * 0.32, windowheight * 0.35, windowwidth * 0.01, windowheight * 0.2);
    // // ctx.fillText('「{{nickname1}}」 经过碳计算器计算，结果展示如下：', 120, 300, 200, 200)
    // ctx.stroke();
    // ctx.draw(false, function () {
    //   that.setData({
    //     save: false,
    //     load: true
    //   })
    //   setTimeout(() => {
    //     wx.hideLoading()
    //     // console.log('time')
    //     wx.canvasToTempFilePath({
    //       canvasId: 'myCanvas1',
    //       success: function (res) {
    //         console.log(res.tempFilePath)
    //         // wx.previewImage({
    //         //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
    //         // })
    //         that.setData({
    //           prurl: res.tempFilePath,
    //           save: false
    //         })
    //       },
    //       fail: function (res) {
    //         wx.hideLoading()
    //         console.log(res)
    //       }
    //     });
    //   }, 1000)
    // })
    //   },fail:()=>{
    //     console.log("错误")
    //   }

    // })

  // result: function () {

  //   //  setTimeout(()=>{
  //   //    const ctx = wx.createCanvasContext('myCanvas1')
  //   //    let that = this
  //   //    wx.showLoading({
  //   //      icon: "none",
  //   //      title: '加载中，请稍等~',
  //   //    })
  //   //    var windowwidth;
  //   //    var windowheight
  //   //    wx.getSystemInfo({
  //   //      success: function (res) {
  //   //        console.log(res.windowWidth)
  //   //        windowwidth = res.windowWidth
  //   //        windowheight = res.windowHeight
  //   //      },
  //   //    })
  //   //    var avatarUrl = app.globalData.userInfo.avatarUrl
  //   //    let text = app.globalData.userInfo.nickName
  //   //    let content = that.data.text
  //   //    ctx.drawImage('../../img/historyback.png', windowwidth * 0.2, windowheight * 0.15, windowwidth * 0.6, windowheight * 0.5);
  //   //    ctx.setFillStyle('white')
  //   //    ctx.fillRect(windowwidth * 0.25, windowheight * 0.2, windowwidth * 0.5, windowheight * 0.4)
  //   //    ctx.drawImage('../../img/carbonstoplogoda.png', windowwidth * 0.55, windowheight * 0.22, windowwidth * 0.12, windowheight * 0.025);
  //   //    ctx.drawImage('../../img/vankelogoda.png', windowwidth * 0.3, windowheight * 0.22, windowwidth * 0.12, windowheight * 0.025);
  //   //    ctx.drawImage('../../img/QRcode_kuang.png', windowwidth * 0.42, windowheight * 0.50, windowwidth * 0.16, windowheight * 0.09);
  //   //    ctx.drawImage('../../img/QRcode.jpg', windowwidth * 0.428, windowheight * 0.505, windowwidth * 0.14, windowheight * 0.080);
  //   //    ctx.setTextAlign('left')    // 文字居中
  //   //    ctx.setFillStyle('#000000') // 文字颜色：黑色
  //   //    ctx.setFontSize(windowwidth * 0.03) // 文字字号：22px
  //   //    // ctx.fillText(, 120, 200)
  //   //    that.drawText(ctx, '「' + text + '」经过碳计算器计算，结果展示如下：', windowwidth * 0.34, windowheight * 0.29, windowwidth * 0.52, windowheight * 0.2);
  //   //    that.drawText(ctx, content, windowwidth * 0.32, windowheight * 0.35, windowwidth * 0.01, windowheight * 0.2);
  //   //    // ctx.fillText('「{{nickname1}}」 经过碳计算器计算，结果展示如下：', 120, 300, 200, 200)
  //   //    ctx.stroke();
  //   //    ctx.draw(false, function () {
  //   //      that.setData({
  //   //        save: false,
  //   //        load: true
  //   //      })
  //   //      setTimeout(() => {
  //   //        wx.hideLoading()
  //   //        // console.log('time')
  //   //        wx.canvasToTempFilePath({
  //   //          canvasId: 'myCanvas1',
  //   //          success: function (res) {
  //   //            console.log(res.tempFilePath)
  //   //            // wx.previewImage({
  //   //            //   urls: [res.tempFilePath] // 需要预览的图片http链接列表
  //   //            // })
  //   //            that.setData({
  //   //              prurl: res.tempFilePath,
  //   //              save: false
  //   //            })
  //   //          },
  //   //          fail: function (res) {
  //   //            wx.hideLoading()
  //   //            console.log(res)
  //   //          }
  //   //        });
  //   //      }, 1000)
  //   //    })
  //   //  },1000)
  // },
  saveImg: function () {
    let that = this
    console.log(that.data.prurl)
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {//这里是用户同意授权后的回调
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
                      success: function (res) {
                        if (res.confirm) {
                          console.log('用户点击确定');
                          that.setData({
                            save: true
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
            fail(a) {//这((里是用户拒绝授权后的回调
              console.log(a)
            }
          })
        } else {//用户已经授权过了
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
                  success: function (res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                      that.setData({
                        save: true
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
  onLoad: function (options, e) {

    // console.log(app.globalData.userInfo.nickName)
    console.log(JSON.parse(options.id))
    let num = JSON.parse(options.id)
    let arr = []
    let that = this
    that.setData({
      // nickname1: app.globalData.userInfo.nickName
    })
    arr.push(num.foodresult, num.hotelresult, num.powerresult, num.paperresult, num.trafficresult)
    app.globalData.hotelresult = num.hotelresult
    app.globalData.trafficresult = num.trafficresult
    app.globalData.foodresult = num.foodresult
    app.globalData.paperresult = num.paperresult
    app.globalData.powerresult = num.powerresult
    app.globalData.meetResult = num.result
    console.log(num.result)
    var windowWidth = 350;
    // try {
    //   var res = wx.getSystemInfoSync();
    //   windowWidth = res.windowWidth;
    //   console.log(windowWidth)
    // } catch (e) {
    //   console.error('getSystemInfoSync failed!');
    // }
    var res = wx.getSystemInfoSync(); //试图获取屏幕宽高数据
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
        text: "本次会议您共计排放" + app.globalData.meetResult + "千克二氧化碳，其中餐饮排放最多，请合理膳食，荤素搭配，营养更均衡。"
      })
    } else if (max[4] == app.globalData.hotelresult) {
      that.setData({
        text: "本次会议您共计排放" + app.globalData.meetResult + "千克二氧化碳，其中住宿排放最多，请合理安排住宿，减少酒店住宿，对环境更友好。"
      })
    } else if (max[4] == app.globalData.powerresult) {
      that.setData({
        text: "本次会议您共计排放" + app.globalData.meetResult + "千克二氧化碳，其中会场用能排放最多，请节约用电，减少能源消耗。"
      })
    } else if (max[4] == app.globalData.paperresult) {
      that.setData({
        text: "本次会议您共计排放" + app.globalData.meetResult + "千克二氧化碳，其中会场用纸排放最多，请节约用纸，尽量双面打印，减少资源消耗。"
      })
    } else if (max[4] == app.globalData.trafficresult) {
      that.setData({
        text: "本次会议您共计排放" + app.globalData.meetResult + "千克二氧化碳，其中交通出行排放最多，请合理安排出行方式，尽量选择公共交通出行。"
      })
    }

  },
  bubbleSort: function (arr) {
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