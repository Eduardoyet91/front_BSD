<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <div class="place-content-center w-full h-full">
   <h1 class="text-center text-3xl text-white">Bienvenido</h1>
   <h2 class="text-center text-xl text-white">Condominio Cabañas Park</h2>
  
   <div class="grid grid-cols-3 gap-6 m-3 ">
     <div class="grid grid-rows-2 h-full gap-40 mt-24">
      <div class="h-min content-center">

        <button class="text-center" @click="depStore.manten=true,depStore.home=false,depStore.admin=false,depStore.gere=false,depStore.teso=false,depStore.segu=false">


          <div class="grid justify-center text-white">
            
      <img class="h-26 w-26 object-cover text-white" 
      src="../../src/assets/mantenimiento.svg" alt="Fondo" />

          </div>
      

        <h1 class="mt-1 text-white">Mantenimiento</h1></button>


      </div>
     <div class="h-min content-center"><router-link :to="'/gerencia' " @click="depStore.get_propietarios(),depStore.gere=true,depStore.home=false,depStore.manten=false,depStore.admin=false,depStore.teso=false,depStore.segu=false" class="text-white hover:text-slate-800 hover:bg-white">

<img class="h-26 w-26 " 
      src="../../src/assets/gerencia.svg" alt="Fondo" />



      <h1 class="mt-1">Gerencia</h1></router-link></div>
   </div>
     
     <div class="mt-48 h-min"><button class="text-center" @click="depStore.admin=true,depStore.home=false,depStore.manten=false,depStore.gere=false,depStore.teso=false,depStore.segu=false">
<div class="grid justify-center text-white">
      <img class="h-26 w-26 object-cover" 
      src="../../src/assets/administracion.svg" alt="Fondo" />

</div>



      <h1 class="mt-1 text-white">Administracion</h1></button></div>


     <div class="grid grid-rows-2 h-full gap-40 mt-24">
      <div class="h-min"><button class="text-center" @click="depStore.teso=true,depStore.home=false,depStore.manten=false,depStore.gere=false,depStore.admin=false,depStore.segu=false">
<div class="grid justify-center text-white">
<img class="h-26 w-26 object-cover" 
      src="../../src/assets/tesoreria.svg" alt="Fondo" />
</div>

        <h1 class="mt-1 text-white">Tesoreria</h1></button></div>
     <div class="h-min content-center"><button class="text-center" @click="depStore.segu=true,depStore.home=false,depStore.manten=false,depStore.gere=false,depStore.teso=false,depStore.admin=false">
<div class="grid justify-center text-white">
<img class="h-26 w-26 object-cover" 
      src="../../src/assets/seguridad.svg" alt="Fondo" />
    </div>
      <h1 class="mt-1 text-white">Seguridad</h1></button></div>
   </div>

   

   </div>
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