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
        <div class="col text-right">
          <base-button type="success" @click.native="createSchool" size="sm">Criar</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData"
                  v-if="tableData.length">
        <template slot="columns">
          <th>Id</th>
          <th>Escola</th>
          <th>Bairro</th>
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
            <span class="name mb-0 text-sm">{{row.neighborhood}}</span>
          </td>

          <td class="text-right">
            <base-dropdown class="dropdown"
                           position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Editar</a>
                <a class="dropdown-item" href="#">Excluir</a>
              </template>
            </base-dropdown>
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
    name: 'school-table',
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
