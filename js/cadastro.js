window.addEventListener("load",function () {

    document.getElementById("btnNewUser").addEventListener("click", validar);
   
      
  

    function validar() {
        user = document.getElementById("user");
        pwd = document.getElementById("pwd");
        confPwd = document.getElementById("confPwd");

        if (!user.value) {
          
            alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/interrogation.png", 30, "");
        }
        else if (!pwd.value) {
           
            alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/interrogation.png", 30, "");
        }
        else if (!confPwd.value) {
          
            alertWifi(`Confirmar senha em branco. Informe uma senha`, false, 0, "img/interrogation.png", 30, "");
        }
        else if (pwd.value != confPwd.value) {
            alertWifi(`Senha e confirmar senha diferentes. Tente novamente!`, false, 1, "img/interrogation.png", 30, "");
        }
        else insertNew(user.value, pwd.value);
    }

    function insertNew(user, pwd) {
        var usuario = {nome:user, senha:pwd};
        
        var usuarios = localStorage.getItem("usuarios");

        if (!usuarios) {
            usuarios = [usuario];
            localStorage.setItem("usuarios",JSON.stringify(usuarios));

            alertWifi(`Cadastro realizado!`, false, 0, "img/heart.png", 30, "");
        }
        else if (insertCad(user)) {
            usuarios = JSON.parse(usuarios);
            usuarios.push(usuario);
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
      
            alertWifi(`Cadastro Realizado!`, false, 0, "img/heart.png", 30, "");
        }
        else  {
            
            alertWifi(`Esse usuário já existe. Tente outro!`, false, 0, "img/interrogation.png", 30, "");
        }
    }

   
    function insertCad(user) {
        var usuarios = localStorage.getItem("usuarios");
        usuarios = JSON.parse(usuarios);
        var found = false;
        for (i=0; i<usuarios.length; i++)
            if (usuarios[i].nome == user) {
                found = true;
                break;
            }
        return !found
    }

    
});

