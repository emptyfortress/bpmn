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
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/BpmnView.vue'),
			meta: { title: 'Start', transition: 'fade' },
		},
		{
			path: '/bpmn/pizza',
			name: 'bpmn1',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('@/views/BpmnView1.vue'),
			meta: { title: 'Пицца', transition: 'fade' },
		},
		{ path: '/:pathMatch(.*)', component: NotFound },
		// { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
	],
})

const DEFAULT_TITLE = 'BPMN'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})

export default router
