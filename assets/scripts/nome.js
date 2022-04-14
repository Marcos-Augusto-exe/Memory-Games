let nome = document.getElementById("nome");
let btn = document.getElementById("proximo");
let jogador = document.getElementById("nome_do_jogador");

onload = function () {
  

  btn.addEventListener("click", (e) => {
    // aqui eu guardo o nome escrito no localStorage
    if(nome.value == 0){
      localStorage.setItem("nome_local","Player");
      nome.value = ""
    }else{
      let n = nome.value
      localStorage.setItem("nome_local", n[0].toUpperCase() +
        n.slice(1));
      nome.value = ""
  
    }

    });
   

}



