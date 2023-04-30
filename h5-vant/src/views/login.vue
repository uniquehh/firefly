<template>
  <div class="hn-login-main">


    <div class="hn-login-form">
      <div class="hn-login-cont">
        <div class="hn-login-logo">
          <img class="hn-login-lgimg" src="../assets/img/loginbg1.jpg">
        </div>
        <van-form @submit="submitForm">
          <van-field
            v-model="loginForm.userName"
            class="hn-login-inp"
            name="账号"
            label="账号"
            placeholder="请输入账号"
            label-width="32"
            colon
          />
          <van-field
            v-model="loginForm.password"
            class="hn-login-inp"
            label-width="32"
            colon
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
          />
          <van-button class="hn-lg-btn" block type="info" native-type="submit">登&nbsp;录</van-button>
        </van-form>
      </div>

    </div>


  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        password: "",
      },
    }
  },
  mounted() {

  },
  methods: {
    ...mapMutations('user',['stSetUserInfo','stSetIsLogin']),
    // login
    submitForm() {
      if(this.isEmpty(this.loginForm.userName)){
        this.$toast('请输入账号')
        return
      }
      if(this.isEmpty(this.loginForm.password)){
        this.$toast('请输入密码')
        return
      }

      this.request('/auth/login', {
        account: this.loginForm.userName,
        password: this.$md5(this.loginForm.password),
      }, 'post').then((res) => {
        if(res.code==0&&res.data.userBlock){
          this.hnMsgBox("该用户已被禁止登录，您可以联系管理员解除！")
          return
        }else if(res.code==0&&!res.data.userBlock){
          this.stSetUserInfo(res.data)
          this.stSetIsLogin(true)
          this.hnRouterRep("/")
        }
      })

    },
  }
}
</script>

<style scoped lang="less">
.hn-login-main{
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/src/assets/img/loginbg2.jpg');
  padding-top: 100px;
}
.hn-login-form{
  box-sizing: border-box;
  width: 350px;
  margin: 0 auto;
}
.hn-login-cont{
  width: 240px;
  margin: 0 auto;
}
.hn-login-logo{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.hn-login-lgimg{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.hn-login-inp{
  background-color: rgba(64, 158, 255, 0.6);
  margin-bottom: 20px;
  border-radius: 4px;
  color: white;
  ::v-deep .van-field__label{
    color: white;
  }
  ::v-deep input::placeholder{
    color: rgba(255, 255, 255, 0.9);
  }
  ::v-deep .van-field__control{
    color: white;
  }
}
::v-deep .van-cell::after{
  border-bottom: none;
}

.hn-lg-btn{
  background-color: #1989FA;
  border: none;
  color: white;
  border-radius: 4px;
  font-weight: bold;
}
</style>