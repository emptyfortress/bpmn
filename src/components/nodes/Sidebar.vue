<script setup lang="ts">
import useDragAndDrop from '@/composables/useDnD'

const { onDragStart } = useDragAndDrop()
</script>

<template lang="pug">
aside
	.start(:draggable="true" @dragstart="onDragStart($event, 'start')")
		img(src="@/assets/img/start.svg")
		q-tooltip(anchor="center left" self="center right") Старт
	.node(:draggable="true" @dragstart="onDragStart($event, 'default')")
		img(src="@/assets/img/node.svg")
		q-tooltip(anchor="center left" self="center right") Узел
	.gate(:draggable="true" @dragstart="onDragStart($event, 'gate')")
		img(src="@/assets/img/gate.svg")
		q-tooltip(anchor="center left" self="center right") Шлюз
	.end(:draggable="true" @dragstart="onDragStart($event, 'end')")
		img(src="@/assets/img/end.svg")
		q-tooltip(anchor="center left" self="center right") Завершение
</template>

<style scoped lang="scss">
aside {
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	width: 50px;
	background: hsl(225, 10%, 95%);
	border: 1px solid #aaa;
	padding: 6px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
}
</style>
