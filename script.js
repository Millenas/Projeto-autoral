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
            imagem: "https://i.postimg.cc/vTWCHDVZ/Dorothy-Johnson.jpg",
            descricao: "Dorothy Johnson Vaughan, se formou em matemática e <b>é considerada genial na área de decodificação</b>. Ela foi computer da NASA por 28 anos, onde verificava cálculos, inclusive os realizados pelos computadores. <br><br> Dessa maneira, Dorothy dominava a computação eletrônica, programação e processo operacional da primeira máquina IBM, que era usada pelo órgão governamental. Ela auxiliou na implementação do Fortran, uma linguagem de programação criada pela NASA em 1950. Além disso, o filme “Estrelas além do tempo” conta a sua história e também o de Katherine Johnson e Mary Jackson.",
        },
        {
            nome: "Edith Clarke",
            imagem: "https://i.postimg.cc/QxHGqR4Z/edith-n.jpg",
            descricao: "Edith Clarke era formada em matemática e astronomia em 1908 e depois estudou Engenharia Civil. <br><br> Em 1919, se tornou <b>a primeira mulher com mestrado no Departamento de Engenharia Elétrica e Ciência da Computação</b>. Dessa forma, depois de dois anos registrou a sua primeira patente: uma calculadora gráfica que melhorava os métodos auxiliando nos problemas de transmissão de energia elétrica. <br><br> E ao se aposentar, em 1956, começou a dar aula na Universidade do Texas, sendo considerada a primeira mulher a ensinar engenharia.",
        },
        {
            nome: "Susan Kare",
            imagem: "https://i.postimg.cc/pVGWJQB4/3038976-isusan-kare.jpg",
            descricao: "Susan trabalhou na Apple em 1982, criando a interface gráfica para o sistema operacional do primeiro Macintosh, em 1984. <br><br> Ela também criou <b>a primeira fonte com espaçamento proporcional</b> para que fosse legível igual às letras nas páginas de um livro. Trabalha, atualmente, na Pinterest.",
        },
        {
            nome: "Susan Wojcicki",
            imagem: "https://i.postimg.cc/jjFw9V60/Susan-Wojcicki.jpg",
            descricao: "Susan Wojciki é CEO do YouTube, mas já trabalhou como gerente de marketing do Google em 1999, onde ajudou <b>a desenvolver ferramentas como o Google Imagens e Google Books.</b>",
        },
        {
            nome: "Radia Perlman",
            imagem: "https://i.postimg.cc/j2PYwZGK/radia-perlman-blog-da-engenharia-3.jpg",
            descricao: "Radia Perlman é uma cientista da computação americana conhecida também como a <b> Mãe da Internet”</b>.Ela é programadora, formada no MIT nos Estados Unidos e foi uma das únicas mulheres na sua turma, tornando-se defensora do aumento do número de mulheres no mercado da tecnologia. <br><br> Foi ela quem criou o protocolo Spanning Tree (STP), uma linguagem da Internet usada para um computador comunicar-se com o outro. Em outras palavras, nós devemos a Perlman a possibilidade de poder visitar nossos sites favoritos todos os dias. <br><br> Radia aposta na simplicidade das coisas e acredita que os aparelhos projetados devem ser o mais prático possível.</b>",
        },
        {
            nome: "Marissa Mayer",
            imagem: "https://i.postimg.cc/DzpTtWrV/marissa-mayer-forbes.jpg",
            descricao: "Marissa Mayer foi a <b>primeira engenheira do Google</b>. Seu trabalho no Google Maps, Google Books, Google Images e Gmail ajudou a construir a empresa que se tornou a número 1 de pesquisa no mundo. <br><br> Hoje, como CEO do Yahoo!, está trazendo essa empresa gigante da tecnologia de volta ao topo. O papel da mulher na história da tecnologia foi muito marcante e continua sendo todos os dias. Quer entender mais sobre programação? Leia nosso post sobre o que é programação.",
        },
        {
            nome: "Mary Kenneth Keller",
            imagem: "https://i.postimg.cc/hv5cTXGb/Sister-Mary-Kenneth-Keller-small.png",
            descricao: "Freira, Mary Kenneth Keller foi <b>a primeira mulher de nacionalidade norte-americana a ter um doutorado em Ciências da Computação</b>, consentido em 1965 na Universidade de Wisconsin-Madison. <br><br>A sua tese tinha como título <b>“Inferência indutiva dos modelos gerados pelo computador”</b>. Keller teve papel fundamental na criação da linguagem de programação BASIC, que foi utilizada por décadas para fins didáticos. <br><br>Além disso, ela fundou o departamento de Ciências da Computação na Universidade de Clarke, também nos EUA, e atuou nele até 1985, quando faleceu.",
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
        '<img alt="Foto da pessoa em questão" src="' + 
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
