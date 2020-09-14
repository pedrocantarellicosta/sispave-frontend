<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Total de Infrações por Escola</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">Ver mais</a>
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
            {{row.escola}}
          </th>
          <td>
            {{row.bairro}}
          </td>
          <td>
            {{row.total}}
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'school-infractions-table',
    data() {
      return {
        tableData: [
          {
            escola: 'EMEF Independência',
            bairro: "Centro",
            total: '4,569',
          },
          {
            escola: 'EMEF Jacob Brod',
            bairro: "Centro",
            total: '3,985',
          },
          {
            escola: 'EMEF Jeremias Froes',
            bairro: "Centro",
            total: '3,513',
          },
          {
            escola: 'EMEF Joaquim Nabuco',
            bairro: "Centro",
            total: '2,050',
          },
          {
            escola: 'EMEF Jornalista Deogar Soares',
            bairro: "Centro",
            total: '1,795',
          }
        ]
      }
    }
  }
</script>
<style>
</style>
