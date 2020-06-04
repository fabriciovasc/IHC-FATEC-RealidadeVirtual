window.onload = () => {
  if (AFRAME.utils.device.isMobile() == false) {
    // DESKTOP
    var el = document.getElementById("mycursor");
    el.setAttribute("cursor", "rayOrigin: mouse;fuse: false");
  } else {
    var el = document.getElementById("mycursor"); // MOBILE
    el.setAttribute("cursor", "rayOrigin: cursor;fuse: true");
    el.object3D.visible = true;
  }
};

//botao escolhido no html
const objeto = document.getElementById("peca1_1");
const botao1 = document.getElementById("setaEsquerda");
const botao2 = document.getElementById("setaDireita");
const botao3 = document.getElementById("setaBaixo");
const botao4 = document.getElementById("setaCima");
const botao5 = document.getElementById("image1-1");
const botao6 = document.getElementById("aparecer");
const botao7 = document.getElementById("desaparecer");

// funcao botao posicionamento
function andarPraEsquerda() {
  objeto.object3D.position.x -= 0.1;
}

function andarPraDireita() {
  objeto.object3D.position.x += 0.1;
}

function andarPraBaixo() {
  objeto.object3D.position.y -= 0.1;
}

function andarPraCima() {
  objeto.object3D.position.y += 0.1;
}

function aparecer() {
  objeto.object3D.visible = true;
}

function desaparecer() {
  objeto.object3D.visible = false;
}

//adicionando evento de click
botao1.addEventListener("click", andarPraEsquerda);
botao2.addEventListener("click", andarPraDireita);
botao3.addEventListener("click", andarPraBaixo);
botao4.addEventListener("click", andarPraCima);
botao5.addEventListener("click", aparecer);
botao6.addEventListener("click", aparecer);
botao7.addEventListener("click", desaparecer);
