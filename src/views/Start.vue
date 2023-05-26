<!-- This example requires Tailwind CSS v2.0+ -->
<template>
   <div class="min-h-full flex">
    
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" 
      src="../../src/assets/photo1683584061.jpeg" alt="Fondo" />
    </div>

    <div class="h-screen w-1/2 flex-1 flex flex-col justify-center py-24 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">

        <Home v-show="(((depStore.home == true && depStore.admin == false) && (depStore.segu == false && depStore.teso == false)) && (depStore.gere == false && depStore.manten == false))"/>

        <Administracion v-show="(((depStore.home == false && depStore.admin == true) && (depStore.segu == false && depStore.teso == false)) && (depStore.gere == false && depStore.manten == false))"/>

        <Mantenimiento v-show="(((depStore.home == false && depStore.admin == false) && (depStore.segu == false && depStore.teso == false)) && (depStore.gere == false && depStore.manten == true))"/>

        <Tesoreria v-show="(((depStore.home == false && depStore.admin == false) && (depStore.segu == false && depStore.teso == true)) && (depStore.gere == false && depStore.manten == false))"/>

        <Seguridad v-show="(((depStore.home == false && depStore.admin == false) && (depStore.segu == true && depStore.teso == false)) && (depStore.gere == false && depStore.manten == false))"/>
      
      
      
     
    </div>
    </div>
       
</template>

<script>
import Home from '../components/home.vue' 
import Administracion from '../components/administracion.vue' 
import Gerencia from '../components/administracion.vue' 
import Tesoreria from '../components/tesoreria.vue' 
import Mantenimiento from '../components/mantenimiento.vue' 
import Seguridad from '../components/Seguridad.vue' 
import { useDepStore } from "../stores/user";

export default {
    components: {
    Home,
    Administracion,
    Gerencia,
    Tesoreria,
    Mantenimiento,
    Seguridad
  },
 
  setup() {
    const depStore = useDepStore();
    
    return {
      depStore
    }
  },
}
</script>