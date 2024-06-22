import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "./pages/MainPage.vue";
import NotFound from "./pages/NotFound.vue";
import { articles } from './articles';

const routes = [
    { path: '/', component: MainPage },
    {
        path: '/:slug',
        component: NotFound,
    }
];

export const router = createRouter({
    history: createWebHistory('/studoby-web/'),
    routes,
});

// Dynamic import based on route params
router.beforeEach(async (to, _, next) => {
    const article = articles.find(article => article.slug === to.params.slug);
    if (article) {
        const component = await import(`@/pages/blog/${article.component}.vue`);
        to.matched[0].components!.default = component.default;
    }
    next();
});
