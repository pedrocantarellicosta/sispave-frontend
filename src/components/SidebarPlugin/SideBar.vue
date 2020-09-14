<template>
  <nav
    class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="container-fluid">
      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">
        <span class="navbar-toggler-icon"></span>
      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <img :src="logo" class="navbar-brand-img" alt="..." />
      </router-link>

      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          
        </ul>
      </slot>
      <slot></slot>
      <div
        v-show="$sidebar.showSidebar"
        class="navbar-collapse collapse show"
        id="sidenav-collapse-main"
      >
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img :src="logo" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links"></slot>
        </ul>
       
       
        <hr class="my-3" />
      </div>
       <div class="logout">
          <router-link to="/"  @click.native="logUserOut">
            <i class="ni ni-user-run"></i>
            <span>Sair</span>
          </router-link>
        </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from "@/components/NavbarToggleButton";
import { mapActions } from 'vuex';

export default {
  name: "sidebar",
  components: {
    NavbarToggleButton,
  },
  props: {
    logo: {
      type: String,
      default: "img/brand/sispave-logo.png",
      description: "Sidebar app logo",
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        "Whether sidebar should autoclose on mobile when clicking an item",
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    };
  },
  methods: {
    ...mapActions(["logout"]),

    closeSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true);
    },
    async logUserOut() {
      try {
        await this.logout();
        this.$router.push("/login");
      } catch (err) {
        // console.log(err.message);
      }
    },
  },
  
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.logout {


  a{
    min-width:100px;
    background: rgb(214, 31, 31);
    border-radius: 5px;
    max-width:200px;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    transition: background 0.2s;
    &:hover{
      background: rgb(243, 63, 63);
    }
    i{
      margin-right:10px;
    }

  }
}
</style>
