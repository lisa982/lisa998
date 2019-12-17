<template>
  <div class="bgmain">
    <h5 class="foundonetitle">事件修饰符</h5>
    <ul>
      <li>
        <h5>案例：</h5>
        <div class="inner" @click="father">
          <button @click="son">戳她</button>
          <li>点击btn按钮为什么两个事件都触发了？</li>
          <li>原因：当点击btn按钮时先是触发了当前元素的点击事件，根据事件冒泡机制又触发了外部大盒子的点击事件</li>
        </div>
        <h5>案例二：</h5>
        <div class="inner" @click="father">
          <button @click.stop="son">戳她</button>
          <li>使用‘ .stop’ 阻止事件冒泡，即只触发自身的事件不触发外部包裹的事件</li>
        </div>
        <h5>案例三：</h5>
        <div class="inner">
          <a href="http://www.baidu.com" @click="linkclick">有问题先百度</a>
          <a href="http://www.baidu.com" @click.prevent="linkclick">有问题先百度</a>
          <li>使用‘.prevent’来阻止默认事件</li>
        </div>
        <h5>案例四：</h5>
        <div class="inner" @click.capture="father">
          <button @click="son">戳她</button>
          <li>使用‘ .capture’来实现事件捕获模式事件</li>
        </div>
        <h5>案例五：</h5>
        <div class="inner" @click.self="father">
          <button @click="son">戳她</button>
          <li>使用‘ .self’来实现只有点击当前元素时才会执行自己本身的事件（比如不是子元素）</li>
        </div>
        <h5>案例三：</h5>
        <div class="inner">
          <a href="http://www.baidu.com" @click="linkclick">有问题先百度</a>
          <a href="http://www.baidu.com" @click.prevent.once="linkclick">有问题先百度</a>
          <li>使用‘.once’只触发一次事件</li>
        </div>
      </li>
      <li>
        <h3>知识点</h3>
      </li>
      <li>
        <h3>.stop阻止了所有的冒泡而.self只阻止当前元素的冒泡事件</h3>
        <p>.self只会阻止自己身上冒泡行为的触发，并不会真正阻止冒泡行为</p>
        <h4>演示.self和.stop的区别</h4>
        <div class="outer" @click="grandpa">
          <div class="inner" @click="father">
            <p>.stop案例</p>
            <button @click.stop="son">戳她</button>
          </div>
        </div>
        <div class="outer" @click="grandpa">
          <div class="inner" @click.self="father">
            <p>.self案例</p>
            <button @click="son">戳她</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    father() {
      alert("我是父亲，外部大盒子");
    },
    son() {
      alert("我是儿子，里面的按钮");
    },
    grandpa() {
      alert("我是祖父，即最外面的大盒子");
    },
    linkclick() {
      alert("这是出发了a标签的点击事件");
    }
  }
};
</script>

<style>
.inner {
  height: 115px;
  background: green;
}
.outer {
  padding: 40px;
  background-color: lightseagreen;
  margin-bottom: 10px;
}
</style>