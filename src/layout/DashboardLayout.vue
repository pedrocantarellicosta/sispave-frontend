<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="SISPAV"
    >
      <h4 class="mt-2"> Bem vindo </h4>
      <h6 v-if="isSchool">EMEF Getúlio Vargas</h6>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />

        <!-- ROTAS DA ESCOLA -->
        <sidebar-item v-if="isSchool" :link="{name: 'Listar Relatos', icon: 'ni ni-bullet-list-67 text-blue', path: '/relatos'}"/>
        <sidebar-item v-if="isSchool" :link="{name: 'Criar Relatos', icon: 'ni ni-fat-add text-green', path: '/relatos/criar'}"/>

        <!-- ROTAS DA SECRETARIA -->
        <sidebar-item v-if="isManager" :link="{name: 'Escolas', icon: 'ni ni-hat-3 text-yellow', path: '/escolas'}"/>
        <sidebar-item v-if="isManager || isSchool" :link="{name: 'Violências', icon: 'ni ni-fat-remove text-red', path: '/tipos-violencia'}"/>
        <sidebar-item v-if="isManager" :link="{name: 'Relatórios', icon: 'ni ni-chart-bar-32 text-blue', path: '/relatorios'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    computed: {
        ...mapGetters([
            'user',
            'isManager',
            'isSchool'
        ])
    },
    methods: {
      ...mapActions(['fetchUser']),
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    },
    async created() {
      try {
        await this.fetchUser();
      } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
          localStorage.clear();
          this.$router.push("/login");
        }
      }
    },
  };
</script>
<style lang="scss">
</style>
