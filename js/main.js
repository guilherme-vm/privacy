console.log("javascript loaded");

var d = document;
var bg = d.body;
var pri = d.querySelectorAll('.privacy');

    //identificar cada "privacy"
var privacy1 = d.getElementById("first");
var privacy2 = d.getElementById("second");
var privacy3 = d.getElementById("third");
var privacy4 = d.getElementById("fourth");
var privacy5 = d.getElementById("word");

    //identificar as letras do último "privacy" separadamente 
var p1 = d.getElementById("p");
var p2 = d.getElementById("r");
var p3 = d.getElementById("i");
var p4 = d.getElementById("v");
var p5 = d.getElementById("a");
var p6 = d.getElementById("c");
var p7 = d.getElementById("y");





var x = window.matchMedia("(min-width: 806px)");
    //PRIVACY 1 - fundo body
        //fundo ficar preto quando o rato entra 
function priIn(x){
    if (x.matches){
        bg.style.backgroundColor="white";
    } else {
        bg.style.backgroundColor="black";
  }
}

        //fundo ficar branco quando o rato sai
function priOut(x){
    if (x.matches){
    bg.style.backgroundColor="black";
} else {
    bg.style.backgroundColor="black";
  }
}







    //PRIVACY 2 - função random
        //expessura random para o segundo "privacy"
function getRando() {
        //array com os valores da variable font
    const exp = [200, 300, 400, 500, 600, 700, 800, 900]; 
        //numero aleatorio de 0 a 7 do array
    const random = Math.floor(Math.random() * exp.length); 
        //valor aleatorio final do array
    let rando = (exp[random]); 
    console.log("getRando -> expessura", rando);
    return rando;
}
        //click para ativar a função
privacy2.addEventListener("click", function pri2() { 
        //expessura aleatória a cada click
    privacy2.style = `font-variation-settings: 'wght' ${getRando()};` 
//  privacy2.style.color = randomColors(); //a cor muda a cada click
    }
)
    //funcao para escolher uma cor aleatoria para "pri2()"
//function randomColors() {
//  return '#' + Math.floor(Math.random() * 16777215).toString(16)}


//para todas as classes PRIVACY permitir a animação ao clicar com o rato
pri.forEach((privacy) => {
        privacy.addEventListener("click", (element) => {   
		element.target.classList.add('active'); 
	});
        privacy.addEventListener('webkitAnimationEnd', (element) => {
		element.target.classList.remove('active');
	}); 
})


        //PRIVACY 4
var clicks = true;
privacy4.addEventListener("click", function coding() {
    if(clicks) { 
            //click "impar(true)", transforma o fundo no gif e esconde os restantes "privacy"s
        d.body.style.backgroundImage = "url('imgs/codeRain.gif')";
        privacy1.style.opacity = "0";
        privacy2.style.opacity = "0";
        privacy3.style.opacity = "0";
        privacy4.style = `animation: matrixShadow 0.5s infinite alternate;`
        privacy5.style.opacity = "0";
        clicks=false;
    }else{     
            //click "par(false)", volta tudo ao normal
        document.body.style.backgroundImage = "none";
        privacy1.style.opacity = "1";
        privacy2.style.opacity = "1";
        privacy3.style.opacity = "1";
        privacy4.style = `color: white;`
        privacy5.style.opacity = "1";
        clicks=true;
        }
    }
)

        //PRIVACY 5 - animação das letras e delays
privacy5.addEventListener("click",function word() {
    if(clicks) {
        p1.style.animation= "p 2s"; p1.style.animationDelay= "0.3s" ;
        p2.style.animation= "r 2s"; p2.style.animationDelay= "0.2s" ;
        p3.style.animation= "i 2s"; p2.style.animationDelay= "0.1s" ;
        p4.style.animation= "v 2s"; 
        p5.style.animation= "a 2s"; p2.style.animationDelay= "0.1s" ;
        p6.style.animation= "c 2s"; p6.style.animationDelay= "0.2s" ;
        p7.style.animation= "y 2s"; p7.style.animationDelay= "0.3s" ;
        clicks=false;
    }else{ 
        p1.style.animation= "pRev 2s"; 
        p2.style.animation= "rRev 2s"; p2.style.animationDelay= "0.1s" ;
        p3.style.animation= "iRev 2s"; p3.style.animationDelay= "0.2s" ;
        p4.style.animation= "vRev 2s";
        p5.style.animation= "aRev 2s"; p5.style.animationDelay= "0.2s" ;
        p6.style.animation= "cRev 2s"; p6.style.animationDelay= "0.1s" ;
        p7.style.animation= "yRev 2s"; 
        clicks=true;
        }    
    }
)









