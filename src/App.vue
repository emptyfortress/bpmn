<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import LeftDrawer from '@/components/LeftDrawer.vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
	leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template lang="pug">
q-layout(view="hHh lpR fFf")
	q-header(elevated)
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer")

			q-toolbar-title
				q-avatar
					q-icon.q-mr-sm(name="mdi-shuffle-variant" size="md")
				|Конструктор BPMN

	LeftDrawer(v-model="leftDrawerOpen")

	q-page-container
		RouterView(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'" mode="out-in")
				component(:is="Component")
</template>

<style scoped lang="scss">
.q-header {
	background: var(--vt-c-indigo);
	height: 64px;
	line-height: 64px;
}
</style>
