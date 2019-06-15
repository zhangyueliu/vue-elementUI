<template>
  <div class="flex-box">
    <div class="flex-item">
      <span class="one-ellipsis">这是第一个flex项目,在这里显示一行，实现内容过长，出现省略号的效果</span>
    </div>

    <div class="flex-item adapt-flex">
      <span>这是第二个flex项目，实现弹性高度</span>
    </div>
    <div class="flex-item">
      <span class="two-ellipsis">这是第三个flex项目,在这里显示两行，实现内容过长，出现省略号的效果，多加点内容文字，超出两行，超出两行，超出两行</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "flex-box-test"
    }
</script>

<style scoped>
.flex-box{
  width: 400px;
  height:100%;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
}
  .flex-item{
    background-color: antiquewhite;
    padding: 8px;
    border:1px solid #cccccc;
  }
  .adapt-flex{
    flex: 1;
  }
  .one-ellipsis{
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .two-ellipsis{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
</style>
