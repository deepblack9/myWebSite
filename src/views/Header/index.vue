<template>
  <div>
    <!-- <Sticky> -->
      <el-row type="flex" align="middle">
        <el-col :span="10" style="text-align: left"><img src="../../assets/logo.png"></el-col>
        <el-col :span="14" style="text-align: right">
          <!-- <el-row> -->
            <div :span="12" class="div-inline">&nbsp;</div>
            <div :span="4" class="div-inline"><el-button type="primary" icon="el-icon-search">注册</el-button></div>
            <div :span="4" class="div-inline"><el-button type="primary" icon="el-icon-search">登录</el-button></div>
            <div :span="4" class="div-inline"><el-button type="primary" icon="el-icon-search">移动端</el-button></div>
          <!-- </el-row> -->
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in jpgList" :key="item">
              <image :src="item"></image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    <!-- </Sticky> -->
  </div>
</template>

<script>
// import { AppMain } from '@/views/layout/components'
import Sticky from '@/components/Sticky'

export default {
  name: 'PageTop',
  components: {
    Sticky
  },
  data() {
    return {
      jpgList: [
        require('@/assets/pub1.png'),
        require('@/assets/pub2.png'),
        require('@/assets/pub3.png'),
        require('@/assets/pub4.png')
      ],
      styleObject: {
        'background-image': 'url(' + require('@/assets/head_bg.png') + ')',
        'background-repeat': 'repeat-x'
      }
    }
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
.div-inline{ display:inline} 

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
