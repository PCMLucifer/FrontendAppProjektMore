<template>
    <div>
      
        <ExperimentList  :metrika="metrika"> </ExperimentList>
    
       

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
  data(){ 
        return{ 

        metrika:[]
            

        }
    },
  
    methods:{ 
  
        async fetchBatch(){ 
            const res=await fetch('api/batch')

            const data= await res.json()
            return data
        },
   
       

 
    },
//for petlja z fetch experiment(id)
    async created(){ 
    
            this.experiments=await this.fetchBatch()
            
            this.metrika=this.experiments
                .map(experiments => experiments.metrics)
                .flat()
                .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

            this.metrika=this.metrika.reduce((r, row, i, a) => {
                     if (!i || a[i - 1][0] !== row[0]) r.push([]);
                        r[r.length - 1].push(row);
                         return r;
                    }, []);


                
            
        }
}
</script>