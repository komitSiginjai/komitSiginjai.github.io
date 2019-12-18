<template>
	<div id="sec5">
		<v-container>
			<v-snackbar
      v-model="statusSnackbar.snackbar"
						top="top"
						:color="statusSnackbar.colorSnackbar"
    >
      {{ this.statusSnackbar.textSnackBar }}
      <v-btn
        color="white"
        text
        @click="closeSnackbar()"
      >
        Close
      </v-btn>
    </v-snackbar>

			<v-row>
				<v-col
					cols="12"
					align="center"
					justify="center"
				>
					<h2>Next Activity</h2>
				</v-col>
			</v-row>

			<v-row>
				<v-col
					cols="12"
					lg="6"
					md="4"
					align="center"
					justify="center"
				>
					<form>
						<v-text-field
								v-model="$v.form.nama.$model"
								:error-messages="namaErrors"
								label="Nama"
								required
						></v-text-field>
						<v-text-field
								v-model="$v.form.wa.$model"
								:error-messages="waErrors"
								label="Wa"
								required
								type="number"
						></v-text-field>
						<v-text-field
								v-model="$v.form.email.$model"
								:error-messages="emailErrors"
								label="E-mail"
								required
						></v-text-field>
						<v-text-field
								v-model="$v.form.institusi.$model"
								:error-messages="institusiErrors"
								label="Institusi"
								required
						></v-text-field>

						<v-btn class="mr-4" @click="submit" :disabled="cekNamaNae">submit</v-btn>
						<v-btn @click="clear">clear</v-btn>
					</form>
				</v-col>
			
				<v-col
					cols="12"
					lg="6"
					md="4"
					align="center"
					justify="center"
					v-for="(item, i) in sec5Data"
					:key="i"
				>
					<v-row>
						<v-col
							cols="12"
							lg="4"
							md="2"
							align="center"
							justify="center"
						>
						
							<v-icon medium color="blue darken-2">mdi-google-maps</v-icon> <a href="https://goo.gl/maps/KMufxPWPJDFKZ7gj7" target="_blank" rel="noopener noreferrer">ALTERRA</a>
						</v-col>

						<v-col
							cols="12"
							lg="4"
							md="2"
							align="center"
							justify="center"
						>
							<v-icon medium color="blue darken-2">mdi-av-timer</v-icon> {{item.time}} , {{item.date}}
						</v-col>

						<v-col
							cols="12"
							lg="4"
							md="2"
							align="center"
							justify="center"
						>
						
							<v-icon medium color="blue darken-2">mdi-cellphone-android</v-icon> <a href="https://wa.me/6285839912664" target="_blank" rel="noopener noreferrer">(WA) Sugeng</a>
						</v-col>
					</v-row>

					<v-row>
						<v-col
							cols="12"
							align="center"
							justify="center"
						>
						<v-img
							:src="item.poster"
						>

						</v-img>
						</v-col>
					</v-row>
				</v-col>

					
			</v-row>
			<hr/>
		</v-container>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, numeric } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
	mixins: [validationMixin],

	name: 'sec5',
	
	validations: {
		form: {
			nama: { required },
			wa: { required, numeric },
			email: { required, email },
			institusi: { required } 
		}
	},

	data: function () {
		return {
			form: {
				nama: '',
				wa: '',
				email: '',
				institusi: '',
			},
			statusSnackbar: {
				snackbar: false,
				colorSnackbar: null,
				textSnackBar: ''
			},
			items: [
					'Item 1',
					'Item 2',
					'Item 3',
					'Item 4',
			],
			dataSudahAda: false
		}
	},

	created() {
		this.fetchDataSec5()
	},

	computed: {
		...mapGetters({
			resultData: 'datas/resultData',
			statusData: 'datas/statusData',
			sec5Data: 'datas/sec5Data'
		}),
		cekNamaNae() {
			return this.sec5Data.length ? this.sec5Data[0].nama_event == 'Coming Soon' ? true : false : false
		},
		namaErrors () {
				const errors = []
				if (!this.$v.form.nama.$dirty) return errors
				!this.$v.form.nama.required && errors.push('Nama is required.')
				return errors
		},
		waErrors () {
			const errors = []
			if (!this.$v.form.wa.$dirty) return errors
			!this.$v.form.wa.numeric && errors.push('Input only number')
			!this.$v.form.wa.required && errors.push('WA is required')
			return errors
		},
		emailErrors () {
				const errors = []
				if (!this.$v.form.email.$dirty) return errors
				!this.$v.form.email.email && errors.push('Must be valid e-mail')
				!this.$v.form.email.required && errors.push('E-mail is required')
				return errors
		},
		institusiErrors () {
			const errors = []
			if(!this.$v.form.institusi.$dirty) return errors
			!this.$v.form.institusi.required && errors.push('Institusi is required')
			return errors
		},

	},
	methods: {
		...mapActions({
			addPeserta: 'datas/addPeserta',
			fetchDataSec5: 'datas/fetchDataSec5'
		}),
		submit (e) {
			e.preventDefault()
			this.$v.$touch()
			if(this.$v.$invalid) {
				this.statusSnackbar.snackbar = true
				this.statusSnackbar.colorSnackbar = 'error'
				this.statusSnackbar.textSnackBar = 'Isi Data Dengan Benar !'
			} else {
				//this.addPeserta(this.form)
				this.addPeserta(this.form)
				this.clear()
					if(this.statusData) {
						this.statusSnackbar.snackbar = true
						this.statusSnackbar.colorSnackbar = 'success'
						this.statusSnackbar.textSnackBar = 'Anda Sudah Terdaftar'
						this.statusData = false
					}else {
						alert('loading')
					}
			}
		},
		clear () {
			this.$v.$reset()
			this.form.nama = ''
			this.form.email = ''
			this.form.wa = ''
			this.form.institusi = ''
		},
		closeSnackbar() {
			this.statusSnackbar.snackbar = false
		},
	},
}
</script>

<style>

</style>