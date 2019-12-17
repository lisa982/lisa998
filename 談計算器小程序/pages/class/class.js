// pages/class/class.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: "",
    curIndex: 0,
    time: "",
    timerRight: "",
    touchStartTime: 0, // 触摸开始时间
    touchEndTime: 0, // 触摸结束时间
    lastTapTime: 0, // 最后一次单击事件点击发生时间
    hidden: false,
    history: "", //存储openid
    arr: [],
    recycled: "", //可回收垃圾
    kitchen: "", //厨余垃圾
    harmful: "", //有害垃圾
    green: "", //绿化垃圾
    recy: "",
    kitc: "",
    harm: "",
    gree: "",
    result: "",
    people: "",
    title_she: "", //
    text: "下一步",
    title: [{
        id: '0',
        title: "可回收垃圾",
        img: "http://wkjsq.carbonstop.net/static/icon/icon13.png"
      },
      {
        id: '1',
        title: "厨余垃圾",
        img: "http://wkjsq.carbonstop.net/static/icon/icon7.png"
      },
      {
        id: '2',
        title: "有害垃圾",
        img: "http://wkjsq.carbonstop.net/static/icon/icon8.png"
      },
      {
        id: '3',
        title: "绿化垃圾",
        bgcolor: 'blue',
        img: "http://wkjsq.carbonstop.net/static/icon/icon9.png"
      },
    ],
    content: [{
      id: "0",
      title: "请输入可回收垃圾数量",
      bg: [{
          id: "carton",
          name: "纸箱书报",
          unit: "千克",
          type: "digit",
          val: "0"
        }, {
          id: "metal",
          name: "金属",
          unit: "千克",
          type: "digit",
          val: "0"
        }, {
          id: "cans",
          name: "易拉罐",
          type: "number",
          unit: "个",
          val: "0"
        }, {
          id: "glass",
          name: "玻璃",
          type: "digit",
          unit: "千克",
          val: "0"
        }, {
          id: "beer",
          name: "啤酒瓶",
          type: "number",
          unit: "个",
          val: "0"
        },
        {
          id: "plastic",
          name: "塑料",
          type: "digit",
          unit: "千克",
          val: "0"
        },
        {
          id: "plasticBottles",
          name: "塑料瓶",
          type: "number",
          unit: "个",
          val: "0"
        },
        {
          id: "textile",
          name: "织物",
          type: "digit",
          unit: "千克",
          val: "0"
        }
      ],

    }, {
      id: "1",
      title: "请输入湿垃圾数量",
      bg: [
        // {
        // id: "treatment",
        // name: "黑水虻处理",
        // type: "digit",
        // unit: "千克",
        // val: "0"
      // },
       {
        id: "compost",
        name: "堆肥",
        type: "digit",
        unit: "千克",
        val: "0"
      }]
    }, {
      id: "2",
        title: "请输入有害垃圾数量",
      bg: [{
        id: "battery",
        name: "电池电子类",
        type: "digit",
        unit: "千克",
        val: "0"
      }],

    }, {
      id: "3",
      title: "请输入绿化垃圾数量",
      bg: [{
        id: "litter",
        name: "枯枝落叶",
        type: "digit",
        unit: "千克",
        val: "0"
      }]
    }]
  },
  //禁止用户左右滑动
  catchTouchMove: function(res) {
    return false
  },
  input: function(e) {
    let value = isNaN(Number(e.detail.value))
    if (value == true) {
      wx.showToast({
        icon: 'none',
        title: '请输入数字',
        duration: 2000
      })
    } else {
      console.log("number")
    }
  },
  //表单
  formSubmit: function(e) {
    var that = this
    console.log(e.detail.value)
    // this.data.
    var arr = e.detail.value
    console.log(arr)
    app.globalData.clickList = arr
    console.log(JSON.stringify(app.globalData.clickList))
    var array = this.data.content
    var carbon = []
    var arr2 = []
    var arr3 = []
    app.globalData.people = arr.people
    if (arr.people == "") {
      wx.showToast({
        icon: 'none',
        title: '请填写人数',
        duration: 2000
      })
    } else {
      if (arr.people < 0) {
        wx.showToast({
          icon: 'none',
          title: '人数不能为' + arr.people,
          duration: 2000
        })
      } else {
        that.setData({
          people: arr.people
        })
        if (that.data.curIndex == 0) {
          array[0].bg.forEach(function(item) {
            console.log(item)
            for (let a in arr) {
              if (a == item.id) {
                if (arr[a] != "") {
                  arr3.push(arr[a])
                  console.log(arr3)
                  let num = isNaN(Number(arr[a]))
                  app.globalData.value = isNaN(Number(arr[a]))
                  console.log(isNaN(Number(arr[a])))
                  if (num == true) {

                  } else {
                    arr2.push({
                      name: a,
                      value: arr[a]
                    })
                    console.log(arr2)
                  }
                }
              }
            }
          })
          that.setData({
            recycled: arr2
          })
          // if (that.data.recycled.length > 0) {
          //   console.log(that.data.recycled, that.data.harmful)
          // } else {
          //   wx.showToast({
          //     icon: 'none',
          //     title: '请至少输入一个分类下数值',
          //     duration: 2000
          //   })
          // }
        } else if (that.data.curIndex == 1) {
          array[1].bg.forEach(function(item) {
            console.log(item)
            for (let a in arr) {
              if (a == item.id) {
                if (arr[a] != "") {
                  arr3.push(arr[a])
                  console.log(arr3)
                  arr2.push({
                    name: a,
                    value: arr[a]
                  })
                  console.log(arr2)
                }
              }
            }
          })
          that.setData({
            kitchen: arr2
          })
          // if (that.data.kitchen.length > 0) {
          //   console.log(that.data.recycled, that.data.kitchen)
          // } else {
          //   wx.showToast({
          //     icon: 'none',
          //     title: '请至少输入一个分类下数值',
          //     duration: 2000
          //   })
          // }

        } else if (that.data.curIndex == 2) {
          array[2].bg.forEach(function(item) {
            console.log(item)
            for (let a in arr) {
              if (a == item.id) {
                if (arr[a] != "") {
                  arr3.push(arr[a])
                  console.log(arr3)
                  arr2.push({
                    name: a,
                    value: arr[a]
                  })
                  console.log(arr2)
                }
              }
            }
          })
          that.setData({
            harmful: arr2
          })
          // if (that.data.harmful.length > 0) {
          //   console.log(that.data.recycled, that.data.harmful)
          // } else {
          //   wx.showToast({
          //     icon: 'none',
          //     title: '请至少输入一个分类下数值',
          //     duration: 2000
          //   })
          // }
        } else if (that.data.curIndex == 3) {
          array[3].bg.forEach(function(item) {
            console.log(item)
            for (let a in arr) {
              if (a == item.id) {
                if (arr[a] != "") {
                  arr3.push(arr[a])
                  console.log(arr3)
                  arr2.push({
                    name: a,
                    value: arr[a]
                  })
                  console.log(arr2)
                }
              }
            }
          })
          that.setData({
            green: arr2
          })
          // if (that.data.green.length > 0) {
          //   console.log(that.data.recycled, that.data.green)
          // } else {
          //   wx.showToast({
          //     icon: 'none',
          //     title: '请至少输入一个分类下数值',
          //     duration: 2000
          //   })
          // }
        } else if (that.data.curIndex == 4) {
          console.log("ttt")
        }
      }

    }
  },
  // // 点击左侧
  show: function(e) {
    var that = this;
    var index = e.target.dataset.current;
    console.log(index)
    if (that.data.curIndex == 0) {
      // if (that.data.recycled.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: index,
          text: "下一步",
        })
        console.log(that.data.curIndex, that.data.text)
      // }
    } else if (that.data.curIndex == 1) {
      // if (that.data.kitchen.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: index,
          text: "下一步",
        })
        console.log(that.data.curIndex, that.data.text)
      // }
    } else if (that.data.curIndex == 2) {
      // if (that.data.harmful.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: index,
          text: "下一步",
        })
        console.log(that.data.curIndex, that.data.text)
      // }
    } else if (that.data.curIndex == 3) {
      console.log("stop")
      // if (that.data.green.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: index,
          text: "提交"
        })
        console.log(that.data.curIndex, that.data.text)
      }
    // }
  },
  // 点击下一步
  next: function() {
    // console.log(this.data.curIndex)
    let that = this
    let next = parseInt(that.data.curIndex) + 1
    console.log(next)
    if (that.data.curIndex == 0) {
      // if (that.data.recycled.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: next,
          text: "下一步",
        })
      // }
    } else if (that.data.curIndex == 1) {
      // if (that.data.kitchen.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: next,
          text: "下一步",
        })
      // }
    } else if (that.data.curIndex == 2) {
      // if (that.data.harmful.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: next,
          text: "下一步",
        })
      // }
    } else if (that.data.curIndex == 3) {
      console.log("gg")
      // if (that.data.green.length == 0) {

      // } else if (app.globalData.value == true) {
      //   wx.showToast({
      //     title: '请输入数字',
      //   })
      // } else {
        that.setData({
          curIndex: 3,
          text: "提交",
        })
        console.log(that.data.recycled, that.data.kitchen.length, that.data.harmful, that.data.green)
        let arrlenght = []
        arrlenght.push(that.data.recycled.length, that.data.kitchen.length, that.data.harmful.length, that.data.green.length)
        console.log(arrlenght)
        app.globalData.result = that.data.recycled.concat(that.data.kitchen, that.data.harmful, that.data.green)
        console.log(app.globalData.openids)
        let cli = []
        for (let a in app.globalData.clickList) {
          cli.push(app.globalData.clickList[a])
        }
        console.log(cli)
        let num
        let min
        for (let i = 0; i < arrlenght.length; i++) {
          console.log(arrlenght[i])
          if (arrlenght[i] < 1) {
            min = arrlenght[i]
          }
        }
        console.log(min)
      if (app.globalData.people=="") {
          wx.showToast({
            icon: "none",
            title: "请填写人数",
          })
        }else if(app.globalData.people==0){
        wx.showToast({
          icon: "none",
          title: "人数不能为0",
        })
        } else if(isNaN(app.globalData.people)==true){
        wx.showToast({
          icon: "none",
          title: "请填写数字",
        })
      } else if (app.globalData.people<0) {
        wx.showToast({
          icon: "none",
          title: "人数不能为"+app.globalData.people,
        })
      }
        else {
          wx.request({
            url: app.globalData.url + '/community/calculation/',
            data: {
              openid: app.globalData.openids,
              value: JSON.stringify(app.globalData.clickList)
            },
            success: function(res) {
              num = res.data
              console.log(res.data)
              console.log(res.data.recovery, num.result)
              wx.showLoading({
                title: '加载中',
              })
              if (num.result == 0) {
                wx.showToast({
                  icon: "none",
                  title: '请至少填写一项数值大于0',
                })
              } else {
                console.log(res.data)
                if (res.data.msg =="输入内容不为数字"){
                  wx.hideLoading();
                  wx.showToast({
                    icon: "none",
                    title: '请填写数字',
                  })
              }else{
                wx.navigateTo({
                  url: 'classResult?id=' + JSON.stringify(num),
                  success: function (res) {
                    wx.hideLoading();
                  },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }
              }
            },fail:function(){
              wx.hideLoading();
              wx.showToast({
                icon:"none",
                title: '请填写数字',
              })
            }
          })
        // }
      }
    } else {
      that.setData({
        text: "下一步",
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    if (options.id == undefined) {
      wx.navigateTo({
        url: '../welcome/welcome',
      })
    } else {
      let oid = options.id
      let that = this
      wx.getStorage({
        key: 'openid',
        success: function(res) {
          console.log(res.data)
          that.setData({
            history: res.data
          })
          app.globalData.openids = res.data
          console.log(app.globalData.openids)
        },

      })
    }
    let that = this
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
      title: "社区垃圾分类碳减排计算器",
      path: '/pages/index/index?name=' + '&id=' + 1 + '',
      imageUrl: "http://wkjsq.carbonstop.net/static/img/3.png",
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