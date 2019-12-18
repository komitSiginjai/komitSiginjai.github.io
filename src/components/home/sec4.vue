<template>
		<div id="sec4">
			<v-container>
				<center><h1>Latest Activity</h1></center>
				<v-row>
					<v-col
						cols="12"
						lg="6"
						md="4"
					>
						<v-carousel
							hide-delimiters
							v-for="(item, i) in sec4Data"
							:key="i"
						>
								<v-carousel-item>
										<v-sheet
												tile
										>
											<v-img
												:src="item.foto1"
											>

											</v-img>
										</v-sheet>
								</v-carousel-item>

								<v-carousel-item>
										<v-sheet
												tile
										>
											<v-img
												:src="item.foto2"
											>

											</v-img>
										</v-sheet>
								</v-carousel-item>

								<v-carousel-item>
										<v-sheet
												tile
										>
											<v-img
												:src="item.foto3"
											>

											</v-img>
										</v-sheet>
								</v-carousel-item>

						</v-carousel>
					</v-col>

					<v-col
						cols="12"
						lg="6"
						md="4"
						v-for="(item, i) in sec4Data"
						:key="i"
					>
						<v-icon>mdi-cards-heart</v-icon> {{item.kategori}}
						<h2>{{item.nama_activity}}</h2>
						<p>{{item.deskripsi_activity}}</p>
						<p>by <strong>{{item.writer}}</strong>, {{item.date}} </p>
						<v-btn
							:href="item.link_ig"
							target="_blank"
						>
							readmore
						</v-btn>
					</v-col>
				</v-row>
				<hr/>
			</v-container>
		</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'sec4',
	data: function () {
		return {
			colors: [
				'primary',
				'secondary',
				'yellow darken-2',
				'red',
				'orange',
			],
		}
	},
	created() {
		this.fetchDataSec4()
	},
	computed: {
		...mapGetters({
			sec4Data: 'datas/sec4Data'
		})
	},
	methods: {
		...mapActions({
			fetchDataSec4: 'datas/fetchDataSec4'
		}),
	}
}
</script>

<style>

</style>