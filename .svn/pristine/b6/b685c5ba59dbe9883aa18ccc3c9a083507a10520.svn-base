<template>
	<div>
		<el-dialog
		  :title="$L.t('hint')"
		  class="confirmModel"
		  :visible.sync="cofirmVisible"
		  :modal-append-to-body="cofirmVisible"
      :append-to-body="cofirmVisible"
      :modal="cofirmVisible"
		  width="450px"
		  @close="syncClose()">
		  <div class="model-main">
		    {{content}}
		  </div>
		  <div class="model-footer-btn" v-if="!notBtn">
		  	<button @click="closeModel()">{{$L.t('cancel')}}</button>
		  	<button @click="commitModel()">{{$L.t('sure')}}</button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
	import {mapState, mapMutations, mapActions} from 'vuex'
	export default {
		props: ['content', 'notBtn'],
		data () {
			return {
				cofirmVisible: true
			}
		},
		methods: {
			// 取消
			closeModel () {
				this.$emit('closeModel')
			},
			// 确定
			commitModel () {
				this.$emit('commitModel')
			},
			// 异步关闭
			syncClose () {
				this.$emit('closeModel')
			},
		},
	}
</script>
<style lang="less" scoped>

</style>
