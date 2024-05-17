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
	.gate
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
	cursor: pointer;
}
// .q-icon {
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// }
.label {
	margin-top: 0.2rem;
	text-align: center;
}
.selected {
	.gate {
		box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
		border-color: $primary;
		background: #fff;
	}
	// .q-icon {
	// 	color: $primary;
	// }
}
</style>
