<template>

  <div   :key="uredjaj.id" v-for="uredjaj in uredjaji">
    <Uredjaj  :uredjaj="uredjaj"/>
  </div>


  
</template>

<script>


import Uredjaj from '@/components/Uredjaj'
export default {
    name:'UredjajList',
    components:{
        Uredjaj
    },
    props: { 

        uredjaji:Array

 
    },
    data(){
      return{
        today:Date
      }
    },
   
  
}
</script>