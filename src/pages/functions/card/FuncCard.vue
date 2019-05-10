<template>
  <!--卡片+响应式栅格-->
  <el-row :gutter="20">
    <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" v-for="o in 7">
      <el-card class="box-item" :body-style="{padding:'0px'}">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div class="bottom">
          <span class="title">好吃的汉堡好吃的汉堡好吃的汉堡</span>
          <el-row>
            <el-button type="text">喜欢</el-button>
            <el-button type="text" class="float-right">操作</el-button>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "FuncCard"
    }
</script>

<style scoped>
  .box-item{
    margin-bottom: 20px;
  }
  .box-item .image{
    width: 100%;
    display: block;
  }
  .box-item .bottom{
    padding: 8px 5px 5px;
  }
  .box-item .bottom .title{
    display: block;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .box-item .bottom button{
    padding: 0;
  }
</style>
