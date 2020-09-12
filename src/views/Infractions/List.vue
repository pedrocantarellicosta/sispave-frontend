<template>
    <div>
        <base-header type="gradient-warning" class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center" />
        <div class="container-fluid  mt-sm--5 mt-md--4 mt-lg--7 mt--5">
            <div class="row">
                <div class="col">
                    <violence-table
                      :title=name
                      :tableData="school"
                    />
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
  import ViolenceTable from '../Tables/ViolenceTable'

  export default {
    name: 'schools',
    components: {
      ViolenceTable
    },
    data() {
      return {
        name: "Tipos de Violência",
        school: [
          {
            id: '01',
            escola: 'Violência Fisica',
            about: 'about',
            
          },
          {
            id: '02',
            escola: 'Violência Verbal',
            about: 'about',
          },
          {
            id: '03',
            escola: 'Indisciplina',
            about: 'about',            
          },
           {
            id: '04',
            escola: 'Atos Infracionais',
            about: 'about',            
          },
          {
            id: '05',
            escola: 'Assaltos',
            about: 'about',
          }
        ],
        currentStatus: null,
      }
    },
    
   

  };
</script>
<style></style>
