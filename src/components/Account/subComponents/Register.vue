<template>
  <div class="login">
    <div class="my_register">
      <div class="login_font">注册</div>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.initial_money" placeholder="请输入初始金额"/>
        </el-form-item>
        <el-button type="primary" style="font-size: medium; width: 20vw;" @click="submitForm()"
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
        initial_money: 10000,
      },
      successFlag: 'ok',
      failFlag: 'no',
    }
  },
  methods: {
    submitForm() {

      axios({
            method: 'post',
            url: 'http://localhost:5173/api/register/',
            data: {
              //传入变量
              username: this.form.username,
              password: this.form.password,
              initial_money: this.form.initial_money,
            }
          }
      )
          .then((res) => {
            console.log(res)
            if (res.data.code === this.successFlag) {
              this.$message.success('注册成功');
              this.$router.push('/account/login');
            } else if (res.data.code === this.failFlag) {
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
  background: url("../images/bk1.jpg");
  background-attachment: fixed;
  background-size: 100%;
  position: relative;
}

.my_register {
  width: 26vw;
  height: 40vh;
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

</style>