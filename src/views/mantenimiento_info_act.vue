<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Mantenimiento"/>
   <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List v-show="!depStore.act_t" titulo="Actividades" message="ver" :array="depStore.actividades"/>

    <List v-show="depStore.act_t"  titulo="Actividades del Trabajador" message="ver" :array="depStore.actividades"/>

    <div class="grid justify-center">

      <router-link  :to="'/mant_asig_act'" @click="depStore.get_trabajadores(),depStore.get_actividades(),depStore.act_t=false" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span v-show="!depStore.act_t">Agregar Actividad</span>
               <span v-show="depStore.act_t">Regresar</span>
       
              
              </router-link>




      
     
    </div>
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Informacion</h1>
          <div class="bg-white h-96 rounded-lg mt-2 "> 

                     <form >

                      <div class="grid grid-rows-2 gap-4 m-2 mt-4 ">
                        <div class="grid grid-cols-2 m-4 w-full">
                          <div>
                            <div class="grid justify-center">
                          <h1>Actividad</h1>
                        </div>
                            <div>
                        <label for="name" class="block text-sm font-medium ">Identificador</label>
                        <div class="mt-1">
                          <p>{{depStore.actividad.id}}</p>
                         
                        </div>
                      </div>

                      <div>
                        <label for="name" class="block text-sm font-medium">nombre de la actividad</label>
                        <div class="mt-1">
                          <p class="w-full">{{depStore.actividad.nombre_act}}</p>
                          
                        </div>
                      </div>
                      <div>
                        <label for="name" class="block text-sm font-medium">Fecha</label>
                        <div class="mt-1">
                          <p class="w-full">{{depStore.actividad.fecha}}</p>
                          
                        </div>
                      </div>
                          </div>

                          <div>
                        <div class="grid justify-center">
                          <h1>Trabajador asignado</h1>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-4 m-4 ml-8 mt-8 ">
                
                    <div>
                        <label for="name" class="block text-sm font-medium ">Cedula</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.cedula}}</p>
                          
                        </div>
                      </div>
                      
                                       
                       <div>
                        <label for="name" class="block text-sm font-medium ">Nombre</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.nombre}}</p>
                          
                        </div>
                      </div>

                      <div>
                        <label for="name" class="block text-sm font-medium ">Apellido</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.persona.apellido}}</p>
                        </div>
                      </div>
                      
                      
                      


                      
                      </div>




                      </div>
                           

                       

                      
                        </div>
                        <div class="w-full h-full">
                        <div class="mt-1">
                        <label for="name" class="block text-sm text-center font-medium ">Descripcion</label>
                        <div>
                          <p class="mt-2">{{depStore.actividad.descripcion}}</p>
                        </div>
                      </div>
                      </div>
                         
                      
                        </div>

              
                      
</form>



          </div>
          <div class="grid justify-items-center m-2 ">
            <button v-show="depStore.content" @click="depStore.delete_actividad(depStore.actividad.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Eliminar</span>
               </button>
          </div>
         
        </div>
          
      </div>
    
     
    </div>
    </div>
       
</template>

<script>
import List from '../components/list_act.vue' 
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