<script setup lang="ts">
import { onMounted } from 'vue'
import Modeler from 'bpmn-js/lib/Modeler'

const xml = '@/stores/diagram.bpmn'

const modeler = new Modeler({ container: '#canvas' })

onMounted(async () => {
	try {
		await modeler.importXML(xml)
		console.log('success')
		// ...
	} catch (err) {
		console.log('err')
		// err...
	}
})
</script>

<template lang="pug">
q-page(padding)
	h2 bpmn
	div(id="canvas")
</template>

<style scoped>
#canvas {
	width: 900px;
	height: 700px;
	background: #ccc;
}
</style>
