<template>
  <div class="bgmain">
    <h4>v-bind</h4>
    <ul>
      <li>
        <p>v-bind是Vue中，提供的用于绑定属性的指令</p>
      </li>
      <li>
        <p>注意：v-bind：指令可以简写为 ‘ ： ’ 要绑定的属性，例如‘ :title="mytitle" ’</p>
      </li>
      <li>
          <p>v-bind中可以写合法的js表达式</p>
      </li>
       <li>
      <input type="button" value="按钮" v-bind:title="mytitle+'123'" />
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mytitle: "这是由v-bind绑定的属性title"
    };
  }
};
</script>

<style>
</style>