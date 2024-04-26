import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		transition: any
	}
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/bpmn/start',
			name: 'bpmn',
			component: () => import('@/views/BpmnView.vue'),
			meta: { title: 'Start', transition: 'fade' },
		},
		{
			path: '/bpmn/pizza',
			name: 'bpmn1',
			component: () => import('@/views/BpmnView1.vue'),
			meta: { title: 'Пицца', transition: 'fade' },
		},
		{
			path: '/flow',
			name: 'flow',
			component: () => import('@/views/Flow.vue'),
			meta: { title: 'Flow', transition: 'fade' },
		},
		{ path: '/:pathMatch(.*)', component: NotFound },
	],
})

const DEFAULT_TITLE = 'BPMN'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})

export default router
