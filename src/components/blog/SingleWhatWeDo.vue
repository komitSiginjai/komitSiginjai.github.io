<template>
	<v-container v-if="!filteredWhatWeDo.length">
		<div class="text-xs-center">
		<h2>Kegiatan "<span style="color: red">{{this.id}}</span>" Tidak Ditemukan</h2>
		</div>
	</v-container>

	<v-container v-else>
		<v-row>
			<v-col
				cols="12"
				align="center"
				justify="center"
				v-for="item in filteredWhatWeDo"
				:key="item.ID"
			>
				<v-card
							class="pa-2 mb-4"
							outlined
							tile
					>
							<v-img
									class="white--text align-end"
									:src="item.foto"
							>
							</v-img>
							<v-card-title>{{item.judul}}</v-card-title>
							
							<v-card-text class="text--primary">
									<div>{{item.deskripsi}}</div>
									<div>{{item.ID}}</div>
							</v-card-text>

							<v-card-actions>
									<v-btn
											color="orange"
									>
											Tombol
									</v-btn>
							</v-card-actions>
					</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
//import axios from 'axios'
//import WhatWeDoVue from './WhatWeDo.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  data () {
    return {
						
    }
  },

		created() {
			this.fetchBlogDatas()
		},

		computed: {
			...mapGetters({
				allBlogDatas: 'blog/blogDatas',
				loadingDatas: 'blog/loadingDatas'
			}),
			filteredWhatWeDo () {
				return this.allBlogDatas.filter(coba => {
					return this.id == coba.ID
				})
			}
		},

	methods: {
		...mapActions({
			fetchBlogDatas: 'blog/fetchBlogDatas',
		}),
	}
}
</script>

<style>

</style>