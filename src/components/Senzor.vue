<template>
  <p>Senzor: {{senzor.id}}</p>
  <div>
      <ShowKalibracija @toggle-kalibracija="toggleKalibracija()" class="btn" 
    :text="showKalibracija? 'Sakrij Kalibracijske podatke':'Prikaži kalibracijske podatke'"></ShowKalibracija>

    <div class="graf" v-show="showKalibracija">
       <Graf :data="kalibracija" :timestamp="kalibracijaTimestamp"></Graf>
    </div>
  </div>
  
  <div>  <ShowGraf @toggle-Graf="toggleGraf()" class="btn" 
   :text="showGraf? 'Sakrij Podatke eksperimenta':'Prikaži podatke eksperimenta'"></ShowGraf>
    <div class="graf"  v-show="showGraf">
      <Graf :data="podaci" :timestamp="timestamp"></Graf>
    </div>
  </div>

</template>

<script>
import Graf from '@/components/Graf'
import ShowGraf from '@/components/ShowGraf'
import ShowKalibracija from '@/components/ShowKalibracija'


//SREDI TA FREEZE i ubaci prekid eksperimenta (samo signal na backend mora slat z ID uredjaja)

export default {
    name:'Senzor',
    components:{
       Graf,
       ShowGraf,
       ShowKalibracija
    },
    props:{ 
         senzor: Object,
     },
     data(){
      return{
        showGraf:false,
        showKalibracija:false,
        podaci:Array,
        kalibracija:Array,
        timestamp:Array,
        kalibracijaTimestamp:Array
      }
    },
    methods:{
      toggleGraf(){
        this.showGraf= !this.showGraf
      },
      toggleKalibracija(){
        this.showKalibracija= !this.showKalibracija
      }
     
       
    },
    async created() {
      this.podaci=this.senzor.data
      this.kalibracija=this.senzor.calibrationData
      this.timestamp=this.senzor.timestamp
      this.kalibracijaTimestamp=this.senzor.calibrtionTimestamp
      
    },
  
}
</script>