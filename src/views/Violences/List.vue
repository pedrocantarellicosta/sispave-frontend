<template>
    <div>
        <base-header type="gradient-warning" class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center" />
        <div class="container-fluid  mt-sm--5 mt-md--4 mt-lg--7 mt--5">
            <div class="row">
                <div class="col">
                    <violence-table
                      :title=name
                      :tableData="violences"
                    />
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
  import { mapActions, mapGetters } from "vuex";
import ViolenceTable from "../Tables/ViolenceTable";
import { RepositoryFactory } from "../../repositories/repositoryFactory";

export default {
  name: "schools",
  components: {
    ViolenceTable,
  },
  data() {
    return {
      violenceRepository: RepositoryFactory.get("violences"),
      name: "Listar Tipos de Violencia",
      violences:[],
      currentStatus: null,
    };
  },
  methods: {
    ...mapActions(["setPages"]),
    async setTableData(page = 1) {
      const {
        data: { data, meta },
      } = await this.violenceRepository.list(page);
      this.violences = data;
      this.setPages(meta);
    },
  },
  computed: {
    ...mapGetters(["currentPage"]),
  },
  watch: {
    async currentPage(page) {
      await this.setTableData(page);
    },
  },
  async created() {
    await this.setTableData();
  },
};
</script>
<style></style>
