<template>
  <div class="bgmain">
    <h5 class="foundonetitle">v-on</h5>
    <div class="foundone">
        <ul>
            <li>vue中提供了v-on事件绑定机制</li>
            <li>点击事件案例：<input type="button" value="按一下" v-on:click="show"></li>
            <li>移入事件案例：<input type="button" value="移入一下" v-on:mouseover="over"></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        show(){
            alert(" 这是v-on绑定事件机制的案例")
        },
        over(){
            alert("这是v-on绑定的移入事件的案例")
        }
    }
};
</script>

<style>
</style>