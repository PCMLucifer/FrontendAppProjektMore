<template>
   
  <div>

    <SenzorList :senzori="senzori">
    </SenzorList>
  
  </div>


</template>

<script>


import SenzorList from '@/components/SenzorList'

export default {
    name:'Senzori',
    components:{
        SenzorList
    },
  
     data(){
      return{
        senzori:[]
      }
    },
    methods:{
      async fetchSenzori(){ 
            const res=await fetch('api/senzori')

            const data= await res.json()
            return data
        },
    },
     
    async created() {
        this.senzori=await this.fetchSenzori()
    }
  
    
    
  
}
</script>