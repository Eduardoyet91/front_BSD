<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <div class="place-content-center w-full h-full">
   <h1 class="text-center text-3xl text-white">Bienvenido</h1>
   <h2 class="text-center text-xl text-white">Condominio Cabañas Park</h2>
  
   <div class="grid grid-cols-3 gap-6 m-3">
     <div class="grid grid-rows-2 h-full gap-40 mt-8">
      <div class="h-min content-center"><button class="text-center">Mantenimiento</button></div>
     <div class="h-min content-center"><button class="text-center">Gerencia</button></div>
   </div>
     
     <div class="mt-28 h-min"><button class="text-center">Administracion</button></div>


     <div class="grid grid-rows-2 h-full content-center items-center text-center gap-40 mt-24">
      <div class="h-min"><button class="text-center">Tesoreria</button></div>
     <div class="h-min content-center"><button class="text-center">Seguridad</button></div>
   </div>

   </div>
 </div>
</template>

<script>
import { ref } from 'vue'
import {useUserStore} from '../stores/user' 
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'

 const options = [
    { text: 'Seleccione', value: 0 },
        { text: 'Activo', value: true },
        { text: 'Inactivo', value: false },
        
      ]

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
  },
  setup() {
    const open = ref(true)
     const userStore = useUserStore();

      const nombre = ref(userStore.nombre)
    const apellido = ref(userStore.apellido)  
     const number = ref(userStore.number)
      const estatus = ref(options[0])

         

    const register = async() => {
      console.log(estatus.value)



      if (userStore.editar)
          await userStore.update_user(estatus.value) 
        else
      await userStore.add_user(estatus.value)  
      
    }

      


    return {
      open,
      userStore,
      register,
      options,
      nombre,
      apellido,
      number,
      estatus
    }
  },
}
</script>