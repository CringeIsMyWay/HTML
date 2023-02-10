"use script"


let users = [
    {
        "pl" : "admin",
        "lg" : "admin",
        "pw" : "admin",
        "name" : "Gutov"
    },
    {
        "pl" : "user",
        "lg" : "jumbo",
        "pw" : "123123",
        "name" : "Obama"
    }
];

let flogin = document.querySelector(".form-login")
let flg = document.querySelector("#lg")
let fpw = document.querySelector("#pw")
let fbtl = document.querySelector("#btl")
let fnm = document.querySelector("#nm")
let fmes = document.querySelector("#mes")
let fbtr = document.querySelector("#btr")
let nameReg = document.querySelector(".nameReg")
let fbbt = document.querySelector("#bbt")
let main = document.querySelector(".main-page")
let admin = document.querySelector(".admin-page")


function role(role){
    if(role == "user")
    {
        main.setAttribute('style', 'display: block;');
    }
    else if (role == "admin")
    {
        admin.setAttribute('style', 'display: block;');
    }
}

fbtr.addEventListener("click",registr);

function registr(){
    
    if(nameReg.getAttribute("style") == 'display: none;')
    {
        
        fbtr.setAttribute('value', 'Back')
        fbtl.setAttribute('style', 'display: none;');
        nameReg.setAttribute('style', 'display: block;');
        fnm.setAttribute('type','text');
        fbbt.setAttribute('style', 'display: block;')
        console.log("++");
    }
    else
    {
        fbtr.setAttribute('value', 'Registration')
        fbtl.setAttribute('style', 'display: block;');
        nameReg.setAttribute('style', 'display: none;');
        fnm.setAttribute('type','hidden');
        fbbt.setAttribute('style', 'display: none;')
        console.log("+--");
    }
}

fbtl.addEventListener("click", avtoriz);

function avtoriz() {
    
    let lg = flg.value;
    let pw = fpw.value;
    for (const user of users){
        
        if(user.lg == lg && user.pw == pw)
        {
            flogin.setAttribute('style', 'display: none;')
            fmes.innerHTML = "YES"
            role(user.pl)
            break;
            
        }
        else
        {
            fmes.innerHTML = "Unknown User"
        }
    }
}

fbbt.addEventListener("click", Reg);
function Reg(){
    let lg1 = flg.value;
    let pw2 = fpw.value;   
    let nm1 = fnm.value;
        for (const user of users)
        {
            users.push(
            {
                pl : "user",
                lg : lg1,
                pw : pw2,
                name : nm1             
            })
            break;
        }
         fmes.innerHTML = "Вы зарегестрированны"
         
}