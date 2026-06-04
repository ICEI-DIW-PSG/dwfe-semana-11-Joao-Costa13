
var data = {
    aluno: {
        nome: "João Pedro Sousa Costa",
        curso: "Sistema de Informação",
        turma: "Manhã",
        sobre: "Este site foi desenvolvido como trabalho prático de Desenvolvimento Web Front End. O tema escolhido foi fazer uma página sobre o Ronaldinho Gaúcho, considerado por mim um dos maiores jogadores de futebol de todos os tempos, e um ídolo do GALO 🐓",
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com"
    },
    itens: [
        {
            id: 1,
            nome: "Biografia",
            descricaoCurta: "As origens do Bruxo: infância na Vila Nova, a influência da família e os primeiros passos no futebol.",
            descricaoCompleta: "Ronaldo de Assis Moreira nasceu em 21 de março de 1980, em Porto Alegre. Criado em ambiente humilde mas rodeado de bola, superou a perda precoce do pai e, guiado pelo irmão Assis, transformou talento em genialidade para se tornar o maior meia-atacante da sua geração.",
            dadosComplementares: { Nascimento: "21/03/1980", Local: "Porto Alegre - RS", Posicao: "Meia-Atacante" },
            destaque: false,
            imagemPrincipal: "assets/img/biografiaaaaaaa.png",
            video: { titulo: "A HISTÓRIA DE RONALDINHO GAÚCHO - O BRUXO! (clique em assistir video para poder abrir o link do youtube)", url: "https://www.youtube.com/embed/frdW0xzbvzI?si=5vE24q17j3q3xoHb" },
            secoes: [
                {
                    titulo: "Infância na Vila Nova e o Futebol de Rua",
                    texto: "Nascido no bairro Vila Nova, em Porto Alegre, Ronaldinho cresceu jogando peladas em campos de terra. Era tão habilidoso que, ainda criança, driblava adultos com facilidade. Aquele contato diário com a bola moldou a intimidade absurda que ele teria com ela pelo resto da vida.",
                    imagem: "assets/img/ronaldinho_crainca_rua.png"
                },
                {
                    titulo: "A Influência do Irmão Assis",
                    texto: "Seu irmão Roberto de Assis era promessa do Grêmio e assumiu papel de pai após o falecimento precoce de Seu João. Assis guiou cada passo da carreira do irmão e depois se tornou seu empresário. A dupla foi inseparável por décadas dentro e fora dos gramados.",
                    imagem: "assets/img/assis-irmao.png"
                },
                {
                    titulo: "A Perda do Pai — Um Momento Marcante",
                    texto: "Quando tinha apenas 8 anos, Ronaldinho perdeu seu pai, João de Assis Moreira, vítima de um ataque cardíaco. Apaixonado por futebol e grande incentivador dos filhos, João teve papel fundamental nos primeiros passos de Ronaldinho no esporte. A perda marcou profundamente sua infância e se tornou uma motivação para buscar o sucesso e honrar o legado da família.",
                    imagem: "assets/img/pai-ronaldinho.png"
                },
                {
                    titulo: "Os 23 Gols e o Mundial Sub-17",
                    texto: "Nas categorias de base do Grêmio, sua genialidade chamou atenção do país inteiro quando marcou todos os 23 gols de uma vitória no campeonato infantil. Em 1997, foi o grande destaque do Brasil no título do Mundial Sub-17 no Egito.",
                    imagem: "assets/img/sub17.png"
                },
                {
                    titulo: "Estreia Profissional no Grêmio",
                    texto: "Sua estreia no time profissional do Grêmio aconteceu em 1998, na Copa Libertadores. O jovem de dentes grandes rapidamente conquistou a titularidade e o coração da torcida tricolor gaúcha, marcando gols decisivos que ninguém esperava de um garoto tão novo.",
                    imagem: "assets/img/estreia-gremio.png"
                }
            ]
        },
        {
            id: 2,
            nome: "Trajetória",
            descricaoCurta: "A caminhada épica do Bruxo pelos maiores gramados do mundo.",
            descricaoCompleta: "Uma jornada que começou nos campos de terra de Porto Alegre, passou pela França no PSG, transformou o Barcelona em potência mundial, desfilou em Milão e viveu renascimento épico no Brasil com Flamengo, Atlético Mineiro e Fluminense.",
            dadosComplementares: { Clubes: "Grêmio, PSG, Barcelona, Milan, Flamengo, Atlético-MG, Querétaro, Fluminense", Selecao: "97 Jogos / 33 Gols" },
            destaque: false,
            imagemPrincipal: "assets/img/trajetoriaaa.png",
            video: { titulo: "Veja os clubes que Ronaldinho gaúcho jogou (clique em assistir video para poder abrir o link do youtube)", url: "https://www.youtube.com/embed/Qlv709BDTdI?si=0c1U1oWcONs_mKXv" },
            secoes: [
                {
                    titulo: "Grêmio — O Surgimento de um Gênio",
                    texto: "Revelado pelo Grêmio, Ronaldinho chamou atenção desde cedo por sua habilidade incomum, dribles desconcertantes e criatividade com a bola. Em Porto Alegre, conquistou o Campeonato Gaúcho de 1999 e deu os primeiros passos de uma carreira que encantaria o mundo inteiro. Em 141 jogos pelo Tricolor, marcou 68 gols.",
                    imagem: "assets/img/gremio.jpg"
                },
                {
                    titulo: "PSG — A Europa Descobre o Bruxo",
                    texto: "Em 2001, Ronaldinho chegou ao Paris Saint-Germain em uma negociação polêmica. Na França, com gols e atuações memoráveis, abriu as portas do futebol europeu de elite. Pelo PSG, foram 77 jogos e 25 gols.",
                    imagem: "assets/img/psg.png"
                },
                {
                    titulo: "Barcelona — O Rei do Futebol Mundial",
                    texto: "Contratado pelo Barcelona em 2003, Ronaldinho liderou a reconstrução do clube e viveu o auge da carreira. Conquistou duas La Ligas, duas Supercopas da Espanha e a UEFA Champions League de 2006. No mesmo período, venceu duas vezes o prêmio de Melhor Jogador do Mundo da FIFA e a Bola de Ouro. Pelo Barça, somou 207 jogos e 94 gols.",
                    imagem: "assets/img/barcelona.png"
                },
                {
                    titulo: "AC Milan — O Campeão da Itália",
                    texto: "Em 2008, Ronaldinho desembarcou no Milan e voltou a brilhar em um dos campeonatos mais difíceis do mundo. Ao lado de grandes estrelas, conquistou o Campeonato Italiano na temporada 2010-11. Foram 95 partidas e 26 gols com a camisa rossonera.",
                    imagem: "assets/img/milan.png"
                },
                {
                    titulo: "O Retorno ao Brasil — Flamengo e Atlético Mineiro",
                    texto: "De volta ao futebol brasileiro, Ronaldinho conquistou o Campeonato Carioca e a Taça Rio pelo Flamengo em 2011. No Atlético Mineiro, viveu uma fase histórica, vencendo o Campeonato Mineiro de 2013, a Libertadores de 2013 e a Recopa Sul-Americana de 2014, tornando-se um dos maiores ídolos da história do clube. Em sua última passagem pelo Brasil, atuou brevemente pelo Fluminense em 2015. Foram 72 jogos e 28 gols pelo Flamengo, 88 jogos e 28 gols pelo Galo, além de 9 partidas pelo Fluminense.",
                    imagem: "assets/img/galo.png"
                },
                {
                    titulo: "Seleção Brasileira — Conquistando o Mundo",
                    texto: "Com a camisa da Seleção Brasileira, Ronaldinho conquistou o Mundial Sub-17 de 1997, a Copa América de 1999, a Copa do Mundo de 2002 e a Copa das Confederações de 2005. Seus dribles, gols e assistências ajudaram a eternizar uma das gerações mais talentosas da história do futebol brasileiro, a geração do penta. Pela Seleção principal, disputou 97 jogos e marcou 33 gols.",
                    imagem: "assets/img/selecao.jpg"
                }
            ]
        },
        {
            id: 3,
            nome: "Principais Conquistas",
            descricaoCurta: "Copa, Champions, Libertadores e as duas Bolas de Ouro — os principais titulos do Bruxo que praticamente zerou o futebol.",
            descricaoCompleta: "Ronaldinho é o único jogador da história a vencer Copa do Mundo, Champions League, Copa Libertadores e Bola de Ouro. Um feito inédito no futebol mundia até hoje..",
            dadosComplementares: { CopasDoMundo: "1 (2002)", Champions: "1 (2006)", Libertadores: "1 (2013)", FIFAPlayer: "2004 e 2005" },
            destaque: true,
            imagemCarrossel: "assets/img/taca_liberta.jpg",
            tituloCarrossel: "A Glória Eterna na Copa Libertadores (2013)",
            imagemPrincipal: "assets/img/conquistassss.png",
            video: { titulo: "Ronaldinho Gaúcho e seus títulos (clique em assistir video para poder abrir o link do youtube)", url: "https://www.youtube.com/embed/HVDRKSeT2H4?si=zp2DGalWyf-26BBE" },
            secoes: [
                {
                    titulo: "Copa do Mundo 2002 — O Pentacampeonato",
                    texto: "Na Coreia e Japão, foi peça decisiva do Trio R com Ronaldo e Rivaldo. Sua falta cobrada diretamente para o gol contra a Inglaterra nas quartas de final foi um dos lances mais lembrados do torneio. O Brasil ergueu a taça dourada e Ronaldinho estava no meio de tudo.",
                    imagem: "assets/img/copa.png"
                },
                {
                    titulo: "Champions League 2006 — O Trono da Europa",
                    texto: "Em Paris, no dia 17 de maio de 2006, o Barcelona derrotou o Arsenal e Ronaldinho ergueu a Orelhuda. Foi o auge de um Barcelona imbatível que ele ajudou a construir do zero, encerrando um jejum de 14 anos do clube catalão no torneio mais importante da Europa.",
                    imagem: "assets/img/champions.jpg"
                },
                {
                    titulo: "Copa Libertadores 2013 — O Milagre do Galo",
                    texto: "Disseram que ele estava acabado. No Atlético Mineiro, Ronaldinho provou o contrário. Com dribles humilhantes, assistências de outro mundo e liderança espiritual absurda, transformou o Galo em campeão continental pela segunda vez na história do clube.",
                    imagem: "assets/img/libertadores.png"
                },
                {
                    titulo: "Bola de Ouro 2005 — O Melhor do Planeta",
                    texto: "Venceu o prêmio de Melhor Jogador do Mundo pela FIFA por dois anos seguidos (2004 e 2005) e conquistou a Bola de Ouro da France Football em 2005. Era a consagração da crítica mundial: nenhum jogador jogava futebol como Ronaldinho naquele período.",
                    imagem: "assets/img/boladeouro.jpg"
                }
            ]
        },
        {
            id: 4,
            nome: "Melhores Momentos",
            descricaoCurta: "Os lances que desafiaram a física, os gols impossíveis e as jogadas que pararam o mundo.",
            descricaoCompleta: "Gols por cobertura, dribles humilhantes, passes sem olhar e a ovação no Bernabéu. Relembre os momentos em que Ronaldinho parou o planeta e arrancou reações inacreditáveis até de torcidas adversárias.",
            dadosComplementares: { JogadaAssinatura: "Elástico e passe sem olhar", Iconico: "Aplaudido no Bernabéu" },
            destaque: true,
            imagemCarrossel: "assets/img/elasticodunga.png",
            tituloCarrossel: "Lances históricos contra capitão da seleção brasileira tetracampeã (1999)",
            imagemPrincipal: "assets/img/melhores_momentosssss.png",
            video: { titulo: "10 vezes em que RONALDINHO chocou o mundo (clique em assistir video para poder abrir o link do youtube)", url: "https://www.youtube.com/embed/rtcFs1Ab7E4?si=VwLrutJP8OTLbadZ" },
            secoes: [
                {
                    titulo: "O Gol de Falta Contra a Inglaterra — Copa 2002",
                    texto: "Nas quartas de final da Copa de 2002, Ronaldinho viu o goleiro Seaman adiantado e bateu uma falta de distância absurda, encobrindo o arqueiro inglês num dos gols mais antológicos da história das Copas. O gol gerou polêmica até hoje: foi chute ou cruzamento?",
                    imagem: "assets/img/golfalta.png",
                    videoUrl: "https://www.youtube.com/embed/7hcFmS1KvRg?si=pOeB5WV0FlwqHqIl"
                },
                {
                    titulo: "Aplausos Históricos no Bernabéu (Novembro 2005)",
                    texto: "Em 19 de novembro de 2005, após destruir a defesa do Real Madrid com dois golaços solos no 3 a 0, os 80 mil torcedores merengues se levantaram para aplaudir Ronaldinho de pé. Somente Maradona havia recebido honra similar antes dele como jogador adversário.",
                    imagem: "assets/img/aplauso.png",
                    videoUrl: "https://www.youtube.com/embed/u14LTQUrioc?si=6jYFEVAyoR3KJehV"
                },
                {
                    titulo: "Flamengo 5 x 4 Santos — A Obra do Século",
                    texto: "Em 2011, protagonizou com Neymar a maior partida do século no futebol brasileiro: um épico 5 a 4 na Vila Belmiro, onde Ronaldinho marcou um hat-trick, incluindo um gol de falta por baixo da barreira. Um feito que ninguém havia visto antes.",
                    imagem: "assets/img/golfaltafla.png",
                    videoUrl: "https://www.youtube.com/embed/YOW_Dql9dyY?si=4s9OvrhfaSesTji2"
                },
                {
                    titulo: "Gol estilo futsal",
                    texto: "Na Champions de 2005, sambou na frente de Ricardo Carvalho e chutou de bico sem impulso.",
                    imagem: "assets/img/golbico.png",
                    videoUrl: "https://www.youtube.com/embed/_DR7x7g9RYg?si=ZqMCM6nxXJ_mp0AF" 
                },
                {
                    titulo: "Cobertura na Libertadores",
                    texto: "Na Libertadores de 2013, Ronaldinho mostrou que sua genialidade continuava intacta. Contra o Arsenal de Sarandí, da Argentina, percebeu o goleiro adiantado e executou uma cobertura perfeita, transformando um lance improvável em mais uma obra-prima de sua carreira.",
                    imagem: "assets/img/golcobertura.png",
                    videoUrl: "https://www.youtube.com/embed/lEAoLEFAF18?si=ZIPj3P5n76Y8xRB5"
                },
                {
                    titulo: "Olha o Que Ele Fez!",
                    texto: "Em sua estreia pela Seleção Brasileira, Ronaldinho recebeu a bola na área, aplicou uma sequência de dribles desconcertantes e fez o gol. O lance se tornou um dos momentos mais marcantes do início de sua carreira e ficou eternizado pela narração do Galvão: 'Olha o que ele fez!'.",
                    imagem: "assets/img/olhaoqueelefez.png",
                    videoUrl: "https://www.youtube.com/embed/SaV753UN8gY?si=coQaZ5kNsFXvaNcw"
                },
                {
                    titulo: "Elástico e Chapéu em Dunga",
                    texto: "Na final do Campeonato Gaúcho de 1999, Ronaldinho protagonizou dois lances que ficaram marcados em sua carreira. Contra Dunga, capitão da Seleção Brasileira campeã do mundo anos antes, em 1994 e um dos maiores ídolos da história do Internacional, aplicou um elástico invertido de letra e, em seguida, um chapéu que arrancou aplausos e entrou para os clássicos Gre-Nais.",
                    imagem: "assets/img/elasticodunga.png",
                    videoUrl: "https://www.youtube.com/embed/vq25WhUZJmQ?si=mnutTx964WjlyC0D"
                }
            ]
        },
        {
            id: 5,
            nome: "Fora de Campo",
            descricaoCurta: "A vida além das quatro linhas: música, negócios, memes e o rei dos rolês aleatórios.",
            descricaoCompleta: "O carisma do Bruxo não conhece fronteiras. Longe dos gramados, ele virou ícone da cultura pop, embaixador global da Nike, produtor musical e o personagem mais improvável das situações mais inesperadas do planeta.",
            dadosComplementares: { Projeto: "Tropa do Bruxo", Hobby: "Samba e Pagode", StatusPop: "Rei dos Memes" },
            destaque: false,
            imagemPrincipal: "assets/img/fora_de_campoooo.png",
            video: { titulo: "Por Isso Ronaldinho Gaúcho é o Rei do Rolê Aleatório || #ronaldinhogaucho (clique em assistir video para poder abrir o link do youtube)", url: "https://www.youtube.com/embed/nWNbpLFfN9Y?si=mZadiQdnUyKoF9YE" },
            secoes: [
                {
                   titulo: "A Prisão no Paraguai — Um Episódio Inusitado",
                    texto: "Em 2020, Ronaldinho e seu irmão Assis foram presos no Paraguai após entrarem no país utilizando documentos falsos. O caso ganhou repercussão mundial e manteve o ex-jogador detido por meses entre prisão e prisão domiciliar. Após um acordo com a Justiça paraguaia, ambos foram liberados e retornaram ao Brasil.",
                    imagem: "assets/img/prisao-paraguai.jpg"
                },
                {
                    titulo: "Música, Pagode e a Tropa do Bruxo",
                    texto: "Apaixonado por samba e pagode desde criança, Ronaldinho lançou o projeto musical Tropa do Bruxo, aventurando-se como produtor e compositor. Suas festas pós-jogo no Barcelona eram lendárias e a alegria de viver sempre foi parte da sua marca.",
                    imagem: "assets/img/tropadobruxo.jpg"
                },
                {
                    titulo: "Os Rolês Aleatórios Pelo Mundo",
                    texto: "Ronaldinho desenvolveu a habilidade única de aparecer nos lugares mais inesperados: tocando bongo na cerimônia de encerramento da Copa da Rússia 2018, estrelando filme de ação com Jean-Claude Van Damme e jogando torneios dentro de presídios no Paraguai.",
                    imagem: "assets/img/rolealeatorio.png"
                }
            ]
        },
        {
            id: 6,
            nome: "Legado",
            descricaoCurta: "A herança do futebol arte, o apadrinhamento de Messi e o sorriso que mudou o esporte.",
            descricaoCompleta: "O impacto de Ronaldinho não se mede em gols. Seu legado é devolver o romantismo, a ginga e a alegria a um esporte que caminhava para ser puramente físico. Influenciou Messi, Neymar, Mbappé e toda uma geração que cresceu querendo jogar como ele.",
            dadosComplementares: { Influenciados: "Messi, Neymar, Mbappé", Estilo: "Futebol Arte e Alegria" },
            destaque: true,
            imagemCarrossel: "assets/img/sorriso.png",
            tituloCarrossel: "O Sorriso que inspira gerações",
            imagemPrincipal: "assets/img/legadooo.png",
            video: { titulo: "MESSI Era muito TÍMIDO, Então RONALDINHO O AJUDOU (clique em assistir video para poder abrir o link do youtube)", url: "https://www.youtube.com/embed/GA2z49VWR6U?si=KX1ef2mKyhZh3P7X" },
            secoes: [
                {
                    titulo: "O Apadrinhamento de Lionel Messi",
                    texto: "Quando Messi chegou ao elenco principal do Barcelona, Ronaldinho o adotou como irmão mais novo. Deu a assistência para o primeiro gol profissional de Messi e o orientou nos bastidores. Sem Ronaldinho, o Messi que conhecemos hoje poderia ter sido diferente.",
                    imagem: "assets/img/ronaldinhoemessi.jpg"
                },
                {
                    titulo: "Influência Mundial",
                    texto: "Poucos jogadores influenciaram tantas gerações quanto Ronaldinho Gaúcho. Com seu futebol irreverente e genial, tornou-se inspiração para milhões de jovens ao redor do planeta. Neymar e Kylian Mbappé, dois dos maiores nomes do século XXI, já reconheceram publicamente a influência que o Bruxo teve em suas carreiras, consolidando seu lugar entre os jogadores mais admirados da história.",
                    imagem: "assets/img/neymbappe.png"
                },
                {
                    titulo: "O Impacto Eterno no Barcelona",
                    texto: "Ronaldinho tirou o Barcelona das sombras e iniciou a era dourada moderna do clube. Sem ele chegando em 2003 e transformando a cultura vencedora do Barça, provavelmente não existiria o clube que depois dominou o mundo com Guardiola e Messi.",
                    imagem: "assets/img/barcelonasemronaldinho.png"
                }
            ]
        }
    ]
};


// cabeçalho

function renderizarHeader() {
    let divOutput = document.getElementById("header-container");
    if (divOutput == null) return;

    var isIndex = document.getElementById("aluno-container") != null;
    var sobreLink = isIndex ? "#aluno-container" : "index.html#aluno-container";

    var tela = "";
    tela += '<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">';
    tela += '<div class="container">';

    // logo e o nome pra clicar
    tela += '<a class="navbar-brand d-flex align-items-center gap-2" href="index.html">';
    tela += '<img src="assets/img/foto-perfil.jpg" alt="Logo R10" width="44" height="44"';
    tela += ' class="rounded-circle border border-warning border-2" style="object-fit: cover;">';
    tela += '<div class="lh-sm">';
    tela += '<span class="fw-bold text-warning d-block" style="font-size: 1rem;">Ronaldinho Gaúcho</span>';
    tela += '<span class="text-secondary d-none d-md-block" style="font-size: 0.72rem; letter-spacing: 0.05em;">FANPAGE</span>';
    tela += '</div>';
    tela += '</a>';

    // toggler mobile
    tela += '<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false">';
    tela += '<span class="navbar-toggler-icon"></span>';
    tela += '</button>';

    // links de navegação do cabeçalho
    tela += '<div class="collapse navbar-collapse" id="navbarHeader">';
    tela += '<ul class="navbar-nav ms-auto gap-1">';
    tela += '<li class="nav-item">';
    tela += '<a class="nav-link px-3 rounded" href="index.html">Início</a>';
    tela += '</li>';
    tela += '<li class="nav-item">';
    tela += '<a class="nav-link px-3 py-1 rounded text-warning fw-semibold border border-warning" href="' + sobreLink + '">Sobre</a>';
    tela += '</li>';
    tela += '</ul>';
    tela += '</div>';

    tela += '</div>';
    tela += '</nav>';

    divOutput.innerHTML = tela;
}


// carrossel

function renderizarCarrossel() {
    let divOutputCar = document.getElementById("carousel-container");
    if (divOutputCar == null) return;

    let innerCar = "";
    let indicadores = "";
    let contadorDestaque = 0;

    for (var i = 0; i < data.itens.length; i++) {

        if (data.itens[i].destaque == true) {

            if (contadorDestaque == 0) {
                innerCar += '<div class="carousel-item active">';
                indicadores += '<button type="button" data-bs-target="#carouselR10" data-bs-slide-to="' + contadorDestaque + '" class="active"></button>';
            } else {
                innerCar += '<div class="carousel-item">';
                indicadores += '<button type="button" data-bs-target="#carouselR10" data-bs-slide-to="' + contadorDestaque + '"></button>';
            }

            innerCar += '<a href="detalhe.html?id=' + data.itens[i].id + '">';
            innerCar += '<img src="' + data.itens[i].imagemCarrossel + '" class="d-block w-100 carousel-img-r10" alt="...">';
            innerCar += '</a>';
            innerCar += '<div class="carousel-caption" style="background: rgba(0,0,0,0.6); border-radius: 8px; bottom: 8px;">';
            innerCar += '<h5 class="mb-1 fs-6 fs-md-5">' + data.itens[i].nome + '</h5>';
            innerCar += '<p class="d-none d-sm-block small mb-1">' + data.itens[i].tituloCarrossel + '</p>';
            innerCar += '<a href="detalhe.html?id=' + data.itens[i].id + '" class="btn btn-sm btn-light mb-1">Ver detalhes</a>';
            innerCar += '</div>';
            innerCar += '</div>';

            contadorDestaque++;
        }
    }

    divOutputCar.innerHTML = '<div id="carouselR10" class="carousel slide" data-bs-ride="carousel">'
        + '<div class="carousel-indicators">' + indicadores + '</div>'
        + '<div class="carousel-inner">' + innerCar + '</div>'
        + '<button class="carousel-control-prev" type="button" data-bs-target="#carouselR10" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button>'
        + '<button class="carousel-control-next" type="button" data-bs-target="#carouselR10" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button>'
        + '</div>';
}


// cards

function renderizarCards() {
    let divOutput = document.getElementById("cards-container");
    if (divOutput == null) return;

    var tela = '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">';

    for (var i = 0; i < data.itens.length; i++) {

        tela += '<div class="col">';
        tela += '<div class="card h-100 shadow-sm border-0">';
        tela += '<img src="' + data.itens[i].imagemPrincipal + '" class="card-img-top" alt="...">';
        tela += '<div class="card-body d-flex flex-column">';
        tela += '<h5 class="card-title fw-bold text-dark">' + data.itens[i].nome + '</h5>';
        tela += '<p class="card-text text-secondary small">' + data.itens[i].descricaoCurta + '</p>';
        tela += '<a href="detalhe.html?id=' + data.itens[i].id + '" class="btn btn-primary mt-auto w-100">Ver detalhes</a>';
        tela += '</div>';
        tela += '</div>';
        tela += '</div>';
    }

    tela += '</div>';
    divOutput.innerHTML = tela;
}


// informacoes aluno

function renderizarAluno() {
    let divOutput = document.getElementById("aluno-container");
    if (divOutput == null) return;

    var tela = "";

    tela += '<div class="mt-5 mb-4">';
    tela += '<h4 class="fw-bold">Informações do(a) Aluno(a)</h4>';
    tela += '<hr>';
    tela += '<div class="row">';

    // sobre
    tela += '<div class="col-md-6">';
    tela += '<h6 class="text-primary fw-bold">Sobre</h6>';
    tela += '<p class="text-muted small">' + data.aluno.sobre + '</p>';
    tela += '</div>';

    // string de autoria
    tela += '<div class="col-md-6">';
    tela += '<h6 class="text-primary fw-bold">Autoria</h6>';
    tela += '<div class="d-flex align-items-center gap-3 mb-2">';

    // foto pessoa
    tela += '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle text-secondary" viewBox="0 0 16 16">';
    tela += '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>';
    tela += '<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>';
    tela += '</svg>';

    tela += '<div>';
    tela += '<p class="mb-0 small"><strong>Aluno:</strong> ' + data.aluno.nome + '</p>';
    tela += '<p class="mb-0 small"><strong>Curso:</strong> ' + data.aluno.curso + '</p>';
    tela += '<p class="mb-0 small"><strong>Turma:</strong> ' + data.aluno.turma + '</p>';
    tela += '</div>';
    tela += '</div>';

    // redes sociais
    tela += '<h6 class="text-primary fw-bold mt-3">Redes Sociais</h6>';
    tela += '<div class="d-flex gap-2">';

    // icone Facebook
    tela += '<a href="' + data.aluno.facebook + '" target="_blank" title="Facebook">';
    tela += '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#1877F2" class="bi bi-facebook" viewBox="0 0 16 16">';
    tela += '<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>';
    tela += '</svg>';
    tela += '</a>';

    // icone do twitter
    tela += '<a href="' + data.aluno.twitter + '" target="_blank" title="Twitter">';
    tela += '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#1DA1F2" class="bi bi-twitter" viewBox="0 0 16 16">';
    tela += '<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>';
    tela += '</svg>';
    tela += '</a>';

    tela += '</div>'; 
    tela += '</div>'; 
    tela += '</div>'; 
    tela += '</div>'; 

    divOutput.innerHTML = tela;
}


// parte de detalhes

function carregarDetalhes() {
    let divTela = document.getElementById("detail-container");
    if (divTela == null) return;

    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const idL = searchParams.get("id"); // id vindo da URL

    var encontrou = false;

    for (var i = 0; i < data.itens.length; i++) {

        if (data.itens[i].id == idL) {

            encontrou = true;

            var badges = "";
            for (var chave in data.itens[i].dadosComplementares) {
                badges += '<span class="badge bg-secondary p-2 me-2 mb-2 fs-6">' + chave + ': ' + data.itens[i].dadosComplementares[chave] + '</span>';
            }

            // secoes
            var secoes = "";
            for (var s = 0; s < data.itens[i].secoes.length; s++) {

                secoes += '<div class="row align-items-center mt-4 mb-4 p-2 p-md-4 border rounded bg-white shadow-sm g-3">';
                secoes += '<div class="col-md-4 text-center">';
                secoes += '<img src="' + data.itens[i].secoes[s].imagem + '" class="img-fluid rounded shadow-sm" alt="..." style="max-height: 220px; object-fit: cover; width: 100%;" onerror="this.src=\'assets/img/biografiaaaaaaa.png\'">';
                secoes += '</div>';
                secoes += '<div class="col-md-8">';
                secoes += '<h4 class="fw-bold text-dark border-bottom pb-2">' + data.itens[i].secoes[s].titulo + '</h4>';
                secoes += '<p class="text-muted" style="text-align: justify; line-height: 1.6;">' + data.itens[i].secoes[s].texto + '</p>';

                // botao de video por lance (se tiver videoUrl na seção)
                if (data.itens[i].secoes[s].videoUrl) {
                    var tituloLance = data.itens[i].secoes[s].titulo.replace(/'/g, "\\'");
                    var urlLance = data.itens[i].secoes[s].videoUrl;
                    secoes += '<button class="btn btn-danger btn-sm mt-1" ';
                    secoes += 'onclick="abrirVideoLance(\'' + urlLance + '\', \'' + tituloLance + '\')" ';
                    secoes += 'data-bs-toggle="modal" data-bs-target="#modalVideoLance">';
                    secoes += '▶ Assistir Lance';
                    secoes += '</button>';
                }

                secoes += '</div>';
                secoes += '</div>';
            }

            // video no fim da pagina
            var video = "";
            if (data.itens[i].video != null) {
                video += '<div class="mt-5 p-4 bg-white rounded shadow-sm">';
                video += '<h3 class="fw-bold text-center text-danger mb-4">▶ ' + data.itens[i].video.titulo + '</h3>';
                video += '<div class="ratio ratio-16x9 shadow rounded overflow-hidden">';
                video += '<iframe src="' + data.itens[i].video.url + '" title="YouTube" frameborder="0" allowfullscreen></iframe>';
                video += '</div>';
                video += '</div>';
            }

            // faz o html
            var tela = "";
            tela += '<a href="index.html" class="btn btn-outline-dark mb-4">&larr; Voltar para a Vitrine</a>';

            tela += '<div class="row align-items-center mb-4 bg-dark text-white p-3 p-md-4 rounded shadow g-3">';
            tela += '<div class="col-md-5 text-center">';
            tela += '<img src="' + data.itens[i].imagemPrincipal + '" class="img-fluid rounded shadow" alt="..." style="max-height: 320px; object-fit: cover; width: 100%;">';
            tela += '</div>';
            tela += '<div class="col-md-7">';
            tela += '<h1 class="fw-bold text-warning" style="font-size: clamp(2rem, 6vw, 3.5rem);">' + data.itens[i].nome + '</h1>';
            tela += '<p class="lead mt-3 text-light" style="text-align: justify;">' + data.itens[i].descricaoCompleta + '</p>';
            tela += '<div class="mt-4 pt-3 border-top border-secondary">' + badges + '</div>';
            tela += '</div>';
            tela += '</div>';

            tela += '<h3 class="fw-bold text-center text-primary mt-5 mb-4">Tópicos Detalhados</h3>';
            tela += secoes;
            tela += video;

            // trem de video por lance
            tela += '<div class="modal fade" id="modalVideoLance" tabindex="-1" aria-labelledby="modalVideoLanceTitulo" aria-hidden="true">';
            tela += '<div class="modal-dialog modal-lg modal-dialog-centered">';
            tela += '<div class="modal-content bg-dark text-white">';
            tela += '<div class="modal-header border-secondary">';
            tela += '<h5 class="modal-title text-warning fw-bold" id="modalVideoLanceTitulo">Lance</h5>';
            tela += '<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>';
            tela += '</div>';
            tela += '<div class="modal-body p-0">';
            tela += '<div class="ratio ratio-16x9">';
            tela += '<iframe id="iframeLance" src="" title="Lance" frameborder="0" allowfullscreen></iframe>';
            tela += '</div>';
            tela += '</div>';
            tela += '</div>';
            tela += '</div>';
            tela += '</div>';

            divTela.innerHTML = tela;

            // limpar iframe ao fechar o trem de video do lance (para o vídeo parar)
            var modalEl = document.getElementById('modalVideoLance');
            if (modalEl) {
                modalEl.addEventListener('hidden.bs.modal', function () {
                    document.getElementById('iframeLance').src = '';
                });
            }

            break;
        }
    }

    if (encontrou == false) {
        divTela.innerHTML = '<div class="alert alert-danger text-center mt-5">Item não encontrado! <br><br><a href="index.html" class="btn btn-primary">Voltar para o Início</a></div>';
    }
}


// abre o trem de video com o lance específico
function abrirVideoLance(url, titulo) {
    document.getElementById('iframeLance').src = url;
    document.getElementById('modalVideoLanceTitulo').textContent = titulo;
}


// chamando as funcoes

renderizarHeader();
renderizarCarrossel();
renderizarCards();
renderizarAluno();
carregarDetalhes();
