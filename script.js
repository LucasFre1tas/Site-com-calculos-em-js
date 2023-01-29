
      function enviar(){
        let nota1 = parseInt(document.getElementById("n1").value);
        let nota2 =parseInt(document.getElementById("n2").value);
        let media=(nota1+nota2)/2
       
        document.getElementById("media").innerHTML= media

        if(media>=7 ){
            resultado.innerHTML += `<p>Você passou, parabéns!</p>`
            
        }
        else if(media>=5 && media <=6){
            resultado.innerHTML += `<p>Você esta de recuperação, recuperar!</p>`
        }else{
            resultado.innerHTML += `<p>Parece que você não passou, estude mais um pouco!</p>`
     };
    }


