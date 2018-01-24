<template>
  <el-container>
    <el-header style="height:auto">
      <page-top></page-top>
    </el-header>
    <el-main>
      <page-main></page-main>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
// import { AppMain } from '@/views/layout/components'
import Sticky from '@/components/Sticky'
import PageTop from '@/views/Header'
import PageMain from '@/views/Main'

export default {
  name: 'layout',
  components: {
    Sticky,
    PageTop,
    PageMain
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
</style>
