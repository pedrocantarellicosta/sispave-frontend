<template>
  <div>
    <base-header
      type="gradient-warning"
      class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center"
    />
    <div class="container-fluid mt-sm--5 mt-md--4 mt-lg--7 mt--5">
      <div class="row">
        <div class="col">
          <infractions-table
            :title="name"
            :tableData="infractions"
            base-resource="infractions"
            :repository="infractionsRepository"
            @refetchQuery="setTableData(currentPage)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import InfractionsTable from "../Tables/InfractionsTable";
import { RepositoryFactory } from "../../repositories/repositoryFactory";

export default {
  name: "infractions",
  components: {
    InfractionsTable,
  },
  data() {
    return {
      infractionsRepository: RepositoryFactory.get("infractions"),
      authRepository: RepositoryFactory.get("auth"),
      reportsRepository: RepositoryFactory.get("reports"),
      user: null,
      name: "Relatos",
      infractions:[],
      currentStatus: null,
    };
  },
  
  methods: {
    ...mapActions(["setPages"]),
    async setTableData(id) {
      const {
        data,
      } = await this.reportsRepository.listSchool(id);
      this.infractions = data.data.reportList;
    },
  },
  async mounted(){
    
  },
  computed: {
    ...mapGetters(["currentPage"]),
  },
  async created() {
    const { data } = await this.authRepository.me();
    this.user = data.user;
    
    await this.setTableData(this.user.id);
  },
};
</script>
<style></style>
