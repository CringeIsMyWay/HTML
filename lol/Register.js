"use strict";
var users = JSON.parse(localStorage.getItem('users'));

const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;


let LoginPoleLogin = document.querySelector("#PoleDlyaLogina");
let LoginPolePassword = document.querySelector("#PoleDlyaPassword");
let LoginKnopkaEnter = document.querySelector("#EnterButton");
let LoginMessage = document.querySelector(".form__messageSignin");

let RegisterPoleName = document.querySelector("#RegistrPoleName");
let RegisterPoleLogin = document.querySelector("#RegisterPoleLogin");
let RegisterPolePassword = document.querySelector("#RegisterPolePassword");
let RegisterPoleRepeatPassword = document.querySelector("#RegisterPoleRepeatPassword");
let RegisterButton = document.querySelector("#RegistrButton");
let RegisterMessage = document.querySelector(".form__messageSignup");

let L;
let P;

signUpBtn.addEventListener('click',function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click',function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});



let JsUser;

LoginKnopkaEnter.addEventListener('click',json1); 

function json1(json){
fetch('https://dummyjson.com/users')
.then((response) => response.json())
.then((json) => ShowUsers(json));
}

function json1(){

    let Login = LoginPoleLogin.value;
    let Password = LoginPolePassword.value;
    
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: Login,
          password: Password,
        })
      })
    .then((response) => response.json())
    .then((json) => ShowUsers(json));
    }
    
    function ShowUsers(json){
        JsUser = json;
        if (json.message == "Invalid credentials"){
            alert("Неверные данные")
        }
            else
            {
                localStorage.setItem('token',JsUser.token)
                localStorage.setItem('id',JsUser.id)
                document.location.href = "index.html"
            }
    }




RegisterButton.addEventListener('click',Register); 

function Register(json){
    let Name = RegisterPoleName.value;
    let Login = RegisterPoleLogin.value;
    let Password = RegisterPolePassword.value;
    L = RegisterPoleLogin.value;
    P = RegisterPolePassword.value;
    console.log("true")

    fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    firstName: Name,
    username: Login,
    password: Password
  })
})
.then(res => res.json())
.then(console.log);
}