import { defineStore } from 'pinia'
import { MarkerType } from '@vue-flow/core'

export const useNodesStore = defineStore('node', {
	state: () => ({
		nodes: [
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
			{
				id: '3',
				label: 'Label',
				position: { x: 232, y: 300 },
			},
		],
		edges: [
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
		],
	}),
	getters: {
		// doubleCount: (state) => state.count * 2,
	},
	actions: {
		// increment() {
		// 	this.count++
		// },
	},
})
