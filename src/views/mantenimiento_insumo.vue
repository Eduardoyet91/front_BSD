<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Mantenimiento"/>
  <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Insumos" message="ver" :array="depStore.insumos"/>
    
    <div class="grid justify-center">

      <router-link :to="'/mant_orden'" @click="depStore.get_ordenes_insumo()" class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Verificar ordenes</span>
       
              
              </router-link>


      
     
    </div>
    </div>


 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full grid grid-rows-2">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos del Insumo</h1>
          <div class="bg-white m-2 h-48 rounded-lg"> 




              <form >
              <div class="grid grid-cols-3 gap-4 m-2 mt-8 justify-center ">
                
     <div>
                        <label for="name" class="block text-sm font-medium ">Codigo</label>
                        <div class="mt-1">
                          <p>{{depStore.insumo.id}}</p>
                        </div>
                      </div>
                      
                       

                      
                      
                      
                     
     
                     
                      <div>
                        <label for="name" class="block text-sm font-medium ">Nombre</label>
                        <div class="mt-1">
                          <p>{{depStore.insumo.nombre}}</p>
                        </div>
                      </div>
                       
                      
                     


                      

                      <div>
                        <label for="name" class="block text-sm font-medium ">Status</label>
                        <div class="mt-1">
                          <p>{{depStore.insumo.status}}</p>
                        </div>
                      </div>

    

                       
                      
                      </div>


        <div   class="grid grid-rows-2 justify-center">
             
              
              <h2 class=" mt-4">Cantida</h2>
              <p>{{depStore.insumo.cantidad}}</p>
            
          </div>

</form>






















          </div>
          <div class="grid justify-center m-2">
          </div>
         
        </div>
          <div class="h-60 grid row-span-1">
          
          
              <div class="grid grid-cols-1 gap-12 mt-4">
                <div v-show="depStore.insumo.status == 'Stock'" class="grid grid-rows-1 gap-20">
                  
             <div>
                        <label for="name" class="block text-sm font-medium text-white">Cantidad</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.cantidad"
                            id="cantidad"
                            name="cantidad"
                            type="number"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                     
                    

  <div class="grid justify-center mt-4"> <button   @click="depStore.retirar(depStore.cantidad,depStore.insumo.id,1) "  class="w-auto  grid justify-center py-1 px-1 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Retirar</span>
       
              
              </button> </div>
                      </div>
                      <div v-show="depStore.insumo.status == 'Agotado'" class="grid grid-rows-3 gap-16">
                        

      <div>
                        <label for="name" class="block text-sm font-medium text-white">Nombre</label>
                        <div class="mt-1">
                          <input
                            v-model="depStore.insumo.nombre"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                       <div>
                        <label for="name" class="block text-sm font-medium text-white">Cantidad</label>
                        <div class="mt-1">
                           <input
                            v-model="depStore.cantidad"
                            id="cantidad"
                            name="cantidad"
                            type="number"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />

                        </div>
                      </div>
                     
              
               <div class="grid justify-center"><button   @click="depStore.retirar(depStore.cantidad,depStore.insumo.id,3) "  class="w-auto h-auto grid justify-center py-1 px-1 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>Solicitar</span>
       
              
              </button></div>
                      </div>
                      </div>

         
        </div>
       
        
      </div>
    
     
    </div>
    </div>
   
       
</template>

<script>
import List from '../components/list_ins.vue' 
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