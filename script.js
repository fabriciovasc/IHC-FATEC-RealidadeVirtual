
//--------------------------------------------------
// contador 2 
var counter2= 0; 
function start2() {
  var button = document.getElementById("#black");
};
function count2() { // counter "+" sum
  counter2 = parseInt(document.getElementById("count2").textContent);
  counter2++;
  document.getElementById("count2").innerHTML = counter2; 
};
function countSub2() { // counter "-" sub
  counter2 = parseInt(document.getElementById("count2").textContent);
  counter2--;
  document.getElementById("count2").innerHTML = counter2;
};
function resetcounter2(){
  counter2 = parseInt(document.getElementById("count2").textContent);
  counter2=0;
  document.getElementById("count2").innerHTML = counter2; 
}
window.addEventListener("load", start2, false);
//==============================================================================
// Seleção segunda moldura
document.querySelector("#image1-1").addEventListener("click", function () {
//(seleção do objeto        +    aguardar até que ele seja clicado)  
  
  var el = document.querySelector("#peca1_1");
  el.object3D.visible = true;
  
  if (counter2 == 0 ) {
  
    count2();
  
  }

  console.log(counter2);
});
document.querySelector("#image2-1").addEventListener("click", function () {
//(seleção do objeto        +    aguardar até que ele seja clicado)  
  
var el = document.querySelector("#peca2_2");
  
if (counter2 == 1) {
  el.object3D.visible = true;
  count2();
}
if (counter2 > 1) {
  el.object3D.visible = true;
}
 if (counter2 == 0) {
  el.object3D.visible = true;
 setTimeout(function(){
        el.object3D.visible = false;;
    }, 900); 
}    
console.log(counter2);  // controle visual da variavel para saber se a logica esta certa até esse ponto 
});
document.querySelector("#image3-1").addEventListener("click", function () {
//(seleção do objeto        +    aguardar até que ele seja clicado)  
  
var el = document.querySelector("#peca3_3");

if (counter2 == 2) { 
   el.object3D.visible = true;
   count2();
}  
if (counter2 > 2) {
  el.object3D.visible = true;
}
  
 if (counter2 < 2) {
  el.object3D.visible = true;
 setTimeout(function(){
        el.object3D.visible = false;;
    }, 900); 
}  
console.log(counter2);   
});
document.querySelector("#image4-1").addEventListener("click", function () {
//(seleção do objeto        +    aguardar até que ele seja clicado)  
  
 var el = document.querySelector("#peca4_4");

if (counter2 >= 3 ) {
  el.object3D.visible = true;
  count2();
  console.log(counter2);
  
      //if (counter2 == 4) {
         var el2 = document.querySelector("#alerta2");
         setTimeout(function(){
         el2.object3D.visible = true;
         el2.setAttribute('animation', 'property: model-opacity; dur: 1000; to: 1 ;loop: 3;' );;
           
       }, 100); 
//peca4_4

 
var el3 = document.querySelector("#peca1_1");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 360 0 ;loop: 1;' );  
var el3 = document.querySelector("#peca2_2");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 360 0 ;loop: 1;' );
var el3 = document.querySelector("#peca3_3");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 360 0 ;loop: 1;' );
var el3 = document.querySelector("#peca4_4");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 360 0 ;loop: 1;' );; 
  
  
  
setTimeout(function(){
var el2 = document.querySelector("#alerta2");  
el2.object3D.visible = false;
el2.setAttribute('animation', 'property: model-opacity; dur: 1000; to: 0 ;loop: false;' );  
resetcounter2();
var el = document.querySelector("#peca1_1");
el.object3D.visible = false;
var el = document.querySelector("#peca2_2");
el.object3D.visible = false;  
var el = document.querySelector("#peca3_3");
el.object3D.visible = false;  
var el = document.querySelector("#peca4_4");
el.object3D.visible = false;
console.log(counter2);
var el3 = document.querySelector("#peca1_1");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 0 0 ;loop: false;' );  
var el3 = document.querySelector("#peca2_2");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 0 0 ;loop: false;' );
var el3 = document.querySelector("#peca3_3");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 0 0 ;loop: false;' );
var el3 = document.querySelector("#peca4_4");
el3.setAttribute('animation', 'property: rotation; dur: 1000; to:0 0 0 ;loop: false;' );; 
    
            
       }, 4800); 
  
}  
else {
  el.object3D.visible = true;
 setTimeout(function(){
        el.object3D.visible = false;;
    }, 900); 
}

});
// Opacidade 
AFRAME.registerComponent('model-opacity', {
  schema: {default: 1.0},
  init: function () {
    this.el.addEventListener('model-loaded', this.update.bind(this));
  },
  update: function () {
    var mesh = this.el.getObject3D('mesh');
    var data = this.data;
    if (!mesh) { return; }
    mesh.traverse(function (node) {
      if (node.isMesh) {
        node.material.opacity = data;
        node.material.transparent = data < 1.0;
        node.material.needsUpdate = true;
      }
    });
  }
});
//==============================================================================
// botões 
document.querySelector("#tras").addEventListener("click", function () {
//(seleção do objeto        +    aguardar até que ele seja clicado)  
  
  var el = document.querySelector("#tras");
  // criando uma variavel e recebendo um objeto
  
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 800; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuad;elasticity:5000;' ); 
  // modificação do meu objeto 
  
});
document.querySelector("#frente").addEventListener("click", function () {
//(seleção do objeto + aguardar até que ele seja clicado)     
  
  var el = document.querySelector("#frente");
  // criar uma variavel e receber um objeto
  
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 800; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuad;elasticity:5000;' ); // modificação de atributos no meu objto
 
});
document.querySelector("#setaEsquerda").addEventListener("click", function () {
//(seleção do objeto + aguardar até que ele seja clicado)    
  var el = document.querySelector("#aviao"); // criação de uma variavel e recebendo o caminho do objeto
  el.object3D.position.x -= 0.1; // alteração de uma propriedade posição(eixo x) do objeto. "objeto = objeto - 01"
  
   var el = document.querySelector("#setaEsquerd"); // criação de uma variavel e recebendo objeto
  
  //alteração das propriedade do objeto
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});
document.querySelector("#setaDireita").addEventListener("click", function () {
//(seleção do objeto          +      aguardar até que ele seja clicado) 
  
  var el = document.querySelector("#aviao"); // criação de uma variavel e receber objeto
  el.object3D.position.x += 0.1; // alteração na propriedade ROTAÇÃO (eixo y). "eixo x = eixo x + 0.1"
  
   var el = document.querySelector("#setaDireit");
  
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});

document.querySelector("#setaBaixo").addEventListener("click", function () {
//(seleção do objeto          +      aguardar até que ele seja clicado) 
  
  var el = document.querySelector("#aviao"); // criação de uma variavel e receber objeto
  el.object3D.position.y -= 0.1; // alteração na propriedade ROTAÇÃO (eixo y). "eixo x = eixo x + 0.1"
  
   var el = document.querySelector("#setaBaix");
  
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});

document.querySelector("#setaCima").addEventListener("click", function () {
//(seleção do objeto          +      aguardar até que ele seja clicado) 
  
  var el = document.querySelector("#aviao"); // criação de uma variavel e receber objeto
  el.object3D.position.y += 0.1; // alteração na propriedade ROTAÇÃO (eixo y). "eixo x = eixo x + 0.1"
  
   var el = document.querySelector("#setaCim");
  
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});

document.querySelector("#girar").addEventListener("click", function () {
//(seleção do objeto          +      aguardar até que ele seja clicado) 
  
  var el = document.querySelector("#aviao"); // criação de uma variavel e receber objeto
  //el.object3D.visible= true; // alteração na propriedade ROTAÇÃO (eixo y). "eixo x = eixo x + 0.1"
  el.object3D.rotation.y += 90;
   var el = document.querySelector("#aparece");
  
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});

document.querySelector("#aparecer").addEventListener("click", function () {
//(seleção do objeto          +      aguardar até que ele seja clicado) 
  
  var el = document.querySelector("#aviao"); // criação de uma variavel e receber objeto
  el.object3D.visible= true; // alteração na propriedade ROTAÇÃO (eixo y). "eixo x = eixo x + 0.1"
  
   var el = document.querySelector("#aparece");
  
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});

document.querySelector("#desaparecer").addEventListener("click", function () {
//(seleção do objeto          +      aguardar até que ele seja clicado) 
  
  var el = document.querySelector("#aviao"); // criação de uma variavel e receber objeto
  el.object3D.visible= false; // alteração na propriedade ROTAÇÃO (eixo y). "eixo x = eixo x + 0.1"
  
   var el = document.querySelector("#aparece");
  
   el.setAttribute('animation', 'property: position; dur: 1200; from: 0 0.1 0; to: 0 0.1 -0.1;loop: false;' ); 
  el.setAttribute('animation', 'property: position; dur: 1000; from: 0 0.1 -0.1; to: 0 0.1 0;loop: false;easing: easeOutQuart;elasticity:5;' ); 
  
  
});
//==========================================================================
//pontos para movimentação no VR 
document.querySelector("#piso_1").addEventListener("click", function () {
//seleção do objeto + aguardar até que ele seja clicado 
  
  var el = document.querySelector("#CameraPosition"); // criação da variavel e receber objeto
  el.object3D.position.set(-5, 0, 3.5); // alterar posição do objeto 
});
document.querySelector("#piso0").addEventListener("click", function () {
//seleção do objeto + aguardar até que ele seja clicado 
  
  var el = document.querySelector("#CameraPosition"); // criação da variavel e receber objeto
  el.object3D.position.set(0, 0, 3.5); // alterar posição do objeto 
});
document.querySelector("#piso1").addEventListener("click", function () {
//seleção do objeto + aguardar até que ele seja clicado 
  
  var el = document.querySelector("#CameraPosition"); // criação da variavel e receber objeto
  el.object3D.position.set(5, 0, 3.5);// alterar posição do objeto
 
  
});
document.querySelector("#piso2").addEventListener("click", function () {
//seleção do objeto + aguardar até que ele seja clicado 
  
var el = document.querySelector("#CameraPosition"); // criação da variavel e receber objeto
el.object3D.position.set(10, 0, 3.5);// alterar posição do objeto
//-----------------------------------------
//ativar alerta 
/*var el = document.querySelector("#alerta")
el.object3D.visible = true;
var el = document.querySelector("#alerta")  
el.setAttribute('animation', 'property: model-opacity; dur: 1500; from: 1; to: 0.5 ;loop: true;' ); // alteração da da animação  */
//------------------------------------------  
  
});
//==================================================================================
/* Modify in => Desktop 
             => mobile cursor
             => mobile (VR) */ //função para verificar se esta rodando em mobile e aplicar alteraçoes 
function CheckMobile() {
    
   if (AFRAME.utils.device.isMobile() == false) // DESKTOP
   {
   var el = document.querySelector("#mycursor");
   el.setAttribute('cursor', 'rayOrigin: mouse;fuse: false');
   }
  else {
    var el = document.querySelector("#mycursor");  // MOBILE 
    el.setAttribute('cursor', 'rayOrigin: cursor;fuse: true');
    el.object3D.visible = true;
  }
  
} 
document.querySelector('a-scene').addEventListener('enter-vr', function () {
   console.log("MODO VR"); // VR 
  
    var el = document.querySelector("#mycursor");
    el.setAttribute('cursor', 'rayOrigin: cursor; fuse: true;');  
    el.object3D.visible = true;
    
    var el = document.querySelector("#CameraPosition");
    el.object3D.position.set(0, 0, 3.5);
  
    var el = document.querySelector("#piso_1");
    el.object3D.visible = true;
    
    var el = document.querySelector("#piso_11");
    el.object3D.visible = true;
  
    var el = document.querySelector("#piso0");
    el.object3D.visible = true;
    
    var el = document.querySelector("#piso01");
    el.object3D.visible = true;
  
    var el = document.querySelector("#piso1");
    el.object3D.visible = true;
    
    var el = document.querySelector("#piso11");
    el.object3D.visible = true;
  
    var el = document.querySelector("#piso2");
    el.object3D.visible = true;
    
    var el = document.querySelector("#piso21");
    el.object3D.visible = true;
    
    var el = document.querySelector("#pisoImagem1");
    el.object3D.visible = true;
  
    var el = document.querySelector("#pisoImagem2");
    el.object3D.visible = true;
    
    var el = document.querySelector("#pisoImagem3");
    el.object3D.visible = true;
  
    var el = document.querySelector("#pisoImagem4");
    el.object3D.visible = true;
    
    var el = document.querySelector("#piso_luz1");
    el.object3D.visible = true;  
  
});
//==================================================================================
// rodar a função 'checkmobile' quando a pagina é carregada
window.onload = function() {
  CheckMobile();
};
//==========================================================
// contador para a logica de montagem das peças 
var counter=0;
function start() {
  var button = document.getElementById("frente"); // trigger para dar inicio ao contador
}; // começar 
function count() { // counter "+" sum
  counter = parseInt(document.getElementById("count").textContent);
  counter++;
  document.getElementById("count").innerHTML = counter; 
}; // somar 
function countSub() { // counter "-" sub
  counter = parseInt(document.getElementById("count").textContent);
  counter--;
  document.getElementById("count").innerHTML = counter;
}; // subtrair 
window.addEventListener("load", start, false);
//=============================================
// Botao avançar '>'   
document.querySelector("#frente").addEventListener("click", (e)=>{ // seleção do objeto e aguardar o click
console.log("frente")   
count(); // chamando função somar 

//-- PEÇAS -------------------------------------------- 
//alterando visibilidade e animação(posicao) de acordo com o contador 
  
if (counter == 1) {
   var el = document.querySelector("#peca2");
    el.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0 0 0 ;loop: false;'); 
   el.object3D.visible = true;
 
  var el = document.querySelector("#image1");
  el.object3D.visible = false;
  
  var el = document.querySelector("#image2");
  el.setAttribute('visible', true)
  
 }
 //----------------------------------------------------------
  if (counter == 2) {
   var el = document.querySelector("#peca3");
    el.object3D.visible = true;
    el.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0 0 0 ;loop: false;' ); 
  
 
 
  
  }
  if (counter == 3) {
   var el = document.querySelector("#peca4");
    el.object3D.visible = true;
    el.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0 0 0 ;loop: false;' ); 
 }
 if (counter>3) { // trava para o contador não ultrapassar o numero de peças existente 
      counter = parseInt(document.getElementById("count").textContent);
      counter=3;
      document.getElementById("count").innerHTML = counter; 
 }
// IMAGENS ----------------------------------------------------  
 
  
})
//=======================================================================
// Button retroceder "<" 
document.querySelector("#tras").addEventListener("click", (e)=>{
    console.log("atras")   

  countSub(); // chamada da função subtrair 

// alteração das propriedades visibilidade, e animação(posicao) de acordo com o contador 
 if (counter == 0) {
   var el = document.querySelector("#peca2"); // criação de variavel e recebendo objeto
    el.object3D.visible = false; // alteração da visibilidade 
    el.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0.6 0 1;loop: false;' ); // alteração da da animação
   
   var el = document.querySelector("#image2"); // criação de variavel e recebendo objeto
  el.setAttribute('visible', false) // alteração de visibilidade
   var el = document.querySelector("#image1"); // criação de variavel e recebendo objeto
  el.object3D.visible = true;
   
 }
 //----------------------------------------------------------
  if (counter == 1) {
   var el = document.querySelector("#peca3");
    el.object3D.visible = false;
    el.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0.6 0 1;loop: false;' ); 
 }
  if (counter == 2) {
   var el = document.querySelector("#peca4");
    el.object3D.visible = false;
    el.setAttribute('animation', 'property: position; dur: 2000; from: 0.6 0 1; to: 0.6 0 1;loop: false;' ); 
 }
   if (counter<0) { // trava para o contador não ser menor que zero
      counter = parseInt(document.getElementById("count").textContent);
      counter=0;
      document.getElementById("count").innerHTML = counter; 
 }
})
//=============

// HAND TRACK 
/*
const button = document.getElementById('button');
const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let trackButton = document.getElementById("trackbutton");
let updateNote = document.getElementById("updatenote")
let isVideo = false;
let model = null;


const modelParams = {
    flipHorizontal: true,  // flip video (like mirror) 
    maxNumBoxes: 1,  //number of simultaneous detections     
    iouThreshold: 0.6,   // iouThreshold(average) = intersection : all object     
    scoreThreshold: 0.7,  //acuracia 
    imageScaleFactor: 0.7, //retuction video input 
}

function startVideo() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            updateNote.innerText = "Video started. Now tracking"
            isVideo = true
            audio=false // ****>>>>>VERIFICAR SE ESTA FUNCIONANDO <<<<
            runDetection()
        } else {
            updateNote.innerText = "Please enable video"
        }
    });
}

function toggleVideo() { // ON , OFF detecção
    if (!isVideo) {
        updateNote.innerText = "Starting video"
        startVideo();
    } else {
        updateNote.innerText = "Stopping video"
        handTrack.stopVideo(video)
        isVideo = false;
        updateNote.innerText = "Video stopped"
    }
}

function runDetection() {
    model.detect(video).then(predictions => {
        console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, video);
        if (isVideo) {
            requestAnimationFrame(runDetection);
        }
        if (predictions.length > 0) {
      changeData(predictions[0].bbox); //[1º x , 2º y , 3° width , 4º height]
    }
    
    });
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
    // detect objects in the image.
    model = lmodel
    updateNote.innerText = "Loaded Model!"
    trackButton.disabled = false
});
//===================================================

function changeData(value) {
  let midvalX = value[0] + value[2] / 2;
  let midvalY = value[1] + value[3] / 2;

  document.querySelector(".hand-1 #hand-x span").innerHTML = midvalX;
  document.querySelector(".hand-1 #hand-y span").innerHTML = midvalY;

  moveTheBox({ x: (midvalX - 300) / 600, y: (midvalY - 250) / 500 });
}

//Metodo para renderizar de acordo com as coordenadas
function moveTheBox(value) {
  
  
  var el = document.querySelector("#mycursor");
  el.object3D.position.x = ((window.innerWidth * value.x) / window.innerWidth) * 5;
  el.object3D.position.y = -((window.innerHeight * value.y) / window.innerHeight) * 5;
 
  renderer.render(scene, camera);
}
*/
//==============

