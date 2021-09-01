<template>
  <div>
    <UredjajList :uredjaji="uredjaji">
    </UredjajList>  
  </div>
</template>
<script>
import UredjajList from '@/components/UredjajList'
export default {
    name:'SviUredjaji',
    components:{
        UredjajList
    },
    data(){
      return{
        uredjaji:[]
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
    }
  
}
</script>