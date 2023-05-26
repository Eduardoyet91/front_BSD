<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Pagos"/>
   <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Ordenes Pendientes" message="ver" :array="depStore.ordenes_insumo"/>
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
      
   
      <div class="w-full grid grid-rows-2">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos de Orden</h1>
          <div class="bg-white m-2 h-48 rounded-lg"> 


               <form >

                      <div class="grid grid-rows-2 gap-4 m-2 mt-4 ">
                        <div class="grid grid-cols-2 m-2 w-full">
                          <div>
                            <div class="grid justify-center">
                          <h1>Orden</h1>
                        </div>
                        <div class="grid grid-cols-2 m-2 w-full"><div>
                           <div>
                        <label for="name" class="block text-sm font-medium ">Identificador</label>
                        <div class="mt-1">
                          <p>{{depStore.orden_insumo.id}}</p>
                         
                        </div>
                      </div>

                      <div>
                        <label for="name" class="block text-sm font-medium">Fecha</label>
                        <div class="mt-1">
                          <p class="w-full">{{depStore.orden_insumo.fecha}}</p>
                          
                        </div>
                      </div>
                        </div>

 <div>
                        <label for="name" class="block text-sm font-medium">Status</label>
                        <div class="mt-1">
                          <p class="w-full">{{depStore.orden_insumo.status}}</p>
                          
                        </div>
                      </div>
                      </div>
                           
                     
                          </div>

                          <div>
                        <div class="grid justify-center">
                          <h1>Detalles</h1>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 m-4 ml-8 mt-8 ">
                
                    <div>
                        <label for="name" class="block text-sm font-medium ">Monto</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.orden_insumo.monto}}</p>
                          
                        </div>
                      </div>
                      
                                       
                       <div>
                        <label for="name" class="block text-sm font-medium ">Tipo</label>
                        <div class="mt-1">
                          <p v-show="!depStore.change">{{depStore.orden_insumo.tipo}}</p>
                          
                        </div>
                      </div>

                      

                      
                      
                      
                      


                      
                      </div>




                      </div>


                           

                       

                      
                        </div>
                        
                         
                      
                        </div>

              
                      
</form>

           </div>
          <div class="grid justify-center m-2">
            <button v-show="depStore.content" @click="depStore.new_comprobante(depStore.orden_insumo.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Pagar</span>
               </button>
          </div>


         
        </div>
          <div class=" h-48 grid row-span-1">
          <div class="grid justify-items-center">
          <div v-show="depStore.content" class="bg-white w-2/4 h-48 rounded-lg"> 
          <form >
              <div class="grid grid-cols-2 gap-4 m-4 mt-8 justify-center ">
                
                      <div>
                        <label for="name" class="block text-sm font-medium ">Identificador</label>
                        <div class="mt-1">
                          <p>{{depStore.comprobante.id}}</p>
                        </div>
                      </div>
        
                      
                      
                      
                     
                      <div>
                        <label for="name" class="block text-sm font-medium ">Fecha</label>
                        <div class="mt-1">
                          <p>{{depStore.comprobante.fecha}}</p>
                        </div>
                      </div>
                       
                      
                     


                      

                      

      

                       
                      
                      </div>


        <div   class="grid grid-rows-2 justify-center">
             
              
              <h2 class=" mt-4">Status</h2>
              <p>{{depStore.comprobante.status}}</p>
            
          </div>

</form></div>
          </div>
          <div v-show="depStore.content" class="grid justify-center">
             
              
              <h2 v-show="depStore.comprobante.status='Archivado'" class="text-white mt-4">Comprobante Archivado</h2>
       
              
              
          </div>
         
        </div>
      </div>
    
     
    </div>
    </div>
       
</template>

<script>
import List from '../components/list_orde_ins.vue' 
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