<template>
  <div class="bgmain">
       <h3 class="foundonetitle">v-cloak，v-text，v-html的区别</h3>
       <div class="foundone">
           <ul>
               <h4>v-cloak</h4>
               <li>使用v-cloak可以解决插值表达式闪烁的问题,即在style样式里添加  [v-cloak]{display:none} 即可</li>
               <li v-cloak>案例：{{msg}}</li>
           </ul>
          <ul>
              <h4>v-text</h4>
              <li>v-text默认是没有闪烁问题的</li>
              <li>v-text会覆盖元素中原本的内容，但是插值表达式只会替换自己的这个占位符，不会把整个元素的内容清空</li>
              <li v-text="msgvtext">案例</li>
          </ul>
          <ul>
              <h4>v-html</h4>
              <li>v-html会覆盖原本元素的所有内容，可以将结构渲染到页面上去</li>
              <li v-html="msghtml"></li>
          </ul>
       </div>
  </div>
</template>

<script>
export default {
data () {
    return {
        msg:"测试添加了v-cloak是否还会有闪烁问题",
        msgvtext:'测试v-text是否会将原内容给清空，请看代码',
        msghtml:"<h5>此为v-html的渲染片段</h5>"
    }
}
}
</script>

<style>
.main{
    background: #f1f1f1;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
}
[v-cloak]{
    display: none;
}
.foundonetitle{
    margin:20px auto;
}
.foundone{
    width: 100%;
}
</style>