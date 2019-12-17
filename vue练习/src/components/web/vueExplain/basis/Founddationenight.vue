<template>
  <div class="bgmain">
      <ul>
          <h4>v-style</h4>
          <li>
              <p>案例：</p>
              <div>
                  <h1 :style="styleobj">我是由对象绑定的类名</h1>
                  <div>代码片段：
                      <p>data里定义  styleobj:{'color':'red','font-weight':'900'}</p>
                  </div>
              </div>
          </li>
          <li>
              <p>案例：</p>
              <div>
                  <h4 :style="[styleobj,styleobj2]">我是由数组绑定的类名</h4>
              </div>
          </li>
          <li></li>
          <li></li>
      </ul>
  </div>
</template>

<script>
export default {
      data () {
          return {
                styleobj:{'color':'red','font-weight':'900'},
                styleobj2:{'backgroundcolor':'green','font-style':'italic'}
          }
      }
}
</script>

<style>

</style>