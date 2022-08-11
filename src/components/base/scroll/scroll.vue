<template setup>
	<div ref="rootRef">
		<slot></slot>
	</div>
</template>
<script setup>
import { ref } from "vue";
import useScroll from "./useScroll";
const rootRef = ref(null)
const props = defineProps({
	click: { type: Boolean, default: true }
})
useScroll(rootRef, props)
</script>
<style lang="scss" scoped >
</style>