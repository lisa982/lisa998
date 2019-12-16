const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 0, //下标值
    nical: true,
    color: " background-color: rgba(255, 255, 255, 0.6);",
    timer: "",
    num: "0",
    time: "",
    show: true,
    modalHidden: true,
    timerRight: "",
    hidden: false,
    traffic: "", //交通出行
    stay: "", //住宿
    restaurant: "", //餐饮
    electric: "", //会议用能
    paper: "", //会议用纸
    text: "下一步",
    title: [{
        id: '0',
        title: "交通出行",
        url: app.globalData.urlImg + "transport_grey2.png",
        url1: app.globalData.urlImg + "transport_red_2.png",
      },
      {
        id: '1',
        title: "住宿",
        url: app.globalData.urlImg + "housing_grey.png",
        url1: app.globalData.urlImg + "housing_red.png",
      },
      {
        id: '2',
        title: "餐饮",
        url: app.globalData.urlImg + "food_grey1.png",
        url1: app.globalData.urlImg + "food_red1.png",
      },
      {
        id: '3',
        title: "会议用能",
        url: app.globalData.urlImg + "electricity_grey.png",
        url1: app.globalData.urlImg + "electricity_red.png",
      },
      {
        id: "4",
        title: "会议用纸",
        url: app.globalData.urlImg + "paper_grey.png",
        url1: app.globalData.urlImg + "paper_red.png",
      }
    ],
    content: [{
      id: "0",
      title: "请输入交通出行里程",
      class1: "metro",
      class2: "metro1",
      bg: [{
          id: "metro",
          name: "地铁",
          ipt: 'digit',
          unit: "公里",
          url: app.globalData.urlImg + "subway (1).png",
          hidden: true,
        }, {
          id: "lease",
          name: "出租车",
          ipt: 'digit',
          url: app.globalData.urlImg + "car.png",
          unit: "公里",
          hidden: true,
        }, {
          id: "transit",
          name: "公交车",
          ipt: 'digit',
          url: app.globalData.urlImg + "bus.png",
          unit: "公里",
          hidden: true,
        },
        {
          id: "planeDeparture",
          id2: "planeDeparture2",
          name: "飞机",
          url: app.globalData.urlImg + "flight (1).png",
          unit: "  ",
          ipt: 'text',
          click: "input",
          holder: "出发地",
          come: "planeend",
          holder2: "目的地",
          hidden: false,
        }, {
          id: "trainDeparture",
          name: "火车",
          url: app.globalData.urlImg + "train (2).png",
          ipt: 'text',
          click: "input2",
          holder: "出发地",
          come: "trainend",
          holder2: "目的地",
          hidden: false,
        },
      ],

    }, {
      id: "1",
      title: "请输入住宿天数",
      class1: "twoHotel",
      class2: "metro1",
      bg: [{
        id: "twoHotel",
        url: app.globalData.urlImg + "2star.png",
        name: "二星级酒店",
        ipt: 'number',
        unit: "晚",
        hidden: true,
      }, {
        id: "threeHotel",
        name: "三星级酒店",
        url: app.globalData.urlImg + "3star.png",
        ipt: 'number',
        unit: "晚",
        hidden: true,
      }, {
        id: "fourHotel",
        name: "四星级酒店",
        url: app.globalData.urlImg + "4star.png",
        ipt: 'number',
        unit: "晚",
        hidden: true,
      }, {
        id: "fiveHotel",
        name: "五星级酒店",
        url: app.globalData.urlImg + "5star.png",
        ipt: 'number',
        unit: "晚",
        hidden: true,
      }, {
        id: "ordinaryHotel",
        name: "普通酒店",
        url: app.globalData.urlImg + "1star.png",
        ipt: 'number',
        unit: "晚",
        hidden: true,
      }]
    }, {
      id: "2",
      title: "请输入餐饮数量",
      class1: "fruit",
      class2: "metro1",
      bottom: "-25%",
      bg: [{
          id: "fruit",
          name: "水果",
          url: app.globalData.urlImg + "fruit.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        },
        {
          id: "vegetable",
          name: "蔬菜",
          url: app.globalData.urlImg + "vegetable(1).png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        },
        {
          id: "pork",
          name: "猪肉",
          url: app.globalData.urlImg + "pork.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        }, {
          id: "beef",
          name: "牛肉",
          url: app.globalData.urlImg + "beef.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        }, {
          id: "fish",
          name: "鱼肉",
          url: app.globalData.urlImg + "fish1.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        },
        {
          id: "chicken",
          name: "鸡肉",
          url: app.globalData.urlImg + "chicken.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        }, {
          id: "rice",
          name: '米饭',
          url: app.globalData.urlImg + "dish.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        }, {
          id: "nodule",
          name: '面食',
          url: app.globalData.urlImg + "noodle.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        },
        {
          id: "drink",
          name: "碳酸饮料",
          url: app.globalData.urlImg + "drink (3).png",
          ipt: 'digit',
          unit: "升",
          hidden: true,
        }, {
          id: "milk",
          name: "牛奶",
          url: app.globalData.urlImg + "milk.png",
          ipt: 'digit',
          unit: "千克",
          hidden: true,
        }, {
          id: "water",
          name: "矿泉水",
          url: app.globalData.urlImg + "water.png",
          ipt: 'digit',
          unit: "升",
          hidden: true,
        }
      ],

    }, {
      id: "3",
      title: "请输入会议用能",
      class1: "power",
      class2: "metro1",
      bg: [{
        id: "power",
        name: "电力",
        url: app.globalData.urlImg + "electricity (3).png",
        ipt: 'digit',
        unit: "度",
        hidden: true,
      }]
    }, {
      id: "4",
      title: "请输入会议用纸数量",
      class1: "paper",
      class2: "metro1",
      bg: [{
        id: "paper",
        name: '纸张',
        url: app.globalData.urlImg + "paper.png",
        ipt: 'digit',
        unit: "千克",
        hidden: true
      }]
    }, ]
  },
  // 点击帮助
  metro1: function() {

    this.setData({
      modalHidden: false
    })
  },

  
  /**
   *  点击确认
   */
  modalConfirm: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  // 点击单个帮助
  metro: function() {

    wx.showModal({
      title: 'dd',
      content: '',
      showCancel: true,
    })
  },
  metro: function() {
    console.log(app.globalData.meetHelp)
    wx.showModal({
      title: '交通出行',
      showCancel: false,
      content: app.globalData.meetHelp1,
    })
  },
  twoHotel: function() {
    wx.showModal({
      title: '住宿',
      showCancel: false,
      content: app.globalData.meetHelp2,
    })
  },
  fruit: function() {
    wx.showModal({
      title: '餐饮',
      showCancel: false,
      content: app.globalData.meetHelp3,
    })
  },
  power: function() {
    wx.showModal({
      title: '会议用能',
      showCancel: false,
      content: app.globalData.meetHelp4,
    })
  },
  paper: function() {
    wx.showModal({
      title: '纸张',
      showCancel: false,
      content: app.globalData.meetHelp5,
    })
  },
  //禁止用户左右滑动
  catchTouchMove: function(res) {
    return false
  },
  tips() {
    wx.showModal({
      title: '',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '',
      confirmText: '确定',
      confirmColor: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //表单
  formSubmit: function(e) {
    var that = this
    console.log(e.detail.value)
    // this.data.
    var arr = e.detail.value
    console.log(arr)
    console.log(arr.planeDeparture)
    app.globalData.plane = arr.planeDeparture
    app.globalData.train = arr.trainDeparture
    app.globalData.planeend = arr.planeend
    app.globalData.trainend = arr.trainend
    app.globalData.clickList = arr
    console.log(app.globalData.clickList)
    var array = this.data.content
    var carbon = []
    var arr2 = []
    var arr3 = []
    if (that.data.curIndex == 0) {
      array[0].bg.forEach(function(item) {
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
        traffic: arr2
      })
      // if (that.data.traffic.length > 0) {
      //   console.log(that.data.traffic, that.data.restaurant)
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
        stay: arr2
      })
      // if (that.data.stay.length > 0) {
      //   console.log(that.data.traffic, that.data.stay)
      // } else {
      //   wx.showToast({
      //     icon: 'none',
      //     title: '请至少输入一个分类下数值',
      //     duration: 2000
      //   })
      // }

    } else if (that.data.curIndex == 2) {
      array[2].bg.forEach(function(item) {
        // console.log(item)
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
        restaurant: arr2
      })
      // if (that.data.restaurant.length > 0) {
      //   console.log(that.data.traffic, that.data.restaurant)
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
        electric: arr2
      })
      // if (that.data.electric.length > 0) {
      //   console.log(that.data.traffic, that.data.electric)
      // } else {
      //   wx.showToast({
      //     icon: 'none',
      //     title: '请至少输入一个分类下数值',
      //     duration: 2000
      //   })
      // }
    } else if (that.data.curIndex == 4) {
      array[4].bg.forEach(function(item) {
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
        paper: arr2
      })
      console.log(that.data.traffic, that.data.stay, that.data.restaurant, that.data.electric, that.data.paper)
      app.globalData.trafficList = that.data.traffic.concat(that.data.stay, that.data.restaurant, that.data.electric, that.data.paper)
      // if (that.data.paper.length > 0) {

      // } else {
      //   wx.showToast({
      //     icon: 'none',
      //     title: '请至少输入一个分类下数值',
      //     duration: 2000
      //   })
      // }
    } else if (that.data.curIndex > 4) {
      console.log("ttt")
      // if (that.data.paper.length > 0) {
      //   console.log("wei")
      // } else {
      //   console.log(that.data.paper)
      //   that.setData({
      //     curIndex: 4
      //   })
      //   wx.showToast({
      //     icon: 'none',
      //     title: '请至少输入一个分类下数值',
      //     duration: 2000
      //   })
      // }
    }
  },
  // // // 点击左侧
  // // // 点击左侧
  show: function (e) {
    var that = this;
    // console.log
    var index = e.target.dataset.current;
    // console.log(index)
    that.setData({
      num: index
    })
    if (that.data.curIndex == 0) {

      that.judgeCity(that, index)
      //===========================

    } else if (that.data.curIndex == 1) {
      // if (that.data.stay.length == 0) {

      // } else {
      that.setData({
        curIndex: index,
        text: "下一步",
      })
      // }
    } else if (that.data.curIndex == 2) {
      // if (that.data.restaurant.length == 0) {

      // } else {
      that.setData({
        curIndex: index,
        text: "下一步",
      })
      // }
    } else if (that.data.curIndex == 3) {
      console.log("gg")
      // if (that.data.electric.length == 0) {

      // } else {
      that.setData({
        curIndex: index,
        text: "下一步",
      })
      // }
    } else if (that.data.curIndex == 4) {
      // console.log("gg")
      // if (that.data.paper.length == 0) {

      // } else {
      that.setData({
        curIndex: index,
        text: "下一步",
      })
      // }
    } else if (that.data.curIndex > 4) {
      // console.log("gg")
      // if (that.data.paper.length == 0) {

      // } else {
      that.setData({
        curIndex: index,
        text: "提交",
      })
      // }
    } else {
      that.setData({
        text: "提交",
      })
    }
  },
  // // 点击下一步
  next: function () {
    // console.log(judgeCity)
    // console.log(this.data.curIndex)
    let that = this
    let next = parseInt(that.data.curIndex) + 1
    console.log(next)
    if (that.data.curIndex == 0) {
      // if (app.globalData.plane == "") {
      //   if (app.globalData.planeend != "") {
      //     wx.showToast({
      //       title: '请输入出发地',
      //     })
      //   }
      // }
      console.log(next)
      that.judgeCity(that, next)

      // ======================//
      //   console.log(app.globalData.plane, app.globalData.openids)
      //   if (app.globalData.plane == "") {
      //     console.log("飞机为空")
      //     if (app.globalData.planeend != '') {
      //       wx.showToast({
      //         icon: "none",
      //         title: '请输入目的地',
      //       })
      //     }
      //   } else if (app.globalData.plane != '') {
      //     if (app.globalData.planeend == "") {
      //       wx.showToast({
      //         icon: "none",
      //         title: '请输入目的地',
      //       })
      //     } else if (app.globalData.plane == app.globalData.planeend) {
      //       wx.showToast({
      //         icon: "none",
      //         title: '出发地与目的地不能相同',
      //       })
      //     } else {
      //       wx.request({
      //         url: app.globalData.url + "community/meeting/",
      //         data: {
      //           openid: app.globalData.openids,
      //           planeDeparture: app.globalData.plane,
      //           trainDeparture: app.globalData.train,
      //           planeend: app.globalData.planeend,
      //           trainend: app.globalData.trainend
      //         },
      //         success: function(res) {
      //           console.log(res.data.success, res.data.msg, res.data.error, res.data)
      //           if (res.data.success == "ok") {
      //             // if (that.data.traffic.length == 0) {

      //             // } else {
      //             that.setData({
      //               curIndex: next,
      //               text: "下一步",
      //               num: next
      //             })
      //             // }
      //           } else {
      //             wx.showToast({
      //               title: '请重新输入城市',
      //             })
      //           }
      //         }
      //       })
      //     }
      //   }else if(app.globalData.train==""){
      // if(app.globalData.trainend!=""){
      //   wx.showToast({
      //     icon: "noen",
      //     title: '请输入出发地',
      //   })
      // }else{
      //   wx.showToast({
      //     icon: "noen",
      //     title: '请输入目的地',
      //   })
      // }

    } else if (that.data.curIndex == 1) {
      // if (that.data.stay.length == 0) {

      // } else {
      that.setData({
        curIndex: next,
        text: "下一步",
        num: next
      })
      console.log(that.data.curIndex)
      // }
    } else if (that.data.curIndex == 2) {
      // if (that.data.restaurant.length == 0) {

      // } else {
      that.setData({
        curIndex: next,
        text: "下一步",
        num: next
      })
      // }
    } else if (that.data.curIndex == 3) {
      console.log("gg")
      // if (that.data.electric.length == 0) {

      // } else {
      that.setData({
        curIndex: next,
        text: "下一步",
        num: next
      })
      console.log(that.data.traffic, that.data.stay, that.data.restaurant, that.data.electric)
      // }
    } else if (that.data.curIndex >= 4) {
      console.log(app.globalData.clickList)
      // if (that.data.paper.length == 0) {

      // } else {
      that.setData({
        curIndex: 4,
        text: "提交",
        num: next
      })
      console.log(that.data.traffic, that.data.stay, that.data.restaurant, that.data.electric, that.data.paper)
      console.log(app.globalData.clickList)
      // let num = []
      // let min
      // num.push(that.data.traffic.length, that.data.stay.length, that.data.restaurant.length, that.data.electric.length)
      // for (let i = 0; i < num.length; i++) {
      //   if (num[i] < 1) {
      //     min = num[i]
      //   }
      // }

      // if (min == 0) {
      //   wx.showToast({
      //     icon: "none",
      //     title: '请填写完整',
      //   })
      // } else {
      wx.request({
        url: app.globalData.url + 'community/meeting/',
        data: {
          openid: app.globalData.openids,
          value: JSON.stringify(app.globalData.clickList)
        },
        success: function (res) {
          console.log(res)
          let num = res.data
          wx.showLoading({
            title: '加载中',
          })
          if (res.data.result == 0) {
            wx.hideLoading();
            wx.showToast({
              icon: "none",
              title: '请填写一项数值大于0',
            })
          } else if (res.data.msg == "输入内容不为数字") {
            wx.hideLoading();
            wx.showToast({
              icon: "none",
              title: '请填写数字',
            })
          } else {
            wx.redirectTo({
              url: 'meetResult?id=' + JSON.stringify(num),
              success: function (res) {
                wx.hideLoading();
              },
              fail: function (res) {
                wx.hideLoading();
              },
              complete: function (res) { },
            })
          }
        }
      })
      // }
      // }
    } else if (that.data.curIndex > 4) {
      // if (that.data.paper.length == 0) {

      // } else {
      console.log("hhh")
      that.setData({
        curIndex: 4,
        text: "提交",
        num: 4
      })
    }
    // }
  },judgeCity: function(that, next) {
    console.log(that, next)
    if (app.globalData.plane == "" && app.globalData.planeend == "" && app.globalData.train == "" && app.globalData.trainend == "") {
      console.log('1')
      that.setData({
        curIndex: next,
        text: "下一步",
        num: next
      })
    } else if (app.globalData.plane == "" && app.globalData.planeend == "") {
      console.log('12')
      wx.request({
        url: app.globalData.url + "community/verification/",
        data: {
          openid: app.globalData.openids,
          trainArray: {
            train: app.globalData.train,
            trainend: app.globalData.trainend
          }
        },
        success: function(res) {
          console.log(res.data)
          if (res.data.success == "ok") {
            // if (that.data.traffic.length == 0) {

            // } else {
            that.setData({
              curIndex: next,
              text: "下一步",
              num: next
            })
            // }
          } else {
            wx.showToast({
              title: '请重新输入城市',
            })
          }
        },
      });
    } else if (app.globalData.plane != "" && app.globalData.planeend != "") {
      console.log('123')
      if (app.globalData.train == "" && app.globalData.trainend != "" || app.globalData.train != "" && app.globalData.trainend == "") {
        wx.request({
          url: app.globalData.url + "community/verification/",
          data: {
            openid: app.globalData.openids,
            trainArray: {
              train: app.globalData.train,
              trainend: app.globalData.trainend
            }
          },
          success: function(res) {
            console.log(res.data)
            if (res.data.success == "ok") {
              // if (that.data.traffic.length == 0) {

              // } else {
              that.setData({
                curIndex: next,
                text: "下一步",
                num: next
              })
              // }
            } else {
              wx.showToast({
                title: '请重新输入城市',
              })
            }
          },
        });
      } else {
        console.log('1234')
        wx.request({
          url: app.globalData.url + "community/verification/",
          data: {
            openid: app.globalData.openids,
            planArray: {
              plane: app.globalData.plane,
              planeend: app.globalData.planeend
            },
            trainArray: {
              train: app.globalData.train,
              trainend: app.globalData.trainend
            }
          },
          success: function(res) {
            console.log(res.data)
            if (res.data.success == "ok") {
              // if (that.data.traffic.length == 0) {

              // } else {
              that.setData({
                curIndex: next,
                text: "下一步",
                num: next
              })
              // }
            } else {
              wx.showToast({
                title: '请重新输入城市',
              })
            }
          },
        });
      }
    } else {
      console.log('12345')
      wx.request({
        url: app.globalData.url + "community/verification/",
        data: {
          openid: app.globalData.openids,
          planArray: {
            plane: app.globalData.plane,
            planeend: app.globalData.planeend
          },
          trainArray: {
            train: app.globalData.train,
            trainend: app.globalData.trainend
          }
        },
        success: function(res) {
          console.log(res.data)
          if (res.data.success == "ok") {
            // if (that.data.traffic.length == 0) {
            // } else {
            that.setData({
              curIndex: next,
              text: "下一步",
              num: next
            })
            // }
          } else {
            wx.showToast({
              title: '请重新输入城市',
            })
          }
        },
      });
    };
  },
  /**
   * 生命周期函数--监听页面=载
   */
  onLoad: function(options) {
    app.globalData.openids = options.id
    console.log(app.globalData.openids)
    wx.request({
      url: app.globalData.url + 'users/index/',
      data: {
        endcity: "上海"
      },
      success: function(res) {
        console.log(res)
      }
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