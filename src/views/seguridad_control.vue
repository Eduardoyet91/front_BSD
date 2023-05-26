<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Seguridad"/>
  <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Fichas" message="ver" :array="depStore.fichas"/>
    
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full grid grid-rows-1">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos de la Ficha</h1>
          <div class="bg-white m-2 h-60 rounded-lg"> 

<div class="bg-white m-2 h-56 rounded-lg">
  
 <form >

                      <div class="grid grid-rows-2 gap-4 m-2 mt-4 ">
                        <div class="grid grid-cols-2 m-4 w-full">
                          <div>
                            <div class="grid justify-center">
                          <h1>Ficha</h1>
                        </div>
                            <div class="flex gap-2">
                        <label for="name" class="block text-sm font-medium ">Identificador:</label>
                        <div class="">
                          <p>{{depStore.ficha.id}}</p>
                         
                        </div>
                      </div>

                      <div class="flex gap-2">
                        <label for="name" class="block text-sm font-medium">Turno</label>
                        <div class="">
                          <p class="w-full">{{depStore.ficha.turno}}</p>
                          
                        </div>
                      </div>
                      <div class="flex gap-2">
                        <label for="name" class="block text-sm font-medium">Fecha</label>
                        <div class="">
                          <p class="w-full">{{depStore.ficha.fecha}}</p>
                          
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
                        <div class="w-full ml-8  grid grid-cols-2">
                         <div>
                        <label for="name" class="block text-sm font-medium ">H. Entrada</label>
                        <div class="mt-1">
                          <p>{{depStore.ficha.entrada}}</p>
                         
                        </div>
                      </div>

                      <div>
                        <label for="name" class="block text-sm font-medium ">H. Salida</label>
                        <div class="mt-1">
                          <p>{{depStore.ficha.salida}}</p>
                         
                        </div>
                      </div>


                      </div>
                         
                      
                        </div>

              
                      
</form>











</div>
          </div>
          <div class="grid justify-center m-2">
          </div>
         
        </div>
          
           <form >
              <div class="grid grid-cols-2 gap-12 mt-12">
                <div class="grid grid-rows-1 mt-12">
                      
                      <div>
                        <label for="name" class="block text-sm font-medium text-white">H. Entrada</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.ficha.entrada"
                            id="name"
                            name="name"
                            type="time"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      </div>
                      <div class="grid grid-rows-1 mt-12">
<div>
                        <label for="name" class="block text-sm font-medium text-white">H. Salida</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.ficha.salida"
                            id="name"
                            name="name"
                            type="time"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
      

                      
                      </div>
                      </div>
</form>
     
          
          <div class="grid justify-center mt-24"><button v-show="depStore.content" @click="depStore.control_ficha(depStore.ficha.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Guardar</span>
               </button></div>
          
        
        
      </div>
    
     
    </div>
    </div>
   
       
</template>

<script>
import List from '../components/list_ficha.vue' 
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