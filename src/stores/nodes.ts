import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { MarkerType } from '@vue-flow/core'

export const useNodesStore = defineStore('node', () => {
	const nodes = ref([
		{
			id: '1',
			label: 'Старт',
			type: 'start',
			selected: false,
			position: { x: 150, y: 50 },
		},
		{
			id: '2',
			label: 'Завершение',
			type: 'end',
			selected: false,
			position: { x: 132, y: 400 },
		},
		{
			id: '3',
			label: 'Label',
			selected: false,
			position: { x: 232, y: 300 },
		},
	])
	const edges = ref([
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

	const selected: Ref<Node | null> = ref(null)

	const setSelected = (e: null | Node) => {
		selected.value = e
	}

	return { nodes, edges, selected, setSelected }
})
