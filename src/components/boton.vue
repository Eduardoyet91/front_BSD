<template>
	
	<button class="w-auto  grid justify-center py-2 px-4 border border-white rounded-lg shadow-sm text-sm font-medium text-white bg-green-500  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              
              <span>{{message}}</span>
       
              
              </button>
</template> 

<script>
import { useDepStore } from "../stores/user";

export default {
   
    props: ['message'],
 
  setup() {
    const depStore = useDepStore();
    
    return {
      depStore,
    }
  },
}
</script>