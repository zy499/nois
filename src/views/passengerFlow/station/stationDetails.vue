<!--
 * @Description: 车站详情
 * @Author: zy
 * @Date: 2019-08-31 01:42:29
 * @LastEditors: zy
 * @LastEditTime: 2019-09-12 09:56:05
 -->
<template>
  <div>
    <div class="stationDetails_title" style="padding-top:40px;border-bottom:1px solid #ccc">
      <div style="margin:0 auto;width:1000px;padding:20px 0">
        <StationBreadcrumb />
      </div>
    </div>
    <div class="noSidebar_cont">
      <StationeTable />
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="突破日期" Consistency name="1">
          <el-tabs v-model="activeName">
            <el-tab-pane label="进站量" name="first">
              <el-table :data="tableData" style="width: 100%" align="center">
                <el-table-column prop="id" label="#" width="120px"></el-table-column>
                <el-table-column prop="name" label="车站"></el-table-column>
                <el-table-column prop="high" label="最高日进站量"></el-table-column>
                <el-table-column prop="date" label="突破日期器"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="出站量" name="second">出站量</el-tab-pane>
            <el-tab-pane label="换乘量" name="third">换乘量</el-tab-pane>
          </el-tabs>
        </el-collapse-item>
      </el-collapse>
      <el-collapse v-model="facilities" accordion>
        <el-collapse-item title="站内设施" Consistency name="1">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="facilities_left">车站结构图</div>
            </el-col>
            <el-col :span="12">
              <div>
                <p class="font_weight_bold">站内设施</p>
                <ul>
                  <li
                    v-for="(item,index) in facilitiesoptions"
                    :key="index"
                    class="flexStart justify-content-space-between"
                  >
                    <div class="flexStart">
                      <div>
                        <p class="font-size14 font_weight_bold">{{item.name}}</p>
                      </div>
                    </div>
                    <div class="margin_right_10 font-size10">{{item.cont}}</div>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
      <div>
        <p class="font_weight_bold">指标趋势</p>
        <p class="font-siz8">10之后的数据为预测书数据</p>
        <EchartsLine />
      </div>
      <div style="margin-top:40pxx;">
        <p class="font_weight_bold">天府广场站内换乘</p>
        <EchartsLine />
      </div>
      <div style="margin-top:40pxx;">
        <div>
          <p class="font_weight_bold">末班车可达性</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StationBreadcrumb from '@/components/passengerFlow/station/StationBreadcrumb'
import StationeTable from '@/components/passengerFlow/station/StationeTable'
import EchartsLine from '@/components/echarts/line'
export default {
  provide () {
    return {
      stationName: this.$route.params.stationName
      // routeObj: this.$route.params.routeObj
    }
  },
  components: {
    StationBreadcrumb,
    StationeTable,
    EchartsLine
  },
  data () {
    return {
      activeName: 'first',
      activeNames: '1',
      facilities: '1',
      tableData: [
        {
          id: '1',
          name: '天府广场',
          high: '62065',
          date: '2018/10/12'
        },
        {
          id: '2',
          name: '天府广场',
          high: '62065',
          date: '2018/10/12'
        },
        {
          id: '3',
          name: '天府广场',
          high: '62065',
          date: '2018/10/12'
        },
        { id: '4', name: '天府广场', high: '62065', date: '2018/10/12' }
      ],
      facilitiesoptions: [
        {
          name: '无障碍设备',
          cont: '地面电梯位于D口，无障碍电梯位于C口'
        },
        {
          name: '自动取款机',
          cont: '临近E出口'
        },
        {
          name: '警务室',
          cont: '位于E口'
        },
        {
          name: '警务室',
          cont: '位于E口'
        },
        {
          name: '警务室',
          cont: '位于E口'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  list-style: none;
  margin: 10px 0;
}
</style>