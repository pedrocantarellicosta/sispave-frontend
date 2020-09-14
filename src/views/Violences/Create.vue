<template>
  <div>
    <base-header
      type="gradient-warning"
      class="header pb-8 pt-2 pt-lg-8 d-flex align-items-center"
    />
    <div class="row col-12 d-flex justify-content-center">
      <div class="col-lg-6 col-md-12 col-sm-12 mt--7">
        <card shadow type="secondary">
          <div slot="header" class="bg-white border-0">
            <div class="row align-items-center">
              <div class="col-8">
                <h3 class="mb-0">Criar Tipo de Violência</h3>
              </div>
            </div>
          </div>
          <template>
            <form @submit.prevent>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-12">
                    <base-input
                      alternative
                      label="Tipo de Violência"
                      placeholder="Digite nome do tipo de violência"
                      input-classes="form-control-alternative"
                      v-model="violencia"
                    />
                  </div>
                  <div class="col-lg-12">
                    <base-input
                      alternative
                      label="Sobre"
                      placeholder="Digite descrição do tipo de violência"
                      input-classes="form-control-alternative"
                      v-model="sobre"
                    />
                  </div>
                  <div class="col-lg-12">
                    <base-input
                      alternative
                      label="Link"
                      placeholder="Link de um video explicativo"
                      input-classes="form-control-alternative"
                      v-model="link"
                    />
                  </div>
                </div>
              </div>

              <div class="row d-flex justify-content-end">
                <base-button class="mt-3 mr-3" type="primary" @click="addViolence">Salvar</base-button>
              </div>
            </form>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      violencia: "",
      sobre: "",
      link: "",
    };
  },
  methods: {
    addViolence() {
      console.log("entro");
    },
  },
};
</script>

<style>
</style>