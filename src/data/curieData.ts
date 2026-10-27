export interface TimelineEvent {
  year: number;
  title: string;
  subtitle: string;
  description: string;
  detailedContent: string;
  historicalContext: string;
  quote?: string;
  category: 'vida' | 'estudos' | 'descoberta' | 'premio' | 'legado';
  iconName: string;
  location: string;
}

export interface NobelPrize {
  year: number;
  category: 'Física' | 'Química';
  title: string;
  officialCitation: string;
  whySheWon: string;
  collaborators: string;
  historicalDrama: string;
  impactToday: string;
  medalColor: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1867,
    title: "Nascimento em Varsóvia",
    subtitle: "Maria Salomea Skłodowska",
    description: "Nasceu em Varsóvia, capital da Polônia (na época sob domínio do Império Russo), caçula de cinco filhos em uma família de educadores patriotas.",
    detailedContent: "Filha de Władysław Skłodowski (professor de matemática e física) e Bronisława (diretora de um internato feminino), Maria aprendeu a ler precocemente aos quatro anos. Cresceu em um país ocupado onde a cultura e a língua polonesa eram reprimidas pelo regime czarista, o que forjou sua determinação e espírito de resistência.",
    historicalContext: "Na Polônia ocupada pela Rússia czarista, mulheres eram expressamente proibidas de ingressar no ensino superior formal.",
    quote: "A vida não é fácil para nenhum de nós. Mas o que importa? É preciso perseverar e, acima de tudo, ter confiança em si mesmo.",
    category: "vida",
    iconName: "Baby",
    location: "Varsóvia, Polônia"
  },
  {
    year: 1891,
    title: "A Jornada para Paris",
    subtitle: "Ingresso na Universidade de Sorbonne",
    description: "Após anos trabalhando como governanta para financiar os estudos de medicina de sua irmã Bronisława, Marie finalmente parte para a França para estudar ciências.",
    detailedContent: "Durante os anos em Varsóvia, participou da 'Universidade Volante' (Uniwersytet Latający), uma rede universitária clandestina que educava mulheres polonesas em segredo. Ao chegar a Paris em outubro de 1891, matriculou-se na Faculdade de Ciências da Sorbonne, adotando a grafia francesa 'Marie'. Vivia num modesto sótão no Quartier Latin, enfrentando invernos congelantes e alimentando-se muitas vezes de pão e chá.",
    historicalContext: "Das milhares de matrículas na Faculdade de Ciências da Sorbonne em 1891, menos de 30 eram mulheres.",
    quote: "Era uma época inteiramente dedicada ao estudo. Quase não saía, não tinha conhecidos; vivia na solidão que sempre desejei para trabalhar com tranquilidade.",
    category: "estudos",
    iconName: "GraduationCap",
    location: "Paris, França"
  },
  {
    year: 1893,
    title: "1º Lugar em Física",
    subtitle: "Licenciatura em Ciências Físicas",
    description: "Graduou-se como a primeira colocada de sua turma de Física na prestigiada Sorbonne, superando barreiras linguísticas e financeiras.",
    detailedContent: "Com bolsa de estudos polonesa da Fundação Alexandrowitch (que ela fez questão de reembolsar integralmente mais tarde quando começou a ganhar seus primeiros salários), Marie concluiu a Licence ès Sciences Physiques com as notas mais altas da turma, impressionando os professores Gabriel Lippmann e Paul Painlevé.",
    historicalContext: "Completou a graduação em apenas dois anos de estudo intensivo de até 14 horas diárias.",
    category: "estudos",
    iconName: "Award",
    location: "Sorbonne, Paris"
  },
  {
    year: 1894,
    title: "Graduação em Matemática",
    subtitle: "2º Lugar na Licenciatura em Ciências Matemáticas",
    description: "No ano seguinte, obteve sua segunda licenciatura, conquistando o segundo lugar geral na Universidade de Sorbonne.",
    detailedContent: "A sólida formação matemática foi determinante para a rigorosa análise estatística e física de suas medições experimentais posteriores. Nesse mesmo ano, a Sociedade para o Fomento da Indústria Nacional encomendou-lhe um estudo sobre as propriedades magnéticas de vários aços, levando-a a conhecer um jovem e brilhante físico chamado Pierre Curie.",
    historicalContext: "O domínio concomitante de Física experimental e Matemática pura era raríssimo para cientistas de sua época.",
    category: "estudos",
    iconName: "Compass",
    location: "Paris, França"
  },
  {
    year: 1895,
    title: "Casamento com Pierre Curie",
    subtitle: "União científica e humana histórica",
    description: "Casa-se com Pierre Curie em Sceaux, iniciando uma das mais produtivas colaborações científicas de toda a história humana.",
    detailedContent: "Pierre Curie já era um cientista reconhecido internacionalmente pela descoberta do efeito piezoelétrico e pelas leis magnéticas (Ponto Curie). Casaram-se em uma cerimônia civil simples, sem alianças de ouro nem vestido de noiva tradicional — Marie vestiu um traje azul-escuro prático de laboratório. Em lua de mel, viajaram pela França pedalando bicicletas.",
    historicalContext: "Pierre recusou honrarias quando Marie não recebia o crédito equivalente, estabelecendo uma igualdade científica sem precedentes para o século XIX.",
    quote: "Encontrei em Pierre Curie um companheiro de espírito livre, de nobreza rara e um verdadeiro gênio da física.",
    category: "vida",
    iconName: "Heart",
    location: "Sceaux, França"
  },
  {
    year: 1898,
    title: "Descoberta do Polônio e do Rádio",
    subtitle: "Revolução na Química e Física Nuclear",
    description: "Em julho descobrem o Polônio e em dezembro o Rádio na pechblenda, cunhando a palavra 'Radioatividade'.",
    detailedContent: "Investigando minérios de pechblenda, Marie e Pierre notaram que o mineral era quatro vezes mais ativo que o urânio puro. Isso só poderia significar a presença de um novo elemento muito mais radioativo. Em julho de 1898 anunciaram o Polônio (em tributo à Polônia). Em dezembro de 1898 anunciaram o Rádio. Marie criou e popularizou o termo científico 'radioatividade'.",
    historicalContext: "O termo 'radioatividade' nasceu das anotações de laboratório de Marie Curie em abril de 1898.",
    quote: "Acreditamos que a substância que retiramos da pechblenda contém um metal até então não assinalado... Propomos chamá-lo de polônio, em homenagem ao país de origem de um de nós.",
    category: "descoberta",
    iconName: "Atom",
    location: "Rue Lhomond, Paris"
  },
  {
    year: 1903,
    title: "Primeiro Prêmio Nobel (Física)",
    subtitle: "A 1ª mulher a receber o Nobel",
    description: "Laureada juntamente com Pierre Curie e Henri Becquerel pelos estudos pioneiros sobre os fenômenos da radiação.",
    detailedContent: "Em junho de 1903, Marie defendeu sua tese de doutorado ('Pesquisas sobre substâncias radioativas'), considerada uma das mais importantes teses da história da ciência. No final do ano, a Real Academia Sueca de Ciências concedeu o Nobel. Inicialmente a comissão queria indicar apenas Pierre e Becquerel, mas Pierre enviou uma carta de protesto exigindo que a contribuição crucial de Marie fosse reconhecida.",
    historicalContext: "A tese de doutoramento de Marie Curie gerou 2 Prêmios Nobel e uma revolução na física atômica.",
    quote: "É com grande satisfação que divido esta honra, na certeza de que a radiação abrirá novos caminhos para a compreensão íntima da matéria.",
    category: "premio",
    iconName: "Trophy",
    location: "Estocolmo, Suécia"
  },
  {
    year: 1911,
    title: "Segundo Prêmio Nobel (Química)",
    subtitle: "Conquista solo e pioneirismo duplo",
    description: "Recebe seu segundo Prêmio Nobel, agora em Química, pelo isolamento do elemento rádio puro e determinação de sua massa atômica.",
    detailedContent: "Marie Curie se tornou a primeira pessoa no mundo a ganhar dois Prêmios Nobel, e até hoje permanece a única pessoa a ter sido premiada em duas ciências diferentes (Física e Química). O prêmio reconheceu o hercúleo trabalho de isolar o rádio metálico e determinar com precisão seu peso atômico (226,45 u).",
    historicalContext: "Marie viajou a Estocolmo acompanhada de sua filha adolescente Irène (que também ganharia o Nobel em 1935) para receber a láurea.",
    quote: "A descoberta do rádio foi feita por Pierre Curie e por mim... Mas o trabalho de isolá-lo no estado de sal puro foi realizado exclusivamente por mim.",
    category: "premio",
    iconName: "Sparkles",
    location: "Estocolmo, Suécia"
  },
  {
    year: 1934,
    title: "Falecimento e Legado Imortal",
    subtitle: "A vida dedicada à humanidade e à ciência",
    description: "Faleceu em 4 de julho de 1934 em Passy (Haute-Savoie), vítima de anemia aplástica provocada pela exposição crônica à radiação.",
    detailedContent: "Na época de suas pesquisas pioneiras, os efeitos biológicos letais das radiações ionizantes eram desconhecidos. Marie carregava tubos de ensaio com sais de rádio nos bolsos e guardava-os na gaveta da escrivaninha pelo fascínio do brilho fosforescente noturno. Em 1995, em homenagem aos seus serviços prestados à humanidade, seus restos mortais e os de Pierre foram transferidos solenemente para o Panthéon de Paris.",
    historicalContext: "Foi a primeira mulher sepultada no Panthéon de Paris por seus próprios méritos intelectuais.",
    quote: "Nada na vida deve ser temido, somente compreendido. Agora é hora de compreender mais, para temer menos.",
    category: "legado",
    iconName: "Flame",
    location: "Sancellemoz / Panthéon de Paris"
  }
];

export const NOBEL_PRIZES: NobelPrize[] = [
  {
    year: 1903,
    category: "Física",
    title: "Prêmio Nobel de Física de 1903",
    officialCitation: "Em reconhecimento aos extraordinários serviços prestados em suas pesquisas conjuntas sobre os fenômenos de radiação descobertos pelo Professor Henri Becquerel.",
    whySheWon: "Pelo trabalho experimental e teórico pioneiro na investigação e comprovação dos fenômenos fundamentais relacionados à radioatividade espontânea da matéria.",
    collaborators: "Dividido: 1/2 para Henri Becquerel, 1/4 para Pierre Curie e 1/4 para Marie Curie.",
    historicalDrama: "A Academia Sueca pretendia inicialmente conceder o prêmio apenas a Pierre Curie e Henri Becquerel, omitindo intencionalmente Marie Curie por ser mulher. O matemático sueco Magnus Gösta Mittag-Leffler avisou Pierre em sigilo. Pierre respondeu com uma carta categórica: recusaria veementemente o prêmio se o trabalho intelectual e prático de Marie não recebesse o devido e igualitário reconhecimento oficial.",
    impactToday: "Marcou a história mundial como a PRIMEIRA vez em que uma mulher recebeu o Prêmio Nobel, quebrando séculos de segregação feminina na ciência.",
    medalColor: "from-amber-400 via-yellow-300 to-amber-600"
  },
  {
    year: 1911,
    category: "Química",
    title: "Prêmio Nobel de Química de 1911",
    officialCitation: "Em reconhecimento aos seus serviços para o avanço da química através da descoberta dos elementos rádio e polônio, pelo isolamento do rádio e pelo estudo da natureza e dos compostos desse elemento notável.",
    whySheWon: "Pela descoberta de dois novos elementos da Tabela Periódica (Rádio e Polônio), pelo isolamento do rádio metálico em estado elementar puro e pela determinação de suas propriedades físico-químicas essenciais.",
    collaborators: "Prêmio Solo (Laureada Individual: Marie Curie).",
    historicalDrama: "Mesmo sob violentos ataques misóginos da imprensa sensacionalista parisiense da época (que tentou dissuadi-la de ir à Suécia), Marie Curie viajou com dignidade a Estocolmo acompanhada de sua filha Irène. Em seu discurso magistral, Marie homenageou o falecido marido Pierre, mas deixou claro que o isolamento do rádio e a determinação de sua massa atômica foram trabalhos exclusivamente conduzidos por ela.",
    impactToday: "Consagrou Marie Curie como a PRIMEIRA PESSOA na história a vencer dois Prêmios Nobel e a ÚNICA pessoa até os dias de hoje com lauréis em duas disciplinas científicas diferentes (Física e Química).",
    medalColor: "from-cyan-400 via-sky-300 to-blue-500"
  }
];

export const WAR_STATS = {
  mobileUnits: 20,
  fixedStations: 200,
  soldiersExamined: "1.000.000+",
  womenTechniciansTrained: 150,
  yearsActive: "1914 – 1918",
  nickname: "Petites Curies"
};
