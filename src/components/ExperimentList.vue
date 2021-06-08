<template>
 
  <div id="array-with-index" class="demo">
    <p v-bind:key="metrik" v-for="metrik in metrika">
       <Graf :metrika="metrik"></Graf>
    </p>
  </div>

    <div ></div>
</template>


<script>

import Graf from '../components/Graf'

export default {
    name:'ExperimentList',
    props: { 

        metrika:Array

 
    },
    components:{
      Graf
    },
  
 
}
</script>