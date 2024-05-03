<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Node } from '@vue-flow/core'
import { VueFlow, Position } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

import CustomNode from '@/components/nodes/CustomNode.vue'
import ToolbarNode from '@/components/nodes/ToolbarNode.vue'

const nodes = ref<CustomNode[]>([
	{
		id: '1',
		label: 'Старт',
		// this will create the node-type `custom`
		type: 'custom',
		position: { x: 50, y: 50 },
		sourcePosition: Position.Right,
	},
	{
		id: '2',
		label: 'Node 2',
		// this will create the node-type `special`
		type: 'special',
		data: { toolbarPosition: Position.Top },
		position: { x: 150, y: 50 },
	},

	// {
	// 	id: '3',
	// 	label: 'Node 3',
	// 	type: 'invalid',
	// 	position: { x: 350, y: 50 },
	// },
	{ id: 'e1-2', source: '1', target: '2', animated: true },
])
</script>

<template lang="pug">
q-page(padding)
	h2 Custom Flow
	.canvas
		VueFlow(v-model="nodes")
			Background(variant="lines" patternColor="#c9e7fb")
			template(#node-custom="customNodeProps")
				CustomNode(v-bind="customNodeProps")

			template(#node-toolbar="nodeProps")
				ToolbarNode(:data="nodeProps.data" :label="nodeProps.label")

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
