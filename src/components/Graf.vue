<template>
  <div>
     <p> {{cat}}</p>


    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series1"
    ></apexchart>
    
     <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series2"
    ></apexchart>

     <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series3"
    ></apexchart>

     <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series4"
    ></apexchart>
 
  </div>
</template>

<script>

import VueApexCharts from "vue3-apexcharts";
export default {
 
  components: {
    
    apexchart: VueApexCharts,
    
  },
  
    data: function() {
      

    return {
      s1:[],
      s2:[],
      s3:[],
      s4:[],
      cat:[],
      batch:[],
      test:[],

 
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
      },
      series1: [
        {
          name: "series-1",
          data: [],
        },
      ],
      series2: [
        {
          name: "series-2",
          data: [],
        },
      ],
      series3: [
        {
          name: "series-3",
          data: [],
        },
      ],
      series4: [
        {
          name: "series-4",
          data: [],
        },
      ],
      
};
    },
     methods:{ 
 
        async fetchBatch(){ 
            const res=await fetch('api/batch')

            const data= await res.json()
            return data
        },

    
    },
  

    async created(){ 
          this.batch=await this.fetchBatch()
            console.log(this.batch)


          for (let i = 0; i < this.batch.length; i++) {
                this.s1.push(this.batch[i].data.senzor1)
              }

         

        for (let i = 0; i < this.batch.length; i++) {
                this.s2.push(this.batch[i].data.senzor2)
              }
        for (let i = 0; i < this.batch.length; i++) {
                this.s3.push(this.batch[i].data.senzor3)
              }
        for (let i = 0; i < this.batch.length; i++) {
                this.s4.push(this.batch[i].data.senzor4)
              }
        for (let i = 0; i < this.batch.length; i++) {
                this.cat.push(this.batch[i].timestamp)
              }


      this.series1=[{name: "series-1",data: this.s1}]
      this.series2=[{name: "series-2",data: this.s2}]
      this.series3=[{name: "series-3",data: this.s3}]
      this.series4=[{name: "series-4",data: this.s4}]
      this.xaxis=[{ categories: this.cat}]
      console.log("hi")
      console.log(this.xaxis)
      

            
       
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
