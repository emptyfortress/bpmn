<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

const nodes = ref([
	{ id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
	{ id: '2', label: 'Node 2', position: { x: 100, y: 100 } },
	{ id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
	{ id: '4', label: 'Node 4', position: { x: 400, y: 200 } },
])

const edges = ref([
	{ id: 'e1-2', source: '1', target: '2', animated: true },
	{ id: 'e1-3', source: '1', target: '3' },
])
</script>

<template lang="pug">
q-page(padding)
	h2 Custom Flow
	.canvas
		VueFlow( v-model:nodes="nodes" v-model:edges="edges")
			Background(variant="lines" patternColor="#c9e7fb")
</template>

<style scoped lang="scss">
.canvas {
	width: 100%;
	height: calc(100vh - 150px);
	background: #fff;
	// background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAADBJREFUGFclioEJADAMwvSl7f8P1pfMaAsiCcT1inOPQJIlkwy3uT8JbmImh2zANh9STBXvibRbIgAAAABJRU5ErkJggg==)
	// 	repeat;
	border: 1px solid #ccc;
}
h2 {
	padding: 0;
	font-size: 1.7rem;
	line-height: 1;
}
</style>
