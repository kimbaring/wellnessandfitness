<template>
<div id="main_area">
    <div class="wrapper">
        <div class="main_con">
            <main>
                <div class="form_con">
                    <h1>Log In</h1>
                    <input placeholder="Username">
                    <input placeholder="Password">
                    <button>Log In</button>
                    <router-link to="/">Forgot Password?</router-link><br/>
                    <router-link to="/register">Not yet registered? Sign up here</router-link>
                </div>
            </main>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
.form_con{width: 400px;margin: 0 auto;padding:30px;border-radius: 20px;box-shadow: 0 0 5px #aaa;text-align: center;}
.form_con h1{font-family: Karma;font-size: 45px;line-height: 60px;margin-bottom: 20px;}
.form_con input{box-sizing: border-box;width: 100%;padding:15px 20px;margin: 0 0 10px;border:1px solid #aaa;font-family: inherit;font-size: 16px;border-radius: 50px;background: #eee;outline: none;transition: 0.3s;}
.form_con button{box-sizing: border-box;width: 100%;padding:20px 0px;background: #006050;border-radius: 50px;margin: 0 auto;display: block;color:#fff;border: none;transition: 0.3s;font-family: inherit;font-size: 16px;margin-bottom: 20px;}
.form_con button:hover{opacity: 0.7;}
.form_con input:focus{background: #fff;}
.form_con a{color:#444}
.form_con a:hover{text-decoration: underline;}

</style>