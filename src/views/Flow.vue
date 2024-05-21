<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Node, Edge } from '@vue-flow/core'
import { VueFlow, Position, useVueFlow, MarkerType } from '@vue-flow/core'
import DropZoneBackground from '@/components/nodes/DropZoneBackground.vue'
import Sidebar from '@/components/nodes/Sidebar.vue'
import PropertyPanel from '@/components/PropertyPanel.vue'

import StartNode from '@/components/nodes/StartNode.vue'
import EndNode from '@/components/nodes/EndNode.vue'
import ToolbarNode from '@/components/nodes/ToolbarNode.vue'
import GateNode from '@/components/nodes/GateNode.vue'
import useDragAndDrop from '@/composables/useDnD'
import CustomEdge from '@/components/nodes/CustomEdge.vue'
import { useNodesStore } from '@/stores/nodes'

const store = useNodesStore()

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
}
const select = (e: Node) => {
	console.log(e.node)
	// e.node.label = 'fuck'
}
</script>

<template lang="pug">
q-page(padding)
	h2 Custom Flow
	.grid
		.canvas(@drop="onDrop")
			VueFlow(
				:nodes="store.nodes"
				:edges="store.edges"
				@dragover="onDragOver"
				@dragleave="onDragLeave"
				@edge-click="changeEdge"
				@node-click="select"
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

		q-card.panel(flat square)
			PropertyPanel
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 1fr 350px;
	column-gap: 0.5rem;
}
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
// :deep(.vue-flow__node.intersecting) {
// 	background-color: #ff0;
// }
</style>
