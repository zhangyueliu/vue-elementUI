<template>
  <div>
    <el-tree :data="data" default-expand-all :props="defaultProps"  @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
    export default {
      name: "LayoutSidebar",
      data() {
        return {
          data: [{
            label: '一级 1',
            children: [{
              label: '二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }, {
                label:'三级 1-1-2'
              }, {
                label:'四级 1-1-3',
                children: [{
                  label:'四级 1-1-1-1四级 1-1-1-1四级 1-1-1-1四级 1-1-1-1四级 1-1-1-1'
                }]
              }]
            }]
          }, {
            label: '一级 1',
            children: [{
              label: '二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }, {
                label:'三级 1-1-2'
              }, {
                label:'四级 1-1-3',
                children: [{
                  label:'四级 1-1-1-1四级 1-1-1-1四级 1-1-1-1四级 1-1-1-1四级 1-1-1-1'
                }]
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }, {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
      },
      methods: {
        handleNodeClick(data) {
          console.log(data);
        }
      }
    }
</script>

<style scoped>

</style>
