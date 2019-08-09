<template>
  <section class="aui-scrollView">

		<div class="aui-account-title">
			<h1>账号登录</h1>
		</div>

		<div class="aui-account-input">
			<div class="b-line">
				<input type="text" id="login_phone" v-model="username" >
				<!-- <label class="err err-top40" id="login_phone_text" style="display: block;">手机号不能为空</label> -->
			</div>
			<div class="">
				<input type="text" id="login_password" v-model="password">
				<!-- <label class="err err-top40" id="login_password_text" style="display: block;">密码不能为空</label> -->
			</div>
		</div>
		<div class="aui-account-button">
			<button id="login_submit" @click="login">登录</button>
			<!-- <router-link  id="login_submit">登录</router-link> -->

		</div>
		<div class="aui-account-link">
             <!-- <router-link to="/reg">注册账号</router-link> -->
			<a href="javascript:;" @click="goreg">注册账号</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
			<a href="javascript:;">忘记密码</a>
		</div>

		<div class="aui-account-footer">
			<div class="aui-account-footer-title">
				<h2>其它登录方式</h2>
			</div>
			<div class="aui-palace">
				<a href="javascript:;" class="aui-palace-grid">
					<div class="aui-palace-grid-icon">
						<img src="../assets/img/login/wx.png" alt="">
					</div>
					<div class="aui-palace-grid-text">
						<h2>微信</h2>
					</div>
				</a>
				<a href="javascript:;" class="aui-palace-grid">
					<div class="aui-palace-grid-icon">
						<img src="../assets/img/login/wb.png" alt="">
					</div>
					<div class="aui-palace-grid-text">
						<h2>微博</h2>
					</div>
				</a>
				<a href="javascript:;" class="aui-palace-grid">
					<div class="aui-palace-grid-icon">
						<img src="../assets/img/login/qq.png" alt="">
					</div>
					<div class="aui-palace-grid-text">
						<h2>QQ</h2>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
      mess:''
    }
  },
  methods:{
    login(){
      axios({
        url:'/api/login',
        method:'post',
        data:{username:this.username,password:this.password}
      }).then(
        res => {
          console.log(res.data);
          if(res.data.err===0){
            console.log(123)
            // this.$cookies.set("newsapp_user_session",res.data.data._id); //存cookies
            this.$router.push('/user')
          }else{
            this.mess = res.data.msg
          }
        }
      )
    },
    goreg(){
        this.$router.push('/reg')
    }
  }
}
</script>

<style>
.aui-scrollView {
  background: url('../assets/img/login/bg.png') no-repeat;
    width: 100%;
    height: 42rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
}
.aui-account-title {
    padding: 6rem 0 2rem 5rem;
}
.aui-account-title h1 {
    color: #ffffff;
    font-size: 1.4rem;
}
.aui-account-input {
    width: 91%;
    background: #fff;
    border-radius: 2px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0;
}
.aui-account-input div {
    position: relative;
}
.aui-account-input input {
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    color: #333;
    border: none;
    width: 100%;
}
.err {
    display: none;
    position: absolute;
    right: 0.5rem;
    top: 0.7rem;
    font-size: 0.75rem;
    background: #ffe6eb;
    border-radius: 3px;
    padding: 0.1rem 0.5rem;
    color: #ff6969;
}
.aui-account-input div {
    position: relative;
}
.aui-account-input input {
    height: 2.8rem;
    line-height: 2.8rem;
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    color: #333;
    border: none;
    width: 100%;
}
.err {
    display: none;
    position: absolute;
    right: 0.5rem;
    top: 0.7rem;
    font-size: 0.75rem;
    background: #ffe6eb;
    border-radius: 3px;
    padding: 0.1rem 0.5rem;
    color: #ff6969;
}
.aui-account-button {
    width: 91%;
    margin: 15px auto;
    overflow: hidden;
    padding: 0.6rem 0;
    background-color: rgba(3,106,104,0.7);
    text-align: center;
}
.aui-account-button button {
    color: rgba(255,255,255,0.8);
    text-align: center;
    border: none;
    background: none;
    display: block;
    width: 100%;
    font-size: 0.85rem;
}
.aui-account-link {
    padding-top: 0.5rem;
    text-align: center;
}
.aui-account-link a {
    color: #fff;
    font-size: 0.85rem;
}
.aui-account-footer {
    position: absolute;
    left: 50%;
    width: 100%;
    margin-left: -50%;
    bottom: 0;
}
.aui-account-footer .aui-palace {
    width: 60%;
    margin: 0 auto;
    padding: 1.5rem 0 2rem 0;
        display: flex;
}
.aui-account-footer-title h2 {
    text-align: center;
    color: #fff;
    font-weight: normal;
    font-size: 0.85rem;
    position: relative;
}
.aui-account-footer .aui-palace {
    width: 60%;
    margin: 0 auto;
    padding: 1.5rem 0 2rem 0;
}
.aui-account-footer .aui-palace-grid {
    width: 33.333%;
}
.aui-account-footer .aui-palace-grid-icon {
    width: 23px;
    height: 23px;
}
.aui-palace-grid-text {
    display: block;
    text-align: center;
    color: #333;
    font-size: 0.85rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-top: 0.2rem;
        color: #fff;
}
.aui-palace-grid-icon img {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    margin-left: 1.5rem; 
}
#login_phone{
  border-bottom: 0.01rem solid #000;
}
</style>




