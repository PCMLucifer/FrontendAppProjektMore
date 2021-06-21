<template>
    <div>
     
        <ExperimentList  :experiments="experiments"> </ExperimentList>
    
      

    </div>

</template>

<script>
/*
ovo je za template
<router-link class="btn" to="/addexperiment">Dodaj Eksperiment</router-link>
  
  */

import ExperimentList from '../components/ExperimentList'



export default {
    name:'ExperimentView',
    components:{
 
    ExperimentList,

  },
  
}
</script>