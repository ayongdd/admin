<template>
	<div class="orderDetail_container">
		<!-- 第四层详情 -->
		<table class="table">
			<tr class="nav">
			  <td colspan="9">
				  {{$L.t('common.dalDetailTitle')}}:
				  <input type="button" :value="$L.t('today')" @click="selectDay(0)">
				  <input type="button" :value="$L.t('yesterday')" @click="selectDay(1)">
				  <input type="button" :value="$L.t('thisWeek')" @click="selectDay(6)">
				  <input type="button" :value="$L.t('lastWeek')" @click="selectDay(14)">
				  <input type="button" :value="$L.t('thisMonth')" @click="selectDay(30)">
				  <input type="button" :value="$L.t('lastMonth')" @click="selectDay(60)">
			  </td>
			</tr>
			<tr>
			  <td colspan="9">
			    <div class="timeShow">
			      <timer class="submitSeach" @sendTime="getTimer" :day="days"></timer>
			      <div class="submitSeach">
			        <input type="submit" :value="$L.t('submit')" @click="seachCondition()">
			      </div>
			      <div class="submitSeach" v-if="tableNum == 2">
			        <input type="button" :value="$L.t('common.go-1')" @click="tableNum = 1">
			      </div>
			    </div>
			  </td>
			</tr>
			<tr class="head" v-if="tableNum == 1">
				<td>{{$L.t('table.username')}}</td>
				<td>{{$L.t('common.xm')}}</td>
				<td>{{$L.t('common.zdl')}}</td>
				<td>{{$L.t('agent.agent_8.zh64')}}</td>
				<td>{{$L.t('common.yxtze')}}</td>
				<td>{{$L.t('agent.agent_8.zh54')}}</td>
				<td>{{$L.t('table.handle')}}</td>
			</tr>
			<tr class="odds" v-if="proData && tableNum == 1">
				<td>{{paramsData.username}}</td>
				<td>{{proData.name}}</td>
				<td>{{proData.betNum}}</td>
				<td>{{proData.bets}}</td>
				<td>{{proData.cellScore}}</td>
				<td>{{proData.profit}}</td>
				<td>
					<button @click="getDetail(proData)">{{$L.t('agent.agent_8.zh57')}}</button>
				</td>
			</tr>
			<tr class="head" v-if="tableNum == 2">
				<td>{{$L.t('table.username')}}</td>
				<td>{{$L.t('common.xmmc')}}</td>
				<td>{{$L.t('common.xmbh')}}</td>
				<td>{{$L.t('common.xmbhqihao')}}</td>
				<td>{{$L.t('agent.agent_8.zh52')}}</td>
				<td>{{$L.t('common.yxxiazhu')}}</td>
				<td>{{$L.t('agent.agent_8.zh54')}}</td>
				<td>{{$L.t('agent.agent_8.zh55')}}</td>
				<td>{{$L.t('common.czsj')}}</td>
			</tr>
			<tr class="odds" v-if="tableNum == 2" v-for="item in tableStore.agencyOrderList.data.data">
				<td>{{paramsData.username}}</td>
				<td>{{item.name}}</td>
				<td>{{item.GameID}}</td>
				<td>{{item.ServerID}}</td>
				<td>{{item.AllBet}}</td>
				<td>{{item.CellScore}}</td>
				<td>{{item.Profit}}</td>
				<td>{{item.Revenue}}</td>
				<td>{{item.GameStartTime}}</td>
			</tr>
			<tr v-if="pageData.sum > 0 && tableNum == 2">
			  <td colspan="9">
			    <page-limit class="padding_page" :pageData="pageData" @handlePage="pageHandle"></page-limit>
			  </td>
			</tr>
			<tr v-if="pageData.sum == 0 && tableNum == 2">
        <td colspan="9" style="text-align: center;">{{$L.t('noData')}}</td>
      </tr>
		</table>
	</div>
</template>
<script>
	import { mapState, mapMutations, mapActions } from 'vuex'
	export default {
		props: ['paramsData'],
		data () {
			return {
				sendParmas: {
					uid: '',
					agency_id: '',//第三方的id
					username: '',
					fromTime: '',
					toTime: '',
					page: 1,
					limit: 20,
				},
				projectSum: {
					fromTime: '',
					toTime: '',
					username: '',
					a_id: '',
				},
				days: '',
				proData: {},
				tableNum: 1,
			}
		},
		computed:{
			...mapState([
				'tableStore'
			]),
			pageData () {
				return {
					page: this.sendParmas.page,
					limit: this.sendParmas.limit,
					sum: this.tableStore.agencyOrderList.data.count || 0
				}
			},
		},
		created () {
			Object.assign(this.sendParmas, this.paramsData)

			this.projectSum.fromTime = this.paramsData.fromTime
			this.projectSum.toTime = this.paramsData.toTime
			this.projectSum.a_id = this.paramsData.agency_id
			this.projectSum.username = this.paramsData.username
			// this.getDmReportList(this.sendParmas).then(res => {
			this.getDmReportList(this.projectSum).then(res => {
				this.proData = res
			})
			this.sendParmas.uid = this.paramsData.uid

		},
		methods: {
			...mapActions([
				'getAgencyOrderList',
				'getDmReportList',
			]),
			// 分页切换
			pageHandle (data) {
				this.sendParmas.page = data.page
				this.sendParmas.limit = data.limit
				this.getAgencyOrderList(this.sendParmas)
			},
			// 快捷选时
			selectDay(d){
			  this.days = d
			},
			// 时间
      getTimer(start,end){
        this.sendParmas.fromTime = start
				this.sendParmas.toTime = end
				// 打码量详情
				this.projectSum.fromTime = start
				this.projectSum.toTime = end
      },
      getDetail (item) {
				this.tableNum = 2
      	this.getAgencyOrderList(this.sendParmas)
      },
      // 搜索
      seachCondition () {
      	this.tableNum = 1
      	this.getDmReportList(this.projectSum).then(res => {
      		this.proData = res
      	})
      },
		}
	}
</script>
<style lang="less" scoped>
.orderDetail_container{
	height: 650px;
	overflow: auto;
	table{
		margin-top: 0;
	}
}
</style>
