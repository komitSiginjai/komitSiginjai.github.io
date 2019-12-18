<template>
		<div id="sec3">
			<!-- <v-lazy
				v-model="isActive"
				:options="{
						threshold: .8
				}"
			> -->
				<v-container v-if="loadingData">
					<v-row>
						<v-col
							cols="12"
							align="center"
							justify="center"
							md="6"
							lg="4"
							v-for="item in fakeData"
							:key="item"
						>
							<v-skeleton-loader
									class="mx-auto"
									type="card"
							></v-skeleton-loader>
						</v-col>
						<v-btn
							class="mb-5"
						>
							tes
						</v-btn>
					</v-row>
					<hr/>
				</v-container>

				<v-container v-else>
					<center><h1>What We Do ?</h1></center>
					<v-row>
						<v-col 
							cols="12"
							md="6"
							lg="4"
							v-for="item in allDatas"
							:key="item.ID"
							>
								<v-card
										class="pa-2 mb-4"
										outlined
										tile
										:hover="true"
								>
										<v-img
												class="white--text align-end"
												height="200px"
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
														@click="SingleWhatWeDo(item.ID)"
												>
														View
												</v-btn>
										</v-card-actions>
								</v-card>
						</v-col>
					</v-row>
					
					<v-row>
						<v-col
							cols="12"
							align="center"
							justify="center"
						>
							<v-btn 
								class="mb-5"
							>
								readmore
							</v-btn>
						<hr/>
						</v-col>
					</v-row>
				</v-container>

			<!-- </v-lazy> -->
		</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'sec3',
	data: function () {
		return {
			isActive: false,
			fakeData: 6,
		}
	},
	created() {
		this.fetchDatas()
	},
	computed: {
		...mapGetters({
			allDatas: 'datas/allDatas',
			loadingData: 'datas/loadingData'
		}),
	},
	methods: {
		...mapActions({
			fetchDatas: 'datas/fetchDatas'
		})
	}
}
</script>

<style>

</style>