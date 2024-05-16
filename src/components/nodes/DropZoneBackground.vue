<script setup lang="ts">
import { Background } from '@vue-flow/background'
</script>

<template lang="pug">
div(style="height: 100%; width: 100%")
	Background(variant="lines" patternColor="#c9e7fb")
		slot
</template>

<style scoped lang="scss"></style>
