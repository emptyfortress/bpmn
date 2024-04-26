<script setup lang="ts">
import { ref } from 'vue'

const modelValue = defineModel()
const pages = [
	{
		id: 0,
		title: 'Home',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'BPMN',
		icon: 'mdi-sitemap-outline',
		url: '/bpmn/start',
	},
	{
		id: 2,
		title: 'Пицца',
		icon: 'mdi-sitemap-outline',
		url: '/bpmn/pizza',
	},
	{
		id: 3,
		title: 'Flow',
		icon: 'mdi-sitemap-outline',
		url: '/flow',
	},
]
</script>

<template lang="pug">
q-drawer(v-model="modelValue" show-if-above behavior="desktop" bordered side="left" :width="256")
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in pages" :to="page.url")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}

</template>

<style scoped lang="scss">
.q-item--active,
.q-item.q-router-link--active {
	background: $accent1;
	color: $blue-9;
}

:deep(.q-drawer) {
	background: var(--color-background-soft);
}

:deep(.q-item__section--avatar) {
	min-width: initial;
}
</style>
