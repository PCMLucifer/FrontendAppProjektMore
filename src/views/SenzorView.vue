<template>
    <div>
        <SenzorList :senzors="senzors"></SenzorList>
    </div>
</template>

<script>

import SenzorList from '../components/SenzorList'

export default {
    name:'SenzorView',
    components:{
    SenzorList
  },
  data(){ 
        return{ 
            senzors:[],
        }
    },
    methods:{ 
        async fetchSenzors(){ 
            const res=await fetch('api/senzors')

            const data= await res.json()
            return data
        },
        async fetchSenzor(id){ 
            const res=await fetch(`api/senzors/${id}`)

            const data= await res.json()
            return data
        },

        
    },

    async created(){ 
            this.senzors=await this.fetchSenzors()
        }

}
</script>