<template>
	<div>
		<ul class="pageList-ul">
			<li>{{$L.t('common.gong')}}{{'[' + pageData.sum +']'}}{{$L.t('common.tiao')}}</li>
			<li class="page-func" @click="prevPage()" v-if="page > 1">{{$L.t('common.prev')}}</li>
			<li class="pageList-list" v-if="maxPage > 1">
				<span
					:class="[{'slefPage': item == page},{'isNaN': isNaN(item)}]"
					v-for="(item, index) in showPageArr"
					:key="index"
					@click="clickPage(item)">
					<i v-if="item != page && !isNaN(item)">{{'[ ' + item + ' ]'}}</i>
					<i v-else>{{item}}</i>
				</span>
			</li>
			<li class="page-func" @click="nextPage()" v-if="page < maxPage">{{$L.t('common.next')}}</li>
			<li class="page-select">
				<select v-model="limit" @change="pageChange()">
					<option v-for="(item, index) in pageList" :key="index" :value="item">{{item}} {{$L.t('common.tiaoye')}}</option>
				</select>
			</li>
			<li class="pageList-input" v-if="inputShow">
				{{$L.t('common.daodi')}}
				<input
					type="text"
					onkeyup="value=value.replace(/[^\0-9\.]/g,'')"
					onpaste="value=value.replace(/[^\0-9\.]/g,'')"
					oncontextmenu = "value=value.replace(/[^\0-9\.]/g,'')"
					v-model="inputPage"
					@input="inputChange">
				{{$L.t('common.ye')}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: ['pageData', 'inputShow'],
		data () {
			return {
				// 页数
				page: '',
				// 每页条数
				limit: '',
				pageList: [20, 40, 60, 80, 100, 120],
				inputPage: '',
        inputTimer: null,
			}
		},
		watch: {
			'pageData' (newValue) {
				// console.log(newValue)
				this.initPage()
			},
		},
		computed: {
			// 最大页数
			maxPage () {
				let num = Math.ceil(this.pageData.sum / this.limit)
				// console.log(num)
				return num
			},
			// 返回展示页面数组
			showPageArr () {
				let max = this.maxPage
				let arr = []
				if (max < 9) {
					for (let i = 1; i <= max; i++) {
						arr.push(i)
					}
					return arr
				}
				// 判断当前页面返回相应页码数组
				// 前面更多 后面更多状态
				let [prevMore, nextMore] = [false, false]
				// 页面大于9
				if (this.page >= 6) {
					if ((max - this.page) > 3) {
						prevMore = true
						nextMore = true
					} else {
						nextMore = false
						prevMore = true
					}
				}
				// 还有更多
				if (prevMore && nextMore) {
					arr.push(1)
					arr.push('...')
					for (let i = this.page - 2; i <= this.page * 1 + 2; i++) {
						arr.push(i)
					}
					arr.push('...')
					arr.push(max)
					return arr
				}
				// 页面已经到最后面了
				if (prevMore && !nextMore){
					arr.push(1)
					arr.push('...')
					for (let i = max - 5; i <= max; i++) {
						arr.push(i)
					}
					return arr
				}
				// 初始化的时候
				if (!prevMore && !nextMore) {
					for (let i = 1; i <= 6; i++) {
						arr.push(i)
					}
					arr.push('...')
					arr.push(max)
					return arr
				}
			},
			// 返回参数
			sendPasss () {
				return {
					page: this.page,
					limit: this.limit
				}
			}
		},
		created () {
			// console.log(this.pageData)
			this.initPage()
		},
		methods: {
			// 初始化值
			initPage () {
				this.page = this.pageData.page
				this.inputPage = this.pageData.page
				this.limit = this.pageData.limit
			},
			// 点击页面
			clickPage (value) {
				if (isNaN(value)) {
					return false
				}
				this.page = value
				this.inputPage = value
				this.$emit('handlePage', this.sendPasss)
			},
			// 选择页码切换
			pageChange () {
				// 返回参数
				this.page = 1
				this.inputPage = 1
				this.$emit('handlePage', this.sendPasss)
			},
			// 上一页
			prevPage () {
				this.page--
				this.inputPage = this.page
				// 返回参数
        this.$emit('handlePage', this.sendPasss)
			},
			// 下一页
			nextPage () {
				this.page++
				this.inputPage = this.page
				// 返回参数
        this.$emit('handlePage', this.sendPasss)
			},
			//
			// input页码切换
      inputChange () {
        clearTimeout(this.inputTimer)
        if (!this.inputPage){
          return false
        }
        if (this.inputPage > this.maxPage) {
        	this.$message(this.$L.t('common.pageAlert'))
        	return false
        }
        if (this.inputPage && this.inputPage >= 1) {
        	// 停止输入一秒钟后开始发起搜索请求
          this.inputTimer = setTimeout(() => {
            this.page = this.inputPage * 1
            // 返回参数
            this.$emit('handlePage', this.sendPasss)
          }, 800)
        }
      }
		}
	}
</script>
<style lang="css" scoped>
ul,li{
	list-style: none;
}
i{
	font-style: normal;
}
.pageList-ul{
	display: flex;
	align-items: center;
}
.pageList-ul li{
	margin: 0 3px;
	display: inline-flex;
	align-items: center;
	font-size: 12px;
  color: #000000;
}
.page-func{
	color: #0066cc !important;
	cursor: pointer;
}
.pageList-list span{
	display: inline-block;
	padding: 0 2px;
	margin: 0 3px;
	cursor: pointer;
	color: #0066cc;
}
.pageList-list span:hover,.page-func:hover{
	color: #FF9900;
}
.pageList-list span.slefPage{
	color: #000;
}
.pageList-list span.isNaN{
	color: #000;
	cursor: auto;
}

.pageList-ul li.pageList-input, .pageList-ul li.page-select{
	margin-left: 10px;
}
.pageList-input input{
	width: 36px;
	text-align: center;
	margin: 0 5px;
}
</style>
