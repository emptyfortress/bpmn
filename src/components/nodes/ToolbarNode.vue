<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'

defineProps(['data', 'label'])

const emit = defineEmits(['add'])

const add1 = () => {
	emit('add')
}
const edit = () => {
	console.log(111)
}
</script>

<template lang="pug">
NodeToolbar(
	:is-visible="data.toolbarVisible"
	:position="data.toolbarPosition")

	q-btn(flat round icon="mdi-rectangle-outline" dense @click="add1")
	q-btn(flat round icon="mdi-rhombus-outline" dense)
	q-btn(flat round icon="mdi-circle-outline" dense)
	q-btn(flat round icon="mdi-pencil" dense)

label {{ label }}

// q-popup-edit(v-bind="label" auto-save v-slot="scope")
// 	q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

Handle(type="target" :position="Position.Top")
Handle(type="source" :position="Position.Bottom")

</template>

<style scoped lang="scss">
label {
	padding: 1rem;
}
</style>
