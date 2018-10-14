<template>
<div class="register__wr">
    <div class="register">
        <el-input
            class="register__input"
            placeholder="User Name"
            v-model="userName"
        ></el-input>
        <el-input
            class="register__input"
            placeholder="Email"
            v-model="email"
        ></el-input>
        <el-input
            class="register__input"
            placeholder="Password"
            v-model="password"
        ></el-input>
        <el-input
            class="register__input"
            placeholder="Confirm Password"
            v-model="confirmPassword"
        ></el-input>
        <el-input
            class="register__input"
            placeholder="Name"
            v-model="name"
        ></el-input>
        <el-input
            class="register__input"
            placeholder="Surname"
            v-model="surname"
        ></el-input>
         <el-button 
            class="register__button" 
            type="primary" 
            round

            @click="signUp"
        >
            Sign up
        </el-button>
    </div>
</div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      surname: ""
    };
  },

  methods: {
    signUp() {
      // const HTTP = axios.create({
      //   baseURL: "http://localhost:8080"
      //   // headers: {
      //   //   Authorization: 'Basic c3RyaW5nOnN0cmluZw==',
      //   // },
      // });
      // HTTP.post("/music-collection/register", {
      //   body: {
      //     userName: "string",
      //     password: "string",
      //     email: "string",
      //     name: "string",
      //     surname: "string"
      //   }
      // })
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(e => {
      //     console.log("error", e);
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__input {
    padding-bottom: 15px;
  }

  &__button {
    width: 100%;
  }

  &__wr {
  }
}
</style>
