function account(){
var user=document.getElementById("user").value;
var pass=document.getElementById("pass").value;
var mail=document.getElementById("mail").value;
var confirm=document.getElementById("confirm").value;
var result=document.getElementById("result");
if(user=="" &&mail=="" &&pass=="" &&confirm==""){
    result.innerHTML="please insert data";
    return false
}
else if(user.length<5||user.length>15){
    result.innerHTML="please insert at least 5-15 characters"
    return false
}
else if(mail.indexOf("@")==-1){
    result.innerHTML="please enter valid email";
    return false
}
else if(pass<=8){
    result.innerHTML="please insert at least 8 characters in password"
    return false
}
else if(pass=!confirm){
    result.innerHTML="please matched password"
    return false
}
else{
    return true
}
}