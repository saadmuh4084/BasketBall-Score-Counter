let scHome=document.getElementById("schome");
let scGuest=document.getElementById("scguest");
let scorehome=0
let scoreguest=0

function add1home(){
    scorehome+=1
    scHome.textContent=scorehome
}
function add2home(){
    scorehome+=2
    scHome.textContent=scorehome
}   
function add3home(){
    scorehome+=3
    scHome.textContent=scorehome
}   

function add1guest(){
    scoreguest+=1
    scGuest.textContent=scoreguest
}
function add2guest(){
    scoreguest+=2
    scGuest.textContent=scoreguest
}   
function add3guest(){
    scoreguest+=3
    scGuest.textContent=scoreguest
}   

function reset(){
    scHome.textContent=0
    scGuest.textContent=0
    scorehome=0
    scoreguest=0
    
}
