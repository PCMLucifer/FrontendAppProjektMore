<template>
  <div >
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
    name:'Graf',
    components: {
    
    apexchart: VueApexCharts,
    
  },
  data: function() {
    return {

      chartOptions: {
        chart: {
          id: "graf",
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: "series",
          data: [],
        },   
      ]      
      };
    },
    props:{ 
         data: Array,
         timestamp:Array
     },
    async created() {
      this.chartOptions.xaxis.categories=this.timestamp
      this.series=[{data: this.data}]     
    }      
}
</script>