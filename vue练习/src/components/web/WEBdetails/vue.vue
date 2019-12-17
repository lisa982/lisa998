<template>
  <div>
    <Header></Header>
    <div class="container-fuild main">VUE</div>
    <div class="content">
      <div class="webpaper">
        <div class="webleft"></div>
        <div class="webright">
          <p>vue基础定义，要点，实例</p>
          <button class="webbtn"><router-Link to="/Explain">查看</router-Link></button>
        </div>
      </div>
    </div>
    <div class="container-fulid webframe">
      <h4 class="frametitle">相关框架</h4>
      <div class="frame">
        <swiper :options="swiperOption" class="swiper-box">
          <swiper-slide v-for="(item,i) in swiper" :key="i" class="swiperdetails">
            <span class="swipertitle">{{item.name}}</span>
            <div class="swipertext">{{item.detail}}</div>
            <span class="swipercheck">
              <router-Link :to="item.url">查看详情</router-Link>
            </span>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../common/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      // vue-awesome-swiper的执行参数，对应上方的options
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiper: [
        {
          detail: "Vue PC端框架,后台管理系统框架",
          name: "ElementUI",
          text: "",
          url: "/ElementUI",
          img: ""
        },
        {
          detail: " Vue开源 UI 组件库，主要服务于 PC 界面",
          name: "iview",
          url: "",
          img: ""
        },
        {
          detail: "Vuetifyjs 根据材料设计规格提供 UI 布局",
          name: "vuetify",
          url: "",
          img: ""
        },
        {
          detail: "Vue.js 的移动端组件库",
          name: "Mint UI",
          url: "",
          img: ""
        },
        {
          detail: "基于 vuejs 1.0 开发 material design 风格的移动端 WEB UI 库",
          name: "vue-carbon",
          url: "",
          img: ""
        },
        {
          detail: "vue后台管理系统框架",
          name: "D2Admin",
          url: "",
          img: ""
        },
        {
          detail:
            "一款免费而美妙Vue.js管理模板包括38以上个定制用户界面组件，像地图，聊天，个人资料卡，图标，进度条、登录和注册的预建页面等等",
          name: "vuestic-admin，",
          url: "",
          img: ""
        },
        {
          detail: "只包含了柱状图、折线图、饼状图和环形图四种基本的图表",
          name: "vue-schart",
          url: "",
          img: ""
        },
        {
          detail:
            "在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点",
          name: "v-charts",
          url: "",
          img: ""
        }
      ]
    };
  },
  created() {}
};
</script>

<style>
/* 大图*/
.main {
  height: 500px;
  background: green;
  background-image: url("https://themetrust.com/wp-content/uploads/2017/01/home-banner-cafe.jpg");
  color: white;
  font-size: 60px;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 中心内容 */
.content {
  position: relative;
  width: 60%;
  margin: -59px auto 30px auto;
}
/* vue基础定义 */
.webpaper {
  height: auto;
  width: 100%;
  position: relative;
  top: -10%;
  display: flex;
  justify-content: space-between;
}
.webleft {
  width: 50%;
  height: 500px;
  background-size: 100% 100%;
  /* background: blue; */
  background-size: 100% 100%;
  background-image: url(https://themetrust.com/wp-content/uploads/2017/01/theme-feature-trade.png);
}
.webright {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a89075;
  font-size: 30px;
  flex-wrap: wrap;
  font-weight: 600;
}
.webright > p {
  width: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.webbtn {
  width: 30%;
  border-radius: 10px;
  border: none;
  background: #a89075;
  color: white;
  font-size: 16px;
  height: 46px;
  font-weight: 900;
  transition: 0.5s;
}
.webbtn:hover {
  background: #f7f7f7;
  color: #a89075;
  border: 1px solid #a9a9a9;
}
/* web框架 */
.webframe {
  background-color: #f9f9f9;
  padding: 60px 0px 60px 0px;
}
.frame {
  width: 60%;
  height: 300px;
  margin: 0px auto;
}
.frametitle {
  text-align: center;
  padding: 60px 0px;
  color: #a89075;
  font-size: 26px;
  font-weight: 900;
}
.frame .swiper-box {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
.swiperdetails {
  flex-wrap: wrap;
  padding: 14px;
  font-size: 14px;
  align-items: center;
}
.swipertitle {
  display: block;
  width: 100%;
  height: 30px;
  color: #063658;
  font-weight: 900;
  font-size: 19px;
}
.swipertext {
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 25px;
}
.swipercheck > a {
  color: #a89075;
  font-size: 12px;
  font-weight: 900;
}
</style>