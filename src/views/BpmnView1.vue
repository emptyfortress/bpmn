<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import pizza from '@/stores/pizza.bpmn?raw'

const canvas = ref()

onMounted(() => {
	var modeler = new BpmnModeler({
		container: canvas.value,
		keyboard: {
			bindTo: window,
		},
	})

	modeler
		.importXML(pizza)
		.then(function (result) {
			const { warnings } = result
			console.log('success !', warnings)
			modeler.attachTo(canvas.value)
		})
		.catch(function (err) {
			const { warnings, message } = err
			console.log('something went wrong:', warnings, message)
		})
})
</script>

<template lang="pug">
q-page(padding)
	// h2 bpmn
	.canvas(ref="canvas")
</template>

<style scoped lang="scss">
:deep(.bjs-powered-by) {
	display: none;
}
// :deep(.bpmn-icon-subprocess-expanded) {
// 	display: none;
// }
.canvas {
	width: 100%;
	height: 770px;
	// background: #fff;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAADBJREFUGFclioEJADAMwvSl7f8P1pfMaAsiCcT1inOPQJIlkwy3uT8JbmImh2zANh9STBXvibRbIgAAAABJRU5ErkJggg==)
		repeat;
	border: 1px solid #ccc;
}
</style>
