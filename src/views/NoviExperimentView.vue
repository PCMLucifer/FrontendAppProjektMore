<template>
  <div>
<NoviExperimentForma @add-experiment="addExperiment"></NoviExperimentForma>
  
  </div>
</template>

<script>

import NoviExperimentForma from '@/components/NoviExperimentForma'
export default {
    name:'NoviExperiment',
    components:{
       NoviExperimentForma
    },
    methods:{
      async addExperiment(experiment){
        const res=await fetch('api/experiments',{
          method:'POST',
          headers:{
            'Content-type': 'application/json',  
          },
          body: JSON.stringify(experiment),
        })
          const data=await res.json()
          this.experiments=[...this.experiments,data]
      }
    }
  
}
</script>