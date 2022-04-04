import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Administracion from '../views/Administracion.vue'
import Opiniones from '../views/Opiniones.vue'
import EditarOpinion from '../views/EditarOpinion.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Administracion',
        component: Administracion
    },
    {
        path: '/opinion',
        name: 'Opiniones',
        component: Opiniones
    },
    {
        path: '/editar-opinion/:id',
        name: 'EditarOpinion',
        props: true,
        component: EditarOpinion
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router