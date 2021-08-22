<template>
  <div class="ured">
    <p>Uredjaj: {{uredjaj.id}}</p>
    <p>{{status}}</p>
    <p>Početak eksperimenta: {{uredjaj.startDate }}</p>    
      <p>Kraj eksperimenta: {{endDate}}</p>

    <div v-show="!uredjaj.endDate">
      <button  @v-click="sendEndSignal()" >Završi eksperiment</button>
  
    </div>
    
    
  
      
   
  </div>
<ShowSenzorList @toggle-Senzor-List="toggleSenzorList()" class="btn" 
   :text="showSenzorList ? 'Sakrij Senzore':'Prikaži senzore'"
   ></ShowSenzorList>
  
  <div v-show="showSenzorList">

    <SenzorList :senzori="senzori" >
    </SenzorList>

  </div>



</template>

<script>


import SenzorList from '@/components/SenzorList'
import ShowSenzorList from '@/components/ShowSenzorList'


export default {
    name:'Uredjaj',
    components:{
        SenzorList,
        ShowSenzorList,

    },
    props:{ 
         uredjaj: Object
     },
     data(){
      return{
        senzori:[],
        showSenzorList:false,
        status:String,
        endDate:String,
        uredjajID:Number,
 

      }
    },
    methods:{
      toggleSenzorList(){
        this.showSenzorList=!this.showSenzorList
      },
      setStatus(){
        var stat
        if(this.uredjaj.kalibracija==true && this.uredjaj.active==false){
          stat="Kalibracija u tjeku"
        }else if(this.uredjaj.kalibracija==false && this.uredjaj.active==true){
          stat="Eksperiment u toku u tjeku"
        }else if(this.uredjaj.kalibracija==false && this.uredjaj.active==false){
          stat="Uređaj je trenutno neaktivan"
        }else{
          stat="NEISPRAVNO OČITANJE"
        }

        return stat
      },

      setEndDate(){
        var end
        if(this.uredjaj.endDate==""){
          end="Završni datum nije postavljen"

        }else{
          end=this.uredjaj.endDate
        }
          return end
      },
      async sendEndSignal(){
        const res=await fetch('api/stopsignal',{
          method:'POST',
          headers:{
            'Content-type': 'application/json',  
          },
          body: JSON.stringify(this.uredjaj.id),
        })
          const data=await res.json()
          this.stopsignal=[...this.stopsignal,data]
      
      }
    },
     
    async created() {
 
      this.showSenzorList=this.toggleSenzorList()
      this.status=this.setStatus()
      this.endDate=this.setEndDate()
      this.senzori=this.uredjaj.senzori 
      this.uredjajID=this.uredjaj.id


    }
  
    
    
  
}
</script>