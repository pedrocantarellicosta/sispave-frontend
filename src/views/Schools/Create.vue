<template>
  <div>
    <base-header
      type="gradient-warning"
      class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center"
    />
    <div class="row col-12 d-flex justify-content-center">
      <div class="col-lg-6 col-md-12 col-sm-12 mt--7 ">
        <card shadow type="secondary">
          <div slot="header" class="bg-white border-0">
            <div class="row align-items-center">
              <div class="col-8">
                <h3 class="mb-0">Criar Escola</h3>
              </div>
              
            </div>
          </div>
          <template>
            <form @submit.prevent>
              <div class="pl-lg-4 ">
                <div class="row">
                  <div class="col-lg-12">
                    <base-input
                      alternative
                      label="Escola"
                      placeholder="Digite nome da escola"
                      input-classes="form-control-alternative"
                      v-model="escola"
                    />
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-12">
                  <v-select
                      required
                      class="bg-white"
                      :options="bairro"
                      v-model="bairro.selected"
                      label="name"
                      placeholder="Selecione o bairro"
                    />
                  </div>
                </div>
              </div>
              <div class="row d-flex justify-content-end">
                <base-button
                  class="mt-3 mr-3"
                  type="primary"
                  @click="addSchool"
                >Salvar</base-button>
              </div>
            </form>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { AlertBuilder } from '@/services/AlertBuilder';

export default {
  data() {
    return {
        escola: "",
        bairro: [
          {name:"Colônia"},
          {name:"Barragem"},
          {name:"Fragata"},
          {name:"Três Vendas"},
          {name:"Areal"},
          {name:"São Gonçalo"},
          {name:"Centro"},
          {name:"Laranjal"}
          
        ],
    };
  },
  methods:{
    async addSchool(){
      try {
        const escola = this.escola;
        const bairro = this.bairro.selected.name;
        
        await this.schoolRepository.create({ escola, bairro });
        
        this.$swal(
          new AlertBuilder()
            .buildDefault('toast')
        );

        return this.$router.push('/escolas');

      } catch(err) {
        console.log(err);
        this.$swal(
          new AlertBuilder()
            .buildDefault('toast')
            .setType('error')
            .setText('Error')
        )
      }
    }
  }
};
</script>

<style>
</style>