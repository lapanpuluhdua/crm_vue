<template>
  <div class="example">
    <apexcharts width="100%" height="375%" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart2',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: ['Shop N Play', 'SIS', 'SIS+', 'Kitchen', 'Learn']
        }
        
      },
      
      series: [{
        name: 'series-2',
        data: [11, 17, 25, 31, 45],
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B'
            ],
      }]
    }
  },
}
</script>
