<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Node, Edge } from '@vue-flow/core'
import { VueFlow, Position, useVueFlow, MarkerType } from '@vue-flow/core'
import DropZoneBackground from '@/components/nodes/DropZoneBackground.vue'
import Sidebar from '@/components/nodes/Sidebar.vue'

import StartNode from '@/components/nodes/StartNode.vue'
import EndNode from '@/components/nodes/EndNode.vue'
import ToolbarNode from '@/components/nodes/ToolbarNode.vue'
import GateNode from '@/components/nodes/GateNode.vue'
import useDragAndDrop from '@/composables/useDnD'
import CustomEdge from '@/components/nodes/CustomEdge.vue'

const {
	onDragOver,
	isDragging,
	onDrop,
	onDragLeave,
	isDragOver,
	isEditName,
	posX,
	posY,
	label,
	addDefault,
} = useDragAndDrop()

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
		position: { x: 132, y: 400 },
	},
])

const edges = ref<Edge[]>([
	{
		id: 'e1-2',
		source: '1',
		target: '2',
		type: 'smoothstep',
		markerEnd: {
			type: MarkerType.ArrowClosed,
			width: 20,
			height: 20,
		},
	},
])

// onConnect(addEdges)
onConnect((params) => {
	addEdges([
		{
			type: 'smoothstep',
			markerEnd: {
				type: MarkerType.ArrowClosed,
				width: 20,
				height: 20,
			},
			...params,
		},
	])
})
const add = () => {
	isEditName.value = false
	addDefault(posX.value, posY.value)
	label.value = ''
}
const calcPosition = computed(() => {
	return 'top: ' + (posY.value - 20) + 'px; left: ' + (posX.value - 50) + 'px;'
})

const clean = () => {
	isEditName.value = false
	label.value = ''
}
const changeEdge = (event: Event) => {
	console.log(event.edge.id)
	// event.edge.type = 'default'
	// edges.value.map((edge) => ({
	// 	edge.type = 'smoothstep'
	// }))
}
</script>

<template lang="pug">
q-page(padding)
	h2 Custom Flow
	.canvas(@drop="onDrop")
		VueFlow(
			:nodes="nodes"
			:edges="edges"
			@dragover="onDragOver"
			@dragleave="onDragLeave"
			@edge-click="changeEdge"
			)

			DropZoneBackground(:style="{ backgroundColor: isDragOver ? '#e7f3ff' : 'transparent', transition: 'background-color 0.2s ease', }")

			template(#node-start="customNodeProps")
				StartNode(v-bind="customNodeProps")

			template(#node-toolbar="nodeProps")
				ToolbarNode(:data="nodeProps.data" :label="nodeProps.label" @add="add")

			template(#node-gate="customNodeProps")
				GateNode(v-bind="customNodeProps")

			template(#node-end="customNodeProps")
				EndNode(v-bind="customNodeProps")

			template(#edge-custom="customEdgeProps")
				CustomEdge(v-bind="customEdgeProps" @dragover="test")

		Sidebar
		q-input(v-if="isEditName"
			:style="calcPosition"
			autofocus
			v-model="label"
			dense
			outlined
			@keyup.enter="add"
			@keyup.delete="clean"
			@keyup.esc="clean"
			@blur="clean"
			bg-color="white")
</template>

<style scoped lang="scss">
.canvas {
	width: 100%;
	height: calc(100vh - 150px);
	background: #fff;
	border: 1px solid #ccc;
	position: relative;
}
.q-input {
	position: absolute;
	top: 1rem;
	left: 5rem;
}
h2 {
	padding: 0;
	font-size: 1.7rem;
	line-height: 1;
}
:deep(.vue-flow__node.intersecting) {
	background-color: #ff0;
}
</style>
