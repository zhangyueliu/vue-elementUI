<template>
  <el-row class="h-all">
    <el-row class="header-main">
      <header-main></header-main>
    </el-row>
    <el-row class="header-nav">
      <header-nav></header-nav>
    </el-row>

    <el-row class="main-wrapper">
      <div class="sidebar">
        <vue-scroll :ops="ops">
          <the-sidebar></the-sidebar>
        </vue-scroll>
      </div>
      <div class="h-all main">
        <!--<vue-scroll :ops="opsMain">-->
          <the-main></the-main>
        <!--</vue-scroll>-->
      </div>
    </el-row>
  </el-row>
</template>

<script>
  import LayoutHeaderMain from './LayoutHeaderMain';
  import LayoutHeaderNav from './LayoutHeaderNav';
  import LayoutMain from './LayoutMain';
  import LayoutSidebar from './LayoutSidebar';

  export default {
    name: "Layout",
    components:{
      'header-main': LayoutHeaderMain,
      'header-nav': LayoutHeaderNav,
      'the-main': LayoutMain,
      'the-sidebar': LayoutSidebar,
    },
    data(){
      return {
        ops: {
          vuescroll: {},
          scrollPanel: {
            scrollingX: false,
          },
          rail: {},
          bar: {}
        },
        opsMain: {
          vuescroll: {},
          scrollPanel: {
            scrollingX: false,
          },
          rail: {},
          bar: {}
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/commonFirst.scss";
</style>
