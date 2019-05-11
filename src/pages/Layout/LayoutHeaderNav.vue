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
          this.$store.commit('add_tab',{route:this.$route.path,name:this.$route.name})
          this.$store.commit('add_keepAliveRouter', this.$route.path.split('/')[1])
          this.$store.commit('set_active_tab', this.$route.path)
        }
      },
      watch:{
        /**
         * 监听路由变化
         * 若已在openTab中，则只设置active；若不在openTab中，则加到openTab中，并设置active和keepActiveTab
         * @param to 要切换到路由
         */
        '$route' (to){
          let flag = false;
          for (let item of this.$store.state.openTab){
            if(item.name === to.name){
              this.$store.commit('set_active_tab',to.path)
              flag = true;
              break;
            }
          }
          if(!flag){
            console.log(to)
            this.$store.commit('add_tab',{route: to.path, name: to.name})
            this.$store.commit('set_active_tab',to.path)
            this.$store.commit('add_keepAliveRouter',to.path.split('/')[1])//去除前面的'/'
          }
          //切换tab,滚动条回到顶部
          document.getElementsByClassName('tab-box')[0].children[1].scrollTop=0;
        }
      }
    }
</script>

<style scoped>

</style>
