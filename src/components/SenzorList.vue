<template>

  <div class="senz"  :key="senzor.id" v-for="senzor in senzori">
 
    <Senzor :senzor="senzor"  >
    </Senzor>
  </div>

  
</template>

<script>
//miči status ... samo vidi ko je  data prazan u db

import Senzor from '@/components/Senzor'
export default {
    name:'SenzorList',
    components:{
        Senzor,
       
    },
    props:{ 
         senzori: Array,

     },
     
  
}

</script>