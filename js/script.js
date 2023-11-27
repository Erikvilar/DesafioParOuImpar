window.addEventListener("load", function () {
    var time;
    var tempoTela;
    var acertos = 0;
    var erros = 0;
    var contador = 0;
    var par = 0;
    var totalAcertos=0;
    var totalErros =0;
  
   

    
    document.getElementById('num').innerHTML = `Iniciar jogo!`
    

    function randomico() {
        
        num = Math.floor(Math.random() * 100) + 1;
        document.getElementById('num').innerHTML = `${num}`;
        document.getElementById('acertos').innerHTML = `(${acertos}) `;
        document.getElementById('erros').innerHTML = `(${erros})`;
        document.getElementById('num').className = "";
        document.getElementById('num').addEventListener('click', SetColor);

        if (num % 2 === 0) {
            par++;
            document.getElementById('numPares').innerHTML = `(${par})`;
        }
        
    
        
        
        

    }



        function  SetColor() {
           let canclick =true;
         document.addEventListener('click', () => {
  if (canClick) {
    canClick = false;
    setTimeout(() => {
      canClick = true;
    }, 500);
  }
});
    
        var num = parseInt(document.getElementById('num').innerHTML);
        if (num % 2 == 0) {
            document.getElementById('num').classList.add("par");
            document.getElementById('num').classList.remove("impar");
            
            acertos++;
            totalAcertos = acertos;
            updatePorcentagem();
            


        } else {
            document.getElementById('num').classList.add("impar");
            document.getElementById('num').classList.remove("par");
            erros++;
            totalErros = erros;
        }
        
        
    };
    document.getElementById('num').addEventListener('click', SetColor);



    function randomicoTime(intervalo) {

        setDisable("ini", true);
        setDisable("pas", false);
        time = setInterval(randomico, intervalo);
        

    }

    function randomicoStop() {
        setDisable("ini", false);
        setDisable("pas", true);
        clearInterval(time);
        clearInterval(contador);
        document.getElementById('num').innerHTML = `Jogo pausado!`;
        document.getElementById('num').removeEventListener('click', SetColor);



    }

    function SetTime() {
        var nivelInterface = document.getElementById("nivel").value;
        
        
        clearInterval(time);

        switch (nivelInterface) {
            case "facil":
                randomicoTime(1500);
                tempo = 75000;
                setDisable('nivel', true);
                break;
            case "medio":
                randomicoTime(1000)
                tempo = 60000;
                setDisable('nivel', true);
                break;
            case "dificil":
                randomicoTime(600)
                tempo = 30000;
                setDisable('nivel', true);
                break;
            default:
                setDisable('nivel', false);
                
                break;
        }
        tempoTela(tempo);
        
    }


    function tempoTela(tempo) {
        contador = setInterval(function () {
            tempo -= 1000;
            if (tempo < 0) {
                clearInterval(contador);
                document.getElementById('tempo').innerHTML = ` Esgotado!`;
                document.getElementById('num').innerHTML = "";
                document.getElementById('result').innerHTML =`Acertos totais: ${totalAcertos}<br>Erros Totais: ${totalErros}<br>Numero de pares sorteados: ${par}`;
                clearInterval(time);
            } else {
                if (!isNaN(tempo)) {
                    var segundos = (tempo / 1000) % 60;
                    var minutos = Math.floor(tempo / 60000);
                    document.getElementById('tempo').innerHTML = `${minutos}:${segundos}`;
                }
            }
        }, 1000);
    }

    function StopGame() {
        clearInterval(time);
        clearInterval(contador);

        document.getElementById('tempo').innerHTML = " 00:00";
        document.getElementById('num').innerHTML = "Selecione um nivel";
        document.getElementById('acertos').innerHTML = "(0) ";
        document.getElementById('erros').innerHTML = "Erros: (0)";
        document.getElementById('numPares').innerHTML = "(0)";
        document.getElementById('num').removeEventListener('click', SetColor);
        document.getElementById('result').innerHTML = "";
        
        setDisable("ini", false);
        setDisable("pas", true);
        setDisable('nivel', false);

        acertos = 0;
        erros = 0;
        par = 0;
        
     
        
    }



    function setDisable(idElement, isDisabled) {
        var element = document.getElementById(idElement);
        if (element) {
            element.disabled = isDisabled;
        }
    }
    
    function updatePorcentagem() {
        const totalTentativas = acertos + erros;
        const percentualAcertos = (acertos / totalTentativas) * 100;
        document.getElementById('p_acertos').innerHTML = `${percentualAcertos.toFixed(2)}%`;
    }
    function displayTime() {
        var interf = document.getElementById('nivel').value;
        switch (interf) {
            case "facil":
                document.getElementById('tempo').innerHTML = `01:15`
                document.getElementById('num').innerHTML = `Facil`
                document.getElementById('num').removeEventListener('click', SetColor);
                break;
            case "medio":
                document.getElementById('tempo').innerHTML = `01:00`
                document.getElementById('num').innerHTML = `Médio`
                document.getElementById('num').removeEventListener('click', SetColor);
                break;
            case "dificil":
                document.getElementById('tempo').innerHTML = `00:30`
                document.getElementById('num').innerHTML = `Dificil`
                document.getElementById('num').removeEventListener('click', SetColor);
                break;
            default:
                document.getElementById('tempo').innerHTML = `00:00`
                document.getElementById('num').innerHTML = `Selecione um nivel!`
                document.getElementById('num').removeEventListener('click', SetColor);
                setDisable('ini',true)
                
                break;
        }
    }

    document.getElementById('ini').addEventListener('click', SetTime);
    document.getElementById('nivel').addEventListener('change', displayTime)
    document.getElementById('pas').addEventListener('click', randomicoStop);
    document.getElementById('stopGame').addEventListener('click', StopGame);
});






