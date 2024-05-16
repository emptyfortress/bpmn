<script setup lang="ts">
import useDragAndDrop from '@/composables/useDnD'

const { onDragStart } = useDragAndDrop()
</script>

<template lang="pug">
aside
	.circle(:draggable="true" @dragstart="onDragStart($event, 'start')")
		q-icon(name="mdi-play" size="sm")
		q-tooltip(anchor="center left" self="center right") Старт
	.node(draggable="true")
		q-tooltip(anchor="center left" self="center right") Узел
	.special(draggable="true")
		q-tooltip(anchor="center left" self="center right") Специальный узел
	.gate(draggable="true")
		q-tooltip(anchor="center left" self="center right") Шлюз
	.circle(draggable="true")
		q-icon(name="mdi-stop" size="sm")
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
.node {
	width: 100%;
	height: 30px;
	border: 2px solid #333;
	border-radius: 6px;
	background: #fff;
}
.special {
	width: 100%;
	height: 20px;
	background: #ef467e;
	border-radius: 10px;
}
.circle {
	background: #fff;
	text-align: center;
	padding-top: 2px;
	width: 35px;
	height: 35px;
	border-radius: 100%;
	border: 2px solid #333;
}
.gate {
	width: 28px;
	height: 28px;
	border: 2px solid #333;
	transform: rotate(45deg);
	background: #fff;
}
</style>
