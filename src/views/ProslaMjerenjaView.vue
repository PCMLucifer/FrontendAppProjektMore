<template>
  <div>

    <UredjajList :uredjaji="uredjaji">
    </UredjajList>
    
   
  
  </div>
</template>

<script>
//// TU ĆE TRIBAT FILTRIRAT

import UredjajList from '@/components/UredjajList'
export default {
    name:'ProslaMjerenja',
    components:{
        UredjajList
    },
    data(){
      return{
        uredjaji:[],
        temp:[]

      }
    },
    methods:{
      async fetchUredjaji(){ 
            const res=await fetch('api/uredjaji')

            const data= await res.json()
            return data
        },
    },
    async created() {
      
      this.uredjaji=await this.fetchUredjaji()
      
      for (let i = 0; i < this.uredjaji.length; i++) {
        if( this.uredjaji[i].kalibracija==false && this.uredjaji[i].active==false ){
          this.temp.push(this.uredjaji[i])
        }
      }
      this.uredjaji=this.temp
     
}
    
  
}
</script>