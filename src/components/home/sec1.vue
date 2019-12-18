<template>
	<div id="sec1">
		<v-parallax
    dark
    src="@/assets/laptop-1.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">KOMIT'S</h1>
        <h4 class="subheading">Komunitas IT Siginjai merupakan Komunitas IT yang berada di Jambi, Mari Bergabung Bersama Kami!</h4>
								<br>
								<v-btn
									href="https://docs.google.com/forms/d/e/1FAIpQLSesVwq47gONcjZUk6JRhqKUlsm6nmzwotUR6Oydv9dJWvaMig/viewform?usp=sf_link"
									target="_blank"
								>
									Daftar
								</v-btn>
      </v-col> 
    </v-row>
  </v-parallax>
	</div>

</template>

<script>
export default {
	name: 'sec1'
}
</script>

<style scoped>
.imgSec1{
	opacity: 0.6;
	max-height: 500px;
	object-fit: cover;
}

.tengah{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>