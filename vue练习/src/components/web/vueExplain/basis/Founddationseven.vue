<template>
  <div class="bgmain">
    <h4>v-class动态绑定类名</h4>
    <ul>
      <li>
        <h4>第一组</h4>
        <p>使用方式，直接传递一个数组，注意:这里的class需要使用v-bind做数据绑定</p>
        <div>
          <h4>案例：</h4>
          <p :class="['red']">我是数组添加样式</p>
        </div>
      </li>
      <li>
        <h4>第二组</h4>
        <p>使用方式，三元表达式，注意:这里的class需要使用v-bind做数据绑定</p>
        <div>
          <h4>案例一：</h4>
          <p :class="[flag?'fat':'italic']">我是三元表达式添加样式，为了提高代码的可读性</p>
        </div>
         <div>
          <h4>案例二：</h4>
          <p :class="[{'active':flag}]">我是三元表达式添加样式第二种直接形成一个对象即’{样式：data里的数据为真}‘，当属性值只有为真的时候才会显示</p>
        </div>
          <div>
          <h4>案例三：</h4>
          <p :class="[{'active':flag}]">我是三元表达式添加样式第二种直接形成一个对象即’{样式：data里的数据为真}‘，当属性值只有为真的时候才会显示</p>
        </div>
         <div>
          <h4>案例四：</h4>
          <p :class="objclass">我是三元表达式添加样式第二种直接形成一个对象即’{样式：data里的数据为真}‘，当属性值只有为真的时候才会显示</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            flag:true,
            objclass:{red:true,fat:true,active:false}
        }
    }
};
</script>

<style>
.red {
  color: red;
}
.fat {
  font-weight: 900;
}
.italic {
  font-style: italic;
}
.active {
  letter-spacing: 0.5em;
}
</style>