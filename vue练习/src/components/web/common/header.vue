<template>
  <div>
    <div class="container-fulid">
      <div class="container">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">
            <router-Link to="/">首页</router-Link>
          </el-menu-item>
          <el-submenu v-for="(item,i) in learn" :key="i" :index="item.index">
            <template slot="title">{{item.name}}</template>
            <el-submenu :index="list.index" v-for="(list,a) in item.child" :key="a">
              <template slot="title">{{list.name}}</template>
              <el-menu-item :index="arr.index" v-for="(arr,b) in list.child" :key="b">
                  <router-Link :to='arr.url' class="color">{{arr.name}}</router-Link>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item v-for="(arr,c) in nav" :key="c" :index="arr.index">
            <router-Link to>{{arr.name}}</router-Link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learn: [
        {
          name: "学习",
          index: "2",
          solt: "title",
          child: [
            {
              index: "2-1",
              name: "前端",
              solt: "title",
              child: [
                {
                  index: "2-1-1",
                  name: "vue",
                  url: "/vueHtml"
                },
                {
                  index: "2-1-2",
                  name: "JavaScript",
                  url: "/JavaScript"
                },
                {
                  index: "2-1-3",
                  name: "Photoshop",
                  url: "/PhotoShop"
                }
              ]
            },
            {
              index: "2-2",
              name: "后端"
            },
            {
              index: "2-3",
              name: "考研"
            }
          ]
        }
      ],
      nav: [
        {
          name: "生活",
          index: "3",
          url: ""
        },
        {
          name: "收藏",
          index: "4",
          url: ""
        },
        {
          name: "登陆",
          index: "5",
          url: ""
        }
      ],
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>

</style>