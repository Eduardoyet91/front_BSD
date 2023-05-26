<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="R. Humano"/>
  <div class="h-full flex">
    
    

    <div class="h-full w-full  h-screen flex-1 flex flex-col  py-8 px-16">
      
   <div class="m-2 h-screen">
     
     <h1 class="text-center text-xl text-white">Datos del Trabajador</h1>
     <form @submit.prevent="depStore.new_trabajador()" >
              <div class="grid grid-cols-2 gap-12 mt-4">
                <div class="grid grid-rows-3 gap-6 ml-8">
     
                      <div >
                        <label for="name" class="block text-sm font-medium text-white">Nombre</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.person.nombre"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Apellido</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.person.apellido"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Cedula</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.person.cedula"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Rif</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.person.rif"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Telefono</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.person.telefono"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      </div>
                      <div class="grid grid-rows-2 gap-12 justify-center">

      <div>
                        <label for="name" class="block text-sm font-medium text-white">Departamento</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.trab.departamento"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Banco</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.trab.banco"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>


                       <div>
                        <label for="name" class="block text-sm font-medium text-white">N° cuenta</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.trab.cuenta"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      </div>
                      </div>
                    
                      
</form>
     
       <div class="mt-8 grid grid-cols-2">
                        <div class="grid justify-center">
                          
                          <button @click="depStore.new_persona(1)" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Continuar</span>
       
              
              </button>
                        </div>
                        <div class="grid justify-center">
                             <router-link :to="'/rh'" @click="depStore.new_persona(1)" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Cancelar</span>
       
              
              </router-link>



                          
                        </div>
                      

                      </div>    
     
   </div>

   
    
     
    </div>

 
    </div>
   
       
</template>

<script>
import List from '../components/list.vue' 
import Nav from '../components/navbar.vue' 
import Boton from '../components/boton.vue' 

import { useDepStore } from "../stores/user";

export default {
    components: {
    List,
    Nav,
    Boton


  },
 
  setup() {
    const depStore = useDepStore();
    
    return {
      depStore
    }
  },
}
</script>