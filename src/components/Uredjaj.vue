<template>
  <div class="ured">
    <p>Uredjaj: {{uredjaj.id}}</p>
    <p>{{status}}</p>
    <p>Početak eksperimenta: {{uredjaj.startDate }}</p>    
      <p>Kraj eksperimenta: {{endDate}}</p>

    <div v-show="isActive()">
      <SendShutdownSignal :uredjajID="uredjajID" @shutdown-signal="sendEndSignal"></SendShutdownSignal>
  
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
import SendShutdownSignal from '@/components/SendShutdownSignal'

export default {
    name:'Uredjaj',
    components:{
        SenzorList,
        ShowSenzorList,
        SendShutdownSignal

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
      isActive(){
        if(this.uredjaj.kalibracija==true && this.uredjaj.active==false){
          return true
        }else if(this.uredjaj.kalibracija==false && this.uredjaj.active==true){
          return true
        }else if(this.uredjaj.kalibracija==false && this.uredjaj.active==false){
          return false
        }else{
          return true
        }
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


      ///// provaj napravit mini formu za ovo 
      //Uncaught (in promise) TypeError: iter is undefined
      async sendEndSignal(end){
        const res=await fetch('api/stopsignal',{
          method:'POST',
          headers:{
            'Content-type': 'application/json',  
          },
          
          body: JSON.stringify(end),
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