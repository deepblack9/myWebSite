<template>
  <el-container>
    <el-header class="header" style="height:auto">
      <page-top></page-top>
    </el-header>
    <el-main>
      <router-view></router-view>
      <!-- <page-main></page-main> -->
    </el-main>
    <el-footer style="height:auto">
      <page-footer></page-footer>
    </el-footer>
  </el-container>
</template>

<script>
// import { AppMain } from '@/views/layout/components'
import Sticky from '@/components/Sticky'
import PageTop from '@/views/Header'
import PageMain from '@/views/Main'
import PageFooter from '@/views/Footer'

export default {
  name: 'layout',
  components: {
    Sticky,
    PageTop,
    PageMain,
    PageFooter
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  scroll-y: none;
  height: 100%;
  width: 100%;
}
.header {
  padding: 0px 0px;
}
</style>
