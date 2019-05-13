<template>
  <!--表格-->
  <el-row id="table-box">
    <el-table
      :data="tableData"
      style="width: 100%; border: 1px solid #cccccc">
      <el-table-column
        type="selection"
        prop="id"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="300"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>

<script>
    export default {
        name: "FuncTable",
        data(){
          return{
            tableData: [
              {
                id: 1,
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 2,
                date: '2016-05-02',
                name: '张小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 3,
                date: '2016-05-04',
                name: '安小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }
              , {
                id: 4,
                date: '2016-05-01',
                name: '林小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 5,
                date: '2016-05-08',
                name: '邱小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }
              , {
                id: 6,
                date: '2016-05-06',
                name: '秦小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 7,
                date: '2016-05-07',
                name: '马小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 8,
                date: '2016-05-03',
                name: '周小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 9,
                date: '2016-05-02',
                name: '林大虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 8,
                date: '2016-05-03',
                name: '周小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 9,
                date: '2016-05-02',
                name: '林大虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 8,
                date: '2016-05-03',
                name: '周小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }, {
                id: 9,
                date: '2016-05-02',
                name: '林大虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
              }
            ]
          }
        },
        methods:{
          deleteRow(index, rows){
            rows.splice(index, 1);
            //若table进行排序，则index对应排序后的行比如1，而tableData数组的顺序不变，删除时，是按排序后的index去tableData中找对应index,会导致删错数据
          }
        },
        mounted() {
          // var tableBox = document.getElementById('table-box');
          // var height = window.innerHeight - tableBox.getBoundingClientRect().top + 17 - 40 - 30;
          // tableBox.style.height = height + 'px';
        }
    }
</script>

<style scoped>
  #table-box{
    position: relative;
  }
</style>
