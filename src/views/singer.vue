<template setup>
	<div class="singer">singer</div>
</template>
<script setup >
import { onMounted } from "vue";
import { getSingerList } from "../service/singer";
onMounted(async () => {
	const res = await getSingerList()
	console.log(res);
})
</script>
<style lang="scss" scoped >
</style>