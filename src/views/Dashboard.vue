<template>
  <div>
    <base-header type="gradient-warning" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Violência mais relatada"
            type="gradient-red"
            :sub-title=violenceMoreRelated
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-nowrap">Último mês</span>
            </template>
          </stats-card>
        </div>
        
        
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total de relatos"
            type="gradient-orange"
            :sub-title=numberAllReports
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-nowrap">Último mês</span>
            </template>
          </stats-card>
        </div>
        
        
        <div class="col-xl-3 col-lg-6" v-if="isManager">
          <stats-card
            title="Escola com mais relatos"
            type="gradient-green"
            :sub-title=userWithMoreReports
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-nowrap">Último mês</span>
            </template>
          </stats-card>
        </div>
        
        
        <div class="col-xl-3 col-lg-6" v-if="isManager">
          <stats-card
            title="Bairro com mais relatos"
            type="gradient-info"
            :sub-title=neighborhoodWithMoreReports
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-nowrap">Último mês</span>
            </template>
          </stats-card>
        </div>


      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7" v-if="isManager">
      <div class="row">
        <!--Tables-->
        <div class="col-xl-12 mb-5 mb-xl-0">
          <school-infractions-table
            title="top 5"
            :tableData="top5UsersWithMoreReports"
            base-resource="schools"
            :repository="dashboardRepository"
            @refetchQuery="setTableData(currentPage)"
          ></school-infractions-table>
        </div>
        <!--End tables-->
      </div>
    </div>
  </div>
</template>
<script>
// Charts
import { RepositoryFactory } from '../repositories/repositoryFactory';
import { mapGetters } from 'vuex'
import SchoolInfractionsTable from "./Dashboard/SchoolInfractionsTable";

export default {
  components: {
    SchoolInfractionsTable,
  },
  data() {
    return {
     dashboardRepository: RepositoryFactory.get('dashboard'),
     neighborhoodWithMoreReports:"",
     numberAllReports: "",
     userWithMoreReports:"",
     violenceMoreRelated:"",
     top5UsersWithMoreReports:[],
    };
  },
  methods: {
    async getData(){
      const {
        data: { data },
      } = await this.dashboardRepository.show();
      
      this.neighborhoodWithMoreReports = data.neighborhoodWithMoreReports[0].neighborhood;
      this.numberAllReports = data.numberAllReports.toString();
      this.userWithMoreReports = data.userWithMoreReports[0].name;
      this.violenceMoreRelated = data.violenceMoreRelated[0].name;
      this.top5UsersWithMoreReports = data.top5UsersWithMoreReports;

    }
  },
  computed:{
    ...mapGetters([
            'user',
            'isManager',
            'isSchool'
        ])
  },
  async created() {
    await this.getData();
  },
  
};
</script>
<style></style>
