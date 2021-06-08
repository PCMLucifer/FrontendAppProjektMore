<template>
  <div>
     <p>očitanja senzora {{sn[0]}}</p>

    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"

    ></apexchart>
 
  </div>
</template>

<script>

import VueApexCharts from "vue3-apexcharts";
export default {
   props: { 
        metrika:Array

 
    },
  components: {
    
    apexchart: VueApexCharts,
    
  },
    data: function() {
    return {
      sn:[],
      ts:[],
      dt:[],
     
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "series-1",
          data: [],
        },
      ],
};
    },
    /*
      methods:{ 
 
        async fetchBatch(){ 
            const res=await fetch('http://localhost:5000/batch')

            const data= await res.json()
            return data
        },

    
    },
 */


    async created(){ 
    
          //  this.batch=await this.fetchBatch()
          //  console.log(this.batch)

  

            for (let i = 0; i < this.metrika.length; i++) {
              this.dt.push(this.metrika[i][1])
              this.sn.push(this.metrika[i][0])
            }
            console.log(this.dt)
        
            for (let i = 0; i <  this.metrika.length; i++) {
              this.ts.push(this.metrika[i][2])
              
            }

               console.log(this.ts)
            this.series=[{data: this.ts}]


            for (let i = 0; i < this.ts.length; i++) {
              this.chartOptions.xaxis.categories.push(this.dt[i])
            }

            
       
        }

    
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
