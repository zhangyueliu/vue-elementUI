<template>
  <div class="flex-box" id="demo-flex">
    <div class="flex-item">
      <span class="one-ellipsis info">这是第一个flex项目,在这里显示一行，实现内容过长，出现省略号的效果</span>
    </div>

    <div class="flex-item adapt-flex main-box">
      <span class="info">这是第二个flex项目，实现弹性高度</span>
      <a class="info link" href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank">Flex 布局教程：语法篇</a>
      <a class="info link" href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" target="_blank">Flex 布局教程：实例篇</a>
      <span class="">css权重</span>
      <img src="../../../assets/img/weight.jpg" class="img"/>
    </div>
    <div class="flex-item">
      <span class="two-ellipsis info">这是第三个flex项目,在这里显示两行，实现内容过长，出现省略号的效果，多加点内容文字，超出两行，超出两行，超出两行</span>
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
    background-color: gray;
    padding: 8px;
    border:1px solid #dddddd;
  }
  .img{
    width: 100%;
  }
  .link{
    font-weight: bolder;
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
  /*css权重*/
  .info{
    font-family: 楷体;
    font-size: 20px;
    color: red;
    display: block;
  }
  .main-box .info{
    color: blue;
  }
  #demo-flex .info{
    color: purple;
  }
  #demo-flex .main-box .info{
    color: brown;
  }
</style>
