<template lang="pug">
.about
	h1 This is an about page
	.green fuck lakjslkajALkj lkjLAk
	q-btn(unelevated color="primary" label="Отмена" @click="action") 
	q-input(v-model="model" dense label="Label" filled)
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
	.about {
		// min-height: 100vh;
		// display: flex;
		// align-items: center;
		color: $negative;
	}
}
</style>
