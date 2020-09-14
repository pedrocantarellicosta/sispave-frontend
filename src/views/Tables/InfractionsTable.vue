<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
       
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Descrição</th>
          <th>Tipos de Violencia</th>
          <th></th>
        </template>

        <template >
          
          
          <td class="text-left">
            <span class="name mb-0 text-sm">Descricao</span>
          </td>
           <td class="text-left">
            <span class="name mb-0 text-sm">tipo</span>
          </td>
        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
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
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'infractions-table',
    props: {
      type: {
        type: String
      },
      title: String,
      tableData: {
        type: Array,
      },
    },
    data() {
      return {
      }
    },
    computed:{
      ...mapGetters([
        'totalPages',
        'currentPage',
       ]),
    },
    methods: {
       ...mapActions([
        'goToPage',
      ]),
      createSchool(){
        this.$router.push("/escolas/criar");
      }
    }
  }
</script>
<style>
</style>
