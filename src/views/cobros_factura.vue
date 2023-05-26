<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Cobros"/>
   <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Facturas" message="ver" :array="depStore.facturas"/>
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos de Factura</h1>
          <div class="bg-white m-2 h-96 rounded-lg mt-8"><form >
              <div class="grid grid-cols-3 gap-4 m-2 mt-8 justify-center ">
                <div class="grid grid-rows-3 ml-2 gap-1">
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


        <div   class="grid grid-rows-2 justify-center">
             
              
              <h2 class=" mt-4">Status</h2>
              <p>{{depStore.factura.status}}</p>
            
          </div>

</form>








</div>
          <div class="grid justify-items-center m-2 grid-cols-2">
            <router-link :to="'/cobros' " @click="depStore.get_propietarios()"  class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Regresar</span>
       
              
              </router-link> 

              <div v-show="depStore.factura.status=='Sin Verificar'" class="grid justify-center">
  
  <button  @click="depStore.edit_factura(depStore.factura.id)" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Verificar y Archivar</span>
               </button>
</div>

<div v-show="depStore.factura.status=='Archivada'" class="grid justify-center">
  
  <button v-show="depStore.factura.status=='Sin Verificar'" @click="depStore.new_factura(depStore.propietario.id)" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
import List from '../components/list_fact.vue' 
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