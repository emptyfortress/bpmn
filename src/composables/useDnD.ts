import { useVueFlow } from '@vue-flow/core'
import { ref, watch } from 'vue'

let id = 0

function getId() {
	return `node_${id++}`
}

const state = {
	draggedType: ref(),
	isDragOver: ref(false),
	isDragging: ref(false),
	isEditName: ref(false),
	posX: ref(0),
	posY: ref(0),
	label: ref(''),
}

export default function useDragAndDrop() {
	const { draggedType, isDragOver, isDragging, isEditName, posX, posY, label } = state

	const { addNodes, screenToFlowCoordinate, onNodesInitialized, updateNode } = useVueFlow()

	watch(isDragging, (dragging) => {
		document.body.style.userSelect = dragging ? 'none' : 'auto'
	})

	function onDragStart(event: DragEvent, type: string) {
		if (event.dataTransfer) {
			event.dataTransfer.setData('application/vueflow', type)
			event.dataTransfer.effectAllowed = 'move'
		}

		draggedType.value = type
		isDragging.value = true

		document.addEventListener('drop', onDragEnd)
	}

	function onDragOver(event: DragEvent) {
		event.preventDefault()

		if (draggedType.value) {
			isDragOver.value = true

			if (event.dataTransfer) {
				event.dataTransfer.dropEffect = 'move'
			}
		}
	}

	function onDragLeave() {
		isDragOver.value = false
	}

	function onDragEnd() {
		isDragging.value = false
		isDragOver.value = false
		draggedType.value = null
		document.removeEventListener('drop', onDragEnd)
	}

	function onDrop(event: DragEvent) {
		const position = screenToFlowCoordinate({
			x: event.clientX,
			y: event.clientY,
		})

		if (draggedType.value == 'default') {
			isEditName.value = true
			posX.value = position.x
			posY.value = position.y
		} else addNode(position)
	}

	function addNode(position: any) {
		const nodeId = getId()

		const newNode = {
			id: nodeId,
			type: draggedType.value,
			position,
			label: `${nodeId}`,
		}

		const { off } = onNodesInitialized(() => {
			updateNode(nodeId, (node) => ({
				position: {
					x: node.position.x - node.dimensions.width / 2,
					y: node.position.y - node.dimensions.height / 2,
				},
			}))

			off()
		})
		addNodes(newNode)
	}

	function addDefault(x: number, y: number) {
		const nodeId = getId()

		const newNode = {
			id: nodeId,
			type: draggedType.value,
			position: {
				x: x,
				y: y,
			},
			label: label.value,
		}
		const { off } = onNodesInitialized(() => {
			updateNode(nodeId, (node) => ({
				position: {
					x: node.position.x - node.dimensions.width / 2,
					y: node.position.y - node.dimensions.height / 2,
				},
			}))

			off()
		})

		addNodes(newNode)
	}

	return {
		draggedType,
		isDragOver,
		isDragging,
		onDragStart,
		onDragLeave,
		onDragOver,
		onDrop,
		isEditName,
		posX,
		posY,
		label,
		addDefault,
	}
}
