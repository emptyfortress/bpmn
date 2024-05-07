<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Node } from '@vue-flow/core'
import { VueFlow, Position } from '@vue-flow/core'
import { Background } from '@vue-flow/background'

import StartNode from '@/components/nodes/StartNode.vue'
import EndNode from '@/components/nodes/EndNode.vue'
import ToolbarNode from '@/components/nodes/ToolbarNode.vue'
import { DefaultEtapStyle } from '@/components/nodes/nodeStyles'

// export interface CustomData {
// 	hello: string
// }

// export interface CustomEvents {
// 	onCustomEvent: (event: MouseEvent) => void
// }
//
// type CustomNodeTypes = 'toolbar' | 'default'

// type CustomNode = Node<CustomData, CustomEvents, CustomNodeTypes>

const nodes = ref<any[]>([
	{
		id: '1',
		label: 'Старт',
		type: 'start',
		position: { x: 150, y: 50 },
	},
	{
		id: '2',
		label: 'Этап',
		type: 'default',
		position: { x: 120, y: 200 },
	},
	{
		id: '3',
		label: 'Этап',
		type: 'toolbar',
		data: { toolbarPosition: Position.Right },
		position: { x: 120, y: 300 },
		style: DefaultEtapStyle,
	},
	{
		id: '4',
		label: 'Завершение',
		type: 'end',
		position: { x: 120, y: 400 },
	},
	{
		id: 'e1-2',
		source: '1',
		target: '2',
		animated: true,
	},
	{
		id: 'e2-3',
		source: '2',
		target: '3',
		animated: false,
	},
	{
		id: 'e3-4',
		source: '3',
		target: '4',
		animated: false,
	},
])
const add = () => {
	nodes.value.push({
		id: '5',
		label: 'Новый этап',
		type: 'toolbar',
		position: { x: 300, y: 400 },
		data: { toolbarPosition: Position.Right },
		style: DefaultEtapStyle,
	})
	nodes.value.push({
		id: 'e3-5',
		source: '3',
		target: '5',
		animated: false,
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
