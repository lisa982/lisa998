<template>
  <div class="bgmain">
    <h4>v-for</h4>
    <ul>
      <li>
        <div>
          <p v-for="(item,i) in list" :key="i">{{item}}循环数组</p>
        </div>
        <div>
          <p v-for="(item,b) in arr" :key="b">{{item.name}}=====>循环数组包对象的name属性,，，，，，{{item.id}}======>循环数组包对象的id属性</p>
        </div>
        <div>
          <div>
              <tr>
                  <td>姓名：</td>
                  <td>id:</td>
                  <td>年龄：</td>
                  <td>住址：</td>
              </tr>
              <tr v-for="(item,c) in array" :key="c">
                  <td>{{item.name}}</td>
                  <td>{{item.id}}</td>
                  <td>{{item.age}}</td>
                  <td>{{item.address}}</td>
              </tr>
          </div>
        </div>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [11, 22, 33, 44, 55, 66],
      arr: [
        { id: "1", name: "lisa" },
        { id: "2", name: "lily" },
        { id: "3", name: "奈斯" },
        { id: "4", name: "古德" }
      ],
      array:[{
          name:"铁柱",
          age:"81",
          id:"881",
          address:"三里屯"
      }]
    };
  }
};
</script>

<style>
td{
    border:1px solid black;
}
</style>