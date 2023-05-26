import { createRouter, createWebHashHistory } from "vue-router";
import { useDepStore } from "./stores/user";


import Start from "./views/Start.vue";
import Pagos from "./views/Pagos.vue";
import Cobros from "./views/cobros.vue";
import CobrosF from "./views/cobros_factura.vue";
import R_Humanos from "./views/R_Humanos_Trabajadores.vue";
import R_Humanos_Nuevo from "./views/r_humanos_nuevo_trab.vue";
import Mant_act from "./views/mantenimiento_info_act.vue";
import Mant_insu from "./views/mantenimiento_insumo.vue";
import Mant_orden from "./views/mantenimiento_orden.vue";
import Mant_asig_act from "./views/mantenimiento_asig.vue";
import Gerencia from "./views/gerencia.vue";
import Control from "./views/seguridad_control.vue";
import Asignacion from "./views/seguridad_asig.vue";
import N_Orden from "./views/administracion_neva_orden.vue";
import Orden from "./views/administracion_ordenes.vue";








const routes = [
    
    { path: "/", component: Start },
    { path: "/pagos", component: Pagos },
    { path: "/cobros", component: Cobros },
    { path: "/cobros_factura", component: CobrosF },
    { path: "/rh", component: R_Humanos},
    { path: "/act_info", component: Mant_act},
    { path: "/gerencia", component: Gerencia},
    { path: "/insumos", component: Mant_insu},
    { path: "/mant_orden", component: Mant_orden},
    { path: "/mant_asig_act", component: Mant_asig_act},
    { path: "/control", component: Control},
    { path: "/asig", component: Asignacion},
    { path: "/nuevo", component: R_Humanos_Nuevo},
    { path: "/new_orden", component: N_Orden},
    { path: "/orden", component: Orden},
    

    

];


const router = createRouter({
    routes,
    history: createWebHashHistory(),

});

export default router;