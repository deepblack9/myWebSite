<template>
  <div>
    <!-- <Sticky> -->
      <el-row class="bg-top">
        <el-col :span="4" :offset="16">
          <!-- <el-row> -->
            <el-button type="text" icon="el-icon-edit">注册</el-button>
            <el-button type="text" icon="el-icon-setting">登录</el-button>
            <el-button type="text" icon="el-icon-mobile-phone">移动端</el-button>
          <!-- </el-row> -->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2" :offset="4"><img src="../../assets/logo.png"></el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-carousel>
            <el-carousel-item v-for="(item, key, index) in jpgList" :key="index" >
              <img :src="item.img" ref="img">
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
      jpg: require('@/assets/pub1.png'),
      jpgList: [{
        img: require('@/assets/pub1.png')
      }, {
        img: require('@/assets/pub2.png')
      }, {
        img: require('@/assets/pub3.png')
      }, {
        img: require('@/assets/pub4.png')
      }],
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

.el-button--text {
  color: #f6f7f9
}

.div-inline{ display:inline} 

.bg-top {
  background: #3F598C;
}

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
