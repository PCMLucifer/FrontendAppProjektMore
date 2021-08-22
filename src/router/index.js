import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SviUredjajiView from '../views/SviUredjajiView.vue'
import AktivniUredjajiView from '../views/AktivniUredjajiView.vue'
import ProslaMjerenjaView from '../views/ProslaMjerenjaView.vue'
import NoviExperimentView from '../views/NoviExperimentView.vue'
import SenzoriView from '../views/SenzoriView.vue'




const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },


    {
        path: '/SviUredjaji',
        name: 'SviUredjajiView',
        component: SviUredjajiView
    },
    {
        path: '/AktivniUredjaji',
        name: 'AktivniUredjajiView',
        component: AktivniUredjajiView
    },
    {
        path: '/ProslaMjerenja',
        name: 'ProslaMjerenjaView',
        component: ProslaMjerenjaView
    },
    {
        path: '/NoviExperiment',
        name: 'NoviExperimentView',
        component: NoviExperimentView
    },
    {
        path: '/Senzori',
        name: 'SenzoriView',
        component: SenzoriView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes

})

export default router