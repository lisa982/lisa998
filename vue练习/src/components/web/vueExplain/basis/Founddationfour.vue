<template>
  <div class="bgmain">
    <h5 class="foundonetitle">跑马灯</h5>
    <div class="foundone">
      <ul>
        <li>{{msg}}</li>
        <li>
          <button @click="lang">浪里白条</button>
          <button @click="stop">停止浪</button>
        </li>
        <li>
          <h5>注意</h5>
          <h6>在vue中如果想要获取data上的数据，或者想要调用methods中的方法，必须通过this.属性名或者是this.方法名来进行调用，如果this报错，则需要使用一个变量来保存this指向，这里的this表示vue的实例对象</h6>
          <h5>分析：</h5>
          <p>（1）给‘浪里白条’以及‘停止浪’使用v-on或者@绑定点击事件</p>
          <p>（2）在按钮的事件处理函数中写相关的业务代码，拿到msg字符串，然后调用字符串的substring方法来进行字符串的截取操作，把第一个字符串截取出来，放到最后一位</p>
          <p>（3）为了实现点击按钮，自动截取功能，需要把2步骤中的代码，放到定时器中</p>
          <p>(4)vm实例会监听自己身上data中所有数据的改变，只要数据一发生变化，就会自动把最新的数据，从data同步到页面上去，【好处：程序员只需要关心数据，不需要考虑如何重新渲染DOM页面】</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是跑马灯，我有v-on还有制作而成",
      intervalid:null, //在data上定义定时器
    };
  },
  methods: {
    lang() {
      let that = this;
    if(that.intervalid!=null){
        return
    }else{
         that.intervalid= setInterval(() => {
        let start = that.msg.substring(0, 1);
        //   console.log(start)
        let end = that.msg.substring(1);
        //   console.log(end)
        that.msg = end + start;
        //   console.log(that.msg)
      }, 400);
    }
    },
    stop() {
        let that=this
        clearInterval(that.intervalid)
        that.intervalid=null
    }
  }
};
</script>

<style>
</style>