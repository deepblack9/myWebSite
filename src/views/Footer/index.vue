<template>
  <div>
    <el-row type="flex" justify="space-around">
      <el-col :span="16">
        <div class="footer bg-purple">
          <div class="text item">关于我们  |  联系我们  |  招贤纳士  |  服务协议</div>
          <div class="text item">© 2018-2022 All Rights Reserved 版权所有</div>
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
  padding: 5px 5px;
}

.footer {
  padding: 15px 15px;
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
