<template>
  <div>
    <base-header
      type="gradient-warning"
      class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center"
    />
    <div class="col-12 order-xl-1 mt-sm--5 mt-md--4 mt-lg--7 mt--5">
      <card shadow type="secondary">
        <div slot="header" class="bg-white border-0">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Relatórios</h3>
            </div>
          </div>
        </div>
        <tabs>
          <tab-pane title="Escola">
            <school-all-data-table
              :title="schoolTitle"
              :tableData="schoolData"
              base-resource="reports"
              :repository="reportRepository"
              @refetchQuery="setSchoolData()"
            />
          </tab-pane>
          <tab-pane title="Violência">
            <violence-all-data-table
              :title="violenceTitle"
              :tableData="violenceData"
              base-resource="reports"
              :repository="reportRepository"
              @refetchQuery="setViolenceData()"
            />
          </tab-pane>
          <tab-pane title="Bairro">
            <neighborhood-all-data-table
              :title="neiborhoodTitle"
              :tableData="neighborhoodData"
              base-resource="reports"
              :repository="reportRepository"
              @refetchQuery="setNeighborhoodData()"
            />
          </tab-pane>
        </tabs>
      </card>
    </div>

    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "../../repositories/repositoryFactory";
import SchoolAllDataTable from "../Tables/Reports/SchoolAllDataTable";
import ViolenceAllDataTable from "../Tables/Reports/ViolenceAllDataTable";
import NeighborhoodAllDataTable from "../Tables/Reports/NeighborhoodAllDataTable";

export default {
  name: "Reports",
  components: {
    SchoolAllDataTable,
    ViolenceAllDataTable,
    NeighborhoodAllDataTable,
  },
  data() {
    return {
      reportRepository: RepositoryFactory.get("reports"),
      schoolTitle: "",
      violenceTitle: "",
      neiborhoodTitle: "",
      schoolData: [],
      violenceData: [],
      neighborhoodData: [],
    };
  },
  methods: {
    async setSchoolData() {
      const id = 2;
      const { data } = await this.reportRepository.listSchoolAllData(id);
      this.schoolData = [];
      this.schoolTitle = "Escola " + data.data.nameUser;
      this.schoolData = data.data.violenceList;
    },
    async setViolenceData() {
      const id = 3;
      const { data } = await this.reportRepository.listViolenceAllData(id);
      this.violenceTitle = "Violência - "+ data.data.name;
      this.violenceData = data.data.userList;
      console.log(data.data);
    },
    async setNeighborhoodData() {
      const id = 2;
      const { data } = await this.reportRepository.listNeighborhoodAllData(id);
      this.neighborhoodData = data.data.userList;
      this.neiborhoodTitle = "Bairro - "+data.data.neighborhood;
      // console.log(data);
    },
  },
  async created() {
    await this.setSchoolData();
    await this.setViolenceData();
    await this.setNeighborhoodData();
  },
  mounted() {},
};
</script>
<style></style>
