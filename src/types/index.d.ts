interface CustomData {
	hello: string
}

interface CustomEvents {
	onCustomEvent: (event: MouseEvent) => void
}

type CustomNodeTypes = 'custom' | 'special'
type CustomNode = Node<CustomData, CustomEvents, CustomNodeTypes>
