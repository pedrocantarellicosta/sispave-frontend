<template>
  <div>
    <base-header
      type="gradient-warning"
      class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center"
    />
    <div class="row col-12 d-flex justify-content-center">
      <div class="col-lg-8 col-md-12 col-sm-12 mt--7">
        <card shadow type="secondary">
          <div slot="header" class="bg-white border-0">
            <div class="row align-items-center">
              <div class="col-lg-8 col-md-12 col-sm-12">
                <h3 class="mb-0">Adicionar Relato</h3>
              </div>
            </div>
          </div>
          <template>
            <form @submit.prevent>
              <div class="pl-lg-4">
                <div class="row">

                  <div class="col-lg-12" v-for="({ id, name }, index) in violences" :key="id">
                    <base-checkbox class="mb-3" v-model="violences[index].checked">{{name}}</base-checkbox>
                  </div>

                  <div class="col-lg-12">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="description"
                      placeholder="Digite uma descrição..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="row d-flex justify-content-end">
                <base-button class="mt-3 mr-3" type="primary" @click="addInfraction">Salvar</base-button>
              </div>
            </form>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { AlertBuilder } from "../../services/AlertBuilder";
import { RepositoryFactory } from "../../repositories/repositoryFactory";
export default {
  data() {
    return {
      violencesRepository: RepositoryFactory.get("violences"),
      infractionRepository: RepositoryFactory.get("infractions"),
      violences: [],
      description: "",
    };
  },
  async created() {
    console.log()
    const { data } = await this.getAllViolences();
    data.map((violence) => {
      this.violences.push(Object.assign({ checked: false }, violence));
    });
  },
  methods: {
    async addInfraction() {
      try {
        const violences = [];
        this.violences.forEach(violence => {
          if(violence.checked) violences.push(violence.id); 
        }); 
        let data = new Date();
        const formatYmd = date => date.toISOString().slice(0, 10);
        data = formatYmd(data); 

        
        const dados = {
          description: this.description,
          violences,
          date: data
        } 

        if (!dados.description || !dados.violences.length){
          this.$swal(
            new AlertBuilder()
              .buildDefault("toast")
              .setType("error")
              .setText("Faltam dados para serem enviados")
          );
          return
        }
        
        await this.infractionRepository.create(dados);

        this.$swal(new AlertBuilder()
              .buildDefault("toast")
              .setType("success")
              .setText("Dados Salvos com sucesso")
        );

        return this.$router.push("/dashboard");
      } catch (err) {
        console.log(err);
        this.$swal(
          new AlertBuilder()
            .buildDefault("toast")
            .setType("error")
            .setText("Error")
        );
      }
    },
    async getAllViolences() {
      try {
        const { data } = await this.violencesRepository.listAll();

        return data;
      } catch (err) {
        this.$swal(
          new AlertBuilder()
            .buildDefault("toast")
            .setType("error")
            .setText("Erro ao tentar pegar tipos de violência")
        );
      }
    },
  },
};
</script>

<style>
</style>