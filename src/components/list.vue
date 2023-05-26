<!-- This example requires Tailwind CSS v2.0+ -->
<template>
   <div class="h-full mt-2 w-full">
    
    <h1 class="text-center text-xl text-white">{{titulo}}</h1>

   
   
    <ul
        role="list"
        class="ml-2 mr-2 mt-8 sm:ml-0 sm:mr-0 border-t border-gray-200 divide-y divide-gray-200 sm:mt-8 sm:border-t-0"
      >
        
        <li v-for="item in array" :key="item"
          
          class="bg-slate-100 dark:bg-slate-700 shadow-2xl rounded-lg px-2 my-4 h-auto"
        >
        <div v-show="(titulo =='Trabajadores' )|| (titulo == 'Propietarios')" class="grid grid-cols-2 ">
          <div class="flex gap-6">
            <p class="mt-2">{{item.persona.cedula}}</p>
            <p class="mt-2">{{item.persona.nombre}}</p>
            <p class="mt-2">{{item.persona.apellido}}</p>
          
          

        </div>
          
          <div class=" m-1">
            <div class="w-full grid place-content-end">
              <button v-show="titulo =='Trabajadores'"  @click="depStore.get_by_trabajador(item.id)" class="w-auto  grid justify-center py-1 px-2 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>{{message}}</span>
       
              
              </button>
               <button v-show="titulo =='Propietarios'"  @click="depStore.get_by_propietario(item.id)" class="w-auto  grid justify-center py-1 px-2 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>{{message}}</span>
       
              
              </button>
            </div>
          </div>
        </div>


        
         
        </li>
       
        
      </ul>
      
     
    </div>
       
</template>

<script>
import Home from '../components/home.vue' 
import Administracion from '../components/administracion.vue' 
import Gerencia from '../components/administracion.vue' 
import Tesoreria from '../components/tesoreria.vue' 
import Mantenimiento from '../components/mantenimiento.vue' 
import Seguridad from '../components/Seguridad.vue' 
import Boton from '../components/boton.vue' 
import { useDepStore } from "../stores/user";

export default {
    components: {
    Home,
    Administracion,
    Gerencia,
    Tesoreria,
    Mantenimiento,
    Seguridad,
    Boton
  },
  props: ['titulo','message','array'],
 
  setup() {
    const depStore = useDepStore();
    
    return {
      depStore
    }
  },
}
</script>