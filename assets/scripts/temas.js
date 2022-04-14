onload = function(){
    let valor = localStorage.getItem("nome_local");
    let nome_do_jogador = document.getElementById("nome_do_jogador");
    nome_do_jogador.innerText = valor
    console.log(valor);

    if(valor > ""){
        console.log(valor);
}
}

let btn_animes = document.getElementById("animes");
let btn_marvel = document.getElementById("marvel");
let btn_dc = document.getElementById("dc");
let btn_times = document.getElementById("times");

let animes= [
    "goku",
    "itadori",
    "luffy",
    "naruto",
    "sasuke",
    "tanjiro",
    "zenitsu",
    "zoro",
    "todoroki",
    "deku",
];

let marvel= [
    "capita_marvel",
    "capitao_america",
    "doutor_destino",
    "doutor_estranho",
    "homem_aranha",
    "homem_de_ferro",
    "hulk",
    "pantera_negra",
    "thor",
    "viuva",
];

let dc = [
    "aquaman",
    "arqueiro",
    "batman",
    "cyborg",
    "flash",
    "lanterna_verde",
    "mulher_gaviao",
    "mulher_maravilha",
    "robin",
    "superman",
];
let times = [
    "arsenal",
    "barcelona",
    "bayern_münchen",
    "chelsea",
    "city",
    "liverpool",
    "psg",
    "real_madrid",
    "united",
    "internazionale_milano",
];

btn_animes.addEventListener("click", (e) => {
    // aqui eu guardo o nome escrito no localStorage
    localStorage.setItem("temas", JSON.stringify(animes));

    // aqui eu guardo uma string com o nemo da pasta onde está as imagens 
    //para concatenar com o diretorio das pastas no Script.js
    localStorage.setItem("pasta", JSON.stringify("animes"));
  
  });

btn_marvel.addEventListener("click", (e) => {
    // aqui eu guardo o nome escrito no localStorage
    localStorage.setItem("temas", JSON.stringify(marvel));

    localStorage.setItem("pasta", JSON.stringify("marvel"));

  
  });

btn_dc.addEventListener("click", (e) => {
    // aqui eu guardo o nome escrito no localStorage
    localStorage.setItem("temas", JSON.stringify(dc));

    localStorage.setItem("pasta", JSON.stringify("dc"));

  
  });


btn_times.addEventListener("click", (e) => {
    // aqui eu guardo o nome escrito no localStorage
    localStorage.setItem("temas", JSON.stringify(times));

    localStorage.setItem("pasta", JSON.stringify("times"));

  
  });
  