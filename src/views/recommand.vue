<template >
	<div class="recommend" v-loading:[loadingText]="loading">
		<Scroll class="recommend-content">
			<div>
				<div class="slider-wrapper">
					<div class="slider-content">
						<Slider v-if="sliders.length" :sliders="sliders" />
					</div>
				</div>
				<div class="recommend-list">
					<h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
					<ul>
						<li v-for="item in albums" class="item" :key="item.id" @click="selectItem(item)">
							<div class="icon"><img width="60" height="60" v-lazy="item.pic"></div>
							<div class="text">
								<h2 class="name">{{ item.username }}</h2>
								<p class="title">{{ item.title }}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</Scroll>
	</div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { getRecommend } from "../service/recommend";
import Slider from "@/components/base/slider/slider.vue";
import Scroll from "@/components/base/scroll/scroll.vue";
const sliders = ref([])
const albums = ref([])
const loadingText = '正在载入...'
const loading = computed(() => !sliders.value.length && !albums.value.length)
onMounted(async () => {
	const res = await getRecommend()
	sliders.value = res.sliders
	albums.value = res.albums
})
</script>
<style lang="scss" scoped>
.recommend {
	// position: fixed;
	width: 100%;
	top: 88px;
	bottom: 0;
	overflow: scroll;

	.recommend-content {
		height: 100%;
		overflow: hidden;

		.slider-wrapper {
			position: relative;
			width: 100%;
			height: 0;
			padding-top: 40%;
			overflow: hidden;

			.slider-content {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}

		.recommend-list {
			.list-title {
				height: 65px;
				line-height: 65px;
				text-align: center;
				font-size: $font-size-medium;
				color: $color-theme;
			}

			.item {
				display: flex;
				box-sizing: border-box;
				align-items: center;
				padding: 0 20px 20px 20px;

				.icon {
					flex: 0 0 60px;
					width: 60px;
					padding-right: 20px;
				}

				.text {
					display: flex;
					flex-direction: column;
					justify-content: center;
					flex: 1;
					line-height: 20px;
					overflow: hidden;
					font-size: $font-size-medium;
				}

				.name {
					margin-bottom: 10px;
					color: $color-text;
				}

				.title {
					color: $color-text-d;
				}
			}
		}
	}
}
</style>
