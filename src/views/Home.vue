<template>
	<div>
			<sec1/>
			<sec2/>
			<sec3/>
			<sec4/>
			<sec5/>
			<sec6/>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import sec1 from '@/components/home/sec1.vue'
import sec2 from '@/components/home/sec2.vue'
import sec3 from '@/components/home/sec3.vue'
import sec4 from '@/components/home/sec4.vue'
import sec5 from '@/components/home/sec5.vue'
import sec6 from '@/components/home/sec6.vue'


export default {
  name: 'home',
  components: {
				sec1,
				sec2,
				sec3,
				sec4,
				sec5,
				sec6
  }
}
</script>
