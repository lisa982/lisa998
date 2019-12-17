<template>
  <div>
    <div class="search">
      <div class="serchipt">
        请输入搜索信息
        <input
          type="text"
          autocomplete="off"
          valuekey="value"
          popperclass="algolia-search"
          placeholder="搜索文档"
          fetchsuggestions="function () { [native code] }"
          debounce="300"
          placement="bottom-start"
          popperappendtobody="true"
          highlightfirstitem="true"
          class="el-input__inner"
          role="textbox"
          aria-autocomplete="list"
          aria-controls="id"
          aria-activedescendant="el-autocomplete-6466-item--1"
        />
      <el-button type="primary" plain>新增</el-button>
      </div>
      <div class="content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="框架名称" width="180"></el-table-column>
          <el-table-column prop="name" label="下载方式" width="180"></el-table-column>
          <el-table-column prop="address" label="链接"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >移除</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "ElementUI",
          name: "npm i element-ui -S",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style>
.search {
  width: 100%;
  margin: 30px 0px;
}
.serchipt {
  width: 40%;
  height: 30px;
  display: flex;
  margin: 30px 0px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
}
.serchipt > input {
  width: 60%;
  height: 100%;
  font-size: 15px;
}
</style>