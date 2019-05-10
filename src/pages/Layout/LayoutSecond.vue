<template>
  <el-row class="h-all">
    <el-row class="header-wrapper">
      <div class="header-container h-all">
        header
      </div>
    </el-row>
    <el-row class="main-wrapper h-all">
        <div class="main-container h-all">
          <div class="sidebar">
            <vue-scroll>
            sidebar
            </vue-scroll>
          </div>
          <div class="main-box">
            <vue-scroll>
              main
            </vue-scroll>
          </div>
        </div>
    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "LayoutSecond"
    }
</script>

<style scoped>
  @import "../../assets/css/commonSecond.scss";
</style>
