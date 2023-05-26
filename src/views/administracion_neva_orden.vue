<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Administracion"/>
  <div class="h-full flex">
    
    

    <div class="h-full w-full  h-screen flex-1 flex flex-col  py-8 px-16">
      
   <div class="m-2 h-screen">
     
     <h1 class="text-center text-xl text-white">Nueva Orden de Pago</h1>
     

      
        <div class=" grid grid-cols-3 gap-4 mt-4">
                <div  class="mt-12">
                      
                      <div class="flex gap-8 justify-end">
                        <label for="name" class="block text-sm font-medium text-white">Insumo</label>
                        <div v-show="!depStore.tipo3 && !depStore.tipo2" class="mt-1">
                          <input
                            @click="depStore.get_insumos_soli()"
                            v-model="depStore.tipo1"
                            id="insumo"
                            name="name"
                            type="checkbox"
                            autocomplete="name"
                            required
                            class="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      </div>
                       <div  class=" mt-12">
                      
                      <div class="flex gap-8 justify-center">
                        <label for="name" class="block text-sm font-medium text-white">Servicio</label>
                        <div v-show="!depStore.tipo1 && !depStore.tipo3" class="mt-1">
                          <input

                            v-model="depStore.tipo2"
                            id="servicio"
                            name="name"
                            type="checkbox"
                            autocomplete="name"
                            required
                            class="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      </div>
                      <div class=" mt-12">
                <div  class="flex gap-8 justify-start">
                        <label for="name" class="block text-sm font-medium text-white">Trabajador</label>
                        <div v-show="!depStore.tipo1 && !depStore.tipo2" class="mt-1">
                          <input
                            @click="depStore.get_trabajadores()"
                            v-model="depStore.tipo3"
                            id="trabajador"
                            name="name"
                            type="checkbox"
                            autocomplete="name"
                            required
                            class="appearance-none block  px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
      

                      
                      </div>
                      </div>
      
              <div class="grid grid-cols-2 gap-12 mt-8">
                <div class="grid grid-rows-2 gap-12 ml-8">
                      <div >
                        <label for="name" class="block text-sm font-medium text-white">Banco</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.tipo3"
                            v-model="depStore.orden.banco"
                            id="banco"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <p v-show="depStore.tipo3">{{depStore.orden.banco}}</p>
                        </div>
                      </div>
                      <div >
                        <label for="name" class="block text-sm font-medium text-white">Destino</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.tipo3"
                            v-model="depStore.orden.destino"
                            id="destino"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <p v-show="depStore.tipo3">{{depStore.orden.destino}}</p>
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Titular</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.tipo3"
                            v-model="depStore.orden.titular"
                            id="titular"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <p v-show="depStore.tipo3">{{depStore.orden.titular}}</p>
                        </div>
                      </div>
                      
                     
                     

                      </div>
                      <div class="grid grid-rows-2 gap-12 justify-center">

      <div>
                        <label for="name" class="block text-sm font-medium text-white">Monto</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.orden.monto"
                            id="monto"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label v-show="depStore.tipo1 && (depStore.orden.monto != '')" for="name" class="block text-sm font-medium text-white">Seleccione Insumo</label>
                        <label v-show="depStore.tipo2" for="name" class="block text-sm font-medium text-white">Seleccione Servicio</label>
                        <label v-show="depStore.tipo3 && (depStore.orden.monto != '')" for="name" class="block text-sm font-medium text-white">Seleccione Trabajador</label>
                        <p v-show="depStore.orden.monto == ''" class="text-white"> Debe ingresar un monto</p>
                        <div class="mt-1">

                          <select v-show="depStore.tipo1 && (depStore.orden.monto != '')" v-model="depStore.insumo" @click="depStore.completar()">
                            <option v-for="insumo in depStore.insumos" :value=insumo  >{{insumo.nombre}}</option>
                            
                          </select>

                          <select v-show="depStore.tipo2 && (depStore.orden.monto != '')" v-model="depStore.servicio" @click="depStore.completar()">
                            <option  value="Agua"  >Agua</option>
                            <option  value="Electricidad"  >Electricidad</option>
                            <option  value="Gas" >Gas</option>
                            <option  value="Aseo" >Aseo</option>
                          </select>

                           <select v-show="depStore.tipo3 && (depStore.orden.monto != '')" v-model="depStore.trabajador" @click="depStore.completar()">
                            <option v-for="trabajador in depStore.trabajadores" :value=trabajador  >{{trabajador.persona.nombre}}</option>
                            
                          </select>
                        </div>
                      </div>






                      
                      </div>
                      </div>

                            <div v-show="depStore.tipo1" class="grid place-content-center mt-8">
                        <label for="name" class="block text-sm font-medium text-white">Cantidad</label>
                        <div class="mt-1 w-full">
                          <input id="name"
                            v-model="depStore.orden.cantidad"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            
                         />
                        </div>
                      </div>

                      <div class="mt-8 grid grid-cols-2">
                        <div class="grid justify-center">
                          <button  @click="depStore.new_orden()" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Continuar</span>
               </button>
                        </div>
                        <div class="grid justify-center">
                         <router-link :to="'/orden' " class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
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