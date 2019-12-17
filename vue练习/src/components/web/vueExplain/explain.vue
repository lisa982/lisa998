<template>
  <div>
    <Header></Header>
    <div class="container-fulid explain">
      <div class="explainRight">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">
                <router-Link to="/Explain/" class="title">npm下载</router-Link>
              </span>
            </el-menu-item>
            <el-submenu :index="arrlist.index" v-for="(arrlist,item) in nav" :key="item">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{arrlist.name}}</span>
              </template>
              <el-menu-item-group v-for="(arritem,d) in arrlist.child" :key="d">
                <el-menu-item :index="arritem.index">
                  <router-Link :to="arritem.url" class="title">{{arritem.name}}</router-Link>
                </el-menu-item>
              </el-menu-item-group>
              <el-submenu :index="list.index" v-for="(list,b) in select" :key="b">
                <template slot="title">{{list.name}}</template>
                <el-menu-item :index="item.index" v-for="(item,c) in list.child" :key="c"><router-Link :to="item.url">{{item.name}}</router-Link></el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div class="explainLeft">
        <router-view />
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
      nav: [
        {
          name: "基础知识复习",
          index: "1",
          child: [
            {
              index: "1-1",
              name: "v-cloak，v-text，v-html的区别",
              url: "/Explain/Foundationone"
            },
            {
              index: "1-2",
              name: "v-bind指令",
              url: "/Explain/Founddationtwo"
            },
            {
              index: "1-3",
              name: "v-on指令",
              url: "/Explain/Founddationthree"
            },
            {
              index: "1-4",
              name: "跑马灯效果",
              url: "/Explain/Founddationfour"
            },
            {
              index: "1-5",
              name: "事件修饰符",
              url: "/Explain/Founddationfive"
            },
            {
              index: "1-6",
              name: "v-model",
              url: "/Explain/Founddationsix"
            },
             {
              index: "1-7",
              name: "v-class",
              url: "/Explain/Founddationseven"
            },
             {
              index: "1-8",
              name: "v-style",
              url: "/Explain/Founddationenight"
            },{
              index:"1-9",
              name:"v-for",
              url:'/Explain/Founddationnine'
            }
          ]
        }
      ],
      select:[
        {
          index:"2-1",
          name:"表格增刪改查",
          child:[
            {
              index:"2-1-1",
              name:"表格添加",
              url:"/Explain/tableAdd"
            },{
              index:"2-1-1",
              name:"表格刪除",
              url:"/Explain/tableRemove"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.bgmain {
  background: #f1f1f1;
}
.explain {
  height: auto;
  display: flex;
}
.explainRight {
  width: 17%;
  height: 100%;
}
.el-col-12 {
  width: 100%;
}
.explainLeft {
  width: 70%;
  height: auto;
}
.title {
  color: white;
}
</style>