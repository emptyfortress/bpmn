<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
	<bpmn2:process id="process1567044459787" name="流程1567044459787">
		<bpmn2:documentation>描述</bpmn2:documentation>
		<bpmn2:startEvent id="StartEvent_1" name="Старт"/>
	</bpmn2:process>
	<bpmndi:BPMNDiagram id="BPMNDiagram_1">
		<bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process1567044459787">
			<bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
				<dc:Bounds x="184" y="64" width="36" height="36"/>
				<bpmndi:BPMNLabel>
					<dc:Bounds x="191" y="40" width="22" height="14"/>
				</bpmndi:BPMNLabel>
			</bpmndi:BPMNShape>
		</bpmndi:BPMNPlane>
	</bpmndi:BPMNDiagram>
</bpmn2:definitions>
`

const canvas = ref()

onMounted(() => {
	const cont = document.getElementById('#canvas')
	var modeler = new BpmnModeler({
		container: canvas.value,
		keyboard: {
			bindTo: window,
		},
	})

	modeler
		.importXML(xml)
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
// :deep(.bjs-powered-by) {
// 	display: none;
// }
.canvas {
	width: 100%;
	height: 800px;
	background: #fff;
}
</style>
