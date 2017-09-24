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
			'{"pergunta": "É fundamental modificar os costumes e as tradições", "eixo":"valores", "multiplicador":"-1"}]}}';
		var obj = JSON.parse(text);
		var vetorEconomicas = [];
		var vetorValores = [0];
		var alternar = 0;
		var ordem = 0
		var x = 0;
		var y = 0;
		var vetorHistoricoX = [0];
		var vetorHistoricoY = [0];
		var canvas;
		var ctx;
		var graficoImg = document.createElement("img");
		function inicializarQuiz(){
			var vetorEconomicas = [];
			var vetorValores = [0];
			var alternar = 0;
			var ordem = 0
			var x = 0;
			var y = 0;
			var vetorHistoricoX = [0];
			var vetorHistoricoY = [0];
		}

		window.onload = function aleatorizarPerguntas(){
			while(vetorEconomicas.length<5){
				var random = Math.ceil(Math.random()*obj.perguntas.perguntasEco.length-1);
				if(vetorEconomicas.indexOf(random) > -1) continue;
				vetorEconomicas[vetorEconomicas.length] = random;
			}
			while(vetorValores.length<5){
				var random = Math.ceil(Math.random()*obj.perguntas.perguntasVal.length-1);
				if(vetorValores.indexOf(random) > -1) continue;
				vetorValores[vetorValores.length] = random;
			}
			graficoImg.src = 'img/grafico.png';
			inicializarQuiz();
		}
		$(function(){
    		$("#iniciar").click(function(){
				document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasEco[vetorEconomicas[ordem]].pergunta;
				document.getElementsByName("concordo_m").checked = true;
    		});
    	});

		$(function(){
    		$("#avancar").click(function(){
				var ponto = 0;
				var radioButtons = document.getElementsByName("opcao");
				document.getElementsByName("concordo_m").checked = true;
				for (var i = 0; i < radioButtons.length; i++){
				    if (radioButtons[i].checked) ponto = radioButtons[i].value;
				} 
				if(alternar==1 && ordem==4){
					y += ponto*obj.perguntas.perguntasVal[vetorValores[ordem]].multiplicador;
					finalizar();
				} else if(alternar==0){
					x += ponto*obj.perguntas.perguntasEco[vetorEconomicas[ordem]].multiplicador;
					vetorHistoricoX.push(x);
					document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasVal[vetorValores[ordem]].pergunta;
					alternar++;			
				} else if(alternar==1){
					y += ponto*obj.perguntas.perguntasVal[vetorValores[ordem]].multiplicador;
					vetorHistoricoY.push(y);
					alternar--;
					ordem++;
					document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasEco[vetorEconomicas[ordem]].pergunta;	
				}
	   			});
			});

		function finalizar(){
			$('#linkModalVideo').trigger('click');
			var nomeIdeologia;
			var nomePersonagem;
			var textoIdeologia;
			var imgPersonagem;
			x = 0;
			y= 20;
			if(x<-10){
				if(y<=-4){
					//V (Anarquismo)
					nomeIdeologia = "Anarquismo"
					nomePersonagem = "V (V de Vingança)"
					textoIdeologia = "O Anarquismo se opõe toda a forma de estado, mercado e hierarquia. Sua teoria foi principalmente"+
					"desenvolvida por Mikhail Bakunin."
					imgPersonagem = "img/v.jpg"
				} else if(y<=4 && y>-4){
					//Fidel (Socialismo)
					nomeIdeologia = "Socialismo"
					nomePersonagem = "Fidel"
					textoIdeologia = "O Socialismo Marxista surgiu no século XIX, com as idéias de Marx e Engels, que buscavam combater "+
					"as desigualdades proprocinadas pelo Capitalismo."
					imgPersonagem = "img/fidel.jpg"
				} else if(y>4 && y<=12){
					//Arqueiro Verde (Socialismo)
					nomeIdeologia = "Socialismo"
					nomePersonagem = "Arqueiro Verde"
					textoIdeologia = "O socialismo marxista surgiu no século XIX, com as idéias de Marx e Engels, que buscavam combater "+
					"as desigualdades proprocinadas pelo Capitalismo."
					imgPersonagem = "img/green-arrow.jpg"
				} else if(y>12){
					//Stalin (Socialismo)
					nomeIdeologia = "Socialismo"
					nomePersonagem = "Stalin"
					textoIdeologia = "O socialismo marxista surgiu no século XIX, com as idéias de Marx e Engels, que buscavam combater "+
					"as desigualdades proprocinadas pelo Capitalismo."
					imgPersonagem = "img/stalin.jpeg"
				}
			} else if(x<0 && x>=-10){
				if(y<-12){
					//Lisa Simpson(Socialismo Libertário)
					nomeIdeologia = "Socialismo Libertário"
					nomePersonagem = "Lisa Simpson"
					textoIdeologia = "Contrapondo o marxismo, o socialismo libertário é contra a centralização da sociedade e economia"
					imgPersonagem = "img/lisa simp.jpg"
				} else if(y<-4 && y>=-12){
					//Spock (Socialismo Libertário)
					nomeIdeologia = "Socialismo Libertário"
					nomePersonagem = "Spock"
					textoIdeologia = "Contrapondo o marxismo, o socialismo libertário é contra a centralização da sociedade e economia"
					imgPersonagem = "img/spock.jpg"
				} else if(y<4 && y>=-4){
					//Detetive Gordon(Social Democracia)
					nomeIdeologia = "Social Democracia"
					nomePersonagem = "Detetive Gordon"
					textoIdeologia = ""
					imgPersonagem = "img/gordon.jpg"
				} else if(y>4 && y<=12){
					//Vargas (Trabalhismo)
					nomeIdeologia = "Trabalhismo"
					nomePersonagem = "Getulio Vargas"
					imgPersonagem = "img/getulio.jpg"
				} else if(y>12){
					//Darth Vader(Autoritarismo)
					nomeIdeologia = "Autoritarismo"
					nomePersonagem = "Darth Vader"
					imgPersonagem = "img/vader.jpg"
				}
			} else if(x<10 && x>=0){
				if(y<-12){
					//Lex Luthor (Anarco Capitalismo)
					nomeIdeologia = "Anarco Capitalismo"
					nomePersonagem = "Lex Luthor"
					imgPersonagem = "img/lex.jpg"
				} else if(y<-4 && y>=-12){
					//Homem de Ferro (Liberalismo)
					nomeIdeologia = "Liberalismo"
					nomePersonagem = "Homem de Ferro"
					imgPersonagem = "img/homem-ferro.jpg"
				} else if(y<4 && y>=-4){
					//Obama (Liberalismo)
					nomeIdeologia = "Liberalismo"
					nomePersonagem = "Obama"
					imgPersonagem = "img/barack.jpg"
				} else if(y>=4 && y<12){
					//Capitão América(Nacionalismo)
					nomeIdeologia = "Nacionalismo"
					nomePersonagem = "Capitão América"
					imgPersonagem = "img/capitão-américa.jpg"
				} else if(y>=12){
					//Rick TWD (Autoritarismo)
					nomeIdeologia = "Autoritarismo"
					nomePersonagem = "Rick Grimes"
					imgPersonagem = "img/rick-grimes.jpg"
				}
			} else if(x>=10){
				if(y<-4){
					//Senhor Sirigueijo (Anarco Capitalismo)
					nomeIdeologia = "Anarco Capitalismo"
					nomePersonagem = "Senhor Sirigueijo"
					imgPersonagem = "img/sirigueijo.jpg"
				} else if(y<4 && y>=-4){
					//Bill Gates(Liberalismo)
					nomeIdeologia = "Liberalismo"
					nomePersonagem = "Bill Gates"
					imgPersonagem = "img/gates.jpg"
				} else if(y>4 && y<=12){
					//Trump(Conservadorismo)
					nomeIdeologia = "Conservadorismo"
					nomePersonagem = "Donald Trump"
					imgPersonagem = "img/trump.jpg"
				} else if(y>12){
					//Batman(Fascismo)
					nomeIdeologia = "Fascismo"
					nomePersonagem = "Batman"
					imgPersonagem = "img/batman.jpg"
				}
			}
			document.getElementById("titulo_ideologia").innerHTML = nomeIdeologia;
			document.getElementById("titulo_personagem").innerHTML = nomePersonagem;
			document.getElementById("texto_ideologia").innerHTML = textoIdeologia;
			document.getElementById("avatar_politico").src = imgPersonagem;
			canvas = document.getElementById("canvas");
			ctx = canvas.getContext("2d");
			ctx.drawImage(graficoImg,0,0);
			ctx.arc(x.map(-20,20,41,225),y.map(-20,20,235,50),10, 0, 2*Math.PI);
			ctx.fill();
			console.log(x,y)
		}

		$(function(){
    		$("#refazer").click(function(){
				$('#linkInicio').trigger('click');
				inicializarQuiz();
    		});
    	});


		Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  			return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		}