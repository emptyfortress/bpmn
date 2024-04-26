<script setup lang="ts">
import { ref } from 'vue'
import type { Node } from '@vue-flow/core'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

import CustomNode from '@/components/nodes/CustomNode.vue'

const nodes = ref<CustomNode[]>([
	{
		id: '1',
		label: 'Старт',
		// this will create the node-type `custom`
		type: 'custom',
		position: { x: 50, y: 50 },
	},
	{
		id: '2',
		label: 'Node 2',
		// this will create the node-type `special`
		type: 'special',
		position: { x: 150, y: 50 },
	},

	{
		id: '3',
		label: 'Node 3',
		// this will throw a type error, as the type is not defined in the CustomEdgeTypes
		// regardless it would be rendered as a default edge type
		type: 'invalid',
		position: { x: 350, y: 50 },
	},
])
</script>

<template lang="pug">
q-page(padding)
	h2 Custom Flow
	.canvas
		VueFlow(:nodes="nodes")
			Background(variant="lines" patternColor="#c9e7fb")
			template(#node-custom="customNodeProps")
				CustomNode(v-bind="customNodeProps")

</template>

<style scoped lang="scss">
.canvas {
	width: 100%;
	height: calc(100vh - 150px);
	background: #fff;
	border: 1px solid #ccc;
}
h2 {
	padding: 0;
	font-size: 1.7rem;
	line-height: 1;
}
:deep(.selected) {
	// box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}
</style>
