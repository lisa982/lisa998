<template>
  <div>
    <p>
      添加学号：
      <input type="text" name id v-model="Stuid" />
    </p>
    <p>
      添加姓名：
      <input type="text" name id v-model="Stuname"/>
    </p>
    <p>
      <button @click="add">添加</button>
    </p>
    <table>
      <thead>
        <tr>
          <td>学号</td>
          <td>姓名</td>
          <td>日期</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in msg" :key="i">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.date}}</td>
          <td>
            <input type="button" value="删除" @click="remove" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Stuid:"",
      Stuname:"",
      msg: [
        {
          id: "001",
          name: "汤姆",
          date: new Date()
        },
        {
          id: "001",
          name: "汤姆",
          date: new Date()
        },
        {
          id: "002",
          name: "杰克",
          date: new Date()
        },
        {
          id: "003",
          name: "肉丝",
          date: new Date()
        },
        {
          id: "004",
          name: "爱丽丝",
          date: new Date()
        },
        {
          id: "005",
          name: "易烊千玺",
          date: new Date()
        },
        {
          id: "006",
          name: "王俊凯",
          date: new Date()
        },
        {
          id: "007",
          name: "王源",
          date: new Date()
        }
      ]
    };
  },
  methods: {
    add(){
      let that =this
      console.log(that.Stuid,that.Stuname)
    }
  }
};
</script>

<style>
table td {
  border: 1px solid black;
  padding: 10px;
}
</style>