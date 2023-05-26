<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Cobros"/>
   <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Propietarios" message="ver" :array="depStore.propietarios"/>
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full grid grid-rows-2">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos del Propietario</h1>
          <div class="bg-white m-2 h-48 rounded-lg"> 
            <form >
              <div class="grid grid-cols-3 gap-4 m-2 justify-center ">
                <div class="grid grid-rows-3 gap-1">
     <div>
                        <label for="name" class="block text-sm font-medium ">Cedula</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.cedula}}</p>
                        </div>
                      </div>
                      
                       <div>
                        <label for="name" class="block text-sm font-medium ">Rif</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.rif}}</p>
                        </div>
                      </div>
                      
                      </div>
                      <div class="grid grid-rows-3 gap-1">
     
                     
                      <div>
                        <label for="name" class="block text-sm font-medium ">Apellido</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.apellido}}</p>
                        </div>
                      </div>
                       <div>
                        <label for="name" class="block text-sm font-medium ">Nombre</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.nombre}}</p>
                        </div>
                      </div>
                      
                      </div>


                      <div class="grid grid-rows-2 gap-1 mt-1">

                      <div>
                        <label for="name" class="block text-sm font-medium ">Telefono</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.telefono}}</p>
                        </div>
                      </div>

      <div>
                        <label for="name" class="block text-sm font-medium ">Edificio</label>
                        <div class="mt-1">
                          <p>{{depStore.propietario.edificio}}</p>
                        </div>
                      </div>

                       <div>
                        <label for="name" class="block text-sm font-medium">Apartamento</label>
                        <div class="mt-1">
                          <p>{{depStore.propietario.apartamento}}</p>
                        </div>
                      </div>
                      </div>
                      </div>
</form>






            <button  v-show="depStore.content" @click="depStore.filtrado_fact(depStore.propietario.id) "  class="w-auto  grid justify-center py-1 px-1 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Mostrar facturas</span>
       
              
              </button> </div>
          <div v-show="!depStore.fact_crea && depStore.content" class="flex justify-center m-2 gap-4 ">

            <div class="flex gap-8 justify-center">
                        
                        <label for="name" class="block  text-lg mt-2 font-medium text-white">Monto:</label>
                        <div class="mt-1">

                          <input
                            v-model="depStore.monto"
                            id="name"
                            name="name"
                            type="number"
                            autocomplete="name"
                            required
                            class="appearance-none block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

            <button v-show="!depStore.fact_crea && depStore.content" @click="depStore.new_factura(depStore.propietario.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Facturar</span>
               </button>
          </div>
         
        </div>
          <div class=" h-48 grid row-span-1">
          <div class="grid justify-items-center">
          <div v-show="depStore.fact_crea"  class="bg-white w-4/5 h-48 rounded-lg"> 

<form >
              <div class="grid grid-cols-3 gap-4 m-2 justify-center ">
                <div class="grid grid-rows-3 gap-1">
     <div>
                        <label for="name" class="block text-sm font-medium ">Cedula</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.cedula}}</p>
                        </div>
                      </div>
                      
                       <div>
                        <label for="name" class="block text-sm font-medium ">Rif</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.rif}}</p>
                        </div>
                      </div>

                      <div>
                        <label for="name" class="block text-sm font-medium ">Monto</label>
                        <div class="mt-1">
                          <p>{{depStore.factura.monto}}</p>
                        </div>
                      </div>
                      
                      </div>
                      <div class="grid grid-rows-3 gap-1">
     
                     
                      <div>
                        <label for="name" class="block text-sm font-medium ">Apellido</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.apellido}}</p>
                        </div>
                      </div>
                       <div>
                        <label for="name" class="block text-sm font-medium ">Nombre</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.nombre}}</p>
                        </div>
                      </div>

                      <div>
                        <label for="name" class="block text-sm font-medium ">Fecha</label>
                        <div class="mt-1">
                          <p>{{depStore.factura.fecha}}</p>
                        </div>
                      </div>
                      
                      </div>


                      <div class="grid grid-rows-2 gap-1 mt-1">

                      <div>
                        <label for="name" class="block text-sm font-medium ">Telefono</label>
                        <div class="mt-1">
                          <p>{{depStore.persona.telefono}}</p>
                        </div>
                      </div>

      <div>
                        <label for="name" class="block text-sm font-medium ">Edificio</label>
                        <div class="mt-1">
                          <p>{{depStore.propietario.edificio}}</p>
                        </div>
                      </div>

                       <div>
                        <label for="name" class="block text-sm font-medium">Apartamento</label>
                        <div class="mt-1">
                          <p>{{depStore.propietario.apartamento}}</p>
                        </div>
                      </div>
                      </div>
                      </div>
</form>







          </div>
          </div>
          <div v-show="depStore.fact_crea"  class="grid justify-center mt-2">
             
              
              <h2 class="text-white mt-4">Factura {{depStore.factura.status}}</h2>
<div class="grid justify-center mt-2">
  
  <button v-show="depStore.factura.status=='Sin Verificar'" @click="depStore.edit_factura(depStore.factura.id)" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Verificar y Archivar</span>
               </button>
</div>
              
       
              
              
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