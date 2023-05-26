<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Seguridad"/>
  <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Trabajadores" message="ver" :array="depStore.trabajadores"/>
    
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full grid grid-rows-1">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos del Trabajador</h1>
          <div class="bg-white m-2 h-48 rounded-lg"> 

<div class="bg-white h-56 rounded-lg"> <form >
              <div class="grid grid-cols-3 gap-4 m-4 justify-center   ">
                <div class="grid grid-rows-3 gap-2 mt-6 ml-2">
     <div>
                        <label for="name" class="block text-sm font-medium ">Cedula</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.persona.cedula}}</p>
                        </div>
                      </div>
                      
                       <div>
                        <label for="name" class="block text-sm font-medium ">Rif</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.persona.rif}}</p>
                        </div>
                      </div>
                       
                      
                      </div>
                      <div class="grid grid-rows-3 gap-2 mt-6">
     
                     
                      <div>
                        <label for="name" class="block text-sm font-medium ">Apellido</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.persona.apellido}}</p>
                        </div>
                      </div>
                       <div>
                        <label for="name" class="block text-sm font-medium ">Nombre</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.persona.nombre}}</p>
                        </div>
                      </div>
                     <div>
                        <label for="name" class="block text-sm font-medium ">Telefono</label>
                        <div class="mt-1">
                         <p class="h-8">{{depStore.persona.telefono}}</p>
                        </div>
                      </div>
                      
                      </div>


                      <div class="grid grid-rows-2 gap-2 mt-6">

                     

      <div>
                        <label for="name" class="block text-sm font-medium ">Departamento</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.trabajador.departamento}}</p>
                        </div>
                      </div>

                       <div>
                        <label for="name" class="block text-sm font-medium">Banco</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.trabajador.nom_banc}}</p>
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium ">Numero de Cuenta</label>
                        <div class="mt-1">
                          <p class="h-8">{{depStore.trabajador.num_cuent}}</p>
                        </div>
                      </div>
                      </div>
                      </div>
</form></div>
          </div>
          
         
        </div>
          
           <form v-show="depStore.content" >
            <div class="grid justify-center mt-12">
              <div>
                        <h1 class="block text-sm font-medium text-white">Asignar Turno</h1>
                       
                      </div>
              
            </div>
              <div class="grid grid-cols-2 gap-12">
                <div class=" mt-12">
                      
                      <div class="flex gap-8 justify-center">
                        <label for="name" class="block text-sm font-medium text-white">Mañana</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.turno1"
                            v-show="!depStore.turno2"
                            id="name"
                            name="name"
                            type="checkbox"
                            value="Mañana"
                            autocomplete="name"
                            required
                            class="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      </div>
                      <div class=" mt-12">
                <div class="flex gap-8 justify-center">
                        <label for="name" class="block text-sm font-medium text-white">Tarde</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.turno2"
                            v-show="!depStore.turno1"
                            id="name"
                            name="name"
                            type="checkbox"
                            value="Tarde"
                            autocomplete="name"
                            required
                            class="appearance-none block  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
      

                      
                      </div>
                      </div>

                      <div class="mt-4">
                        <label for="name" class="block text-sm font-medium text-white">Fecha</label>
                        <div class="mt-1">

                          <input
                            v-model="depStore.fecha"
                            id="name"
                            name="name"
                            type="date"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
</form>
     
          
          <div class="grid justify-center mt-24"><button v-show="depStore.content" @click="depStore.asig_ficha(depStore.trabajador.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Asignar</span>
               </button></div>
          
        
        
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