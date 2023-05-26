<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Nav title="Gerencia"/>
   <div class="h-full flex">
    
    

    <div class="h-full w-5/12 flex-1 flex flex-col  py-8 px-16">
      
   

    <List titulo="Propietarios" message="ver" :array="depStore.propietarios"/>

     <div class="grid justify-center"><button v-show="!depStore.new" @click="depStore.new=true" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Agregar</span>
               </button></div>
     
    </div>

 <div class="h-full w-7/12 flex py-8 px-4 sm:px-4 lg:flex-none lg:px-4 xl:px-4">
       <div class="w-full grid grid-rows-1">
        
        <div class="m-2 grid row-span-1">
          <h1 class="text-center text-xl text-white">Datos del Propietario</h1>
          <div class="m-2 h-96 rounded-lg"> 

            <form >
              <div class="grid grid-cols-2 gap-12 mt-4">
                <div class="grid grid-rows-3 gap-14">
     <div>
                        <label for="name" class="block text-sm font-medium text-white">Cedula</label>
                        <div class="mt-1">
                          <p class="text-white ml-12">{{depStore.persona.cedula}}</p>
                          <input
                            v-show="depStore.new"
                            v-model="depStore.person.cedula"
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
                        <label for="name" class="block text-sm font-medium text-white">Nombre</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.new"
                            v-model="depStore.persona.nombre"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            :class="[depStore.change ? 'bg-white border border-gray-300 shadow-sm' : 'bg-transparent text-white ml-12', 'appearance-none block w-full px-3 py-2  rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm','hover:text-indigo-500' ]"
                          />
                          <input
                            v-show="depStore.new"
                            v-model="depStore.person.nombre"
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
                        <label for="name" class="block text-sm font-medium text-white">Apellido</label>
                        <div class="mt-1">
                          <input
                           v-show="!depStore.new"
                            v-model="depStore.persona.apellido"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            :class="[depStore.change ? 'bg-white border border-gray-300 shadow-sm' : 'bg-transparent text-white ml-12', 'appearance-none block w-full px-3 py-2  rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm','hover:text-indigo-500' ]"
                          />

                          <input
                            v-show="depStore.new"
                            v-model="depStore.person.apellido"
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
                        <label for="name" class="block text-sm font-medium text-white">Rif</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.new"
                            v-model="depStore.persona.rif"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            :class="[depStore.change ? 'bg-white border border-gray-300 shadow-sm' : 'bg-transparent text-white ml-12', 'appearance-none block w-full px-3 py-2  rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm','hover:text-indigo-500' ]"
                          />
                          <input
                            v-show="depStore.new"
                            v-model="depStore.person.rif"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      </div>
                      <div class="grid grid-rows-2 gap-16 mt-12">

                      <div>
                        <label for="name" class="block text-sm font-medium text-white">Telefono</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.new"
                            v-model="depStore.persona.telefono"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            :class="[depStore.change ? 'bg-white border border-gray-300 shadow-sm' : 'bg-transparent text-white ml-12', 'appearance-none block w-full px-3 py-2  rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm','hover:text-indigo-500' ]"
                          />
                           <input
                            v-show="depStore.new"
                            v-model="depStore.person.telefono"
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
                        <label for="name" class="block text-sm font-medium text-white">Edificio</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.new"
                            v-model="depStore.propietario.edificio"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            :class="[depStore.change ? 'bg-white border border-gray-300 shadow-sm' : 'bg-transparent text-white ml-12', 'appearance-none block w-full px-3 py-2  rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm','hover:text-indigo-500' ]"
                          />
                           <input
                            v-show="depStore.new"
                            v-model="depStore.propi.edificio"
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
                        <label for="name" class="block text-sm font-medium text-white">Apartamento</label>
                        <div class="mt-1">
                          <input
                            v-show="!depStore.new"
                            v-model="depStore.propietario.apartamento"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            :class="[depStore.change ? 'bg-white border border-gray-300 shadow-sm' : 'bg-transparent text-white ml-12', 'appearance-none block w-full px-3 py-2  rounded-md  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm','hover:text-indigo-500' ]"
                          />
                          <input
                            v-show="depStore.new"
                            v-model="depStore.propi.apartamento"
                            id="name"
                            name="name"
                            type="name"
                            autocomplete="name"
                            required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      </div>
                      </div>
</form> </div>
          <div class="grid grid-cols-2 mt-24">
            <div v-show="depStore.new" class="grid justify-center"><button  @click="depStore.new_persona(2)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Guardar</span>
               </button></div>

            <div v-show="!depStore.new" class="grid justify-center">

              <button v-show="!depStore.change && depStore.content"   @click="depStore.change=true" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Modificar</span>
               </button>

               <button v-show="depStore.change"   @click="depStore.edit_persona(2)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Guardar</span>
               </button>

             </div>

            <div v-show="depStore.new || depStore.change" class="grid justify-center"><button  @click="depStore.new=false,depStore.change=false" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Cancelar</span>
               </button></div>

                <div v-show="(!depStore.new && !depStore.change) && depStore.content" class="grid justify-center"><button  @click="depStore.delete_propietario(depStore.propietario.id)" class="w-20  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>Eliminar</span>
               </button></div>

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

const arre = [1,2,3]

export default {
    components: {
    List,
    Nav,
    Boton


  },

  
 
  setup() {
    const depStore = useDepStore();
    
    return {
      depStore,
      arreglo: arre
    }
  },
}
</script>

