import { useVueFlow } from '@vue-flow/core'
import { ref, watch } from 'vue'
import { DefaultEtapStyle } from '@/components/nodes/nodeStyles'

let id = 0

function getId() {
	return `node_${id++}`
}

const state = {
	draggedType: ref(),
	isDragOver: ref(false),
	isDragging: ref(false),
}

export default function useDragAndDrop() {
	const { draggedType, isDragOver, isDragging } = state

	const { addNodes, screenToFlowCoordinate, onNodesInitialized, updateNode } = useVueFlow()

	watch(isDragging, (dragging) => {
		document.body.style.userSelect = dragging ? 'none' : 'auto'
	})

	function onDragStart(event: DragEvent, type: any) {
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

		const nodeId = getId()

		const newNode = {
			id: nodeId,
			type: draggedType.value,
			position,
			label: `${nodeId}`,
			// style: draggedType.value == 'toolbar' ? DefaultEtapStyle : '',
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
	}
}
