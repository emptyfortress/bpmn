<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
	leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template lang="pug">
q-layout(view="hHh lpR fFf")
	q-header(bordered)
		q-toolbar
			q-btn(dense flat round icon="mdi-menu" @click="toggleLeftDrawer")

			q-toolbar-title
				q-avatar
					img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
				|Title
			RouterLink(to="/about") About
			RouterLink(to="/") home
		

			q-btn(dense flat round icon="mdi-menu" @click="toggleRightDrawer")

	q-drawer(
		show-if-above
		v-model="leftDrawerOpen"
		side="left"
		behavior="desktop"
		bordered)

		p laыдо дфл
		p laыдо дфл
		p laыдо дфл
		p laыдо дфл
		p laыдо дфл
		<!-- drawer content -->

	q-drawer(
		show-if-above
		v-model="rightDrawerOpen"
		side="right"
		bordered)
			<!-- drawer content -->

	q-page-container
		RouterView(v-slot="{ Component, route }")
			transition(:name="route.meta.transition || 'fade'" mode="out-in")
				component(:is="Component")
</template>

<style scoped lang="scss"></style>
