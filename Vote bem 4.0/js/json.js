/*aqui é possível adicionar ou alterar as perguntas 
	e possíveis resultados do quiz, 
	tenha em mente o eixo e o multiplicador das perguntas
	e a posição política a ser alterada
*/
var text ='{"perguntas":{"perguntasEco" : ['+
			'{ "pergunta": "Empresas privadas funcionam melhor do que empresas públicas","eixo":"economia", "multiplicador":"1"},'+
			'{ "pergunta": "Aumentar os impostos dos ricos é uma boa forma de financiar programas sociais", "eixo":"economia", "multiplicador":"-1"},'+
			'{ "pergunta": "Cotas para as universidades são uma boa forma de corrigir desigualdades", "eixo":"economia", "multiplicador":"-1"},'+
			'{ "pergunta": "Empresários e trabalhadores devem ser livres para negociar salários e benefícios", "eixo":"economia", "multiplicador":"1"},'+
			'{ "pergunta": "Ter sucesso na vida depende mais do próprio esforço do que da origem social","eixo":"economia","multiplicador":"1"}],'+
			'"perguntasVal" : ['+
			'{"pergunta": "Se cada um buscar o melhor para si, no fim todos ganham", "eixo":"valores", "multiplicador":"-1"},'+
			'{"pergunta": "Portar armas deve ser um direito de todos","eixo":"valores","multiplicador":"1"},'+
			'{"pergunta": "Homossexuais também podem casar e formar uma família","eixo":"valores","multiplicador":"-1"},'+
			'{"pergunta": "Acreditar em Deus nos torna pessoas melhores","eixo":"valores","multiplicador":"1"},'+
			'{"pergunta": "É fundamental modificar os costumes e as tradições", "eixo":"valores", "multiplicador":"-1"}]},'+
			'"resultados": ['+
			'{ "titulo": "Fundamentalismo", '+
			'"texto": "O fundamentalismo é uma forma de governo onde os valores de uma religião são impostos a toda a população"},'+
			'{ "titulo": "Neoconservadorismo",'+
			'"texto" : "O neoconservadorismo americano é uma doutrina que surgiu com o governo de Reagan e enfatiza o imperialismo e a intervenção externa militar para assegurar o lugar dos EUA como superpotência"},'+
			'{ "titulo": "Capitalismo libertário",'+
			'"texto" : "O chamado libertarianismo é a doutrina onde o estado deve evitar ao máximo interferir tanto no mercado quanto na vida pessoal dos indíviduos"},'+
			'{ "titulo": "Anarcocapitalismo",'+
			'"texto" : "O anarco-capitalista é contra o governo pois acredita que o setor privado faria um trabalho melhor administrando a sociedade, desde escolas até tribunais."},'+
			'{ "titulo": "Paleoconservadorismo",'+
			'"texto" : "O conservador libertário mistura a visão de mercado liberal com valores conservadores"},'+
			'{ "titulo": "Conservadorismo",'+
			'"texto" :   "O conservador busca manter a ordem na sociedade preservando valores e costumes e sempre buscando mudanças de forma lenta e gradual."},'+
			'{ "titulo": "Liberalismo",'+
			'"texto" : "O liberal acredita que a melhor forma de manter a sociedade é não deixar o governo interferir na economia e nem na vida particular dos indivíduos."},'+
			'{ "titulo": "Mutualismo",'+
			'"texto" : "Teorizado por Proudhon, foi o antecessor do anarquismo, ele é a favor da propriedade privada e acreditam que a única maneira ética de se ganhar dinheiro é através do trabalho, portanto são contra empréstimos e investimentos."},'+
			'{ "titulo": "Autoritarismo",'+
			'"texto":  "O respeito pela hierarquia é uma qualidade positiva para o autoritarismo. No seu ponto de vista, é necessário sempre cumprir as ordens de seus superiores para manter uma sociedade estruturada."},'+
			'{ "titulo": "Centro",'+
			'"texto" : "O centrista é aquele que nem defende um capitalismo selvagem e nem a tomada dos meios de produção, porém acredita na democracia e no estado social"},'+
			'{ "titulo": "Ativismo",'+
			'"texto" : "Ativista é aquele que se dedica a lutar por uma causa. No caso do ativista político, é alguém que defende sua opinião no cenário político, participando de eventos sobre o tema e propondo mudanças."},'+
			'{ "titulo": "Anarquismo", '+
			'"texto": "O anarquista é contra qualquer tipo de autoridade e propriedade privada, para ele toda instituição, pública ou privada é opressiva e deve ser derrubada."},'+
			'{ "titulo": "Nacionalismo",'+
			'"texto": "O nacionalista apoia a indústria nacional e o exército. Ultimamente, posicionam-se contra a imigração em massa com o pretexto de proteger a cultura de seus países."},'+
			'{ "titulo": "Trabalhismo",'+
			'"texto" : "O trabalhismo se baseia nas políticas de Getúlio Vargas. Defende uma indústria nacional forte, protecionismo econômico e amplos direitos aos trabalhadores."},'+
			'{ "titulo": "Sindicalismo",'+
			'"texto" :  "Os sindicalistas acreditam que os trabalhadores devem se unir em sindicatos para exigirem melhores direitos e condições de trabalho, como diminuição da carga horária de trabalho e aumento da remuneração."},'+
			'{ "titulo": "Social democracia",'+
			'"texto": "Sistema em voga devido ao sucesso de países escandinavos, o Social Democrata defende altos impostos por plenos serviços públicos, como saúde e educação."},'+
			'{ "titulo": "Comunismo",'+
			'"texto": "O Comunismo é o estágio superior do Socialismo, onde após anos de uma Ditadura do Proletário, o estado mostra-se desnecessário e cessa de existir, e a sociedade passa a controlar os meios de produção"},'+
			'{ "titulo": "Socialismo",'+
			'"texto": "Os socialistas marxistas apoiam uma revolução pelos trabalhadores para que tomem os meios de produção e o Estado para si."},'+
			'{ "titulo": "Socialismo libertário",'+
			'"texto": "O socialismo libertário, ao contrário do marxismo, é contra a violência, e apoia mudanças graduais em direção da socialização dos meios de produção."},'+
			'{ "titulo": "Anarcocoletivismo",'+
			'"texto" : "Você é contra hierarquia em todos os níveis, os trabalhadores podem trabalhar em qualquer função que desejarem e e inclusive no período que acharem conveniente."}]}';
		