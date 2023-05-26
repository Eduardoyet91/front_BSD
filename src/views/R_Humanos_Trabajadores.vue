<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="R.Humanos"/>
   <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Trabajadores" message="ver" :array="depStore.trabajadores"/>
<div class="grid justify-center">
    <router-link v-show="!depStore.change" :to="'/nuevo'" @click="" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Agregar</span>
       
              
              </router-link>
    </div>  
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos del Trabajador</h1>
          <div class="bg-white m-2 h-96 rounded-lg mt-8"> 

            <form >

              <div class="grid grid-cols-3 gap-4 m-4 ml-8 mt-8">
                <div class="grid grid-rows-3 gap-4 ">
                    <div>
                        <label for="name" class="block text-sm font-medium ">Cedula</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.cedula}}</p>
                         
                        </div>
                      </div>
                      
                       <div>
                        <label for="name" class="block text-sm font-medium ">Rif</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.rif}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.persona.rif"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      </div>
                      <div class="grid grid-rows-3 gap-4">
     
                     
                      <div>
                        <label for="name" class="block text-sm font-medium ">Apellido</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.apellido}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.persona.apellido"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                       <div>
                        <label for="name" class="block text-sm font-medium ">Nombre</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.nombre}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.persona.nombre"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      
                      </div>


                      <div class="grid grid-rows-2 gap-4 mt-1">

                      <div>
                        <label for="name" class="block text-sm font-medium ">Telefono</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.telefono}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.persona.telefono"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

      
                      </div>
                      </div>
                      <div>
                        <div class="grid justify-center">
                          <h1>Datos Bancarios</h1>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-4 m-4 mt-8  justify-center ">
                          <div>
                        <label for="name" class="block text-sm font-medium ">Departamento</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.trabajador.departamento}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.trabajador.departamento"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                       <div>
                        <label for="name" class="block text-sm font-medium">Banco</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.trabajador.nom_banc}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.trabajador.nom_banc"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium ">Numero de cuenta</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.trabajador.num_cuen}}</p>
                          <input v-show="depStore.change"
                            v-model="depStore.trabajador.num_cuen"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-1 py-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                        </div>
                      </div>
</form></div>
          <div class="grid justify-items-center m-2 grid-cols-2">
           
            

               <button v-show="!depStore.change && depStore.content" @click="depStore.change = true" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Modificar</span>
               </button>

                <button v-show="depStore.change" @click="depStore.edit_persona(1)" class="w-20 grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Guardar</span>
               </button>

               <button v-show="!depStore.change && depStore.content" @click="depStore.delete_trabajador(depStore.trabajador.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Eliminar</span>
               </button>

               <button v-show="depStore.change" @click="depStore.change = false" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Cancelar</span>
               </button>
              
              
       
              
              
            
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