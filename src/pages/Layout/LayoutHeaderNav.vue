<template>
  <div class="h-all">
    <el-menu
      default-active="1"
      class="el-menu-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="horizontal"
      @select="menuSelect">
      <template v-for="(item1,index1) in $router.options.routes[1].children">
        <el-submenu :index="index1">
          <template slot="title">{{item1.name}}</template>
          <template v-for="(item2, index2) in item1.children">
            <el-menu-item :index="item2.path">{{item2.name}}</el-menu-item>
          </template>
        </el-submenu>
      </template>

    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "LayoutHeaderNav",
        methods:{
          menuSelect(index){
            this.$router.push(index)
          }
        },
        mounted() {
          //页面渲染完成后
          //渲染tab
          var openTab = this.$store.state.openTab;
          if(openTab.length){
            this.$store.commit('set_active_tab', this.$route.path)
          }else{
            if(this.$route.path !='/FuncForm' ){
              this.$store.commit('add_tab',{route:'/FuncForm', name:'表单'})
              this.$store.commit('add_keepAliveRouter', 'FuncForm')
              this.$store.commit('add_tab',{route:this.$route.path,name:this.$route.name})
              this.$store.commit('add_keepAliveRouter', this.$route.path.split('/')[1])
              this.$store.commit('set_active_tab', this.$route.path)
            }else{
              this.$store.commit('add_tab',{route:this.$route.path,name:this.$route.name})
              this.$store.commit('add_keepAliveRouter', this.$route.path.split('/')[1])
            }
          }

        }
    }
</script>

<style scoped>

</style>
