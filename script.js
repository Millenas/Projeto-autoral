function loadDictionary() {
    var biographies = [
        {
            nome: "Ada Lovelace",
            imagem: "https://i.postimg.cc/KjrBMknm/Ada.jpg",
            descricao: " Ada Lovelace, Condessa de Lovelace e filha do escritor Lord Byron, criou o primeiro algoritmo que foi processado pela máquina analítica de Charles Babbage (idealizador da Máquina analítica), que calculava valores de funções matemáticas. <br><br> Ela viveu entre os anos de 1815 e 1852, era uma escritora e matemática inglesa que quebrou uma série de paradigmas para conseguir esse triunfo se tornando a <b>primeira programadora da história.</b>",
        },
        {
            nome: "Grace Hopper",
            imagem: "https://i.postimg.cc/nVvrK9Wt/Grace-Hopper.jpg",
            descricao: "Uma das primeiras programadoras do computador Harvard Mark I, em 1914, foi Grace Hooper. <br><br> Ela inventou <b>o primeiro compilador para a linguagem de programação</b>, o que levou ao desenvolvimento do COBOL (uma das primeiras linguagens de programação a se aproximar da linguagem humana).",
        },
        {
            nome: "Dorothy Johnson",
            imagem: "https://i.postimg.cc/NjgSLS3H/Dorothy-Johnson.png",
            descricao: "Dorothy Johnson Vaughan, se formou em matemática e <b>é considerada genial na área de decodificação</b>. Ela foi computer da NASA por 28 anos, onde verificava cálculos, inclusive os realizados pelos computadores. <br><br> Dessa maneira, Dorothy dominava a computação eletrônica, programação e processo operacional da primeira máquina IBM, que era usada pelo órgão governamental. Ela auxiliou na implementação do Fortran, uma linguagem de programação criada pela NASA em 1950. Além disso, o filme “Estrelas além do tempo” conta a sua história e também o de Katherine Johnson e Mary Jackson.",
        },
        {
            nome: "Edith Clarke",
            imagem: "https://i.postimg.cc/QxHGqR4Z/edith-n.jpg",
            descricao: "Edith Clarke era formada em matemática e astronomia em 1908 e depois estudou Engenharia Civil. <br><br> Em 1919, se tornou <b>a primeira mulher com mestrado no Departamento de Engenharia Elétrica e Ciência da Computação</b>. Dessa forma, depois de dois anos registrou a sua primeira patente: uma calculadora gráfica que melhorava os métodos auxiliando nos problemas de transmissão de energia elétrica. <br><br> E ao se aposentar, em 1956, começou a dar aula na Universidade do Texas, sendo considerada a primeira mulher a ensinar engenharia.",
        },
        {
            nome: "Susan Karen",
            imagem: "https://i.postimg.cc/pVGWJQB4/3038976-isusan-kare.jpg",
            descricao: "Susan trabalhou na Apple em 1982, criando a interface gráfica para o sistema operacional do primeiro Macintosh, em 1984. <br><br> Ela também criou <b>a primeira fonte com espaçamento proporcional</b> para que fosse legível igual às letras nas páginas de um livro. Trabalha, atualmente, na Pinterest.",
        },
        {
            nome: "Susan Wojcicki",
            imagem: "https://i.postimg.cc/jjFw9V60/Susan-Wojcicki.jpg",
            descricao: "Susan Wojciki é CEO do YouTube, mas já trabalhou como gerente de marketing do Google em 1999, onde ajudou <b>a desenvolver ferramentas como o Google Imagens e Google Books.</b>",
        }
    ];

    biographies.sort(function(a,b){
        if(a.nome < b.nome)
            return -1;
        else return true
    })
    
    var content = document.getElementById("content");

    for (var bio in biographies){
        content.innerHTML += 
        '<div class="card">' +
        '<img src="' + 
        biographies[bio].imagem + '"/>' +
        "<details>" + 
        "<summary>" +  
        biographies[bio].nome + "</summary>" +
        "<p>" +  
        biographies[bio].descricao + 
        "</p>"
        "</details></div>";

    }

}   

loadDictionary();
