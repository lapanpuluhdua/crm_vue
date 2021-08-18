<template>
  <div id="app">
    <LayoutBroker
      :layouts="layouts"
      :current="$route.meta.layout"
    />
  </div>
</template>
 
<script>
import LayoutBroker from 'vue-layout-broker'

// Dashforge template
// import DashboardLayout from './dashforge/dashboard'
// import LoginLayout from './dashforge/login'

// Cork template
import DashboardLayout from './unipro/dashboard'
import LoginLayout from './unipro/login'

import { mapGetters } from 'vuex'

const layouts = {
  DashboardLayout,
  LoginLayout
}
 
export default {
  name: 'App',
  components: {
    LayoutBroker
  },
  data () {
    return {
      layouts
    }
  },
}
</script> 