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
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
    <div
      class="login-background"
      :style="{'background': 'url(' + require('@/assets/login/sign-in-background.png') + ')'}"
    ></div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
    };
  },
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
