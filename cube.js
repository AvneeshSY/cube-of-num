getcube = () => {
var num = +document.getElementById("cube").value;
alert("the cube of the value is" + " " + num*num*num);
}

passwordmatch = () =>{
    var a = document.pform.password.value;
    var b = document.pform.repassword.value;

    if(a===b){
        alert("Successful");
    }
    else{
        alert("password not matched");
    }
}

document.getElementById("btn").style.backgroundColor = "red"
document.getElementById("btn").style.padding = "20px"

function change() {
    document.getElementById("btn").style.backgroundColor = "blue";
    

}

function blue(){
    document.getElementById("btn").style.backgroundColor = "red"
}

