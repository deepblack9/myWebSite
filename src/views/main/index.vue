<template>
  <div>
    <el-row type="flex" justify="center" :gutter="10">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">物流新闻</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="go('news')">更多>></el-button>
            </div>
            <div v-for="news in newsList" class="text item">
              <li>
                <span>{{ news.ptitle }}</span>
                <span style="float:right">{{ news.createtime | parseTime('{y}-{m}-{d}') }}</span>
              </li>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">公示公告</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="notice in noticeList" class="text item">
              <li>
                <span>{{ notice.ptitle }}</span>
                <span style="float:right">{{ notice.createtime | parseTime('{y}-{m}-{d}') }}</span>
              </li>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">政策法规</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div v-for="policy in policyList" class="text item">
              <li>
                <span>{{ policy.ptitle }}</span>
                <span style="float:right">{{ policy.createtime | parseTime('{y}-{m}-{d}') }}</span>
              </li>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col>
        <img src="../../assets/pub_middle.png">
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" :gutter="10">
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">价格信息</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <el-table :data="priceTableData" style="width: 100%" size="mini" stripe>
              <el-table-column prop="date" label="地区" min-width="180"></el-table-column>
              <el-table-column prop="name" label="品类" min-width="180"></el-table-column>
              <el-table-column prop="address" label="价格" min-width="180"></el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">价格走势</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <div class='chart-container' style='height:220px'>
              <chart height='100%' width='100%'></chart>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="15">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">劳务中介</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <el-table :data="priceTableData" style="width: 100%" size="mini" stripe>
              <el-table-column prop="date" label="手机号码" min-width="180"></el-table-column>
              <el-table-column prop="name" label="类型" min-width="180"></el-table-column>
              <el-table-column prop="name" label="价格" min-width="180"></el-table-column>
              <el-table-column prop="address" label="发布日期" min-width="180"></el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="15">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix card-header-conents">
              <span class="card-header-title">诚信信息</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多>></el-button>
            </div>
            <el-table :data="priceTableData" style="width: 100%" size="mini" stripe>
              <el-table-column prop="date" label="司机姓名" min-width="180"></el-table-column>
              <el-table-column prop="name" label="护照号" min-width="180"></el-table-column>
              <el-table-column prop="address" label="标签" show-overflow-tooltip width="80"></el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { AppMain } from '@/views/layout/components'
// import Sticky from '@/components/Sticky'
import Chart from '@/components/Charts/priceChart'
import { fetchNewsList, fetchNoticeList, fetchPolicyList } from '@/api/homepage'

export default {
  name: 'PageMain',
  components: { Chart },
  data() {
    return {
      newsList: [],
      noticeList: [],
      policyList: [],
      priceTableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created() {
    this.getNewsList()
    this.getNoticeList()
    this.getPolicyList()
  },
  methods: {
    go(path) {
      this.$router.push({ path: '/news' })
    },
    getNewsList() {
      // this.listLoading = true
      fetchNewsList(this.listQuery).then(response => {
        this.newsList = response.data.data
        // this.total = response.data.data.total
        // this.listLoading = false
      })
    },
    getNoticeList() {
      // this.listLoading = true
      fetchNoticeList(this.listQuery).then(response => {
        this.noticeList = response.data.data
        // this.total = response.data.data.total
        // this.listLoading = false
      })
    },
    getPolicyList() {
      // this.listLoading = true
      fetchPolicyList(this.listQuery).then(response => {
        this.policyList = response.data.data
        // this.total = response.data.data.total
        // this.listLoading = false
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
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
  text-align: left;
}

.card-header-conents {
  border-left: 3px solid #409EFF;
  margin: 0px 5px 0px 15px;
}

.card-header-title {
  margin: 0px 5px 0px 15px;
  color: #409EFF;
  font-weight:bold;
}
.chart-container {
  position: relative;
  width: 100%;
  height: 90%;
}

.tableheaderClassName {
  background-color:#f4f4f4;
  font-size: large;
}
</style>
