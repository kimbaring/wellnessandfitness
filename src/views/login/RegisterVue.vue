<template>
<div id="main_area">
    <div class="wrapper">
        <div class="main_con">
            <main>
                <div class="form_con">
                    <h1>Register</h1>
                    <input placeholder="Username">
                    <input placeholder="Email">
                    <input placeholder="Password" type="password">
                    <input placeholder="Confirm Password" type="password">
                    <div class="check"><input type="checkbox"> <span>Agree to <router-link to="">Terms & Conditions</router-link> & <router-link to="/">Privacy Policy</router-link></span></div>
                    <button>Register</button>
                    <router-link to="/">Forgot Password?</router-link><br/>
                    <router-link to="/login">Already registered? Sign in here</router-link>
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
.form_con input:not([type="checkbox"]){box-sizing: border-box;width: 100%;padding:15px 20px;margin: 0 0 10px;border:1px solid #aaa;font-family: inherit;font-size: 16px;border-radius: 50px;background: #eee;outline: none;transition: 0.3s;}
.form_con input[type="checkbox"]{margin-top: 8px;display: block;}
.form_con button{box-sizing: border-box;width: 100%;padding:20px 0px;background: #006050;border-radius: 50px;margin: 0 auto;display: block;color:#fff;border: none;transition: 0.3s;font-family: inherit;font-size: 16px;margin-bottom: 20px;}
.form_con button:hover{opacity: 0.7;}
.form_con input:focus{background: #fff;}
.form_con a{color:#555; }
.form_con a:hover{text-decoration: underline;}

.check{display: flex;align-items: flex-start;margin: 10px 0;text-align: left;gap:20px}

</style>