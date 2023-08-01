let username = document.getElementById("username");
let password = document.getElementById("password");
let flag=1;

function validateFrom() {
    if (username.value === "") {
        document.getElementById("usererror").innerHTML = "User Name Is Empty"
        flag=0;

    }
    else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML = "Minimum 3 Characters Required"
   flag=0;
    }
    else{
        document.getElementById("usererror").innerHTML = "";
flag=1;
    }

    if (password.value === "") {
        document.getElementById("passerror").innerHTML = "User Password Is Empty"
flag=0;
    }
    else if(username.value.length < 3 || password.value === "")
    {
        document.getElementById("passerror").innerHTML = ""
        flag=0;
    }
    else{
        document.getElementById("passerror").innerHTML = "";
        flag=1;
    }
if(flag){
    return true;
}
else
{
    return false;

}
}
