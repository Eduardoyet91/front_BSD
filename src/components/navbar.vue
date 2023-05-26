<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="h-12 bg-gradient-to-r from-black to-indigo-900 grid grid-cols-7">
    <div class="flex justify-start ml-8 col-span-2">
      
      <router-link :to="'/' " @click="depStore.manten=false,depStore.home=true,depStore.admin=false,depStore.gere=false,depStore.teso=false,depStore.segu=false" class="text-white mt-2 text-2xl text-center">{{title}}</router-link>
    </div>
    <div class="flex justify-center col-span-1">
      <router-link :to="'/' " @click="depStore.admin=true,depStore.home=false,depStore.manten=false,depStore.gere=false,depStore.teso=false,depStore.segu=false" class="text-white mt-2 text-lg text-center">Administracion</router-link>
    </div>
    <div class="flex justify-center col-span-1">
      <router-link :to="'/' " @click="depStore.teso=true,depStore.home=false,depStore.manten=false,depStore.gere=false,depStore.admin=false,depStore.segu=false" class="text-white mt-2 text-lg text-center">Tesoreria</router-link>
    </div>
    <div class="flex justify-center col-span-1">
      <router-link :to="'/gerencia' " @click="depStore.get_propietarios(),depStore.gere=true,depStore.home=false,depStore.manten=false,depStore.admin=false,depStore.teso=false,depStore.segu=false" class="text-white text-lg mt-2 text-center">Gerencia</router-link>
    </div>
    <div class="flex justify-center col-span-1">
      <router-link :to="'/'" @click="depStore.manten=true,depStore.home=false,depStore.admin=false,depStore.gere=false,depStore.teso=false,depStore.segu=false" class="text-white mt-2 text-lg text-center">Mantenimiento</router-link>
    </div>
    <div class="flex justify-center col-span-1">
      <router-link :to="'/'" @click="depStore.segu=true,depStore.home=false,depStore.manten=false,depStore.gere=false,depStore.teso=false,depStore.admin=false" class="text-white mt-2 text-lg text-center">Seguridad</router-link>
    </div>
    
  </nav>
       
</template>

<script>
import { useDepStore } from "../stores/user";

export default {
   
    props: ['title'],
 
  setup() {
    const depStore = useDepStore();
    
    return {
      depStore,
    }
  },
}
</script>