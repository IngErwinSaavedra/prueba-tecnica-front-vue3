import { createRouter, createWebHistory } from 'vue-router';

// Importa tus componentes para las diferentes rutas
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue';
import Convertidor from '../pages/Convertidor.vue';
import Historial from '../pages/Historial.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {

        path: '/home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: '/historial',
        name: 'Historial',
        component: Historial,
        meta: { requiresAuth: true }
    },
    {
        path: '/convertidor',
        name: 'Convertidor',
        component: Convertidor,
        meta: { requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        // Si la ruta requiere autenticación y no hay token, redirige al usuario a la página de inicio de sesión
        next('/login');
    } else {
        next();
    }
});

export default router;