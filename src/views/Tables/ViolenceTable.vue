<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0" :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">{{title}}</h3>
        </div>
        <div class="col text-right" v-if=isManager>
          <base-button type="success" @click.native="createViolence" size="sm">Criar</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark': ''"
        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th>Id</th>
          <th>Violência</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.id}}</span>
              </div>
            </div>
          </th>

          <td class="text-left">
            <span class="name mb-0 text-sm">{{row.name}}</span>
          </td>
          <td class="text-left">
             <base-button size="sm" type="default"
                v-b-popover.hover= row.description
                title="Sobre"
                >Sobre</base-button>
                <base-button size="sm" type="warning" @click="openYoutube(row.media_link)"
                >Video</base-button>

          </td>

          
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent': ''"
    >
      <base-pagination
        v-if="tableData.length"
        :page-count="totalPages"
        @input="goToPage"
        :value="currentPage"
        align="center"
        size="sm"
      ></base-pagination>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 

import { mapActions, mapGetters } from "vuex";
import { VBPopover } from "bootstrap-vue";

export default {
  name: "violence-table",
  directives: {
    'b-popover': VBPopover
  },
  components:{
    VBPopover
  },
  props: {
    type: {
      type: String,
    },
    title: String,
    tableData: {
      type: Array,
    },
  },
  data() {
    return {
       modals: {
        modal0: false,
        modal1: false,
        modal2: false
      }
    };
  },
  computed: {
    ...mapGetters(["totalPages", "currentPage", "isManager"]),
  },
  methods: {
    ...mapActions(["goToPage"]),
    createViolence() {
      this.$router.push("/tipos-violencia/criar");
    },
    openYoutube(link) {
      window.open(link);
    }
  },
};
</script>
<style>
</style>
/* eslint-enable */ 
