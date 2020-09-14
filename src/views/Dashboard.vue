<template>
  <div>
    <base-header type="gradient-warning" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6" v-if="isManager">
          <stats-card
            title="Violência mais relatada"
            type="gradient-red"
            :sub-title="violenceMoreRelated"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >

          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6" v-if="isManager">
          <stats-card
            title="Total de relatos"
            type="gradient-orange"
            :sub-title="numberAllReports"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6" v-if="isManager">
          <stats-card
            title="Escola com mais relatos"
            type="gradient-green"
            :sub-title="userWithMoreReports"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6" v-if="isManager">
          <stats-card
            title="Bairro com mais relatos"
            type="gradient-info"
            :sub-title="neighborhoodWithMoreReports"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6" v-if="isSchool">
          <stats-card
            title="Total de Relatos"
            type="gradient-yellow"
            :sub-title="totalReports"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6" v-if="isSchool">
          <stats-card
            title="Data do último Relato"
            type="gradient-blue"
            :sub-title="dateOffLastReport"
            icon="ni ni-calendar-grid-58"
            class="mb-4 mb-xl-0"
          >
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6" v-if="isSchool">
          <stats-card
            title="Violência mais frequente"
            type="gradient-red"
            :sub-title="mostFrequentViolence"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
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

    <div class="container-fluid mt--7" v-if="isSchool">
      <div class="row">
        <!--Tables-->
        <div class="col-xl-12 mb-5 mb-xl-0">
          <school-top-violence-table
            title="top 5"
            :tableData="schoolViolenceList"
            base-resource="schools"
            :repository="dashboardRepository"
          ></school-top-violence-table>
        </div>
        <!--End tables-->
      </div>
    </div>
  </div>
</template>
<script>
// Charts
import { RepositoryFactory } from "../repositories/repositoryFactory";
import { mapGetters } from "vuex";
import SchoolInfractionsTable from "./Dashboard/SchoolInfractionsTable";
import SchoolTopViolenceTable from "./Dashboard/SchoolTopViolenceTable";

export default {
  components: {
    SchoolInfractionsTable,
    SchoolTopViolenceTable,
  },
  data() {
    return {
      dashboardRepository: RepositoryFactory.get("dashboard"),
      reportsRepository: RepositoryFactory.get("reports"),
      neighborhoodWithMoreReports: "",
      numberAllReports: "",
      userWithMoreReports: "",
      violenceMoreRelated: "",
      top5UsersWithMoreReports: [],

      schoolViolenceList: [],
      totalReports:"",
      dateOffLastReport: "",
      mostFrequentViolence: "",
    };
  },
  methods: {
    async getDataManager() {
      const {
        data: { data },
      } = await this.dashboardRepository.show();

      this.neighborhoodWithMoreReports =
        data.neighborhoodWithMoreReports[0].neighborhood;
      this.numberAllReports = data.numberAllReports.toString();
      this.userWithMoreReports = data.userWithMoreReports[0].name;
      this.violenceMoreRelated = data.violenceMoreRelated[0].name;
      this.top5UsersWithMoreReports = data.top5UsersWithMoreReports;
    },
    async getDataSchool() {
      const {
        data: { data },
      } = await this.reportsRepository.listSchoolAllData(38);
      this.schoolViolenceList = data.violenceList;
      this.totalReports = data.totalReports.toString();
      this.dateOffLastReport = this.formatDate(data.dateOffLastReport.date);
      this.mostFrequentViolence = this.schoolViolenceList[0].name;
    },
    formatDate (input) {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1], day = datePart[2];

        return day+'/'+month+'/'+year;
      }
  },
  computed: {
    ...mapGetters(["user", "isManager", "isSchool"]),
  },
  async created() {
    if (this.isManager) await this.getDataManager();
    else await this.getDataSchool();
  },
};
</script>
<style></style>
