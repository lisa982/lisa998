// pages/history/history.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleImg: [{
        src: app.globalData.urlImg + ""
      },
      {
        src: app.globalData.urlImg + ""
      }
    ],
    tab: 0,
    page: 0,
    page2: 0,
    historydata: "",
    history: "",
    historynone: false,
    tablehidden: true,
    aheight: "",
    community: "",
    communitynone: true,
    options: "",
    histext: "点击加载更多",
    commtext: "点击加载更多"
  },

  stopTouchMove: function () {
    return false;
  },
  tab_click: function(e) { //点击tab切换
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
      if (that.data.tab == "0") {
        console.log("huiyi")
        let that = this
        // 会议
        that.setData({
          page: 0
        })
        wx.showLoading({
          icon: "none",
          title: '加载中，请稍等',
        })
        wx.request({
          url: app.globalData.url + '/community/meetinghis/',
          data: {
            openid: that.data.options,
            page: that.data.page,
          },
          success: (res) => {
            wx.hideLoading()
            console.log(res.data.list.data)
            if (res.data.list.data.length < 1) {
              that.setData({
                historynone: false,
                tablehidden: true,
              })
            } else {
              if (res.data.list.data.length < 10) {
                that.setData({
                  histext: "暂无更多"
                })
              } else {
                that.setData({
                  histext: "加载更多"
                })
              }
              that.setData({
                historynone: true,
                tablehidden: false,
                historydata: res.data.list.data
              })
              console.log(that.data.historydata)
              var line = Math.ceil(that.data.historydata.length / 3.0);
              that.setData({
                aheight: 60 + 230 * line
              });
              console.log(that.data.aheight)
            }
          },
          fail: (res) => {
            console.log(res)
            wx.showToast({
              icon: "none",
              title: '加载出错',
            })
            wx.navigateTo({
              url: '../welcome/welcome',
            })
          }
        })
      } else {
        let that = this
        that.setData({
          page2: 0
        })
        wx.showLoading({
          icon: "none",
          title: '加载中，请稍等',
        })
        wx.request({
          url: app.globalData.url + '/community/communityhis/',
          data: {
            openid: that.data.options,
            page: that.data.page2,
          },
          success: (res) => {
            wx.hideLoading()
            console.log(res.data.list.data)
            if (res.data.list.data.length < 1) {
              that.setData({
                communitynone: false
              })
            } else {
              if (res.data.list.data.length < 10) {
                that.setData({
                  commtext: "暂无更多"
                })
              } else {
                that.setData({
                  commtext: "点击加载更多"
                })
              }
              that.setData({
                communitynone: true,
                community: res.data.list.data
              })
              console.log(that.data.community)
              let line = Math.ceil(that.data.community.length / 3.0);
              that.setData({
                aheight: 60 + 230 * line
              });
              console.log(that.data.aheight)
            }
          },
          fail: (res) => {
            console.log(res)
            wx.showToast({
              icon: "none",
              title: '加载出错',
            })
            wx.navigateTo({
              url: '../welcome/welcome',
            })
          }
        })
      }
    }
  },
  more() {
    let that = this
    var newpages = Number(that.data.page++);
    // console.log(newpages)
    let next = newpages
    let oldmsg = that.data.historydata
    console.log(oldmsg)
    console.log(that.data.histext)
    if (that.data.histext == "暂无更多") {
      wx.showToast({
        icon: "none",
        title: '暂无更多',
      })
    } else {
      if (newpages == 0) {
        newpages = 1
        next = newpages
        wx.showLoading({
          icon: "none",
          title: '加载中，请稍等',
        })
        wx.request({
          url: app.globalData.url + '/community/meetinghis/',
          data: {
            openid: that.data.options,
            page: newpages,
          },
          success: (res) => {
            wx.hideLoading()
            console.log(res.data.list.data)
            if (res.data.list.data.length < 1) {
              that.setData({
                histext: "暂无更多"
              })
            } else {
              console.log(oldmsg, res.data.list.data.length)
              if (res.data.list.data.length < 10) {
                that.setData({
                  histext: "暂无更多"
                })
              }
              for (let i = 0; i < res.data.list.data.length; i++) {
                console.log(res.data.list.data[i])
                oldmsg.push(res.data.list.data[i])
              }
              console.log(oldmsg)
              that.setData({
                historynone: true,
                tablehidden: false,
                historydata: oldmsg
              })
              console.log(that.data.historydata)
              let line = Math.ceil(that.data.historydata.length / 3.0);
              that.setData({
                aheight: 60 + 260 * line
              });
              console.log(that.data.aheight)
            }
          },
          fail: (res) => {
            console.log(res)
            wx.showToast({
              icon: "none",
              title: '加载出错',
            })
            wx.navigateTo({
              url: '../welcome/welcome',
            })
          }
        })
        console.log(newpages)
      } else {
        next++
        console.log(next)
        wx.showLoading({
          icon: "none",
          title: '加载中，请稍等',
        })
        wx.request({
          url: app.globalData.url + '/community/meetinghis/',
          data: {
            openid: that.data.options,
            page: next,
          },
          success: (res) => {
            wx.hideLoading()
            console.log(res.data.list.data.length)
            if (res.data.list.data.length == 0) {
              that.setData({
                histext: "暂无更多"
              })
            } else {
              console.log(oldmsg)
              if (res.data.list.data.length < 10) {
                that.setData({
                  histext: "暂无更多"
                })
              } else if (res.data.list.data.length == 10) {
                that.setData({
                  histext: "暂无更多"
                })
              } else {
                that.setData({
                  histext: "加载更多"
                })
              }
              for (let i = 0; i < res.data.list.data.length; i++) {
                console.log(res.data.list.data[i])
                oldmsg.push(res.data.list.data[i])
              }
              console.log(oldmsg)
              that.setData({
                historynone: true,
                historydata: oldmsg
              })
              console.log(that.data.historydata)
              var line = Math.ceil(that.data.historydata.length / 3.0);
              that.setData({
                aheight: 60 + 230 * line
              });
              console.log(that.data.aheight)
            }
          },
          fail: (res) => {
            console.log(res)
            wx.showToast({
              icon: "none",
              title: '加载出错',
            })
            wx.navigateTo({
              url: '../welcome/welcome',
            })
          }
        })
      }
    }

    // that.community(oldpage)
  },
  morenext() {
    let that = this
    var newpage = Number(that.data.page2++);
    console.log(newpage)
    let next = newpage
    let oldmsg = that.data.community
    console.log(oldmsg)
    if (that.data.commtext == '暂无更多') {
      wx.showToast({
        icon: "none",
        title: '暂无更多',
      })
    } else {
      if (newpage == 0) {
        newpage = 1
        next = newpage
        console.log(newpage)
        wx.showLoading({
          icon: "none",
          title: '加载中，请稍等',
        })
        wx.request({
          url: app.globalData.url + '/community/meetinghis/',
          data: {
            openid: that.data.options,
            page: newpage,
          },
          success: (res) => {
            wx.hideLoading()
            console.log(res.data.list.data)
            if (res.data.list.data.length < 1) {
              that.setData({
                commtext: "暂无更多"
              })
            } else {
              console.log(oldmsg, res.data.list.data.length)
              if (res.data.list.data.length < 10) {
                that.setData({
                  commtext: "暂无更多"
                })
              }
              for (let i = 0; i < res.data.list.data.length; i++) {
                console.log(res.data.list.data[i])
                oldmsg.push(res.data.list.data[i])
              }
              console.log(oldmsg)
              that.setData({
                communitynone: true,
                community: oldmsg
              })
              console.log(that.data.community)
              var line = Math.ceil(that.data.community.length / 3.0);
              that.setData({
                aheight: 60 + 260 * line
              });
              console.log(that.data.aheight)
            }
          },
          fail: (res) => {
            console.log(res)
            wx.showToast({
              icon: "none",
              title: '加载出错',
            })
            wx.navigateTo({
              url: '../welcome/welcome',
            })
          }
        })
        // console.log(newpages)
      } else {
        next++
        console.log(next)
        wx.showLoading({
          icon: "none",
          title: '加载中，请稍等',
        })
        wx.request({
          url: app.globalData.url + '/community/meetinghis/',
          data: {
            openid: that.data.options,
            page: next,
          },
          success: (res) => {
            wx.hideLoading()
            console.log(res.data.list.data.length)
            if (res.data.list.data.length == 0) {
              that.setData({
                commtext: "暂无更多"
              })
            } else {
              console.log(oldmsg)
              if (res.data.list.data.length < 10) {
                that.setData({
                  commtext: "暂无更多"
                })
              }
              for (let i = 0; i < res.data.list.data.length; i++) {
                console.log(res.data.list.data[i])
                oldmsg.push(res.data.list.data[i])
              }
              console.log(oldmsg)
              that.setData({
                communitynone: true,
                community: oldmsg
              })
              console.log(that.data.community)
              var line = Math.ceil(that.data.community.length / 3.0);
              that.setData({
                aheight: 60 + 300 * line
              });
              console.log(that.data.aheight)
            }
          },
          fail: (res) => {
            console.log(res)
            wx.showToast({
              icon: "none",
              title: '加载出错',
            })
            wx.navigateTo({
              url: '../welcome/welcome',
            })
          }
        })
      }
    }
    // that.community(oldpage)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    let that = this
    that.setData({
      options: options.id
    })
    that.community(that.data.page)
  },
  community: function(pages) {
    let that = this
    wx.request({
      url: app.globalData.url + '/community/meetinghis/',
      data: {
        openid: that.data.options,
        page: pages,
      },
      success: (res) => {
        console.log(res.data.list.data.length)
        if (res.data.list.data.length < 1) {
          that.setData({
            historynone: false,
            tablehidden: true,
          })
        } else {
          that.setData({
            historynone: true,
            tablehidden: false,
            historydata: res.data.list.data
          })
          console.log(that.data.historydata)
          if (res.data.list.data.length < 10) {
            that.setData({
              histext: "暂无更多"
            })
          } else {
            that.setData({
              histext: "加载更多"
            })
          }
          var line = Math.ceil(that.data.historydata.length / 3.0);
          that.setData({
            aheight: 60 + 230 * line
          });
          console.log(that.data.aheight)
        }
      },
      fail: (res) => {
        console.log(res)
        wx.showToast({
          icon: "none",
          title: '加载出错',
        })
        wx.navigateTo({
          url: '../welcome/welcome',
        })
      }
    })
  },
  back: function() {
    wx.showLoading({
      icon: "none",
      title: '加载中',
    })
    wx.navigateTo({
      url: '../welcome/welcome',
      success: function(res) {
        wx.hideLoading()
      },
      fail: function(res) {
        wx.hideLoading()
      },
      complete: function(res) {},
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
  onShareAppMessage: function(res) {
    console.log(res)
    if (res.from === 'menu') {
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
        wx.showToast({
          title: '分享失败',
          icon: 'none'
        })
      }
    }
  }
})