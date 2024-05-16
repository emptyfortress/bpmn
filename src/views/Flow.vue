<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Node } from '@vue-flow/core'
import { VueFlow, Position, useVueFlow } from '@vue-flow/core'
import DropZoneBackground from '@/components/nodes/DropZoneBackground.vue'
import Sidebar from '@/components/nodes/Sidebar.vue'

import StartNode from '@/components/nodes/StartNode.vue'
import EndNode from '@/components/nodes/EndNode.vue'
import ToolbarNode from '@/components/nodes/ToolbarNode.vue'
// import { DefaultEtapStyle } from '@/components/nodes/nodeStyles'

import useDragAndDrop from '@/composables/useDnD'

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()
const { onConnect, addEdges } = useVueFlow()

const nodes = ref<Node[]>([
	{
		id: '1',
		label: 'Старт',
		type: 'start',
		position: { x: 150, y: 50 },
	},
	{
		id: '2',
		label: 'Завершение',
		type: 'end',
		position: { x: 130, y: 400 },
	},
	{
		id: 'e1-2',
		source: '1',
		target: '2',
		animated: false,
	},
])

onConnect(addEdges)
</script>

<template lang="pug">
q-page(padding)
	h2(@click="add") Custom Flow
	.canvas(@drop="onDrop")
		VueFlow(:nodes="nodes" @dragover="onDragOver" @dragleave="onDragLeave")
			DropZoneBackground(:style="{ backgroundColor: isDragOver ? '#e7f3ff' : 'transparent', transition: 'background-color 0.2s ease', }")
			template(#node-start="customNodeProps")
				StartNode(v-bind="customNodeProps")

			template(#node-toolbar="nodeProps")
				ToolbarNode(:data="nodeProps.data" :label="nodeProps.label" @add="add")

			template(#node-end="customNodeProps")
				EndNode(v-bind="customNodeProps")
		Sidebar
</template>

<style scoped lang="scss">
.canvas {
	width: 100%;
	height: calc(100vh - 150px);
	background: #fff;
	border: 1px solid #ccc;
	position: relative;
}
h2 {
	padding: 0;
	font-size: 1.7rem;
	line-height: 1;
}
</style>
