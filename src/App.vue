<template>
  <div id="app" :class="{ 'loading': appIsLoading }">
    <notifications></notifications>
    <router-view/>
        <loading-spinner v-if="appIsLoading" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadingSpinner from './components/Spinner'

export default {
  components: {
    LoadingSpinner,
  },
  computed: {
    ...mapGetters(['appIsLoading'])
  },
  watch: {
    '$i18n.locale'(locale) {
      localStorage.setItem('locale', locale);
    }
  }
}

</script>
<style lang="scss">
body {

  .vs__dropdown-toggle {
    background-color: #FFF;
  }

  #app {
    &.loading {
      overflow: hidden;
      &:after {
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        top: 0;
        left: 0;
        z-index: 9999;
      }
      * {
        pointer-events: none;
      }
    }
    .linkable {
      cursor: pointer;
    }
  }
}
</style>
