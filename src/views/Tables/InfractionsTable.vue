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
          <th>Data</th>
          <th>Descrição</th>
          <th>Tipos de Violencia</th>
          
        </template>

        <template slot-scope="{row}">
          
          <td class="text-left">
            <span class="name mb-0 text-sm">{{formatDate(row.date)}}</span>
          </td>
          <td class="text-left">
            <span class="name mb-0 text-sm">{{row.description}}</span>
          </td>
           <td class="text-left">
            <badge type="default" class="ml-2" v-for="(item, index) in row.violences" :key=index>{{ item.name }}</badge>
          </td>
        </template>

      </base-table>
    </div>

    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      
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
      formatDate (input) {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1], day = datePart[2];

        return day+'/'+month+'/'+year;
      }
    }
  }
</script>
<style>
</style>
