<template>
    <div>
        <base-header type="gradient-warning" class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center" />
        <div class="container-fluid  mt-sm--5 mt-md--4 mt-lg--7 mt--5">
            <div class="row">
                <div class="col">
                    <school-table
                      :title=name
                      :tableData="school"
                    />
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
  import SchoolTable from '../Tables/SchoolTable'

  export default {
    name: 'schools',
    components: {
      SchoolTable,
    },
    data() {
      return {
        name: "Listar Escolas",
        school: [
          {
            id: '01',
            escola: 'EMEF Independência',
            bairro: 'Centro',
            
          },
          {
            id: '02',
            escola: 'EMEF Jacob Brod',
            bairro: 'Centro',
          },
          {
            id: '03',
            escola: 'EMEF Jeremias Froes',
            bairro: 'Centro',            
          },
           {
            id: '04',
            escola: 'EMEF Joaquim Nabuco',
            bairro: 'Centro',            
          },
          {
            id: '05',
            escola: 'EMEF Jornalista Deogar Soares',
            bairro: 'Centro',
          }
        ],
        currentStatus: null,
      }
    },
    
   

  };
</script>
<style></style>
