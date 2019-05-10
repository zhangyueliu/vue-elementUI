<template>
  <!--tab标签-->
  <el-tabs class="tab-box" v-model="activeIndex" type="border-card" @tab-click="tabClick" @tab-remove="deleteTab">
    <el-tab-pane
      v-if="openTab.length"
      closable
      :label="item.name"
      v-for="item in openTab"
      :name="item.route"
    >
    </el-tab-pane>
    <keep-alive :include="keepAliveRouter.toString()">
      <router-view></router-view>
    </keep-alive>
  </el-tabs>
</template>

<script>
    export default {
        name: "FuncTabs",
        data(){
          return{
            keepAliveRouter: []
          }
        },
        created(){
          this.keepAliveRouter = this.$store.state.keepAliveRouter;
        },
        methods:{
          tabClick(tab){
            this.$router.push(tab.name)
          },
          deleteTab(name){
            //第一个tab不删除
            if(this.openTab.length === 1){
              this.$message("仅剩的一个tab不能关闭！")
              return;
            }
            this.$store.commit('delete_tab', name);
            this.$store.commit('delete_keepAliveRouter', name.split('/')[1]);
            console.log(this.keepAliveRouter.toString())
            this.keepAliveRouter = this.$store.state.keepAliveRouter;
            //设置当前显示的tab
            if(name === this.activeIndex){
              if(this.openTab &&this.openTab.length>=1){
                let nextname = this.openTab[this.openTab.length-1].route;
                this.$router.push(nextname);
              }
            }
          }
        },
        computed: {
          openTab() {
            return this.$store.state.openTab
          },
          activeIndex: {
            get() {
              return this.$store.state.activeIndex;
            },
            set(val) {
              this.$store.commit('set_active_tab',val)
            }
          }
        }
    }
</script>

<style scoped>

</style>
