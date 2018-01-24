<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>物流新闻</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>公示公告</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>政策法规</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { AppMain } from '@/views/layout/components'
// import Sticky from '@/components/Sticky'

export default {
  name: 'PageMain'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
  text-align: left;
}
</style>
