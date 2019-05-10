<template>
    <el-container class="h-all">
      <el-header height="80px">header
      </el-header>
      <vue-scroll>
        <el-main>
          main
        </el-main>
      </vue-scroll>
      <el-footer height="60px">footer
      </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "LayoutThird"
    }
</script>

<style scoped>
  .el-header{
    text-align: center;
    background-color: #cccccc;
  }
  .el-main{
    text-align: center;
  }
  .el-footer{
    text-align: center;
    background-color: #cccccc;
  }
</style>
