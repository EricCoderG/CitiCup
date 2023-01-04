<template>
  <div class="login">
    <div class="my_login">
      <div class="login_font">注册</div>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码"/>
        </el-form-item>
        <el-button type="primary" style="font-size: medium; width: 20vw" @click="submitForm()"
        >注册
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      successFlag: '200',
      failFlag: '400',
      postUrl: 'http://localhost:8080',
    }
  },
  methods: {
    submitForm() {

      axios({
            method: 'post',
            url: this.postUrl,
            data: {
              //传入变量
              username: this.form.username,
              password: this.form.password,
            }
          }
      )
          .then((res) => {
            console.log(res)
            if (res.status === this.successFlag) {
              this.$message.success('注册成功');
              this.$store.commit('changeLogin')
              this.$router.push('');
            } else if (res.status === this.failFlag) {
              this.$message.error('注册失败');
            }
          })
          .catch((err) => {
            this.$message.error('注册失败');
          })
    },
  },
  name: 'Register',
}
</script>

<style>
.login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  background: url("../images/bk.jpg");
  background-attachment: fixed;
  background-size: 100%;
  position: relative;
}

.my_login {
  width: 26vw;
  height: 34vh;
  position: absolute;
  top: 0;
  left: 55%;
  right: 0;
  bottom: 0;
  background-color: #dde1e3;
  margin: auto;
  padding-top: 4vh;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 2vh;
  opacity: 1;
  box-shadow: #dde1e3 0 0 1vw;
}

.login_font {
  padding-top: 1vh;
  padding-bottom: 2vh;
  font-size: large;
  font-weight: bold;
  color: black;
}

.register_font {
  padding-top: 2vh;
  padding-left: 17vw;
  cursor: pointer;
}

.type_font .el-form-item__label {
  font-size: medium;
  color: black;
}

</style>