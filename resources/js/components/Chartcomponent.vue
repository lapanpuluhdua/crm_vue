<template>
  <div class="example">
    <apexcharts width="100%" height="375%" type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-lines'
        },
        
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'June', 'July']
        }
      },
      series: [{
        name: 'Leads',
        data: [11, 17, 25, 31, 45, 50]
      }]
    }
  },
}
</script>
