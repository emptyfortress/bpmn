<script setup lang="ts">
import { Position, Handle } from '@vue-flow/core'
// import type { NodeProps } from '@vue-flow/core'

// const props = defineProps<NodeProps<CustomData, CustomEvents>>()
// import { CustomData, CustomEvents } from './nodes'
// console.log(props.data.hello)
</script>

<template lang="pug">
.node
	.label Старт
	.circle
		q-icon(name="mdi-play" size="md")
	Handle(type="source" :position="Position.Bottom" )
</template>

<style scoped lang="scss">
.node {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.circle {
	background: #ededed;
	padding: 0.5rem 1rem;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 2px solid #333;
	position: relative;
	cursor: pointer;
}
.q-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.label {
	margin-top: 0.2rem;
	text-align: center;
}
.selected {
	.circle {
		box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
		border-color: $primary;
		background: #fff;
	}
	.q-icon {
		color: $primary;
	}
}
</style>
