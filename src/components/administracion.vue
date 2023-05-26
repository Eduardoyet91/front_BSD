<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <div class="place-content-center w-full h-full">
   <h1 class="text-center text-3xl text-white">Administracion</h1>
   <h2 class="text-center text-xl text-white">Condominio Cabañas Park</h2>
  
   <div class="m-3">
     <div class="place-content-center grid grid-rows-2 h-full gap-40 mt-24">
      <div class="h-min content-center"> <router-link :to="'/rh' " @click="depStore.get_trabajadores()" class="text-white hover:text-slate-800 hover:bg-white">


        <div class="grid justify-center text-white">
<img class="h-26 w-26 object-cover" 
      src="../../src/assets/rh.svg" alt="Fondo" />
</div>

        <h1 class="mt-1 text-white">Recursos Humanos</h1>





      </router-link> </div>
      
     <div class="h-min content-center"><router-link :to="'/orden' " @click="depStore.get_ordenes_admin()" class="text-center">

      <div class="grid justify-center text-white">
<img class="h-26 w-26 object-cover" 
      src="../../src/assets/notes.svg" alt="Fondo" />
</div>

        <h1 class="mt-1 text-white">Ordenes de Pago</h1>



     </router-link></div>
   </div>


     
   </div>
   <button @click="depStore.home=true,depStore.teso=false,depStore.manten=false,depStore.gere=false,depStore.admin=false,depStore.segu=false"><img class="h-26 w-26 object-cover" 
      src="../../src/assets/volver.svg" alt="Fondo" /></button>
 </div>
</template>

<script>

import { useDepStore } from "../stores/user";

export default {
  
  setup() {

    const depStore = useDepStore()
    


    return {
      depStore
      
    }
  },
}
</script>