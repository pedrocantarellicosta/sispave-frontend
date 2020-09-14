<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Total de Relatos por Escola</h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Escola</th>
          <th>Bairro</th>
          <th>Total de Infrações</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.name}}
          </th>
          <td>
            {{row.neighborhood}}
          </td>
          <td>
            {{row.reports}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'school-infractions-table',
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
        'appIsLoading',

      ]),
      createSchool(){
        this.$router.push("/escolas/criar");
      }
    }
  }
</script>
<style>
</style>
