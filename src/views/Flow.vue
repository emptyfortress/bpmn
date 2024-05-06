<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Node } from '@vue-flow/core'
import { VueFlow, Position } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

import StartNode from '@/components/nodes/StartNode.vue'
import EndNode from '@/components/nodes/EndNode.vue'
import ToolbarNode from '@/components/nodes/ToolbarNode.vue'
import { DefaultEtapStyle } from '@/components/nodes/nodeStyles'

const nodes = ref<StartNode[]>([
	{
		id: '1',
		label: 'Старт',
		// this will create the node-type `custom`
		type: 'start',
		position: { x: 150, y: 50 },
		// sourcePosition: Position.Bottom,
		data: {
			hello: 'fucccc',
		},
	},
	{
		id: '2',
		label: 'Этап',
		// this will create the node-type `special`
		type: 'toolbar',
		data: { toolbarPosition: Position.Right },
		position: { x: 120, y: 200 },
		style: DefaultEtapStyle,
	},

	{
		id: '3',
		label: 'Завершение',
		type: 'end',
		position: { x: 120, y: 300 },
	},
	{
		id: 'e1-2',
		source: '1',
		target: '2',
		animated: true,
		style: {
			strokeWidth: '3px',
		},
	},
	{
		id: 'e2-3',
		source: '2',
		target: '3',
		animated: false,
		style: {
			strokeWidth: '3px',
		},
	},
])
const add = () => {
	nodes.value.push({
		id: '3',
		label: 'lфдыоп',
		type: 'toolbar',
		position: { x: 300, y: 50 },
		data: { toolbarPosition: Position.Right },
		style: DefaultEtapStyle,
	})
}
</script>

<template lang="pug">
q-page(padding)
	h2(@click="add") Custom Flow
	.canvas
		VueFlow(v-model="nodes")
			Background(variant="lines" patternColor="#c9e7fb")
			template(#node-start="customNodeProps")
				StartNode(v-bind="customNodeProps")

			template(#node-toolbar="nodeProps")
				ToolbarNode(:data="nodeProps.data" :label="nodeProps.label" @add="add")

			template(#node-end="customNodeProps")
				EndNode(v-bind="customNodeProps")

</template>

<style scoped lang="scss">
.canvas {
	width: 100%;
	height: calc(100vh - 150px);
	background: #fff;
	border: 1p solid #ccc;
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
