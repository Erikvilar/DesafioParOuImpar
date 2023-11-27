window.addEventListener("load", function(){



 document.getElementById("btnLogin").addEventListener("click", loginA);

function loginA(){
   
var user = document.getElementById('user');
var pwd = document.getElementById('pwd');

if(!user.value){
    alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/interrogation.png", 30, "");
}
else if(!pwd.value){
    alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/interrogation.png", 30, "");
}else{
    loginVal(user.value, pwd.value);
    }
}

function loginVal(user, pwd){
    if(typeof(Storage) != "undefined"){
       var usuarios = localStorage.getItem('usuarios');
       if(!usuarios){
        alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/interrogation.png", 30, "");
       }
       else{
        var usuarios = JSON.parse(usuarios);
        var find = false;
        for(i=0; i<usuarios.length; i++)
        if(usuarios[i].nome == user && usuarios[i].senha == pwd){ 
            find = true;
            break;
        }
        if(find) window.open("jogo.html","_self");
        else{
            alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/interrogation.png", 30, "");
        }
       }
    }
   
}






});






