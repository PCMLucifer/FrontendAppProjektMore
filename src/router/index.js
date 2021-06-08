import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'

import ExperimentView from '../views/ExperimentView'
import AddExperiment from '../views/AddExperiment'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },


    {
        path: '/experimenti',
        name: 'ExperimentView',
        component: ExperimentView
    },

    {
        path: '/addexperiment',
        name: 'AddExperiment',
        component: AddExperiment
    }



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router