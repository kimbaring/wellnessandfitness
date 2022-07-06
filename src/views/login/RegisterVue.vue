<template>
<div id="main_area">
    <div class="wrapper">
        <div class="main_con">
            <main>
                <div class="form_con">
                    <h1>Register</h1>
                    <input v-model="userInput.username" placeholder="Username">
                    <input v-model="userInput.email" placeholder="Email">
                    <input v-model="userInput.password" placeholder="Password" type="password">
                    <input v-model="userInput.cnfpassword" placeholder="Confirm Password" type="password">
                    <div class="check"><input type="checkbox" v-model="userInput.agree"> <span>Agree to <router-link to="">Terms & Conditions</router-link> & <router-link to="/">Privacy Policy</router-link></span></div>
                    <button @click="submit">Register</button>
                    <router-link to="/login">Already registered? Sign in here</router-link>
                </div>
            </main>
        </div>
    </div>
</div>
</template>

<script>
import firebase from '@/firebase.config.js';
import { validateForm } from '@/functions.js';
import { collection } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default({
    data(){
        return{
            userInput:{}
        }
    },
    methods:{
        validErrMsg(err,v){
            let errmsg = '';
            if(err=='invalid_length_min' || err=='invalid_length_max'){
                switch(v){
                    case 'username': errmsg = 'Username has to have 6 to 20 characters long!';break;
                    case 'password': errmsg = 'Password has to have 6 to 20 characters long!';break;
                }
            }else if(err='values_not_match'){
                errmsg = 'Passwords do not match!';
            }
        },

        submit(){
            const valid = validateForm(this.userInput,{
                username:{
                    isRequired: true,
                    minChars:6,
                    maxChars:20,
                    callback:err=>validErrMsg(err)
                },
                email:{
                    isEmail: true,
                    isRequired: true,
                    callback:err=>validErrMsg(err)
                },
                password:{
                    isRequired: true,
                    minChars:6,
                    maxChars:20,    
                    callback:err=>validErrMsg(err)
                },
                cnfpassword:{
                    equalTo: this.userInput.password,
                    callback:err=>validErrMsg(err)
                }
            });

            const auth = getAuth(firebase);
            createUserWithEmailAndPassword(auth, this.userInput.email, this.userInput.password)
            .then((userCredential) => {
                alert(userCredential.user);
            }).catch((error) => {
                alert(error);
            });

        }
    }
});

</script>

<style scoped>
#main_area{height:100vh;background: url(../../assets/images/login-bkg.jpg);background-size: cover;}
.form_con{width: 400px;margin: 0 auto;padding:30px;border-radius: 20px;box-shadow: 0 0 5px #aaa;text-align: center;position: fixed;top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%);max-height: 100vh;background: #fff;}
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