<template>
  <div class="h-all">
    <img src="../../assets/img/logo.png" class="header-image"/>
    <ul class="header-right">
      <li class="header-right-item"><div class="header-right-item-box"><i class=""></i>用户名</div></li>
      <li class="header-right-item"><div class="header-right-item-box">当前时间</div></li>
      <li class="header-right-item">
        <div class="header-right-item-box">
          <el-dropdown trigger="click" class="switch-language">
            <span>
              选择语言<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>英文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </li>
      <li class="header-right-item">
        <div class="header-right-item-box">
          <el-button icon="el-icon-search" size="mini"></el-button>
        </div>
      </li>
      <li class="header-right-item">
        <div class="header-right-item-box">
          <el-button icon="el-icon-edit" size="mini"></el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "LayoutHeaderMain"
    }
</script>

<style scoped>

</style>
