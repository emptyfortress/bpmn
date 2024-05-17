<script setup lang="ts">
import { computed } from 'vue'
import { BaseEdge, BezierEdge, MarkerType, getBezierPath } from '@vue-flow/core'
import useDragAndDrop from '@/composables/useDnD'

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	sourceX: {
		type: Number,
		required: true,
	},
	sourceY: {
		type: Number,
		required: true,
	},
	targetX: {
		type: Number,
		required: true,
	},
	targetY: {
		type: Number,
		required: true,
	},
	sourcePosition: {
		type: String,
		required: true,
	},
	targetPosition: {
		type: String,
		required: true,
	},
	data: {
		type: Object,
		required: false,
	},
	markerEnd: {
		type: String,
		required: false,
	},
	style: {
		type: Object,
		required: false,
	},
})

// const path = computed(() => getBezierPath(props))
</script>

<template lang="pug">
BaseEdge(
	:source-x="sourceX"
	:source-y="sourceY"
	:target-x="targetX"
	:target-y="targetY"
	:source-position="sourcePosition"
	:target-position="targetPosition"
)
	slot
</template>

<style scoped lang="scss"></style>
