<template>
  <div class="bgmain">
    <h4>v-model</h4>
    <ul>
      <li>{{oldmsg}}</li>
      <li>
        <p>v-bind只能实现数据的单向绑定，即从A绑定到B，不可以双向数据绑定</p>
        <p>v-model可以实现表单元素和model中的双向数据绑定</p>
        <p>注意：v-model只能运用到表单元素中例如input（radio，text，textarea。。。。。）</p>
        <input type="text" name id :value="oldmsg" />
        <input type="text" name id v-model="msg" />
        <p>{{msg}}</p>
      </li>
      <li>
        <p>简易计算器案例</p>
        <input type="text" name id placeholder="请输入数字" v-model="n1" />
        <select name id v-model="opt">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" name id placeholder="请输入数字" v-model="n2" />
        <button @click="res">=</button>
        <input type="text" name id placeholder="结果" v-model="result" />
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldmsg: "我是v-bind",
      msg: "我是v-model的实例",
      n1: "0",
      n2: "0",
      opt: "+",
      result: "0"
    };
  },
  mounted () {
  },
  methods: {
    res() {
      let that = this;
    //   switch (that.opt) {
    //     case "+":
    //       that.result = parseInt(that.n1) + parseInt(that.n2);
    //       break;
    //     case "-":
    //       that.result = parseInt(that.n1) - parseInt(that.n2);
    //       break;
    //     case "*":
    //       that.result = parseInt(that.n1) * parseInt(that.n2);
    //       break;
    //     case "/":
    //       that.result = parseInt(that.n1) / parseInt(that.n2);
    //       break;
    //   }
    // eval在正式开发中尽量少用
    var code=' parseInt(that.n1)'+that.opt+' parseInt(that.n2)'
    that.result=eval(code)
    }
  }
};
</script>

<style>
</style>