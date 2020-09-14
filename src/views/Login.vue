<template>
  <div class="login-container">
    <div
      class="background-shapes"
    ><img :src="require('@/assets/login/background-shapes.svg')" alt="Logo SISPAVE" /></div>
    <div class="login-content">
      <div class="logo">
        <img :src="require('@/assets/login/logo.svg')" alt="Logo SISPAVE" />
      </div>

      <form action>
        <input placeholder="E-mail" v-model="email"/>
        <input type="password" placeholder="Senha" v-model="password"/>
        <button type="submit" @click="login">Entrar</button>
      </form>
    </div>
    <div
      class="login-background"
      :style="{'background': 'url(' + require('@/assets/login/sign-in-background.png') + ')'}"
    ></div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "login",
  data() {
    return {
      email: "secretaria@gmail.com",
      password: "password",
      error: {
        email: false,
        message_email: "",
        password: false,
        message_password: ""
      }
    }
  },
  methods:{
    /* eslint-disable */ 
    ...mapActions(["logUser"]),
    async login(e) {
      
      if (!this.validLogin()) {
        try {
          await this.logUser({
            email: this.email,
            password: this.password
          });
          this.$router.push("/");
        } catch (err) {
          console.log(err);
          console.log("Email  ou senha invalido");
        }
      }else{
        console.log("Somethings Wrong!")
      }
    },
    validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    /* eslint-enable */

    validLogin() {
      let error = false;
      this.error.email = false;
      this.error.message_email="";
      this.error.password = false;
      this.error.message_password="";

      if (this.email == "") {
        this.error.email = true;
        this.error.message_email = "Email cannot be empty";
        error = true;
      }
      if (this.email !="" && !this.validateEmail(this.email)) {
        
        this.error.email = true;
        this.error.message_email = "Email format is incorrect";
        error = true;
      }
      if (this.password == "") {
        this.error.password = true;
        this.error.message_password = "Password cannot be empty";
        error = true;
      }
      return error;
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: #312f3a;

  display: flex;
  align-items: stretch;
  .background-shapes {
    position: absolute;
		height: 90vh;
    width: 100%;
    max-width: 700px;
		z-index: 1;
		display:flex;

		img{
			/* height: -webkit-fill-available;	  */
			/* object-fit: cover; */
			width:100%;
			flex:1;
		}
		
  }
}
.login-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
  .logo {
    width: 50%;
    img {
      width: 80%;
    }
  }
  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #fff;
      border-radius: 50px;
      border: 2px solid #fff;
      padding: 16px;
      width: 100%;
      color: #333;

      &::placeholder {
        color: 666666;
      }

      & + input {
        margin-top: 8px;
      }
    }
    button {
      background: #f8a031;
      height: 56px;
      border-radius: 50px;
      border: 0;
      padding: 16px;
      width: 80%;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
    }
  }
}

.login-background {
  flex: 1;
  background-size: cover;
}
</style>
