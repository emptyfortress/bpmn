<script setup lang="ts">
import { Position, Handle } from '@vue-flow/core'
// import type { NodeProps } from '@vue-flow/core'

// const props = defineProps<NodeProps<CustomData, CustomEvents>>()
// import { CustomData, CustomEvents } from './nodes'
// console.log(props.data.hello)
</script>

<template lang="pug">
.node
	// .label Старт
	// .gate
	svg(width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg")
		rect(x="2.82843" y="31.8198" width="41" height="41" transform="rotate(-45 2.82843 31.8198)" fill="#EDEDED" stroke="black" stroke-width="3")

		// q-icon(name="mdi-play" size="md")
	Handle(type="source" :position="Position.Left" )
	Handle(type="source" :position="Position.Right" )
	Handle(type="source" :position="Position.Bottom" )
	Handle(type="target" :position="Position.Top" )
	</template>

<style scoped lang="scss">
.node {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.gate {
	background: #ededed;
	width: 50px;
	height: 50px;
	border: 2px solid #333;
	transform: rotate(45deg);
}
.label {
	margin-top: 0.2rem;
	text-align: center;
}
rect {
	cursor: pointer;
}
.selected {
	rect {
		fill: #fff;
		stroke: $primary;
		// box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
		-webkit-filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4));
		filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4));
	}
	// .q-icon {
	// 	color: $primary;
	// }
}
</style>
