
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
    
    function aparecer(){
        imagem = document.getElementById("imagem");
        imagem.style.display = "block";
     }
     function aparecer1(){
        imagem1 = document.getElementById("imagem1");
        imagem.style.display = "block";
        
     }

    function calcular(){
        let peso = parseFloat(document.getElementById("p").value);
        let altura = parseFloat(document.getElementById("a").value);
        let imc =(peso/(altura*altura))

       



        if (imc >= 18.5 && imc <= 25){
            medida.innerHTML += `<p>Peso Ideal</p>`
        } else if (imc >= 25 && imc < 30) {
            medida.innerHTML +='<p>Acima do Peso</p>´'
        } else if (imc > 30) {
            medida.innerHTML += '<p>Obeso</p>'
        } else {
            medida.innerHTML +='<p>Abaixo de 18</p>'
        }

     }

