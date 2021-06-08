<template>
<div :class="[experiment.finished? 'finished':'','experiment']">
    <h3>
        {{experiment.ime}}

        <button   @click="$emit('toggle-info')" class="det">detalji</button>
        
    </h3>
    <div>
    <p>{{experiment.batch_number}}</p>
    <p>{{experiment.timestamp}}</p>
    <p>{{experiment.metrics[1]}}</p>


        <SenzorList :senzors="experiment.senzors"></SenzorList>

    
   
    </div>
    
</div>


    
</template>

<script>
import ExperimentInfo from './ExperimentInfo'
import SenzorList from '../components/SenzorList'


export default {
    name:'Experiment',
    props: { 
        experiment:Object,
         
        
    },
    
    components:{
    ExperimentInfo,
    SenzorList
    },
   /* 
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
        async fetchOneSenzor(id){ 
            const res=await fetch(`api/senzors/${id}`)

            const data= await res.json()
            return 
            data
        },
       
        
         

    
      
  
      },
      async created(){ 
       //    this.senzors=await this.fetchSenzors()
         
                this.senzors=await this.fetchSenzors()
            
            // ovo dolje ne radi
                this.senzors=this.senzors.filter((s) => this.experiments.some(
                    (e) => e.senzorsAllocated.includes(s.id)))


       
        },
*/
        
        

 
    
    
    
  
}

</script>
<style>
    .experiment{ 
        background: rgb(128, 125, 125);
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }
    .experiment.finished{ 
        border-left: 20px solid rgb(255, 47, 203);
    }
    .experiment h3{ 
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .det{
    display: inline-block;
    background: black;
    color:green;
    border: none;
    padding: 8px 12px;
    margin: 4px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    font-size: 11px;
    font-family: inherit;
  }
</style>